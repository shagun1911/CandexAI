/**
 * AI for Service page content. Imported only by app/ai-for-service/page.tsx.
 */

export const aiForServicePage = {
  hero: {
    badge: "AI Solutions",
    headline: "AI for Service",
    description:
      "Transform customer experience with agentic AI that understands context, resolves issues autonomously, and delivers personalised interactions across every channel — all without a single piece of data leaving your infrastructure.",
    useCases: { label: "See use cases", href: "/use-cases" },
    requestDemo: { label: "Request a demo", href: "/schedule" },
  },

  capabilities: [
    {
      title: "Agentic Contact Center",
      description:
        "Deploy an AI agent as the first line of response across voice, chat, email, and messaging. It resolves Tier-1 and Tier-2 issues autonomously, escalates with full context, and learns from every interaction.",
      learnMoreHref: "/technology",
    },
    {
      title: "AI Agent Assistance",
      description:
        "Give every human agent a real-time co-pilot: next-best-action suggestions, live knowledge retrieval, automated post-call summaries, and compliance prompts — all delivered in the flow of conversation.",
      learnMoreHref: "/use-cases",
    },
    {
      title: "Proactive Engagement & QA",
      description:
        "Trigger personalised outreach based on customer signals before issues escalate. Automated QA scores every interaction for compliance, empathy, and resolution quality — at zero marginal cost.",
      learnMoreHref: "/technology",
    },
  ],

  challenges: [
    {
      title: "Contact center volumes outpacing headcount",
      description:
        "Support volumes grow faster than hiring budgets. Customers wait longer, agent burnout rises, and CSAT scores decline — a cycle that generic AI chatbots have failed to break.",
      iconBg: "bg-rose-100",
    },
    {
      title: "Context lost at every handoff",
      description:
        "Customers repeat themselves at every channel transition. Agents lack real-time access to prior interactions, order history, and case notes — leading to slow, frustrating resolutions.",
      iconBg: "bg-amber-100",
    },
    {
      title: "Inconsistent service quality at scale",
      description:
        "Quality assurance reviews cover less than 5% of interactions. Policy breaches, compliance risks, and coaching gaps go undetected until they become incidents.",
      iconBg: "bg-orange-100",
    },
    {
      title: "AI hallucinations in customer-facing roles",
      description:
        "Generic LLMs confidently provide incorrect policy details, pricing, and warranty information — creating liability, escalations, and eroded customer trust that takes months to repair.",
      iconBg: "bg-sky-100",
    },
  ],

  complianceSection: {
    headline: "Service AI built for regulated industries",
    subtitle:
      "Every customer interaction is sensitive. CandexAI gives you the controls to deploy confidently in healthcare, banking, insurance, and telecom.",
    features: [
      {
        title: "On-premise & air-gapped deployment",
        description:
          "Customer voice recordings, chat transcripts, and PII never leave your environment. Full HIPAA, PCI-DSS, and GDPR compatibility out of the box.",
      },
      {
        title: "Automated compliance guardrails",
        description:
          "Policy-aware response filtering prevents agents from making prohibited disclosures or commitments. Violations are flagged in real time before they reach the customer.",
      },
      {
        title: "100% interaction scoring",
        description:
          "Every call, chat, and email is scored automatically for tone, compliance, resolution quality, and agent empathy — with coaching recommendations delivered immediately after.",
      },
    ],
    cta: { label: "Request a demo", href: "/schedule" },
  },

  stats: [
    {
      value: 62,
      suffix: "%",
      label: "Of inbound contacts resolved by AI without human escalation after a 12-week deployment.",
    },
    {
      value: 4,
      suffix: "x",
      label: "Faster average handle time when human agents use the AI co-pilot for real-time assistance.",
    },
    {
      value: 91,
      suffix: "%",
      label: "QA coverage across all interactions — versus a 4% industry average for manual review.",
    },
  ],

  intro: {
    headline: "Introducing AI for Service",
    body: "AI for Service puts a domain-expert AI agent at the front of every customer interaction — resolving issues, routing intelligently, and assisting human agents in real time. Unlike generic contact-center chatbots, CandexAI models are trained on your actual policies, products, and interaction history. They give accurate answers, not plausible-sounding ones. And because every component runs on your infrastructure, your customer data, voice recordings, and service records stay where they belong — with you.",
  },

  industries: [
    { id: "retail", label: "Retail", active: true },
    { id: "banking", label: "Banking" },
    { id: "healthcare", label: "Healthcare" },
    { id: "telecom", label: "Telecom" },
    { id: "insurance", label: "Insurance" },
    { id: "travel", label: "Travel & Hospitality" },
  ],

  accelerators: [
    "Order Management Bot",
    "Billing Dispute Agent",
    "Clinical Appointment Assistant",
    "Claims Processing Copilot",
    "Loyalty & Rewards Agent",
    "IT Service Desk Bot",
    "Returns & Refunds Agent",
    "Multilingual Support Layer",
  ],

  useCasesLinks: [
    { name: "Customer Service & Support", href: "/use-cases" },
    { name: "Technical Troubleshooting", href: "/use-cases" },
    { name: "Order & Billing Assistance", href: "/use-cases" },
    { name: "Healthcare Patient Services", href: "/use-cases" },
    { name: "Financial Services Contact Center", href: "/use-cases" },
  ],

  faq: [
    {
      question: "Can AI for Service integrate with our existing contact center platform?",
      answer:
        "Yes. CandexAI integrates with leading CCaaS platforms, CRMs, and ticketing systems via pre-built connectors and REST APIs. Deployment is phased alongside your existing stack — no rip-and-replace required.",
    },
    {
      question: "How does the AI handle escalations to human agents?",
      answer:
        "Escalation rules are fully configurable. When the AI cannot confidently resolve an issue or detects emotional distress, it transfers to a human with full conversation context, suggested resolution, and a pre-filled case summary.",
    },
    {
      question: "How does CandexAI handle regulated industries like banking and healthcare?",
      answer:
        "We support full on-premises and air-gapped deployment. No customer data, voice recordings, or PII ever leaves your infrastructure. Role-based access, audit trails, and compliance-aware guardrails are built in for HIPAA, PCI-DSS, and GDPR requirements.",
    },
    {
      question: "What languages does AI for Service support?",
      answer:
        "Our voice and text models support 12+ languages including Hindi, English, Arabic, Spanish, French, Mandarin, and major regional Indian languages — with dialect and accent awareness trained on real enterprise audio data.",
    },
  ],
} as const;
