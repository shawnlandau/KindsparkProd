import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { site } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "How It Works", href: "/how-it-works" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Beyond AI", href: "/beyond-ai" },
      { name: "Assessment", href: "/assessment" },
    ],
    resources: [
      { name: "Calculator", href: "/calculator" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.svg"
                alt={site.name}
                width={160}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              {site.tagline}
            </p>
            <div className="flex space-x-4">
              <a
                href={`mailto:${site.contactEmail}`}
                className="text-gray-400 hover:text-primary transition-colors"
                title="Contact us via email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <p className="text-gray-600 text-sm">
                Ready to transform your business with AI?
              </p>
              <Link
                href={site.ctas.primary.href}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                {site.ctas.primary.label}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} {site.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Built with ❤️ for growing businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
