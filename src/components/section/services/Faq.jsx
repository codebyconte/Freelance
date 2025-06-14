import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

// --- NOUVEAU : Données de la FAQ structurées pour une meilleure lisibilité et maintenance ---
const faqSections = [
  {
    category: "Tarifs & Offres",
    items: [
      {
        question: "Quelle offre est la plus adaptée pour moi ?",
        answer:
          "C'est une excellente question ! L'offre 'Site Vitrine Essentiel' est parfaite pour vous lancer et présenter votre activité. Si votre but est d'attirer des clients via Google et de publier du contenu, l'offre 'Visibilité Pro' avec son blog et son SEO avancé est idéale. Enfin, si vous souhaitez vendre ou proposer des réservations, l'offre 'E-commerce & Réservation' est faite pour vous. Le mieux reste d'en discuter ensemble !",
      },
      {
        question:
          "Que se passe-t-il après les 3 mois de 'Lancement Serein' inclus ?",
        answer:
          "Après cette période, vous avez le choix. Vous pouvez souscrire à mon forfait de maintenance pour que je continue de m'occuper de tout (hébergement, sécurité, support). Si vous préférez être 100% autonome, je vous accompagne pour transférer le site chez l'hébergeur de votre choix. Dans tous les cas, vous êtes et restez l'unique propriétaire de votre site web.",
      },
      {
        question: "Les tarifs indiqués sont-ils fixes ?",
        answer:
          "Les tarifs affichés sont des bases de départ transparentes pour des projets standards. Chaque entreprise a des besoins uniques. C'est pourquoi, après un premier échange pour bien comprendre vos objectifs, je vous fournis un devis détaillé, personnalisé et sans aucune surprise.",
      },
    ],
  },
  {
    category: "Le Projet & La Collaboration",
    items: [
      {
        question:
          "Pourquoi choisir un site codé sur-mesure plutôt qu'un template (WordPress, Wix...) ?",
        answer:
          "Un site codé sur-mesure, c'est la garantie d'avoir un site qui vous ressemble à 100% et qui est optimisé pour la performance. Contrairement aux templates, il n'y a pas de code superflu qui ralentit votre site. Vous obtenez une meilleure sécurité, des temps de chargement records et une flexibilité totale pour les évolutions futures.",
      },
      {
        question: "Comment se déroule un projet avec vous ?",
        answer:
          "Mon processus est simple et transparent. 1) On échange sur vos besoins lors d'un appel découverte. 2) Je vous envoie une proposition détaillée. 3) Après validation, je conçois et développe le site en vous tenant informé à chaque étape clé. 4) On valide ensemble avant la mise en ligne. Vous avez un seul interlocuteur : moi.",
      },
      {
        question: "Puis-je modifier le contenu de mon site moi-même ?",
        answer:
          "Absolument. Toutes mes offres incluent l'intégration d'un CMS (Système de Gestion de Contenu) comme Sanity ou Strapi. Je vous forme à son utilisation pour que vous puissiez modifier textes, images et articles de blog en toute autonomie, sans avoir besoin de toucher une ligne de code.",
      },
    ],
  },
  {
    category: "Technique & Performance",
    items: [
      {
        question: "Mon site sera-t-il bien visible sur Google (SEO) ?",
        answer:
          "Oui, c'est une priorité non négociable. Dès la construction, j'applique toutes les bonnes pratiques du SEO technique : structure sémantique, balises optimisées, vitesse de chargement, responsive design... Pour aller plus loin, l'offre 'Visibilité Pro' inclut une stratégie SEO avancée.",
      },
      {
        question: "Utilisez-vous des technologies modernes ?",
        answer:
          "Oui, je travaille principalement avec Next.js (React), une technologie de pointe utilisée par les plus grandes entreprises pour créer des sites ultra-rapides et sécurisés. Côté design, j'utilise Tailwind CSS pour des interfaces modernes et sur-mesure.",
      },
      {
        question: "La sécurité est-elle prise en compte ?",
        answer:
          "La sécurité est au cœur de mon travail. Chaque site est livré avec un certificat SSL (le cadenas dans l'URL), et je mets en place les meilleures pratiques pour le protéger contre les vulnérabilités courantes. Mon forfait de maintenance assure également des mises à jour de sécurité continues.",
      },
    ],
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
        {/* --- Colonne de gauche améliorée --- */}
        <div className="lg:col-span-5">
          <h2 className="text-4xl font-bold leading-10 text-white sm:text-5xl">
            Des réponses claires pour un projet serein
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-300">
            La transparence est la clé d'une collaboration réussie. Voici les
            réponses aux questions que l'on me pose le plus souvent. Mon but est
            que vous ayez toutes les cartes en main pour prendre la meilleure
            décision pour votre projet.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            Une autre question ?{" "}
            <Link
              href="/contact"
              className="font-semibold text-blue-500 hover:text-blue-400"
            >
              Contactez-moi directement.
            </Link>
          </p>
        </div>

        {/* --- Colonne de droite avec les accordéons --- */}
        <div className="mt-10 lg:col-span-7 lg:mt-0">
          {faqSections.map((section) => (
            <div key={section.category} className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-4 border-b border-gray-700 pb-2">
                {section.category}
              </h3>
              <Accordion type="single" className="w-full" collapsible>
                {section.items.map((item, index) => (
                  <AccordionItem
                    value={`item-${section.category}-${index}`}
                    key={item.question}
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
