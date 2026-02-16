/**
 * Technology page content only. Imported only by app/technology/page.tsx.
 */

export const technologyPage = {
  hero: {
    title: "Technology",
    subtitle: "Precision AI architecture designed for enterprise and sovereign workflows",
    cta: { label: "Get started", href: "/schedule" },
  },
  sidebarSections: [
    "Expert Model Architecture",
    "Expert Model Specifications",
    "Model Control Protocol Capabilities",
    "Enterprise Security Architecture",
    "Platform Analytics & Monitoring",
    "Multi-Modal Intelligence",
    "CandexAI Nexus Agents",
    "Core Technology Capabilities",
    "Technical Specifications",
    "Government & Sovereign Deployment",
  ],
  expertModelSpecs: {
    heading: "Expert Model Specifications",
    items: [
      { title: "Specialized Knowledge", description: "Domain-specific expertise vs. generalized knowledge" },
      { title: "Accuracy", description: "99%+ in specialized domains vs. variable performance across tasks" },
      { title: "Computational Resources", description: "Optimized and efficient vs. high resource requirements" },
      { title: "Agentic workflow automation", description: "Self-directed task execution with minimal human intervention" },
      { title: "Real-time decision orchestration", description: "Advanced reasoning architecture for complex enterprise workflows." },
    ],
  },
  domainSpecificIntelligence: {
    heading: "Domain-Specific Intelligence",
    intro: "Instead of relying on massive general-purpose models, our architecture deploys specialized expert models ranging from 0.1B to 8B parameters. Each model is precision-engineered for specific enterprise domains:",
    domains: [
      "Financial QA and compliance models: Trained on regulatory frameworks, financial taxonomies, and risk assessment protocols",
      "Legal reasoning and citation engines: Jurisdiction-aware systems with case law integration and regulatory compliance",
      "Healthcare diagnostic assistance: Clinical decision support with medical imaging analysis and patient record summarization",
      "Cybersecurity threat analysis: Real-time threat detection, vulnerability assessment, and incident response automation",
      "Document processing and summarization: Multi-format ingestion with structure-aware parsing and intelligent content extraction",
    ],
  },
  modelControlProtocol: {
    heading: "Model Control Protocol (MCP)",
    intro: "Our proprietary orchestration layer enables sophisticated reasoning, multi-step planning, and seamless tool integration across expert models. Built on industry-standard MCP foundations, our system provides:",
    capabilities: [
      { title: "Advanced reasoning and planning", description: "Multi-step thinking processes for complex problem-solving" },
      { title: "Tool integration framework", description: "Autonomous selection and execution of external tools and APIs" },
      { title: "Structured JSON outputs", description: "Validated, fully-structured responses for seamless system integration" },
      { title: "Agentic workflow automation", description: "Self-directed task execution with minimal human intervention" },
      { title: "Real-time decision orchestration", description: "Dynamic routing between expert models based on query complexity" },
    ],
  },
  infrastructureAgnostic: {
    heading: "Infrastructure Agnostic Design",
    intro: "Built for real enterprise infrastructure with deployment flexibility across on-premises, cloud, hybrid, and air-gapped environments:",
    items: [
      { title: "Zero external API dependencies", description: "Complete self-contained operation within your infrastructure" },
      { title: "On-premises deployment ready", description: "Native support for corporate data centers and private clouds" },
      { title: "Air-gapped environment support", description: "Sovereign deployment for national security and regulated industries" },
      { title: "Hybrid cloud integration", description: "Seamless operation across distributed infrastructure" },
      { title: "Edge computing compatibility", description: "Optimized for resource-constrained environments" },
    ],
  },
  enterpriseSecurity: {
    heading: "Enterprise Security Architecture",
    subtitle: "Zero-trust security model with complete data sovereignty and air-gapped deployment capabilities.",
    privacyFirst: {
      title: "Privacy-First Deployment",
      description: "Models deploy entirely within your infrastructure. No external API calls, no data leakage, complete client-side execution with air-gapped environment support. All inference, training, and model updates occur within your controlled environment.",
    },
  },
  dataFlowTiers: {
    dataSources: {
      title: "Data Sources",
      description: "Enterprise information from various channels",
      items: ["Corporate Database", "Documents", "Analytics", "Business Data", "User Interactions", "Market Data", "Security Logs", "Device Data"],
    },
    processing: {
      title: "Processing",
      description: "Model Control Protocol, Expert Models & Agents",
      mcp: { title: "MCP Servers", sub: "Model Control Protocol", points: ["Tool Integration", "Planning & Reasoning", "Structured Outputs"] },
      expert: { title: "Expert Model", sub: "Specialized Intelligence", points: ["Decision Making", "Domain Expertise", "Reliability"] },
      agents: { title: "Agents", sub: "Autonomous Actions", points: ["Workflow Automation", "Event Response", "Process Execution"] },
    },
    outcomes: { title: "Outcomes", description: "Business-critical decision making" },
  },
} as const;

export const expertModels = [
  { id: "healthcare", name: "CandexAI Healthcare Expert Model", description: "Specialized in medical knowledge, healthcare protocols, and clinical information." },
  { id: "finance", name: "CandexAI Finance Expert Model", description: "Expert in finance, economics, markets, and investment strategies." },
  { id: "code", name: "CandexAI Code Expert Model", description: "Proficient in software development, coding patterns, and technical problem-solving." },
] as const;
