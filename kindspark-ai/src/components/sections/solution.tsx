"use client";

import { motion } from "framer-motion";
import { Zap, Workflow, TrendingUp, Settings } from "lucide-react";
import { site } from "@/lib/site-config";

const iconMap = {
  zap: Zap,
  workflow: Workflow,
  "trending-up": TrendingUp,
  settings: Settings,
};

export function Solution() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            The Kindspark AI Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with intelligent automation that works 24/7 to capture, qualify, and convert leads while you focus on what matters most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {site.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-6">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What This Means for Your Business
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {site.proofStats.revenueIncreasePct}%+
              </div>
              <div className="text-gray-600 font-medium">
                Revenue Increase
              </div>
              <div className="text-sm text-gray-500 mt-2">
                Through optimized lead conversion
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {site.proofStats.timeSavingsPct}%
              </div>
              <div className="text-gray-600 font-medium">
                Time Savings
              </div>
              <div className="text-sm text-gray-500 mt-2">
                On manual administrative tasks
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {site.proofStats.roiMultiplier}
              </div>
              <div className="text-gray-600 font-medium">
                ROI Multiplier
              </div>
              <div className="text-sm text-gray-500 mt-2">
                Within 60-90 days
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
