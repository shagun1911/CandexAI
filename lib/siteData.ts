/**
 * Barrel file: re-exports from per-page data files.
 * Prefer importing from @/lib/data/<page> in each page for better code-splitting and SEO.
 */

export { nav, navDropdowns } from "./data/nav";
export { footer } from "./data/footer";
export {
  hero,
  valueProposition,
  keyBenefits,
  useCases,
  enterpriseTrust,
  comprehensiveCapabilities,
  securitySection,
  ctaSection,
  deployCta,
} from "./data/home";
export { aiForWorkPage } from "./data/ai-for-work";
export { aiForServicePage } from "./data/ai-for-service";
export { aiForProcessPage } from "./data/ai-for-process";
export { technologyPage, expertModels } from "./data/technology";
export { useCasesPage, missionCriticalIndustries } from "./data/use-cases";
export { pricingPlans as pricingPlansFromPricing } from "./data/pricing";
export { blogPage } from "./data/blog";
export { documentationPage } from "./data/documentation";
