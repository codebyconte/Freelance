import Link from "next/link";
import { Button } from "@/components/ui/button";
import { dmSerif } from "@/app/styles/fonts";

export default function Cta() {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-12 md:py-24">
      <div className="mx-auto max-w-3xl text-center space-y-6">
        <h2
          className={`${dmSerif.className} text-2xl md:text-4xl lg:text-6xl text-gray-900`}
        >
          Faites passer votre site au niveau supérieur avec un développeur web à
          Brest{" "}
        </h2>
        <p className="mx-auto max-w-xl text-base md:text-lg leading-relaxed text-pretty text-gray-600">
          Discutons ensemble de votre projet autour d’un échange gratuit et sans
          engagement. En tant que développeur web freelance à Brest, je vous
          conseille sur les meilleures solutions pour créer ou améliorer votre
          site internet professionnel et renforcer votre visibilité locale.
        </p>
        <div className="mt-6 md:mt-10 flex items-center justify-center">
          <Button
            color="blue"
            href="/contact"
            className="text-sm md:text-base w-fit"
          >
            Discutons de votre projet gratuitement
          </Button>
        </div>
      </div>
    </section>
  );
}
