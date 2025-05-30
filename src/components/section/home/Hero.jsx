import { Button } from "@/components/ui/button";
import { dmSerif } from "@/app/styles/fonts";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4  ">
      <div className="max-w-3xl text-center space-y-6 md:space-y-10">
        <h1
          className={`${dmSerif.className} text-3xl md:text-6xl  text-shadow-lg`}
        >
          Développeur web à Brest, création de sites internet sur mesure
        </h1>
        <p className="text-base md:text-lg  text-gray-600">
          Développeur web freelance basé à Brest, je conçois des sites internet
          sur mesure, rapides et élégants, pour les indépendants, artisans et
          petites entreprises bretonnes. Mon objectif : valoriser votre activité
          en ligne, attirer vos futurs clients et vous démarquer !
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
