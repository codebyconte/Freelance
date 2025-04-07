import "@/app/styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

export const metadata = {
  title:
    "Développeur Web Freelance — Sites professionnels sur-mesure | Conte Mouctar",
  description:
    "Je crée des sites web performants, rapides et élégants pour les entreprises et indépendants. Site vitrine, e-commerce ou refonte, le tout 100% sur-mesure.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <main>
          <Header>{children}</Header>
        </main>
      </body>
    </html>
  );
}
