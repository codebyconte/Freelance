import HeroService from "@/components/section/services/HeroService";
import OffreInclue from "@/components/section/services/OffreInclue";
import { Divider } from "@/components/ui/divider";
import Tarif from "@/components/section/services/Tarif";
import Faq from "@/components/section/services/Faq";
import Quiz from "@/components/section/services/Quiz";

export default function PageServices() {
  return (
    <main>
      <HeroService />
      <Tarif />
      <OffreInclue />
      <Quiz />
      <Faq />
    </main>
  );
}
