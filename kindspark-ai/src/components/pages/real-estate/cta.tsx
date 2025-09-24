"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function RealEstateCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of real estate professionals who are already using AI to close more deals, 
            respond faster to leads, and grow their business. Results typically appear within 60-90 days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/assessment?industry=real-estate">
                Get Real-Estate Assessment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact?subject=real-estate">
                Talk to an Expert
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Faster Lead Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">200%</div>
              <div className="text-blue-100">More Qualified Leads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">150%</div>
              <div className="text-blue-100">Revenue Increase</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
