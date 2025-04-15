import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dmSerif } from "@/app/styles/fonts";
import Link from "next/link";

export default function Faq() {
  return (
    <section className="py-18 bg-black text-white grid grid-cols-1 sm:grid-cols-2 p-4">
      <div className="text-center">
        <h2
          className={`${dmSerif.className} text-4xl sm:text-6xl font-bold max-w-6xl  p-4 mb-6`}
        >
          Questions les plus fréquentes
        </h2>
        <p className="text-lg">
          Vous ne trouvez pas ce que vous recherchez ?{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contactez-moi
          </Link>
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-400 mt-12 mb-4">
          Services proposés
        </h3>
        <Accordion type="single" className="w-full" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Quels types de sites web développez-vous ?
            </AccordionTrigger>
            <AccordionContent>
              Je conçois des sites web 100% codés à la main : site vitrine,
              e-commerce, landing page, application sur mesure… chaque projet
              est unique et pensé pour vos objectifs business.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Pourquoi coder un site à la main plutôt qu’utiliser WordPress ou
              Wix ?
            </AccordionTrigger>
            <AccordionContent>
              Un site codé à la main est plus rapide, plus sécurisé, plus
              évolutif. Pas de thème préfabriqué, chaque ligne de code est
              optimisée pour vos besoins spécifiques.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Travaillez-vous avec tous les secteurs d’activité ?
            </AccordionTrigger>
            <AccordionContent>
              Oui. Artisan, coach, PME, commerce local ou entreprise nationale :
              je m’adapte à chaque univers métier.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Peut-on intégrer des fonctionnalités spécifiques ?
            </AccordionTrigger>
            <AccordionContent>
              Bien sûr. Réservation en ligne, paiement sécurisé, blog, tableau
              de bord… Je développe tout sur mesure selon vos besoins.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <h3 className="text-2xl font-semibold text-gray-400 mt-12 mb-4">
          Processus de travail
        </h3>
        <Accordion type="single" className="w-full" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Comment démarre un projet ?</AccordionTrigger>
            <AccordionContent>
              Un premier échange permet de clarifier vos besoins. Ensuite, je
              vous propose un plan clair, un calendrier et les étapes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Comment se passent les échanges pendant le projet ?
            </AccordionTrigger>
            <AccordionContent>
              Vous avez un interlocuteur unique et un suivi régulier par email,
              visio ou téléphone.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Puis-je demander des modifications en cours de route ?
            </AccordionTrigger>
            <AccordionContent>
              Oui, dans la limite de ce qui est prévu au planning. Je reste
              toujours flexible et transparent.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <h3 className="text-2xl font-semibold text-gray-400 mt-12 mb-4">
          Services proposés
        </h3>
        <Accordion type="single" className="w-full" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Quels types de sites web développez-vous ?
            </AccordionTrigger>
            <AccordionContent>
              Je conçois des sites web 100% codés à la main : site vitrine,
              e-commerce, landing page, application sur mesure… chaque projet
              est unique et pensé pour vos objectifs business.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Pourquoi coder un site à la main plutôt qu’utiliser WordPress ou
              Wix ?
            </AccordionTrigger>
            <AccordionContent>
              Un site codé à la main est plus rapide, plus sécurisé, plus
              évolutif. Pas de thème préfabriqué, chaque ligne de code est
              optimisée pour vos besoins spécifiques.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Travaillez-vous avec tous les secteurs d’activité ?
            </AccordionTrigger>
            <AccordionContent>
              Oui. Artisan, coach, PME, commerce local ou entreprise nationale :
              je m’adapte à chaque univers métier.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Peut-on intégrer des fonctionnalités spécifiques ?
            </AccordionTrigger>
            <AccordionContent>
              Bien sûr. Réservation en ligne, paiement sécurisé, blog, tableau
              de bord… Je développe tout sur mesure selon vos besoins.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <h3 className="text-2xl font-semibold text-gray-400 mt-12 mb-4">
          Aspects techniques
        </h3>
        <Accordion type="single" className="w-full" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Le site sera-t-il responsive ?</AccordionTrigger>
            <AccordionContent>
              Oui. Tous mes sites sont conçus pour s’adapter parfaitement à tous
              les écrans (mobile, tablette, desktop).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Mon site sera-t-il sécurisé ?</AccordionTrigger>
            <AccordionContent>
              Absolument. Certificat SSL, protection contre les injections,
              bonnes pratiques à jour : la sécurité est une priorité.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Pourrai-je modifier le contenu moi-même ?
            </AccordionTrigger>
            <AccordionContent>
              Si vous le souhaitez, j’intègre une interface simple pour éditer
              textes et images sans toucher au code.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Proposez-vous le paiement en ligne et base de données ?
            </AccordionTrigger>
            <AccordionContent>
              Oui. Intégration de Stripe, PayPal, formulaires avancés, bases
              MongoDB/PostgreSQL, etc.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Le site sera-t-il optimisé pour Google (SEO) ?
            </AccordionTrigger>
            <AccordionContent>
              Oui. Structure, balises, vitesse, accessibilité… Tout est optimisé
              pour améliorer votre visibilité.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <h3 className="text-2xl font-semibold text-gray-400 mt-12 mb-4">
          Support & maintenance
        </h3>
        <Accordion type="single" className="w-full" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Proposez-vous un service après livraison ?
            </AccordionTrigger>
            <AccordionContent>
              Oui. Je reste disponible pour toute mise à jour ou évolution. Des
              forfaits de maintenance sont également proposés.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Comment faire si j’ai besoin d’aide après la mise en ligne ?
            </AccordionTrigger>
            <AccordionContent>
              Un simple message suffit. Je suis joignable facilement pour vous
              accompagner.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <h3 className="text-2xl font-semibold text-gray-400 mt-12 mb-4">
          Collaboration & qualité
        </h3>
        <Accordion type="single" className="w-full" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Et si je ne suis pas satisfait du design ?
            </AccordionTrigger>
            <AccordionContent>
              Chaque étape intègre vos retours. Mon objectif : un résultat à la
              hauteur de vos attentes, sans surprise.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Comment garantissez-vous la qualité du code ?
            </AccordionTrigger>
            <AccordionContent>
              Je respecte les standards modernes (HTML5, Tailwind, JavaScript
              ES6+), et chaque projet est testé et documenté.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
