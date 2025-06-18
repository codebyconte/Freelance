import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-12 md:py-24">
      <div className="mx-auto max-w-3xl text-center space-y-6">
        <h2 className="text-2xl md:text-4xl text-gray-900 font-semibold">
          Votre Projet de Création de Site Internet à Brest Mérite une Réussite
          Totale. Passons à l'Action !
        </h2>
        <p className="mx-auto  text-base md:text-lg leading-relaxed text-pretty text-gray-600">
          Chaque jour sans un site web professionnel et performant, ce sont des
          clients potentiels à Brest qui choisissent vos concurrents mieux
          équipés en ligne. Ne laissez plus ces opportunités précieuses vous
          échapper. Pour garantir une qualité irréprochable et un accompagnement
          véritablement personnalisé à chaque client de Brest, je ne prends
          qu'un nombre limité de projets de création de site internet chaque
          mois.
        </p>
        <div className="mt-6 md:mt-10 flex items-center justify-center">
          <Button
            color="blue"
            href="/contact"
            className="text-sm md:text-base w-fit"
          >
            OUI, JE VEUX UN SITE QUI ATTIRE DES CLIENTS À BREST !{" "}
          </Button>
        </div>
        <p className="text-sm md:text-base text-gray-600 italic">
          Discutons de votre projet sans engagement. Réponse rapide et conseils
          personnalisés garantis.
        </p>
      </div>
    </section>
  );
}
