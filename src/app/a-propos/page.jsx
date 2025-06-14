import { Button } from "@/components/ui/button";
import { dmSerif } from "../styles/fonts";
import Image from "next/image";
import { Ear, MessagesSquare, Target, PhoneCall } from "lucide-react";

export const metadata = {
  title: "À propos – Conte Mouctar, développeur web à Brest",
  description:
    "Découvrez le parcours et les valeurs de Conte Mouctar, développeur web freelance à Brest. Une approche humaine et performante pour réussir votre projet digital.",
  alternates: {
    canonical: "https://codebyconte.fr/a-propos",
  },
  openGraph: {
    title: "Développeur web à Brest – Une approche humaine et sur-mesure",
    description:
      "Conte Mouctar vous accompagne dans votre projet web avec passion, écoute et engagement. Découvrez son parcours et sa vision.",
    url: "https://codebyconte.fr/a-propos",
    siteName: "Code By Conte",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du site Code By Conte",
      },
    ],
    locale: "fr_FR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conte Mouctar – Développeur web freelance à Brest",
    description:
      "Un partenaire web engagé pour la réussite des entrepreneurs et indépendants à Brest et partout en France.",
    site: "@klyx_digital",
    creator: "@klyx_digital",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Conte Mouctar",
    jobTitle: "Développeur Web Freelance",
    worksFor: {
      "@type": "Organization",
      name: "Code By Conte",
    },
    url: "https://codebyconte.fr/a-propos",
    image: "https://codebyconte.fr/opengraph-image.png",
    sameAs: [
      "https://codebyconte.fr",
      "https://www.linkedin.com/in/conte-mouctar/",
    ],
  };
  return (
    <main className="flex flex-col justify-center items-center ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="px-4 text-center space-y-8 max-w-4xl min-h-screen mt-8 lg:mt-24 py-8">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-950 sm:text-6xl lg:text-pretty ">
          Votre projet mérite plus qu'un site web. Il mérite un partenaire
          digital.
        </h1>

        <p className="text-base sm:text-lg max-w-3xl mx-auto">
          Vous avez une vision claire pour votre entreprise, un service de
          qualité à offrir, et l'ambition de vous démarquer. Mais le chemin pour
          traduire cette vision en une présence digitale efficace peut sembler
          complexe.
        </p>
        <p className="text-base sm:text-lg max-w-3xl mx-auto">
          C'est là que j'interviens. Je suis <strong>Conte Mouctar</strong>, un
          développeur web indépendant dont la mission est de transformer vos
          idées en outils numériques performants.
        </p>
        <p className="text-base sm:text-lg max-w-3xl mx-auto">
          Ma fascination pour la technologie n'est pas une simple curiosité ;
          c'est l'assurance que votre projet sera construit avec des outils
          modernes, rapides et fiables, prêts à soutenir votre croissance.
          Aujourd'hui, j'accompagne les entrepreneurs comme vous à obtenir un
          site qui ne se contente pas d'être beau, mais qui convertit les
          visiteurs en clients.
        </p>
      </div>

      <div className="bg-black text-white w-full px-4 py-16 sm:py-24 space-y-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-center">
          Ma philosophie : une collaboration, pas une simple prestation
        </h2>
        <p className="text-base sm:text-lg text-gray-300">
          Un projet réussi naît d'une relation de confiance et d'une
          compréhension mutuelle.
        </p>

        <ul className="grid md:grid-cols-2 gap-6 mt-8 py-10">
          <li className="flex gap-4 max-w-2xl mx-auto">
            <div>
              <Ear className="text-blue-600" />
            </div>
            <p>
              <strong>Votre vision comme point de départ.</strong> Avant toute
              ligne de code, il y a votre histoire et vos ambitions. Je
              m'immerge dans votre projet pour que le résultat final soit le
              reflet fidèle de votre identité.
            </p>
          </li>
          <li className="flex gap-4 max-w-2xl mx-auto">
            <div>
              <MessagesSquare className="text-blue-600" />
            </div>
            <p>
              <strong>La clarté avant tout.</strong> Le jargon technique, c'est
              pour moi. Pour vous, ce sont des explications simples, des mises à
              jour régulières et une transparence totale sur l'avancement du
              projet.
            </p>
          </li>
          <li className="flex gap-4 max-w-2xl mx-auto">
            <div>
              <Target className="text-blue-600" />
            </div>
            <p>
              <strong>Des solutions, pas juste du code.</strong> Votre
              entreprise est unique. Mon rôle est de vous proposer la solution
              technique la plus adaptée à VOS enjeux, et non une solution
              générique.
            </p>
          </li>
          <li className="flex gap-4 max-w-2xl mx-auto">
            <div>
              <PhoneCall className="text-blue-600" />
            </div>
            <p>
              <strong>Un partenaire réactif à vos côtés.</strong> Vous avez une
              question ? Besoin d'un ajustement ? Je suis votre interlocuteur
              unique et je m'engage à être disponible et réactif tout au long de
              notre collaboration.
            </p>
          </li>
        </ul>
        <p className="text-center mt-8">
          Ensemble, nous n'atteindrons pas seulement vos objectifs, nous
          chercherons à les dépasser.
        </p>
      </div>

      <div className="px-4 py-16 sm:py-24 text-center space-y-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl">
          Les piliers de notre future collaboration
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto">
          <li className="flex flex-col justify-center items-center gap-3">
            <Image
              src="/Diplome.svg"
              width={250}
              height={250}
              alt="Expertise technique"
            />
            <h3 className="font-semibold text-lg">
              Une expertise technique solide
            </h3>
            <p>
              Votre projet sera entre de bonnes mains. Ma formation certifiée
              (Bac+2) et ma maîtrise des technologies modernes (React,
              Next.js...) sont le gage d'un site web construit sur des
              fondations saines, sécurisées et prêtes pour l'avenir.
            </p>
          </li>
          <li className="flex flex-col justify-center items-center gap-3">
            <Image
              src="/Code.svg"
              width={250}
              height={250}
              alt="Solutions innovantes"
            />
            <h3 className="font-semibold text-lg">
              Une curiosité au service de l'innovation
            </h3>
            <p>
              Le web évolue chaque jour. Ma veille technologique constante vous
              assure de bénéficier des solutions les plus récentes et
              performantes, pour un site qui ne sera pas dépassé dans six mois.
            </p>
          </li>
          <li className="flex flex-col justify-center items-center gap-3">
            <Image
              src="/Ensemble.svg"
              width={250}
              height={250}
              alt="Engagement pour votre réussite"
            />
            <h3 className="font-semibold text-lg">
              Un engagement total pour votre réussite
            </h3>
            <p>
              Je ne mesure pas mon succès au nombre de lignes de code, mais à
              l'impact que je crée pour votre entreprise. Votre satisfaction est
              ma priorité absolue, et je m'investis pleinement pour y parvenir.
            </p>
          </li>
        </ul>
      </div>

      <div className="space-y-4 text-center py-24 p-4 bg-blue-600 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-5xl">
          Prêt à construire votre succès en ligne ?
        </h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto">
          Votre projet a du potentiel. Ensemble, transformons-le en une
          plateforme digitale performante qui sert vos ambitions et vous
          distingue de la concurrence.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold">
          La première étape ? Un simple échange.
        </h3>
        <p>Parlons de vos idées, sans engagement.</p>
        <Button href="/contact" color="dark">
          Démarrons notre collaboration
        </Button>
      </div>
    </main>
  );
}
