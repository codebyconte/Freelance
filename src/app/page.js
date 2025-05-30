import Hero from "@/components/section/home/Hero";
import { ServicesApercu } from "@/components/section/home/ServicesApercu";
import { GoogleStat } from "@/components/section/home/GoogleStat";
import PourquoiMoi from "@/components/section/home/PourquoiMoi";
import Cta from "@/components/section/home/Cta";
import { JeuxGratter } from "@/components/section/home/JeuxGratter";
import Bento from "@/components/section/home/Bento";

export const metadata = {
  title: "Création site internet à Brest – Développeur web freelance",
  description:
    "Développeur web freelance à Brest, je crée des sites internet modernes, rapides et sur mesure pour les entrepreneurs et artisans. Discutons de votre projet !",
  alternates: {
    canonical: "https://codebyconte.fr/",
  },
  openGraph: {
    title: "Développeur web à Brest | Sites modernes et performants",
    description:
      "Je crée des sites web sur mesure à Brest pour les entreprises ambitieuses. Rapide, responsive et bien référencé.",
    url: "https://codebyconte.fr",
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
    title: "Création site internet à Brest – Code By Conte",
    description:
      "Sites sur mesure performants pour entrepreneurs et indépendants à Brest.",
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
    alternateName: "Conte Mouctar",
    url: "https://codebyconte.fr",
    logo: "https://codebyconte.fr/Logo.svg",
    image: "https://codebyconte.fr/opengraph-image.png",
    description:
      "Développeur Web Freelance à Brest – Sites performants sur mesure",
    openingHours: "Mo-Su 08:00-20:00",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brest",
      postalCode: "29200",
      addressCountry: "FR",
    },
    areaServed: {
      "@type": "Place",
      name: "France",
    },
    telephone: "+33 6 11 23 51 90",
    email: "mr.conte@icloud.com",
    paymentAccepted: ["Cash", "Credit Card", "Cryptocurrency"],
  };

  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <GoogleStat />
      <ServicesApercu />
      <Bento />
      <PourquoiMoi />
      <Cta />
      <JeuxGratter />
    </main>
  );
}
