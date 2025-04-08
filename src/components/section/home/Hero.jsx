import { Button } from "@/components/ui/button";
import { dmSerif } from "@/app/styles/fonts";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className="text-center space-y-6">
        <h1 className={`${dmSerif.className} text-5xl`}>
          Un site web à la hauteur de vos <AuroraText> ambitions</AuroraText>
        </h1>
        <p className="text-lg">
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
