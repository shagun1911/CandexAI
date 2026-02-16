import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { documentationPage } from "@/lib/data/documentation";

export const metadata = {
  title: "Documentation | CandexAI – API & Platform Docs",
  description: "CandexAI API and platform documentation. Getting started, API reference, and guides for expert AI models.",
};

export default function DocumentationPage() {
  const { hero, highlight, sections, sidebar, quickStart } = documentationPage;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_80%_80%_at_100%_0%,rgba(59,130,246,0.2),transparent)]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {hero.title}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-56 shrink-0">
            <nav className="sticky top-24 space-y-8">
              {sidebar.map((group) => (
                <div key={group.heading}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                    {group.heading}
                  </p>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors block py-1"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/schedule"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Get API Key →
                </Link>
                <br />
                <Link
                  href="/technology"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700 mt-2 inline-block"
                >
                  Try Expert Models →
                </Link>
              </div>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <AnimateOnScroll>
              <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 mb-10">
                <p className="font-semibold text-gray-900 mb-1">{highlight.title}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{highlight.body}</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="grid md:grid-cols-3 gap-6 mb-14">
                {sections.map((sec, i) => (
                  <div
                    key={sec.id}
                    className="solution-card-hover rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <h2 className="text-lg font-bold text-gray-900 mb-2">{sec.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{sec.description}</p>
                    <ul className="space-y-2">
                      {sec.links.map((link) => (
                        <li key={link.label}>
                          <a href={link.href} className="text-sm font-medium text-blue-600 hover:text-blue-700">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <h2 id="quick-start" className="text-2xl font-bold text-gray-900 mb-3">
                {quickStart.title}
              </h2>
              <p className="text-gray-600 mb-4">{quickStart.description}</p>
              <pre className="rounded-xl bg-slate-900 text-slate-100 p-6 text-sm overflow-x-auto font-mono">
                <code>{quickStart.code}</code>
              </pre>
            </AnimateOnScroll>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
