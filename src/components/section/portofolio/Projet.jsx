import Link from "next/link";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/motionprimitives/morphing-dialog";
import { PlusIcon } from "lucide-react";
import { dmSerif } from "@/app/styles/fonts";

export default function Projet() {
  return (
    <section className="max-w-6xl mx-auto  p-4">
      <div>
        <h2
          className={`${dmSerif.className} text-4xl sm:text-6xl font-bold max-w-6xl text-center p-4`}
        >
          Voici quelques exemples de projets réalisés récemment.
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12  ">
        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex w-full flex-col overflow-hidden border border-zinc-950/10 bg-white mx-auto hover:outline"
          >
            <MorphingDialogImage
              src="/Booki.png"
              alt="Site vitrine pour une agence de voyage"
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2 mx-auto">
              <div>
                <MorphingDialogTitle className="text-zinc-950 text-center mx-auto">
                  Booki
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700  ">
                  Site vitrine pour une agence de voyage
                </MorphingDialogSubtitle>
              </div>
              <div className="p-1 bg-zinc-200 rounded-md hover:bg-zinc-200 transition ml-2">
                <PlusIcon size={15} />
              </div>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
            >
              <MorphingDialogImage
                src="/Booki.png"
                alt="Site vitrine pour une agence de voyage"
                className="h-full w-full"
              />
              <div className="p-6 space-y-2">
                <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                  Booki
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400 ">
                  Site vitrine pour une agence de voyage
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <p>
                    <span className="font-semibold">Secteur :</span>Améliorer la
                    visibilité de l’agence grâce à une landing page moderne et
                    responsive.
                  </p>
                  <p>
                    <span className="font-semibold">Objectif client :</span>
                    Tourisme
                  </p>
                  <p className="font-semibold">Ce que j’ai développé :</p>
                  <ul className="list-disc">
                    <li>
                      Intégration HTML/CSS 100% fidèle à la maquette fournie
                    </li>
                    <li>
                      Responsive design optimisé pour mobile, tablette et
                      desktop
                    </li>
                    <li>Code propre, maintenable, versionné avec Git</li>
                  </ul>
                  <p>
                    <span className="font-semibold ">Bénéfice</span> Un site
                    vitrine clair, professionnel, et prêt à convertir les
                    visiteurs.
                  </p>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>

        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex w-full  flex-col overflow-hidden border border-zinc-950/10 bg-white mx-auto hover:outline"
          >
            <MorphingDialogImage
              src="/Architect.png"
              alt="Portfolio dynamique pour architecte"
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2 mx-auto">
              <div>
                <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
                  Sophie Bluel
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  Portfolio dynamique pour architecte
                </MorphingDialogSubtitle>
              </div>
              <div className="p-1 bg-zinc-200 rounded-md hover:bg-zinc-200 transition ml-2">
                <PlusIcon size={15} />
              </div>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
            >
              <MorphingDialogImage
                src="/Architect.png"
                alt="Portfolio dynamique pour architecte"
                className="h-full w-full"
              />
              <div className="p-6 space-y-2">
                <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                  Sophie Bluel
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  Portfolio dynamique pour architecte
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">Secteur :</span>
                      Architecture
                    </p>
                    <p>
                      <span className="font-semibold">Objectif client :</span>
                      Présenter les projets de l’architecte de façon dynamique
                      et professionnelle.
                    </p>
                    <p className="font-semibold">Ce que j’ai développé :</p>
                    <ul className="list-disc">
                      <li>
                        Front-end en JavaScript natif pour affichage dynamique
                      </li>
                      <li>
                        Connexion à une API REST pour la gestion des projets
                      </li>
                      <li>Formulaire de contact fonctionnel et sécurisé</li>
                    </ul>
                    <p>
                      <span className="font-semibold ">Bénéfice</span> Un
                      portfolio simple à mettre à jour, élégant, et facile à
                      utiliser.
                    </p>
                  </div>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>

        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex w-full  flex-col overflow-hidden border border-zinc-950/10 bg-white mx-auto hover:outline"
          >
            <MorphingDialogImage
              src="/Kasa.png"
              alt="Application React pour plateforme de location"
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2 mx-auto">
              <div>
                <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
                  Kasa
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  Application React pour plateforme de location
                </MorphingDialogSubtitle>
              </div>
              <div className="p-1 bg-zinc-200 rounded-md hover:bg-zinc-200 transition ml-2">
                <PlusIcon size={15} />
              </div>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
            >
              <MorphingDialogImage
                src="/Kasa.png"
                alt="Application React pour plateforme de location"
                className="h-full w-full"
              />
              <div className="p-6 space-y-2">
                <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                  Kasa
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  Application React pour plateforme de location
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">Secteur :</span>Immobilier
                    </p>
                    <p>
                      <span className="font-semibold">Objectif client :</span>
                      Proposer une expérience fluide pour la consultation de
                      logements à louer.
                    </p>
                    <p className="font-semibold">Ce que j’ai développé :</p>
                    <ul className="list-disc">
                      <li>Application SPA en React avec routing optimisé</li>
                      <li>Architecture modulaire en composants</li>
                      <li>
                        Accessibilité respectée (ARIA, contrastes…) + animations
                        CSS
                      </li>
                    </ul>
                    <p>
                      <span className="font-semibold ">Bénéfice</span> Un site
                      rapide, agréable à naviguer et facilement extensible.
                    </p>
                  </div>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>

        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex w-full  flex-col overflow-hidden border border-zinc-950/10 bg-white mx-auto hover:outline"
          >
            <MorphingDialogImage
              src="/Monvieuxgrimoire.png"
              alt="API sécurisée pour site de notation de livres"
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2 mx-auto">
              <div>
                <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
                  Mon Vieux Grimoire
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  API sécurisée pour site de notation de livres
                </MorphingDialogSubtitle>
              </div>
              <div className="p-1 bg-zinc-200 rounded-md hover:bg-zinc-200 transition ml-2">
                <PlusIcon size={15} />
              </div>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
            >
              <MorphingDialogImage
                src="/Monvieuxgrimoire.png"
                alt="API sécurisée pour site de notation de livres"
                className="h-full w-full"
              />
              <div className="p-6 space-y-2">
                <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                  Mon Vieux Grimoire
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  API sécurisée pour site de notation de livres
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">Secteur :</span>Culture /
                      Édition
                    </p>
                    <p>
                      <span className="font-semibold">Objectif client :</span>
                      Créer un système sécurisé pour gérer les livres et leurs
                      notations.
                    </p>
                    <p className="font-semibold">Ce que j’ai développé :</p>
                    <ul className="list-disc">
                      <li>API REST complète (CRUD, sécurité, validation)</li>
                      <li>
                        Authentification JWT, chiffrement des mots de passe
                        (bcrypt)
                      </li>
                      <li>
                        Stockage des données avec MongoDB, back-end Node.js +
                        Express
                      </li>
                    </ul>
                    <p>
                      <span className="font-semibold ">Bénéfice</span> Une base
                      technique fiable et sécurisée, prête à alimenter une
                      interface utilisateur.
                    </p>
                  </div>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
      </div>
    </section>
  );
}
