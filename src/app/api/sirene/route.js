import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    let { siret } = await req.json();
    siret = siret.replace(/\s/g, "");
    const apiKey = process.env.SIRENE_API_KEY;

    if (!/^\d{14}$/.test(siret)) {
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
    const nomEntreprise = etablissement.uniteLegale.denominationUniteLegale;

    const concurrents = await getConcurrentsByCommuneAndActivity({
      apiKey,
      libelleCommune,
      activiteUniteLegale,
    });

    const stats = calculerStatutsJuridiques(concurrents);

    return NextResponse.json({
      etablissement,
      nomEntreprise,
      concurrents,
      statistiques: stats,
      message:
        concurrents.length > 0
          ? `Plus de ${concurrents.length} entreprises similaires exercent dans ce secteur d’activité a ${libelleCommune}`
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
    const baseActivite = activiteUniteLegale;

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
  } catch (error) {
    console.error("Erreur getConcurrentsByCommuneAndActivity:", error);
    return [];
  }
}

const CODES_JURIDIQUES = {
  1000: "Entrepreneur individuel",
  5485: "Société par actions simplifiée (SAS)",
  5498: "Société par actions simplifiée unipersonnelle (SASU)",
  5420: "Société à responsabilité limitée (SARL)",
  5720: "Société anonyme à directoire et conseil de surveillance (SA)",
  5710: "Société anonyme à conseil d'administration (SA)",
  9220: "Association déclarée",
  9300: "Organisme de droit étranger",
  7210: "Groupement d'intérêt économique (GIE)",
  7110: "Société civile",
  7312: "Profession libérale",
  2700: "Groupement agricole d'exploitation en commun (GAEC)",
  2210: "Exploitant agricole",
  9999: "Autre ou non spécifié",
};

function calculerStatutsJuridiques(concurrents) {
  const statutsJuridiques = {};

  concurrents.forEach((etab) => {
    const statut = etab.uniteLegale?.categorieJuridiqueUniteLegale || "Inconnu";
    statutsJuridiques[statut] = (statutsJuridiques[statut] || 0) + 1;
  });

  return Object.entries(statutsJuridiques)
    .map(([code, nombre]) => ({
      code,
      libelle: CODES_JURIDIQUES[code] || "Code inconnu",
      nombre,
    }))
    .sort((a, b) => b.nombre - a.nombre);
}
