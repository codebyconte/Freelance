import { Faq } from "@/components/section/services/Faq";
import { Quiz } from "@/components/section/services/Quiz";
import { GrilleTarif } from "@/components/section/services/GrilleTarif";

export const metadata = {
  title: "Tarifs & prix des services web à Brest",
  description:
    "Découvrez nos prix pour la création, maintenance et SEO de site web à Brest. Offres sur-mesure et transparentes, adaptées à votre budget. Devis gratuit.",
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
                sku: "SITE-VITRINE-ESSENTIEL",
                brand: {
                  "@type": "Brand",
                  name: "Code By Conte",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  bestRating: "5",
                  ratingCount: "14",
                },
                review: [
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Anoil El fadili" },
                    datePublished: "2025-06-01", // Date approximative
                    reviewBody:
                      "Tout est bien clair est détailler je recommande vraiment 5/5",
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Erick Vincent" },
                    datePublished: "2025-06-01",
                    reviewBody: "Au top vraiment !!",
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "daloba conte" },
                    datePublished: "2025-05-25",
                    reviewBody: "Service impeccable",
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                  },
                ],
                offers: {
                  "@type": "Offer",
                  url: "https://www.codebyconte.fr/services",
                  priceCurrency: "EUR",
                  price: "1200",
                  priceValidUntil: "2025-12-31",
                  availability: "https://schema.org/InStock",
                  itemCondition: "https://schema.org/NewCondition",
                  hasMerchantReturnPolicy: {
                    "@type": "MerchantReturnPolicy",
                    applicableCountry: "FR",
                    returnPolicyCategory:
                      "https://schema.org/MerchantReturnFiniteReturnWindow",
                    merchantReturnDays: 14,
                    returnMethod: "https://schema.org/ReturnByMail",
                    returnFees: "https://schema.org/FreeReturn",
                  },
                  shippingDetails: {
                    "@type": "OfferShippingDetails",
                    shippingRate: {
                      "@type": "MonetaryAmount",
                      value: "0",
                      currency: "EUR",
                    },
                    shippingDestination: {
                      "@type": "DefinedRegion",
                      addressCountry: "FR",
                    },
                  },
                },
              },
              {
                "@type": "Product",
                name: "Site Visibilité Pro",
                description:
                  "Pour les entreprises qui veulent attirer plus de clients grâce à Google, avec un blog pour démontrer votre expertise et un design sur-mesure.",
                image: "https://www.codebyconte.fr/opengraph-image.png",
                sku: "SITE-VISIBILITE-PRO",
                brand: {
                  "@type": "Brand",
                  name: "Code By Conte",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  bestRating: "5",
                  ratingCount: "14",
                },
                review: [
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "Wilfried Jene" },
                    datePublished: "2025-06-01",
                    reviewBody: "Je recommande!!!",
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                  },
                  {
                    "@type": "Review",
                    author: { "@type": "Person", name: "jordan arnoult" },
                    datePublished: "2025-05-25",
                    reviewBody: "Au top 🔥",
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                  },
                ],
                offers: {
                  "@type": "Offer",
                  url: "https://www.codebyconte.fr/services",
                  priceCurrency: "EUR",
                  price: "1800",
                  priceValidUntil: "2025-12-31",
                  availability: "https://schema.org/InStock",
                  itemCondition: "https://schema.org/NewCondition",
                  hasMerchantReturnPolicy: {
                    "@type": "MerchantReturnPolicy",
                    applicableCountry: "FR",
                    returnPolicyCategory:
                      "https://schema.org/MerchantReturnFiniteReturnWindow",
                    merchantReturnDays: 14,
                    returnMethod: "https://schema.org/ReturnByMail",
                    returnFees: "https://schema.org/FreeReturn",
                  },
                  shippingDetails: {
                    "@type": "OfferShippingDetails",
                    shippingRate: {
                      "@type": "MonetaryAmount",
                      value: "0",
                      currency: "EUR",
                    },
                    shippingDestination: {
                      "@type": "DefinedRegion",
                      addressCountry: "FR",
                    },
                  },
                },
              },
              {
                "@type": "Product",
                name: "Site E-commerce & Réservation",
                description:
                  "Vendez vos produits ou services en ligne 24/7. Une plateforme complète pour gérer vos ventes, vos clients et vos réservations sans effort.",
                image: "https://www.codebyconte.fr/opengraph-image.png",
                sku: "SITE-ECOMMERCE-RESERVATION",
                brand: {
                  "@type": "Brand",
                  name: "Code By Conte",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  bestRating: "5",
                  ratingCount: "14",
                },
                offers: {
                  "@type": "Offer",
                  url: "https://www.codebyconte.fr/services",
                  priceCurrency: "EUR",
                  price: "2500",
                  priceValidUntil: "2025-12-31",
                  availability: "https://schema.org/InStock",
                  itemCondition: "https://schema.org/NewCondition",
                  hasMerchantReturnPolicy: {
                    "@type": "MerchantReturnPolicy",
                    applicableCountry: "FR",
                    returnPolicyCategory:
                      "https://schema.org/MerchantReturnFiniteReturnWindow",
                    merchantReturnDays: 14,
                    returnMethod: "https://schema.org/ReturnByMail",
                    returnFees: "https://schema.org/FreeReturn",
                  },
                  shippingDetails: {
                    "@type": "OfferShippingDetails",
                    shippingRate: {
                      "@type": "MonetaryAmount",
                      value: "0",
                      currency: "EUR",
                    },
                    shippingDestination: {
                      "@type": "DefinedRegion",
                      addressCountry: "FR",
                    },
                  },
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
