"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";

export function RealEstateHero() {
  const { realEstate } = site.verticals;
  
  return (
    <section className="relative pt-16 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
              {realEstate.heroTitle}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              {realEstate.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href={realEstate.primaryCTA.href}>
                  {realEstate.primaryCTA.label}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href={realEstate.secondaryCTA.href}>
                  {realEstate.secondaryCTA.label}
                </Link>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {realEstate.successStats.leadResponse}%
                </div>
                <div className="text-gray-600">Faster Lead Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {realEstate.successStats.qualifiedLeads}%
                </div>
                <div className="text-gray-600">More Qualified Leads</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/real-estate-hero.svg"
              alt="AI-Powered Real Estate Growth"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
