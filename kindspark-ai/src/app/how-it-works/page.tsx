import { Metadata } from "next";
import { HowItWorksHero } from "@/components/pages/how-it-works/hero";
import { ProcessTimeline } from "@/components/pages/how-it-works/process-timeline";
import { BeforeAfterComparison } from "@/components/pages/how-it-works/before-after-comparison";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Discover our proven 3-phase approach to AI transformation that helps businesses automate growth and scale efficiently.",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-16">
      <HowItWorksHero />
      <ProcessTimeline />
      <BeforeAfterComparison />
    </div>
  );
}
