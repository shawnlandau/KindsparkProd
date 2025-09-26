export const site = {
  name: "Kindspark AI",
  tagline: "AI-powered growth for services & SMBs",
  domain: "kindsparkai.com",
  contactEmail: "hello@kindsparkai.com",
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
  ],
  verticals: {
    realEstate: {
      heroTitle: "AI-Powered Real Estate Growth",
      heroSubtitle: "Connect buyers with agents faster and close more deals with intelligent automation that never sleeps.",
      primaryCTA: { label: "Get Real-Estate Assessment", href: "/assessment?industry=real-estate" },
      secondaryCTA: { label: "View Case Study", href: "/case-studies#real-estate" },
      successStats: {
        leadResponse: 95,
        qualifiedLeads: 200,
        revenueIncrease: 150,
        hoursSaved: 15,
      },
      problems: [
        {
          icon: "clock",
          title: "Manual Lead Follow-Ups Cause Lost Deals",
          description: "Slow response times and inconsistent follow-up processes result in 60% of leads falling through the cracks."
        },
        {
          icon: "users",
          title: "Buyers Get Matched to Wrong Agents",
          description: "Scattered data across multiple systems prevents optimal buyer-agent matching, reducing conversion rates."
        },
        {
          icon: "dollar-sign",
          title: "No Unified View of Marketing ROI",
          description: "Inability to track which marketing efforts drive qualified leads leads to inefficient spend and missed opportunities."
        },
        {
          icon: "alert-triangle",
          title: "Disconnected Workflows Hurt Performance",
          description: "Manual processes and system silos cause delays in closing timelines and reduce commission potential."
        }
      ],
      solutions: [
        {
          icon: "home",
          title: "Smart Buyer-Agent Matching",
          description: "AI matches leads to the best-fit agent based on preferences, price range, location, and agent performance.",
          result: "95% faster lead response time"
        },
        {
          icon: "calendar-check",
          title: "Automated Nurturing & Scheduling",
          description: "Send personalized follow-ups, schedule viewings automatically, and trigger reminders when buyers engage.",
          result: "200% more qualified leads"
        },
        {
          icon: "trending-up",
          title: "Predictive Market Insights",
          description: "Forecast trends (pricing, demand) and identify high-intent buyers to focus your efforts on hot prospects.",
          result: "150% revenue increase"
        },
        {
          icon: "database",
          title: "Unified CRM & MLS Integration",
          description: "Sync property listings, inquiries, and transactions into one system; no more switching between spreadsheets.",
          result: "15 hours/week saved"
        }
      ],
      roadmap: [
        {
          phase: 1,
          title: "Fix Inefficiencies",
          description: "Capture and route every buyer inquiry instantly; automate data entry",
          features: ["Instant lead response", "Automated data capture", "Basic workflow setup"]
        },
        {
          phase: 2,
          title: "Optimize Your Stack",
          description: "Integrate MLS, CRM, scheduling, and marketing tools; set up smart follow-up sequences",
          features: ["MLS integration", "Advanced workflows", "Performance tracking"]
        },
        {
          phase: 3,
          title: "Scale with AI Insights",
          description: "Use predictive analytics to identify hot leads and forecast market trends; refine agent performance",
          features: ["Predictive analytics", "Market forecasting", "Agent optimization"]
        }
      ],
      faqs: [
        {
          question: "How does AI help with buyer-agent matching?",
          answer: "Our AI analyzes buyer preferences, price range, location, and agent performance to automatically match leads with the most qualified agent for each specific property and buyer profile."
        },
        {
          question: "Can you integrate with our existing MLS system?",
          answer: "Yes, we integrate with most major MLS platforms and CRM systems. Our team will work with your existing tech stack to ensure seamless data flow."
        },
        {
          question: "What about compliance with real estate regulations?",
          answer: "Our AI solutions are designed to comply with real estate regulations and fair housing laws. We provide audit trails and ensure all communications meet industry standards."
        },
        {
          question: "How quickly will we see results in our brokerage?",
          answer: "Most real estate teams see improved lead response times within the first week, with full optimization typically achieved within 60-90 days."
        },
        {
          question: "Can this work for both individual agents and large brokerages?",
          answer: "Absolutely! Our solutions scale from individual agents to large brokerages with hundreds of agents. We customize the approach based on your team size and needs."
        }
      ]
    }
  }
} as const;
