/**
 * Navigation and dropdown content. Shared by Header only.
 * Separate file for better code-splitting and SEO (each page loads only what it needs).
 */

export const nav = {
  brand: "CandexAI",
  logoLabel: "C",
  links: [
    { label: "Use Cases", href: "/use-cases", hasDropdown: false },
    { label: "Process", href: "#process", hasDropdown: false },
    { label: "Technology", href: "/technology", hasDropdown: false },
    { label: "Resources", href: "#resources", hasDropdown: true },
  ] as const,
  cta: { label: "Get access", href: "/schedule" },
} as const;

export const navDropdowns = {
  aiSolutions: {
    title: "AI Solutions",
    subtitle: "Work, service, and process—unified enterprise AI.",
    learnMoreHref: "/use-cases",
    solutions: [
      { name: "AI for Work", href: "/ai-for-work" },
      { name: "AI for Service", href: "/ai-for-service" },
      { name: "AI for Process", href: "/ai-for-process" },
    ],
    features: [
      { name: "Enterprise Search", href: "/technology" },
      { name: "Intelligent Orchestrator", href: "/technology" },
      { name: "Pre-Built AI Agents", href: "/use-cases" },
      { name: "Admin Controls", href: "/technology" },
      { name: "AI Agent Builder", href: "/technology" },
    ],
    departments: [
      { name: "Sales", href: "/use-cases" },
      { name: "Marketing", href: "/use-cases" },
      { name: "Engineering", href: "/technology" },
      { name: "Legal", href: "/use-cases" },
      { name: "Finance", href: "/use-cases" },
    ],
    useCases: [
      { name: "Customer Service", href: "/ai-for-service" },
      { name: "Zero-Touch Operations", href: "/technology" },
      { name: "Compliance", href: "/technology" },
    ],
    topResources: [
      { name: "Scaling AI Insights", href: "/scaling-ai-insights" },
      { name: "AI Use Cases", href: "/use-cases" },
      { name: "Enterprise Strategy", href: "/enterprise-strategy" },
    ],
    quickLinks: [
      { name: "About Us", href: "/about" },
      { name: "Customer Stories", href: "/customer-stories" },
      { name: "Partners", href: "/partners" },
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/documentation" },
      { name: "Contact Us", href: "/schedule" },
    ],
  },
  agentPlatform: {
    title: "Agent Platform",
    subtitle: "Your strategic enabler for enterprise AI transformation.",
    learnMoreHref: "/agent-platform",
    features: [
      { name: "Multi-Agent Orchestration", href: "/features/multi-agent-orchestration" },
      { name: "AI Engineering Tools", href: "/features/ai-engineering-tools" },
      { name: "Search + Data AI", href: "/features/search-data-ai" },
      { name: "No-Code + Pro-Code Tools", href: "/features/no-code-pro-code" },
      { name: "Integrations", href: "/integrations" },
    ],
    getStarted: [
      { name: "AI for Work", href: "/ai-for-work" },
      { name: "AI for Service", href: "/ai-for-service" },
      { name: "AI for Process", href: "/ai-for-process" },
    ],
    learnDiscover: [
      { name: "Customer Stories", href: "/customer-stories" },
      { name: "Partners", href: "/partners" },
      { name: "Resource Hub", href: "/resource-hub" },
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/documentation" },
      { name: "Get support", href: "/schedule" },
    ],
    featuredCard: {
      eyebrow: "Try it",
      title: "Voice AI",
      description: "Experience conversational AI with our voice agent. See how it responds in real time.",
      label: "Open Voice AI",
      href: "/voice-ai",
    },
    recentInsights: [
      { name: "Parallel Agent Processing", href: "/blog/parallel-agent-processing" },
      { name: "AI Security Best Practices", href: "/blog/ai-security-best-practices" },
      { name: "Scaling to Production", href: "/blog/scaling-to-production" },
    ],
  },
  more: {
    resources: [
      { name: "Scaling AI Insights", href: "/scaling-ai-insights" },
      { name: "AI Recipes", href: "/cookbook" },
      { name: "Resource Hub", href: "/blog" },
      { name: "Blog", href: "/blog" },
      { name: "Whitepapers", href: "/blog" },
      { name: "Webinars", href: "/blog" },
      { name: "AI Glossary", href: "/technology" },
      { name: "Documentation", href: "/documentation" },
    ],
    support: [
      { name: "Get support", href: "/schedule" },
      { name: "Submit RFP", href: "/schedule" },
      { name: "Academy", href: "#" },
      { name: "Community", href: "#" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Leadership", href: "/about#leadership" },
      { name: "Customer Stories", href: "/customer-stories" },
      { name: "Partners", href: "/partners" },
      { name: "Enterprise Strategy", href: "/enterprise-strategy" },
      { name: "Contact Us", href: "/schedule" },
    ],
    talkToExpert: { title: "Talk to an expert", description: "Not sure which product is right for you? Schedule a call with our experts.", href: "/schedule" },
    requestDemo: { title: "Request a demo", description: "See what's possible with a personalized walkthrough.", href: "/schedule" },
  },
} as const;
