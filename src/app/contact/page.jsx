import { FormContact } from "./FormContact";

export const metadata = {
  title: "Contact – Développeur web à Brest | Code By Conte",
  description:
    "Contactez-moi pour discuter de votre projet web à Brest. Je réponds rapidement pour vous proposer un site performant, moderne et adapté à vos besoins.",
  alternates: {
    canonical: "https://codebyconte.fr/contact",
  },
  openGraph: {
    title: "Contact – Développeur web à Brest",
    description:
      "Échangeons sur votre projet de site web à Brest. Je suis à votre écoute pour créer une solution digitale sur mesure.",
    url: "https://codebyconte.fr/contact",
    siteName: "Code By Conte",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Contactez Conte Mouctar – développeur web à Brest",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact – Code By Conte",
    description:
      "Développeur web freelance à Brest, disponible pour vos projets de création de site internet.",
    site: "@klyx_digital",
    creator: "@klyx_digital",
    images: ["/opengraph-image.png"],
  },
};

export default function Page() {
  return (
    <main>
      <FormContact />
    </main>
  );
}
