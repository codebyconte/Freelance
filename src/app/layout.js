import "@/app/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import { inter } from "@/app/styles/fonts";
import Script from "next/script";
import Footer from "@/components/layout/Footer";

export const metadata = {
  metadataBase: new URL("https://codebyconte.fr"),
  title:
    "Développeur web à Brest | Création de site internet professionnel – CodeByConte",
  description:
    "Développeur web freelance à Brest, je conçois des sites internet modernes, rapides et sur mesure pour les entrepreneurs, artisans et indépendants. Parlons de votre projet !",
  openGraph: {
    title: "Conte Mouctar – Développeur Web Freelance",
    description:
      "Je développe des sites sur mesure, performants et optimisés pour les entreprises ambitieuses.",
    url: "https://codebyconte.fr",
    siteName: "Code by conte",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du site de Conte Mouctar",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conte Mouctar – Développeur Web Freelance",
    description:
      "Je développe des sites sur mesure, performants et optimisés pour les entreprises ambitieuses.",
    site: "@klyx_digital",
    creator: "@klyx_digital",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Logo.svg",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Code By Conte",
    alternateName: "Conte Mouctar",
    url: "https://codebyconte.fr",
    logo: "https://codebyconte.fr/Logo.svg",
    image: "https://codebyconte.fr/opengraph-image.png",
    description: "Développeur Web Freelance à Brest",
    openingHours: "Mo, Tu, We, Th, Fr, Sa, Su 08:00-20:00",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brest",
      postalCode: "29200",
      addressCountry: "FR",
    },
    areaServed: "France",
    telephone: "+33 6 19 31 20 53",
    email: "mailto:mr.conte@icloud.com",
    paymentAccepted: "Cash, Credit Card, Cryptocurrency",
  };

  return (
    <html lang="fr" className={inter.className}>
      <body className="w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header>{children}</Header>
        <Footer />
        <Analytics />
        <Script id="chatbase-script" strategy="afterInteractive">
          {`
            (function(){
              if(!window.chatbase || window.chatbase("getState")!=="initialized"){
                window.chatbase=(...arguments)=>{
                  if(!window.chatbase.q){window.chatbase.q=[]}
                  window.chatbase.q.push(arguments)
                };
                window.chatbase=new Proxy(window.chatbase,{
                  get(target,prop){
                    if(prop==="q"){return target.q}
                    return(...args)=>target(prop,...args)
                  }
                })
              }
              const onLoad=function(){
                const script=document.createElement("script");
                script.src="https://www.chatbase.co/embed.min.js";
                script.id="eYXrgUzhDp1V53Ubeffp2"; 
                script.domain="www.chatbase.co";
                document.body.appendChild(script)
              };
              if(document.readyState==="complete"){onLoad()}
              else{window.addEventListener("load",onLoad)}
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
