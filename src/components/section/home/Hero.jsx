import { Button } from "@/components/ui/button";
import { dmSerif } from "@/app/styles/fonts";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Hero() {
  return (
    <section className="h-screen py-24 px-6 sm:px-12 lg:px-24 ">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1
          className={`${dmSerif.className} text-4xl sm:text-5xl lg:text-6xl leading-tight`}
        >
          Un site web à la hauteur de vos <AuroraText> ambitions</AuroraText>
        </h1>
        <p className=" text-lg sm:text-xl leading-relaxed">
          Je conçois des sites professionnels sur-mesure <br /> rapides,
          élégants et optimisés <br /> pour renforcer l’image de votre
          entreprise et attirer de nouveaux clients.
        </p>
        <Button href="/contact" color="blue">
          Discutons de votre projet
        </Button>
      </div>
    </section>
  );
}
