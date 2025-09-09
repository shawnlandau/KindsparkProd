"use client";

import { motion } from "framer-motion";

export function BeyondAIHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            Beyond AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our comprehensive suite of services goes beyond AI automation to provide complete 
            business transformation, training, and ongoing support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
