import { dmSerif } from "@/app/styles/fonts";
import {
  CheckCircle,
  Rocket,
  Gauge,
  Brain,
  Server,
  LayoutDashboard,
  BadgeCheck,
} from "lucide-react";

export default function OffreInclue() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2
          className={`${dmSerif.className} text-2xl md:text-4xl lg:text-6xl font-bold max-w-6xl text-center px-4`}
        >
          Ce que toutes les offres incluent
        </h2>

        <p className="text-center text-base md:text-lg leading-relaxed mb-6 md:mb-10">
          Peu importe l’offre choisie, vous bénéficiez d’un accompagnement
          complet et de prestations premium conçues pour maximiser votre retour
          sur investissement.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm md:text-base leading-relaxed">
          <li className="flex items-start gap-3">
            <Rocket className="text-blue-600 mt-1" size={24} />
            <span>
              <strong>Site 100% sur-mesure</strong> — sans modèle préconçu,
              conçu pour vos objectifs
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Gauge className="text-blue-600 mt-1" size={24} />
            <span>
              <strong>Performances optimales</strong> — vitesse de chargement
              rapide, SEO renforcé, compatibilité mobile garantie.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Brain className="text-blue-600 mt-1" size={24} />
            <span>
              <strong>Conseils stratégiques personnalisés</strong> — adaptés à
              vos enjeux réels
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Server className="text-blue-600 mt-1" size={24} />
            <span>
              <strong>Hébergement & configuration inclus</strong> — tout est
              prêt dès le lancement
            </span>
          </li>
          <li className="flex items-start gap-3">
            <LayoutDashboard className="text-blue-600 mt-1" size={24} />
            <span>
              <strong>Interface simple</strong> — pour gérer votre contenu en
              autonomie (si besoin)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <BadgeCheck className="text-blue-600 mt-1" size={24} />
            <span>
              <strong>Tarification claire</strong> — paiement unique, facture
              nette, aucun frais caché
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
