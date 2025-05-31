// app/blog/agence-web-brest/page.jsx

import { Lightbulb, BadgeCheck, TriangleAlert } from "lucide-react";
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title:
    "Agence web Brest : freelance ou agence, que choisir pour votre site ?",
  description:
    "Freelance ou agence web à Brest ? Découvrez les avantages de chaque solution pour créer votre site internet et faites le bon choix pour votre entreprise.",
  alternates: {
    canonical:
      "https://www.codebyconte.fr/blog/agence-web-brest-freelance-vs-agence",
  },
  openGraph: {
    url: "https://www.codebyconte.fr/blog/agence-web-brest-freelance-vs-agence",
    title:
      "Agence web Brest : freelance ou agence, que choisir pour votre site ?",
    description:
      "Freelance ou agence web à Brest ? Découvrez les avantages de chaque solution pour créer votre site internet et faites le bon choix pour votre entreprise.",
    siteName: "Code By Conte",
    locale: "fr_FR",
    type: "article",
    images: [
      {
        url: "/agence-web.jpg",
        width: 1200,
        height: 630,
        alt: "Agence web à Brest",
      },
    ],
  },
};

export default function Page() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Agence web Brest : freelance ou agence, que choisir pour votre site ?",
    description:
      "Freelance ou agence web à Brest ? Découvrez les avantages de chaque solution pour créer votre site internet et faites le bon choix pour votre entreprise.",
    author: {
      "@type": "Person",
      name: "Conte Mouctar",
      url: "https://www.codebyconte.fr",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.codebyconte.fr/blog/agence-web-brest-freelance-vs-agence",
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
        name: "Quelle est la différence entre un développeur web freelance et une agence ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un freelance travaille seul, souvent spécialisé, avec une relation directe. Une agence regroupe plusieurs profils et gère des projets plus complets.",
        },
      },
      {
        "@type": "Question",
        name: "Un freelance peut-il faire un site aussi bien qu’une agence ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, surtout pour les projets vitrines, sites pro ou refontes simples. La qualité dépend de l’expérience du freelance.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte un site internet à Brest ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chez un freelance : 1000–2000 €. Chez une agence : 3000–6000 €. Ces prix varient selon les options (SEO, blog, e-commerce…).",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on commencer avec un freelance puis évoluer ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bien sûr ! Un freelance peut poser les bases d’un site évolutif, avec la possibilité d’ajouter des fonctionnalités ensuite.",
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
            Agence web Brest : freelance ou agence, que choisir pour votre site
            ?
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Freelance ou agence web à Brest ? Découvrez les avantages de chaque
            solution pour créer votre site internet et faites le bon choix pour
            votre entreprise.
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
              <a href="#freelance-agence">
                1. Freelance ou agence web à Brest : quelles différences ?
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#avantages-freelance">
                2. Les avantages d’un freelance pour la création de site web
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#avantages-agence">
                3. Les avantages d’une agence web à Brest
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#limites">4. Les limites des deux options</a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#choisir">
                5. Comment choisir le bon prestataire à Brest ?
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
          <p>
            Vous cherchez une <strong>agence web à Brest</strong> pour créer ou
            refondre votre site internet ? Mais un doute persiste :{" "}
            <strong>faut-il passer par une agence ou un freelance ?</strong>
            Les deux options existent dans le paysage digital brestois, chacune
            avec ses avantages.
          </p>
          <p>
            Dans cet article, je vous propose un comparatif clair, local et
            honnête, pour vous aider à faire le bon choix selon votre besoin,
            votre budget, et votre niveau d’accompagnement souhaité.
          </p>
        </section>

        <Divider />

        <section id="freelance-agence" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            1. Freelance ou agence web à Brest : quelles différences ?
          </h2>
          <p className="font-semibold text-lg mt-4">Définition rapide</p>
          <ul className="list-disc space-y-2 ml-6">
            <li>
              <strong>Freelance </strong> : professionnel indépendant, souvent
              spécialisé (ex : développeur web, graphiste, SEO…).
            </li>
            <li>
              <strong>Agence web</strong> : équipe pluridisciplinaire (design,
              développement, marketing), souvent structurée en pôle.
            </li>
          </ul>
          <p className="font-semibold text-lg">Fonctionnement</p>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Critère</TableHeader>
                <TableHeader>Freelance</TableHeader>
                <TableHeader>Agence</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Structure</TableCell>
                <TableCell>Indépendant</TableCell>
                <TableCell>Équipe ou entreprise</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Processus</TableCell>
                <TableCell>Flexible, plus direct</TableCell>
                <TableCell>Plus formel (brief, devis, délais)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Outils & méthodes</TableCell>
                <TableCell>Adaptés à sa spécialité</TableCell>
                <TableCell>Standards d’équipe, méthodologie complète</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Communication</TableCell>
                <TableCell>1 interlocuteur direct</TableCell>
                <TableCell>Plusieurs interlocuteurs (chef de projet)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="flex items-center space-x-2 italic mt-6">
            <Lightbulb className="text-yellow-500 w-10 h-10" /> À Brest, de
            nombreux freelances comme moi travaillent avec des outils pro
            identiques à ceux des agences.
          </p>
        </section>

        <Divider />

        <section id="avantages-freelance" className="py-8 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            2. Les avantages d’un freelance pour la création de site web
          </h2>
          <div className="mt-4">
            <h3 className="flex items-center text-lg font-semibold">
              <BadgeCheck className="text-green-500 w-6 h-6 mr-2" /> Réactivité
              & proximité
            </h3>
            <p>
              Un freelance gère tout lui-même. Résultat : un échange direct,
              rapide, sans intermédiaire. Parfait si vous cherchez une relation
              humaine et de proximité.
            </p>
          </div>
          <div>
            <h3 className="flex items-center text-lg font-semibold">
              <BadgeCheck className="text-green-500 w-6 h-6 mr-2" /> Budget
              souvent plus souple
            </h3>
            <p>
              Pas de structure à faire tourner, pas de TVA (souvent
              autoentrepreneur) = des tarifs plus accessibles.{" "}
              <em>
                Exemple : un site vitrine à partir de 900–1500 €, contre 3000 €
                minimum en agence.
              </em>
            </p>
          </div>
          <div>
            <h3 className="flex items-center text-lg font-semibold">
              <BadgeCheck className="text-green-500 w-6 h-6 mr-2" /> Expertise
              ciblée
            </h3>
            <p>
              Certains freelances sont ultra pointus dans leur domaine : SEO,
              performance, e-commerce, etc. Idéal si vous avez un besoin
              spécifique (refonte SEO, mise en conformité RGPD, site ultra
              rapide…).
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <Button href="/services">
              Découvrir mes offres de création de site
            </Button>
          </div>
        </section>

        <Divider />

        <section id="avantages-agence" className="py-8 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            3. Les avantages d’une agence web à Brest
          </h2>
          <div className="mt-4">
            <h3 className="flex items-center text-lg font-semibold">
              <BadgeCheck className="text-green-500 w-6 h-6 mr-2" /> Une équipe
              complète
            </h3>
            <p>
              Créa, développement, stratégie, maintenance : tout est pris en
              charge. C’est rassurant si vous cherchez un prestataire
              tout-en-un.
            </p>
          </div>
          <div>
            <h3 className="flex items-center text-lg font-semibold">
              <BadgeCheck className="text-green-500 w-6 h-6 mr-2" /> Capacité à
              gérer des gros projets
            </h3>
            <p>
              Si vous avez besoin d’un site complexe (intranet, SaaS,
              multisite…), une agence avec des développeurs en interne pourra
              mobiliser les ressources nécessaires.
            </p>
          </div>
          <div>
            <h3 className="flex items-center text-lg font-semibold">
              <BadgeCheck className="text-green-500 w-6 h-6 mr-2" />{" "}
              Accompagnement global
            </h3>
            <p>
              Certaines agences proposent un suivi long terme, avec des forfaits
              mensuels, du reporting SEO, du conseil digital, etc.
            </p>
          </div>
          <p className="flex items-center space-x-2 italic">
            <TriangleAlert className=" w-6 h-6 mr-2" />
            Mais cela implique souvent un budget plus conséquent (à partir de
            3000–5000 €).
          </p>
        </section>

        <Divider />

        <section id="limites" className="py-8 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            4. Les limites des deux options
          </h2>
          <div>
            <h3 className="text-lg font-semibold">Limites d’un freelance</h3>
            <ul className="list-disc space-y-2 ml-6">
              <li>Capacité limitée (1 seul projet à la fois)</li>
              <li>Moins de garantie sur les délais si surcharge</li>
              <li>Pas toujours toutes les compétences en interne</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Limites d’une agence</h3>
            <ul className="list-disc space-y-2 ml-6">
              <li>Tarifs élevés (structure, TVA, charges…)</li>
              <li>Moins de flexibilité (délais + process rigides)</li>
              <li>Risque d’être un “petit client” si budget limité</li>
            </ul>
          </div>
        </section>

        <Divider />

        <section id="choisir" className="py-8 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            5. Comment choisir le bon prestataire à Brest ?
          </h2>
          <p className="text-lg">Voici 5 critères simples pour trancher</p>
          <div>
            <h3 className="text-lg font-semibold">1. Vos besoins</h3>
            <ul className="list-disc space-y-2 ml-6">
              <li>Besoin simple = freelance</li>
              <li>Projet complexe = agence</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">2. Votre budget</h3>
            <ul className="list-disc space-y-2 ml-6">
              <li>
                inferieur à 2000 € : ciblez un freelance ou une micro-agence
              </li>
              <li>5000 € : envisagez une agence complète</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              3. Votre préférence de relation
            </h3>
            <ul className="list-disc space-y-2 ml-6">
              <li>Humaine, directe ? Freelance</li>
              <li>Structurée, déléguée ? Agence</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">4. Les outils proposés</h3>
            <h4>Assurez-vous que le prestataire propose :</h4>
            <ul className="list-disc space-y-2 ml-6">
              <li>site responsive</li>
              <li>SEO de base</li>
              <li>maintenance ou formation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              5. Sa connaissance du territoire
            </h3>
            <h4>Un prestataire local à Brest comprendra mieux :</h4>
            <ul className="list-disc space-y-2 ml-6">
              <li>vos cibles régionales</li>
              <li>les spécificités de votre marché local</li>
            </ul>
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
                  Quelle est la différence entre un développeur web freelance et
                  une agence ?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Un freelance travaille seul, souvent spécialisé, avec une
                    relation directe. Une agence regroupe plusieurs profils et
                    gère des projets plus complets.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Un freelance peut-il faire un site aussi bien qu’une agence ?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Oui, surtout pour les projets vitrines, sites pro ou
                    refontes simples. La qualité dépend de l’expérience du
                    freelance.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Combien coûte un site internet à Brest ?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>Chez un freelance : 1000–2000 €</p>
                  <p>Chez une agence : 3000–6000 €</p>
                  <p>
                    Ces prix varient selon les options (SEO, blog, e-commerce…).
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Peut-on commencer avec un freelance puis évoluer ?{" "}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Bien sûr ! Un freelance peut poser les bases d’un site
                    évolutif, avec la possibilité d’ajouter des fonctionnalités
                    ensuite.
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
          <h3 className="text-lg font-semibold">
            Freelance ou agence web à Brest ?
          </h3>
          <p>
            Il n’y a pas de bon ou de mauvais choix — seulement une solution
            adaptée à votre besoin réel.
          </p>

          <h3>
            Si vous cherchez un partenaire local, réactif, qui comprend les
            enjeux des PME brestoises, je vous accompagne avec des sites 100 %
            sur-mesure, performants et évolutifs.
          </h3>
          <div className="flex justify-center">
            <Button href="/contact">
              Contactez-moi pour discuter de votre projet gratuitement
            </Button>
          </div>
        </section>
      </article>
    </main>
  );
}
