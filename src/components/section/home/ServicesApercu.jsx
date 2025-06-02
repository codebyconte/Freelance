import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Store, ShoppingCart, TowerControl, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ServicesApercu() {
  return (
    <section className="px-4 md:px-12 py-12 md:py-24">
      <div className="mx-auto max-w-4xl space-y-6 md:space-y-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Mes Services de Création de Site Internet sur Mesure à Brest{" "}
        </h2>
        <p className="text-lg  text-gray-600 leading-relaxed">
          Vous recherchez un développeur web compétent à Brest pour la création
          d'un site internet professionnel, efficace et adapté à votre activité
          locale ? Que ce soit pour un site vitrine, une boutique e-commerce ou
          une refonte complète, je vous accompagne de A à Z.
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
            <p>
              Présentez votre entreprise et votre savoir-faire à Brest avec un
              site vitrine sur mesure qui inspire confiance, renforce votre
              image de marque et attire des prospects qualifiés. Idéal pour
              artisans, consultants, TPE/PME
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
              <h3>Boutique E-commerce Performante à Brest</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Vendez vos produits en ligne avec une boutique rapide, sécurisée,
              optimisée pour convertir vos visiteurs en clients fidèles. Basé à
              Brest, je vous accompagne dans le développement complet de votre
              site e-commerce
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
            <p>
              Donnez un nouveau souffle à votre site actuel avec une refonte
              complète : design modernisé, navigation plus fluide, performances
              techniques accrues et référencement renforcé pour mieux apparaître
              sur Google à Brest.
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
              <h3>Optimisation SEO & Performance pour Entreprises à Brest</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Boostez la visibilité locale de votre site sur Google grâce à des
              optimisations SEO ciblées : audit technique approfondi, stratégie
              de mots-clés axée sur Brest et le Finistère, amélioration radicale
              du temps de chargement.
            </p>
          </CardContent>
          <CardFooter />
        </Card>
      </div>

      <div className="mt-8 md:mt-10 text-center italic text-muted-foreground">
        <p>Des solutions digitales pensées pour les entrepreneurs exigeants</p>
        <Button href="/services" color="blue" className="mt-6 ">
          DÉCOUVRIR TOUS MES SERVICES DE CRÉATION WEB À BREST
        </Button>
      </div>
    </section>
  );
}
