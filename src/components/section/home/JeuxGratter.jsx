"use client";
import { useState } from "react";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import { dmSerif } from "@/app/styles/fonts";
import { Button } from "@/components/ui/button";

export function JeuxGratter() {
  const [card, setCard] = useState(false);
  const [audit, setAudit] = useState(false);
  const [analyse, setAnalyse] = useState(false);
  const [perdu, setPerdu] = useState(false);

  return (
    <section className="bg-[#020617] text-white px-6 py-24">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h2 className={`${dmSerif.className} text-4xl sm:text-6xl font-bold`}>
          Un petit bonus avant de partir ?
        </h2>
        <p className="max-w-3xl mx-auto">
          Pour vous remercier de votre visite, grattez une carte au hasard et
          découvrez une ressource offerte pour améliorer votre site. Pas besoin
          d’achat, aucun engagement.
        </p>
      </div>
      <div className="flex flex-col  justify-center items-center gap-4 md:gap-8 md:flex-row py-8 ">
        <div className="flex flex-col items-center gap-4">
          {!card || audit ? (
            <ScratchToReveal
              width={250}
              height={250}
              minScratchPercentage={70}
              className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100 "
              gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
              onComplete={() => {
                setAudit(true);
                setCard(true);
              }}
            >
              <p className="px-4 text-black text-center">
                Vous avez gagné un audit de performance gratuit ! Recevez une
                analyse personnalisée de la vitesse de votre site.
              </p>
            </ScratchToReveal>
          ) : (
            ""
          )}
          {audit && (
            <div className="flex flex-col">
              <Button href="/contact" color="blue">
                Je réclame mon audit
              </Button>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-4">
          {!card || analyse ? (
            <ScratchToReveal
              width={250}
              height={250}
              minScratchPercentage={70}
              className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
              gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
              onComplete={() => {
                setAnalyse(true);
                setCard(true);
              }}
            >
              <p className="px-4 text-black text-center">
                Vous avez gagné une mini-analyse UX ! Je vous fais un retour en
                3 points sur votre site.
              </p>
            </ScratchToReveal>
          ) : (
            ""
          )}
          {analyse && (
            <div className="block">
              <Button href="/contact" color="blue">
                Je demande mon analyse UX
              </Button>
            </div>
          )}
        </div>
        {!card || perdu ? (
          <ScratchToReveal
            width={250}
            height={250}
            minScratchPercentage={70}
            className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
            gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
            onComplete={() => {
              setPerdu(true);
              setCard(true);
            }}
          >
            <p className="px-4 text-black text-center">
              ❌ Pas de lot cette fois
            </p>
          </ScratchToReveal>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
