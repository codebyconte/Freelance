import { dmSerif } from "@/app/styles/fonts";
import { Button } from "@/components/ui/button";

export default function HeroService() {
  return (
    <section className="min-h-screen flex justify-center items-center px-4 ">
      <div className="max-w-5xl text-center space-y-6 md:space-y-10">
        <h1
          className={`${dmSerif.className} text-3xl md:text-6xl  leading-tight text-shadow-lg`}
        >
          Création de sites web sur-mesure pour servir vos objectifs business
        </h1>

        <p className="text-base md:text-lg leading-relaxed">
          Un site web ne doit pas seulement exister. Il doit être un levier
          stratégique pour votre entreprise : attirer des prospects qualifiés,
          fidéliser vos clients et accompagner votre croissance.
        </p>

        <div className="w-full max-w-xl mx-auto bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-150">
          <p className="text-gray-800 leading-relaxed py-2 md:py-3">
            Besoin de clarté sur la meilleure solution pour votre entreprise ?
          </p>
          <div>
            <Button
              color="blue"
              href="/contact"
              className="text-sm md:text-base w-fit"
            >
              Recevoir ma recommandation personnalisée
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
