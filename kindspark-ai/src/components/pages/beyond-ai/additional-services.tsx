"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Settings, 
  Headphones, 
  BarChart3, 
  Shield, 
  Zap,
  Users,
  Target
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: GraduationCap,
    title: "Team Training & Education",
    description: "Comprehensive training programs to help your team master AI tools and best practices.",
    features: [
      "Hands-on workshops and training sessions",
      "Custom training materials and documentation",
      "Ongoing education and skill development",
      "Certification programs for your team"
    ]
  },
  {
    icon: Settings,
    title: "Custom Integrations",
    description: "Seamless integration with your existing tools and systems for maximum efficiency.",
    features: [
      "API development and custom connectors",
      "Data migration and system synchronization",
      "Workflow automation across platforms",
      "Legacy system modernization"
    ]
  },
  {
    icon: Headphones,
    title: "24/7 Support & Maintenance",
    description: "Round-the-clock support to ensure your AI systems run smoothly and efficiently.",
    features: [
      "24/7 technical support and monitoring",
      "Regular system updates and maintenance",
      "Performance optimization and tuning",
      "Emergency response and troubleshooting"
    ]
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Reporting",
    description: "Deep insights into your business performance with custom dashboards and reports.",
    features: [
      "Custom analytics dashboards",
      "Advanced reporting and insights",
      "Performance tracking and KPIs",
      "Predictive analytics and forecasting"
    ]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security measures to protect your data and ensure compliance.",
    features: [
      "Data encryption and security protocols",
      "Compliance with industry regulations",
      "Regular security audits and assessments",
      "Data backup and disaster recovery"
    ]
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "Fast-track implementation to get your AI systems up and running quickly.",
    features: [
      "Accelerated deployment timelines",
      "Dedicated implementation team",
      "Parallel development and testing",
      "Go-live support and handover"
    ]
  },
  {
    icon: Users,
    title: "Change Management",
    description: "Support your team through the transition with proven change management strategies.",
    features: [
      "Change management planning and execution",
      "User adoption strategies and support",
      "Communication and training programs",
      "Resistance management and support"
    ]
  },
  {
    icon: Target,
    title: "Strategic Consulting",
    description: "Expert guidance to align your AI strategy with your business objectives.",
    features: [
      "Strategic planning and roadmapping",
      "Technology assessment and recommendations",
      "Process optimization and redesign",
      "ROI analysis and business case development"
    ]
  }
];

export function AdditionalServices() {
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
            Complete Business Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our services extend far beyond AI automation to provide comprehensive support 
            for your entire digital transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-xl mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
              Ready for Complete Transformation?
            </h3>
            <p className="text-blue-100 mb-6">
              Let us help you build a comprehensive strategy that goes beyond AI automation 
              to transform your entire business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/assessment"
                className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Your Free Assessment
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
              >
                Contact Our Experts
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
