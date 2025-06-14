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
          text: "Pas forcément. Mais si votre CMS ne le permet pas, une refonte sera plus rapide qu’un patch.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je garder mon nom de domaine et mes contenus ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Je préserve votre SEO existant tout en optimisant les performances.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps dure une refonte ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entre 2 et 4 semaines selon la complexité. Une version mobile-first est prioritaire.",
        },
      },
      {
        "@type": "Question",
        name: "Une refonte peut-elle améliorer mon référencement local ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, surtout si l’on travaille vos mots-clés, titres, balises, et contenus géolocalisés.",
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
            Refonte site internet Brest : boostez votre présence locale en 2025
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Refonte site internet Brest : offrez une seconde vie à votre site
            web avec un design moderne, SEO local et performance mobile. Audit
            gratuit !
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
                Quels signaux montrent que votre site a besoin d’une refonte ?{" "}
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#benefices-concrets-dune-refonte-bien-menée">
                Les bénéfices concrets d’une refonte bien menée
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#etapes-clés-dune-refonte-reussie-avec-un-freelance-a-brest">
                Étapes clés d’une refonte réussie avec un freelance à Brest
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#refonte-ou-creation-que-choisir-selon-votre-situation">
                Refonte ou création : que choisir selon votre situation ?
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#combien-coute-une-refonte-de-site-internet-a-brest">
                Combien coûte une refonte de site internet à Brest ?{" "}
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#pourquoi-me-confier-votre-refonte-web-a-brest">
                Pourquoi me confier votre refonte web à Brest ?
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
            En 2025, un site web obsolète coûte plus qu’il ne rapporte. Avec
            l’arrivée massive de l’IA dans les moteurs de recherche (Search
            Generative Experience), Google met désormais l’accent sur :
          </p>
          <ul className="list-disc space-y-2 ml-6">
            <li>la rapidité mobile (Core Web Vitals),</li>
            <li>le contenu localisé,</li>
            <li>l’UX design centré utilisateur.</li>
          </ul>
          <p className="">
            Si votre site date de plus de 3 ans, il est probablement inadapté
            aux standards actuels, notamment à Brest où la concurrence digitale
            locale s’intensifie.
          </p>
        </section>

        <Divider />

        <section
          id="quels-signaux-montrent-que-votre-site-a-need-dune-refonte"
          className="py-8 space-y-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Quels signaux montrent que votre site a besoin d’une refonte ?
          </h2>
          <p className="font-semibold text-lg mt-4">
            Voici des symptômes fréquents à ne pas ignorer :
          </p>
          <ul className="list-disc space-y-2 ml-6">
            <li>Taux de rebond élevé (supérieur à 60 %)</li>
            <li>Temps de chargement supérieur à 3 secondes</li>
            <li>Design non responsive</li>
            <li>Contenu obsolète</li>
            <li>Pas ou peu de présence sur Google (hors nom de marque)</li>
            <li>Absence de certificat SSL ou mentions légales</li>
            <li>Navigation confuse, CTA absents</li>
          </ul>
          <p className="flex items-center gap-2 italic mt-6">
            <TriangleAlert className="w-10 h-10 text-yellow-500" />À éviter :
            bricoler une refonte seul sur un thème WordPress mal optimisé. Mieux
            vaut investir dans une refonte stratégique.
          </p>
        </section>

        <Divider />

        <section
          id="benefices-concrets-dune-refonte-bien-menée"
          className="py-8 space-y-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Les bénéfices concrets d’une refonte bien menée{" "}
          </h2>
          <p className="font-semibold text-lg mt-4">
            Une refonte ne sert pas seulement à « faire joli ». Voici ce qu’elle
            change :
          </p>
          <ul className="list-disc space-y-2 ml-6">
            <li>
              <strong>Meilleur positionnement local</strong> sur Google (ex :
              “plombier Brest”)
            </li>
            <li>
              <strong>Taux de conversion boosté</strong> (réservations, appels,
              devis)
            </li>
            <li>
              <strong>Crédibilité renforcée</strong> auprès de vos prospects
            </li>
            <li>
              <strong>Connexion à vos outils métier</strong>(planning, agenda,
              CRM)
            </li>
            <li>
              <strong>Sécurité, RGPD et conformité</strong> renforcées
            </li>
          </ul>
          <p className="flex items-center  italic mt-6">
            <TargetIcon className="w-6 h-6 mr-2" /> Objectif : transformer votre
            site en levier commercial actif.
          </p>
        </section>

        <Divider />

        <section
          id="etapes-clés-dune-refonte-reussie-avec-un-freelance-a-brest"
          className="py-8 space-y-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Étapes clés d’une refonte réussie avec un freelance à Brest{" "}
          </h2>
          <p className="font-semibold text-lg mt-4">
            Voici ma méthode éprouvée :{" "}
          </p>
          <ol className="list-decimal space-y-2 ml-6">
            <li>
              <strong>Audit technique & UX</strong>
              <p>
                Analyse des faiblesses actuelles (SEO, structure, performances).
              </p>
            </li>
            <li>
              <strong>Recommandations sur mesure</strong>
              <p>
                Plan de refonte clair, priorisé selon vos objectifs business.
              </p>
            </li>
            <li>
              <strong>Maquettage & design responsive</strong>
              <p>Modernisation graphique avec identité visuelle cohérente.</p>
            </li>
            <li>
              <strong>Re-développement optimisé</strong>
              <p>
                Code propre, rapide, SEO-ready (Next.js, Tailwind, Schema.org).
              </p>
            </li>
          </ol>

          <p className="flex items-center space-x-2 italic mt-6">
            Les outils utilisés : Lighthouse, Ahrefs, Figma, Vercel, Cloudflare,
            Google Search Console.
          </p>
        </section>

        <Divider />

        <section
          id="refonte-ou-creation-que-choisir-selon-votre-situation"
          className="py-8 space-y-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Refonte ou création : que choisir selon votre situation ?{" "}
          </h2>
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
            Combien coûte une refonte de site internet à Brest ?
          </h2>
          <p>
            Voici des ordres de prix pour une refonte sérieuse, sans thème
            préfabriqué :
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
              <strong>E-commerce ou fonctionnalités avancées</strong> : sur
              devis
            </li>
          </ul>
          <div className="flex justify-center mt-6 text-center">
            <Button href="/services" color="blue">
              Voir nos offres de création de site web à Brest
            </Button>
          </div>
        </section>

        <Divider />

        <section
          id="pourquoi-me-confier-votre-refonte-web-a-brest"
          className="py-8 space-y-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Pourquoi me confier votre refonte web à Brest ?{" "}
          </h2>
          <ul className="list-disc space-y-2 ml-6">
            <li>Développeur web diplômé à Brest</li>
            <li>Spécialiste SEO local et UX conversion</li>
            <li>Connaissance du tissu économique brestois</li>
            <li>Accompagnement humain, audit gratuit</li>
            <li>Code sur mesure (Next.js, SEO technique 2025)</li>
          </ul>
          <div className="flex justify-center mt-6 text-center">
            <Button href="/a-propos" color="blue">
              À propos – mon parcours de développeur freelance à Brest
            </Button>
          </div>
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
                    Pas forcément. Mais si votre CMS ne le permet pas, une
                    refonte sera plus rapide qu’un patch.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Puis-je garder mon nom de domaine et mes contenus ?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Oui. Je préserve votre SEO existant tout en optimisant les
                    performances.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Combien de temps dure une refonte ?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Entre 2 et 4 semaines selon la complexité. Une version
                    mobile-first est prioritaire.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Une refonte peut-elle améliorer mon référencement local ?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Oui, surtout si l’on travaille vos mots-clés, titres,
                    balises, et contenus géolocalisés.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <Divider />

        <section id="conclusion" className="py-8 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Conclusion et audit offert
          </h2>

          <p>
            Une refonte réussie, c’est bien plus qu’un coup de peinture. C’est
            un investissement stratégique pour booster vos ventes, améliorer
            votre référencement local à Brest et offrir une expérience
            irréprochable à vos visiteurs.
          </p>

          <div className="flex justify-center mt-4">
            <Button href="/contact" color="blue">
              Contactez-moi pour un audit offert
            </Button>
          </div>
        </section>
      </article>
    </main>
  );
}
