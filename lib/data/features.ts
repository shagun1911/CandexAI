export type FeatureData = {
  slug: string;
  label: string;
  icon: string;
  tag: string;
  headline: string;
  subheadline: string;
  body: string;
  img: string;
  stats: [string, string][];
  bullets: string[];
  useCases: { title: string; industry: string; result: string; body: string }[];
  techSpecs: { name: string; detail: string }[];
  quote: string;
  quoteName: string;
  nextFeature: string;
  nextFeatureHref: string;
};

const FEATURES: Record<string, FeatureData> = {
  "multi-agent-orchestration": {
    slug: "multi-agent-orchestration",
    label: "Multi-Agent Orchestration",
    icon: "shuffle",
    tag: "PLATFORM · ORCHESTRATION",
    headline: "Coordinate armies of AI agents that think, delegate, and execute together.",
    subheadline: "Chain specialist agents — research, summarise, validate, write — into automated pipelines that handle enterprise tasks end to end.",
    body: "Most enterprise processes aren't single-step. A loan review involves document extraction, data validation, regulatory lookup, credit scoring, and report generation. CandexAI's multi-agent orchestration layer lets you build, deploy, and monitor networks of specialist agents — each an expert in its domain — that collaborate autonomously. Human checkpoints can be inserted anywhere. Full audit trails are automatic. Everything runs inside your infrastructure.",
    img: "/images/agent-platform/orchestration.jpg",
    stats: [
      ["10x", "Throughput vs single-agent"],
      ["99.9%", "Uptime SLA"],
      ["<200ms", "Agent-to-agent latency"],
      ["Unlimited", "Concurrent workflows"],
    ],
    bullets: [
      "Visual drag-and-drop workflow builder",
      "Parallel and sequential agent execution",
      "Automatic failover, retry, and escalation",
      "Human-in-the-loop checkpoints at any step",
      "Full audit log for every agent decision",
      "Role-based access per agent or workflow",
      "Real-time monitoring dashboard",
      "Webhook triggers and event-driven flows",
    ],
    useCases: [
      { title: "Loan Processing Automation", industry: "BFSI", result: "78% faster approvals", body: "An orchestrator chains a document AI agent → credit scoring agent → compliance agent → report writer. What took 3 days takes 40 minutes." },
      { title: "Clinical Documentation", industry: "Healthcare", result: "70% less physician time", body: "Voice agent captures notes → transcription agent structures SOAP format → EMR agent files the record. Zero manual entry." },
      { title: "Contract Intelligence", industry: "Legal", result: "60% associate time saved", body: "Ingest agent reads contracts → extraction agent pulls key clauses → risk agent scores them → draft agent generates a markup. 3 minutes per contract." },
      { title: "Grievance Management", industry: "Government", result: "87% faster resolution", body: "Classification agent tags the grievance → routing agent sends it to the right department → response agent drafts the reply. Fully automated first-touch." },
    ],
    techSpecs: [
      { name: "Execution model", detail: "DAG-based parallel + sequential execution" },
      { name: "Agent communication", detail: "In-memory message passing (<200ms)" },
      { name: "State management", detail: "Distributed state store with checkpointing" },
      { name: "Failure handling", detail: "Configurable retry, fallback, and escalation" },
      { name: "Audit logging", detail: "Immutable ledger with full decision trace" },
      { name: "Deployment", detail: "On-prem, private cloud, or air-gapped" },
    ],
    quote: "We went from 3-day loan reviews to 40 minutes. The orchestration layer handled every edge case we threw at it.",
    quoteName: "VP Technology, Leading Private Bank",
    nextFeature: "AI Engineering Tools",
    nextFeatureHref: "/features/ai-engineering-tools",
  },

  "ai-engineering-tools": {
    slug: "ai-engineering-tools",
    label: "AI Engineering Tools",
    icon: "settings",
    tag: "PLATFORM · ENGINEERING",
    headline: "Build, fine-tune, and monitor domain-expert models with a complete MLOps suite.",
    subheadline: "A full AI engineering workspace — dataset management, fine-tuning, evaluation, A/B testing, and dashboards — without any third-party ML platforms.",
    body: "Generic LLMs were not trained on your data. CandexAI's AI Engineering Tools give your team the complete toolchain to take raw domain data and produce a production-grade expert model in under 2 weeks. Dataset curation, labelling, fine-tuning runs, evaluation harnesses, model versioning, and live cost/accuracy dashboards — all within your private infrastructure. No external APIs, no model weights leaving your servers.",
    img: "/images/agent-platform/engineering.jpg",
    stats: [
      ["87%", "Avg domain accuracy"],
      ["5–8x", "Cost reduction vs GPT-4"],
      ["10 days", "Fine-tune to production"],
      ["100%", "On-prem, no external APIs"],
    ],
    bullets: [
      "Domain-specific fine-tuning on your proprietary data",
      "Automated evaluation and regression testing",
      "Model versioning with instant one-click rollback",
      "Live token cost and accuracy dashboards",
      "RLHF-ready feedback collection integration",
      "ONNX, GGUF, and vLLM serving support",
      "Multi-model A/B testing framework",
      "Dataset labelling and quality scoring tools",
    ],
    useCases: [
      { title: "Domain Expert Model Training", industry: "Any", result: "87% MMLU accuracy", body: "Fine-tune a base model on your industry corpus. Outperform GPT-4 on domain tasks at 10% of the API cost." },
      { title: "Model Performance Monitoring", industry: "Enterprise", result: "0 undetected regressions", body: "Automated eval harnesses flag accuracy degradation before it reaches production users." },
      { title: "Cost Optimisation", industry: "All Sectors", result: "5–8x cost reduction", body: "Right-size your model to the task. A 7B domain expert often beats GPT-4 on precision tasks at a fraction of the cost." },
      { title: "Regulatory Compliance Testing", industry: "BFSI / Legal", result: "100% audit-ready", body: "Automated test suites validate model outputs against your regulatory constraints before every deployment." },
    ],
    techSpecs: [
      { name: "Base model support", detail: "LLaMA, Mistral, Phi, Gemma, custom" },
      { name: "Fine-tuning method", detail: "LoRA, QLoRA, full fine-tuning" },
      { name: "Evaluation framework", detail: "Custom harness + MMLU, HellaSwag, domain tests" },
      { name: "Serving runtime", detail: "vLLM, ONNX, Triton Inference Server" },
      { name: "Hardware", detail: "NVIDIA A100/H100, consumer GPUs supported" },
      { name: "Data formats", detail: "JSON, CSV, PDF, DOCX, structured DB" },
    ],
    quote: "Our models are fine-tuned on 10 years of our own contract corpus. The accuracy difference vs a generic LLM is night and day.",
    quoteName: "Head of AI, Big-4 Law Firm",
    nextFeature: "Search + Data AI",
    nextFeatureHref: "/features/search-data-ai",
  },

  "search-data-ai": {
    slug: "search-data-ai",
    label: "Search + Data AI",
    icon: "search",
    tag: "PLATFORM · SEARCH",
    headline: "Enterprise search that understands your data, not just your keywords.",
    subheadline: "Hybrid semantic + lexical search across every data source — documents, databases, emails, CRMs — with AI re-ranking and zero hallucinated citations.",
    body: "Traditional search fails the enterprise because it matches keywords, not intent. CandexAI's Search + Data AI combines vector embeddings with BM25 lexical matching in a hybrid retrieval pipeline, re-ranked by a domain-expert AI model that understands your specific vocabulary and priorities. Every answer is source-attributed, confidence-scored, and hallucination-checked. Your data stays in your infrastructure. No embeddings leave your network.",
    img: "/images/agent-platform/analytics.jpg",
    stats: [
      ["94%", "Retrieval precision"],
      ["3 sec", "Avg query response time"],
      ["50+", "Connectable data sources"],
      ["Zero", "Hallucinated citations"],
    ],
    bullets: [
      "Hybrid vector + BM25 lexical retrieval",
      "AI-powered re-ranking with confidence scores",
      "Automatic source attribution on every answer",
      "PII-aware redaction in search results",
      "Real-time index updates as data changes",
      "Natural language queries — no SQL required",
      "Connectors for SharePoint, GDrive, Confluence, S3, SQL",
      "Role-based content access filtering",
    ],
    useCases: [
      { title: "Internal Knowledge Base", industry: "All Sectors", result: "85% fewer repeated questions", body: "Employees ask questions in plain English. The AI finds the right policy document, SOP, or product spec — with a cited source." },
      { title: "Legal Precedent Search", industry: "Legal", result: "10x faster research", body: "Associates search case law and contracts in natural language. Relevant clauses surface with page references and confidence scores." },
      { title: "Clinical Reference Lookup", industry: "Healthcare", result: "3 sec avg response", body: "Doctors query clinical guidelines, drug interactions, and patient history in natural language from a single search interface." },
      { title: "Regulatory Compliance Q&A", industry: "BFSI", result: "100% source-cited answers", body: "Compliance officers ask plain-English questions about regulations. Every answer includes the exact clause and document reference." },
    ],
    techSpecs: [
      { name: "Retrieval method", detail: "Hybrid BM25 + dense vector (HNSW index)" },
      { name: "Re-ranking", detail: "Cross-encoder model, domain fine-tuned" },
      { name: "Embedding model", detail: "Private, on-prem — no external API calls" },
      { name: "Index update latency", detail: "Real-time streaming or scheduled batch" },
      { name: "Data connectors", detail: "50+ via REST, webhooks, and native adapters" },
      { name: "Access control", detail: "Document-level RBAC enforced in retrieval" },
    ],
    quote: "Our compliance team went from spending 2 hours on a regulation query to getting a cited answer in under 10 seconds.",
    quoteName: "Chief Compliance Officer, Insurance Platform",
    nextFeature: "No-Code + Pro-Code Tools",
    nextFeatureHref: "/features/no-code-pro-code",
  },

  "no-code-pro-code": {
    slug: "no-code-pro-code",
    label: "No-Code + Pro-Code Tools",
    icon: "wrench",
    tag: "PLATFORM · DEVELOPER TOOLS",
    headline: "Build AI applications without compromise — regardless of technical level.",
    subheadline: "Business analysts use our visual builder. Engineers use our full SDK. Both work on the same platform, same models, same secure infrastructure.",
    body: "AI adoption fails when there's a gap between the people who understand the business problem and the people who can write the code. CandexAI closes that gap. Business users build, test, and iterate AI workflows with a visual no-code interface — no engineering bottleneck. Engineers extend those workflows with our full REST API and Python/JavaScript SDK. Both groups see the same platform, deploy to the same secure infrastructure, and get the same enterprise-grade reliability.",
    img: "/images/agent-platform/hero.jpg",
    stats: [
      ["60%", "Faster time-to-deploy vs custom build"],
      ["200+", "SDK methods available"],
      ["<5 min", "Time to first workflow"],
      ["99.9%", "API uptime SLA"],
    ],
    bullets: [
      "Drag-and-drop visual workflow builder",
      "Full-featured REST API with OpenAPI spec",
      "Python SDK with 200+ methods",
      "JavaScript / TypeScript SDK",
      "SSO, RBAC, and audit logs built in",
      "One-click deploy to cloud or on-prem",
      "Versioned workflows with rollback",
      "Live sandbox for testing before production",
    ],
    useCases: [
      { title: "No-Code Chatbot Builder", industry: "Any", result: "<5 min to first bot", body: "HR managers build employee Q&A bots from a template. No engineer needed. Production-ready in an afternoon." },
      { title: "Custom Agent SDK Integration", industry: "Tech / SaaS", result: "60% faster dev cycles", body: "Engineering teams embed CandexAI agents directly into existing products using the Python SDK — full control, zero overhead." },
      { title: "Document Processing Pipeline", industry: "BFSI / Legal", result: "78% less manual work", body: "Ops teams configure document ingestion, extraction, and routing workflows visually. Engineers add custom validation via API." },
      { title: "Multi-Channel Deployment", industry: "Retail / CX", result: "1 workflow, 5 channels", body: "Build once in the visual editor. Deploy the same AI agent to WhatsApp, web chat, email, Slack, and MS Teams simultaneously." },
    ],
    techSpecs: [
      { name: "Visual builder", detail: "Browser-based, drag-and-drop, real-time preview" },
      { name: "REST API", detail: "OpenAPI 3.0 spec, JSON, authenticated via API key or OAuth2" },
      { name: "Python SDK", detail: "pip install candexai — works with LangChain, LlamaIndex" },
      { name: "JS/TS SDK", detail: "npm install @candexai/sdk — ESM + CommonJS" },
      { name: "Auth", detail: "SSO (SAML 2.0, OIDC), API keys, scoped tokens" },
      { name: "Rate limits", detail: "Configurable per workspace and per key" },
    ],
    quote: "Our product team built the first customer-facing AI feature in 3 hours. No engineers involved. It shipped to production the next morning.",
    quoteName: "Head of Product, D2C Retail Brand",
    nextFeature: "Multi-Agent Orchestration",
    nextFeatureHref: "/features/multi-agent-orchestration",
  },
};

export function getFeature(slug: string): FeatureData | null {
  return FEATURES[slug] ?? null;
}

export function getAllFeatureSlugs(): string[] {
  return Object.keys(FEATURES);
}

export default FEATURES;
