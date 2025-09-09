import { Metadata } from "next";
import { PrivacyHero } from "@/components/pages/privacy/privacy-hero";
import { PrivacyContent } from "@/components/pages/privacy/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Kindspark AI collects, uses, and protects your personal information in accordance with privacy laws and best practices.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
}
