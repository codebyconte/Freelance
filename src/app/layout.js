import "@/app/styles/globals.css";
import Header from "@/components/layout/Header";
import { inter } from "@/app/styles/fonts";

export const metadata = {
  title: "Code By Conte",
  description:
    "Je crée des sites web performants, rapides et élégants pour les entreprises et indépendants. Site vitrine, e-commerce ou refonte, le tout 100% sur-mesure.",
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
        <Header>{children}</Header>
      </body>
    </html>
  );
}
