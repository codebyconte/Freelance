import { Button } from "@/components/ui/button";
import { dmSerif } from "@/app/styles/fonts";

export default function HeroPerformance() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 md:py-24">
      <div className="max-w-6xl text-center space-y-6">
        <h1
          className={`${dmSerif.className} text-3xl md:text-6xl leading-tight text-shadow-lg`}
        >
          Vous vous demandez si investir dans un site web performant est
          vraiment la priorité pour votre entreprise à Brest en 2025 ?{" "}
        </h1>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed">
          Dans un monde où vos clients potentiels passent plus de temps en ligne
          que jamais, ne pas avoir une présence digitale solide n'est plus une
          option, mais un frein à votre croissance. Imaginez : votre site web,
          non pas comme une simple carte de visite en ligne, mais comme votre
          commercial numéro un, travaillant sans relâche pour attirer,
          convaincre et fidéliser votre clientèle locale et au-delà.
        </p>
        <Button href="/contact" color="blue">
          Découvrez nos solutions sur-mesure
        </Button>
      </div>
    </section>
  );
}
