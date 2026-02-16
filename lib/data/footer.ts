/**
 * Footer content. Shared by Footer component only.
 */

export const footer = {
  tagline: "AI Solutions for Modern Business",
  columns: [
    { heading: "Product", links: [{ label: "Use Cases", href: "/use-cases" }, { label: "Process", href: "#process" }, { label: "Technology", href: "/technology" }] },
    { heading: "Resources", links: [{ label: "AI Recipes", href: "/cookbook" }, { label: "Resources", href: "/blog" }, { label: "Blog", href: "/blog" }, { label: "Documentation", href: "/documentation" }, { label: "Benchmarks", href: "#benchmarks" }, { label: "Research", href: "/blog" }, { label: "FAQ", href: "#" }] },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Data Processing Agreement", href: "#" },
    { label: "Acceptable Use Policy", href: "#" },
  ],
  copyright: "© 2026 CandexAI. All rights reserved.",
  social: [{ name: "Instagram", href: "#" }, { name: "LinkedIn", href: "#" }],
} as const;
