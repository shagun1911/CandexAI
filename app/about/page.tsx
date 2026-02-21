import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/ui/Icon";

export const metadata = {
  title: "About CandexAI – AI for the Enterprise",
  description: "Learn how CandexAI was founded to make enterprise AI sovereign, precise, and production-ready — built in Jaipur, India, trusted globally.",
};

function PageBg() {
  return (
    <div className="fixed-bg-layer" aria-hidden>
      <div className="gradient-bg-base absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-25" />
    </div>
  );
}

const VALUES = [
  { icon: "lock",      title: "Privacy First", body: "Every deployment is air-gapped and on-premise by default. Your data never leaves your infrastructure — not once, not ever." },
  { icon: "brain",     title: "Expert Intelligence", body: "We build domain-expert models, not generic LLMs. Smaller, faster, cheaper, and dramatically more accurate for your specific domain." },
  { icon: "zap",       title: "Rapid Delivery", body: "We don't believe in 12-month timelines. From contract to production in 8 weeks — with a dedicated engineer from day one." },
  { icon: "infinity",  title: "Continuous Growth", body: "AI models degrade. Ours don't. Embedded upgradability means your AI improves automatically with every CandexAI research release." },
  { icon: "shield",    title: "Full Ownership", body: "You own 100% of the code, models, and IP forever. No licensing, no royalties, no lock-in. It's yours." },
  { icon: "globe",     title: "Built for Scale", body: "From a 20-person startup to a 200,000-person enterprise, our architecture scales without architectural changes or re-training." },
];

const MILESTONES = [
  { year: "2023", event: "Founded in Jaipur, Rajasthan", detail: "CandexAI incorporated with a singular focus: build sovereign AI that enterprises can truly own and control." },
  { year: "Q2 2024", event: "First Enterprise Deployment", detail: "Deployed our first domain-expert model for a BFSI client — achieving 91% MMLU accuracy at $0.12/1K tokens." },
  { year: "Q4 2024", event: "Platform v1.0 Launch", detail: "Launched the CandexAI Agent Platform supporting agentic workflows, multi-modal document AI, and Voice AI." },
  { year: "Q1 2025", event: "Multi-Industry Expansion", detail: "Expanded into healthcare, legal, retail, and government — serving clients across 8 industry verticals." },
  { year: "2026", event: "Scaling Globally", detail: "20+ enterprise clients. $50M+ in cumulative client cost savings. Targeting Series A funding to accelerate global expansion." },
];

const LEADERSHIP = [
  { name: "Shubham Sharma", role: "Founder & CEO", bio: "Engineer and entrepreneur with a passion for making AI practical, private, and powerful for real enterprises.", initials: "SS" },
  { name: "Priya Mehra", role: "CTO", bio: "Former ML researcher at IIT Bombay. Leads model architecture, training pipelines, and infrastructure.", initials: "PM" },
  { name: "Arjun Kapoor", role: "VP Engineering", bio: "Ex-Amazon engineer. Owns the deployment platform, integrations, and enterprise security frameworks.", initials: "AK" },
  { name: "Neha Singh", role: "Head of Product", bio: "Product strategist with deep roots in enterprise SaaS. Champions the voice of the enterprise buyer.", initials: "NS" },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <PageBg />
      <Header />

      {/* Hero */}
      <section className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-6" style={{ background:"rgba(58,111,248,0.08)", border:"1px solid rgba(58,111,248,0.2)", letterSpacing:"0.07em" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> ABOUT CANDEXAI
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight tracking-tight mb-6">
            Enterprise AI that you<br />
            <span style={{ color:"#3A6FF8" }}>own, control, and trust.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mb-10">
            We founded CandexAI with one conviction: the most powerful AI shouldn&apos;t live in someone else&apos;s cloud. It should live in yours — private, precise, and permanently yours.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            {[["20+","Enterprise clients"],["8","Industry verticals"],["$50M+","Client cost savings"],["8 wks","Avg deployment"]].map(([v,l])=>(
              <div key={l} className="rounded-2xl p-4 text-center" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                <p className="text-2xl font-bold text-slate-800">{v}</p>
                <p className="text-xs text-slate-500 mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office image + mission */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden" style={{ height: 380 }}>
            <Image src="/images/about/office.jpg" priority alt="CandexAI headquarters" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(10,18,35,0.7) 0%, transparent 50%)" }} />
            <div className="absolute bottom-5 left-5">
              <p className="text-white font-bold">Jaipur, Rajasthan, India</p>
              <p className="text-slate-300 text-sm">Where CandexAI was born</p>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight mb-5 leading-tight">
              Make enterprise AI sovereign, precise, and production-ready.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5">
              The best AI models in the world mean nothing if your data gets exposed, your outputs hallucinate, or your vendor can pull the plug tomorrow. We set out to fix that.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              CandexAI builds expert AI models trained exclusively on your domain data, deployed entirely within your infrastructure, with zero external API calls. You own the model, the data, and every line of code. Forever.
            </p>
            <Link href="/technology" className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-700">
              See our technology →
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="p-7 rounded-2xl" style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)", boxShadow:"0 8px 30px rgba(58,111,248,0.05)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)", color:"#fff" }}><Icon name={v.icon} size={20} /></div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team photo + leadership */}
      <section className="relative z-10 py-20 px-4 sm:px-6" id="leadership">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">The People Behind CandexAI</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Leadership Team</h2>
          </div>
          <div className="relative rounded-3xl overflow-hidden mb-12" style={{ height:280 }}>
            <Image src="/images/about/team.jpg" alt="CandexAI team" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(10,18,35,0.65) 0%, transparent 55%)" }} />
            <div className="absolute bottom-6 left-8">
              <p className="text-white font-bold text-lg">Built by engineers who've worked at the frontier.</p>
              <p className="text-slate-300 text-sm">IIT alumni, ex-Amazon, ex-Microsoft, and ex-startup founders.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LEADERSHIP.map((l) => (
              <div key={l.name} className="p-6 rounded-2xl text-center" style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white mx-auto mb-4" style={{ background:"linear-gradient(135deg,#3A6FF8 0%,#6ea0ff 100%)" }}>{l.initials}</div>
                <p className="font-bold text-slate-800">{l.name}</p>
                <p className="text-xs text-slate-700 font-semibold mb-2">{l.role}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Company Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block" style={{ background:"rgba(58,111,248,0.2)" }} />
            <div className="flex flex-col gap-6">
              {MILESTONES.map((m, i) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10 text-center" style={{ background:i===MILESTONES.length-1?"linear-gradient(135deg,#3A6FF8,#6ea0ff)":"rgba(255,255,255,0.8)", border:"1.5px solid rgba(58,111,248,0.25)" }}>
                    <span className="text-[9px] font-bold leading-tight" style={{ color:i===MILESTONES.length-1?"#fff":"#3A6FF8" }}>{m.year}</span>
                  </div>
                  <div className="flex-1 p-6 rounded-2xl" style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                    <p className="font-bold text-slate-800 mb-1">{m.event}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl px-10 py-10 sm:py-16" style={{ background:"linear-gradient(135deg,rgba(14,26,43,0.94) 0%,rgba(15,23,42,0.9) 100%)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.08)", boxShadow:"0 24px 64px rgba(0,0,0,0.18)" }}>
            <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-4">Join Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">Ready to build sovereign AI?</h2>
            <p className="text-slate-300 leading-relaxed mb-10">Whether you&apos;re exploring AI for the first time or replacing an existing solution, we&apos;d love to show you what CandexAI can do for your business.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/schedule" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors">Book a Call →</Link>
              <Link href="/use-cases" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors">See Use Cases</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
