import { dmSerif } from "@/app/styles/fonts";
import Image from "next/image";

export default function WhyBusiness() {
  return (
    <section className="bg-black text-white px-4 py-12 md:py-16 w-full space-y-10  overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-10">
          Pourquoi utiliser nos outils business ?
        </h3>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <li className="flex flex-col items-center text-center space-y-4 px-2">
            <Image
              src="/time flies-cuate.svg"
              width={180}
              height={180}
              alt="Gagner du temps"
            />
            <h4 className="text-base md:text-lg font-bold text-white">
              Gagnez du temps
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Accédez à des analyses instantanées, sans expertise technique.
            </p>
          </li>

          <li className="flex flex-col items-center text-center space-y-4 px-2">
            <Image
              src="/Business analytics-amico.svg"
              width={180}
              height={180}
              alt="Analytics"
            />
            <h4 className="text-base md:text-lg font-bold text-white">
              Décidez en toute confiance
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Appuyez vos choix sur des données fiables et à jour.
            </p>
          </li>

          <li className="flex flex-col items-center text-center space-y-4 px-2">
            <Image
              src="/Personal goals-bro.svg"
              width={180}
              height={180}
              alt="Rester compétitif"
            />
            <h4 className="text-base md:text-lg font-bold text-white">
              Restez compétitif
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Surveillez votre marché et anticipez les évolutions de votre
              secteur.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
