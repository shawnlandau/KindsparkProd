"use client";

import { motion } from "framer-motion";
import { Clock, Users, DollarSign, AlertTriangle } from "lucide-react";
import { site } from "@/lib/site-config";

const iconMap = {
  clock: Clock,
  users: Users,
  "dollar-sign": DollarSign,
  "alert-triangle": AlertTriangle,
};

const impactStats = [
  { value: "60%", label: "Leads Never Followed Up" },
  { value: "3+", label: "Hours to First Response" },
  { value: "$75K+", label: "Lost Commissions Annually" },
  { value: "40%", label: "Longer Closing Times" }
];

export function RealEstateProblem() {
  const { realEstate } = site.verticals;
  
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
            The Real Estate Industry is{" "}
            <span className="text-red-600">Losing Deals</span> to Manual Processes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While your competitors leverage AI to respond instantly and match buyers with the perfect agent, 
            you&apos;re stuck with slow manual processes that cost you deals and commissions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {realEstate.problems.map((problem, index) => {
            const IconComponent = iconMap[problem.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-xl mb-4">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {problem.description}
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
          className="bg-red-50 border border-red-200 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">
            The Cost of Inefficient Real Estate Operations
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
