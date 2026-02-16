/**
 * AI for Process page content only. Imported only by app/ai-for-process/page.tsx.
 * Inspired by kore.ai/ai-for-process: knowledge-intensive processes, security, automation.
 */

export const aiForProcessPage = {
  hero: {
    badge: "AI Solutions",
    headline: "AI for Process",
    description: "Streamline knowledge-intensive business processes with autonomous AI agents. Gain full visibility and control over AI agent performance and accelerate process automation.",
    requestDemo: { label: "Request a demo", href: "/schedule" },
    useCases: { label: "Use cases", href: "/use-cases" },
  },
  capabilities: [
    {
      title: "Process automation",
      description: "Automate complex processes with expert AI reasoning, event triggers, and built-in security and compliance.",
      learnMoreHref: "/technology",
    },
    {
      title: "AI analytics + monitoring",
      description: "Gain complete visibility and control of AI agent performance.",
      learnMoreHref: "/technology",
    },
    {
      title: "Pre-built process templates",
      description: "Explore the AI for Process library of over 75 prompt and process templates.",
      learnMoreHref: "/use-cases",
    },
  ],
  challenges: [
    {
      title: "Knowledge-intensive task complexity",
      description: "AI struggles to automate nuanced, expert-driven processes due to gaps in domain-specific knowledge and complex orchestration needs.",
      iconBg: "bg-amber-100",
    },
    {
      title: "Process integration fragmentation",
      description: "Siloed enterprise systems and inconsistent workflows create bottlenecks and prevent seamless, end-to-end process automation.",
      iconBg: "bg-orange-100",
    },
    {
      title: "Augmented human + AI collaboration complexity",
      description: "AI effectiveness is limited by data format inconsistencies, domain adaptation challenges, and lack of feedback integration.",
      iconBg: "bg-emerald-100",
    },
    {
      title: "Implementation scalability",
      description: "Scaling automation is slowed down by custom-built, resource-heavy implementations that lack cross-functional reusability.",
      iconBg: "bg-rose-100",
    },
  ],
  sectionTabs: [
    { id: "security", label: "Security + Compliance", active: true },
    { id: "nocode", label: "No-Code Tools" },
    { id: "analytics", label: "AI Analytics + Monitoring" },
    { id: "consistency", label: "Process Automation Consistency" },
    { id: "cloud", label: "AI + Cloud Agnostic" },
  ],
  securitySection: {
    headline: "Enhanced security and compliance",
    subtitle: "Protect confidential data and meet regulatory standards with enterprise-grade governance.",
    features: [
      {
        title: "Role-based access control (RBAC)",
        description: "Manage permissions for AI agent settings, workflows, and data access with granular controls.",
      },
      {
        title: "Human-in-the-loop (HITL) framework",
        description: "Require human input or approval at critical steps for compliance and quality assurance.",
      },
      {
        title: "Monitoring & audit logs",
        description: "Track every AI agent action with full audit trails for transparency and regulatory reporting.",
      },
    ],
    cta: { label: "Request a demo", href: "/schedule" },
  },
  stats: [
    { value: 35, suffix: "%", label: "Reduction in operational costs by automating high-complexity workflows." },
    { value: 40, suffix: "%", label: "Decrease in manual review efforts, freeing knowledge workers for higher-value, strategic projects." },
    { value: 50, suffix: "%", label: "Reduction in process cycle times through intelligent workflow orchestration." },
  ],
  intro: {
    headline: "Introducing AI for Process",
    body: "AI for Process empowers process automation teams to streamline complex workflows, ensuring compliance, consistent outcomes, contextual decision-making, and actionable insights across any AI model, application, or cloud.",
  },
  faq: [
    {
      question: "Can we run AI for Process on-premises or in a private cloud?",
      answer: "Yes. CandexAI is infrastructure-agnostic and can be deployed on-premises, in your VPC, or in air-gapped environments with zero external API dependencies.",
    },
    {
      question: "How does human-in-the-loop work with autonomous agents?",
      answer: "You define approval checkpoints and escalation rules. The AI executes up to that point, then pauses for human review or sign-off before continuing, with full context passed along.",
    },
    {
      question: "Do you provide pre-built templates for specific industries?",
      answer: "Yes. We offer 75+ prompt and process templates for common workflows (IT operations, compliance, document processing, etc.) that you can deploy as-is or customize.",
    },
  ],
} as const;
