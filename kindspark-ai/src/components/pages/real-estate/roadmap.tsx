"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site-config";

export function RealEstateRoadmap() {
  const { realEstate } = site.verticals;
  
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
            Your Real Estate AI Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your real estate operations in three strategic phases, 
            from fixing inefficiencies to scaling with AI insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {realEstate.roadmap.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Phase number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                {phase.phase}
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {phase.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {phase.description}
                </p>
                
                <div className="space-y-3">
                  {phase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Connector line */}
              {index < realEstate.roadmap.length - 1 && (
                <div className="hidden md:block absolute top-4 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Real Estate Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Most real estate teams see improved lead response times within the first week, 
              with full optimization typically achieved within 60-90 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/assessment?industry=real-estate"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Real-Estate Assessment
              </a>
              <a 
                href="/contact?subject=real-estate"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Talk to an Expert
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
