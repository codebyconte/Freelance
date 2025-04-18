import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Store, ShoppingCart, TowerControl, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { dmSerif } from "@/app/styles/fonts";

export default function ServicesApercu() {
  return (
    <section className="px-4 md:px-12 lg:px-24 py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center space-y-6 md:space-y-10">
        <h2
          className={`${dmSerif.className} text-2xl md:text-4xl lg:text-6xl font-bold`}
        >
          Des services pensés pour faire évoluer votre entreprise
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Que vous ayez besoin d’un site vitrine, d’une boutique e-commerce ou
          d’une refonte complète, je conçois des solutions web sur-mesure,
          rapides et efficaces, adaptées aux enjeux des entrepreneurs exigeants.
        </p>
      </div>

      <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Tes cartes inchangées, sauf transition Tailwind harmonisée 👇 */}
        <Card className="hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-out">
          <CardHeader>
            <Store className="text-blue-600" />
            <div className="flex gap-2 py-2">
              <Badge color="blue">Image</Badge>
              <Badge color="sky">Presence</Badge>
              <Badge color="green">Confiance</Badge>
            </div>
            <CardTitle>
              <h3>Site vitrine professionnel</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base leading-relaxed">
              Présentez votre entreprise avec un site sur-mesure qui inspire
              confiance, renforce votre image de marque et attire des prospects
              qualifiés.
            </p>
          </CardContent>
          <CardFooter />
        </Card>

        {/* Même ajustement pour les autres cartes */}
        <Card className="hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-out">
          <CardHeader>
            <ShoppingCart className="text-blue-600" />
            <div className="flex gap-2 py-2">
              <Badge color="indigo">Conversion</Badge>
              <Badge color="zinc">Paiement</Badge>
            </div>
            <CardTitle>
              <h3>Boutique e-commerce performante</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base leading-relaxed">
              Vendez vos produits ou services en ligne avec une boutique rapide,
              sécurisée et conçue pour convertir vos visiteurs en clients.
            </p>
          </CardContent>
          <CardFooter />
        </Card>

        <Card className="hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-out">
          <CardHeader>
            <TowerControl className="text-blue-600" />
            <div className="flex gap-2 py-2">
              <Badge color="amber">Modernisation</Badge>
              <Badge color="fuchsia">Rapidité </Badge>
            </div>
            <CardTitle>
              <h3>Refonte & optimisation de site existant</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base leading-relaxed">
              Modernisez votre site actuel avec une refonte complète : design
              actualisé, navigation optimisée, meilleures performances et SEO
              renforcé.
            </p>
          </CardContent>
          <CardFooter />
        </Card>

        <Card className="hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-out">
          <CardHeader>
            <Zap className="text-blue-600" />
            <div className="flex gap-2 py-2">
              <Badge color="lime">Visibilité</Badge>
              <Badge color="blue">SEO </Badge>
            </div>
            <CardTitle>
              <h3>Optimisation SEO & performance</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base leading-relaxed">
              Améliorez votre visibilité sur Google et boostez la performance de
              votre site grâce à des optimisations techniques ciblées.
            </p>
          </CardContent>
          <CardFooter />
        </Card>
      </div>

      <div className="mt-8 md:mt-10 text-center italic text-muted-foreground">
        <p>Des solutions digitales pensées pour les entrepreneurs exigeants</p>
        <Button
          href="/services"
          color="blue"
          className="mt-6 text-sm md:text-base w-fit"
        >
          Découvrir mes offres
        </Button>
      </div>
    </section>
  );
}
