import { Button } from "@/components/ui/button";

export default function HeroBusiness() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4   w-full overflow-x-hidden">
      <div className="max-w-5xl text-center space-y-6">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-950 sm:text-6xl lg:text-pretty">
          Pilotez votre entreprise, la clarté en plus.{" "}
        </h1>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-600">
          Prenez des décisions stratégiques pour votre entreprise avec des
          outils gratuits, conçus pour les entrepreneurs, dirigeants et
          indépendants qui visent la croissance. Sans jargon technique, juste
          des données claires pour aller à l'essentiel.
        </p>
      </div>
    </section>
  );
}
