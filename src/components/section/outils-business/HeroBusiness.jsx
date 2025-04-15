import { Button } from "@/components/ui/button";
import { dmSerif } from "@/app/styles/fonts";

export default function HeroBusiness() {
  return (
    <section className="h-screen  flex flex-col justify-center items-center ">
      <div className="max-w-5xl  text-center space-y-6 p-4">
        <h1
          className={`${dmSerif.className} text-6xl  lg:text-8xl text-shadow-lg`}
        >
          Prenez une longueur d’avance avec nos outils business
        </h1>
        <p className=" text-lg sm:text-xl leading-relaxed">
          Prenez des décisions éclairées pour votre entreprise grâce à des
          outils gratuits, simples et puissants. Analysez votre marché,
          comparez-vous à vos concurrents, simulez vos revenus et découvrez les
          tendances locales en quelques clics.
        </p>
        <p className="text-base text-gray-500 italic">
          Pensés pour les dirigeants, freelances et créateurs d’entreprise.
        </p>
      </div>
    </section>
  );
}
