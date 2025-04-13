import { Button } from "@/components/ui/button";
import { dmSerif } from "@/app/styles/fonts";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Hero() {
  return (
    <section className="h-screen  flex flex-col justify-center items-center ">
      <div className="max-w-5xl  text-center space-y-6 p-4">
        <h1
          className={`${dmSerif.className} text-6xl  lg:text-8xl text-shadow-lg`}
        >
          Un site web à la hauteur de vos <AuroraText> ambitions</AuroraText>
        </h1>
        <p className=" text-lg sm:text-xl leading-relaxed">
          Je conçois des sites professionnels rapides, élégants et optimisés
          pour renforcer l’image de votre entreprise, attirer de nouveaux
          clients et vous démarquer dans un monde numérique en constante
          évolution.
        </p>
        <Button href="/contact" color="blue">
          Discutons de votre projet gratuitement
        </Button>
      </div>
    </section>
  );
}
