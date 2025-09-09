export const site = {
  name: "Kindspark AI",
  tagline: "AI-powered growth for services & SMBs",
  domain: "kindsparkai.com",
  contactEmail: "hello@kindsparkai.com",
  social: {
    linkedin: "https://www.linkedin.com/company/kindsparkai",
    twitter: "https://twitter.com/kindsparkai"
  },
  ctas: {
    primary: { label: "Get Assessment", href: "/assessment" },
    secondary: { label: "See How It Works", href: "/how-it-works" }
  },
  proofStats: {
    revenueIncreasePct: 40,
    timeSavingsPct: 60,
    roiMultiplier: "3–6x"
  },
  features: [
    {
      title: "Smart Lead Qualification & Follow-Up",
      description: "AI-powered lead scoring and automated follow-up sequences that never miss an opportunity.",
      icon: "zap"
    },
    {
      title: "End-to-End Sales Workflows",
      description: "Seamless automation from initial contact to closed deal with intelligent routing.",
      icon: "workflow"
    },
    {
      title: "Predictive Business Intelligence",
      description: "Data-driven insights and forecasting to optimize your sales performance.",
      icon: "trending-up"
    },
    {
      title: "Operational Efficiency Systems",
      description: "Streamline operations with intelligent automation that reduces manual work.",
      icon: "settings"
    }
  ],
  roadmap: [
    {
      phase: 1,
      title: "Fix Inefficiencies",
      description: "Automate lead response and eliminate manual data entry",
      features: ["Instant lead response", "Automated data capture", "Basic workflow setup"]
    },
    {
      phase: 2,
      title: "Optimize Your Stack",
      description: "Integrate CRM, billing, and marketing tools",
      features: ["Tool integration", "Advanced workflows", "Performance tracking"]
    },
    {
      phase: 3,
      title: "Scale with AI Insights",
      description: "Deploy predictive analytics and continuous optimization",
      features: ["Predictive analytics", "AI optimization", "Growth acceleration"]
    }
  ],
  faqs: [
    {
      question: "How quickly will I see results?",
      answer: "Most clients see initial improvements within 2-4 weeks, with full optimization typically achieved within 60-90 days."
    },
    {
      question: "What if I already use a CRM system?",
      answer: "We integrate with most popular CRM platforms including Salesforce, HubSpot, and Pipedrive. We'll work with your existing setup."
    },
    {
      question: "What's the investment required?",
      answer: "Our pricing is customized based on your business size and needs. We offer flexible packages starting with a free assessment to determine the best fit."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We specialize in helping SMBs and service providers scale efficiently with AI automation."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive onboarding, training, and ongoing support to ensure your success with our AI solutions."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use enterprise-grade security measures and are fully compliant with data protection regulations."
    }
  ]
} as const;
