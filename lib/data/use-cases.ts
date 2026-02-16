/**
 * Use Cases page content only. Imported only by app/use-cases/page.tsx.
 */

export const useCasesPage = {
  hero: {
    title: "Use Cases",
    subtitle: "Our small expert models can solve most challenges. Here are a few examples.",
  },
  filters: [
    { id: "solution", label: "Solution", placeholder: "Select one..." },
    { id: "capability", label: "Capability", placeholder: "Select one..." },
    { id: "industry", label: "Industry", placeholder: "Select one..." },
  ],
  featured: {
    title: "Major Logistics Platform Deploys Sovereign AI Infrastructure",
    metrics: ["Supporting 200M+ annual transactions", "9 deployed languages", "100% local-hosted infrastructure"],
    cta: "Read use-case",
    href: "#",
  },
  cards: [
    { id: "logistics", title: "Major Logistics Platform Deploys Sovereign AI Infrastructure", metrics: ["Supporting 200M+ annual transactions", "9 deployed languages", "100% local-hosted infrastructure"], href: "#" },
    { id: "tourism", title: "Intelligent Booking for Global Tourism Operations", metrics: ["20% booking rate increase", "25% faster booking completion", "100+ languages supported"], href: "#" },
    { id: "mobility", title: "Resolving Urban Mobility Challenges with Tailored Models", metrics: ["30% faster inquiry resolution", "90%+ prediction accuracy", "10-15% reduction in peak-hour travel times"], href: "#" },
    { id: "real-estate", title: "Unified AI Platform for Enterprise Real Estate Brokerage", metrics: ["30% reduction in administrative time", "25% increase in broker productivity", "20% faster deal cycles"], href: "#" },
    { id: "cybersecurity", title: "AI Cybersecurity Infrastructure for Enterprise", metrics: ["92% reduction in successful breaches", "87% decrease in false positives", "85% improvement in early threat detection"], href: "#" },
    { id: "banking", title: "Risk Management Intelligence for Banking", metrics: ["60x cost reduction with", "100x accuracy improvement over general models"], href: "#" },
  ],
} as const;

export const missionCriticalIndustries = [
  { id: "government", title: "Government & Defense", description: "Sovereign AI deployments for national security and critical operations" },
  { id: "financial", title: "Financial Services", description: "Risk management and regulatory compliance for banking institutions" },
  { id: "healthcare", title: "Healthcare Systems", description: "Clinical decision support with complete privacy protection" },
  { id: "infrastructure", title: "Critical Infrastructure", description: "Mission-critical applications across energy, telecommunications, and transportation" },
  { id: "tech", title: "Tech, Telecom, & Software", description: "Autonomous engineering at scale with complete IP protection" },
  { id: "commerce", title: "Commerce & Consumer Engagement", description: "Personalized consumer experiences with comprehensive and transparent data handling" },
] as const;
