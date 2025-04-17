import { Button } from "@/components/ui/button";

export default function CtaPortfolio() {
  return (
    <section className="text-center py-8 space-y-2 p-4">
      <h2 className="text-2xl sm:text-4xl font-bold p-4">
        Et si votre projet rejoignait cette page ?
      </h2>
      <p className="text-lg">
        Chaque entreprise mérite un site à la hauteur de ses ambitions.
      </p>
      <p className="text-gray-500">
        Je vous accompagne de A à Z pour concevoir un site 100% sur-mesure,
        rapide, élégant et efficace.
      </p>
      <Button color="blue" href="/contact">
        Discutons de votre projet dès maintenant
      </Button>
    </section>
  );
}
