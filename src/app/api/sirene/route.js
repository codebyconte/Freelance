import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { siret } = await req.json();
    const apiKey = process.env.SIRENE_API_KEY;

    if (!siret) {
      return NextResponse.json(
        { error: "SIRET invalide. Doit contenir 14 chiffres." },
        { status: 400 }
      );
    }

    const etablissementData = await getEntrepriseBySiret(apiKey, siret);
    if (!etablissementData?.etablissement) {
      return NextResponse.json(
        { error: "Établissement introuvable ou erreur d'API." },
        { status: 404 }
      );
    }

    const etablissement = etablissementData.etablissement;

    const libelleCommune =
      etablissement?.adresseEtablissement?.libelleCommuneEtablissement;
    const activiteUniteLegale =
      etablissement?.uniteLegale?.activitePrincipaleUniteLegale;

    const concurrents = await getConcurrentsByCommuneAndActivity({
      apiKey,
      libelleCommune,
      activiteUniteLegale,
    });

    const stats = calculerStatutsJuridiques(concurrents);

    return NextResponse.json({
      etablissement,
      concurrents,
      statistiques: stats,
      message:
        concurrents.length > 0
          ? `${concurrents.length} concurrent(s) trouvé(s).`
          : "Aucun concurrent trouvé dans cette commune et ce secteur.",
    });
  } catch (error) {
    console.error("Erreur route SIRENE:", error);
    return NextResponse.json(
      { error: "Erreur interne", details: error.message },
      { status: 500 }
    );
  }
}

// -------------------------------------------------------------
// UTILITAIRES
// -------------------------------------------------------------

async function getEntrepriseBySiret(apiKey, siret) {
  const url = `https://api.insee.fr/api-sirene/3.11/siret/${siret}`;
  const headers = {
    "X-INSEE-Api-Key-Integration": apiKey,
    Accept: "application/json",
  };

  const res = await fetch(url, { method: "GET", headers });
  if (!res.ok) return null;

  return await res.json();
}

async function getConcurrentsByCommuneAndActivity({
  apiKey,
  libelleCommune,
  activiteUniteLegale,
}) {
  try {
    const baseActivite = activiteUniteLegale?.slice(0, 2) + "*";

    const query = `
      libelleCommuneEtablissement:"${libelleCommune}" 
      AND activitePrincipaleUniteLegale:${baseActivite}
      AND etatAdministratifUniteLegale:"A"
    `.replace(/\s+/g, " ");

    const url = `https://api.insee.fr/api-sirene/3.11/siret?q=${encodeURIComponent(
      query
    )}&nombre=100`;

    const headers = {
      "X-INSEE-Api-Key-Integration": apiKey,
      Accept: "application/json",
    };

    const res = await fetch(url, { method: "GET", headers });
    if (!res.ok) return [];

    const data = await res.json();
    return data.etablissements || [];
  } catch (err) {
    console.error("Erreur getConcurrentsByCommuneAndActivity:", err);
    return [];
  }
}

function calculerStatutsJuridiques(concurrents) {
  const statutsJuridiques = {};

  concurrents.forEach((etab) => {
    const statut = etab.uniteLegale?.categorieJuridiqueUniteLegale || "Inconnu";
    statutsJuridiques[statut] = (statutsJuridiques[statut] || 0) + 1;
  });

  return Object.entries(statutsJuridiques)
    .map(([code, nombre]) => ({ code, nombre }))
    .sort((a, b) => b.nombre - a.nombre);
}
