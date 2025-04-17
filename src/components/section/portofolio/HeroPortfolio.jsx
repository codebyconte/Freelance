import { dmSerif } from "@/app/styles/fonts";

export default function HeroPortfolio() {
  return (
    <section className="h-screen flex justify-center items-center p-4">
      <div className="max-w-5xl  text-center space-y-6 ">
        <h1
          className={`${dmSerif.className} text-6xl  lg:text-8xl text-shadow-lg`}
        >
          Des sites qui répondent à vos vrais objectifs
        </h1>
        <p className="text-lg  leading-relaxed">
          Attirer, convaincre, vendre : chaque site que je développe est pensé
          pour vous aider à atteindre des résultats concrets, avec un design
          sur-mesure et des performances solides.
        </p>
      </div>
    </section>
  );
}
