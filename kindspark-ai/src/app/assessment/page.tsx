import { Metadata } from "next";
import { AssessmentHero } from "@/components/pages/assessment/hero";
import { AssessmentForm } from "@/components/pages/assessment/assessment-form";

export const metadata: Metadata = {
  title: "Free Business Assessment",
  description: "Get a free, comprehensive assessment of your business processes and discover how AI automation can transform your operations and drive growth.",
};

export default function AssessmentPage() {
  return (
    <div className="pt-16">
      <AssessmentHero />
      <AssessmentForm />
    </div>
  );
}
