/**
 * Footer content — shared by Footer component only.
 * Structured to mirror kore.ai's multi-column enterprise footer layout.
 */

export const footer = {
  tagline: "AI Solutions for the Enterprise",

  columns: [
    {
      heading: "PRE-BUILT SOLUTIONS",
      links: [
        { label: "AI for Banking",       href: "/use-cases" },
        { label: "AI for Healthcare",    href: "/use-cases" },
        { label: "AI for Retail",        href: "/use-cases" },
        { label: "AI for HR & Recruiting", href: "/use-cases" },
        { label: "AI for Legal",         href: "/use-cases" },
        { label: "AI for Government",    href: "/use-cases" },
        { label: "AI for Manufacturing", href: "/use-cases" },
      ],
    },
    {
      heading: "CANDEXAI PLATFORM",
      links: [
        { label: "Platform Overview",      href: "/technology" },
        { label: "Agentic AI Framework",   href: "/ai-for-work" },
        { label: "AI Engineering Tools",   href: "/technology" },
        { label: "Document Intelligence",  href: "/ai-for-process" },
        { label: "Voice AI",               href: "/voice-ai" },
        { label: "Security & Governance",  href: "/technology" },
        { label: "Integrations",           href: "/technology" },
      ],
    },
    {
      heading: "AI APPS",
      links: [
        { label: "AI for Work",         href: "/ai-for-work" },
        { label: "AI for Service",      href: "/ai-for-service" },
        { label: "AI for Process",      href: "/ai-for-process" },
        { label: "Use Cases Library",   href: "/use-cases" },
        { label: "Agent Marketplace",   href: "/use-cases" },
        { label: "Pricing",             href: "/pricing" },
      ],
    },
    {
      heading: "COMPANY",
      links: [
        { label: "About CandexAI",    href: "#about" },
        { label: "Leadership",        href: "#leadership" },
        { label: "Careers",           href: "#careers" },
        { label: "Partners",          href: "#partners" },
        { label: "Newsroom",          href: "/blog" },
        { label: "Contact Us",        href: "/schedule" },
      ],
    },
    {
      heading: "RESOURCES",
      links: [
        { label: "Documentation",       href: "/documentation" },
        { label: "Blog",                href: "/blog" },
        { label: "AI Cookbook",         href: "/cookbook" },
        { label: "Whitepapers",         href: "/blog" },
        { label: "Benchmark Reports",   href: "/technology" },
        { label: "AI Glossary",         href: "/blog" },
        { label: "Videos",              href: "/blog" },
        { label: "CXO Toolkit",         href: "/blog" },
      ],
    },
    {
      heading: "GET INVOLVED",
      links: [
        { label: "Request a Demo",    href: "/schedule" },
        { label: "Book a Meeting",    href: "/schedule" },
        { label: "Enterprise Plans",  href: "/pricing" },
        { label: "Support",           href: "mailto:infoCandexAI@gmail.com" },
        { label: "Community",         href: "#community" },
        { label: "Events",            href: "#events" },
      ],
    },
  ],

  social: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "linkedin",
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: "youtube",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com",
      icon: "x",
    },
  ],

  legal: [
    { label: "Privacy Policy",            href: "/privacy" },
    { label: "Terms of Use",              href: "/terms" },
    { label: "Data Processing Agreement", href: "#" },
    { label: "Acceptable Use Policy",     href: "#" },
    { label: "Cookie Settings",           href: "#" },
  ],

  copyright: "© 2026 CandexAI. All rights reserved.",

  contact: {
    email: "infoCandexAI@gmail.com",
    location: "Mohan Nagar, Jaipur, Rajasthan",
  },
} as const;
