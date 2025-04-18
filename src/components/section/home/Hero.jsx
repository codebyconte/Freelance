import { Button } from "@/components/ui/button";
import { dmSerif } from "@/app/styles/fonts";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4  md:py-24">
      <div className="max-w-prose text-center space-y-6 md:space-y-10">
        <h1
          className={`${dmSerif.className} text-3xl md:text-6xl lg:text-8xl  text-shadow-lg`}
        >
          Un site web à la hauteur de vos <AuroraText>ambitions</AuroraText>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          Je conçois des sites professionnels rapides, élégants et optimisés
          pour renforcer l’image de votre entreprise, attirer de nouveaux
          clients et vous démarquer dans un monde numérique en constante
          évolution.
        </p>
        <Button
          href="/contact"
          color="blue"
          className="text-sm md:text-base w-fit"
        >
          Discutons de votre projet gratuitement
        </Button>
      </div>
    </section>
  );
}
