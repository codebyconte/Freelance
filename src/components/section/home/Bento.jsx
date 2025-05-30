import Image from "next/image";

export default function Bento() {
  return (
    <div className="mb-16 ">
      <div className="mx-auto max-w-3xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-blue-600">
          Des sites web performants, modernes et pensés pour votre activité à
          Brest
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Tout ce dont vous avez besoin pour créer un site internet sur mesure,
          rapide, responsive et bien référencé à Brest ou ailleurs.{" "}
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Adapté à tous les écrans
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Votre site est entièrement responsive : il s’adapte
                  parfaitement aux smartphones, tablettes et ordinateurs. Un
                  design fluide est essentiel pour l’expérience utilisateur et
                  améliore aussi votre référencement Google, notamment pour les
                  recherches locales à Brest.
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
                  Des performances au service de votre business
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Chaque site que je développe est optimisé pour un chargement
                  rapide, une navigation fluide et une performance technique
                  exemplaire. Ces optimisations favorisent votre positionnement
                  SEO, notamment pour les entreprises locales à Brest.
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
                  Sécurisé et fiable
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Vos données sont protégées grâce à un code propre, une
                  architecture fiable et le respect des meilleures pratiques de
                  sécurité web. En tant que développeur basé à Brest, je veille
                  à ce que votre site reste fiable, sécurisé et conforme aux
                  standards actuels.
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
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Une base solide et évolutive
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Grâce à des technologies modernes (Next.js, React, Tailwind,
                  etc.), je développe des sites web uniques, performants et
                  évolutifs. Basé à Brest, je vous accompagne sur le long terme
                  avec une solution digitale fiable, adaptable à la croissance
                  de votre activité.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        Layout.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">
                        App.jsx
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14"></div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
