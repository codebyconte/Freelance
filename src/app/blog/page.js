import Image from "next/image";

export const metadata = {
  title: "Blog – Conseils en création de site web & SEO | Code By Conte",
  description:
    "Apprenez à améliorer la performance, la visibilité et la conversion de votre site web grâce à nos articles rédigés par un développeur freelance à Brest.",
  alternates: {
    canonical: "https://codebyconte.fr/blog",
  },
  openGraph: {
    title: "Blog – Conseils en création de site web & SEO | Code By Conte",
    description:
      "Optimisez votre site web grâce à nos conseils pratiques sur la création, le SEO, la performance et la stratégie digitale.",
    url: "https://codebyconte.fr/blog",
    siteName: "Code By Conte",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://codebyconte.fr/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Blog Code By Conte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Conseils site web, SEO, stratégie digitale",
    description:
      "Les conseils pratiques d’un développeur web freelance à Brest pour booster la performance de votre site.",
    site: "@klyx_digital",
    creator: "@klyx_digital",
    images: ["https://codebyconte.fr/opengraph-image.png"],
  },
};

const posts = [
  {
    id: 1,
    title:
      "Développeur web à Brest : Ce que vous devez savoir avant de créer votre site en 2025",
    href: "/blog/developpeur-web",
    description:
      "Vous cherchez un développeur web à Brest pour créer un site professionnel, visible sur Google et adapté à vos besoins ? Découvrez les bonnes pratiques, les pièges à éviter et comment choisir le bon freelance.",
    imageUrl: "/Devellopeur web.jpg",
    date: "30 mai 2025",
    datetime: "2025-05-30",
  },
  {
    id: 2,
    title:
      "Création Site Internet Brest : Guide Complet des Prix, Délais et Erreurs à Éviter en 2025",
    href: "/blog/creation-site",
    description:
      "Combien coûte la création d'un site internet à Brest en 2025 ? Quels sont les délais typiques ? Découvrez les tarifs, les étapes clés et les pièges à éviter (freelance vs. agence vs. no-code). Demandez un audit offert !",
    imageUrl: "/site-internet.jpg",
    date: "30 mai 2025",
    datetime: "2025-05-30",
  },
  {
    id: 3,
    title:
      "Agence Web à Brest : Existe-t-il une meilleure alternative en 2025 ?",
    href: "/blog/agence-web",
    description:
      "Vous cherchez une agence web à Brest pour créer votre site ? Découvrez pourquoi de plus en plus d'entrepreneurs se tournent vers des freelances locaux pour plus de flexibilité, d'écoute et de résultats.",
    imageUrl: "/agence-web.jpg",
    date: "30 mai 2025",
    datetime: "2025-05-30",
  },
  {
    id: 4,
    title: "Pourquoi un site web performant est essentiel pour réussir en 2025",
    href: "/blog/site-performant",
    description:
      "Découvrez pourquoi créer un site web performant est devenu indispensable pour toute entreprise en 2025. Crédibilité, acquisition, référencement local… tout est lié.",
    imageUrl: "/performance.jpg",
    date: "30 mai 2025",
    datetime: "2025-05-30",
  },
];

export default function Page() {
  return (
    <main className="bg-white py-8 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog de Code By Conte",
            url: "https://codebyconte.fr/blog",
            description:
              "Le blog de Code By Conte vous propose des conseils en création de site web, SEO, performance et stratégie digitale.",
            publisher: {
              "@type": "Person",
              name: "Conte Mouctar",
              url: "https://codebyconte.fr",
            },
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              image: `https://codebyconte.fr${post.imageUrl}`,
              author: {
                "@type": "Person",
                name: "Conte Mouctar",
              },
              datePublished: post.datetime,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://codebyconte.fr${post.href}`,
              },
              url: `https://codebyconte.fr${post.href}`,
              description: post.description,
            })),
          }),
        }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Blog – Votre Expert Web à Brest : Conseils pour un Site Performant{" "}
          </h1>
          <p className="mt-2 text-lg/8 text-gray-600">
            Booster votre visibilité web à Brest ? Améliorer votre site ? En
            créer un sur mesure ? Ce blog vous offre des conseils pratiques et
            des stratégies de développeur web local pour un site performant et
            bien référencé. Entrepreneurs, artisans, freelances, découvrez
            comment transformer votre présence en ligne.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="absolute inset-0 -z-10 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
              </div>
              <h2 className="mt-3 text-lg/6 font-semibold text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h2>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
