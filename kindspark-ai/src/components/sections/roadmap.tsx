"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { site } from "@/lib/site-config";

export function Roadmap() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Complete AI Transformation Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 3-phase approach ensures your business transformation is smooth, measurable, and sustainable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {site.roadmap.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-xl font-bold text-lg mr-4">
                    {phase.phase}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {phase.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {phase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {index < site.roadmap.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your AI Transformation?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of businesses that have already transformed their operations with our proven approach.
            </p>
            <div className="text-sm text-gray-500">
              Average implementation time: 2-4 weeks per phase
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
