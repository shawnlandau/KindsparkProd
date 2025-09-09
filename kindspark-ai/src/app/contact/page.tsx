import { Metadata } from "next";
import { ContactHero } from "@/components/pages/contact/hero";
import { ContactForm } from "@/components/pages/contact/contact-form";
import { ContactInfo } from "@/components/pages/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our AI automation experts. We're here to help you transform your business with intelligent automation solutions.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactHero />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
