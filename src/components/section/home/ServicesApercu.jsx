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
    <section className="px-6  md:px-12 lg:px-24 py-24">
      <div className="mx-auto max-w-4xl text-center space-y-6">
        <h2 className={`${dmSerif.className} text-4xl sm:text-6xl font-bold`}>
          Des services pensées pour faire évoluer votre entreprise
        </h2>
        <p className="text-lg text-[#334155]">
          Que vous ayez besoin d’un site vitrine, d’une boutique e-commerce ou
          d’une refonte complète, je conçois des solutions web sur-mesure,
          rapides et efficaces, adaptées aux enjeux des entrepreneurs exigeants.
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-xl  hover:scale-110 ease-out transition-all duration-400  ">
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
            <p>
              Présentez votre entreprise avec un site sur-mesure qui inspire
              confiance, renforce votre image de marque et attire des prospects
              qualifiés.
            </p>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
        <Card className="hover:shadow-xl hover:scale-110 ease-out transition-all duration-300">
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
            <p>
              Vendez vos produits ou services en ligne avec une boutique rapide,
              sécurisée et conçue pour convertir vos visiteurs en clients.
            </p>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
        <Card className="hover:shadow-xl hover:scale-110 ease-out transition-all duration-300">
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
            <p>
              Modernisez votre site actuel avec une refonte complète : design
              actualisé, navigation optimisée, meilleures performances et SEO
              renforcé.
            </p>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
        <Card className="hover:shadow-xl hover:scale-110 ease-out transition-all duration-300">
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
            <p>
              Améliorez votre visibilité sur Google et boostez la performance de
              votre site grâce à des optimisations techniques ciblées.
            </p>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-10 text-center italic text-gray-700">
        <p>Des solutions digitales pensées pour les entrepreneurs exigeants</p>
        <Button href="/services" color="blue" className="m-8">
          Découvrir mes offres
        </Button>
      </div>
    </section>
  );
}
