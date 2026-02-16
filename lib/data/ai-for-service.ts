/**
 * AI for Service page content only. Imported only by app/ai-for-service/page.tsx.
 * Rich content for SEO: agentic contact center, customer experience, industry accelerators.
 */

export const aiForServicePage = {
  hero: {
    badge: "AI Solutions",
    headline: "AI for Service",
    description: "Leverage agentic capabilities to empower customers and create personalized experiences. Transform support with AI agents that understand context and resolve issues faster.",
    watchVideo: { label: "Watch video", href: "#" },
    requestDemo: { label: "Request a demo", href: "/schedule" },
  },
  industries: [
    { id: "retail", label: "Retail", active: true },
    { id: "banking", label: "Banking" },
    { id: "healthcare", label: "Healthcare" },
    { id: "telecom", label: "Telecom" },
    { id: "insurance", label: "Insurance" },
    { id: "travel", label: "Travel & Hospitality" },
  ],
  caseStudy: {
    eyebrow: "Leading global retail brand",
    headline: "Deployed agentic contact center to scale self-service and reduce handle time",
    stats: [
      { value: 62, suffix: "%", label: "Calls deflected to self-service" },
      { value: 4.2, suffix: "x", label: "Faster resolution with AI-assisted agents" },
    ],
    moreStories: { label: "More customer stories", href: "/use-cases" },
    workWithUs: { label: "Work with us", href: "/schedule" },
  },
  features: [
    { title: "AI-Powered Contact Center", description: "Agentic contact center that routes, understands, and resolves customer issues with full context and empathy." },
    { title: "AI Agent Assistance", description: "Real-time suggestions and next-best actions for human agents, powered by conversation and knowledge base." },
    { title: "Quality Assurance", description: "Automated QA, compliance checks, and coaching insights across every customer interaction." },
    { title: "Proactive Outreach", description: "Trigger-based campaigns and personalized outreach to reduce churn and increase satisfaction." },
    { title: "Voice & Messaging", description: "Omnichannel support: voice, chat, messaging, and social with a single AI brain." },
  ],
  accelerators: ["Retail", "Banking", "Healthcare"],
  useCases: [
    { name: "Customer Service", href: "/use-cases" },
    { name: "Technical Support", href: "/use-cases" },
    { name: "Order & Billing", href: "/use-cases" },
  ],
  faq: [
    {
      question: "Can AI for Service integrate with our existing contact center or CRM?",
      answer: "Yes. CandexAI integrates with leading CRMs, ticketing systems, and contact center platforms via APIs and pre-built connectors. Deployment can be phased alongside your current stack.",
    },
    {
      question: "How does the AI handle sensitive or regulated industries like banking and healthcare?",
      answer: "We support full on-premises and air-gapped deployment with no data leaving your environment. Role-based access, audit trails, and compliance-friendly configurations are built in for regulated industries.",
    },
    {
      question: "What happens when the AI cannot resolve an issue?",
      answer: "Escalation rules and handoff to human agents are configurable. The AI provides full context and suggested next steps so agents can resolve quickly without repetition.",
    },
  ],
} as const;
