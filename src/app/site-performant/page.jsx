import HeroPerformance from "@/components/section/site-performant/HeroPerformance";
import Indispensable from "@/components/section/site-performant/Indispensable";
import StatistiquePerformance from "@/components/section/site-performant/StatistiquePerformance";
import CodeVsNocode from "@/components/section/site-performant/CodeVsNocode";
import CtaPerformance from "@/components/section/site-performant/CtaPerformance";

export default function PageSitePerformant() {
  return (
    <main>
      <HeroPerformance />
      <Indispensable />
      <StatistiquePerformance />
      <CodeVsNocode />
      <CtaPerformance />
    </main>
  );
}
