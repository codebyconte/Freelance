import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { dmSerif } from "@/app/styles/fonts";

export default function Tarif() {
  return (
    <section className="bg-black text-white py-24 flex flex-col justify-center items-center">
      <h2
        className={`${dmSerif.className} text-4xl sm:text-6xl font-bold max-w-6xl text-center p-4`}
      >
        Quel que soit votre objectif renforcer votre image, développer votre
        visibilité ou vendre en ligne je propose trois solutions claires,
        fiables , pensées pour les dirigeants exigeants
      </h2>
      <div className="text-black flex flex-col gap-4 mt-6 lg:flex-row p-4">
        <Card className="hover:ring-4 ring-blue-600">
          <CardHeader>
            <CardTitle className="text-blue-600">Site Présence Pro</CardTitle>
            <p>
              À partir de <span className="font-bold text-3xl">1200€</span>
            </p>
            <CardDescription>
              Pour présenter votre entreprise avec sérieux et poser les bases
              d’une image forte.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Design unique & responsive</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>
                  Pages incluses : Accueil, À propos, Services, Contact
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Formulaire + plan d’accès intégré</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Optimisation vitesse & SEO de base</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Développement 100% sur-mesure</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button color="blue" className="w-full" href="/contact">
              Obtenir un site Présence Pro
            </Button>
          </CardFooter>
        </Card>
        <Card className="hover:ring-4 ring-blue-600">
          <CardHeader>
            <CardTitle className="text-blue-600">
              Site Structuré & Évolutif
            </CardTitle>
            <p>
              À partir de <span className="font-bold text-3xl">1800€</span>
            </p>
            <CardDescription>
              Pour développer votre présence digitale avec un site riche en
              contenu et évolutif
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Tout ce que contient “Présence Pro”</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Pages additionnelles : blog, actualités, etc.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>CMS intégré : publications simples & autonomes</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>SEO avancé (structure, balises, performance)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Formation à l’utilisation incluse</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button color="blue" className="w-full " href="/contact">
              Obtenir un site structuré & évolutif
            </Button>
          </CardFooter>
        </Card>
        <Card className="hover:ring-4 ring-blue-600">
          <CardHeader>
            <CardTitle className="text-blue-600">
              Site E-commerce Performant
            </CardTitle>
            <p>
              À partir de <span className="font-bold text-3xl">2500€</span>
            </p>
            <CardDescription>
              Pour vendre vos produits ou services avec une boutique rapide,
              sécurisée et pensée pour la conversion.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span> Boutique 100% personnalisée</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Paiement sécurisé (Stripe, PayPal…)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Gestion des produits, commandes et stock</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>
                  Pages légales (CGV, mentions légales, politique RGPD)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Interface intuitive + formation incluse</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button color="blue" className="w-full" href="/contact">
              Obtenir un site e-commerce performant
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-10 max-w-3xl mx-auto text-center space-y-4 text-white">
        <h3
          className={`${dmSerif.className} text-2xl underline underline-offset-3`}
        >
          Chaque offre répond à un besoin précis :
        </h3>
        <ul className="space-y-2  leading-relaxed">
          <li>
            <span className="font-bold">Présence Pro</span> : pour une image
            claire, moderne et crédible.
          </li>
          <li>
            <span className="font-bold">Structuré & Évolutif</span> : pour
            publier, se développer, apparaître.
          </li>
          <li>
            <span className="font-bold">E-commerce Performant</span> : pour
            vendre efficacement en ligne avec fluidité.
          </li>
        </ul>
      </div>
    </section>
  );
}
