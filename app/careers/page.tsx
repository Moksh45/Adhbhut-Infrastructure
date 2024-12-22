import { CareersHero } from "@/components/sections/careers-hero";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { CurrentOpenings } from "@/components/sections/current-openings";

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <BenefitsSection />
      <CurrentOpenings />
    </main>
  );
}