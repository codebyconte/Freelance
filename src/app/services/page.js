import HeroService from "@/components/section/services/HeroService";
import OffreInclue from "@/components/section/services/OffreInclue";
import Tarif from "@/components/section/services/Tarif";
import Faq from "@/components/section/services/Faq";
import Quiz from "@/components/section/services/Quiz";

export const metadata = {
  title:
    "Création de site internet professionnel | Offres sur-mesure – Code By Conte",
  description:
    "Découvrez mes offres de création de sites web sur-mesure : Présence Pro, Évolutif ou E-commerce. Sites performants, design unique, SEO et accompagnement inclus.",
  alternates: {
    canonical: "https://www.codebyconte.fr/services",
  },
  openGraph: {
    title: "Création site internet professionnel | Offres sur-mesure",
    description:
      "Comparez mes trois formules pour booster votre visibilité en ligne : site vitrine, blog évolutif ou boutique e-commerce.",
    url: "https://www.codebyconte.fr/services",
    siteName: "Code By Conte",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Offres de création de site internet à Brest",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Création site internet Brest – Offres professionnelles",
    description:
      "Sites web sur-mesure et performants pour entrepreneurs, indépendants et TPE à Brest.",
    site: "@klyx_digital",
    creator: "@klyx_digital",
    images: ["/opengraph-image.png"],
  },
};

export default function PageServices() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                name: "Site Présence Pro",
                description:
                  "Site vitrine sur-mesure pour présenter votre entreprise avec professionnalisme. Design responsive, SEO de base, formulaire et plan d’accès inclus.",
                image: "https://www.codebyconte.fr/opengraph-image.png",
                brand: {
                  "@type": "Organization",
                  name: "Code By Conte",
                },
                offers: {
                  "@type": "Offer",
                  priceCurrency: "EUR",
                  price: "1200",
                  url: "https://www.codebyconte.fr/services",
                  availability: "https://schema.org/InStock",
                  itemCondition: "https://schema.org/NewCondition",
                },
              },
              {
                "@type": "Product",
                name: "Site Structuré & Évolutif",
                description:
                  "Site web complet avec CMS intégré, blog, SEO avancé et évolutivité. Idéal pour faire grandir votre présence en ligne.",
                image: "https://www.codebyconte.fr/opengraph-image.png",
                brand: {
                  "@type": "Organization",
                  name: "Code By Conte",
                },
                offers: {
                  "@type": "Offer",
                  priceCurrency: "EUR",
                  price: "1800",
                  url: "https://www.codebyconte.fr/services",
                  availability: "https://schema.org/InStock",
                  itemCondition: "https://schema.org/NewCondition",
                },
              },
              {
                "@type": "Product",
                name: "Site E-commerce Performant",
                description:
                  "Boutique en ligne sur-mesure avec paiement sécurisé, gestion des stocks et optimisation conversion. Idéal pour vendre efficacement vos produits ou services.",
                image: "https://www.codebyconte.fr/opengraph-image.png",
                brand: {
                  "@type": "Organization",
                  name: "Code By Conte",
                },
                offers: {
                  "@type": "Offer",
                  priceCurrency: "EUR",
                  price: "2500",
                  url: "https://www.codebyconte.fr/services",
                  availability: "https://schema.org/InStock",
                  itemCondition: "https://schema.org/NewCondition",
                },
              },
            ],
          }),
        }}
      />
      <HeroService />
      <Tarif />
      <OffreInclue />
      <Quiz />
      <Faq />
    </main>
  );
}
