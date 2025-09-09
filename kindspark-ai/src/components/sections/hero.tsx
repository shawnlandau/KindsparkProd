"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative pt-16 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
              Unlock AI-Powered Growth for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Your Business
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {site.tagline} - Transform manual processes into intelligent automation that drives revenue and scales your operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href={site.ctas.primary.href}>
                  {site.ctas.primary.label}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href={site.ctas.secondary.href}>
                  {site.ctas.secondary.label}
                </Link>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {site.proofStats.revenueIncreasePct}%
                </div>
                <div className="text-gray-600">Average Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {site.proofStats.timeSavingsPct}%
                </div>
                <div className="text-gray-600">Time Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {site.proofStats.roiMultiplier}
                </div>
                <div className="text-gray-600">ROI Multiplier</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
