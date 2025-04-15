import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { siret } = await req.json();
    const apiKey = process.env.SIRENE_API_KEY;

    const response = await fetch(
      `https://api.insee.fr/api-sirene/3.11/siret/${siret}`,
      {
        method: "GET",
        headers: {
          "X-INSEE-Api-Key-Integration": apiKey,
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `Entreprise non trouvée ` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erreur API SIRENE :", error);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
