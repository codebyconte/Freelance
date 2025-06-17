import { Fragment } from "react";
import { CheckIcon, MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";

const tiers = [
  {
    name: "Site Vitrine Essentiel",
    id: "essentiel",
    description:
      "La solution idéale pour lancer votre activité, présenter vos services et être enfin visible sur internet avec un site professionnel et rapide.",
    price: "1 200 €", // Modifié : On clarifie que c'est un coût de projet
    href: "/contact",
    mainFeatures: [
      // Renommé "highlights" en "mainFeatures" pour plus de clarté
      "Design moderne et 100% responsive",
      "Jusqu'à 5 pages conçues pour convertir",
      "Performance web de pointe (Next.js)",
      "Optimisation SEO technique initiale",
      "Gestion de contenu simplifiée (CMS)",
      "3 mois de lancement serein inclus",
    ],
  },
  {
    name: "Site Visibilité Pro",
    id: "visibilite",
    description:
      "Pour les entreprises qui veulent attirer plus de clients grâce à Google, avec un blog pour démontrer votre expertise et un design sur-mesure.",
    price: "1 800 €",
    href: "/contact",
    mainFeatures: [
      "Tout du pack Essentiel, et plus :",
      "Blog optimisé pour le référencement",
      "Stratégie SEO avancée pour vous positionner",
      "Design 100% sur-mesure à votre image",
      "Intégration Google Analytics & Search Console",
      "Jusqu'à 15 pages + articles de blog illimités",
    ],
  },
  {
    name: "Site E-commerce & Réservation",
    id: "ecommerce",
    description:
      "Vendez vos produits ou services en ligne 24/7. Une plateforme complète pour gérer vos ventes, vos clients et vos réservations sans effort.",
    price: "2 500 €",
    href: "/contact",
    mainFeatures: [
      "Plateforme E-commerce complète",
      "Gestion de produits ou services (jusqu'à 50)",
      "Paiements en ligne sécurisés (Stripe, etc.)",
      "Système de réservation ou de prise de RDV",
      "Espace client personnel (suivi commandes...)",
      "Optimisation SEO pour fiches produits",
    ],
  },
];

// --- Données de la Table de Comparaison (Peu de changements nécessaires ici) ---
const sections = [
  {
    name: "Fonctionnalités Clés",
    features: [
      {
        name: "Nombre de pages",
        tiers: {
          "Site Vitrine Essentiel": "Jusqu'à 5",
          "Site Visibilité Pro": "Jusqu'à 15",
          "Site E-commerce & Réservation": "Illimité",
        },
      },
      {
        name: "Blog optimisé SEO",
        tiers: {
          "Site Vitrine Essentiel": false,
          "Site Visibilité Pro": true,
          "Site E-commerce & Réservation": true,
        },
      },
      {
        name: "Module E-commerce / Réservation",
        tiers: {
          "Site Vitrine Essentiel": false,
          "Site Visibilité Pro": false,
          "Site E-commerce & Réservation": true,
        },
      },
      {
        name: "Espace client",
        tiers: {
          "Site Vitrine Essentiel": false,
          "Site Visibilité Pro": false,
          "Site E-commerce & Réservation": true,
        },
      },
    ],
  },
  {
    name: "Design & Technologie",
    features: [
      {
        name: "Design sur-mesure",
        tiers: {
          "Site Vitrine Essentiel": false,
          "Site Visibilité Pro": true,
          "Site E-commerce & Réservation": true,
        },
      },
      {
        name: "Développement moderne (Next.js)",
        tiers: {
          "Site Vitrine Essentiel": true,
          "Site Visibilité Pro": true,
          "Site E-commerce & Réservation": true,
        },
      },
      {
        name: "100% Responsive (Mobile, Tablette)",
        tiers: {
          "Site Vitrine Essentiel": true,
          "Site Visibilité Pro": true,
          "Site E-commerce & Réservation": true,
        },
      },
      {
        name: "CMS pour gestion autonome",
        tiers: {
          "Site Vitrine Essentiel": true,
          "Site Visibilité Pro": true,
          "Site E-commerce & Réservation": true,
        },
      },
    ],
  },
  {
    name: "SEO & Performance",
    features: [
      {
        name: "SEO Technique (balises, vitesse...)",
        tiers: {
          "Site Vitrine Essentiel": true,
          "Site Visibilité Pro": true,
          "Site E-commerce & Réservation": true,
        },
      },
      {
        name: "Stratégie SEO Avancée",
        tiers: {
          "Site Vitrine Essentiel": false,
          "Site Visibilité Pro": true,
          "Site E-commerce & Réservation": true,
        },
      },
      {
        name: "Rapports de performance (Analytics)",
        tiers: {
          "Site Vitrine Essentiel": false,
          "Site Visibilité Pro": true,
          "Site E-commerce & Réservation": true,
        },
      },
    ],
  },
  {
    name: "Lancement Serein (Inclus 3 mois)",
    features: [
      {
        name: "Nom de domaine + Hébergement",
        tiers: {
          "Site Vitrine Essentiel": true,
          "Site Visibilité Pro": true,
          "Site E-commerce & Réservation": true,
        },
      },
      {
        name: "Support technique par email",
        tiers: {
          "Site Vitrine Essentiel": true,
          "Site Visibilité Pro": true,
          "Site E-commerce & Réservation": true,
        },
      },
      {
        name: "Mises à jour de sécurité",
        tiers: {
          "Site Vitrine Essentiel": true,
          "Site Visibilité Pro": true,
          "Site E-commerce & Réservation": true,
        },
      },
    ],
  },
];

export function GrilleTarif() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 max-lg:text-center lg:max-w-7xl lg:px-8">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-950 sm:text-6xl lg:text-pretty">
          Un investissement unique pour un site qui travaille pour vous.
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium text-pretty text-gray-600 max-lg:mx-auto sm:text-xl/8">
          Que vous soyez indépendant, une PME ou un commerçant, je crée le site
          web performant et facile à gérer qui vous aidera à atteindre vos
          objectifs. Pas d'abonnements cachés, juste un tarif clair pour un
          projet clé en main.
        </p>
      </div>
      <div className="relative pt-16 sm:pt-24">
        <div className="absolute inset-x-0 top-48 bottom-0 bg-[radial-gradient(circle_at_center_center,#3B82F6,#1D4ED8,#030712_70%)] lg:bg-[radial-gradient(circle_at_center_150%,#3B82F6,#1D4ED8,#030712_70%)]" />
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                id={tier.id}
                className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
              >
                <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
                  <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                    <h2 className="text-sm font-semibold text-blue-600">
                      {tier.name} <span className="sr-only">plan</span>
                    </h2>
                    <p className="mt-2 text-sm/6 text-pretty text-gray-600">
                      {tier.description}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="text-sm text-gray-600">
                        <p>À partir de</p>
                      </div>
                      <div className="text-5xl font-semibold text-gray-950">
                        {tier.price}
                      </div>
                    </div>
                    <div className="mt-8">
                      <Link
                        href={tier.href}
                        aria-label={`Start a free trial on the ${tier.name} plan`}
                        className="inline-block rounded-md bg-blue-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Demander un devis
                      </Link>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-sm/6 font-medium text-gray-950">
                        Inclus dans l’offre :
                      </h3>
                      <ul className="mt-3 space-y-3">
                        {tier.mainFeatures.map((feature) => (
                          <li
                            key={feature}
                            className="group flex items-start gap-4 text-sm/6 text-gray-600 data-disabled:text-gray-400"
                          >
                            <span className="inline-flex h-6 items-center">
                              <PlusIcon
                                aria-hidden="true"
                                className="size-4 fill-gray-400 group-data-disabled:fill-gray-300"
                              />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between py-16 opacity-60 max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4 sm:py-24"></div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-6 pt-16 sm:pt-24 lg:max-w-7xl lg:px-8">
        <table className="w-full text-left max-sm:hidden">
          <caption className="sr-only">Pricing plan comparison</caption>
          <colgroup>
            <col className="w-2/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <thead>
            <tr>
              <td className="p-0" />
              {tiers.map((tier) => (
                <th key={tier.name} scope="col" className="p-0">
                  <div className="text-sm font-semibold text-blue-600">
                    {tier.name} <span className="sr-only">plan</span>
                  </div>
                </th>
              ))}
            </tr>
            <tr>
              <th className="p-0" />
              {tiers.map((tier) => (
                <td key={tier.name} className="px-0 pt-3 pb-0">
                  <Link
                    href={tier.href}
                    aria-label={`Get started with the ${tier.name} plan`}
                    className="inline-block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                  >
                    Demander un devis
                  </Link>
                </td>
              ))}
            </tr>
          </thead>
          {sections.map((section) => (
            <tbody key={section.name} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold text-gray-950">
                    {section.name}
                  </div>
                </th>
              </tr>
              {section.features.map((feature) => (
                <tr
                  key={feature.name}
                  className="border-b border-gray-100 last:border-none"
                >
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    {feature.name}
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="p-4 max-sm:text-center">
                      {typeof feature.tiers[tier.name] === "string" ? (
                        <>
                          <span className="sr-only">{tier.name} includes:</span>
                          <span className="text-sm/6 text-gray-950">
                            {feature.tiers[tier.name]}
                          </span>
                        </>
                      ) : (
                        <>
                          {feature.tiers[tier.name] === true ? (
                            <CheckIcon
                              aria-hidden="true"
                              className="inline-block size-4 fill-green-600"
                            />
                          ) : (
                            <MinusIcon
                              aria-hidden="true"
                              className="inline-block size-4 fill-gray-400"
                            />
                          )}

                          <span className="sr-only">
                            {feature.tiers[tier.name] === true
                              ? `Included in ${tier.name}`
                              : `Not included in ${tier.name}`}
                          </span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
        <TabGroup className="sm:hidden">
          <TabList className="flex">
            {tiers.map((tier) => (
              <Tab
                key={tier.name}
                className="w-1/3 border-b border-gray-100 py-4 text-base/8 font-medium text-indigo-600 data-selected:border-indigo-600 [&:not([data-focus])]:focus:outline-hidden"
              >
                {tier.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels as={Fragment}>
            {tiers.map((tier) => (
              <TabPanel key={tier.name}>
                <Link
                  href={tier.href}
                  className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                >
                  Demander un devis
                </Link>
                {sections.map((section) => (
                  <Fragment key={section.name}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {section.name}
                    </div>
                    <dl>
                      {section.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                        >
                          <dt className="text-sm/6 font-normal text-gray-600">
                            {feature.name}
                          </dt>
                          <dd className="text-center">
                            {typeof feature.tiers[tier.name] === "string" ? (
                              <span className="text-sm/6 text-gray-950">
                                {feature.tiers[tier.name]}
                              </span>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    aria-hidden="true"
                                    className="inline-block size-4 fill-green-600"
                                  />
                                ) : (
                                  <MinusIcon
                                    aria-hidden="true"
                                    className="inline-block size-4 fill-gray-400"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true
                                    ? "Yes"
                                    : "No"}
                                </span>
                              </>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </Fragment>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
