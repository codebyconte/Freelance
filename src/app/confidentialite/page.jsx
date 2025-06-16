import Link from "next/link";

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
      <h1 className="text-3xl font-bold mb-4">Politique de confidentialité</h1>
      <p className="text-sm text-gray-500 mb-8">
        Dernière mise à jour : 16/06/2025
      </p>

      <p className="mb-6">
        Le site <strong>www.codebyconte.fr</strong> respecte la vie privée de
        ses visiteurs et s’engage à protéger les données personnelles
        collectées. Cette politique détaille les pratiques de collecte,
        d’utilisation et de partage de vos informations.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        1. Responsable du traitement
      </h2>
      <p className="mb-6">
        <strong>Éditeur :</strong> Mouctar Conte – Auto-entrepreneur
        <br />
        <strong>Email :</strong>{" "}
        <Link
          href="mailto:Mr.conte@icloud.com"
          className="underline text-blue-600"
        >
          Mr.conte@icloud.com
        </Link>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Données collectées</h2>
      <p className="mb-4">Nous collectons les données suivantes :</p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Données de contact</strong> : nom, email et message via le
          formulaire.
        </li>
        <li>
          <strong>Données de connexion</strong> : adresse IP, pages visitées,
          durée de session.
        </li>
        <li>
          <strong>Cookies &amp; traceurs</strong> : pour analyser l’usage du
          site (Google Analytics, etc.).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Finalités &amp; bases légales
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Répondre aux demandes</strong> (formulaire) – Exécution du
          contrat / intérêt légitime.
        </li>
        <li>
          <strong>Analyse d’audience</strong> (Google Analytics) – Consentement.
        </li>
        <li>
          <strong>Amélioration du service</strong> – Intérêt légitime.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        4. Durée de conservation
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Données de contact :</strong> 12 mois.
        </li>
        <li>
          <strong>Données de connexion :</strong> 13 mois (conformément aux
          recommandations CNIL).
        </li>
        <li>
          <strong>Cookies :</strong> 13 mois maximum.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        5. Destinataires des données
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>L’éditeur du site (Mouctar Conte).</li>
        <li>Hébergeur (Vercel Inc.).</li>
        <li>Prestataires tiers (ex. Google Analytics, outils d’email).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Sécurité</h2>
      <p className="mb-6">
        Nous mettons en œuvre des mesures techniques et organisationnelles pour
        garantir la confidentialité, l’intégrité et la disponibilité de vos
        données.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Transferts hors UE</h2>
      <p className="mb-6">
        Les données hébergées par Vercel (États-Unis) bénéficient des clauses
        contractuelles types validées par la Commission Européenne.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        8. Droits des utilisateurs
      </h2>
      <p className="mb-4">
        Conformément au RGPD, vous disposez des droits suivants :
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Droit d’accès, de rectification et d’effacement.</li>
        <li>Droit à la limitation du traitement et d’opposition.</li>
        <li>Droit à la portabilité des données.</li>
      </ul>
      <p className="mb-6">
        Pour exercer vos droits, contactez :
        <br />
        <Link
          href="mailto:Mr.conte@icloud.com"
          className="underline text-blue-600"
        >
          Mr.conte@icloud.com
        </Link>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Réclamation</h2>
      <p className="mb-6">
        Vous pouvez également adresser une réclamation à la CNIL :
        <br />
        <Link
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          https://www.cnil.fr
        </Link>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">10. Modifications</h2>
      <p className="mb-6">
        Cette politique peut être mise à jour. La date de « Dernière mise à jour
        » en haut de la page reflète la version en vigueur.
      </p>
    </main>
  );
}
