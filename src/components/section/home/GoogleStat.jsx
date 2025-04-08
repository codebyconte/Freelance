import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function GoogleStat() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
      <VelocityScroll defaultVelocity={1} className="text-lg sm:text-5xl">
        Selon une étude menée par Google, 53% des visiteurs sur mobile quittent
        une page si elle met plus de 3 secondes à charger.
      </VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
