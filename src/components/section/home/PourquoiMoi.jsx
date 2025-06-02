import { CheckCircle, Crosshair, Code2, Handshake } from "lucide-react";
import { dmSerif } from "@/app/styles/fonts";

export default function PourquoiMoi() {
  return (
    <section className="bg-black text-white py-12 sm:py-24  px-4 w-full ">
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold sm:text-center">
          Pourquoi Choisir un Développeur Web Freelance à Brest pour Votre Site
          ?{" "}
        </h2>
      </div>

      <p className="text-center text-lg font-semibold pb-6">
        Collaborer avec un expert local comme moi à Brest, c'est choisir :
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex  gap-4">
          <div className="mt-1">
            <Code2 className="text-blue-700 size-6" />
          </div>
          <p>
            Un Site 100% Sur Mesure : Adapté à votre métier, vos clients
            brestois, votre image. Pas du prêt-à-porter, mais de la haute
            couture digitale.
          </p>
        </div>
        <div className="flex  gap-4">
          <div className="mt-1">
            <Crosshair className="text-blue-700 size-6" />
          </div>
          <p>
            Nous définissons ensemble des indicateurs de succès concrets :
            augmentation des demandes de devis depuis Brest, amélioration de
            votre position sur Google pour des mots-clés stratégiques,
            croissance de votre notoriété locale.
          </p>
        </div>
        <div className="flex  gap-4">
          <div className="mt-1">
            <Handshake className="text-blue-700 size-6" />
          </div>
          <p>
            Collaboration Humaine & Transparente : Un interlocuteur unique,
            passionné, qui parle votre langue (sans jargon technique inutile).
            Échanges directs en visio ou en présentiel à Brest.
          </p>
        </div>
        <div className="flex  gap-4">
          <div className="mt-1">
            <CheckCircle className="text-blue-700 size-6" />
          </div>
          <p>
            Vision à Long Terme pour Votre Entreprise Brestoise : Votre site est
            une fondation solide, prête à évoluer avec vos ambitions, sans
            devoir tout refaire tous les deux ans.
          </p>
        </div>
      </div>
      <p className="text-center text-lg font-semibold pt-8 italic">
        Votre succès en ligne à Brest est ma priorité.
      </p>
    </section>
  );
}
