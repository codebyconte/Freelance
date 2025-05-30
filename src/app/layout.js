import "@/app/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import { inter } from "@/app/styles/fonts";
import Script from "next/script";
import Footer from "@/components/layout/Footer";

export const metadata = {
  metadataBase: new URL("https://codebyconte.fr"),
  title: "Création site internet à Brest – Développeur web freelance",
  description:
    "Développeur web freelance à Brest, je crée des sites internet modernes, rapides et sur mesure pour les entrepreneurs et artisans. Discutons de votre projet !",
  openGraph: {
    title: "Création site internet à Brest – Développeur web freelance",
    description:
      "Sites web modernes, performants et sur mesure pour les entreprises à Brest.",
    url: "https://codebyconte.fr",
    siteName: "Code By Conte",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du site Code By Conte",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeur web à Brest – Code By Conte",
    description:
      "Création de sites sur mesure pour entrepreneurs, artisans et PME à Brest.",
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
  return (
    <html lang="fr" className={inter.className}>
      <body className="w-full">
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
