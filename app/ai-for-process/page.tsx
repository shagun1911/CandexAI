import dynamic from "next/dynamic";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-20 bg-white">
        <div className="absolute inset-0 pointer-events-none hero-gradient-mesh" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[12%] left-[15%] w-[400px] h-[400px] rounded-full bg-emerald-200/40 blur-[100px] hero-orb" />
          <div className="absolute bottom-[22%] right-[10%] w-[360px] h-[360px] rounded-full bg-sky-100/55 blur-[90px] hero-orb-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-amber-100/40 blur-[80px] hero-orb-drift" style={{ animationDelay: "-2s" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none hero-grid" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          <span className="hero-title inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold uppercase tracking-wider mb-6">
            {hero.badge}
          </span>
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            {hero.headline}
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {hero.description}
          </p>
          <div className="hero-cta-wrap flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              href={hero.useCases.href}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-all"
            >
              {hero.useCases.label}
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* Explore capabilities – 3 cards with dotted border */}
      <section className="py-16 md:py-24 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Explore AI for Process capabilities
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Gain full visibility and control over AI agent performance, manage business processes, and accelerate process automation.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-6">
              {capabilities.map((c, i) => (
                <div
                  key={c.title}
                  className={`reveal-child reveal-stagger-${(i % 7) + 1} solution-card-hover process-capability-card rounded-2xl bg-white p-6 md:p-8`}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{c.description}</p>
                  <Link
                    href={c.learnMoreHref}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 border border-dashed border-gray-400 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Knowledge-intensive process challenges – 4 cards */}
      <section className="py-16 md:py-24 bg-gray-50/60">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Knowledge-intensive process challenges
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Organizations are discovering entirely new categories of processes that can be automated with AI agents and were previously considered difficult to automate due to their complexity and reliance on human judgment.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((ch, i) => (
                <div
                  key={ch.title}
                  className={`reveal-child reveal-stagger-${(i % 4) + 1} solution-card-hover rounded-2xl border border-gray-200 bg-white p-6 shadow-sm`}
                >
                  <div className={`w-12 h-12 rounded-xl ${ch.iconBg} flex items-center justify-center mb-4`}>
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{ch.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{ch.description}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Security + Compliance */}
      <section className="py-16 md:py-24 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {securitySection.headline}
            </h2>
            <p className="text-gray-600 max-w-2xl">
              {securitySection.subtitle}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {securitySection.features.map((f, i) => (
                <div
                  key={f.title}
                  className={`reveal-child reveal-stagger-${(i + 1)} rounded-2xl border border-gray-200 bg-white p-6 shadow-sm`}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
            <AnimateOnScroll>
              <Link
                href={securitySection.cta.href}
                className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                {securitySection.cta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimateOnScroll>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats – uncapped process automation opportunities */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50/80 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
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
                          className={`stat-circle w-2 h-2 rounded-full ${filled ? "bg-blue-500" : "bg-gray-200"}`}
                          style={{ animationDelay: `${idx * 0.015}s` }}
                        />
                      );
                    })}
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                    {s.value}
                    {s.suffix}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Introducing AI for Process */}
      <section className="py-16 md:py-24 border-t border-gray-100 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {intro.headline}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {intro.body}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 border-t border-gray-100 bg-gray-50/40">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateOnScroll className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
              Frequently asked questions
            </h2>
            <p className="text-gray-600 text-center">
              Need more information? Get in touch with our team.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <FAQAccordion items={faq} />
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
