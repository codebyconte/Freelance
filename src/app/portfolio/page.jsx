import HeroPortfolio from "@/components/section/portofolio/HeroPortfolio";
import Projet from "@/components/section/portofolio/Projet";
import Techno from "@/components/section/portofolio/Techno";
import CtaPortfolio from "@/components/section/portofolio/CtaPortfolio";

export const metadata = {
  title: "Portfolio | Développeur Web Freelance à Brest – Code By Conte",
  description:
    "Découvrez mes réalisations web : sites vitrines, e-commerce et projets sur-mesure. Chaque projet est pensé pour la performance et le SEO.",
  alternates: {
    canonical: "https://www.codebyconte.fr/portfolio",
  },
  openGraph: {
    title: "Portfolio | Création de sites web à Brest",
    description:
      "Découvrez des projets concrets réalisés à Brest : sites vitrines, boutiques en ligne et plateformes personnalisées.",
    url: "https://www.codebyconte.fr/portfolio",
    siteName: "Code By Conte",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aperçu des projets Code By Conte",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio développeur web freelance – Code By Conte",
    description:
      "Projets web personnalisés, modernes et performants réalisés à Brest.",
    site: "@klyx_digital",
    creator: "@klyx_digital",
    images: ["/opengraph-image.png"],
  },
};

export default function PagePortfolio() {
  return (
    <main>
      <HeroPortfolio />
      <Projet />
      <Techno />
      <CtaPortfolio />
    </main>
  );
}
