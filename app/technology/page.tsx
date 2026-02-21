import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { technologyPage } from "@/lib/data/technology";

export const metadata = {
  title: "Technology | CandexAI – Precision AI Architecture for Enterprise",
  description: "Expert models, Model Control Protocol, domain-specific intelligence. Deploy on-prem, cloud, hybrid, or air-gapped. CandexAI technology.",
};

export default function TechnologyPage() {
  const { hero: techHero, sidebarSections, expertModelSpecs, domainSpecificIntelligence, modelControlProtocol, infrastructureAgnostic, enterpriseSecurity, dataFlowTiers } = technologyPage;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {techHero.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            {techHero.subtitle}
          </p>
          <Link
            href={techHero.cta.href}
            className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
          >
            {techHero.cta.label}
          </Link>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left: content */}
            <div className="flex-1 min-w-0 space-y-20">
              {/* Expert Model Architecture + Domain-Specific Intelligence */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                  Expert Model Architecture
                </h2>
                <p className="text-gray-600 mb-8">
                  Intelligent decision-making system for enterprise operations.
                </p>
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {domainSpecificIntelligence.heading}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {domainSpecificIntelligence.intro}
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    {domainSpecificIntelligence.domains.map((d, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-slate-500 shrink-0">•</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Expert Model Specifications */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                  {expertModelSpecs.heading}
                </h2>
                <ul className="space-y-6">
                  {expertModelSpecs.items.map((item) => (
                    <li key={item.title}>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Model Control Protocol */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                  {modelControlProtocol.heading}
                </h2>
                <p className="text-gray-600 mb-6">
                  {modelControlProtocol.intro}
                </p>
                <ul className="space-y-4">
                  {modelControlProtocol.capabilities.map((cap) => (
                    <li key={cap.title} className="flex gap-3">
                      <span className="text-slate-500 shrink-0">→</span>
                      <div>
                        <h4 className="font-bold text-gray-900">{cap.title}</h4>
                        <p className="text-gray-600 text-sm">{cap.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Infrastructure Agnostic Design */}
              <div className="p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {infrastructureAgnostic.heading}
                </h2>
                <p className="text-gray-600 mb-6">
                  {infrastructureAgnostic.intro}
                </p>
                <ul className="space-y-4">
                  {infrastructureAgnostic.items.map((item) => (
                    <li key={item.title}>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enterprise Security Architecture */}
              <div className="p-6 md:p-8 rounded-2xl bg-slate-900 text-white">
                <h2 className="text-2xl font-bold mb-2 tracking-tight">
                  {enterpriseSecurity.heading}
                </h2>
                <p className="text-slate-300 mb-6">
                  {enterpriseSecurity.subtitle}
                </p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 0H7m0 0h4m0 0h4m0 0h2M5 15H3m2 0H7m0 0h4m0 0h4m0 0h2M3 5h2M7 5h4m0 0h4m0 0h2M3 15h2M7 15h4m0 0h4m0 0h2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">
                      {enterpriseSecurity.privacyFirst.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {enterpriseSecurity.privacyFirst.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Data flow: Data Sources → Processing → Outcomes */}
              <div className="p-6 md:p-8 rounded-2xl border border-gray-200 bg-white">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
                  From Data to Decisions
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-xl bg-gray-50">
                    <h3 className="font-bold text-gray-900 mb-1">{dataFlowTiers.dataSources.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{dataFlowTiers.dataSources.description}</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {dataFlowTiers.dataSources.items.slice(0, 4).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                      <li>+ more</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-violet-50">
                    <h3 className="font-bold text-gray-900 mb-1">{dataFlowTiers.processing.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{dataFlowTiers.processing.description}</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• {dataFlowTiers.processing.mcp.title}</li>
                      <li>• {dataFlowTiers.processing.expert.title}</li>
                      <li>• {dataFlowTiers.processing.agents.title}</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50">
                    <h3 className="font-bold text-gray-900 mb-1">{dataFlowTiers.outcomes.title}</h3>
                    <p className="text-sm text-gray-600">{dataFlowTiers.outcomes.description}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: sidebar nav */}
            <aside className="lg:w-56 shrink-0">
              <div className="sticky top-24 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  On this page
                </p>
                {sidebarSections.map((section) => (
                  <a
                    key={section}
                    href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block py-2 text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors"
                  >
                    {section}
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
