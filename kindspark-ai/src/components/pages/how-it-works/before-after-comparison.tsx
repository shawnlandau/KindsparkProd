"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const comparisonData = [
  {
    category: "Lead Response Time",
    before: "2-4 hours",
    after: "Under 5 minutes",
    improvement: "95% faster"
  },
  {
    category: "Follow-up Consistency",
    before: "30% of leads",
    after: "100% of leads",
    improvement: "3x more consistent"
  },
  {
    category: "Data Entry Time",
    before: "2-3 hours daily",
    after: "15 minutes daily",
    improvement: "90% time savings"
  },
  {
    category: "Lead Qualification",
    before: "Manual, inconsistent",
    after: "AI-powered, accurate",
    improvement: "80% more accurate"
  },
  {
    category: "Sales Pipeline Visibility",
    before: "Limited, manual tracking",
    after: "Real-time, automated",
    improvement: "Complete visibility"
  },
  {
    category: "Revenue per Lead",
    before: "$2,500 average",
    after: "$4,200 average",
    improvement: "68% increase"
  }
];

export function BeforeAfterComparison() {
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
            Before vs After
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic transformation that happens when you replace manual processes with intelligent automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Category
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-red-600">
                    Before (Manual)
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">
                    After (AI-Powered)
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary">
                    Improvement
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={row.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {row.category}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      <div className="flex items-center justify-center">
                        <X className="h-4 w-4 text-red-500 mr-2" />
                        {row.before}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                      <div className="flex items-center justify-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {row.after}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-primary">
                      {row.improvement}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to See These Results for Yourself?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of businesses that have already transformed their operations with our proven approach.
            </p>
            <div className="text-sm text-gray-500">
              Average implementation time: 4-6 weeks • ROI visible within 60-90 days
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
