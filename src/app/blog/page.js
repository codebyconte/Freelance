import Image from "next/image";

export const metadata = {
  title: "Blog – Conseils en création de site web & SEO | Code By Conte",
  description:
    "Apprenez à améliorer la performance, la visibilité et la conversion de votre site web grâce à nos articles rédigés par un développeur freelance à Brest.",
  alternates: {
    canonical: "https://www.codebyconte.fr/blog",
  },
  openGraph: {
    title: "Blog – Conseils en création de site web & SEO | Code By Conte",
    description:
      "Optimisez votre site web grâce à nos conseils pratiques sur la création, le SEO, la performance et la stratégie digitale.",
    url: "https://www.codebyconte.fr/blog",
    siteName: "Code By Conte",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.codebyconte.fr/opengraph-image.png",
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
    images: ["https://www.codebyconte.fr/opengraph-image.png"],
  },
};

const posts = [
  {
    id: 1,
    title: "Développeur Web Brest : Le Guide Ultime pour un Site Qui Rapporte",
    href: "/blog/developpeur-web-brest",
    description:
      "À la recherche du meilleur développeur web à Brest ? Découvrez le guide complet pour créer un site internet sur-mesure, rapide et optimisé pour le SEO local, qui transforme vos visiteurs en clients.",
    imageUrl: "/Devellopeur web.webp",
    date: "30 mai 2025",
    datetime: "2025-05-30",
  },
  {
    id: 2,
    title:
      "Création site internet Brest : trouvez la solution idéale pour votre activité",
    href: "/blog/creation-site-internet-brest",
    description:
      "Besoin d’un site web performant à Brest ? Découvrez les solutions pour la création de site internet à Brest : freelance, agence ou sur-mesure. Conseils et comparaison.",
    imageUrl: "/site-internet.webp",
    date: "30 mai 2025",
    datetime: "2025-05-30",
  },
  {
    id: 3,
    title: "Agence Web Brest : Le Guide 2025 pour Choisir le Bon Partenaire",
    href: "/blog/agence-web-brest-freelance-vs-agence",
    description:
      "Vous cherchez la meilleure agence web à Brest ? Découvrez notre guide pour choisir le partenaire idéal (agence ou freelance) pour la création de votre site internet et garantir votre retour sur investissement.",
    imageUrl: "/agence-web.webp",
    date: "30 mai 2025",
    datetime: "2025-05-30",
  },
  {
    id: 4,
    title:
      "Refonte site internet Brest : boostez votre présence locale en 2025",
    href: "/blog/refonte-site-internet-brest",
    description:
      "Refonte site internet Brest : offrez une seconde vie à votre site web avec un design moderne, SEO local et performance mobile. Audit gratuit !",
    imageUrl: "/refonte-site-internet.webp",
    date: "9 juin 2025",
    datetime: "2025-06-09",
  },
  {
    id: 5,
    title:
      "Maintenance site internet à Brest | Protégez et boostez votre activité",
    href: "/blog/maintenance-site-internet-brest",
    description:
      "Votre site web à Brest est lent, vulnérable ou invisible sur Google ? Découvrez notre guide complet sur la maintenance de site internet. Protégez votre investissement et attirez plus de clients.",
    imageUrl: "/maintenance.webp",
    date: "16 juin 2025",
    datetime: "2025-06-16",
  },
];

const sortedPosts = [...posts].sort((a, b) =>
  b.datetime.localeCompare(a.datetime)
);

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
            url: "https://www.codebyconte.fr/blog",
            description:
              "Le blog de Code By Conte vous propose des conseils en création de site web, SEO, performance et stratégie digitale.",
            publisher: {
              "@type": "Person",
              name: "Conte Mouctar",
              url: "https://www.codebyconte.fr",
            },
            blogPost: sortedPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              image: `https://www.codebyconte.fr${post.imageUrl}`,
              author: {
                "@type": "Person",
                name: "Conte Mouctar",
              },
              datePublished: post.datetime,
              url: `https://www.codebyconte.fr${post.href}`,
              description: post.description,
            })),
          }),
        }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
            Blog – Votre Expert Web à Brest : Conseils pour un Site Performant{" "}
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Booster votre visibilité web à Brest ? Améliorer votre site ? En
            créer un sur mesure ? Ce blog vous offre des conseils pratiques et
            des stratégies de développeur web local pour un site performant et
            bien référencé. Entrepreneurs, artisans, freelances, découvrez
            comment transformer votre présence en ligne.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {sortedPosts.map((post) => (
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
