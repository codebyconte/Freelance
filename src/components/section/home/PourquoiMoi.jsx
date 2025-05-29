import {
  CheckCircle,
  Crosshair,
  Code2,
  Handshake,
  CircleCheckBig,
} from "lucide-react";
import { dmSerif } from "@/app/styles/fonts";

export default function PourquoiMoi() {
  return (
    <section className="bg-black text-white py-24  px-4 w-full ">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className={`${dmSerif.className} text-4xl sm:text-6xl font-bold`}>
          Pourquoi travailler avec un développeur web local à Brest ?
        </h2>
        <p className="mt-4 text-lg text-white leading-relaxed">
          Faire appel à un développeur web freelance basé à Brest, c’est
          bénéficier d’un accompagnement humain, réactif et personnalisé. Je
          connais les réalités des entrepreneurs locaux et je suis disponible
          pour des échanges en présentiel si besoin. Ensemble, nous construisons
          un site web sur mesure, aligné sur vos objectifs, optimisé pour
          Google, et parfaitement adapté à votre clientèle brestoise.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex  gap-4">
          <div className="mt-1">
            <Code2 className="text-blue-700 size-6" />
          </div>
          <p>
            Sites 100 % personnalisés, développés sans template, adaptés à votre
            image de marque
          </p>
        </div>
        <div className="flex  gap-4">
          <div className="mt-1">
            <Crosshair className="text-blue-700 size-6" />
          </div>
          <p>
            Objectifs clairs dès le départ : visibilité locale à Brest,
            conversion clients, notoriété en ligne{" "}
          </p>
        </div>
        <div className="flex  gap-4">
          <div className="mt-1">
            <Handshake className="text-blue-700 size-6" />
          </div>
          <p>
            Collaboration transparente et humaine, du premier contact à la mise
            en ligne
          </p>
        </div>
        <div className="flex  gap-4">
          <div className="mt-1">
            <CheckCircle className="text-blue-700 size-6" />
          </div>
          <p>
            Vision long terme : votre site est prêt à évoluer avec votre
            entreprise
          </p>
        </div>
      </div>
    </section>
  );
}
