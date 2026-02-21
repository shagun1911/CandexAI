import dynamic from "next/dynamic";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GradientBackground from "@/components/ui/GradientBackground";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FloatingCard from "@/components/ui/FloatingCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { aiForProcessPage } from "@/lib/data/ai-for-process";

const FAQAccordion = dynamic(() => import("@/components/ui/FAQAccordion"), {
  ssr: true,
  loading: () => (
    <div className="space-y-3">
      <div className="h-16 rounded-xl bg-gray-100 animate-pulse" />
      <div className="h-16 rounded-xl bg-gray-100 animate-pulse" />
    </div>
  ),
});

export const metadata = {
  title: "AI for Process | CandexAI – Streamline Knowledge-Intensive Processes",
  description: "Automate complex workflows with autonomous AI agents. Process automation, AI analytics, security and compliance. CandexAI.",
};

export default function AIForProcessPage() {
  const {
    hero,
    capabilities,
    challenges,
    securitySection,
    stats,
    intro,
    faq,
  } = aiForProcessPage;

  return (
    <div className="min-h-screen relative">
      <GradientBackground />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 pointer-events-none gradient-bg-base" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
        </div>
        <div className="absolute inset-0 pointer-events-none hero-grid" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          <span className="hero-title inline-block px-4 py-1.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] text-xs font-semibold uppercase tracking-wider mb-6">
            {hero.badge}
          </span>
          <h1 className="hero-title type-h1 font-semibold text-[var(--foreground)] mb-6">
            {hero.headline}
          </h1>
          <p className="hero-subtitle type-body-lg text-[var(--muted)] max-w-3xl mx-auto leading-relaxed">
            {hero.description}
          </p>
          <div className="hero-cta-wrap flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              href={hero.useCases.href}
              className="cta-primary inline-flex items-center gap-2 h-12 px-6 rounded-xl text-white text-sm font-medium"
            >
              {hero.useCases.label}
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            </Link>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="mb-12">
            <h2 className="type-h2 font-semibold text-[var(--foreground)] text-center mb-4">
              Explore AI for Process capabilities
            </h2>
            <p className="text-[var(--muted)] text-center max-w-2xl mx-auto type-body">
              Gain full visibility and control over AI agent performance, manage business processes, and accelerate process automation.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-6">
              {capabilities.map((c, i) => (
                <FloatingCard
                  key={c.title}
                  className={`reveal-child reveal-stagger-${(i % 7) + 1} process-capability-card p-6 md:p-8`}
                >
                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">{c.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">{c.description}</p>
                  <Link
                    href={c.learnMoreHref}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] border border-dashed border-[var(--accent)]/40 rounded-lg px-4 py-2 hover:bg-[var(--accent-soft)] transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </FloatingCard>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="mb-10">
            <h2 className="type-h2 font-semibold text-[var(--foreground)] text-center mb-4">
              Knowledge-intensive process challenges
            </h2>
            <p className="text-[var(--muted)] text-center max-w-3xl mx-auto type-body">
              Organizations are discovering entirely new categories of processes that can be automated with AI agents and were previously considered difficult to automate due to their complexity and reliance on human judgment.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((ch, i) => (
                <FloatingCard
                  key={ch.title}
                  className={`reveal-child reveal-stagger-${(i % 4) + 1} p-6`}
                >
                  <div className={`w-12 h-12 rounded-xl ${ch.iconBg} flex items-center justify-center mb-4`}>
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">{ch.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{ch.description}</p>
                </FloatingCard>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="mb-10">
            <h2 className="type-h2 font-semibold text-[var(--foreground)] mb-3">
              {securitySection.headline}
            </h2>
            <p className="text-[var(--muted)] max-w-2xl type-body">
              {securitySection.subtitle}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {securitySection.features.map((f, i) => (
                <FloatingCard
                  key={f.title}
                  className={`reveal-child reveal-stagger-${(i + 1)} p-6`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-2">{f.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{f.description}</p>
                </FloatingCard>
              ))}
            </div>
            <AnimateOnScroll>
              <Link
                href={securitySection.cta.href}
                className="cta-primary inline-flex items-center gap-2 h-11 px-5 rounded-xl text-white text-sm font-medium"
              >
                {securitySection.cta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimateOnScroll>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="mb-12">
            <h2 className="type-h2 font-semibold text-[var(--foreground)] text-center mb-4">
              Uncapped process automation opportunities
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((s, i) => (
                <div key={i} className={`solution-stat solution-stat-delay-${i + 1} text-center`}>
                  <div className="grid grid-cols-10 gap-0.5 w-[100px] mx-auto mb-4">
                    {Array.from({ length: 100 }).map((_, idx) => {
                      const filled = idx < s.value;
                      return (
                        <span
                          key={idx}
                          className={`stat-circle w-2 h-2 rounded-full ${filled ? "bg-[var(--accent)]" : "bg-white/60"}`}
                          style={{ animationDelay: `${idx * 0.015}s` }}
                        />
                      );
                    })}
                  </div>
                  <p className="text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-1">
                    {s.value}
                    {s.suffix}
                  </p>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <h2 className="type-h2 font-semibold text-[var(--foreground)] mb-6">
              {intro.headline}
            </h2>
            <p className="type-body-lg text-[var(--muted)] leading-relaxed">
              {intro.body}
            </p>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="subtle">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="mb-10">
            <h2 className="type-h2 font-semibold text-[var(--foreground)] text-center mb-2">
              Frequently asked questions
            </h2>
            <p className="text-[var(--muted)] text-center type-body">
              Need more information? Get in touch with our team.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <FAQAccordion items={faq} />
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}
