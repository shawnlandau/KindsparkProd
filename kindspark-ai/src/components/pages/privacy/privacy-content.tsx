"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site-config";

export function PrivacyContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you:
          </p>
          <ul>
            <li>Fill out our assessment form or contact forms</li>
            <li>Subscribe to our newsletter or updates</li>
            <li>Communicate with us via email or phone</li>
            <li>Use our TCO calculator or other tools</li>
          </ul>

          <p>
            This information may include your name, email address, phone number, company name, 
            industry, and other business-related information you choose to provide.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process and respond to your inquiries and requests</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Communicate with you about products, services, and promotions</li>
            <li>Monitor and analyze trends and usage</li>
            <li>Personalize and improve your experience</li>
          </ul>

          <h2>Information Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except in the following circumstances:
          </p>
          <ul>
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and prevent fraud</li>
            <li>In connection with a business transfer or acquisition</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction. However, 
            no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to collect and use personal information 
            about you. You can control cookies through your browser settings, but disabling cookies 
            may affect the functionality of our website.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites or services. We are not responsible 
            for the privacy practices of these third parties. We encourage you to read their privacy 
            policies before providing any personal information.
          </p>

          <h2>Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data</li>
            <li>Object to certain processing activities</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services and 
            fulfill the purposes outlined in this privacy policy, unless a longer retention period 
            is required or permitted by law.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to children under 13 years of age. We do not knowingly 
            collect personal information from children under 13. If you are a parent or guardian 
            and believe your child has provided us with personal information, please contact us.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes 
            by posting the new privacy policy on this page and updating the &ldquo;Last updated&rdquo; date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please 
            contact us at:
          </p>
          <ul>
            <li>Email: <a href={`mailto:${site.contactEmail}`} className="text-primary hover:underline">{site.contactEmail}</a></li>
            <li>Website: <a href={`https://${site.domain}`} className="text-primary hover:underline">{site.domain}</a></li>
          </ul>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">GDPR Compliance</h3>
            <p className="text-sm text-gray-600">
              If you are located in the European Union, you have additional rights under the General 
              Data Protection Regulation (GDPR). Please contact us if you would like to exercise 
              these rights or have questions about our GDPR compliance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
