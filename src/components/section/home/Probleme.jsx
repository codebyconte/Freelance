export function Probleme() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
              Votre Site Actuel Vous Freine au Lieu de Vous Aider à Brest ?
            </h2>
            <p className="text-lg  text-gray-600 leading-relaxed max-w-3xl ">
              Vous reconnaissez-vous dans ces situations fréquentes à Brest ?
            </p>
          </div>

          {/* Problems List */}
          <div className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-6">
            <div className="sm:h-full bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100 ">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Votre site est désespérément lent ?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Chaque seconde compte ! 53% des visiteurs sur mobile quittent
                une page si elle met plus de 3 secondes à charger (Source :
                Google). À Brest, cela signifie des clients potentiels qui
                s'impatientent et filent chez la concurrence.
              </p>
            </div>

            <div className="sm:h-full bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Il s'affiche mal sur smartphone et tablette ?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Avec plus de 70% du trafic local à Brest provenant souvent du
                mobile, un site non adaptatif renvoie une image peu
                professionnelle et vous fait perdre des opportunités.
              </p>
            </div>

            <div className="sm:h-full bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Invisible sur Google pour "votre activité Brest" ?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Si vos clients brestois ne vous trouvent pas en ligne, c'est
                comme si votre commerce était caché dans une ruelle sans
                enseigne.
              </p>
            </div>

            <div className="sm:h-full bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Bloqué par une solution no-code limitée ou un ancien site
                coûteux à maintenir ?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Vous souhaitez faire évoluer votre présence en ligne, ajouter
                des fonctionnalités, mais c'est un véritable casse-tête
                technique ou un gouffre financier qui vous décourage.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 border border-blue-200">
            <p className="text-lg text-gray-800 leading-relaxed text-center font-medium">
              En 2025, pour une entreprise à Brest, un site web performant n'est
              plus un luxe, c'est le moteur essentiel de votre croissance
              locale. S'il ne remplit pas cette mission cruciale, il est temps
              d'investir intelligemment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
