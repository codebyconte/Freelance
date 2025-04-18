import Image from "next/image";
import { dmSerif } from "@/app/styles/fonts";

export default function Indispensable() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-24 w-full text-center bg-white">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        <h2
          className={`${dmSerif.className} text-2xl md:text-4xl lg:text-5xl font-bold leading-tight`}
        >
          Pourquoi un site web est indispensable aujourd’hui ?
        </h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed">
          En 2025, ne pas avoir de site web, c’est comme ne pas exister aux yeux
          de vos clients. Les habitudes des consommateurs ont changé : ils
          recherchent, comparent et achètent en ligne. Voici pourquoi un site
          web est indispensable pour toute entreprise qui souhaite rester
          compétitive.
        </p>
      </div>

      <ul className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto">
        <li className="flex flex-col items-center text-center gap-4">
          <Image
            src="/Browsing online-amico.svg"
            width={130}
            height={150}
            alt="Crédibilité instantanée"
          />
          <h3 className="text-lg md:text-xl font-semibold">
            Crédibilité instantanée
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            84% des internautes jugent la crédibilité d’une entreprise sur son
            site web. Sans présence en ligne professionnelle, vous perdez la
            confiance de vos clients avant même d’avoir eu l’opportunité de les
            convaincre.
          </p>
        </li>

        <li className="flex flex-col items-center text-center gap-4">
          <Image
            src="/Ecommerce checkout laptop-cuate.svg"
            width={200}
            height={200}
            alt="Visibilité permanente"
          />
          <h3 className="text-lg md:text-xl font-semibold">
            Visibilité permanente
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            Un site web est accessible 24h/24, 7j/7, partout dans le monde. Il
            permet à vos clients de vous trouver facilement, même en dehors des
            heures d’ouverture.
          </p>
        </li>

        <li className="flex flex-col items-center text-center gap-4">
          <Image
            src="/app-launch.svg"
            width={200}
            height={200}
            alt="Acquisition directe"
          />
          <h3 className="text-lg md:text-xl font-semibold">
            Acquisition directe
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            Votre site peut devenir votre meilleur commercial : formulaires
            automatisés, appels programmés, devis instantanés… Tout est conçu
            pour transformer les visiteurs en prospects qualifiés.
          </p>
        </li>

        <li className="flex flex-col items-center text-center gap-4">
          <Image
            src="/Mobile UI-UX-rafiki.svg"
            width={200}
            height={200}
            alt="Maîtrise de votre image"
          />
          <h3 className="text-lg md:text-xl font-semibold">
            Maîtrise de votre image
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            Contrairement aux réseaux sociaux, vous êtes maître à 100 % de votre
            communication. Votre site vous permet de personnaliser chaque détail
            : design, message, contenu.
          </p>
        </li>
      </ul>
    </section>
  );
}
