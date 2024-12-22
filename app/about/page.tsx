import { AboutHero } from "@/components/sections/about-hero";
import { CompanyHistory } from "@/components/sections/company-history";
import { CoreValues } from "@/components/sections/core-values";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyHistory />
      <CoreValues />
    </main>
  );
}