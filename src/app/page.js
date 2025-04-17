import Hero from "@/components/section/home/Hero";
import Services from "@/components/section/home/ServicesApercu";
import { GoogleStat } from "@/components/section/home/GoogleStat";
import PourquoiMoi from "@/components/section/home/PourquoiMoi";
import Cta from "@/components/section/home/Cta";
import { JeuxGratter } from "@/components/section/home/JeuxGratter";
import Bento from "@/components/section/home/Bento";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <GoogleStat />
      <Services />
      <Bento />
      <PourquoiMoi />
      <Cta />
      <JeuxGratter />
    </main>
  );
}
