import { Button } from "@/components/ui/button";
import { dmSerif } from "@/app/styles/fonts";

export default function HeroPerformance() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-12 md:py-24">
      <div className="max-w-6xl text-center space-y-6">
        <h1
          className={`${dmSerif.className} text-3xl md:text-6xl lg:text-8xl leading-tight text-shadow-lg`}
        >
          Un site web performant, le pilier de votre réussite en ligne
        </h1>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed">
          En 2025, votre site web n’est pas juste une vitrine, c’est votre
          levier de croissance, votre premier commercial, et votre meilleur
          outil pour fidéliser vos clients. Découvrez pourquoi investir dans un
          site sur-mesure et performant peut transformer votre entreprise.
        </p>
        <Button
          href="/contact"
          color="blue"
          className="text-sm md:text-base w-fit"
        >
          Découvrez nos solutions sur-mesure
        </Button>
      </div>
    </section>
  );
}
