import HeroPerformance from "@/components/section/site-performant/HeroPerformance";
import Indispensable from "@/components/section/site-performant/Indispensable";
import StatistiquePerformance from "@/components/section/site-performant/StatistiquePerformance";
import CtaPerformance from "@/components/section/site-performant/CtaPerformance";

export const metadata = {
  title: "Pourquoi un site web performant est essentiel pour réussir en 2025 ",
  description:
    "Découvrez pourquoi créer un site web performant est devenu indispensable pour toute entreprise en 2025. Crédibilité, acquisition, référencement local… tout est lié.",
  alternates: {
    canonical: "https://codebyconte.fr/blog/site-performant",
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
              "Découvrez pourquoi un site web rapide, professionnel et optimisé est votre meilleur allié pour développer votre entreprise à Brest en 2025.",
            image: "https://codebyconte.fr/performance.jpg", // changez cette URL
            author: {
              "@type": "Person",
              name: "Conte Mouctar",
              url: "https://codebyconte.fr",
            },
            publisher: {
              "@type": "Organization",
              name: "Code By Conte",
              url: "https://codebyconte.fr",
              logo: {
                "@type": "ImageObject",
                url: "https://codebyconte.fr/logo.svg", // facultatif mais recommandé
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
