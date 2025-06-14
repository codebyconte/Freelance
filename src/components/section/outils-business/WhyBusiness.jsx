import { dmSerif } from "@/app/styles/fonts";
import Image from "next/image";

export default function WhyBusiness() {
  return (
    <section className="bg-black text-white px-4 py-12 md:py-24 w-full space-y-10  overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-10">
          Pourquoi utiliser ces outils ?{" "}
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <li className="flex flex-col items-center text-center space-y-4 px-2">
            <Image
              src="/time flies-cuate.svg"
              width={180}
              height={180}
              alt="Gagner du temps"
            />
            <h3 className="text-base md:text-lg font-bold text-white">
              Gagnez un temps précieux{" "}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Accédez à des analyses instantanées et des simulateurs pertinents
              sans passer des heures sur des tableurs complexes.{" "}
            </p>
          </li>

          <li className="flex flex-col items-center text-center space-y-4 px-2">
            <Image
              src="/Business analytics-amico.svg"
              width={180}
              height={180}
              alt="Analytics"
            />
            <h3 className="text-base md:text-lg font-bold text-white">
              Prenez des décisions éclairées{" "}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Fondez votre stratégie sur des données fiables et à jour pour
              minimiser les risques et maximiser vos chances de succès.
            </p>
          </li>

          <li className="flex flex-col items-center text-center space-y-4 px-2">
            <Image
              src="/Personal goals-bro.svg"
              width={180}
              height={180}
              alt="Rester compétitif"
            />
            <h3 className="text-base md:text-lg font-bold text-white">
              Conservez votre avantage concurrentiel{" "}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Surveillez votre marché, comprenez ses dynamiques et anticipez les
              prochaines tendances de votre secteur.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
