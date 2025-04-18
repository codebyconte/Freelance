import HeroBusiness from "@/components/section/outils-business/HeroBusiness";
import WhyBusiness from "@/components/section/outils-business/WhyBusiness";
import Compare from "@/components/section/outils-business/Compare";
import Graphique from "@/components/section/outils-business/Graphique";
import CtaOutils from "@/components/section/outils-business/CtaOutils";

export default function PageBusiness() {
  return (
    <main className="overflow-x-hidden">
      <HeroBusiness />
      <WhyBusiness />
      <Compare />
      <Graphique />
      <CtaOutils />
    </main>
  );
}
