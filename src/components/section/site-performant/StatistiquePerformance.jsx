import { NumberTicker } from "@/components/magicui/number-ticker";
import { dmSerif } from "@/app/styles/fonts";

export default function StatistiquePerformance() {
  return (
    <section className="bg-black text-white py-24  px-4 w-full ">
      <div className="max-w-4xl mx-auto  mb-16 text-center">
        <h2 className={`${dmSerif.className} text-4xl sm:text-6xl font-bold`}>
          L’impact d’un site performant sur vos résultats
        </h2>
        <p className="mt-4 text-lg leading-relaxed">
          Un site lent ou mal conçu peut coûter cher à votre entreprise : moins
          de conversions, une mauvaise image auprès des clients, et même une
          pénalité SEO. À l’inverse, un site performant agit comme un
          accélérateur pour vos résultats commerciaux.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mx-auto max-w-2xl">
          <h3 className="text-lg font-semibold">
            <NumberTicker
              value={84}
              className="whitespace-pre-wrap text-6xl  text-white font-medium tracking-tighter "
            />
            % des consommateurs ne font pas confiance à une entreprise sans site
            web (source : Stanford).
          </h3>
        </div>
        <div className="mx-auto max-w-2xl">
          <h3 className="text-lg font-semibold">
            <NumberTicker
              value={53}
              className="whitespace-pre-wrap text-white text-6xl font-medium tracking-tighter"
            />
            % de conversions avec un site rapide
          </h3>
          <p>
            Les visiteurs restent plus longtemps sur un site rapide et fluide,
            ce qui augmente les chances qu’ils passent à l’action (source :
            Deloitte).
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          <h3 className="text-lg font-semibold">
            <NumberTicker
              value={7}
              className="whitespace-pre-wrap text-white text-6xl font-medium tracking-tighter"
            />
            % de ventes par seconde de chargement en plus
          </h3>
          <p>
            Chaque seconde supplémentaire de chargement peut réduire vos
            conversions de 7 %. Optimiser la vitesse de votre site est donc
            essentiel (source : Google).
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold">
            <NumberTicker
              value={70}
              className="whitespace-pre-wrap text-white text-6xl font-medium tracking-tighter"
            />
            % du trafic est mobile
          </h3>
          <p>
            La majorité des internautes naviguent depuis leur smartphone. Un
            site responsive garantit une expérience optimale sur tous les
            appareils et améliore votre référencement naturel.
          </p>
        </div>
      </div>
    </section>
  );
}
