export function Etape() {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className=" space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
            La Création de Votre Site Internet à Brest en 3 Étapes Claires
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl ">
            Mon processus est conçu pour les professionnels de Brest et du
            Finistère : efficace, transparent et sans prise de tête technique.
          </p>
        </header>

        {/* Steps */}
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="border-l-2 border-blue-200 pl-8 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-blue-400">01</span>
              <h3 className="text-lg font-semibold text-gray-900">
                Analyse & Conception Stratégique (Gratuite)
              </h3>
            </div>
            <div className="space-y-3 ml-16">
              <p className="text-gray-700 leading-relaxed">
                Échange approfondi pour cerner vos objectifs précis, votre
                public cible à Brest et ses environs, ainsi que les spécificités
                de votre activité.
              </p>
              <p className="text-gray-600 leading-relaxed italic">
                Analyse de votre concurrence locale et élaboration d'une
                architecture de site optimisée pour le SEO et la conversion
                client.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-2 border-blue-200 pl-8 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-blue-400">02</span>
              <h3 className="text-lg font-semibold text-gray-900">
                Développement Sur Mesure & Optimisé
              </h3>
            </div>
            <div className="space-y-3 ml-16">
              <p className="text-gray-700 leading-relaxed">
                Création de votre site internet avec un design responsive, une
                navigation intuitive et un SEO local intégré dès la conception.
              </p>
              <p className="text-gray-600 leading-relaxed italic">
                Vous suivez l'avancement pas à pas et validez les étapes clés
                pour un résultat qui vous correspond parfaitement.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-2 border-blue-200 pl-8 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-blue-400">03</span>
              <h3 className="text-lg font-semibold text-gray-900">
                Livraison, Formation & Lancement
              </h3>
            </div>
            <div className="space-y-3 ml-16">
              <p className="text-gray-700 leading-relaxed">
                Votre site est mis en ligne, rigoureusement testé sur tous les
                aspects (vitesse, affichage, fonctionnalités) et prêt à attirer
                vos premiers clients brestois.
              </p>
              <p className="text-gray-600 leading-relaxed italic">
                Formation (si nécessaire et selon la solution technique) pour
                une prise en main autonome de votre nouvel outil digital.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className=" pt-8">
          <p className="text-lg text-gray-900 leading-relaxed text-center font-medium">
            Résultat Garanti : Un site web performant, qui améliore votre
            visibilité sur Google à Brest, et que vous pouvez gérer avec aisance
            (ou me confier la maintenance).
          </p>
        </div>
      </div>
    </section>
  );
}
