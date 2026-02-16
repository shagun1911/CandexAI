import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCasesPage, missionCriticalIndustries } from "@/lib/data/use-cases";

export const metadata = {
  title: "Use Cases | CandexAI – Sovereign AI, Logistics, Mobility, Real Estate",
  description: "See how organizations deploy CandexAI: logistics, tourism, mobility, real estate, cybersecurity, banking. Expert models at scale.",
};

export default function UseCasesPage() {
  const { hero: useCasesHero, filters, featured, cards } = useCasesPage;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {useCasesHero.title}
          </h1>
          <p className="text-lg text-slate-300">
            {useCasesHero.subtitle}
          </p>
        </div>
      </section>

      {/* Featured use case banner */}
      <section className="py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href={featured.href}
            className="block p-6 md:p-8 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  {featured.title}
                </h2>
                <ul className="space-y-2 text-slate-300">
                  {featured.metrics.map((m) => (
                    <li key={m} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="inline-flex items-center gap-2 font-semibold text-blue-300 hover:text-blue-200 shrink-0">
                {featured.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Filters (UI only - can wire to state later) */}
      <section className="py-8 border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {filters.map((f) => (
              <div key={f.id} className="min-w-[180px]">
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                  {f.label}
                </label>
                <button
                  type="button"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-left text-sm text-gray-500 hover:border-gray-300 transition-colors flex items-center justify-between"
                >
                  {f.placeholder}
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use case cards grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="group block rounded-2xl overflow-hidden border border-gray-100 bg-white hover:border-violet-100 hover:shadow-lg transition-all"
              >
                <div className="h-32 bg-gradient-to-br from-violet-100 to-blue-100 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-white/80 flex items-center justify-center">
                    <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 bg-slate-900 text-white">
                  <h3 className="text-lg font-bold mb-4 group-hover:text-blue-200 transition-colors">
                    {card.title}
                  </h3>
                  <ul className="space-y-2 text-slate-300 text-sm mb-4">
                    {card.metrics.map((m) => (
                      <li key={m} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-400" />
                        {m}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 group-hover:text-blue-200">
                    Read use-case
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission-critical workflows / industries */}
      <section className="py-16 md:py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center tracking-tight">
            Proven in Mission-Critical Workflows at Scale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Sovereign AI deployments and enterprise-grade solutions across industries.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionCriticalIndustries.map((industry) => (
              <div
                key={industry.id}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-violet-100 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
