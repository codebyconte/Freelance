import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import {
  Lightbulb,
  TriangleAlert,
  CodeXml,
  MessageCircleMore,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title:
    "Développeur web Brest : créez un site performant pour votre entreprise",
  description:
    "Vous cherchez un développeur web à Brest ? Découvrez comment un site sur-mesure booste votre visibilité, vos ventes et votre crédibilité en ligne.",
  alternates: {
    canonical: "https://www.codebyconte.fr/blog/developpeur-web-brest",
  },
  openGraph: {
    url: "https://www.codebyconte.fr/blog/developpeur-web-brest",
    title:
      "Développeur web Brest : créez un site performant pour votre entreprise",
    description:
      "Vous cherchez un développeur web à Brest ? Découvrez comment un site sur-mesure booste votre visibilité, vos ventes et votre crédibilité en ligne.",
    siteName: "Code By Conte",
    locale: "fr_FR",
    type: "article",
    images: [
      {
        url: "https://www.codebyconte.fr/Devellopeur web.jpg",
        width: 1200,
        height: 630,
        alt: "Développeur web freelance à Brest",
      },
    ],
  },
};

export default function Page() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Développeur web Brest : créez un site performant pour votre entreprise",
    description:
      "Vous cherchez un développeur web à Brest ? Découvrez comment un site sur-mesure booste votre visibilité, vos ventes et votre crédibilité en ligne.",
    author: {
      "@type": "Person",
      name: "Conte Mouctar",
      url: "https://www.codebyconte.fr",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.codebyconte.fr/blog/developpeur-web-brest",
    },
    datePublished: "2025-05-30",
    publisher: {
      "@type": "Organization",
      name: "Code By Conte",
      logo: {
        "@type": "ImageObject",
        url: "https://www.codebyconte.fr/Logo.svg",
      },
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte un site web à Brest ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A partir de 1200€",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps faut-il pour créer un site ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En moyenne 2 à 4 semaines selon la complexité et votre réactivité.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je gérer mon site moi-même ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, je peux intégrer un espace d’administration simple ou m’occuper de tout pour vous.",
        },
      },
      {
        "@type": "Question",
        name: "Proposez-vous du référencement local ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument ! Chaque site est optimisé pour Google + Google Maps dès le départ.",
        },
      },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdArticle).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFaq).replace(/</g, "\\u003c"),
        }}
      />
      <article>
        <header className="py-8 space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Développeur web Brest : créez un site performant pour votre
            entreprise
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Vous cherchez un développeur web à Brest ? Découvrez comment un site
            sur-mesure booste votre visibilité, vos ventes et votre crédibilité
            en ligne.
          </p>
        </header>

        <nav
          aria-label="Table des matières"
          className="border border-gray-500 bg-white p-6 rounded-2xl py-8"
        >
          <ul className="list-disc space-y-2">
            <li className="underline hover:text-blue-600">
              <a href="#introduction">Introduction</a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#developpeur-web-brest">
                Pourquoi faire appel à un développeur web à Brest ?{" "}
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#avantages-site-sur-mesure">
                Les avantages d’un site sur-mesure pour votre activité locale
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#choisir-prestataire-brest">
                Comment bien choisir votre prestataire à Brest ?
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#etapes-site-web-pro">
                Étapes clés de la création d’un site web professionnel
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#me-confier-projet-web">
                Pourquoi me confier votre projet web à Brest ?
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#faq">FAQ</a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#conclusion">Conclusion</a>
            </li>
          </ul>
        </nav>

        <section id="introduction" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Introduction
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Vous êtes entrepreneur ou dirigeant de PME à Brest ? Vous savez
            qu’un site web est indispensable, mais à qui confier sa création ?
            En tant que <strong>développeur web à Brest</strong>, je conçois des
            sites modernes, performants et parfaitement adaptés aux besoins des
            entreprises locales. Découvrez comment un site bien pensé peut
            transformer votre visibilité et booster vos ventes.
          </p>
        </section>

        <Divider />

        <section id="developpeur-web-brest" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Pourquoi faire appel à un développeur web à Brest ?
          </h2>
          <p className="font-semibold text-lg mt-4">
            Voici pourquoi choisir un professionnel basé à Brest fait la
            différence :
          </p>
          <ul className="list-disc space-y-2 ml-6">
            <li>
              <strong>Connaissance du tissu local </strong> : événements,
              comportements de recherche, concurrence régionale.
            </li>
            <li>
              <strong>Réactivité</strong> : proximité = communication plus
              fluide, réunions en personne possibles.
            </li>
            <li>
              <strong>Référencement local optimisé</strong> : un freelance local
              connaît les leviers SEO spécifiques à Brest.
            </li>
          </ul>
        </section>

        <Divider />

        <section id="avantages-site-sur-mesure" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Les avantages d’un site sur-mesure pour votre activité locale
          </h2>
          <p className="font-semibold text-lg mt-4">
            Contrairement aux solutions “prêtes à l’emploi”, un site développé
            sur-mesure vous garantit :
          </p>
          <ul className="list-disc space-y-2 ml-6">
            <li>
              <strong>Une vraie identité visuelle </strong> : respect de votre
              charte, design personnalisé.
            </li>
            <li>
              <strong>Des performances techniques (Core Web Vitals)</strong> :
              chargement rapide, responsive mobile, sécurité HTTPS.
            </li>
            <li>
              <strong>Une structure pensée pour le SEO local</strong> :balisage
              Schema, pages dédiées, maillage interne.
            </li>
          </ul>
          <p className="flex items-center space-x-2 italic mt-6">
            <CodeXml className="w-10 h-10 mr-2" /> Outils utilisés : Next.js
            pour la rapidité, Tailwind CSS pour un design maîtrisé, et un CMS
            simple si vous souhaitez publier vous-même.
          </p>
          <div className="flex justify-center mt-4">
            <Button href="/services">
              Découvrez mon offre de création de site
            </Button>
          </div>
        </section>

        <Divider />

        <section id="choisir-prestataire-brest" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Comment bien choisir votre prestataire à Brest ?
          </h2>
          <p className="font-semibold text-lg mt-4">
            Voici les 5 critères clés pour choisir un bon développeur web :
          </p>
          <ol className="list-decimal space-y-2 ml-6">
            <li>
              <strong>Portfolio clair et professionnel </strong> : sites
              récents, références locales.
            </li>
            <li>
              <strong>Compétences techniques à jour</strong> : mobile-first,
              SEO, UX, RGPD.
            </li>
            <li>
              <strong>Capacité d’écoute</strong> :comprendre vos objectifs et
              vos clients.
            </li>
            <li>
              <strong>Méthode de travail transparente </strong> : devis
              détaillé, planning, outils de suivi.
            </li>
            <li>
              <strong>Maintenance et accompagnement</strong> : pas d’abandon
              après livraison.
            </li>
          </ol>

          <p className="flex items-center space-x-2 italic mt-6">
            <TriangleAlert className="w-10 h-10 mr-2" /> À éviter : les
            prestataires qui ne parlent jamais de SEO ou vous imposent des
            abonnements flous.
          </p>
          <div className="flex justify-center mt-4">
            <Button href="/portfolio">
              Portfolio – exemples de sites réalisés
            </Button>
          </div>
        </section>

        <Divider />

        <section id="etapes-site-web-pro" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Étapes clés de la création d’un site web professionnel
          </h2>
          <p className="font-semibold text-lg mt-4">
            Voici comment je procède, étape par étape :
          </p>
          <ol className="list-decimal space-y-2 ml-6">
            <li>Audit de vos besoins</li>
            <li>Proposition de maquettes</li>
            <li>Développement du site</li>
            <li>Optimisation SEO + tests Core Web Vitals</li>
            <li>Mise en ligne + suivi post-lancement</li>
          </ol>

          <p className="flex items-center space-x-2 italic mt-6">
            <MessageCircleMore className="w-10 h-10 mr-2" /> Chaque étape est
            validée avec vous. Vous gardez le contrôle du projet.
          </p>
        </section>

        <Divider />

        <section id="me-confier-projet-web" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Pourquoi me confier votre projet web à Brest ?
          </h2>
          <ul className="list-disc space-y-2 ml-6">
            <li>
              <strong>Techniques modernes</strong> : chaque site est codé
              sur-mesure, rapide, responsive, sécurisé, et optimisé pour le SEO
              dès le départ.
            </li>
            <li>
              <strong>Tarifs clairs et transparents</strong> : à partir de 1200
              € pour un site vitrine professionnel .
            </li>
            <li>
              <strong>Accompagnement personnalisé</strong> : je vous guide à
              chaque étape, du cahier des charges à la mise en ligne, avec des
              conseils sur la stratégie digitale.
            </li>
          </ul>
        </section>

        <Divider />

        <section id="faq" className="py-8 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            FAQ
          </h2>
          <div>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Combien coûte un site web à Brest ?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Les prix varient selon vos besoins. Mes offres commencent à
                    1200 € .
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Combien de temps faut-il pour créer un site ?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    En moyenne 2 à 4 semaines selon la complexité et votre
                    réactivité.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Puis-je gérer mon site moi-même ?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Oui, je peux intégrer un espace d’administration simple ou
                    m’occuper de tout pour vous.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Proposez-vous du référencement local ?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Absolument ! Chaque site est optimisé pour Google + Google
                    Maps dès le départ.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <Divider />

        <section id="conclusion" className="py-8 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Conclusion
          </h2>

          <p>
            Faire appel à un développeur web à Brest, c’est s’assurer d’un site
            performant, localement optimisé et pensé pour générer des résultats.
            Je vous accompagne de A à Z, avec des solutions claires et
            efficaces. Discutons de votre projet !
          </p>

          <div className="flex justify-center mt-4">
            <Button href="/contact">Contactez-moi pour un audit gratuit</Button>
          </div>
        </section>
      </article>
    </main>
  );
}
