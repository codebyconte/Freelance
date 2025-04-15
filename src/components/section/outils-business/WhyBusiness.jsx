import { dmSerif } from "@/app/styles/fonts";
import Image from "next/image";

export default function WhyBusiness() {
  return (
    <section className="bg-black text-white py-16  px-4 w-full space-y-10 p-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-10">
          Pourquoi utiliser nos outils business ?
        </h3>
        <ul className="grid gap-12 sm:grid-cols-3">
          <li className="flex flex-col items-center text-center space-y-4 px-4">
            <Image
              src="/time flies-cuate.svg"
              width={180}
              height={180}
              alt="Gagner du temps"
              className="mx-auto"
            />
            <h4 className="text-lg font-bold text-white">Gagnez du temps</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Accédez à des analyses instantanées, sans expertise technique.
            </p>
          </li>

          <li className="flex flex-col items-center text-center space-y-4 px-4">
            <Image
              src="/Business analytics-amico.svg"
              width={180}
              height={180}
              alt="Analytics"
              className="mx-auto"
            />
            <h4 className="text-lg font-bold text-white">
              Décidez en toute confiance
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Appuyez vos choix sur des données fiables et à jour.
            </p>
          </li>

          <li className="flex flex-col items-center text-center space-y-4 px-4">
            <Image
              src="/Personal goals-bro.svg"
              width={180}
              height={180}
              alt="Rester compétitif"
              className="mx-auto"
            />
            <h4 className="text-lg font-bold text-white">Restez compétitif</h4>
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
