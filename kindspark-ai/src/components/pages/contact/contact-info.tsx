"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { site } from "@/lib/site-config";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    value: site.contactEmail,
    href: `mailto:${site.contactEmail}`,
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri 9AM-6PM EST",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us online",
    value: "Available 24/7",
    href: "#",
  },
];

const officeInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    description: "123 Business Ave, Suite 100\nSan Francisco, CA 94105",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Monday - Friday: 9:00 AM - 6:00 PM EST\nSaturday: 10:00 AM - 4:00 PM EST\nSunday: Closed",
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Other Ways to Reach Us
        </h2>
            <p className="text-gray-600 mb-6">
              Prefer to reach out directly? We&apos;re here to help through multiple channels.
            </p>
      </div>

      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.title}
            href={method.href}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-lg mr-4">
              <method.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{method.title}</h3>
              <p className="text-sm text-gray-600">{method.description}</p>
              <p className="text-sm font-medium text-primary">{method.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="border-t pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Office Information
        </h3>
        <div className="space-y-4">
          {officeInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-lg mr-4 mt-1">
                <info.icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{info.title}</h4>
                <p className="text-sm text-gray-600 whitespace-pre-line">
                  {info.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Quick Response Guarantee
        </h3>
        <p className="text-sm text-gray-600">
          We respond to all inquiries within 24 hours during business days. 
          For urgent matters, please call us directly.
        </p>
      </div>
    </motion.div>
  );
}
