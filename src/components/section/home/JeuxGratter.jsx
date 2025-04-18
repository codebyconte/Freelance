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
    <section className="bg-[#020617] text-white px-4 py-12 md:py-24">
      <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-10">
        <h2
          className={`${dmSerif.className} text-2xl md:text-4xl lg:text-6xl font-bold`}
        >
          Un petit bonus avant de partir ?
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Pour vous remercier de votre visite, grattez une carte au hasard et
          découvrez une ressource offerte pour améliorer votre site. Pas besoin
          d’achat ni d’engagement juste un petit cadeau pour booster votre
          présence en ligne.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 py-8">
        <div className="flex flex-col items-center gap-4">
          {!card || audit ? (
            <ScratchToReveal
              width={250}
              height={250}
              minScratchPercentage={70}
              className="w-[85vw] max-w-[250px] flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
              gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
              onComplete={() => {
                setAudit(true);
                setCard(true);
              }}
            >
              <p className="px-4 text-black text-center text-sm leading-relaxed">
                Vous avez gagné un audit de performance gratuit ! Recevez une
                analyse personnalisée de la vitesse de votre site.
              </p>
            </ScratchToReveal>
          ) : null}

          {audit && (
            <Button
              href="/contact"
              color="blue"
              className="text-sm md:text-base w-fit"
            >
              Je réclame mon audit
            </Button>
          )}
        </div>

        <div className="flex flex-col items-center gap-4">
          {!card || analyse ? (
            <ScratchToReveal
              width={250}
              height={250}
              minScratchPercentage={70}
              className="w-[85vw] max-w-[250px] flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
              gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
              onComplete={() => {
                setAnalyse(true);
                setCard(true);
              }}
            >
              <p className="px-4 text-black text-center text-sm leading-relaxed">
                Vous avez gagné une mini-analyse UX ! Je vous fais un retour en
                3 points sur votre site.
              </p>
            </ScratchToReveal>
          ) : null}

          {analyse && (
            <Button
              href="/contact"
              color="blue"
              className="text-sm md:text-base w-fit"
            >
              Je demande mon analyse UX
            </Button>
          )}
        </div>

        <div className="flex flex-col items-center gap-4">
          {!card || perdu ? (
            <ScratchToReveal
              width={250}
              height={250}
              minScratchPercentage={70}
              className="w-[85vw] max-w-[250px] flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
              gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
              onComplete={() => {
                setPerdu(true);
                setCard(true);
              }}
            >
              <p className="px-4 text-black text-center text-sm leading-relaxed">
                ❌ Pas de lot cette fois
              </p>
            </ScratchToReveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
