/**
 * Homepage content only. Imported only by app/page.tsx for better code-splitting and SEO.
 */

export const hero = {
  mainHeading: "AI Models and Applications for the Most Ambitious Organizations",
  subHeading: "Designed for organizations where privacy, control, and performance are essential.",
  cta: { label: "Get started", href: "/schedule" },
} as const;

export const valueProposition = {
  heading: "More Precision, More Control",
  description: "Purpose-built AI designed for your workflows and deployed entirely within your infrastructure.",
  cta: { label: "Our Use Cases", href: "/use-cases" },
} as const;

export const keyBenefits = [
  { id: "token-costs", title: "Optimized Token Costs", description: "5–8X cost reduction with expert models pre-trained to your requirements." },
  { id: "accuracy", title: "Industry Leading Accuracy", description: "85–90% MMLU scores outperforming models like GPT-4o, Deepseek V3, and Gemini 2.0." },
  { id: "delivery", title: "Rapid End-to-End Delivery", description: "Dedicated engineering support to rapidly deploy solutions into your workflows." },
  { id: "upgradability", title: "Embedded Upgradability", description: "Future-proofed performance with continuous updates and ongoing support." },
] as const;

export const useCases = [
  { id: "work", title: "AI for Work", description: "Search across silos, automate workflows, orchestrate AI agents and govern with confidence enterprise-wide.", href: "/ai-for-work" },
  { id: "service", title: "AI for Service", description: "Leverage generative AI to empower customers and create differentiated service experiences.", href: "/ai-for-service" },
  { id: "process", title: "AI for Process", description: "Streamline knowledge-intensive business processes with autonomous AI agents and agentic workflows.", href: "/ai-for-process" },
] as const;

export const enterpriseTrust = {
  eyebrow: "The Gold Standard in",
  heading: "Enterprise Privacy & Data Security",
  items: [
    { title: "Own Everything", description: "The model, logic, and stack are 100% yours forever." },
    { title: "Built for Real Infrastructure", description: "Deploy on-prem, cloud, hybrid, or edge with no external calls." },
    { title: "Modular Expert Models", description: "Faster and more accurate than monolithic LLMs." },
  ],
} as const;

export const comprehensiveCapabilities = {
  sectionHeading: "Comprehensive Capabilities",
  sectionSubheading: "8 core specialities to solve critical problems at scale.",
  cta: { label: "Our Use Cases", href: "/use-cases" },
  items: [
    { title: "Data Structuring", description: "Turn messy data into usable insights." },
    { title: "Multi-Modal Intelligence", description: "Understand text, images, and documents together." },
    { title: "Reasoning & Analysis", description: "Perform multi-step thinking to improve decisions." },
    { title: "Voice AI", description: "Converse, convert, and understand through speech." },
    { title: "Vision AI", description: "Analyze images, automate tasks, and reduce errors." },
    { title: "Agentic Workflows", description: "Automate decisions and coordinate complex tasks." },
    { title: "Tool Calling", description: "Select and execute the right tools—autonomously." },
    { title: "Code Generation", description: "Generate and modify code based on intent." },
  ],
} as const;

const securityBlocks = [
  { id: "full-ip", heading: "Full IP Ownership", description: "You own the models, code, and all intellectual property exclusively.", cta: null },
  { id: "regulatory", heading: "Regulatory Compliance", description: "Built-in compliance frameworks with comprehensive audit trails.", cta: { label: "Our Process", href: "#process" } },
  { id: "air-gapped", heading: "Air-Gapped Deployment", description: "Complete functionality in isolated environments with zero external dependencies.", cta: null },
  { id: "encryption", heading: "Multi-Layer Encryption", description: "Data protected at rest, in transit, and during processing.", cta: null },
] as const;

export const securitySection = { mainHeading: "Designed for Absolute Security", blocks: securityBlocks } as const;

export const ctaSection = {
  heading: "Need a Custom Solution?",
  description: "We understand every business is unique. Let's discuss your specific requirements and build a tailored solution that fits your needs perfectly.",
  buttonLabel: "Schedule a Consultation",
  buttonHref: "/schedule",
  footnote: "All plans include free consultation • No hidden fees • Full ownership of code",
} as const;

export const deployCta = {
  heading: "Ready to deploy AI that you own and control?",
  links: [
    { label: "View Technology", href: "/technology" },
    { label: "View Documentation", href: "#" },
  ],
  buttonLabel: "Contact Us",
  buttonHref: "/schedule",
} as const;
