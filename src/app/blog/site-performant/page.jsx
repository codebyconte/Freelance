import HeroPerformance from "@/components/section/site-performant/HeroPerformance";
import Indispensable from "@/components/section/site-performant/Indispensable";
import StatistiquePerformance from "@/components/section/site-performant/StatistiquePerformance";
import CtaPerformance from "@/components/section/site-performant/CtaPerformance";

export const metadata = {
  title: "Pourquoi un site web performant est essentiel pour réussir en 2025 ",
  description:
    "En 2025, un site web performant est essentiel : crédibilité, acquisition clients, référencement local… découvrez pourquoi c’est vital pour toute entreprise",
  alternates: {
    canonical: "https://www.codebyconte.fr/blog/site-performant",
  },
  openGraph: {
    url: "https://www.codebyconte.fr/blog/site-performant",
    title: "Pourquoi un site web performant est essentiel pour réussir en 2025",
    description:
      "En 2025, un site web performant est essentiel : crédibilité, acquisition clients, référencement local… découvrez pourquoi c’est vital pour toute entreprise",
    siteName: "Code By Conte",
    locale: "fr_FR",
    type: "article",
    images: [
      {
        url: "https://www.codebyconte.fr/performance.jpg",
        width: 1200,
        height: 630,
        alt: "Site web performant",
      },
    ],
  },
};

export default function PageSitePerformant() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Pourquoi un site web performant est essentiel pour réussir en 2025",
            description:
              "En 2025, un site web performant est essentiel : crédibilité, acquisition clients, référencement local… découvrez pourquoi c’est vital pour toute entreprise",
            image: "https://www.codebyconte.fr/performance.jpg",
            author: {
              "@type": "Person",
              name: "Conte Mouctar",
              url: "https://www.codebyconte.fr",
            },
            publisher: {
              "@type": "Organization",
              name: "Code By Conte",
              url: "https://www.codebyconte.fr",
              logo: {
                "@type": "ImageObject",
                url: "https://www.codebyconte.fr/logo.svg",
              },
            },
            datePublished: "2025-05-30",
            dateModified: "2025-05-30",
          }),
        }}
      />
      <HeroPerformance />
      <Indispensable />
      <StatistiquePerformance />
      <CtaPerformance />
    </main>
  );
}
