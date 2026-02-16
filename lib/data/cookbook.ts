/**
 * AI Recipe Book (Cookbook) – categories and recipe cards.
 * Used by app/cookbook/page.tsx.
 */

export const cookbookPage = {
  hero: {
    title: "AI Recipe Book",
    description:
      "Discover practical recipes for building AI applications with CandexAI. Our recipe book provides ready-to-use patterns and examples to implement common enterprise AI use cases quickly—from RAG and chat to document analysis and compliance.",
  },
  filterLabel: "Filter by category",
  allCategoriesId: "all",
  moreComingSoon: {
    heading: "More recipes coming soon",
    description:
      "We're constantly adding new recipes to showcase the capabilities of CandexAI. Check back regularly for updates or get in touch for custom solutions.",
    ctaLabel: "View documentation",
    ctaHref: "/documentation",
  },
} as const;

export const cookbookCategories = [
  { id: "all", label: "All categories" },
  { id: "general", label: "General AI Applications" },
  { id: "financial", label: "Financial Services" },
  { id: "healthcare", label: "Healthcare & Medical" },
  { id: "legal", label: "Legal & Compliance" },
  { id: "retail", label: "Retail & E-commerce" },
  { id: "education", label: "Education & Learning" },
  { id: "manufacturing", label: "Manufacturing & Industry" },
  { id: "marketing", label: "Marketing & Advertising" },
] as const;

export type CookbookCategoryId = (typeof cookbookCategories)[number]["id"];

export const cookbookRecipes = [
  {
    id: "corporate-earnings-rag",
    title: "Corporate Earnings Analysis RAG",
    description:
      "Comprehensive RAG system for analyzing quarterly earnings reports, SEC filings, and financial statements with AI-powered insights.",
    categoryId: "financial" as const,
    tags: ["Financial Services", "RAG Application", "chat"],
  },
  {
    id: "data-analyzer",
    title: "Data Analyzer",
    description: "Analyze CSV data and generate insights with AI.",
    categoryId: "general" as const,
    tags: ["General AI Applications", "chat/completions"],
  },
  {
    id: "semantic-search",
    title: "Semantic Search Assistant",
    description:
      "Build a search assistant that understands and responds to natural language queries.",
    categoryId: "general" as const,
    tags: ["General AI Applications", "RAG Application", "embeddings"],
  },
  {
    id: "image-description",
    title: "Image Description Generator",
    description: "Generate detailed descriptions and captions for images using AI.",
    categoryId: "general" as const,
    tags: ["General AI Applications", "Vision", "images/generations"],
  },
  {
    id: "multi-doc-research",
    title: "Multi-Document Research Assistant",
    description:
      "Advanced RAG system for analyzing and querying multiple documents with vector search.",
    categoryId: "general" as const,
    tags: ["RAG Application", "chat"],
  },
  {
    id: "financial-research",
    title: "Financial Research Tool",
    description:
      "RAG-powered financial research assistant for comprehensive market analysis and investment insights.",
    categoryId: "financial" as const,
    tags: ["Financial Services", "RAG Application", "chat"],
  },
  {
    id: "credit-risk-rag",
    title: "Credit Risk Assessment RAG",
    description:
      "AI-powered credit risk evaluation using RAG to analyze borrower profiles, financial histories, and regulatory guidelines.",
    categoryId: "financial" as const,
    tags: ["Financial Services", "RAG Application", "chat"],
  },
  {
    id: "regulatory-compliance-rag",
    title: "Regulatory Compliance Assistant RAG",
    description:
      "AI-powered regulatory compliance system using RAG to navigate complex financial regulations and provide real-time guidance.",
    categoryId: "legal" as const,
    tags: ["Legal & Compliance", "RAG Application", "chat"],
  },
  {
    id: "investment-portfolio-rag",
    title: "Investment Portfolio Advisor RAG",
    description:
      "AI-powered portfolio management system using RAG to provide personalized investment recommendations and market analysis.",
    categoryId: "financial" as const,
    tags: ["Financial Services", "RAG Application", "chat"],
  },
  {
    id: "insurance-claims-rag",
    title: "Insurance Claims Processing RAG",
    description:
      "AI-powered insurance claims processing with document analysis, fraud detection, and automated assessment using RAG.",
    categoryId: "financial" as const,
    tags: ["Financial Services", "RAG Application", "chat"],
  },
  {
    id: "aml-rag",
    title: "Anti-Money Laundering (AML) RAG",
    description:
      "AI-powered AML compliance system with real-time transaction monitoring, sanctions screening, customer due diligence, and automated regulatory reporting using RAG.",
    categoryId: "financial" as const,
    tags: ["Financial Services", "RAG Application", "chat"],
  },
  {
    id: "medical-document-analysis",
    title: "Medical Document Analysis & Patient Record Summarization",
    description:
      "AI-powered system for analyzing medical documents, generating patient timelines, and extracting clinical insights from healthcare records.",
    categoryId: "healthcare" as const,
    tags: ["Healthcare & Medical", "RAG Application", "chat"],
  },
  {
    id: "esg-analysis-rag",
    title: "ESG Analysis RAG",
    description:
      "AI-powered ESG (Environmental, Social, Governance) analysis using RAG to evaluate sustainability reports, extract metrics, and provide comprehensive ESG scores.",
    categoryId: "financial" as const,
    tags: ["Financial Services", "RAG Application", "chat"],
  },
  {
    id: "simple-chatbot",
    title: "Simple Chat Bot",
    description: "Conversational AI assistant for customer support and general Q&A.",
    categoryId: "general" as const,
    tags: ["General AI Applications", "chat/completions"],
  },
  {
    id: "document-summarizer",
    title: "Document Summarizer",
    description: "Summarize long documents and reports with AI while preserving key points.",
    categoryId: "general" as const,
    tags: ["General AI Applications", "RAG Application"],
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    description: "Generate images from text prompts for marketing and design workflows.",
    categoryId: "general" as const,
    tags: ["General AI Applications", "images/generations"],
  },
] as const;
