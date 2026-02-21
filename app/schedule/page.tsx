import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScheduleCalendar from "@/components/ui/ScheduleCalendar";
import Icon from "@/components/ui/Icon";

export const metadata = {
  title: "Book a Meeting | CandexAI",
  description: "Schedule a 30-minute discovery call with the CandexAI team. We'll map your top AI opportunities, assess data readiness, and define a concrete next step.",
};

function PageBg() {
  return (
    <div className="fixed-bg-layer" aria-hidden>
      <div className="gradient-bg-base absolute inset-0" />

      <div className="hero-grid absolute inset-0 opacity-20" />
    </div>
  );
}

const TRUST = [
  { icon: "zap",       label: "30-minute discovery call" },
  { icon: "lock",      label: "No commitment required" },
  { icon: "brain",     label: "Talk directly to an AI engineer" },
  { icon: "document",  label: "Receive a written next-step plan" },
];

const WHAT_TO_EXPECT = [
  { step: "01", title: "Understand your challenge", body: "We start by listening. No demos, no pitches — just a focused conversation about where AI can move the needle in your business." },
  { step: "02", title: "Identify your top 3 opportunities", body: "Our team maps your highest-value AI use cases based on your data assets, workflows, and compliance requirements." },
  { step: "03", title: "Leave with a concrete plan", body: "You'll receive a written next-step plan within 24 hours — use cases ranked by ROI, data readiness score, and a proposed timeline." },
];

export default function SchedulePage() {
  return (
    <div className="relative min-h-screen">
      <PageBg />
      <Header />

      {/* Hero */}
      <section className="relative z-10 pt-28 pb-10 md:pt-36 md:pb-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-6"
            style={{ background: "rgba(58,111,248,0.08)", border: "1px solid rgba(58,111,248,0.2)", letterSpacing: "0.07em" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            BOOK A MEETING
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight leading-tight mb-4">
            Let&apos;s explore what&apos;s possible<br />
            <span style={{ color: "#3A6FF8" }}>for your business.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
            Book a 30-minute discovery call with the CandexAI team. No commitment, no slide decks — just a direct conversation about your AI opportunity.
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <section className="relative z-10 pb-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-3 justify-center">
          {TRUST.map(t => (
            <span
              key={t.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-600"
              style={{ background: "rgba(255,255,255,0.65)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.75)" }}
            >
              <Icon name={t.icon} size={14} color="#3A6FF8" /> {t.label}
            </span>
          ))}
        </div>
      </section>

      {/* Main layout */}
      <section className="relative z-10 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_440px] gap-10 items-start">

          {/* Left: context */}
          <div className="space-y-8">
            {/* What to expect */}
            <div
              className="rounded-3xl p-8"
              style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.75)", boxShadow: "0 12px 40px rgba(58,111,248,0.06)" }}
            >
              <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-5">What to Expect</p>
              <div className="space-y-6">
                {WHAT_TO_EXPECT.map(w => (
                  <div key={w.step} className="flex gap-4 items-start">
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}
                    >
                      {w.step}
                    </span>
                    <div>
                      <p className="font-bold text-slate-800 mb-1">{w.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{w.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[["8 wks", "Avg time to deployment"],["20+", "Enterprise clients"],["100%", "On-premise, full IP ownership"]].map(([v, l]) => (
                <div
                  key={l}
                  className="rounded-2xl p-5 text-center"
                  style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.75)" }}
                >
                  <p className="text-2xl font-bold text-slate-800">{v}</p>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">{l}</p>
                </div>
              ))}
            </div>

            {/* Who you'll speak with */}
            <div
              className="rounded-3xl p-7"
              style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.75)" }}
            >
              <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-5">Who You&apos;ll Speak With</p>
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}
                >
                  CA
                </div>
                <div>
                  <p className="font-bold text-slate-800">CandexAI Solutions Team</p>
                  <p className="text-sm text-slate-700 font-semibold">Enterprise AI Architects</p>
                  <p className="text-xs text-slate-400 mt-1">IIT alumni · Ex-Amazon · Domain AI specialists</p>
                </div>
              </div>
              <div
                className="mt-5 rounded-xl p-4"
                style={{ background: "rgba(58,111,248,0.05)", border: "1px solid rgba(58,111,248,0.1)" }}
              >
                <p className="text-slate-600 text-sm leading-relaxed">
                  <span className="font-semibold text-slate-800">Not a sales call.</span> You&apos;ll speak directly with an AI engineer who has deployed production AI systems in your industry.
                </p>
              </div>
            </div>
          </div>

          {/* Right: calendar */}
          <ScheduleCalendar />
        </div>
      </section>

      <Footer />
    </div>
  );
}
