/**
 * Documentation page content. Separate data file for SEO.
 * Structure inspired by API/documentation sites (e.g. ULTRASAFE, developer docs).
 */

export const documentationPage = {
  hero: {
    title: "CandexAI API & Platform Documentation",
    subtitle: "Integrate advanced AI into your applications through a unified interface. Our specialized expert models deliver superior performance in healthcare, finance, code, and enterprise workflows.",
  },
  highlight: {
    title: "Experience CandexAI Expert AI Models",
    body: "Mini, Healthcare, Finance, Code, and domain specialists. Intelligent model routing ensures optimal performance for every task with transparent token-based pricing.",
  },
  sections: [
    {
      id: "getting-started",
      title: "Getting Started",
      description: "Learn about the CandexAI API and how to make your first request.",
      links: [
        { label: "API Endpoints Overview", href: "#endpoints" },
        { label: "Authentication Guide", href: "#authentication" },
      ],
    },
    {
      id: "api-reference",
      title: "API Reference",
      description: "Detailed documentation for parameters, models, and response formats.",
      links: [
        { label: "Available Models", href: "#models" },
        { label: "Request Parameters", href: "#parameters" },
        { label: "Response Format", href: "#response" },
      ],
    },
    {
      id: "guides",
      title: "Guides",
      description: "Learn advanced techniques and best practices.",
      links: [
        { label: "Streaming Responses", href: "#streaming" },
        { label: "Error Handling", href: "#errors" },
      ],
    },
  ],
  sidebar: [
    { heading: "Getting Started", items: ["Introduction", "Build with CandexAI", "Choosing a Model", "API Endpoints", "Authentication"] },
    { heading: "API Reference", items: ["Overview", "Available Models", "Request Parameters", "Response Format"] },
    { heading: "Guides", items: ["Overview", "Streaming Responses", "Error Handling", "Testing with Postman"] },
  ],
  quickStart: {
    title: "Quick Start",
    description: "Get started with CandexAI in minutes. Here's a simple example to make your first API call:",
    code: `curl -X POST https://api.CandexAI.co.in/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "CandexAI-mini",
    "messages": [{"role": "user", "content": "Hello, world"}]
  }'`,
  },
} as const;
