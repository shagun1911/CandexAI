import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getFeature, getAllFeatureSlugs } from "@/lib/data/features";
import Icon from "@/components/ui/Icon";

export async function generateStaticParams() {
  return getAllFeatureSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) return {};
  return {
    title: `${f.label} | CandexAI Platform`,
    description: f.subheadline,
  };
}

function PageBg() {
  return (
    <div className="fixed-bg-layer" aria-hidden>
      <div className="gradient-bg-base absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-25" />
    </div>
  );
}

const OTHER_FEATURES = [
  { label: "Multi-Agent Orchestration", href: "/features/multi-agent-orchestration", icon: "shuffle" },
  { label: "AI Engineering Tools", href: "/features/ai-engineering-tools", icon: "settings" },
  { label: "Search + Data AI", href: "/features/search-data-ai", icon: "search" },
  { label: "No-Code + Pro-Code", href: "/features/no-code-pro-code", icon: "wrench" },
];

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) notFound();

  return (
    <div className="relative min-h-screen">
      <PageBg />
      <Header />

      {/* Breadcrumb */}
      <div className="relative z-10 pt-24 pb-0 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/agent-platform" className="hover:text-blue-600 transition-colors">Agent Platform</Link>
            <span>/</span>
            <span className="text-slate-600 font-medium">{f.label}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative z-10 pt-8 pb-12 md:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-6" style={{ background:"rgba(58,111,248,0.08)", border:"1px solid rgba(58,111,248,0.2)", letterSpacing:"0.07em" }}>
              <Icon name={f.icon} size={14} /> {f.tag}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight tracking-tight mb-5">
              {f.headline}
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">{f.subheadline}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/schedule" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-bold text-white" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>
                Request a Demo →
              </Link>
              <Link href="/agent-platform" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-semibold text-slate-700" style={{ background:"rgba(255,255,255,0.7)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                Full Platform Overview
              </Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden" style={{ height:360 }}>
            <Image src={f.img} alt={f.label} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(10,18,35,0.65) 0%, transparent 55%)" }} />
            <div className="absolute bottom-5 left-5">
              <p className="text-white font-bold text-sm">{f.label}</p>
              <p className="text-slate-300 text-xs">CandexAI Platform Capability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {f.stats.map(([v,l])=>(
            <div key={l} className="rounded-2xl p-5 text-center" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
              <p className="text-3xl font-bold text-slate-800">{v}</p>
              <p className="text-xs text-slate-500 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What it does */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">How It Works</p>
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-5">What {f.label} does for your enterprise</h2>
            <p className="text-slate-500 leading-relaxed mb-8">{f.body}</p>
            <div className="space-y-2.5">
              {f.bullets.map(b=>(
                <div key={b} className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ background:"rgba(58,111,248,0.05)" }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>
                    <svg viewBox="0 0 12 12" className="w-3 h-3 fill-white"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-slate-700 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
            <div className="px-6 pt-6 pb-4" style={{ borderBottom:"1px solid rgba(148,163,184,0.15)" }}>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technical Specifications</p>
            </div>
            <div className="p-6 space-y-4">
              {f.techSpecs.map(s=>(
                <div key={s.name} className="flex justify-between gap-4 items-start">
                  <span className="text-slate-500 text-sm font-medium flex-shrink-0">{s.name}</span>
                  <span className="text-slate-800 text-sm font-semibold text-right">{s.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use cases — customer-stories card grid pattern */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Real-World Impact</p>
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight">{f.label} in action</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {f.useCases.map(u=>(
              <div key={u.title} className="p-6 rounded-2xl flex flex-col" style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                <span className="px-3 py-1 rounded-full text-xs font-bold text-slate-800 self-start mb-3" style={{ background:"rgba(58,111,248,0.08)" }}>{u.industry}</span>
                <p className="font-bold text-slate-800 text-sm mb-1">{u.title}</p>
                <p className="text-slate-700 font-bold text-sm mb-3">{u.result}</p>
                <p className="text-slate-500 text-xs leading-relaxed flex-1">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative z-10 py-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <blockquote className="rounded-3xl p-8 md:p-12 text-center" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
            <svg className="w-8 h-8 mx-auto mb-4" viewBox="0 0 32 32" fill="none">
              <path d="M9 8H4C4 14.627 4 18 4 22h6v8H4C4 18.373 4 10 4 8zm19 0h-5C23 14.627 23 18 23 22h6v8h-6C23 18.373 23 10 23 8z" fill="rgba(58,111,248,0.2)"/>
            </svg>
            <p className="text-slate-700 text-xl font-medium leading-relaxed mb-5">&ldquo;{f.quote}&rdquo;</p>
            <p className="text-sm font-bold text-slate-700">— {f.quoteName}</p>
          </blockquote>
        </div>
      </section>

      {/* Other features */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Explore More</p>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Other platform capabilities</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OTHER_FEATURES.filter(o=>o.href !== `/features/${f.slug}`).map(o=>(
              <Link key={o.href} href={o.href} className="p-6 rounded-2xl flex flex-col items-start gap-3 transition-transform hover:-translate-y-1" style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background:"rgba(58,111,248,0.1)", color:"#3A6FF8" }}><Icon name={o.icon} size={16} /></div>
                <p className="font-bold text-slate-800 text-sm leading-snug">{o.label}</p>
                <span className="text-xs text-slate-700 font-semibold">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl px-10 py-10 sm:py-16" style={{ background:"linear-gradient(135deg,rgba(14,26,43,0.94) 0%,rgba(15,23,42,0.9) 100%)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-4">See It Live</p>
            <h2 className="text-3xl font-bold text-white mb-5 tracking-tight">Ready to deploy {f.label}?</h2>
            <p className="text-slate-300 leading-relaxed mb-10">Book a 30-minute technical session. We&apos;ll show you exactly how {f.label} works for your specific use case — live, not a slide deck.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/schedule" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors">Book a Demo →</Link>
              <Link href={f.nextFeatureHref} className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors">
                Next: {f.nextFeature} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
