/**
 * AI for Work page content only. Imported only by app/ai-for-work/page.tsx.
 * Rich content for SEO and dedicated solution page.
 */

export const aiForWorkPage = {
  hero: {
    badge: "AI Solutions",
    headline: "AI for Work",
    description: "Search across silos. Automate workflows. Orchestrate AI agents. Govern with confidence enterprise-wide.",
    watchVideo: { label: "Watch video", href: "#" },
    requestDemo: { label: "Request a demo", href: "/schedule" },
  },
  industries: [
    { id: "wealth", label: "Wealth Management", active: true },
    { id: "software", label: "Software" },
    { id: "pharma", label: "Pharmaceuticals" },
    { id: "financial", label: "Financial Services" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "hr", label: "HR" },
    { id: "sales", label: "Sales" },
  ],
  caseStudy: {
    eyebrow: "No.1 wealth management firm in the US",
    headline: "Adopted agentic RAG to strengthen self-service offerings",
    stats: [
      { value: 45, suffix: "%", label: "Employee net promoter score" },
      { value: 86, suffix: "%", label: "Search and answer accuracy" },
    ],
    moreStories: { label: "More customer stories", href: "/use-cases" },
    workWithUs: { label: "Work with us", href: "/schedule" },
  },
  features: [
    { title: "Enterprise Search", description: "Unified search across all your data silos with semantic understanding." },
    { title: "Intelligent Orchestrator", description: "Coordinate multiple AI agents and workflows from a single control plane." },
    { title: "Pre-Built AI Agents", description: "Ready-to-deploy agents for common enterprise tasks." },
    { title: "Admin Controls", description: "Governance, access control, and audit trails built in." },
    { title: "AI Agent Builder", description: "No-code and pro-code tools to create and customize agents." },
  ],
  departments: ["Sales", "Marketing", "Engineering", "Legal", "Finance"],
  accelerators: ["HR", "IT", "Recruiting"],
  faq: [
    {
      question: "Are model execution environments fully isolated per session or per customer (e.g., via sandbox, container, or VM)?",
      answer: "Yes. CandexAI supports full isolation per tenant using containers and optional VM-based sandboxing, so your data and models never cross boundaries.",
    },
    {
      question: "How is multi-tenancy handled to ensure no cross-customer interference?",
      answer: "We use strict tenant isolation at the data, compute, and model layers, with configurable policies so you can meet the highest compliance requirements.",
    },
    {
      question: "Can I run AI for Work entirely on-premises or in an air-gapped environment?",
      answer: "Yes. CandexAI can be deployed fully on-premises or in air-gapped environments with zero external API dependencies.",
    },
  ],
} as const;
