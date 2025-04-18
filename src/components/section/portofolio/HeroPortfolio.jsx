import { dmSerif } from "@/app/styles/fonts";

export default function HeroPortfolio() {
  return (
    <section className="min-h-screen flex justify-center items-center px-4 sm:py-16 md:py-24 ">
      <div className="max-w-4xl text-center space-y-6">
        <h1
          className={`${dmSerif.className} text-3xl sm:text-5xl lg:text-7xl leading-tight text-shadow-lg`}
        >
          Des sites qui répondent à vos vrais objectifs
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
          Attirer, convaincre, vendre : chaque site que je développe est pensé
          pour vous aider à atteindre des résultats concrets, avec un design
          sur-mesure et des performances solides.
        </p>
      </div>
    </section>
  );
}
