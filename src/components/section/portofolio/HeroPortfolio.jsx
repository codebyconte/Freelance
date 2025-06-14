import { dmSerif } from "@/app/styles/fonts";

export default function HeroPortfolio() {
  return (
    <section className="min-h-screen flex justify-center items-center px-4 sm:py-16  ">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-950 sm:text-6xl lg:text-pretty ">
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
