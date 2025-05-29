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

export function ServicesApercu() {
  return (
    <section className="px-4 md:px-12 lg:px-24 py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center space-y-6 md:space-y-10">
        <h2 className={`${dmSerif.className} text-2xl md:text-4xl font-bold`}>
          Création de site internet vitrine, e-commerce et sur mesure à Brest
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Vous recherchez un développeur web à Brest pour créer un site internet
          professionnel, efficace et adapté à votre activité ? Que ce soit pour
          un site vitrine, une boutique e-commerce ou une refonte complète, je
          vous accompagne de A à Z : conception sur mesure, développement
          optimisé pour le référencement, et accompagnement personnalisé.
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
              <h3>Création de site vitrine à Brest</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base leading-relaxed">
              Présentez votre entreprise à Brest ou ailleurs avec un site
              vitrine sur-mesure, qui inspire confiance, renforce votre image de
              marque et attire des prospects qualifiés.
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
              Vendez vos produits en ligne avec une boutique rapide, sécurisée
              et conçue pour convertir vos visiteurs en clients. Basée à Brest,
              je vous accompagne dans le développement complet de votre site
              e-commerce.
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
              Modernisez votre site existant avec une refonte complète : design
              mis à jour, navigation plus fluide, meilleures performances
              techniques et référencement renforcé pour mieux apparaître sur
              Google à Brest.
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
              Boostez la visibilité locale de votre site sur Google grâce à des
              optimisations SEO ciblées : amélioration du temps de chargement,
              audit technique, stratégie de mots-clés pour les entreprises
              basées à Brest.
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
          Voir tous mes services de création de site à Brest
        </Button>
      </div>
    </section>
  );
}
