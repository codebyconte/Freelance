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
import {
  Lightbulb,
  TriangleAlert,
  CodeXml,
  MessageCircleMore,
  TargetIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "Refonte site internet Brest : boostez votre présence locale en 2025",
  description:
    "Refonte site internet Brest : offrez une seconde vie à votre site web avec un design moderne, SEO local et performance mobile. Audit gratuit !",
  alternates: {
    canonical: "https://www.codebyconte.fr/blog/refonte-site-internet-brest",
  },
  openGraph: {
    url: "https://www.codebyconte.fr/blog/refonte-site-internet-brest",
    title:
      "Refonte site internet Brest : boostez votre présence locale en 2025",
    description:
      "Refonte site internet Brest : offrez une seconde vie à votre site web avec un design moderne, SEO local et performance mobile. Audit gratuit !",
    siteName: "Code By Conte",
    locale: "fr_FR",
    type: "article",
    images: [
      {
        url: "https://www.codebyconte.fr/refonte-site-internet-brest.jpg",
        width: 1200,
        height: 630,
        alt: "Refonte site internet Brest",
      },
    ],
  },
};

export default function Page() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Refonte site internet Brest : boostez votre présence locale en 2025",
    description:
      "Refonte site internet Brest : offrez une seconde vie à votre site web avec un design moderne, SEO local et performance mobile. Audit gratuit !",
    author: {
      "@type": "Person",
      name: "Conte Mouctar",
      url: "https://www.codebyconte.fr",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.codebyconte.fr/blog/refonte-site-internet-brest",
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
        name: "Faut-il refaire entièrement mon site pour qu’il soit mobile-friendly ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pas toujours, mais c'est souvent la solution la plus rentable. Adapter un vieux moteur (un thème ou un CMS ancien) coûte parfois plus cher et est moins performant que d'installer un moteur neuf et moderne. Une refonte garantit un résultat parfait sur tous les écrans.",
        },
      },
      {
        "@type": "Question",
        name: "Vais-je perdre mon nom de domaine et mes contenus ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument pas ! C'est l'un des points les plus critiques. Nous conservons votre nom de domaine, vos URL importantes et votre contenu pertinent. Mon travail consiste à tout transférer sur les nouvelles fondations en préservant, et même en améliorant, votre capital SEO.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps dure une refonte ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pour un site vitrine, comptez généralement entre 2 et 4 semaines, de notre premier échange à la mise en ligne. Ce délai nous permet de bien valider chaque étape sans précipitation, en priorisant une approche mobile-first.",
        },
      },
      {
        "@type": "Question",
        name: "Une refonte garantit-elle un meilleur référencement local ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, c'est l'un de ses objectifs principaux ! Un site rapide, techniquement sain, avec une structure claire et un contenu optimisé pour des requêtes locales (électricien Plouzané, crêperie Brest centre) envoie tous les bons signaux à Google pour vous positionner favorablement.",
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
            Refonte de Site Internet à Brest : Le Guide pour Transformer Votre
            Site en Machine à Clients{" "}
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Votre site web est censé être votre meilleur commercial. Mais que
            faire quand il ressemble plus à une boutique vieillissante au fond
            d&apos;une impasse ? Si votre site actuel ne vous apporte ni appels,
            ni devis, ni fierté, alors vous êtes au bon endroit. Une refonte
            n&apos;est pas qu&apos;un coup de peinture numérique. C&apos;est une
            rénovation stratégique pour transformer votre présence en ligne en
            un véritable moteur de croissance pour votre activité à Brest.
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
              <a href="#pourquoi-refonte-site-internet-brest">
                Pourquoi envisager une refonte de site à Brest en 2025 ?{" "}
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#quels-signaux-montrent-que-votre-site-a-need-dune-refonte">
                Les 7 Signes qu&apos;il est Urgent de Lancer Votre Projet de
                Refonte{" "}
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#benefices-concrets-dune-refonte-bien-menée">
                Les Bénéfices Concrets d&apos;une Refonte Stratégique{" "}
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#etapes-clés-dune-refonte-reussie-avec-un-freelance-a-brest">
                Les 4 Étapes Clés d’une Refonte Réussie avec un Freelance à
                Brest{" "}
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#refonte-ou-creation-que-choisir-selon-votre-situation">
                Refonte ou Création : Que Choisir pour Votre Projet à Brest ?{" "}
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#combien-coute-une-refonte-de-site-internet-a-brest">
                Quel Budget Prévoir pour une Refonte de Site Internet à Brest ?{" "}
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#faq">FAQ</a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#conclusion">Conclusion et audit offert</a>
            </li>
          </ul>
        </nav>

        <section
          id="pourquoi-refonte-site-internet-brest"
          className="py-8 space-y-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Pourquoi envisager une refonte de site à Brest en 2025 ?
          </h2>
          <p className="">
            Imaginez une boutique sur la rue Jean Jaurès avec une façade des
            années 90. Les clients passeraient devant sans même la voir. Sur
            internet, c&apos;est encore plus rapide. En 2025, un site web
            obsolète est un frein invisible mais puissant à votre développement.
          </p>

          <p className="">
            Google, avec ses nouvelles expériences de recherche (IA, SGE), ne se
            contente plus d&apos;un site &quot;joli&quot;. Il exige et
            récompense :
          </p>
          <ul className="list-disc space-y-2 ml-6">
            <li>
              <strong>
                Une vitesse de chargement irréprochable sur mobile
              </strong>
              (les fameux Core Web Vitals).
            </li>
            <li>
              <strong>
                Une expérience utilisateur (UX) fluide et intuitive
              </strong>{" "}
              , qui guide le visiteur vers l&apos;action.
            </li>
            <li>
              <strong>Un contenu pertinent et localisé </strong> qui répond
              précisément aux questions des Brestois.
            </li>
          </ul>
          <p className="">
            Si votre site a plus de 3 ou 4 ans, il est fort probable qu&apos;il
            ne coche plus ces cases. Pendant ce temps, vos concurrents plus
            modernes captent les clients que vous devriez avoir.
          </p>
        </section>

        <Divider />

        <section
          id="quels-signaux-montrent-que-votre-site-a-need-dune-refonte"
          className="py-8 space-y-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Les 7 Signes qu&apos;il est Urgent de Lancer Votre Projet de Refonte
          </h2>
          <p className="font-semibold text-lg mt-4">
            Votre site web vous envoie des signaux de détresse. Voici un
            diagnostic rapide. Si vous cochez 2 ou 3 de ces cases, il est temps
            d&apos;agir :{" "}
          </p>
          <ol className="list-decimal space-y-2 ml-6">
            <li>
              <strong>Votre taux de rebond explose ?</strong> (plus de 60% des
              visiteurs partent sans cliquer nulle part). C&apos;est le signe
              d&apos;une mauvaise première impression.
            </li>
            <li>
              <strong>
                Il faut plus de 3 secondes pour qu&apos;il s&apos;affiche ?
              </strong>{" "}
              Vos visiteurs sont déjà partis chez un concurrent.
            </li>
            <li>
              <strong>Il s&apos;affiche mal sur smartphone ?</strong> Vous
              ignorez plus de la moitié de vos clients potentiels.
            </li>
            <li>
              <strong>Son design semble &quot;daté&quot; ?</strong> Il nuit à
              votre crédibilité et renvoie une image peu professionnelle.
            </li>
            <li>
              <strong>Vous êtes invisible sur Google ?</strong> pour des
              recherches clés comme &quot;artisan couvreur Brest&quot; ou
              &quot;restaurant fruits de mer port de commerce&quot; ? Votre SEO
              est à l&apos;abandon.
            </li>
            <li>
              <strong>Le modifier est un casse-tête ?</strong>Vous ne pouvez pas
              être autonome pour ajouter une actualité ou changer une promotion.
            </li>
            <li>
              <strong>Il ne génère aucun contact qualifié ?</strong> Pas
              d&apos;appels, pas de formulaires remplis. Il ne remplit pas sa
              mission première.
            </li>
          </ol>
          <p className="flex items-center gap-2  mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-500">
            <TriangleAlert className="w-10 h-10 text-yellow-500" />
            Le piège à éviter : Tenter de &quot;bricoler&quot; un vieux site
            avec des plugins lourds ou un thème WordPress mal optimisé.
            C&apos;est souvent plus coûteux et moins efficace qu&apos;une
            refonte de site internet à Brest menée par un expert.
          </p>
        </section>

        <Divider />

        <section
          id="benefices-concrets-dune-refonte-bien-menée"
          className="py-8 space-y-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Les Bénéfices Concrets d&apos;une Refonte Stratégique{" "}
          </h2>
          <p className="font-semibold text-lg mt-4">
            Une refonte bien menée n&apos;est pas une dépense, c&apos;est un
            investissement avec un retour mesurable.
          </p>
          <ul className="list-disc space-y-2 ml-6">
            <li>
              <strong>Visibilité Locale Boostée</strong>
              <p>
                <strong>Ce que c&apos;est </strong> : Optimisation technique et
                sémantique pour le SEO local.
              </p>
              <p>
                <strong>Ce que ça vous apporte </strong> : Vous apparaissez
                enfin en haut des résultats quand un prospect cherche vos
                services à Brest, Guipavas ou Plouzané.
              </p>
            </li>
            <li>
              <strong>Augmentation du Taux de Conversion :</strong>
              <p>
                <strong>Ce que c&apos;est </strong> : Un design centré sur
                l&apos;utilisateur avec des appels à l&apos;action clairs (CTA).
              </p>
              <p>
                <strong>Ce que ça vous apporte </strong> : Plus de demandes de
                devis, plus de réservations, plus d&apos;appels téléphoniques.
                Votre site se met enfin à travailler pour vous.
              </p>
            </li>
            <li>
              <strong>Crédibilité et Image de Marque Renforcées :</strong>
              <p>
                <strong>Ce que c&apos;est </strong> : Un design moderne,
                professionnel et cohérent avec votre identité.
              </p>
              <p>
                <strong>Ce que ça vous apporte </strong> : Vous inspirez
                confiance immédiatement. Vos prospects vous perçoivent comme un
                leader sérieux et établi dans votre domaine à Brest.
              </p>
            </li>
            <li>
              <strong>Sécurité et Conformité Assurées :</strong>
              <p>
                <strong>Ce que c&apos;est </strong> : Un code propre, des
                technologies à jour et une mise en conformité RGPD.
              </p>
              <p>
                <strong>Ce que ça vous apporte </strong> : La tranquillité
                d&apos;esprit. Votre site et les données de vos utilisateurs
                sont protégés contre les attaques.
              </p>
            </li>
          </ul>
          <p className="flex items-center  mt-6 bg-blue-50 p-4 rounded-lg border border-blue-500">
            <TargetIcon className="w-6 h-6 mr-2 text-blue-600" />{" "}
            L&apos;objectif final : Transformer votre site web d&apos;une simple
            carte de visite numérique en votre principal levier
            d&apos;acquisition de clients.
          </p>
        </section>

        <Divider />

        <section
          id="etapes-clés-dune-refonte-reussie-avec-un-freelance-a-brest"
          className="py-8 space-y-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Les 4 Étapes Clés d’une Refonte Réussie avec un Freelance à Brest{" "}
          </h2>
          <p className="font-semibold text-lg mt-4">
            Je ne me contente pas de changer les couleurs. Je reconstruis les
            fondations pour garantir la performance sur le long terme.{" "}
          </p>
          <ol className="list-decimal space-y-2 ml-6">
            <li>
              <strong>
                Phase 1 : Audit et Stratégie (Le Plan de Rénovation)
              </strong>
              <p>
                On analyse ensemble les faiblesses de votre site actuel et,
                surtout, vos objectifs commerciaux. Qui sont vos clients ? Que
                voulez-vous qu&apos;ils fassent sur votre site ?{" "}
              </p>
            </li>
            <li>
              <strong>
                Phase 2 : Maquettage et Design (L&apos;Architecte
                d&apos;Intérieur)
              </strong>
              <p>
                Je conçois une interface moderne et épurée (maquette), centrée
                sur l&apos;expérience de vos futurs clients. Le design doit être
                au service de l&apos;efficacité.
              </p>
            </li>
            <li>
              <strong>
                Phase 3 : Développement et Optimisation (Les Fondations)
              </strong>
              <p>
                C&apos;est le cœur du réacteur. Je développe un site sur-mesure
                avec un code propre et des technologies de pointe (Next.js,
                etc.). La vitesse, la sécurité et le SEO technique sont ma
                priorité absolue.
              </p>
            </li>
            <li>
              <strong>
                Phase 4 : Mise en Ligne et Suivi (La Remise des Clés)
              </strong>
              <p>
                Je gère la migration sans perdre votre référencement existant,
                je connecte vos outils (Google Analytics) et je m&apos;assure
                que tout est parfait. Je peux ensuite vous proposer un plan de
                maintenance pour garantir sa pérennité.
              </p>
            </li>
          </ol>
        </section>

        <Divider />

        <section
          id="refonte-ou-creation-que-choisir-selon-votre-situation"
          className="py-8 space-y-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Refonte ou Création : Que Choisir pour Votre Projet à Brest ?{" "}
          </h2>
          <p className="font-semibold  mt-4">
            Le tableau ci-dessous vous aidera à y voir plus clair.{" "}
          </p>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Situation actuelle</TableHeader>
                <TableHeader>Refonte ou création ?</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Site existant mais lent
                </TableCell>
                <TableCell>Refonte recommandée</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Site non responsive
                </TableCell>
                <TableCell>Refonte urgente</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Pas de site du tout
                </TableCell>
                <TableCell> Création de A à Z</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Site créé en 2015 sans SEO
                </TableCell>
                <TableCell>Refonte + contenu SEO</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Besoin de tunnel de conversion
                </TableCell>
                <TableCell>Refonte stratégique</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <Divider />

        <section
          id="combien-coute-une-refonte-de-site-internet-a-brest"
          className="py-8 space-y-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Quel Budget Prévoir pour une Refonte de Site Internet à Brest ?{" "}
          </h2>
          <p>
            Le coût d&apos;une refonte est un investissement dans votre futur
            chiffre d&apos;affaires. Il dépend de la complexité de votre projet.
            Plutôt que des &quot;prix&quot;, voyez cela comme des points de
            départ pour des solutions durables, conçues sans thèmes préfabriqués
            lents et vulnérables.
          </p>
          <ul className="list-disc space-y-2 ml-6">
            <li>
              <strong>Site vitrine optimisé</strong>: à partir de 990 €
            </li>
            <li>
              <strong>Site évolutif (blog, multi-pages)</strong> : 1490 € à 1990
              €
            </li>
            <li>
              <strong>Refonte sur-mesure </strong>(E-commerce, fonctionnalités
              avancées) : sur devis{" "}
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
                  Faut-il refaire entièrement mon site pour qu’il soit
                  mobile-friendly ?{" "}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Pas toujours, mais c&apos;est souvent la solution la plus
                    rentable. Adapter un &quot;vieux moteur&quot; (un thème ou
                    un CMS ancien) coûte parfois plus cher et est moins
                    performant que d&apos;installer un moteur neuf et moderne.
                    Une refonte garantit un résultat parfait sur tous les
                    écrans.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Vais-je perdre mon nom de domaine et mes contenus ?{" "}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Absolument pas ! C&apos;est l&apos;un des points les plus
                    critiques. Nous conservons votre nom de domaine, vos URL
                    importantes et votre contenu pertinent. Mon travail consiste
                    à tout transférer sur les nouvelles fondations en
                    préservant, et même en améliorant, votre capital SEO.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Combien de temps dure une refonte ?{" "}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Pour un site vitrine, comptez généralement entre 2 et 4
                    semaines, de notre premier échange à la mise en ligne. Ce
                    délai nous permet de bien valider chaque étape sans
                    précipitation, en priorisant une approche
                    &quot;mobile-first&quot;.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Une refonte garantit-elle un meilleur référencement local ?{" "}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Oui, c&apos;est l&apos;un de ses objectifs principaux ! Un
                    site rapide, techniquement sain, avec une structure claire
                    et un contenu optimisé pour des requêtes locales
                    (&quot;électricien Plouzané&quot;, &quot;crêperie Brest
                    centre&quot;) envoie tous les bons signaux à Google pour
                    vous positionner favorablement.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <Divider />

        <section id="conclusion" className="py-8 space-y-3  ">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Conclusion : Il est Temps de Donner un Nouvel Élan à Votre Activité{" "}
          </h2>
          <div className="space-y-2">
            <p>
              N&apos;attendez pas que votre site web devienne une antiquité
              numérique qui freine votre entreprise. En 2025, la refonte de
              votre site internet à Brest est l&apos;action la plus rentable que
              vous puissiez entreprendre pour dynamiser votre visibilité,
              renforcer votre crédibilité et acquérir de nouveaux clients.
            </p>

            <p>
              C&apos;est un investissement stratégique qui vous redonne le
              contrôle de votre image et de votre croissance.
            </p>
          </div>
          <div className="space-y-4 mt-8 text-center">
            <h3 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Prêt à découvrir le potentiel caché de votre présence en ligne ?
            </h3>
            <div>
              Je vous propose un audit stratégique de votre site actuel.
              C&apos;est gratuit, sans engagement, et vous repartirez avec un
              plan d&apos;action clair et des conseils concrets.
            </div>
            <div className="flex justify-center mt-4">
              <Button href="/contact" color="blue">
                Demander Mon Audit Stratégique Gratuit
              </Button>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
