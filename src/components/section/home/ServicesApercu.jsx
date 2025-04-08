import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ServicesApercu() {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className="text-center max-w-3xl space-y-6">
        <h2 className="text-5xl font-bold">
          Des services pensés pour faire évoluer votre entreprise
        </h2>
        <p className="text-lg">
          Site vitrine, e-commerce, refonte ou optimisation SEO .<br /> je
          conçois des solutions web sur-mesure, rapides et efficaces, <br />
          adaptées aux enjeux des entrepreneurs d’aujourd’hui.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 py-8">
        <Card className="max-w-2xs ">
          <CardHeader>
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
        <Card className="max-w-2xs">
          <CardHeader>
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
        <Card className="max-w-2xs">
          <CardHeader>
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
        <Card className="max-w-2xs">
          <CardHeader>
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
      <div>
        <p>Des solutions digitales pensées pour les entrepreneurs exigeants</p>
      </div>
    </section>
  );
}
