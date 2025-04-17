import HeroPortfolio from "@/components/section/portofolio/HeroPortfolio";
import Projet from "@/components/section/portofolio/Projet";
import Techno from "@/components/section/portofolio/Techno";
import CtaPortfolio from "@/components/section/portofolio/CtaPortfolio";

export default function PagePortfolio() {
  return (
    <main>
      <HeroPortfolio />
      <Projet />
      <Techno />
      <CtaPortfolio />
    </main>
  );
}
