import Link from "next/link";

export const metadata = {
  title: "Mentions légales – Code By Conte",
  description:
    "Informations légales du site Code By Conte : éditeur, SIRET, hébergeur (Vercel), propriété intellectuelle. Développeur web freelance à Brest.",
  alternates: {
    canonical: "https://www.codebyconte.fr/mentions-legales",
  },
  openGraph: {
    title: "Mentions légales – Code By Conte",
    description:
      "Toutes les informations légales relatives au site Code By Conte. Editeur : Conte Mouctar, freelance à Brest. Hébergement : Vercel.",
    url: "https://www.codebyconte.fr/mentions-legales",
    siteName: "Code By Conte",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Mentions légales",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mentions légales – Code By Conte",
    description:
      "Informations sur l’éditeur, l’hébergeur et la propriété intellectuelle du site Code By Conte.",
    site: "@klyx_digital",
    creator: "@klyx_digital",
    images: ["https://www.codebyconte.fr/opengraph-image.png"],
  },
};

export default function MentionsLegales() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

      <p>
        <strong>Éditeur du site :</strong> Mouctar Conte – Auto-entrepreneur
      </p>
      <p>
        <strong>Directeur de la publication :</strong> Mouctar Conte
      </p>
      <p>
        <strong>SIRET :</strong> 828 930 149 00012
      </p>
      <p>
        <strong>TVA intracommunautaire :</strong> Non applicable (article 293 B
        du CGI)
      </p>
      <p>
        <strong>Adresse postale :</strong> Sur simple demande
      </p>
      <p>
        <strong>Email :</strong>{" "}
        <Link
          href="mailto:Mr.conte@icloud.com"
          className="text-blue-600 underline"
        >
          Mr.conte@icloud.com
        </Link>
      </p>
      <p>
        <strong>Site web :</strong>{" "}
        <Link
          href="https://www.codebyconte.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://www.codebyconte.fr
        </Link>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Hébergement</h2>
      <p>
        <strong>Hébergeur :</strong> Vercel Inc.
        <br />
        340 S Lemon Ave #4133
        <br />
        Walnut, CA 91789, USA
        <br />
        <Link
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://vercel.com
        </Link>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Propriété intellectuelle
      </h2>
      <p>
        L’ensemble des contenus (textes, images, logos, code source,
        graphismes…) de ce site est protégé par le droit de la propriété
        intellectuelle ; toute reproduction, représentation, modification ou
        adaptation, sous quelque forme que ce soit, est strictement interdite
        sauf autorisation écrite préalable de l’éditeur.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Données personnelles &amp; RGPD
      </h2>
      <p>
        Ce site ne collecte pas de données personnelles à l’insu de
        l’utilisateur. Les données éventuellement recueillies via le formulaire
        de contact (nom, email, message) sont utilisées exclusivement pour vous
        répondre et ne sont jamais transmises à des tiers.
      </p>
      <p>
        Conformément au RGPD (art. 15 à 22), vous disposez d’un droit d’accès,
        de rectification, d’effacement, de limitation, d’opposition et de
        portabilité de vos données. Pour l’exercer, contactez :{" "}
        <Link
          href="mailto:Mr.conte@icloud.com"
          className="text-blue-600 underline"
        >
          Mr.conte@icloud.com
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Limitation de responsabilité
      </h2>
      <p>
        L’éditeur ne saurait être tenu responsable des erreurs ou omissions dans
        les contenus publiés, ni des dommages directs ou indirects résultant de
        l’usage ou de l’impossibilité d’utiliser ce site. Les informations sont
        fournies “en l’état” et peuvent évoluer sans préavis.
      </p>
    </main>
  );
}
