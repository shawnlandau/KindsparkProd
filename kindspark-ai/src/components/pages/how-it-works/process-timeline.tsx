"use client";

import { motion } from "framer-motion";
import { Search, Cog, TrendingUp } from "lucide-react";

const phases = [
  {
    number: 1,
    title: "Audit & Strategy",
    duration: "Week 1-2",
    icon: Search,
    description: "We analyze your current processes, identify bottlenecks, and create a customized AI strategy.",
    details: [
      "Comprehensive business process audit",
      "Lead flow analysis and optimization opportunities",
      "Technology stack assessment",
      "Custom AI strategy development",
      "ROI projections and timeline planning"
    ]
  },
  {
    number: 2,
    title: "Implementation",
    duration: "Week 3-6",
    icon: Cog,
    description: "We build and deploy your AI automation systems with seamless integration to your existing tools.",
    details: [
      "AI workflow development and testing",
      "CRM and tool integrations",
      "Lead qualification and routing setup",
      "Automated follow-up sequence creation",
      "Team training and documentation"
    ]
  },
  {
    number: 3,
    title: "AI-Driven Growth",
    duration: "Ongoing",
    icon: TrendingUp,
    description: "We monitor, optimize, and scale your AI systems to continuously improve performance and drive growth.",
    details: [
      "Performance monitoring and analytics",
      "Continuous optimization and improvements",
      "A/B testing and refinement",
      "Scaling successful strategies",
      "Ongoing support and maintenance"
    ]
  }
];

export function ProcessTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Our 3-Phase Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial assessment to ongoing optimization, we guide you through every step of your AI transformation.
          </p>
        </motion.div>

        <div className="space-y-16">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-2xl font-bold text-xl mr-6">
                    {phase.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {phase.title}
                    </h3>
                    <div className="text-primary font-semibold">
                      {phase.duration}
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  {phase.description}
                </p>
                <ul className="space-y-3">
                  {phase.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/10 to-blue-100 rounded-2xl flex items-center justify-center">
                  <phase.icon className="h-24 w-24 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
