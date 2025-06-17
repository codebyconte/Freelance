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
                "@type": [
                  "Organization",
                  "ProfessionalService",
                  "LocalBusiness",
                ],
                "@id": "https://www.codebyconte.fr/a-propos#about",
                name: "Code By Conte",
                url: "https://www.codebyconte.fr/",
                logo: "https://www.codebyconte.fr/logo.svg",
              },

              {
                "@type": "MerchantReturnPolicy",
                "@id":
                  "https://www.codebyconte.fr/conditions-generales-vente#return-policy",
                applicableCountry: "FR",
                returnPolicyCategory:
                  "https://schema.org/MerchantReturnNotApplicable",
              },

              {
                "@type": "Service",
                "@id": "https://www.codebyconte.fr/#service-site-vitrine",
                name: "Site Vitrine Essentiel",
                serviceType: "Création de site vitrine",
                provider: {
                  "@id": "https://www.codebyconte.fr/a-propos#about",
                },
                description:
                  "Solution idéale pour lancer votre activité et être visible rapidement.",
                areaServed: "FR",

                offers: {
                  "@type": "Offer",
                  "@id": "https://www.codebyconte.fr/services#essentiel",
                  url: "https://www.codebyconte.fr/services",
                  priceCurrency: "EUR",
                  price: 1200,
                  priceValidUntil: "2025-12-31",
                  availability: "https://schema.org/InStock",
                  hasMerchantReturnPolicy: {
                    "@id":
                      "https://www.codebyconte.fr/conditions-generales-vente#return-policy",
                  },
                },
              },
              {
                "@type": "Service",
                "@id": "https://www.codebyconte.fr/services#visibilite",
                name: "Site Visibilité Pro",
                serviceType: "Création de site optimisé SEO",
                provider: {
                  "@id": "https://www.codebyconte.fr/a-propos#about",
                },
                description:
                  "Attirez plus de clients grâce à Google, avec blog et design sur-mesure.",
                areaServed: "FR",

                offers: {
                  "@type": "Offer",
                  "@id": "https://www.codebyconte.fr/services#visibilite",
                  url: "https://www.codebyconte.fr/services",
                  priceCurrency: "EUR",
                  price: 1800,
                  priceValidUntil: "2025-12-31",
                  availability: "https://schema.org/InStock",
                  hasMerchantReturnPolicy: {
                    "@id":
                      "https://www.codebyconte.fr/conditions-generales-vente#return-policy",
                  },
                },
              },

              {
                "@type": "Service",
                "@id": "https://www.codebyconte.fr/services#ecommerce",
                name: "Site E-commerce & Réservation",
                serviceType: "Création de site e-commerce / réservation",
                provider: {
                  "@id": "https://www.codebyconte.fr/a-propos#about",
                },
                description:
                  "Vendez vos produits ou services en ligne 24 h/24 – 7 j/7.",
                areaServed: "FR",

                offers: {
                  "@type": "Offer",
                  "@id": "https://www.codebyconte.fr/services#ecommerce",
                  url: "https://www.codebyconte.fr/services",
                  priceCurrency: "EUR",
                  price: 2500,
                  priceValidUntil: "2025-12-31",
                  availability: "https://schema.org/InStock",
                  hasMerchantReturnPolicy: {
                    "@id":
                      "https://www.codebyconte.fr/conditions-generales-vente#return-policy",
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
