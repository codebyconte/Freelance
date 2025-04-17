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
          Un partenaire tech au service de votre croissance
        </h2>
        <p className="mt-4 text-lg text-white leading-relaxed">
          Derrière chaque ligne de code, il y a une stratégie : la vôtre. Je ne
          me limite pas à livrer un site, je vous accompagne dans la création
          d’un véritable outil de croissance digitale, sur-mesure et durable .
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex  gap-4">
          <div className="mt-1">
            <Code2 className="text-blue-700 size-6" />
          </div>
          <p>Solutions 100% personnalisées, sans template préconçu</p>
        </div>
        <div className="flex  gap-4">
          <div className="mt-1">
            <Crosshair className="text-blue-700 size-6" />
          </div>
          <p>
            Ciblage clair de vos objectifs : visibilité, conversion, notoriété
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
