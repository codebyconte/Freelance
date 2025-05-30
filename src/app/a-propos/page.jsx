import { Button } from "@/components/ui/button";
import { dmSerif } from "../styles/fonts";
import Image from "next/image";
import { Ear, MessagesSquare, Target, PhoneCall } from "lucide-react";

export const metadata = {
  title: "À propos – Conte Mouctar, développeur web à Brest",
  description:
    "Découvrez le parcours, les valeurs et les engagements de Conte Mouctar, développeur web freelance à Brest. Une approche humaine, sur-mesure et orientée performance pour accompagner votre réussite digitale.",
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
      <div className="px-4   text-center space-y-8 max-w-4xl min-h-screen">
        <h1
          className={`${dmSerif.className} text-3xl sm:text-4xl md:text-6xl leading-tight text-shadow-lg`}
        >
          Un développeur web passionné, au service de votre réussite digitale
        </h1>
        <p className="text-base sm:text-lg max-w-3xl mx-auto">
          Bonjour, je m’appelle <span className="font-bold">Conte Mouctar</span>
          , développeur web indépendant, diplômé{" "}
          <span className="underline decoration-indigo-500">
            d’OpenClassrooms (Bac+2)
          </span>{" "}
          en développement web.
        </p>
        <p className="text-base sm:text-lg max-w-3xl mx-auto">
          Depuis toujours, je suis fasciné par l’informatique et les
          technologies numériques. J’aime comprendre comment fonctionnent les
          choses, relever des défis techniques et transformer des idées en
          solutions concrètes. Le web est pour moi un espace d’innovation infini
          où je peux allier créativité et expertise pour accompagner les
          entreprises dans leur transformation digitale.
        </p>
        <p className="text-base sm:text-lg max-w-3xl mx-auto">
          Aujourd’hui, j’aide les entrepreneurs, indépendants et petites
          entreprises à se démarquer grâce à des sites web performants,
          sur-mesure et pensés pour atteindre leurs objectifs : renforcer leur
          image, développer leur visibilité et convertir leurs visiteurs en
          clients.
        </p>
      </div>

      <div className="bg-black text-white w-full px-4 py-16 sm:py-24 space-y-8 text-center">
        <h2
          className={`${dmSerif.className} text-2xl sm:text-3xl md:text-5xl text-center`}
        >
          Ma philosophie de travail
        </h2>
        <p className="text-base sm:text-lg text-gray-300">
          Une collaboration{" "}
          <span className="box-decoration-slice bg-linear-to-r from-blue-900 to-cyan-400 text-white px-2">
            humaine
          </span>{" "}
          avant tout
        </p>
        <p className="text-base sm:text-lg">
          Travailler avec moi, c’est bien plus qu’une simple prestation
          technique. Je crois fermement que la réussite d’un projet repose sur
          une relation de confiance et une communication fluide.
        </p>
        <ul className="grid md:grid-cols-2 gap-6 mt-8 py-10">
          <li className="flex gap-4 max-w-2xl mx-auto">
            <div>
              <Ear className="text-blue-600" />
            </div>
            <p>
              <span className="font-bold">L’écoute avant tout :</span> Vous êtes
              au cœur du projet. Je prends le temps de comprendre votre vision,
              vos attentes et vos objectifs pour créer un site qui vous
              ressemble vraiment.
            </p>
          </li>

          <li className="flex gap-4 max-w-2xl mx-auto">
            <div>
              <MessagesSquare className="text-blue-600" />
            </div>
            <p>
              <span className="font-bold ">
                Des échanges simples et clairs :
              </span>
              Pas de jargon technique inutile ni d’intermédiaires. Chaque étape
              est expliquée de manière transparente.
            </p>
          </li>
          <li className="flex gap-4 max-w-2xl mx-auto">
            <div>
              <Target className="text-blue-600" />
            </div>
            <p>
              <span className="font-bold">Un accompagnement sur-mesure :</span>{" "}
              Chaque entreprise est unique. Je m’adapte à vos besoins
              spécifiques pour proposer des solutions adaptées à vos enjeux
              réels.
            </p>
          </li>
          <li className="flex gap-4 max-w-2xl mx-auto">
            <div>
              <PhoneCall className="text-blue-600" />
            </div>
            <p>
              <span className="font-bold">Disponibilité et réactivité :</span>{" "}
              Je reste à votre disposition pour répondre à vos questions ou
              ajuster le projet selon vos retours.
            </p>
          </li>
        </ul>
        <p className="text-center mt-8">
          Une relation humaine forte permet non seulement d’atteindre vos
          objectifs mais aussi de dépasser vos attentes.
        </p>
      </div>

      <div className="px-4 py-16 sm:py-24 text-center space-y-10">
        <h2 className={`${dmSerif.className} text-2xl sm:text-3xl md:text-5xl`}>
          Pourquoi me faire confiance ?
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-12  mx-auto">
          <li className="flex flex-col justify-center items-center gap-3">
            <Image
              src="/Diplome.svg"
              width={250}
              height={250}
              alt="Formation solide"
            />
            <h3 className="font-semibold text-lg ">Formation solide</h3>
            <p>
              Diplômé d’OpenClassrooms en développement web (Bac+2), je maîtrise
              les technologies modernes comme HTML5, CSS3, JavaScript, React.js
              et Tailwind CSS.
            </p>
          </li>
          <li className="flex flex-col justify-center items-center gap-3">
            <Image
              src="/Code.svg"
              width={250}
              height={250}
              alt="Formation solide"
            />
            <h3 className="font-semibold text-lg ">Passionné & curieux</h3>
            <p>
              Le monde numérique évolue vite. Je reste en veille constante pour
              proposer des solutions toujours à la pointe.
            </p>
          </li>
          <li className="flex flex-col justify-center items-center gap-3">
            <Image
              src="/Ensemble.svg"
              width={250}
              height={250}
              alt="Formation solide"
            />
            <h3 className="font-semibold text-lg ">Engagement fort</h3>
            <p>
              Votre satisfaction est ma priorité. Je m’investis pleinement dans
              chaque mission pour obtenir un résultat à la hauteur de vos
              attentes.
            </p>
          </li>
        </ul>
      </div>

      <div className="space-y-4 text-center py-24 p-4 bg-blue-600 w-full">
        <h2 className={`${dmSerif.className} text-2xl sm:text-3xl md:text-5xl`}>
          Mon objectif
        </h2>
        <p className=" text-base sm:text-lg max-w-3xl mx-auto">
          Vous aider à prendre une longueur d’avance sur le web. Que vous soyez
          une petite entreprise, un entrepreneur ou un indépendant, je vous
          accompagne pour créer un site qui vous distingue vraiment.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold">
          Prêt à collaborer ?
        </h3>
        <p>
          Ensemble, nous pouvons transformer vos idées en un outil digital
          performant qui sert vos ambitions.
        </p>
        <Button href="/contact" color="dark">
          Contactez-moi dès maintenant
        </Button>
      </div>
    </main>
  );
}
