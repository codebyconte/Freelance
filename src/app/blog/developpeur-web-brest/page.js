import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import {
  Lightbulb,
  TriangleAlert,
  CodeXml,
  MessageCircleMore,
  CircleCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "Développeur Web Brest : Le Guide Ultime pour un Site Qui Rapporte",
  description:
    "À la recherche du meilleur développeur web à Brest ? Découvrez le guide complet pour créer un site internet sur-mesure, rapide et optimisé pour le SEO local, qui transforme vos visiteurs en clients.",
  alternates: {
    canonical: "https://www.codebyconte.fr/blog/developpeur-web-brest",
  },
  openGraph: {
    url: "https://www.codebyconte.fr/blog/developpeur-web-brest",
    title: "Développeur Web Brest : Le Guide Ultime pour un Site Qui Rapporte",
    description:
      "À la recherche du meilleur développeur web à Brest ? Découvrez le guide complet pour créer un site internet sur-mesure, rapide et optimisé pour le SEO local, qui transforme vos visiteurs en clients.",
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
      "Développeur Web Brest : Le Guide Ultime pour un Site Qui Rapporte",
    description:
      "À la recherche du meilleur développeur web à Brest ? Découvrez le guide complet pour créer un site internet sur-mesure, rapide et optimisé pour le SEO local, qui transforme vos visiteurs en clients.",
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
        name: "Combien coûte un site web professionnel à Brest ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il faut voir cela comme l'achat d'un véhicule : il y a la Twingo et la Tesla. Un site vitrine sur-mesure, performant et optimisé, représente un investissement qui démarre généralement autour de 1200€ - 1500€. C'est le prix d'un outil de travail conçu pour durer et rapporter, à l'inverse d'une solution bas de gamme qui est un coût net.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps faut-il pour créer un site ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En moyenne, il faut compter entre 2 et 4 semaines pour un projet de qualité. Ce délai inclut notre collaboration sur la stratégie, le design, le développement et les tests. Méfiez-vous des promesses de site en 3 jours, c'est souvent le signe d'un travail bâclé.",
        },
      },
      {
        "@type": "Question",
        name: "Serais-je autonome pour gérer mon site ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, c'est le but ! Je peux intégrer un système de gestion de contenu (CMS) simple et intuitif (comme un headless CMS) et je vous forme à son utilisation. Vous pourrez modifier vos textes, ajouter des actualités ou changer des photos sans jamais toucher au code.",
        },
      },
      {
        "@type": "Question",
        name: "Le référencement local (SEO) est-il vraiment inclus ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument. C'est non-négociable. Un site qui n'est pas optimisé pour Google est une voiture sans moteur. L'optimisation pour le SEO local à Brest (titres, métas, balisage, Google Business Profile) fait partie intégrante de la fondation de chaque site que je construis.",
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
        <div className="py-8 space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Développeur Web Brest : Le Guide Ultime pour un Site Qui Rapporte
            Vraiment
          </h1>
          <p className="">
            Vous êtes artisan, commerçant ou dirigeant de PME à Brest, et vous
            savez qu&apos;il vous faut un site web. Mais vous vous sentez
            peut-être un peu perdu. Vous craignez un projet technique complexe,
            un budget flou, et surtout, un site qui finira par être une simple
            brochure en ligne, sans jamais vous rapporter un seul client.
          </p>
          <p>Oubliez cette vision.</p>
          <p>
            Engager un développeur web à Brest, ce n&apos;est pas acheter un
            simple &quot;produit&quot;. C&apos;est collaborer avec un architecte
            qui va construire votre atout commercial le plus puissant. Ce guide
            est conçu pour démystifier ce processus et vous donner toutes les
            clés pour faire de votre futur site un véritable moteur de
            croissance pour votre activité dans le Finistère.
          </p>
        </div>

        <nav
          aria-label="Table des matières"
          className="border border-gray-500 bg-white p-6 rounded-2xl py-8"
        >
          <ul className="list-disc space-y-2">
            <li className="underline hover:text-blue-600">
              <a href="#la-dure-realité">
                La Dure Réalité : Pourquoi un Site &quot;Bricolé&quot; ou Bas de
                Gamme Vous Coûte de l&apos;Argent
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#pourquoi-faire-appel-a-un-developpeur-web-a-brest">
                Pourquoi faire appel à un développeur web à Brest ?{" "}
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#mon-role-de-developpeur">
                Mon rôle de développeur : Architecte de votre croissance
                digitale
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#comment-bien-choisir-votre-developpeur-web-a-brest">
                Comment Bien Choisir Votre Développeur Web à Brest ?
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

        <section id="la-dure-realité" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            La Dure Réalité : Pourquoi un Site &quot;Bricolé&quot; ou Bas de
            Gamme Vous Coûte de l&apos;Argent
          </h2>
          <p>
            En 2025, ne pas avoir de site, c&apos;est être invisible. Mais avoir
            un mauvais site, c&apos;est pire. Un site créé à la va-vite sur une
            plateforme &quot;gratuite&quot; ou avec un thème WordPress bas de
            gamme à 50$ est un poids mort pour votre entreprise.
          </p>
          <ul className="list-disc space-y-2 ml-6">
            <li>
              <strong>Il détruit votre crédibilité </strong> : Un design daté,
              des bugs, une lenteur... 94% des premières impressions sont liées
              au design. Un site amateur = une entreprise perçue comme amateur.
            </li>
            <li>
              <strong>Il est invisible sur Google</strong> : Sans une structure
              technique pensée pour le SEO, vous n&apos;apparaîtrez jamais quand
              un client potentiel tape &quot;plombier chauffagiste Brest&quot;
              ou &quot;meilleur restaurant de fruits de mer&quot;.
            </li>
            <li>
              <strong>Il est une passoire de sécurité </strong> : Les solutions
              bas de gamme sont les cibles N°1 des piratages. Le risque ? Votre
              site est hors service, vos données volées, votre réputation
              ruinée.
            </li>
            <li>
              <strong>Il ne convertit personne </strong> : Aucune stratégie,
              aucun appel à l&apos;action... les visiteurs arrivent et repartent
              aussi vite.
            </li>
          </ul>

          <p className="bg-blue-50 p-4 rounded-lg border border-blue-500">
            <CircleCheck className="text-blue-600 mb-2" />
            Faire appel à un développeur web professionnel, ce n&apos;est pas
            une dépense, c&apos;est une assurance contre ces risques et un
            investissement pour vos revenus futurs.
          </p>
        </section>

        <Divider />

        <section
          id="pourquoi-faire-appel-a-un-developpeur-web-a-brest"
          className="py-8 space-y-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Les 5 Piliers d&apos;un Site Rentable en 2025
          </h2>
          <p className="font-semibold  mt-4">
            Un site web efficace n&apos;est pas une œuvre d&apos;art, c&apos;est
            une machine de précision. Il repose sur 5 piliers que tout bon
            développeur à Brest doit maîtriser.
          </p>
          <ol className="list-decimal space-y-2 ml-6">
            <li>
              <strong>La Performance (La Vitesse) </strong> : Votre site doit se
              charger en moins de 2 secondes sur mobile. Chaque seconde de plus,
              c&apos;est 7% de conversions en moins. Je construis des sites avec
              des technologies modernes (Next.js) pour une vitesse fulgurante,
              un critère essentiel pour Google (Core Web Vitals).
            </li>
            <li>
              <strong>L&apos;Expérience Utilisateur (UX)</strong> : Votre
              visiteur doit trouver l&apos;information qu&apos;il cherche en
              moins de 3 clics. La navigation doit être intuitive, les textes
              lisibles et les boutons d&apos;action (demander un devis, appeler)
              évidents.
            </li>
            <li>
              <strong>Le SEO Local</strong> : C&apos;est le nerf de la guerre.
              Le site doit être techniquement optimisé pour que Google comprenne
              que vous êtes un acteur majeur à Brest. Cela inclut le balisage
              Schema.org, l&apos;optimisation pour Google Maps et la création de
              pages qui répondent aux requêtes locales.
            </li>
            <li>
              <strong>Le Design Sur-Mesure</strong> : Votre site doit être
              unique et refléter votre identité. Pas question d&apos;utiliser un
              template vu et revu. Un design personnalisé renforce votre image
              de marque et vous différencie de la concurrence brestoise.
            </li>
            <li>
              <strong>La Sécurité et l&apos;Évolutivité</strong> : Votre site
              doit être une forteresse. Je garantis une sécurité robuste et une
              structure de code propre qui permettra à votre site d&apos;évoluer
              avec votre entreprise sans devoir tout refaire dans 2 ans.
            </li>
          </ol>
        </section>

        <Divider />

        <section id="mon-role-de-developpeur" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Mon Rôle de Développeur : Architecte de Votre Croissance Digitale{" "}
          </h2>
          <p className="font-semibold mt-4">
            Voici ma méthode de travail, conçue pour être transparente,
            collaborative et entièrement centrée sur vos objectifs.
          </p>
          <ul className="list-disc space-y-2 ml-6">
            <li>
              <strong>Étape 1 : Immersion et Stratégie. </strong> On ne parle
              pas de code, on parle de votre business. Qui sont vos clients ?
              Quels sont vos objectifs ? Cette phase de &quot;cahier des
              charges&quot; est cruciale pour construire un site qui sert votre
              stratégie.
            </li>
            <li>
              <strong>Étape 2 : Conception et Maquettage. </strong> Je traduis
              notre stratégie en maquettes visuelles (UX/UI Design). Vous
              visualisez la structure et l&apos;apparence de votre futur site
              avant même qu&apos;une ligne de code ne soit écrite.
            </li>
            <li>
              <strong>Étape 3 : Développement Sur-Mesure. </strong> C&apos;est
              ici que la magie opère. Je construis votre site, non pas en
              assemblant des plugins, mais en codant des fondations solides,
              rapides et sécurisées.
            </li>
            <li>
              <strong>Étape 4 : Optimisation et Lancement. </strong> Je peaufine
              le SEO, je teste la performance sur tous les appareils et je
              prépare la mise en ligne, qui se fait sans aucune interruption de
              service.
            </li>
            <li>
              <strong>Étape 5 : Formation et Suivi. </strong> Vous n&apos;êtes
              pas abandonné dans la nature. Je vous forme pour que vous puissiez
              gérer votre contenu en toute autonomie (si vous le souhaitez) et
              je propose des solutions de maintenance pour votre tranquillité
              d&apos;esprit.
            </li>
          </ul>
        </section>

        <Divider />

        <section
          id="comment-bien-choisir-votre-developpeur-web-a-brest"
          className="py-8 space-y-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Comment Bien Choisir Votre Développeur Web à Brest ? La Checklist
            Anti-Arnaque
          </h2>
          <p className="font-semibold text-lg mt-4">
            Posez ces questions à n&apos;importe quel prestataire. Ses réponses
            vous diront tout.
          </p>
          <ol className="list-decimal space-y-2 ml-6">
            <li>
              <strong>Portfolio et Cas Clients</strong> : &quot;Pouvez-vous me
              montrer un site que vous avez créé qui a réellement amélioré le
              business d&apos;un de vos clients à Brest ?&quot; (Allez plus loin
              que le &quot;joli&quot;).
            </li>
            <li>
              <strong>La Question Technique Piège</strong> : &quot;Utilisez-vous
              un thème acheté ou codez-vous sur-mesure ? Quelle est votre
              approche pour les Core Web Vitals ?&quot; (S&apos;il est vague,
              fuyez).
            </li>
            <li>
              <strong>La Vision Business</strong> : &quot;Comment mon site
              va-t-il m&apos;aider à trouver plus de clients pour [votre
              activité] dans la région de Brest ?&quot; (Un bon dev parle de
              stratégie, pas que de technique).
            </li>
            <li>
              <strong>Transparence Totale </strong> : &quot;Le devis inclut-il
              tout ? Serais-je bien 100% propriétaire de mon site et de mon nom
              de domaine à la fin ?&quot;
            </li>
            <li>
              <strong>L&apos;Après-Vente</strong> : &quot;Que se passe-t-il si
              mon site a un problème dans 6 mois ? Proposez-vous une maintenance
              ?&quot;
            </li>
          </ol>
        </section>

        <Divider />

        <section id="faq" className="py-8 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            FAQ : Les Réponses Claires à Vos Questions sur la Création de Site
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
                  Combien coûte un site web professionnel à Brest ?{" "}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Il faut voir cela comme l&apos;achat d&apos;un véhicule : il
                    y a la Twingo et la Tesla. Un site vitrine sur-mesure,
                    performant et optimisé, représente un investissement qui
                    démarre généralement autour de 1200€ - 1500€. C&apos;est le
                    prix d&apos;un outil de travail conçu pour durer et
                    rapporter, à l&apos;invers de une solution bas de gamme qui
                    est un coût net.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Combien de temps faut-il pour créer un site ?{" "}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    En moyenne, il faut compter entre 3 et 6 semaines pour un
                    projet de qualité. Ce délai inclut notre collaboration sur
                    la stratégie, le design, le développement et les tests.
                    Méfiez-vous des promesses de &quot;site en 3 jours&quot;,
                    c&apos;est souvent le signe d&apos;un travail bâclé.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Serais-je autonome pour gérer mon site ?{" "}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Oui, c&apos;est le but ! Je peux intégrer un système de
                    gestion de contenu (CMS) simple et intuitif (comme un
                    &quot;headless&quot; CMS) et je vous forme à son
                    utilisation. Vous pourrez modifier vos textes, ajouter des
                    actualités ou changer des photos sans jamais toucher au
                    code.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Le référencement local (SEO) est-il vraiment inclus ?{" "}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Absolument. C&apos;est non-négociable. Un site qui
                    n&apos;est pas optimisé pour Google est une voiture sans
                    moteur. L&apos;optimisation pour le SEO local à Brest
                    (titres, métas, balisage, Google Business Profile) fait
                    partie intégrante de la fondation de chaque site que je
                    construis.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <Divider />

        <section id="conclusion" className="py-8 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Conclusion : Votre Prochain Client Vous Cherche sur Google.
            Sera-t-il capable de Vous Trouver ?
          </h2>

          <p>
            Arrêtez de considérer votre site web comme une simple charge.
            Voyez-le comme votre futur meilleur commercial, celui qui travaille
            pour vous 24/7, qui accueille vos clients, répond à leurs questions
            et les convainc de vous choisir.
          </p>

          <p>
            Collaborer avec un{" "}
            <strong>développeur web freelance à Brest</strong>, c&apos;est faire
            le choix d&apos;un partenaire dédié à votre succès, qui allie
            l&apos;expertise technique à une compréhension fine de votre réalité
            d&apos;entrepreneur local.
          </p>

          <div className="flex flex-col justify-center mt-4 space-y-2">
            <h3 className="text-lg font-semibold tracking-tight ">
              Prêt à construire un site qui travaille enfin pour vous ?
            </h3>
            <p>
              Je vous invite à une session stratégique gratuite de 30 minutes.
              Nous discuterons de vos objectifs, nous analyserons vos besoins et
              je vous donnerai un plan d&apos;action clair pour votre projet.
              Sans engagement, juste de la valeur.
            </p>
            <Button href="/contact" color="blue">
              Réserver ma Session Stratégique Gratuite
            </Button>
          </div>
        </section>
      </article>
    </main>
  );
}
