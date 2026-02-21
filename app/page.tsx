import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IntegrationsSlider from "@/components/ui/IntegrationsSlider";
import ScrollPlayMedia from "@/components/ui/ScrollPlayMedia";
import { WorkAnimation, ServiceAnimation, ProcessAnimation } from "@/components/ui/UseCaseCardAnimations";
import CapabilitiesShowcase from "@/components/ui/CapabilitiesShowcase";
import SecurityShowcase from "@/components/ui/SecurityShowcase";
import {
  hero,
  valueProposition,
  useCases,
  enterpriseTrust,
  comprehensiveCapabilities,
  securitySection,
  ctaSection,
} from "@/lib/data/home";

export const metadata = {
  title: "CandexAI – AI Models and Applications for the Most Ambitious Organizations",
  description:
    "Purpose-built AI for enterprise: privacy, control, and performance. Deploy on your infrastructure. Expert models, agentic workflows, sovereign deployment.",
};

/* ─── Single fixed gradient background ─────────────────────────────────── */
function SiteBackground() {
  return (
    <div className="fixed-bg-layer" aria-hidden>
      <div className="gradient-bg-base absolute inset-0" />
      {/* Floating orbs */}

      {/* Load-pulse rings — expand once on page load, then stop */}

      {/* Subtle grid */}
      <div className="hero-grid absolute inset-0 opacity-30" />
    </div>
  );
}

/* ─── Glass section wrapper ─────────────────────────────────────────────── */
function GlassSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative z-10 ${className}`}
      style={{ background: "transparent" }}
    >
      {children}
    </section>
  );
}

export default function HomePage() {
  const animationMap: Record<string, React.ReactNode> = {
    work: <WorkAnimation />,
    service: <ServiceAnimation />,
    process: <ProcessAnimation />,
  };

  return (
    <div className="relative min-h-screen">
      {/* THE one fixed background – visible under everything */}
      <SiteBackground />

      <Header />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <GlassSection className="min-h-[80vh] sm:min-h-[88vh] flex flex-col items-center justify-center pt-16 sm:pt-20 pb-16 sm:pb-28">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold text-slate-800"
            style={{
              background: "rgba(58,111,248,0.1)",
              border: "1px solid rgba(58,111,248,0.2)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Enterprise AI Platform
          </div>

          <h1 className="hero-title text-3xl sm:text-4xl md:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-6 sm:mb-8 text-slate-800">
            {hero.mainHeading}
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            {hero.subHeading}
          </p>

          {/* Two CTA buttons */}
          <div className="hero-cta-wrap flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href={hero.cta.href}
              className="hero-btn-primary inline-flex items-center gap-2 h-12 px-7 rounded-xl text-sm font-semibold"
            >
              {hero.cta.label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/use-cases"
              className="hero-btn-secondary inline-flex items-center gap-2 h-12 px-7 rounded-xl text-sm font-semibold backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </GlassSection>

      {/* ── Value proposition ─────────────────────────────────────────── */}
      <GlassSection id="use-cases" className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
            {valueProposition.heading}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            {valueProposition.description}
          </p>
          <Link
            href={valueProposition.cta.href}
            className="inline-flex items-center gap-2 text-slate-800 font-semibold hover:text-blue-800"
          >
            {valueProposition.cta.label}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </GlassSection>

      {/* ── Three use-case cards (glass, no play button) ──────────────── */}
      <GlassSection className="py-6 md:py-12 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {useCases.map((card) => (
              <div
                key={card.id}
                className="floating-card flex flex-col rounded-2xl overflow-hidden"
              >
                {/* Card header */}
                <div className="px-6 pt-6 pb-4 flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-slate-800 mb-1 tracking-tight">
                      {card.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <Link
                    href={card.href}
                    className="flex-shrink-0 ml-3 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
                    style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.5)" }}
                    aria-label={`Explore ${card.title}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Animation area – scroll-triggered, no play button */}
                <div className="flex-1 px-4 pb-4 min-h-[280px]">
                  <ScrollPlayMedia className="h-full min-h-[280px]">
                    {animationMap[card.id] ?? null}
                  </ScrollPlayMedia>
                </div>

                {/* Explore link */}
                <div className="px-6 pb-5">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 hover:text-blue-800 transition-colors"
                  >
                    Explore
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlassSection>

      {/* Key benefits removed — now lives on /scaling-ai-insights */}

      {/* ── Own Your AI ───────────────────────────────────────────────── */}
      <GlassSection className="py-14 sm:py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 tracking-tight">
            Own Your AI
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            CandexAI delivers modular AI systems, fully deployed in your infrastructure—designed for
            organizations where{" "}
            <span className="font-semibold text-slate-800">privacy</span>,{" "}
            <span className="font-semibold text-slate-800">control</span>, and{" "}
            <span className="font-semibold text-slate-800">performance</span> are essential.
          </p>
        </div>
      </GlassSection>

      {/* ── Security showcase — kore.ai style ────────────────────────── */}
      <GlassSection id="technology" className="py-14 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SecurityShowcase />
        </div>
      </GlassSection>

      {/* ── Enterprise trust (glass dark strip) ───────────────────────── */}
      <GlassSection className="py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div
            className="rounded-3xl px-10 py-16 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(14,26,43,0.92) 0%, rgba(15,23,42,0.88) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.2)",
            }}
          >
            <p className="text-sm font-medium text-slate-500 mb-3 tracking-widest uppercase">
              {enterpriseTrust.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 tracking-tight">
              {enterpriseTrust.heading}
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {enterpriseTrust.items.map((item) => (
                <div key={item.title} className="text-center">
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassSection>

      {/* ── Capabilities showcase (kore.ai tabbed card) ───────────────── */}
      <GlassSection className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section heading above the card */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              {comprehensiveCapabilities.sectionHeading}
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              {comprehensiveCapabilities.sectionSubheading}
            </p>
          </div>
          {/* kore.ai-style showcase card */}
          <CapabilitiesShowcase />
        </div>
      </GlassSection>

      {/* ── Integrations slider ────────────────────────────────────────── */}
      <GlassSection className="py-24 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Powered by Industry-Leading Technology
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We integrate the best tools and platforms to deliver unmatched AI experiences.
          </p>
        </div>
        <div className="relative">
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #F5F9FF, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #F5F9FF, transparent)" }}
          />
          <IntegrationsSlider />
        </div>
      </GlassSection>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <GlassSection className="py-24 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div
            className="rounded-3xl px-10 py-16"
            style={{
              background: "linear-gradient(135deg, rgba(14,26,43,0.92) 0%, rgba(30,58,95,0.88) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {ctaSection.heading}
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              {ctaSection.description}
            </p>
            <Link
              href={ctaSection.buttonHref}
              className="inline-flex items-center gap-2 h-14 px-8 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
            >
              {ctaSection.buttonLabel}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-sm text-slate-400 mt-8">{ctaSection.footnote}</p>
          </div>
        </div>
      </GlassSection>

      <Footer />
    </div>
  );
}
