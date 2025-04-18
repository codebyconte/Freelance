import { dmSerif } from "@/app/styles/fonts";
import { Button } from "@/components/ui/button";

export default function CtaPerformance() {
  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className={`${dmSerif.className} text-2xl md:text-4xl lg:text-6xl text-gray-900`}
        >
          Prêt à avoir un site qui travaille pour vous ?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-pretty text-gray-600">
          Démarquez-vous avec un site conçu sur mesure, performant et aligné sur
          vos objectifs business. Que vous souhaitiez créer votre premier site
          ou optimiser l’existant, nous sommes là pour vous accompagner à chaque
          étape.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button color="blue" href="/contact">
            Découvrez ce qu’un site performant peut changer pour vous
          </Button>
        </div>
      </div>
    </div>
  );
}
