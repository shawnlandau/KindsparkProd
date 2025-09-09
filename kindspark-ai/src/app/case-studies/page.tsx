import { Metadata } from "next";
import { CaseStudiesHero } from "@/components/pages/case-studies/hero";
import { CaseStudiesGrid } from "@/components/pages/case-studies/case-studies-grid";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Discover how businesses like yours have transformed their operations and increased revenue with Kindspark AI automation.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-16">
      <CaseStudiesHero />
      <CaseStudiesGrid />
    </div>
  );
}
