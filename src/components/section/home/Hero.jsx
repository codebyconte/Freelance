import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen py-6 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-center leading-tight ">
            Création Site Internet Brest : Votre Partenaire Web Local pour Plus
            de Clients
          </h1>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className=" text-gray-600 leading-relaxed text-lg">
              Je conçois des sites internet à Brest qui vont au-delà de
              l'esthétique : ils sont stratégiquement pensés pour convertir vos
              visiteurs en clients et asseoir votre crédibilité locale. Oubliez
              les templates génériques, optez pour une solution 100%
              personnalisée à votre image.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>100% personnalisé</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Livraison garantie 30 jours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Maintenance 3 mois offerte</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Button
              href="/contact"
              color="blue"
              className="text-sm md:text-base w-fit"
            >
              OBTENIR MON DEVIS GRATUIT EN 24H
            </Button>
          </div>

          <div className="flex none  sm:flex-row justify-center items-center gap-1 md:gap-4 text-sm text-gray-500">
            <Badge color="green">✓ Devis 100% gratuit</Badge>
            <Badge color="blue">✓ Sans engagement</Badge>
            <Badge color="purple">✓ Réponse sous 24h</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
