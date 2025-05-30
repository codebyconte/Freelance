import { BadgeEuro, Lightbulb, TriangleAlert, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata = {
  title:
    "Création Site Internet Brest : Guide Complet des Prix, Délais et Erreurs à Éviter en 2025",
  description:
    "Combien coûte la création d'un site internet à Brest en 2025 ? Quels sont les délais typiques ? Découvrez les tarifs, les étapes clés et les pièges à éviter (freelance vs. agence vs. no-code). Demandez un audit offert !",
  alternates: {
    canonical: "https://www.codebyconte.fr/blog/creation-site",
  },
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Création Site Internet Brest : Guide Complet des Prix, Délais et Erreurs à Éviter en 2025",
            description:
              "Combien coûte la création d'un site internet à Brest en 2025 ? Quels sont les délais typiques ? Découvrez les tarifs, les étapes clés et les pièges à éviter (freelance vs. agence vs. no-code). Demandez un audit offert !",
            image: "/site-internet.jpg",
            author: {
              "@type": "Person",
              name: "Conte Mouctar",
              url: "https://www.codebyconte.fr",
            },
            datePublished: "2025-05-30",
            dateModified: "2025-05-30",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.codebyconte.fr/blog/creation-site",
            },
            publisher: {
              "@type": "Person",
              name: "Code By Conte",
              url: "https://www.codebyconte.fr",
            },
          }),
        }}
      />
      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2">
        <span>
          Par <strong>Code By Conte</strong>
        </span>
        <time dateTime="2025-05-30" className="ml-4">
          30 mai 2025
        </time>
      </div>

      <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        Création de site internet à Brest : Tarifs, délais et erreurs à éviter
        en 2025
      </h1>

      <section className="prose prose-lg prose-headings:font-semibold prose-a:text-blue-600 hover:prose-a:underline mx-auto">
        <div className="py-4">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Pourquoi créer un site web professionnel à Brest en 2025 ?
          </h2>
          <p className="py-2">
            Vous êtes une entreprise, un artisan ou un indépendant à Brest avec
            un projet de création de site internet en tête pour 2025 ?
            Excellente initiative ! Mais avant de vous lancer, une question
            cruciale se pose : combien ça coûte ? Quels sont les délais
            réalistes ? Et surtout, quels sont les erreurs à éviter pour ne pas
            transformer votre rêve en cauchemar financier et temporel ? Ce guide
            complet est là pour vous éclairer.
          </p>
        </div>
        <div className="py-4 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl flex items-center gap-2">
            <BadgeEuro /> Combien coûte un site internet à Brest ?
          </h2>
          <p>
            Voici une estimation des prix pour la création d’un site
            professionnel :
          </p>
          <ul className="list-disc">
            <li>
              <strong>Freelance local :</strong> 1000 € – 2500 €
            </li>
            <li>
              <strong>Agence web à Brest :</strong> 2500 € – 5000 €
            </li>
            <li>
              <strong>Outils no-code (Wix, Squarespace) :</strong> 20 € – 50
              €/mois (mais peu personnalisable)
            </li>
          </ul>
          <p className="flex items-center gap-2">
            <Lightbulb />
            <em>
              Astuce : le tarif ne doit jamais être votre seul critère.
              Privilégiez un prestataire qui comprend vos enjeux locaux et votre
              marché cible.
            </em>
          </p>
        </div>

        <div className="py-4">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Tableau comparatif des solutions
          </h2>
          <div className="py-4">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Critères</TableHeader>
                  <TableHeader>No-code</TableHeader>
                  <TableHeader>Freelance </TableHeader>
                  <TableHeader>Agence web</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  [
                    "Prix moyen",
                    "Bas (20–50€/mois)",
                    "Moyen (1000–2500€)",
                    "Élevé (2500–5000€+)",
                  ],
                  [
                    "Accompagnement humain",
                    "Support générique",
                    "Direct & personnalisé",
                    "Variable selon la taille",
                  ],
                  [
                    "Temps de réalisation",
                    "1–7 jours",
                    "2 à 4 semaines",
                    "4 à 8 semaines",
                  ],
                  [
                    "Qualité du design",
                    "Standardisé",
                    "Sur-mesure",
                    "Sur-mesure",
                  ],
                  [
                    "Référencement local",
                    "Limité techniquement",
                    "Optimisé SEO ",
                    "En supplément",
                  ],
                  ["Évolutivité", "Limitée", "Flexible", "Flexible"],
                  [
                    "Maintenance",
                    "À faire soi-même",
                    "Suivi disponible",
                    "Parfois externalisé",
                  ],
                  [
                    "Proximité géographique",
                    "Aucune",
                    "Brest & Finistère",
                    "Si locale",
                  ],
                  [
                    "Rapport qualité/prix",
                    "Peu rentable à terme",
                    "Excellent",
                    "Coûteux mais complet",
                  ],
                  [
                    "Contrôle & flexibilité",
                    "Très limité",
                    "Total sur le site",
                    "Variable selon l’agence",
                  ],
                ].map(([critère, nocode, freelance, agence], i) => (
                  <TableRow key={i}>
                    <TableCell>{critère}</TableCell>
                    <TableCell>{nocode}</TableCell>
                    <TableCell>{freelance}</TableCell>
                    <TableCell>{agence}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="py-4 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Le Calendrier Réel : Les Étapes Clés de la Création de Votre Site à
            Brest
          </h2>
          <p>
            La{" "}
            <strong>
              création d&apos;un site internet professionnel à Brest
            </strong>{" "}
            suit généralement ces étapes :
          </p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>
              <strong>Définition de vos besoins :</strong> Objectifs, audience,
              fonctionnalités.
            </li>
            <li>
              <strong>Conception et maquettage :</strong> Visualisation de la
              structure et du design.
            </li>
            <li>
              <strong>Développement :</strong> Intégration du contenu et des
              fonctionnalités.
            </li>
            <li>
              <strong>Tests et validation :</strong> Assurer le bon
              fonctionnement sur tous les appareils.
            </li>
            <li>
              <strong>Mise en ligne :</strong> Lancement de votre nouveau site.
            </li>
            <li>
              <strong>Suivi et maintenance :</strong> Assurer la pérennité et
              l&apos;évolution de votre site.
            </li>
          </ol>
          <p>
            Le délai total varie en fonction de la complexité du projet, mais
            comptez en moyenne 4 à 12 semaines avec un freelance et 8 à 20
            semaines avec une agence.
          </p>
        </div>
        <div className="py-4 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl flex items-center gap-2">
            <TriangleAlert /> Les Pièges à Éviter Absolument pour la Création de
            Votre Site à Brest en 2025
          </h2>
          <p>
            {" "}
            Pour réussir votre projet web à Brest, soyez vigilant face à ces
            erreurs fréquentes :
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Utiliser un template générique non adapté au SEO local</li>
            <li>
              Faire appel à une agence offshore sans connaissance du marché
              breton
            </li>
            <li>Négliger la vitesse, le mobile et l’expérience utilisateur</li>
            <li>
              Négliger l&apos;
              <strong>optimisation mobile (responsive design)</strong>, cruciale
              pour toucher votre audience locale.
            </li>
            <li>
              Oublier le <strong>référencement local (SEO)</strong>,
              l&apos;élément clé pour être visible sur Google à Brest.
            </li>
            <li>
              Sous-estimer l&apos;importance d&apos;un{" "}
              <strong>contenu de qualité</strong>, pertinent pour vos clients
              brestois.
            </li>
            <li>
              Ignorer la <strong>maintenance et la sécurité</strong> de votre
              site après son lancement.
            </li>
          </ul>
          <p className="italic">
            <strong>Rappel :</strong> un joli site ne suffit pas. Il doit
            attirer, convaincre et convertir vos visiteurs.
          </p>
        </div>

        <div className="py-6">
          <Divider />
        </div>

        <div className="py-4 space-y-4 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl flex items-center justify-center gap-2">
            <Gift /> Bonus : Audit gratuit de votre site actuel
          </h2>
          <p>
            Vous avez déjà un site mais vous doutez de sa performance ? Je vous
            propose un audit gratuit complet (technique, mobile, SEO, vitesse)
            avec des conseils personnalisés.
          </p>
          <div className="flex items-center justify-center">
            <Button
              href="/contact"
              title="Demander un audit gratuit"
              color="blue"
            >
              Demandez votre audit gratuit dès maintenant
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
