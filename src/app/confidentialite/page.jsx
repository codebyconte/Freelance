export const metadata = {
  title: "Politique de confidentialité – Code By Conte",
  description:
    "Code By Conte – Politique de confidentialité : données collectées, durée de conservation, droits des utilisateurs et coordonnées du responsable de traitement.",
  alternates: {
    canonical: "https://www.codebyconte.fr/confidentialite",
  },
  openGraph: {
    title: "Politique de confidentialité – Code By Conte",
    description:
      "Comment vos données personnelles sont traitées sur le site Code By Conte. Transparence, respect du RGPD et confidentialité assurée.",
    url: "https://www.codebyconte.fr/confidentialite",
    siteName: "Code By Conte",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Politique de confidentialité",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Politique de confidentialité – Code By Conte",
    description:
      "Découvrez comment sont utilisées les données collectées sur le site Code By Conte. Respect de la vie privée et du RGPD.",
    site: "@klyx_digital",
    creator: "@klyx_digital",
    images: ["https://www.codebyconte.fr/opengraph-image.png"],
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>

      <p>
        Le site www.codebyconte.fr respecte la vie privée de ses utilisateurs.
        Les données personnelles collectées via le formulaire de contact (nom,
        adresse email, message) sont utilisées uniquement pour répondre aux
        demandes. Aucune donnée n’est cédée ni vendue.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Responsable du traitement
      </h2>
      <p>
        Conte Mouctar – Auto-entrepreneur
        <br />
        Mr.conte@icloud.com
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Durée de conservation</h2>
      <p>
        Les données sont conservées pendant 12 mois maximum à des fins de suivi
        des échanges.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Droits des utilisateurs
      </h2>
      <p>
        Vous pouvez demander la suppression ou la modification de vos données à
        tout moment en écrivant à : Mr.conte@icloud.com
      </p>
    </main>
  );
}
