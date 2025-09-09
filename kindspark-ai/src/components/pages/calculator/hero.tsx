"use client";

import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Calculator,
    title: "Free Calculator",
    description: "No cost, no commitment - just insights"
  },
  {
    icon: TrendingUp,
    title: "Instant Results",
    description: "See your potential savings immediately"
  },
  {
    icon: DollarSign,
    title: "ROI Projections",
    description: "Understand your return on investment"
  }
];

export function CalculatorHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            TCO Calculator
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the hidden costs of inefficient lead management and see exactly how much 
            you could save with AI automation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-xl mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
