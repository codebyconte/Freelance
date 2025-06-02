import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  CogIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";

export function Garantie() {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
            Mes Engagements Clairs pour Votre Projet Web à Brest
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Pas de jargon inutile, pas de mauvaises surprises. Vous investissez
            pour un résultat concret et un partenariat de confiance.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-8 rounded-lg">
            <div
              className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mb-6 text-white shadow-lg`}
            >
              <CheckCircleIcon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold  mb-4">
              Devis 100% Gratuit, Clair et Détaillé
            </h3>
            <p className=" leading-relaxed">
              Vous recevez un chiffrage précis, parfaitement adapté à vos
              besoins réels pour la création de votre site internet à Brest.
              Aucune facturation cachée, tout est transparent.
            </p>
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-8 rounded-lg">
            <div
              className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mb-6 text-white shadow-lg`}
            >
              <ShieldCheckIcon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold  mb-4">
              Propriété Totale de Votre Site
            </h3>
            <p className=" leading-relaxed">
              Une fois le paiement final effectué, le site vous appartient à
              100%. Pas de système de location, pas de dépendance forcée. Vous
              êtes libre.
            </p>
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-8 rounded-lg">
            <div
              className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mb-6 text-white shadow-lg`}
            >
              <ClockIcon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold  mb-4">
              Respect des Délais Convenus
            </h3>
            <p className=" leading-relaxed">
              Livraison de votre site web en moyenne sous 14 jours ouvrés à 6
              semaines (selon la complexité du projet). Communication proactive
              en cas d'ajustement nécessaire.
            </p>
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-8 rounded-lg">
            <div
              className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mb-6 text-white shadow-lg`}
            >
              <CogIcon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold  mb-4">
              Corrections & Ajustements Inclus Post-Livraison
            </h3>
            <p className=" leading-relaxed">
              Vous disposez de 7 à 14 jours après la mise en ligne pour demander
              des ajustements fins. Votre satisfaction est ma priorité absolue.
            </p>
          </div>

          <div className="relative bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-8 rounded-lg md:col-span-2 lg:col-span-2">
            <div className="absolute -top-4 left-8 md:left-50">
              <div className="inline-flex items-center  px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-sm font-bold text-gray-900 shadow-lg">
                OFFRE SPÉCIALE
              </div>
            </div>

            <div
              className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mb-6 text-white shadow-lg`}
            >
              <ServerIcon className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-semibold  mb-4">
              Hébergement & Maintenance Technique (3 Premiers Mois Offerts !)
            </h3>
            <p className=" leading-relaxed">
              Pour démarrer sereinement, je vous offre les 3 premiers mois
              d'hébergement sur serveur rapide et la maintenance technique
              (mises à jour, sauvegardes). Ensuite, des solutions adaptées vous
              seront proposées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
