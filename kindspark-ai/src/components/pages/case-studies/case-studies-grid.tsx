"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import caseStudiesData from "@/data/case-studies.json";

export function CaseStudiesGrid() {
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
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how companies across different industries have achieved remarkable growth with our AI automation solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {caseStudiesData.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{caseStudy.industry}</Badge>
                    <div className="text-sm text-gray-500">{caseStudy.company}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {caseStudy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    {caseStudy.challenge}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(caseStudy.results).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <blockquote className="text-sm text-gray-600 italic mb-4">
                      &ldquo;{caseStudy.testimonial.text}&rdquo;
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">
                        {caseStudy.testimonial.author}
                      </div>
                      <div className="text-gray-500">
                        {caseStudy.testimonial.role}, {caseStudy.testimonial.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {caseStudy.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-blue-100 mb-6">
              Join these successful businesses and transform your operations with AI automation.
            </p>
            <Link
              href="/assessment"
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Your Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
