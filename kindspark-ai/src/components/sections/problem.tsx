"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, DollarSign, Users } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Manual Workflows Slow You Down",
    description: "Hours spent on repetitive tasks that could be automated, reducing your capacity for growth."
  },
  {
    icon: DollarSign,
    title: "Missed Revenue from Unqualified Leads",
    description: "Leads falling through cracks due to slow response times and inconsistent follow-up processes."
  },
  {
    icon: Users,
    title: "No Visibility into Marketing ROI",
    description: "Struggling to track which marketing efforts actually drive qualified leads and revenue."
  },
  {
    icon: AlertTriangle,
    title: "Disjointed Systems Cause Errors",
    description: "Data scattered across multiple tools leading to missed opportunities and customer frustration."
  }
];

const impactStats = [
  { value: "$50K+", label: "Average Annual Revenue Lost" },
  { value: "15+", label: "Hours Wasted Weekly" },
  { value: "40%", label: "Leads Never Followed Up" },
  { value: "3x", label: "Longer Sales Cycles" }
];

export function Problem() {
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
            You&apos;re Running a Modern Business with{" "}
            <span className="text-red-600">Stone Age Systems</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While your competitors leverage AI to scale efficiently, you&apos;re stuck with manual processes that limit growth and drain resources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-xl mb-4">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-red-50 border border-red-200 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">
            The Cost of Doing Nothing
          </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {stat.value}
              </div>
              <div className="text-red-800 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
