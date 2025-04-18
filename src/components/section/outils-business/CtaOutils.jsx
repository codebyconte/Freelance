import { Button } from "@/components/ui/button";
import { dmSerif } from "@/app/styles/fonts";

export default function CtaOutils() {
  return (
    <section className="bg-black text-white py-12 md:py-16 px-6  mx-auto text-center space-y-6 w-full overflow-x-hidden">
      <h2
        className={`${dmSerif.className} text-2xl md:text-4xl lg:text-5xl font-bold`}
      >
        Vous souhaitez booster la performance de votre entreprise ?
      </h2>
      <p className="text-base md:text-lg max-w-2xl mx-auto">
        Recevez gratuitement une analyse personnalisée de votre site web.
      </p>
      <ul className="text-gray-300 max-w-md mx-auto space-y-2 list-disc list-inside text-left sm:text-center">
        <li>Points forts & axes d’amélioration</li>
        <li>Conseils concrets pour gagner en visibilité</li>
        <li>Rapport clair, sans engagement</li>
      </ul>
      <div>
        <Button href="/contact" color="blue">
          Profitez d’un audit gratuit de votre site !
        </Button>
      </div>
    </section>
  );
}
