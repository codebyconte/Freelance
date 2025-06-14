import { Button } from "@/components/ui/button";

export default function CtaOutils() {
  return (
    <section className="bg-black text-white py-14 md:py-20 px-6 text-center space-y-8 overflow-x-hidden">
      <div className="space-y-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Vos données sont claires. <br className="hidden md:inline" />
          Votre stratégie est prête. Et votre site web ?
        </h2>

        <p className="text-lg md:text-xl text-gray-300">
          Un outil, aussi puissant soit-il, ne remplace pas une vitrine en ligne
          performante. Votre site est votre commercial le plus travailleur : il
          doit être rapide, convaincant et parfaitement optimisé pour convertir
          vos visiteurs en clients.
        </p>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto text-base md:text-lg">
        <p className="underline underline-offset-4 text-white">
          Recevez une analyse gratuite et personnalisée de votre site web.{" "}
        </p>
        <p>
          En moins de 48h, je vous envoie un rapport clair (sans blabla
          technique) qui identifie :
        </p>

        <ul className="list-disc list-inside text-left text-gray-300 space-y-2">
          <li>Vos points forts actuels.</li>
          <li>
            Les axes d'amélioration précis pour la vitesse, le design et le SEO.
          </li>
          <li>
            Des conseils concrets pour augmenter votre visibilité et vos
            conversions.
          </li>
        </ul>

        <p>
          C'est gratuit, sans engagement, et c'est le premier pas vers un site
          qui travaille vraiment pour vous.
        </p>
      </div>

      <div>
        <Button href="/contact" color="blue" size="lg">
          Demander mon audit gratuit
        </Button>
      </div>
    </section>
  );
}
