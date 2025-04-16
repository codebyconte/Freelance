import "@/app/styles/globals.css";
import Header from "@/components/layout/Header";
import { inter } from "@/app/styles/fonts";
import Script from "next/script";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Code By Conte",
  description:
    "Je crée des sites web performants, rapides et élégants pour les entreprises et indépendants. Site vitrine, e-commerce ou refonte, le tout 100% sur-mesure.",
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
        <Header>
          {children}
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
        </Header>
        <Footer />
      </body>
    </html>
  );
}
