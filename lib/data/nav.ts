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
      { name: "Scaling AI insights", href: "/technology" },
      { name: "AI use cases", href: "/use-cases" },
      { name: "Enterprise strategy", href: "/technology" },
    ],
    quickLinks: [
      { name: "About us", href: "#" },
      { name: "Customer Stories", href: "/use-cases" },
      { name: "Partners", href: "#" },
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/documentation" },
      { name: "Contact us", href: "/schedule" },
    ],
  },
  agentPlatform: {
    title: "Agent Platform",
    subtitle: "Your strategic enabler for enterprise AI transformation.",
    learnMoreHref: "/technology",
    features: [
      { name: "Multi-Agent Orchestration", href: "/technology" },
      { name: "AI Engineering Tools", href: "/technology" },
      { name: "Search + Data AI", href: "/technology" },
      { name: "No-Code + Pro-Code Tools", href: "/technology" },
      { name: "Integrations", href: "/" },
    ],
    getStarted: [
      { name: "AI for Work", href: "/ai-for-work" },
      { name: "AI for Service", href: "/ai-for-service" },
      { name: "AI for Process", href: "/ai-for-process" },
      { name: "Agent Marketplace", href: "/use-cases" },
    ],
    learnDiscover: [
      { name: "Customer Stories", href: "/use-cases" },
      { name: "Partners", href: "#" },
      { name: "Resource Hub", href: "/blog" },
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
      { name: "Parallel Agent Processing", href: "/technology" },
      { name: "AI Security Best Practices", href: "/technology" },
      { name: "Scaling to Production", href: "/technology" },
    ],
  },
  more: {
    resources: [
      { name: "AI Recipes", href: "/cookbook" },
      { name: "Resource Hub", href: "/blog" },
      { name: "Blog", href: "/blog" },
      { name: "Whitepapers", href: "/blog" },
      { name: "Webinars", href: "/blog" },
      { name: "AI Glossary", href: "/technology" },
      { name: "Videos", href: "/blog" },
      { name: "Documentation", href: "/documentation" },
    ],
    support: [
      { name: "Get support", href: "/schedule" },
      { name: "Submit RFP", href: "/schedule" },
      { name: "Academy", href: "#" },
      { name: "Community", href: "#" },
    ],
    company: [
      { name: "About us", href: "#" },
      { name: "Leadership", href: "#" },
      { name: "Customer Stories", href: "/use-cases" },
      { name: "Partners", href: "#" },
      { name: "Newsroom", href: "#" },
      { name: "Events", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact us", href: "/schedule" },
    ],
    talkToExpert: { title: "Talk to an expert", description: "Not sure which product is right for you? Schedule a call with our experts.", href: "/schedule" },
    requestDemo: { title: "Request a demo", description: "See what's possible with a personalized walkthrough.", href: "/schedule" },
  },
} as const;
