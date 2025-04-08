import Hero from "@/components/section/home/Hero";
import Services from "@/components/section/home/ServicesApercu";
import { GoogleStat } from "@/components/section/home/GoogleStat";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <GoogleStat />
      <Services />
    </main>
  );
}
