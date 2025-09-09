import { Metadata } from "next";
import { BeyondAIHero } from "@/components/pages/beyond-ai/hero";
import { AdditionalServices } from "@/components/pages/beyond-ai/additional-services";

export const metadata: Metadata = {
  title: "Beyond AI",
  description: "Discover our comprehensive suite of services beyond AI automation, including training, custom integrations, and ongoing support to maximize your business growth.",
};

export default function BeyondAIPage() {
  return (
    <div className="pt-16">
      <BeyondAIHero />
      <AdditionalServices />
    </div>
  );
}
