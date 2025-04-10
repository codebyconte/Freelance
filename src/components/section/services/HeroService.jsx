import { dmSerif } from "@/app/styles/fonts";
import { Button } from "@/components/ui/button";

export default function HeroService() {
  return (
    <section className="h-screen flex justify-center items-center p-4">
      <div className="max-w-5xl  text-center space-y-6 ">
        <h1 className={`${dmSerif.className} text-6xl  lg:text-8xl`}>
          Création de sites web sur-mesure pour servir vos objectifs business
        </h1>
        <p className="text-lg  leading-relaxed">
          Un site web ne doit pas seulement exister. Il doit inspirer confiance,
          renforcer votre image, et convertir vos visiteurs en clients.
        </p>
        <div className="bg-white p-6 rounded-xl border border-gray-200 max-w-xl mx-auto hover:shadow-lg transition-all duration-150">
          <p className="text-gray-800 leading-relaxed py-3">
            Besoin de clarté sur la meilleure solution pour votre entreprise ?
            En 20 minutes, repartez avec une recommandation claire et
            personnalisée pour votre projet.
          </p>
          <div>
            <Button color="blue" href="/contact">
              Recevoir ma recommandation personnalisée
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
