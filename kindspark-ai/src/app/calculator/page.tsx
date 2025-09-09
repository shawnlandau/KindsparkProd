import { Metadata } from "next";
import { CalculatorHero } from "@/components/pages/calculator/hero";
import { TCOCalculator } from "@/components/pages/calculator/tco-calculator";

export const metadata: Metadata = {
  title: "TCO Calculator",
  description: "Calculate the true cost of inefficient lead management and discover how much you could save with AI automation.",
};

export default function CalculatorPage() {
  return (
    <div className="pt-16">
      <CalculatorHero />
      <TCOCalculator />
    </div>
  );
}
