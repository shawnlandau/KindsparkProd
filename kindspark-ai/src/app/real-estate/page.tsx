import { Metadata } from "next";
import { RealEstateHero } from "@/components/pages/real-estate/hero";
import { RealEstateProblem } from "@/components/pages/real-estate/problem";
import { RealEstateSolution } from "@/components/pages/real-estate/solution";
import { RealEstateCaseStudy } from "@/components/pages/real-estate/case-study";
import { RealEstateRoadmap } from "@/components/pages/real-estate/roadmap";
import { RealEstateFAQ } from "@/components/pages/real-estate/faq";
import { RealEstateCTA } from "@/components/pages/real-estate/cta";

export const metadata: Metadata = {
  title: "Real Estate AI Solutions | Kindspark AI",
  description: "Transform your real estate business with AI-powered lead management, automated buyer-agent matching, and predictive market insights. Increase qualified leads by 200% and close more deals.",
  keywords: "real estate AI, property management software, real estate automation, lead management, buyer agent matching, real estate CRM",
  openGraph: {
    title: "Real Estate AI Solutions | Kindspark AI",
    description: "Transform your real estate business with AI-powered lead management, automated buyer-agent matching, and predictive market insights.",
    type: "website",
  },
};

export default function RealEstatePage() {
  return (
    <div className="min-h-screen">
      <RealEstateHero />
      <RealEstateProblem />
      <RealEstateSolution />
      <RealEstateCaseStudy />
      <RealEstateRoadmap />
      <RealEstateFAQ />
      <RealEstateCTA />
    </div>
  );
}
