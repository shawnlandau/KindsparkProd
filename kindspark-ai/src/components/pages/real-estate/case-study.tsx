"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function RealEstateCaseStudy() {
  
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
            Real Estate Success Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Premier Properties Group transformed their lead management and 
            increased qualified leads by 200% with Kindspark AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Challenge
              </h3>
              <p className="text-gray-600 mb-6">
                Premier Properties Group was losing 60% of their leads due to manual follow-up processes. 
                Agents were spending hours on administrative tasks instead of closing deals, and the 
                brokerage was missing out on significant revenue opportunities.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Solution
              </h3>
              <p className="text-gray-600 mb-6">
                We implemented AI-powered lead qualification and automated follow-up sequences that 
                respond within minutes of lead submission. The system now matches buyers with the 
                perfect agent based on preferences and performance data.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Results
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">95%</div>
                  <div className="text-sm text-gray-600">Faster Response</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">200%</div>
                  <div className="text-sm text-gray-600">More Qualified Leads</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">150%</div>
                  <div className="text-sm text-gray-600">Revenue Increase</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">15h</div>
                  <div className="text-sm text-gray-600">Saved Weekly</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SJ</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Sarah Johnson
              </h4>
              <p className="text-gray-600 mb-4">
                Managing Broker, Premier Properties Group
              </p>
            </div>
            
            <blockquote className="text-lg text-gray-700 italic mb-6">
              &ldquo;Kindspark AI transformed our lead management. We went from missing 60% of leads to 
              converting 80% of qualified prospects. Our agents can now focus on closing deals 
              instead of chasing leads.&rdquo;
            </blockquote>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="flex-1">
                <Link href="/case-studies#real-estate">
                  View Full Case Study
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link href="/assessment?industry=real-estate">
                  Get Your Assessment
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
