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
  },
  twitter: {
    card: "summary",
    title: "Mentions légales – Code By Conte",
    description:
      "Informations sur l’éditeur, l’hébergeur et la propriété intellectuelle du site Code By Conte.",
    site: "@klyx_digital",
    creator: "@klyx_digital",
  },
};

export default function MentionsLegales() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

      <p>
        <strong>Éditeur du site :</strong> Conte Mouctar – Auto-entrepreneur
      </p>
      <p>
        <strong>SIRET :</strong> 82893014900012
      </p>
      <p>
        <strong>Email :</strong> Mr.conte@icloud.com
      </p>
      <p>
        <strong>Site web :</strong> https://www.codebyconte.fr
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Hébergement</h2>
      <p>
        Le site est hébergé par :
        <br />
        Vercel Inc.
        <br />
        340 S Lemon Ave #4133
        <br />
        Walnut, CA 91789, USA
        <br />
        https://vercel.com
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Propriété intellectuelle
      </h2>
      <p>
        Le contenu de ce site (textes, images, code, etc.) est protégé par le
        droit d’auteur. Toute reproduction ou utilisation non autorisée est
        interdite.
      </p>
    </main>
  );
}
