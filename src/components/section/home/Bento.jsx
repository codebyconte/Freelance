import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Bento() {
  return (
    <div className="py-12">
      <div className="max-w-3xl px-6 lg:max-w-7xl lg:px-8 space-y-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight ">
            Votre Futur Site Web à Brest : Conçu pour Convertir, Performer et
            Durer.{" "}
          </h2>
          <p className="max-w-4xl text-gray-600 leading-relaxed text-lg mt-2">
            En me confiant la création de votre site internet à Brest, voici ce
            que vous obtenez concrètement :
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Affichage Parfait sur Tous les Écrans{" "}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Un design 100% responsive, pensé d'abord pour le mobile,
                  garantissant une expérience utilisateur impeccable sur
                  smartphones, tablettes et ordinateurs. Votre image
                  professionnelle est soignée, quel que soit le support utilisé
                  par vos clients à Brest.
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <Image
                    src="/bento-03-mobile-friendly.webp"
                    alt="Mobile"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Performance & Vitesse Optimale{" "}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Un site qui charge en un éclair . Fini les visiteurs frustrés,
                  bonjour les conversions et un meilleur classement Google.
                  Chaque page est optimisée pour la vitesse.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <Image
                  src="/bento-03-performance.webp"
                  alt="Performance"
                  width={800} // ← valeur par défaut, à ajuster si tu connais la taille réelle
                  height={500} // ← idem
                  className="w-full max-lg:max-w-xs object-contain"
                  priority={false}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Sécurité & Fiabilité Modernes{" "}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Certificat SSL (HTTPS), code propre et sécurisé, protection
                  contre les menaces courantes. Dormez sur vos deux oreilles.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <Image
                  src="/bento-03-security.webp"
                  alt="Sécurité"
                  width={500} // valeur estimée à adapter selon la taille réelle
                  height={152} // hauteur inspirée de "152px" de ta classe Tailwind
                  className="h-[min(152px,40cqw)] object-cover"
                  priority={false}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
          </div>
          <div className="relative">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-tr-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Une Base Solide et Évolutive (Technologie Moderne){" "}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Développé avec des technologies de pointe (Next.js, React),
                  votre site est prêt à grandir avec votre entreprise brestoise.
                  Pas de solutions propriétaires qui vous enferment.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-tr-[2rem]"></div>
          </div>
          <div className="relative">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 py-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Visibilité Locale SEO Renforcée à Brest{" "}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Optimisation pour les recherches "votre activité + Brest",
                  "meilleur [service] Finistère", et sur Google Maps. Vos
                  clients locaux vous trouvent enfin facilement.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Button
          color="blue"
          href="/portfolio"
          aria-label="Voir mes réalisations de sites internet à Brest"
        >
          VOIR MES RÉALISATIONS
        </Button>
      </div>
    </div>
  );
}
