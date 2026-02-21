import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/ui/Icon";
import ScrollPlayMedia from "@/components/ui/ScrollPlayMedia";
import {
  TokenCostAnim,
  AccuracyAnim,
  DeliveryAnim,
  UpgradabilityAnim,
} from "@/components/ui/SectionAnimations";

export const metadata = {
  title: "Scaling AI Insights – CandexAI",
  description:
    "How CandexAI delivers 5–8× cost reduction, 85–90% MMLU accuracy, rapid deployment, and continuous upgradability for enterprise AI at scale.",
};

/* ── Static fixed background (mirrors homepage SiteBackground) ─────── */
function PageBackground() {
  return (
    <div
      className="fixed-bg-layer"
      aria-hidden
      style={{ pointerEvents: "none" }}
    >
      <div className="gradient-bg-base absolute inset-0" />

      <div className="hero-grid absolute inset-0 opacity-25" />
    </div>
  );
}

/* ── Stat badge ────────────────────────────────────────────────────── */
function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex flex-col items-center px-6 py-4 rounded-2xl text-center"
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.7)",
        boxShadow: "0 4px 20px rgba(58,111,248,0.07)",
      }}
    >
      <span className="text-3xl font-bold text-slate-800 tracking-tight">{value}</span>
      <span className="text-xs text-slate-500 mt-1 leading-snug">{label}</span>
    </div>
  );
}

/* ── Benefit card (full-width variant) ─────────────────────────────── */
function BenefitCard({
  eyebrow,
  title,
  description,
  stats,
  details,
  anim,
  reverse,
}: {
  eyebrow: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  details: string[];
  anim: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}
    >
      {/* Text side */}
      <div className="flex-1 flex flex-col gap-6">
        <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase">
          {eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight tracking-tight">
          {title}
        </h2>
        <p className="text-slate-500 text-base leading-relaxed">{description}</p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-3">
          {stats.map((s) => (
            <StatBadge key={s.label} value={s.value} label={s.label} />
          ))}
        </div>

        {/* Detail bullets */}
        <ul className="space-y-3">
          {details.map((d) => (
            <li key={d} className="flex items-start gap-3 text-sm text-slate-600">
              <span
                className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ background: "rgba(58,111,248,0.12)" }}
              >
                <svg className="w-2.5 h-2.5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              {d}
            </li>
          ))}
        </ul>
      </div>

      {/* Animation side */}
      <div
        className="w-full lg:w-[420px] flex-shrink-0 rounded-3xl overflow-hidden"
        style={{
          height: 300,
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.75)",
          boxShadow: "0 20px 60px rgba(58,111,248,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        <ScrollPlayMedia className="w-full h-full">{anim}</ScrollPlayMedia>
      </div>
    </div>
  );
}

/* ── Benchmark table ───────────────────────────────────────────────── */
const BENCHMARKS = [
  { model: "CandexAI Expert",  mmlu: 91, cost: "$0.12", latency: "280ms", highlight: true },
  { model: "GPT-4o",           mmlu: 86, cost: "$1.25", latency: "680ms", highlight: false },
  { model: "Gemini 2.0 Flash", mmlu: 84, cost: "$0.98", latency: "520ms", highlight: false },
  { model: "Deepseek V3",      mmlu: 81, cost: "$0.55", latency: "610ms", highlight: false },
  { model: "Claude 3.5 Sonnet",mmlu: 88, cost: "$1.80", latency: "740ms", highlight: false },
];

/* ── ROI cards ─────────────────────────────────────────────────────── */
const ROI_CASES = [
  {
    industry: "Financial Services",
    icon: "building",
    result: "73% cost reduction",
    detail: "A mid-sized bank replaced GPT-4o for document review workflows. Monthly API spend dropped from $48K to $13K with higher field-extraction accuracy.",
    metrics: ["$35K/month saved", "99.2% extraction accuracy", "8-week deployment"],
  },
  {
    industry: "Healthcare",
    icon: "cross",
    result: "12-week to 6-week delivery",
    detail: "A healthcare network deployed clinical note summarization across 4 hospitals. Full HIPAA-compliant, air-gapped deployment in 6 weeks.",
    metrics: ["6-week deployment", "HIPAA compliant", "Air-gapped infra"],
  },
  {
    industry: "Legal Tech",
    icon: "scale",
    result: "8× cheaper per contract",
    detail: "Contract analysis platform switched from frontier models to CandexAI domain-expert. Cost per 1000 contracts fell from $400 to $48.",
    metrics: ["8× cost reduction", "92% clause accuracy", "On-premise deploy"],
  },
  {
    industry: "E-Commerce",
    icon: "shopping",
    result: "5× faster inference",
    detail: "Product recommendation engine retrained on catalog data. Inference latency fell from 1.4s to 280ms enabling real-time personalization.",
    metrics: ["280ms avg latency", "5× speed gain", "Zero API calls"],
  },
];

/* ── Implementation timeline ───────────────────────────────────────── */
const TIMELINE = [
  { week: "Wk 1–2",  phase: "Discovery & Design",  desc: "Requirements gathering, data audit, model selection, infra planning. Dedicated CandexAI engineer assigned." },
  { week: "Wk 3–5",  phase: "Model Training",       desc: "Domain-specific pre-training on your data. Iterative alignment with your quality benchmarks. You see every step." },
  { week: "Wk 6–7",  phase: "Integration & Testing", desc: "API wiring, load testing, edge-case hardening. Security review and compliance documentation prepared." },
  { week: "Wk 8",    phase: "Go-Live",              desc: "Full production deploy into your infrastructure. Zero external dependencies. Monitoring dashboard handed over." },
  { week: "Ongoing", phase: "Upgradability",        desc: "Continuous model improvement, version management, and performance reviews. You always run the latest version." },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function ScalingAIInsightsPage() {
  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <Header />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative z-10 pt-28 pb-20 md:pt-36 md:pb-24 text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-6"
            style={{
              background: "rgba(58,111,248,0.08)",
              border: "1px solid rgba(58,111,248,0.2)",
              letterSpacing: "0.07em",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            SCALING AI INSIGHTS
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight tracking-tight mb-6">
            Scale Smarter.<br />
            <span style={{ color: "#3A6FF8" }}>Grow Faster.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            The hard numbers behind CandexAI's promise: 5–8× cost reduction, 85–90%
            benchmark accuracy, 8-week delivery cycles, and continuous upgradability —
            all on your infrastructure.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-xl text-sm font-bold text-white"
              style={{ background: "#1e3a5f", boxShadow: "0 4px 14px rgba(30,58,95,0.3)" }}
            >
              Get Your ROI Report →
            </Link>
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-xl text-sm font-semibold text-slate-700"
              style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(226,232,240,0.9)", backdropFilter: "blur(12px)" }}
            >
              See the Technology
            </Link>
          </div>
        </div>

        {/* Top-line stats */}
        <div className="max-w-3xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "8×",     label: "Cost reduction vs frontier models" },
            { value: "91%",    label: "MMLU benchmark accuracy" },
            { value: "8 wks",  label: "Average time-to-production" },
            { value: "100%",   label: "IP and data ownership" },
          ].map((s) => (
            <StatBadge key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* ── 4 Benefit deep-dives ──────────────────────────────────────── */}
      <section className="relative z-10 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-24">

          {/* 1. Token Cost */}
          <BenefitCard
            eyebrow="Cost Efficiency"
            title="Optimized Token Costs"
            description="Enterprise AI shouldn't cost a fortune. CandexAI expert models are pre-trained specifically on your domain, so they require far fewer tokens to achieve superior accuracy. You pay for intelligence, not guesswork."
            stats={[
              { value: "8×",   label: "Lower cost per 1K tokens" },
              { value: "73%",  label: "Average client cost reduction" },
              { value: "$0.12",label: "Per 1K tokens (typical)" },
            ]}
            details={[
              "Expert models trained on your domain understand context in far fewer tokens than frontier LLMs",
              "No hidden API mark-ups — you run inference on your own infrastructure",
              "Cost scales with your actual usage, not a SaaS seat model",
              "Customers running 50M+ tokens/day report 60–80% cost savings vs GPT-4o",
              "Optional quantized deployment reduces GPU cost by an additional 40%",
            ]}
            anim={<TokenCostAnim />}
          />

          {/* 2. Accuracy */}
          <BenefitCard
            reverse
            eyebrow="Benchmark Performance"
            title="Industry Leading Accuracy"
            description="Our models are built for your domain — not generic knowledge. By pre-training on your proprietary data and industry corpus, CandexAI consistently outperforms flagship frontier models on the tasks that actually matter to your business."
            stats={[
              { value: "91%", label: "MMLU benchmark score" },
              { value: "99%", label: "Field extraction accuracy" },
              { value: "#1",  label: "Ranked in domain evaluations" },
            ]}
            details={[
              "85–90% MMLU domain scores vs GPT-4o (86%), Gemini 2.0 (84%), Deepseek V3 (81%)",
              "99.2% field-level accuracy on document extraction tasks (invoices, contracts, forms)",
              "Custom benchmark suite aligned to your specific quality KPIs before sign-off",
              "Hallucination rate 3–5× lower than generalist models on domain-specific tasks",
              "Continuous re-evaluation as your business data evolves — accuracy always improving",
            ]}
            anim={<AccuracyAnim />}
          />

          {/* 3. Delivery */}
          <BenefitCard
            eyebrow="Deployment Speed"
            title="Rapid End-to-End Delivery"
            description="Most enterprise AI projects take 6–18 months. CandexAI ships production systems in 8 weeks. A dedicated team of engineers manages every stage — from discovery to go-live — inside your infrastructure."
            stats={[
              { value: "8 wks", label: "Average time-to-production" },
              { value: "1",     label: "Dedicated engineer per client" },
              { value: "0",     label: "External dependencies at runtime" },
            ]}
            details={[
              "Week 1–2: discovery, data audit, infra planning — your team stays in full control",
              "Week 3–5: model training and alignment on your domain corpus",
              "Week 6–7: integration, security review, load testing, compliance documentation",
              "Week 8: full production deploy — you own the keys from day one",
              "Post-launch SLA with 99.9% uptime commitment and 24-hour incident response",
            ]}
            anim={<DeliveryAnim />}
          />

          {/* 4. Upgradability */}
          <BenefitCard
            reverse
            eyebrow="Future-Proof AI"
            title="Embedded Upgradability"
            description="AI models degrade without maintenance. CandexAI builds continuous improvement into every deployment — automatic version management, performance monitoring, and scheduled re-training ensure your AI always runs at peak performance."
            stats={[
              { value: "3×",    label: "Accuracy improvement in yr 1" },
              { value: "Auto",  label: "Version management included" },
              { value: "0",     label: "Downtime during upgrades" },
            ]}
            details={[
              "Semantic versioning for every model update — rollback in seconds if needed",
              "Automated A/B testing before any upgrade reaches production",
              "Performance dashboards updated daily — you always see model metrics",
              "Re-training triggered automatically when accuracy drifts below your defined threshold",
              "All new CandexAI research improvements pushed to your model as they ship",
            ]}
            anim={<UpgradabilityAnim />}
          />
        </div>
      </section>

      {/* ── Benchmark comparison table ────────────────────────────────── */}
      <section className="relative z-10 py-20 md:py-14 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Performance Data</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight mb-3">
              How CandexAI Compares
            </h2>
            <p className="text-slate-500">MMLU benchmark scores, cost-per-1K-tokens, and average latency across leading models.</p>
          </div>

          <div
            className="overflow-hidden rounded-3xl"
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.75)",
              boxShadow: "0 20px 60px rgba(58,111,248,0.07)",
            }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(226,232,240,0.7)" }}>
                  <th className="text-left px-8 py-5 text-slate-600 font-semibold">Model</th>
                  <th className="text-center px-6 py-5 text-slate-600 font-semibold">MMLU Score</th>
                  <th className="text-center px-6 py-5 text-slate-600 font-semibold">Cost / 1K tokens</th>
                  <th className="text-center px-6 py-5 text-slate-600 font-semibold">Avg Latency</th>
                </tr>
              </thead>
              <tbody>
                {BENCHMARKS.map((row, i) => (
                  <tr
                    key={row.model}
                    style={{
                      borderBottom: i < BENCHMARKS.length - 1 ? "1px solid rgba(226,232,240,0.5)" : "none",
                      background: row.highlight ? "rgba(58,111,248,0.04)" : "transparent",
                    }}
                  >
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-3">
                        {row.highlight && (
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: "#3A6FF8" }}
                          />
                        )}
                        <span
                          className="font-semibold"
                          style={{ color: row.highlight ? "#1e3a5f" : "#475569" }}
                        >
                          {row.model}
                        </span>
                        {row.highlight && (
                          <span
                            className="text-[9px] font-bold px-2 py-0.5 rounded-full text-slate-700"
                            style={{ background: "rgba(58,111,248,0.1)", letterSpacing: "0.06em" }}
                          >
                            BEST
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: row.mmlu,
                            background: row.highlight
                              ? "linear-gradient(90deg, #3A6FF8, #6ea0ff)"
                              : "#e2e8f0",
                          }}
                        />
                        <span
                          className="font-bold text-xs w-8"
                          style={{ color: row.highlight ? "#3A6FF8" : "#94a3b8" }}
                        >
                          {row.mmlu}%
                        </span>
                      </div>
                    </td>
                    <td
                      className="px-6 py-4 text-center font-bold text-xs"
                      style={{ color: row.highlight ? "#10b981" : "#94a3b8" }}
                    >
                      {row.cost}
                    </td>
                    <td
                      className="px-6 py-4 text-center font-bold text-xs"
                      style={{ color: row.highlight ? "#10b981" : "#94a3b8" }}
                    >
                      {row.latency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              className="px-8 py-3 text-[10px] text-slate-400"
              style={{ borderTop: "1px solid rgba(226,232,240,0.5)" }}
            >
              * Benchmarks measured on enterprise domain-specific evaluation sets. Costs are approximate at standard volume tiers. Latency measured on p50 at 1,000 RPM.
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI case studies ──────────────────────────────────────────── */}
      <section className="relative z-10 py-20 md:py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Real Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
              ROI Across Industries
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
            {ROI_CASES.map((c) => (
              <div
                key={c.industry}
                className="p-8 rounded-3xl flex flex-col gap-4"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.75)",
                  boxShadow: "0 16px 50px rgba(58,111,248,0.06)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:"rgba(58,111,248,0.1)", color:"#3A6FF8" }}><Icon name={c.icon} size={18} /></div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">{c.industry}</p>
                    <p className="text-lg font-bold text-slate-800 leading-tight">{c.result}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{c.detail}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2" style={{ borderTop: "1px solid rgba(226,232,240,0.6)" }}>
                  {c.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-[10px] font-bold px-3 py-1 rounded-full text-slate-800"
                      style={{ background: "rgba(58,111,248,0.08)", border: "1px solid rgba(58,111,248,0.15)" }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Implementation timeline ───────────────────────────────────── */}
      <section className="relative z-10 py-20 md:py-14 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Deployment Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight mb-3">
              From Contract to Production in 8 Weeks
            </h2>
            <p className="text-slate-500">Every CandexAI engagement follows a proven sprint structure with full transparency.</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[28px] top-0 bottom-0 w-px hidden md:block"
              style={{ background: "rgba(58,111,248,0.15)" }}
            />
            <div className="flex flex-col gap-6">
              {TIMELINE.map((step, i) => (
                <div key={step.week} className="flex gap-6 items-start">
                  {/* Circle node */}
                  <div
                    className="w-14 h-14 rounded-2xl flex-shrink-0 flex flex-col items-center justify-center text-center relative z-10"
                    style={{
                      background: i === TIMELINE.length - 1
                        ? "linear-gradient(135deg, #3A6FF8 0%, #6ea0ff 100%)"
                        : "rgba(255,255,255,0.8)",
                      border: "1.5px solid rgba(58,111,248,0.25)",
                      boxShadow: "0 4px 14px rgba(58,111,248,0.1)",
                    }}
                  >
                    <span
                      className="text-[9px] font-bold leading-tight"
                      style={{ color: i === TIMELINE.length - 1 ? "#fff" : "#3A6FF8", letterSpacing: "0.04em" }}
                    >
                      {step.week}
                    </span>
                  </div>
                  {/* Card */}
                  <div
                    className="flex-1 p-6 rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,0.55)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.75)",
                      boxShadow: "0 8px 30px rgba(58,111,248,0.05)",
                    }}
                  >
                    <p className="font-bold text-slate-800 mb-1">{step.phase}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="rounded-3xl px-10 py-10 sm:py-16"
            style={{
              background: "linear-gradient(135deg, rgba(14,26,43,0.94) 0%, rgba(15,23,42,0.9) 100%)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
            }}
          >
            <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-4">
              Ready to Scale?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight leading-tight">
              Get your personalized<br />ROI analysis
            </h2>
            <p className="text-slate-300 leading-relaxed mb-10 text-base">
              We&apos;ll review your current AI spend, model performance, and deployment complexity — and
              show you exactly what CandexAI delivers for your specific use case.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors"
              >
                Request Free ROI Analysis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors"
              >
                See the Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
