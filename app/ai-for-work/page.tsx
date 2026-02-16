import dynamic from "next/dynamic";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { aiForWorkPage } from "@/lib/data/ai-for-work";

const IndustryTabs = dynamic(() => import("@/components/ai-for-work/IndustryTabs"), { ssr: true, loading: () => <div className="h-64 rounded-2xl bg-gray-100 animate-pulse max-w-6xl mx-auto" /> });
const FAQAccordion = dynamic(() => import("@/components/ui/FAQAccordion"), { ssr: true, loading: () => <div className="space-y-3"><div className="h-16 rounded-xl bg-gray-100 animate-pulse" /><div className="h-16 rounded-xl bg-gray-100 animate-pulse" /></div> });

export const metadata = {
  title: "AI for Work | CandexAI – Search, Automate, Orchestrate",
  description: "Search across silos, automate workflows, orchestrate AI agents. Enterprise AI for work with governance and confidence. CandexAI.",
};

export default function AIForWorkPage() {
  const { hero, industries, caseStudy, features, departments, accelerators, faq } = aiForWorkPage;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero – same light-theme treatment as homepage */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-20 bg-white">
        <div className="absolute inset-0 pointer-events-none hero-gradient-mesh" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[10%] w-[420px] h-[420px] rounded-full bg-sky-200/50 blur-[100px] hero-orb" />
          <div className="absolute bottom-[20%] right-[8%] w-[380px] h-[380px] rounded-full bg-indigo-100/55 blur-[90px] hero-orb-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-slate-200/45 blur-[80px] hero-orb-drift" style={{ animationDelay: "-2s" }} />
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
        </div>
      </section>

      {/* Industry tabs + case study (animated content switch) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/80">
        <AnimateOnScroll>
          <IndustryTabs industries={industries} caseStudy={caseStudy} />
        </AnimateOnScroll>
      </section>

      {/* Features grid – staggered reveal */}
      <section className="py-16 md:py-24 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              How it works
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Enterprise-grade capabilities to search, automate, and govern AI across your organization.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`reveal-child reveal-stagger-${(i % 7) + 1} solution-card-hover rounded-2xl border border-gray-200 bg-white p-6 shadow-sm`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Departments + Accelerators */}
      <section className="py-16 md:py-24 bg-gray-50/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimateOnScroll>
              <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                  Departments
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {departments.map((d) => (
                    <li key={d}>
                      <span className="inline-block px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium">
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                  Pre-built accelerators
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {accelerators.map((a) => (
                    <li key={a}>
                      <span className="inline-block px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium">
                        {a}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-16 md:py-24 border-t border-gray-100 bg-white">
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
