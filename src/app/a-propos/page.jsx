import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { dmSerif } from "../styles/fonts";

import {
  Ear,
  MessagesSquare,
  Target,
  PhoneCall,
  GraduationCap,
  Brain,
  Handshake,
} from "lucide-react";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 space-y-24">
      <div className="text-center space-y-8 ">
        <h1
          className={`${dmSerif.className} text-4xl md:text-6xl text-shadow-lg `}
        >
          Un développeur web passionné, au service de votre réussite digitale
        </h1>
        <p className="mt-12 text-lg max-w-3xl mx-auto">
          Bonjour, je m’appelle <span className="font-bold">Conte Mouctar</span>
          , développeur web indépendant, diplômé{" "}
          <span className="underline decoration-indigo-500">
            d’OpenClassrooms (Bac+2)
          </span>{" "}
          en développement web.
        </p>
        <p className=" max-w-3xl mx-auto">
          Depuis toujours, je suis fasciné par l’informatique et les
          technologies numériques. J’aime comprendre comment fonctionnent les
          choses, relever des défis techniques et transformer des idées en
          solutions concrètes. Le web est pour moi un espace d’innovation infini
          où je peux allier créativité et expertise pour accompagner les
          entreprises dans leur transformation digitale.
        </p>
        <p className="max-w-3xl mx-auto">
          Aujourd’hui, j’aide les entrepreneurs, indépendants et petites
          entreprises à se démarquer grâce à des sites web performants,
          sur-mesure et pensés pour atteindre leurs objectifs : renforcer leur
          image, développer leur visibilité et convertir leurs visiteurs en
          clients.
        </p>
      </div>

      <Divider />

      <div className="space-y-8">
        <h2
          className={`${dmSerif.className} text-3xl md:text-5xl text-center p-4`}
        >
          Ma philosophie de travail
        </h2>
        <p className="text-center text-lg text-gray-700">
          Une collaboration{" "}
          <span className="box-decoration-slice bg-linear-to-r from-blue-900 to-cyan-400 text-white px-2">
            humaine
          </span>{" "}
          avant tout
        </p>
        <p>
          Travailler avec moi, c’est bien plus qu’une simple prestation
          technique. Je crois fermement que la réussite d’un projet repose sur
          une relation de confiance et une communication fluide.
        </p>
        <ul className="space-y-4 grid md:grid-cols-2 gap-6 mt-8">
          <li className="flex gap-2">
            <div>
              <Ear />
            </div>
            <p>
              <span className="font-bold">L’écoute avant tout :</span> Vous êtes
              au cœur du projet. Je prends le temps de comprendre votre vision,
              vos attentes et vos objectifs pour créer un site qui vous
              ressemble vraiment.
            </p>
          </li>

          <li className="flex gap-2">
            <div>
              <MessagesSquare />
            </div>
            <p>
              <span className="font-bold ">
                Des échanges simples et clairs :
              </span>
              Pas de jargon technique inutile ni d’intermédiaires. Chaque étape
              est expliquée de manière transparente.
            </p>
          </li>
          <li className="flex gap-2">
            <div>
              <Target />
            </div>
            <p>
              <span className="font-bold">Un accompagnement sur-mesure :</span>{" "}
              Chaque entreprise est unique. Je m’adapte à vos besoins
              spécifiques pour proposer des solutions adaptées à vos enjeux
              réels.
            </p>
          </li>
          <li className="flex gap-2">
            <div>
              <PhoneCall />
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

      <Divider />

      <div className="space-y-10 text-center">
        <h2
          className={`${dmSerif.className} text-3xl md:text-5xl max-w-6xl text-center p-4`}
        >
          Pourquoi me faire confiance ?
        </h2>
        <ul className="flex flex-col gap-8 md:flex-row">
          <li>
            <div className="flex justify-center gap-2 mb-2">
              <GraduationCap />
              <h3 className="font-semibold  ">Formation solide</h3>
            </div>
            <p>
              Diplômé d’OpenClassrooms en développement web (Bac+2), je maîtrise
              les technologies modernes comme HTML5, CSS3, JavaScript, React.js
              et Tailwind CSS.
            </p>
          </li>
          <li>
            <div className="flex justify-center gap-2 mb-2">
              <Brain />
              <h3 className="font-semibold">Passionné & curieux</h3>
            </div>
            <p>
              Le monde numérique évolue vite. Je reste en veille constante pour
              proposer des solutions toujours à la pointe.
            </p>
          </li>
          <li>
            <div className="flex justify-center gap-2 mb-2">
              <Handshake />
              <h3 className="font-semibold">Engagement fort</h3>
            </div>
            <p>
              Votre satisfaction est ma priorité. Je m’investis pleinement dans
              chaque mission pour obtenir un résultat à la hauteur de vos
              attentes.
            </p>
          </li>
        </ul>
      </div>

      <Divider />

      <div className="space-y-4 text-center">
        <h2
          className={`${dmSerif.className} text-3xl md:text-5xl max-w-6xl text-center p-4`}
        >
          Mon objectif
        </h2>
        <p className=" max-w-3xl mx-auto">
          Vous aider à prendre une longueur d’avance sur le web. Que vous soyez
          une petite entreprise, un entrepreneur ou un indépendant, je vous
          accompagne pour créer un site qui vous distingue vraiment.
        </p>
      </div>

      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold">Prêt à collaborer ?</h3>
        <p>
          Ensemble, nous pouvons transformer vos idées en un outil digital
          performant qui sert vos ambitions.
        </p>
        <Button href="/contact" color="blue">
          Contactez-moi dès maintenant
        </Button>
      </div>
    </section>
  );
}
