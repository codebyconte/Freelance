import "@/app/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import { inter } from "@/app/styles/fonts";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/layout/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL("https://codebyconte.fr"),
  title: "Création site internet à Brest – Développeur web freelance",
  description:
    "Développeur web freelance à Brest, je crée des sites internet modernes, rapides et sur mesure pour les entrepreneurs et artisans. Discutons de votre projet !",
  openGraph: {
    title: "Création site internet à Brest – Développeur web freelance",
    description:
      "Sites web modernes, performants et sur mesure pour les entreprises à Brest.",
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
    title: "Développeur web à Brest – Code By Conte",
    description:
      "Création de sites sur mesure pour entrepreneurs, artisans et PME à Brest.",
    site: "@klyx_digital",
    creator: "@klyx_digital",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="w-full">
        <GoogleAnalytics GA_MEASUREMENT_ID="G-NNH04SFGH2" />
        <Analytics />
        <Header>{children}</Header>
        <Footer />
      </body>
    </html>
  );
}
