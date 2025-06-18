import { Lightbulb, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    "Création site internet Brest : trouvez la solution idéale pour votre activité",
  description:
    "Création site internet Brest : comparez agences & freelances pour un site sur-mesure optimisé SEO. Demandez votre devis gratuit et boostez votre visibilité !",
  alternates: {
    canonical: "https://www.codebyconte.fr/blog/creation-site-internet-brest",
  },
  openGraph: {
    url: "https://www.codebyconte.fr/blog/creation-site-internet-brest",
    title: "Création site internet à Brest : Prix, délais et erreurs 2025",
    description:
      "Combien coûte un site web à Brest en 2025 ? Comparez freelance, agence et no-code. Tarifs, délais, pièges à éviter… et recevez votre audit gratuit !",
    siteName: "Code By Conte",
    locale: "fr_FR",
    type: "article",
    images: [
      {
        url: "/site-internet.jpg",
        width: 1200,
        height: 630,
        alt: "Création site internet à Brest",
      },
    ],
  },
};

export default function Page() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Création site internet Brest : trouvez la solution idéale pour votre activité",
    author: {
      "@type": "Person",
      name: "Mouctar Conte",
    },
    datePublished: "2025-05-30",
    description:
      "Besoin d’un site web performant à Brest ? Découvrez les solutions pour la création de site internet à Brest : freelance, agence ou sur-mesure. Conseils et comparaison.",
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Faut-il un site vitrine ou un site e-commerce ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si vous vendez en ligne, l’e-commerce s’impose. Sinon, un site vitrine suffit pour présenter votre activité localement.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle est la durée moyenne de création ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Comptez 2 à 4 semaines selon la complexité. Avec un freelance, la réactivité est souvent meilleure.",
          },
        },
        {
          "@type": "Question",
          name: "Puis-je référencer mon site à Brest sans budget pub ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, grâce au SEO local : mots-clés géolocalisés, Google Maps, backlinks locaux…",
          },
        },
        {
          "@type": "Question",
          name: "Ai-je besoin d’un blog sur mon site ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, si vous souhaitez remonter sur des recherches spécifiques ou attirer du trafic régulier.",
          },
        },
        {
          "@type": "Question",
          name: "Est-ce possible sans connaissances techniques ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolument. Je livre un site prêt à l’emploi, facile à gérer avec une prise en main accompagnée.",
          },
        },
      ],
    },
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdArticle).replace(/</g, "\\u003c"),
        }}
      />
      <article>
        <header className="py-8 space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Création site internet Brest : trouvez la solution idéale pour votre
            activité ?
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Besoin d’un site web performant à Brest ? Découvrez les solutions
            pour la création de site internet à Brest : freelance, agence ou
            sur-mesure. Conseils et comparaison.
          </p>
        </header>
        <nav
          aria-label="Table des matières"
          className="border border-gray-500 bg-white p-6 rounded-2xl py-8"
        >
          <ul className="list-disc space-y-2">
            <li className="underline hover:text-blue-600">
              <a href="#site-internet">
                Pourquoi créer un site internet à Brest ?
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#freelance-agence">
                Freelance vs agence web à Brest : que choisir ?
              </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#etapes">Les étapes clés d’un projet web réussi</a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#prix">Combien coûte un site internet à Brest ? </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#choisir">Comment choisir le bon prestataire ? </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#me-confier">Pourquoi me confier votre projet ? </a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#faq">FAQ – Création de site web à Brest</a>
            </li>
            <li className="underline hover:text-blue-600">
              <a href="#conclusion">Conclusion</a>
            </li>
          </ul>
        </nav>

        <section id="site-internet" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Introduction
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Vous êtes artisan, commerçant ou dirigeant d’une PME à Brest et vous
            cherchez à développer votre présence en ligne ? La{" "}
            <strong>création d’un site internet à Brest</strong> n’est plus une
            option, mais une nécessité pour attirer de nouveaux clients. Dans
            cet article, je vous guide à travers{" "}
            <strong>les meilleures solutions</strong>
            (freelance, agence ou sur-mesure), avec des{" "}
            <strong>conseils concrets</strong>, des
            <strong> prix indicatifs</strong>, et les{" "}
            <strong>erreurs à éviter</strong>.
          </p>
        </section>

        <Divider />

        <section id="site-internet" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Pourquoi créer un site internet à Brest ?{" "}
          </h2>
          <p className="font-semibold text-lg mt-4">
            À l’heure du numérique, 8 consommateurs sur 10 recherchent un
            professionnel local via Google. Sans site, vous perdez en visibilité
            face à vos concurrents.
          </p>
          <p>Les avantages d’un site pro à Brest : </p>
          <ul className="list-disc space-y-2 ml-6">
            <li>Être trouvé facilement sur Google et Google Maps.</li>
            <li>
              Gagner des demandes de devis ou prises de rendez-vous
              automatiquement.
            </li>
            <li>Montrer votre professionnalisme et inspirer confiance.</li>
            <li>
              Analyser vos visiteurs et améliorer votre stratégie marketing.
            </li>
          </ul>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-600">
            <Lightbulb className=" text-yellow-500 " />
            <p className="">
              <span className="font-semibold text-yellow-500">Astuce :</span>{" "}
              Associez votre site à un compte Google Business Profile pour
              remonter dans les recherches locales.
            </p>
          </div>
        </section>

        <Divider />

        <section id="freelance-agence" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Freelance vs agence web à Brest : que choisir ?
          </h2>
          <p className="font-semibold text-lg mt-4">
            Vous hésitez entre une agence digitale ou un freelance brestois ?
            Voici un comparatif clair :
          </p>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Critère</TableHeader>
                <TableHeader>Freelance à Brest</TableHeader>
                <TableHeader>Agence web locale</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Tarifs</TableCell>
                <TableCell>Plus accessibles</TableCell>
                <TableCell>Souvent plus élevés</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Réactivité</TableCell>
                <TableCell>Très rapide</TableCell>
                <TableCell>Délai parfois plus long</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Suivi</TableCell>
                <TableCell>Relation directe</TableCell>
                <TableCell>Équipe projet</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Expertise</TableCell>
                <TableCell>Spécialisé, polyvalent</TableCell>
                <TableCell> Équipe pluridisciplinaire</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Souplesse</TableCell>
                <TableCell>Projet sur-mesure ⚙️</TableCell>
                <TableCell>Méthodologie standardisée</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="py-4 bg-red-50 p-4 rounded-lg border border-red-600">
            <TriangleAlert className="text-red-500" />
            <p className="mt-2">
              <span className="font-semibold text-red-500">À éviter :</span>{" "}
              choisir un prestataire uniquement sur le prix. Un site mal conçu
              vous coûtera plus cher à long terme.
            </p>
          </div>
          <div>
            <p className="text-gray-800 mt-4">
              Envie d’aller plus loin ? Découvrez notre comparatif complet :
            </p>
            <Link
              href="/blog/agence-web-brest-freelance-vs-agence"
              className="underline text-blue-600 hover:text-blue-800"
            >
              Freelance ou agence web : que choisir à Brest ?
            </Link>
          </div>
        </section>

        <Divider />

        <section id="etapes" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Les étapes clés d’un projet web réussi
          </h2>
          <p>
            Créer un site web professionnel ne se limite pas au design. Voici
            les étapes essentielles :
          </p>
          <div>
            <h3 className="font-semibold text-lg mt-4">1. Audit & objectifs</h3>
            <ul className="list-disc space-y-2 ml-6">
              <li>Définir vos cibles locales (Brest, Finistère, etc.).</li>
              <li>
                Identifier vos mots-clés (SEO local : ex. “plombier Brest”).
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mt-4">
              2. Conception UX & maquette
            </h3>
            <ul className="list-disc space-y-2 ml-6">
              <li>
                Structurer l’information (services, témoignages, formulaire…).
              </li>
              <li>Créer un design responsive (mobile-first).</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mt-4">
              3. Développement sur-mesure
            </h3>
            <ul className="list-disc space-y-2 ml-6">
              <li>CMS comme WordPress, ou site codé (Next.js, React).</li>
              <li>Intégration SEO technique (balises, vitesse, mobile).</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mt-4">
              4. Mise en ligne & SEO local
            </h3>
            <ul className="list-disc space-y-2 ml-6">
              <li>Création Google Business Profile.</li>
              <li>Ajout du site dans les annuaires locaux.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mt-4">
              5. Suivi et évolutions
            </h3>
            <ul className="list-disc space-y-2 ml-6">
              <li>Mises à jour, hébergement, sécurité.</li>
              <li>
                Ajout de fonctionnalités (blog, réservation, e-commerce…).
              </li>
            </ul>
          </div>
        </section>

        <Divider />

        <section id="prix" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Combien coûte un site internet à Brest ?
          </h2>
          <p className="font-semibold text-lg mt-2">
            Estimations de prix en 2025 (site vitrine) :
          </p>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Freelance local</TableHeader>
                <TableHeader>Agence web brestoise</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>800 € – 2 000 €</TableCell>
                <TableCell>2 000 € – 5 000 €</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="mt-4">
            <p className="font-semibold text-lg mt-2">
              Variables à prendre en compte :
            </p>
            <ul className="list-disc space-y-2 ml-6">
              <li>Nombre de pages.</li>
              <li>
                Fonctionnalités spécifiques (formulaire, paiement,
                réservation…).
              </li>
              <li>Référencement local inclus ou non.</li>
            </ul>
          </div>
        </section>

        <Divider />

        <section id="choisir" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Comment choisir le bon prestataire ?{" "}
          </h2>
          <p>Pour ne pas vous tromper, voici 5 critères concrets :</p>

          <div>
            <p>Variables à prendre en compte :</p>
            <ol className="list-decimal space-y-2 ml-6">
              <li>
                <strong>Portfolio</strong> : regardez ses réalisations locales.
              </li>
              <li>
                <strong>Avis clients </strong> : consultez Google, LinkedIn,
                Malt.
              </li>
              <li>
                <strong>Proximité</strong> : échange humain + connaissance du
                tissu local.
              </li>
              <li>
                <strong>Transparence</strong> : devis détaillé, pas de coûts
                cachés.
              </li>
              <li>
                <strong>Suivi</strong> : mise à jour, support, hébergement,
                performance.
              </li>
            </ol>
          </div>
          <div>
            <Link
              href="/contact"
              className="underline text-blue-600 duration-200 hover:text-blue-800 transition-colors"
            >
              Vous pouvez me contacter pour un audit gratuit et un devis sans
              engagement.
            </Link>
          </div>
        </section>
        <Divider />

        <section id="me-confier" className="py-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Pourquoi me confier votre projet ?
          </h2>
          <p className="font-semibold text-lg mt-2">
            En tant que développeur web freelance basé à Brest, je vous
            accompagne de A à Z :
          </p>
          <ul className="list-disc space-y-2 ml-6">
            <li>
              Création de site vitrine ou e-commerce sur-mesure, rapide et
              responsive.
            </li>
            <li>
              Optimisation pour le référencement local SEO (Google, Google Maps,
              Google Search Console).
            </li>
            <li>Site livré clé en main avec formation à la prise en main.</li>
            <li>
              Accompagnement complet : audit, conception, développement, mise en
              ligne.
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
                  Faut-il un site vitrine ou un site e-commerce ?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Si vous vendez en ligne, l’e-commerce s’impose. Sinon, un
                    site vitrine suffit pour présenter votre activité
                    localement.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Quelle est la durée moyenne de création ?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Comptez 2 à 4 semaines selon la complexité. Avec un
                    freelance, la réactivité est souvent meilleure.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Puis-je référencer mon site à Brest sans budget pub ?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Oui, grâce au SEO local : mots-clés géolocalisés, Google
                    Maps, backlinks locaux…
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Est-ce possible sans connaissances techniques ?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Absolument. Je livre un site prêt à l’emploi, facile à gérer
                    avec une prise en main accompagnée.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <Divider />

        <section id="conclusion" className="py-8 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Conclusion{" "}
          </h2>
          <p>
            La <strong>création d’un site internet à Brest</strong> est un
            levier incontournable pour booster votre activité locale. En
            choisissant un freelance expérimenté et ancré dans le tissu local,
            vous gagnez en <strong>réactivité</strong>, en <strong>coût</strong>{" "}
            et en <strong>resultats</strong>.
          </p>
          <div className="mt-4 flex justify-center">
            <Button href="/contact">Contactez-moi pour un audit gratuit</Button>
          </div>
        </section>
      </article>
    </main>
  );
}
