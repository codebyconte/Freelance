import { Hero } from "@/components/section/home/Hero";
import { ServicesApercu } from "@/components/section/home/ServicesApercu";
import { Probleme } from "@/components/section/home/Probleme";
import PourquoiMoi from "@/components/section/home/PourquoiMoi";
import Cta from "@/components/section/home/Cta";
import { JeuxGratter } from "@/components/section/home/JeuxGratter";
import { Bento } from "@/components/section/home/Bento";
import { Etape } from "@/components/section/home/Etape";
import { Garantie } from "@/components/section/home/Garantie";
import { Faq } from "@/components/section/home/Faq";

export const metadata = {
  title: "Création site internet Brest : développeur sur mesure",
  description:
    "Expert en création de site internet à Brest. Sites sur mesure, rapides, optimisés SEO pour booster votre visibilité locale. ",
  alternates: {
    canonical: "https://www.codebyconte.fr/",
  },
  openGraph: {
    title: "Création site internet Brest : développeur sur mesure",
    description:
      "Expert en création de site internet à Brest. Sites sur mesure, rapides, optimisés SEO pour booster votre visibilité locale. ",
    url: "https://www.codebyconte.fr",
    siteName: "Code By Conte",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du site Code By Conte",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Création site internet Brest : développeur sur mesure",
    description:
      "Expert en création de site internet à Brest. Sites sur mesure, rapides, optimisés SEO pour booster votre visibilité locale. ",
    site: "@klyx_digital",
    creator: "@klyx_digital",
    images: ["/opengraph-image.png"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Code By Conte",
    founder: "Conte Mouctar",
    foundingLocation: "Brest",
    hasCredential: "BAC+2 - Développeur informatique",
    url: "https://www.codebyconte.fr/",
    logo: "https://www.codebyconte.fr/Logo.svg",
    image: "https://www.codebyconte.fr/opengraph-image.png",
    description:
      "Expert en création de site internet à Brest. Sites sur mesure, rapides, optimisés SEO pour booster votre visibilité locale. ",
    openingHours: "Mo-Su 08:00-18:00",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brest",
      postalCode: "29200",
      addressCountry: "FR",
    },
    companyRegistration: "82893014900020 - INSEE",
    areaServed: {
      "@type": "Place",
      name: "France",
    },
    telephone: "+33 6 11 23 51 90",
    email: "mr.conte@icloud.com",
    paymentAccepted: ["Cash", "Credit Card", "Cryptocurrency"],
    currenciesAccepted: "EUR",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quel est le prix pour la création d'un site internet professionnel à Brest ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le tarif pour un site vitrine à Brest démarre autour de 1200€. Il dépend de la complexité, des fonctionnalités et du nombre de pages. Un devis gratuit vous est fourni sous 24h.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps faut-il pour créer mon site web à Brest ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La création d’un site internet à Brest prend en moyenne entre 2 et 6 semaines, selon les spécificités du projet et la fourniture des contenus.",
        },
      },
      {
        "@type": "Question",
        name: "Dois-je fournir le texte et les images pour mon site ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fournir vos textes et visuels est idéal, mais je vous accompagne pour structurer vos idées, optimiser le SEO et vous conseiller des images de qualité ou des photographes à Brest.",
        },
      },
      {
        "@type": "Question",
        name: "Que se passe-t-il une fois mon site web livré ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Une fois en ligne, vous êtes propriétaire du site. Vous avez droit à une période de garantie et pouvez gérer le site vous-même ou opter pour un forfait de maintenance.",
        },
      },
      {
        "@type": "Question",
        name: "Proposez-vous des facilités de paiement pour la création de site ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, le paiement en 2 ou 3 fois sans frais est possible pour faciliter votre projet de site internet à Brest.",
        },
      },
    ],
  };

  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Probleme />
      <Bento />
      <PourquoiMoi />
      <Etape />
      <ServicesApercu />
      <Garantie />
      <Faq />
      <JeuxGratter />
      <Cta />
    </main>
  );
}
