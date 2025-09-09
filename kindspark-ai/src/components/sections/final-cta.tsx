"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have already automated their growth with Kindspark AI. 
            Get your free assessment and discover your potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href={site.ctas.primary.href}>
                {site.ctas.primary.label}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">
                Have Questions?
              </Link>
            </Button>
          </div>

          <div className="text-blue-100 text-sm">
            <p>Free assessment • No commitment • Results in 24 hours</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
