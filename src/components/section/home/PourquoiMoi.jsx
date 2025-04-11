import {
  CheckCircle,
  ShieldCheck,
  Code2,
  Sparkles,
  Handshake,
} from "lucide-react";
import { dmSerif } from "@/app/styles/fonts";

export default function PourquoiMoi() {
  return (
    <section className="bg-black text-white py-24  px-4 w-full ">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className={`${dmSerif.className} text-4xl sm:text-6xl font-bold`}>
          Des solutions digitales pensées pour les entrepreneurs exigeants
        </h2>
        <p className="mt-4 text-lg text-white leading-relaxed">
          Je ne me contente pas de créer un site : je conçois un outil durable,
          performant et parfaitement aligné avec vos objectifs business. Chaque
          projet est unique et fait l’objet d’un accompagnement personnalisé.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex  gap-4">
          <div className="mt-1">
            <Code2 className="text-blue-700 size-6" />
          </div>
          <p>
            Chaque ligne de code est pensée pour votre projet, sans modèle
            préfabriqué.
          </p>
        </div>
        <div className="flex  gap-4">
          <div className="mt-1">
            <ShieldCheck className="text-blue-700 size-6" />
          </div>
          <p>Performance, sécurité et design responsive garantis.</p>
        </div>
        <div className="flex  gap-4">
          <div className="mt-1">
            <Sparkles className="text-blue-700 size-6" />
          </div>
          <p>Optimisation SEO et UX dès la première ligne de code.</p>
        </div>
        <div className="flex  gap-4">
          <div className="mt-1">
            <Handshake className="text-blue-700 size-6" />
          </div>
          <p>Accompagnement personnalisé et réactif.</p>
        </div>
        <div className="flex  gap-4">
          <div className="mt-1">
            <CheckCircle className="text-blue-700 size-6" />
          </div>
          <p>Tarifs clairs, sans frais cachés, sans engagement.</p>
        </div>
      </div>
    </section>
  );
}
