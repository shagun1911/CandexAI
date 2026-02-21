/**
 * AI for Work page content. Imported only by app/ai-for-work/page.tsx.
 */

export const aiForWorkPage = {
  hero: {
    badge: "AI Solutions",
    headline: "AI for Work",
    description:
      "Search across every silo. Automate repetitive workflows. Orchestrate specialist AI agents across departments — all with enterprise governance and zero data leaving your infrastructure.",
    useCases: { label: "See use cases", href: "/use-cases" },
    requestDemo: { label: "Request a demo", href: "/schedule" },
  },

  capabilities: [
    {
      title: "Unified Enterprise Search",
      description:
        "Give every employee a single search interface across documents, emails, CRMs, knowledge bases, and databases. AI-powered semantic ranking surfaces the right answer, not just the right document.",
      learnMoreHref: "/technology",
    },
    {
      title: "Intelligent Workflow Orchestration",
      description:
        "Chain specialist AI agents into automated pipelines — research, summarise, approve, execute. Human-in-the-loop checkpoints keep compliance and oversight built in at every step.",
      learnMoreHref: "/features/multi-agent-orchestration",
    },
    {
      title: "Knowledge Management & Synthesis",
      description:
        "Automatically extract, structure, and maintain organisational knowledge from unstructured sources. Teams always work with current, accurate information without manual curation.",
      learnMoreHref: "/use-cases",
    },
  ],

  challenges: [
    {
      title: "Data fragmented across hundreds of silos",
      description:
        "Critical knowledge sits in SharePoint, email threads, CRM records, and wikis — invisible to the people who need it. Employees waste 2+ hours daily searching across disconnected systems.",
      iconBg: "bg-amber-100",
    },
    {
      title: "Knowledge discovery bottlenecks",
      description:
        "Onboarding new employees takes months because institutional knowledge is undocumented. Expert knowledge leaves with every employee who exits.",
      iconBg: "bg-orange-100",
    },
    {
      title: "Repetitive, low-value task overload",
      description:
        "Knowledge workers spend 40–60% of their time on tasks that could be automated: summarising reports, drafting responses, routing requests, and reformatting data.",
      iconBg: "bg-sky-100",
    },
    {
      title: "Governance gaps in AI deployments",
      description:
        "Shadow AI usage, uncontrolled prompt access, and no audit trails expose organisations to compliance risk and inconsistent AI outputs that undermine trust.",
      iconBg: "bg-rose-100",
    },
  ],

  governanceSection: {
    headline: "Enterprise governance, built in from day one",
    subtitle:
      "Deploy AI across your workforce with full control over data access, model behaviour, and auditability — no compromises.",
    features: [
      {
        title: "Role-based access control (RBAC)",
        description:
          "Define exactly which employees can query which data, trigger which workflows, and access which AI agents. Permissions align with your existing directory.",
      },
      {
        title: "Full audit trail for every AI action",
        description:
          "Every search, summary, and agent decision is logged with user, timestamp, and outcome. Satisfy compliance requests in minutes, not days.",
      },
      {
        title: "On-premise & air-gapped deployment",
        description:
          "Your enterprise data never leaves your infrastructure. CandexAI runs entirely within your network — no cloud APIs, no third-party data processors.",
      },
    ],
    cta: { label: "Request a demo", href: "/schedule" },
  },

  stats: [
    {
      value: 45,
      suffix: "%",
      label: "Reduction in time employees spend searching for information across systems.",
    },
    {
      value: 60,
      suffix: "%",
      label: "Of repetitive knowledge-work tasks automated within the first deployment phase.",
    },
    {
      value: 87,
      suffix: "%",
      label: "Search and answer accuracy on domain-specific queries — outperforming generic LLMs.",
    },
  ],

  intro: {
    headline: "Introducing AI for Work",
    body: "AI for Work puts a domain-expert AI co-pilot alongside every knowledge worker in your organisation. It searches, synthesises, drafts, and orchestrates — so your people focus on decisions and relationships, not information retrieval and formatting. Every deployment runs entirely on your infrastructure, ensuring your proprietary data, client records, and competitive advantage never touch an external API.",
  },

  departments: [
    "Sales & Revenue",
    "Legal & Compliance",
    "Finance & Accounting",
    "Human Resources",
    "Engineering & Product",
    "Marketing",
    "Operations",
    "Executive Office",
  ],

  accelerators: [
    "Contract Intelligence",
    "HR Policy Copilot",
    "Sales Briefing Agent",
    "IT Helpdesk Automation",
    "Meeting Intelligence",
    "Regulatory Q&A Bot",
    "Onboarding Assistant",
    "Finance Report Summariser",
  ],

  faq: [
    {
      question: "Can AI for Work run entirely on-premises or in an air-gapped environment?",
      answer:
        "Yes. CandexAI is infrastructure-agnostic and deploys fully on-premises, in your private VPC, or in air-gapped environments with zero external API dependencies. Your data never leaves your network.",
    },
    {
      question: "How long does it take to go from contract to production?",
      answer:
        "Our dedicated engineering team targets production readiness in 8 weeks — including data ingestion, model fine-tuning, workflow configuration, and user acceptance testing.",
    },
    {
      question: "How is multi-tenancy handled across departments?",
      answer:
        "Strict tenant and role isolation at the data, compute, and model layers. Each department can have its own knowledge boundary, agent set, and access policy without any cross-team data leakage.",
    },
    {
      question: "Can we use existing HR and IT systems without ripping and replacing?",
      answer:
        "Yes. AI for Work integrates with your existing stack via REST APIs, pre-built connectors, and native integrations for SharePoint, ServiceNow, Salesforce, Workday, and 50+ enterprise platforms.",
    },
  ],
} as const;
