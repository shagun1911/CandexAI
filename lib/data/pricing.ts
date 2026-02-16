/**
 * Pricing content. Used by pricing page and optionally homepage.
 */

export const pricingPlans = [
  { id: "starter", name: "Starter", price: "$1,999", period: "one-time", description: "For teams getting started with AI—focused scope and fast deployment.", popular: false },
  { id: "professional", name: "Professional", price: "$4,999", period: "one-time", description: "For growing organizations—broader capabilities and integration support.", popular: true },
  { id: "enterprise", name: "Enterprise", price: "$8,999+", period: "one-time", description: "For large-scale deployment—full platform, SLAs, and dedicated support.", popular: false },
] as const;
