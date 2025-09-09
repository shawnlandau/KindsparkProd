"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const successStories = [
  {
    metric: "200%",
    description: "Faster Lead Response",
    industry: "Real Estate"
  },
  {
    metric: "80%",
    description: "Less Manual Work",
    industry: "Contracting"
  },
  {
    metric: "150%",
    description: "Increase in Qualified Leads",
    industry: "Professional Services"
  },
  {
    metric: "90%",
    description: "Reduction in Follow-up Time",
    industry: "Financial Services"
  }
];

export function SuccessStories() {
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses like yours are transforming their operations with Kindspark AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {successStories.map((story, index) => (
            <motion.div
              key={story.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {story.metric}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {story.description}
              </div>
              <div className="text-sm text-gray-600">
                {story.industry}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
