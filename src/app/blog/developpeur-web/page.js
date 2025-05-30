import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import Link from "next/link";
import {
  Users,
  Zap,
  Target,
  RefreshCcw,
  Wrench,
  Tag,
  MapPinned,
  Globe,
} from "lucide-react";

export const metadata = {
  title:
    "Développeur web à Brest : Ce que vous devez savoir avant de créer votre site en 2025",
  description:
    "Vous cherchez un développeur web à Brest pour créer un site professionnel, visible sur Google et adapté à vos besoins ? Découvrez les bonnes pratiques, les pièges à éviter et comment choisir le bon freelance.",
  alternates: {
    canonical: "https://www.codebyconte.fr/blog/developpeur-web",
  },
};

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Développeur Web à Brest : Vo tre Allié Local pour un Site Performant, Visible et Rentable",
            description:
              "Vous cherchez un développeur web à Brest pour créer un site professionnel, visible sur Google et adapté à vos besoins ? Découvrez les bonnes pratiques, les pièges à éviter et comment choisir le bon freelance.",
            image: "https://www.codebyconte.fr/Devellopeur web.jpg",
            author: {
              "@type": "Person",
              name: "Conte Mouctar",
              url: "https://www.codebyconte.fr",
            },
            datePublished: "2025-05-30",
            dateModified: "2025-05-30", // Mettez à jour si l'article est modifié
            publisher: {
              "@type": "Person", // Ou "Organization" si vous avez une structure d'entreprise
              name: "Code By Conte", // Nom de votre "marque"
              url: "https://www.codebyconte.fr",
            },
          }),
        }}
      />
      <article className="max-w-3xl mx-auto px-4 py-12 space-y-8">
        {/* Auteur + date */}
        <div className="flex flex-wrap items-center text-sm text-gray-500">
          <span>
            Par <strong>Code By Conte</strong>
          </span>
          <time dateTime="2025-05-30" className="ml-4">
            30 mai 2025
          </time>
        </div>

        {/* Titre principal */}
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Votre Développeur Web à Brest en 2025 : Proximité, Expertise et Site
          Performant
        </h1>

        {/* Contenu principal */}
        <section className="prose prose-lg prose-headings:font-semibold prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:underline mx-auto">
          {/* Introduction */}
          <div className="py-8 space-y-2">
            <h2 className="text-2xl font-semibold">
              Brest, Votre Terrain de Jeu. Votre Site Web, Votre Arme Secrète.
            </h2>
            <p>
              Imaginez ceci : vous êtes artisan, commerçant, thérapeute ou
              indépendant à Brest. Vous avez du talent, de la passion, une vraie
              expertise. Mais sur Google, silence radio. Vos concurrents raflent
              les clients… pendant que votre site reste invisible.
            </p>
            <p>
              Et si vous transformiez ce site en{" "}
              <strong>aimant à clients</strong> ? En un outil de prospection qui
              travaille pour vous, même pendant que vous dormez ?
            </p>
            <p>
              <strong>
                C’est là qu’un développeur web local à Brest change la donne.
              </strong>
            </p>
          </div>

          <Divider />

          {/* Pourquoi choisir un freelance */}
          <div className="py-8">
            <h2 className="text-2xl font-semibold">
              Pourquoi Choisir un Développeur Web à Brest en 2025 ?
            </h2>
            <p className="py-2 ">
              Vous savez que votre présence en ligne est la vitrine de votre
              succès en 2025. Mais face à la jungle du web, trouver le bon
              partenaire pour donner vie à votre projet digital peut sembler un
              défi. Et si la solution se trouvait juste à côté de vous, avec un{" "}
              <strong>développeur web à Brest</strong> qui comprend vos besoins
              locaux et place l&apos;humain au centre de sa démarche ?
            </p>
            <h3 className="text-xl font-semibold mt-4 flex items-center gap-2">
              <Users className="w-6 h-6" /> Un Partenaire Proche, Disponible et
              à l’Écoute
            </h3>
            <p>
              Fini les agences impersonnelles ou les freelances à l’autre bout
              du monde. Avec un développeur web à Brest, vous bénéficiez de
              réunions en face à face ou en visio, d’échanges fluides, et d’un
              accompagnement vraiment humain.
            </p>

            <h3 className="text-xl font-semibold mt-4 flex items-center gap-2">
              <Target className="w-6 h-6" /> Une Connaissance Précise de Votre
              Marché Local
            </h3>
            <p>
              Le SEO local, ce n’est pas juste mettre Brest dans une phrase.
              C’est comprendre comment vos clients cherchent sur Google, ce
              qu’ils attendent et ce que font vos concurrents. En tant que
              développeur web brestois, je maîtrise ces codes.
            </p>

            <h3 className="text-xl font-semibold mt-4 flex items-center gap-2">
              <Zap className="w-6 h-6" /> Réactivité et Transparence : Vous
              Savez Toujours Où Vous En Êtes
            </h3>
            <p>
              Un seul interlocuteur, pas de sous-traitance, pas de mauvaise
              surprise. Chaque étape est claire, chaque décision vous implique.
              Votre site avance vite, et bien.
            </p>
          </div>

          <Divider />

          {/* Services proposés */}
          <div className="py-8">
            <h2 className="text-2xl font-semibold"> Les Services Proposés</h2>
            <h3 className="text-xl font-semibold mt-4 flex items-center gap-2">
              <Globe className="w-6 h-6" /> Création de Site Vitrine Optimisé
              SEO
            </h3>
            <p>
              Offrez à votre activité un site professionnel, élégant, responsive
              et pensé pour convertir. Chaque page est optimisée pour le
              référencement local à Brest.
            </p>

            <h3 className="text-xl font-semibold mt-4 flex items-center gap-2">
              <RefreshCcw className="w-6 h-6" /> Refonte de Site : Modernisez
              pour Repartir du Bon Pied
            </h3>
            <p>
              Site lent, mal référencé, qui ne vous ressemble plus ? On le
              transforme en un site performant, clair, rapide et visible sur
              Google.
            </p>

            <h3 className="text-xl font-semibold mt-4 flex items-center gap-2">
              <MapPinned className="w-6 h-6" /> SEO Local Brestois : Soyez le
              Premier sur Google
            </h3>
            <p>
              Optimisation des balises, vitesse, contenus locaux, Google Maps,
              mots-clés ciblés… Chaque détail compte pour apparaître en première
              page quand on tape “votre métier à Brest”.
            </p>

            <h3 className="text-xl font-semibold mt-4 flex items-center gap-2">
              <Wrench className="w-6 h-6" /> Intégration d’Outils Business
              Personnalisés
            </h3>
            <p>
              De la prise de rendez-vous à l’envoi d’emails automatisés, en
              passant par les formulaires de contact et la collecte de leads,
              votre site devient un véritable assistant commercial.
            </p>
          </div>

          <Divider />

          {/* Tarifs */}
          <div className="py-8">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Tag className="w-6 h-6" /> Combien Coûte un Site Internet à Brest
            </h2>
            <p>Voici une idée des tarifs indicatifs :</p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Site vitrine optimisé</strong> : À partir de 1200 €
              </li>
              <li>
                <strong>Site e-commerce performant</strong> : À partir de 2500 €
              </li>
            </ul>
            <p className="mt-2">
              <strong>
                Le vrai prix ? C’est celui du retour sur investissement.
              </strong>{" "}
              Un site bien conçu vous apporte des clients chaque mois.
            </p>
            <p className="mt-4">
              Pour découvrir le détail de chaque formule, consultez{" "}
              <Link
                href="/services"
                className="text-blue-600 hover:underline font-medium"
              >
                Offres & Services
              </Link>
              .
            </p>
            <div className="flex justify-center mt-4">
              <Button href="/services" color="blue">
                Voir les Offres Complètes
              </Button>
            </div>
          </div>

          <Divider />

          {/* Conclusion + CTA */}
          <div className="text-center py-8">
            <h2 className="text-2xl font-semibold mb-4">
              Conclusion : À Brest, Votre Visibilité Commence par un Site qui
              Convertit
            </h2>
            <p className="mb-6">
              Vous méritez un site qui reflète la qualité de votre travail,
              attire les bons clients et fait décoller votre activité à Brest.
              Le bon moment ? C’est maintenant.
            </p>
            <Button href="/contact" color="blue">
              Contactez-moi
            </Button>
          </div>
        </section>
      </article>
    </main>
  );
}
