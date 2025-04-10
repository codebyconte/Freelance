import Link from "next/link";
import { Button } from "@/components/ui/button";
import { dmSerif } from "@/app/styles/fonts";

export default function Cta() {
  return (
    <div>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className={`${dmSerif.className}  text-4xl sm:text-6xl  text-gray-900 `}
          >
            Prêt à faire passer votre site au niveau supérieur ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
            Discutons ensemble de votre projet autour d’un échange gratuit et
            sans engagement. Je vous conseille sur les meilleures solutions pour
            faire évoluer votre présence en ligne.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button color="blue" href="/contact">
              Discutons de votre projet gratuitement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
