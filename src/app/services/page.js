import HeroService from "@/components/section/services/HeroService";
import { Divider } from "@/components/ui/divider";
import Tarif from "@/components/section/services/Tarif";

export default function PageServices() {
  return (
    <main>
      <HeroService />
      <Tarif />
    </main>
  );
}
