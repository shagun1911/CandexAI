import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IntegrationsSlider from "@/components/ui/IntegrationsSlider";
import {
  hero,
  valueProposition,
  keyBenefits,
  useCases,
  enterpriseTrust,
  comprehensiveCapabilities,
  securitySection,
  ctaSection,
} from "@/lib/data/home";

export const metadata = {
  title: "CandexAI – AI Models and Applications for the Most Ambitious Organizations",
  description: "Purpose-built AI for enterprise: privacy, control, and performance. Deploy on your infrastructure. Expert models, agentic workflows, sovereign deployment.",
};

export default function HomePage() {
  const leftCapabilities = comprehensiveCapabilities.items.slice(0, 4);
  const rightCapabilities = comprehensiveCapabilities.items.slice(4, 8);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero background layer: extends behind header so embedded nav blends with hero */}
      <div className="absolute top-0 left-0 right-0 min-h-[90vh] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 hero-gradient-mesh" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[15%] left-[10%] w-[520px] h-[520px] rounded-full bg-sky-200/50 blur-[110px] hero-orb" />
          <div className="absolute bottom-[20%] right-[8%] w-[480px] h-[480px] rounded-full bg-indigo-100/55 blur-[100px] hero-orb-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-slate-200/45 blur-[90px] hero-orb-drift" style={{ animationDelay: "-2s" }} />
          <div className="absolute top-[60%] left-[20%] w-[280px] h-[280px] rounded-full bg-blue-100/40 blur-[80px] hero-orb-slow" style={{ animationDelay: "-6s" }} />
          <div className="absolute top-[25%] right-[15%] w-[320px] h-[320px] rounded-full bg-violet-100/35 blur-[85px] hero-orb" style={{ animationDelay: "-10s" }} />
        </div>
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute inset-0 overflow-hidden">
          <span className="absolute top-[30%] left-[15%] w-2 h-2 rounded-full bg-sky-300/50 hero-particle" style={{ animationDelay: "0s" }} />
          <span className="absolute top-[45%] right-[20%] w-2 h-2 rounded-full bg-indigo-300/50 hero-particle" style={{ animationDelay: "1.2s" }} />
          <span className="absolute bottom-[35%] left-[25%] w-1.5 h-1.5 rounded-full bg-slate-300/50 hero-particle" style={{ animationDelay: "2.5s" }} />
          <span className="absolute top-[55%] right-[30%] w-2 h-2 rounded-full bg-blue-200/50 hero-particle" style={{ animationDelay: "0.8s" }} />
        </div>
      </div>

      <Header />

      {/* Hero – content only; background is in layer above so it sits behind header */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center pt-20 pb-28">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12] mb-8 text-gray-900">
            {hero.mainHeading}
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            {hero.subHeading}
          </p>
          <div className="hero-cta-wrap">
            <Link
              href={hero.cta.href}
              className="hero-cta inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              {hero.cta.label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Value proposition: More Precision, More Control */}
      <section id="use-cases" className="section-reveal py-20 md:py-28 border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            {valueProposition.heading}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {valueProposition.description}
          </p>
          <Link
            href={valueProposition.cta.href}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            {valueProposition.cta.label}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Four key benefits - icon + title + description */}
      <section className="py-24 md:py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {keyBenefits.map((benefit) => (
              <div key={benefit.id} className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-violet-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases - three pillars */}
      <section className="relative py-24 md:py-32 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {useCases.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="group block p-8 rounded-2xl border border-gray-100 bg-white hover:border-violet-200 hover:shadow-lg transition-all duration-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-violet-600 transition-colors">
                  {card.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{card.description}</p>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-violet-100 transition-colors">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Own Your AI - short value prop */}
      <section className="py-20 md:py-28 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            <span className="text-gray-900">Own Your AI</span>{" "}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            CandexAI delivers modular AI systems, fully deployed in your infrastructure—designed for organizations where{" "}
            <span className="font-semibold text-violet-600">privacy</span>,{" "}
            <span className="font-semibold text-violet-600">control</span>, and{" "}
            <span className="font-semibold text-violet-600">performance</span> are essential.
          </p>
        </div>
      </section>

      {/* Designed for Absolute Security - two-column blocks */}
      <section id="technology" className="py-24 md:py-32 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center tracking-tight">
            {securitySection.mainHeading}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {securitySection.blocks.map((block) => (
              <div key={block.id} className="flex flex-col md:flex-row md:items-start gap-6 p-8 rounded-2xl border border-gray-100 bg-gray-50/30">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{block.heading}</h3>
                  <p className="text-gray-600 leading-relaxed">{block.description}</p>
                  {block.cta && (
                    <Link
                      href={block.cta.href}
                      className="inline-flex items-center gap-2 mt-4 text-blue-600 font-semibold hover:text-blue-700"
                    >
                      {block.cta.label}
                      <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
                <div className="w-24 h-24 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                  <svg className="w-10 h-10 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Privacy & Data Security - three columns */}
      <section className="py-24 md:py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-violet-300 mb-4">{enterpriseTrust.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            {enterpriseTrust.heading}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {enterpriseTrust.items.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Capabilities - two-column layout */}
      <section className="py-24 md:py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                {comprehensiveCapabilities.sectionHeading}
              </h2>
              <p className="text-xl text-gray-600 max-w-xl">
                {comprehensiveCapabilities.sectionSubheading}
              </p>
              <Link
                href={comprehensiveCapabilities.cta.href}
                className="inline-flex items-center gap-2 mt-4 text-blue-600 font-semibold hover:text-blue-700"
              >
                {comprehensiveCapabilities.cta.label}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="space-y-8">
              {leftCapabilities.map((cap) => (
                <div key={cap.title}>
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5">{cap.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {rightCapabilities.map((cap) => (
                <div key={cap.title}>
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5">{cap.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Industry-Leading Technology + slider */}
      <section className="py-24 md:py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Powered by Industry-Leading Technology{" "}
          
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We integrate the best tools and platforms to deliver unmatched AI experiences.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <IntegrationsSlider />
        </div>
      </section>

      {/* CTA - from site data */}
      <section className="py-24 md:py-32 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {ctaSection.heading}
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            {ctaSection.description}
          </p>
          <Link
            href={ctaSection.buttonHref}
            className="inline-flex items-center gap-2 h-14 px-8 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
          >
            {ctaSection.buttonLabel}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-sm text-gray-500 mt-8">
            {ctaSection.footnote}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
