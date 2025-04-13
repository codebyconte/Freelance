import { Button } from "@/components/ui/button";
import { dmSerif } from "@/app/styles/fonts";

export default function HeroPerformance() {
  return (
    <section className="h-screen  flex flex-col justify-center items-center ">
      <div className="max-w-6xl  text-center space-y-6 p-4">
        <h1
          className={`${dmSerif.className} text-6xl  lg:text-8xl text-shadow-lg`}
        >
          Un site web performant , le pilier de votre réussite en ligne
        </h1>
        <p className=" text-lg sm:text-xl leading-relaxed">
          En 2025, votre site web n’est pas juste une vitrine c’est votre levier
          de croissance, votre premier commercial, et votre meilleur outil pour
          fidéliser vos clients. Découvrez pourquoi investir dans un site
          sur-mesure et performant peut transformer votre entreprise.
        </p>
        <Button href="/contact" color="blue">
          Découvrez nos solutions sur-mesure
        </Button>
      </div>
    </section>
  );
}
