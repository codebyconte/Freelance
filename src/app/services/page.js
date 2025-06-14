import { Faq } from "@/components/section/services/Faq";
import { Quiz } from "@/components/section/services/Quiz";
import { GrilleTarif } from "@/components/section/services/GrilleTarif";

export const metadata = {
  title:
    "Création de site internet professionnel | Offres sur-mesure – Code By Conte",
  description:
    "Création de site internet professionnel à Brest | Code By Conte",
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
                name: "Site Vitrine Essentiel",
                description:
                  "La solution idéale pour lancer votre activité, présenter vos services et être enfin visible sur internet avec un site professionnel et rapide.",
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
                name: "Site Visibilité Pro",
                description:
                  "Pour les entreprises qui veulent attirer plus de clients grâce à Google, avec un blog pour démontrer votre expertise et un design sur-mesure.",
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
                name: "Site E-commerce & Réservation",
                description:
                  "Vendez vos produits ou services en ligne 24/7. Une plateforme complète pour gérer vos ventes, vos clients et vos réservations sans effort.",
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
      <GrilleTarif />
      <Quiz />
      <Faq />
    </main>
  );
}
