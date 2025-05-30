import HeroBusiness from "@/components/section/outils-business/HeroBusiness";
import WhyBusiness from "@/components/section/outils-business/WhyBusiness";
import Compare from "@/components/section/outils-business/Compare";
import Graphique from "@/components/section/outils-business/Graphique";
import CtaOutils from "@/components/section/outils-business/CtaOutils";

export const metadata = {
  title:
    "Pourquoi un site web performant est essentiel en 2025 – Code By Conte",
  description:
    "Découvrez pourquoi un site internet rapide, sécurisé et sur mesure est indispensable pour attirer des clients, renforcer votre image et booster vos résultats.",
  alternates: {
    canonical: "https://codebyconte.fr/outils-business",
  },
  openGraph: {
    title:
      "Site performant vs No-code : le comparatif essentiel – Code By Conte",
    description:
      "Faut-il créer un site codé sur mesure ou utiliser une solution no-code ? Découvrez les différences de performance, SEO, sécurité et coûts.",
    url: "https://codebyconte.fr/outils-business",
    siteName: "Code By Conte",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Création site internet performant – Code By Conte",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Création site internet performant : comparatif 2025",
    description:
      "Découvrez pourquoi choisir un site codé sur mesure est un investissement stratégique pour votre entreprise.",
    site: "@klyx_digital",
    creator: "@klyx_digital",
    images: ["/opengraph-image.png"],
  },
};

export default function PageBusiness() {
  return (
    <main className="overflow-x-hidden">
      <HeroBusiness />
      <WhyBusiness />
      <Compare />
      <Graphique />
      <CtaOutils />
    </main>
  );
}
