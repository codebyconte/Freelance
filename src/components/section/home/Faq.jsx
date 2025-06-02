import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="py-12 px-4">
      <h2 className="font-semibold text-2xl py-6">
        Questions Fréquentes sur la Création de Site Internet à Brest{" "}
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Quel est le prix pour la création d'un site internet professionnel à
            Brest ?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Le tarif pour la création d'un site vitrine sur mesure de qualité
              à Brest démarre généralement autour de 1200€. Ce prix peut varier
              selon la complexité, le nombre de pages et les fonctionnalités
              spécifiques. Un devis précis et gratuit vous est fourni sous 24h
              après notre premier échange sur vos besoins.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Combien de temps faut-il pour créer mon site web à Brest ?{" "}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Le délai moyen pour la création complète d'un site internet à
              Brest se situe entre 2 et 6 semaines. Cela dépend de la taille du
              projet, des fonctionnalités demandées et de votre réactivité pour
              la fourniture des contenus (textes, images).
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Dois-je fournir le texte et les images pour mon site ?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Vous connaissez votre métier mieux que quiconque ! Fournir vos
              propres textes et images est idéal pour un site authentique.
              Cependant, je peux vous guider dans la rédaction pour optimiser le
              SEO, structurer vos idées, et vous conseiller des banques d'images
              de qualité ou des photographes locaux à Brest si besoin.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Que se passe-t-il une fois mon site web livré ?{" "}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Une fois votre site internet créé et mis en ligne à Brest, vous en
              êtes pleinement propriétaire. Je vous offre une période de
              garantie pour les ajustements. Selon vos préférences, vous pouvez
              gérer votre site en autonomie (après formation si CMS) ou opter
              pour un forfait de maintenance pour assurer sa sécurité et ses
              performances sur le long terme.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Proposez-vous des facilités de paiement pour la création de site ?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Oui, pour faciliter votre investissement dans la création de votre
              site internet à Brest, un paiement échelonné (généralement en 2 ou
              3 fois sans frais) est possible. Nous pouvons en discuter lors de
              notre premier contact.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
