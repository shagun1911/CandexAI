"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/ui/Icon";

function PageBg() {
  return (
    <div className="fixed-bg-layer" aria-hidden>
      <div className="gradient-bg-base absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-25" />
    </div>
  );
}

const PHASES = [
  {
    num:"01", phase:"Discover & Assess",
    icon:"search",
    duration:"Weeks 1–2",
    headline:"Map your highest-value AI opportunities",
    body:"We analyse your workflows, data assets, and organisational readiness to identify where AI delivers the highest ROI — in 10 days. No six-month consulting engagements.",
    deliverables:["AI opportunity map with ROI ranking","Data readiness assessment","Compliance & sovereignty risk review","Go/no-go recommendation per use case"],
    color:"#3A6FF8",
  },
  {
    num:"02", phase:"Design & Architect",
    icon:"puzzle",
    duration:"Weeks 3–4",
    headline:"Blueprint your AI system end-to-end",
    body:"Our solution architects design your domain-expert model, data pipeline, integration layer, and security boundary — before a single line of code is written.",
    deliverables:["Domain model architecture","Data ingestion & labelling plan","Integration diagram (APIs, SSO, RBAC)","Deployment topology (on-prem / private cloud)"],
    color:"#7c3aed",
  },
  {
    num:"03", phase:"Build & Deploy",
    icon:"settings",
    duration:"Weeks 5–8",
    headline:"From prototype to production in 4 weeks",
    body:"A dedicated CandexAI engineering team trains your domain model, builds the integration layer, and deploys to your infrastructure. All testing and QA included.",
    deliverables:["Trained domain-expert AI model","Full integration with existing systems","Security-hardened deployment","UAT support & hypercare"],
    color:"#059669",
  },
  {
    num:"04", phase:"Scale & Evolve",
    icon:"trending",
    duration:"Ongoing",
    headline:"Continuous improvement baked in",
    body:"As your business evolves, so does your AI. Automatic model updates, performance dashboards, and embedded upgradability ensure your AI improves — without re-training from scratch.",
    deliverables:["Monthly model performance reports","Embedded upgradability (v2.0, v3.0…)","Usage analytics dashboard","Dedicated success manager"],
    color:"#d97706",
  },
];

const MISTAKES = [
  { title:"Starting with the technology, not the problem", body:"Most AI failures begin here. Enterprises chase LLM demos before defining a measurable business problem. We always start with outcomes." },
  { title:"Using a general-purpose LLM for domain tasks", body:"GPT-4 was not trained on your 40-year insurance corpus. A smaller, domain-expert model will outperform it at 10% of the cost." },
  { title:"Ignoring data sovereignty until it's too late", body:"Your AI is only as safe as its data boundaries. Retrofitting privacy is expensive and often impossible. Build it right from day one." },
  { title:"Building AI in a silo", body:"AI succeeds when it lives inside existing workflows, not parallel to them. Integration is not a phase — it's the whole strategy." },
  { title:"No success metrics defined upfront", body:"If you can't measure it, you can't improve it. Every CandexAI deployment ships with a live KPI dashboard from day one." },
  { title:"Thinking it's a one-time project", body:"AI is not a project. It's a system. The enterprises winning with AI today have a continuous improvement process, not a one-time rollout." },
];

const READINESS_CHECKLIST = [
  { category:"Data", items:["Clean, structured data exists in a central location","Data governance policy is in place","Historical data available (12+ months minimum)","PII and sensitive data identified and scoped"] },
  { category:"People", items:["AI champion identified at C-suite level","Cross-functional team assembled (IT, Ops, Legal)","Change management plan drafted","Training budget allocated"] },
  { category:"Technology", items:["Cloud or private server infrastructure ready","API/integration architecture documented","Security and compliance requirements defined","Existing systems and vendors identified"] },
  { category:"Strategy", items:["Business problem clearly defined and measured","Success KPIs agreed across stakeholders","Budget approved for 12-month programme","Executive sponsor named and engaged"] },
];

const FRAMEWORKS = [
  { name:"Document AI", icon:"document", fit:"High-volume, structured document processing", examples:["KYC & onboarding","Contract review","Invoice extraction","Claim processing"] },
  { name:"Conversational AI", icon:"chat", fit:"Customer-facing or employee-facing dialogue", examples:["Customer support bots","HR & IT helpdesk","Sales qualification","Multilingual service"] },
  { name:"Agent AI", icon:"cpu", fit:"Multi-step autonomous task execution", examples:["Research & summarisation","Workflow automation","Data reconciliation","Decision support"] },
  { name:"Voice AI", icon:"microphone", fit:"Audio-first interaction and documentation", examples:["Clinical note capture","Call analytics","Meeting intelligence","Voice-to-action"] },
];

export default function EnterpriseStrategyPage() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeFramework, setActiveFramework] = useState(0);

  return (
    <div className="relative min-h-screen">
      <PageBg />
      <Header />

      {/* Hero */}
      <section className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-6" style={{ background:"rgba(58,111,248,0.08)", border:"1px solid rgba(58,111,248,0.2)", letterSpacing:"0.07em" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> ENTERPRISE STRATEGY
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight tracking-tight mb-6">
              Your AI strategy<br />
              <span style={{ color:"#3A6FF8" }}>starts here.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
              A practical, battle-tested framework for enterprise AI adoption. From identifying your first use case to scaling across the organisation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/schedule" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-bold text-white" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>Book a Strategy Session →</Link>
              <a href="#framework" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-semibold text-slate-700" style={{ background:"rgba(255,255,255,0.7)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                See the Framework
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden" style={{ height:380 }}>
            <Image src="/images/strategy/planning.jpg" priority alt="Enterprise AI planning" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(10,18,35,0.7) 0%, transparent 55%)" }} />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-bold text-lg">87% of enterprises fail at AI</p>
              <p className="text-slate-300 text-sm">Not because of technology — because of strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[["87%","Of AI projects fail in production"],["₹0","Lock-in or licensing fees"],["8 wks","Avg time to deployment"],["100%","IP owned by the client"]].map(([v,l])=>(
            <div key={l} className="rounded-2xl p-5 text-center" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
              <p className="text-3xl font-bold text-slate-800">{v}</p>
              <p className="text-xs text-slate-500 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Phase Framework */}
      <section className="relative z-10 py-20 px-4 sm:px-6" id="framework">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">The CandexAI Framework</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">4-Phase AI Adoption Model</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">Used by 20+ enterprises across 8 industries. From first idea to live production in 8 weeks.</p>
          </div>

          {/* Phase tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {PHASES.map((p,i)=>(
              <button key={p.num} onClick={()=>setActivePhase(i)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2"
                style={{ background:activePhase===i?p.color:"rgba(255,255,255,0.6)", backdropFilter:"blur(12px)", border:`1px solid ${activePhase===i?"transparent":"rgba(255,255,255,0.75)"}`, color:activePhase===i?"#fff":"#475569" }}>
                <span>{p.icon}</span> {p.phase}
              </button>
            ))}
          </div>

          {/* Phase content */}
          {(() => { const ph = PHASES[activePhase]; return (
            <div className="rounded-3xl overflow-hidden" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)", boxShadow:"0 20px 50px rgba(58,111,248,0.07)" }}>
              <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background:`${ph.color}18`, color:ph.color }}><Icon name={ph.icon} size={24} /></div>
                    <div>
                      <span className="text-xs font-bold text-slate-400">{ph.duration}</span>
                      <p className="font-bold text-slate-800 text-lg">{ph.phase}</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 leading-snug">{ph.headline}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8">{ph.body}</p>
                  <Link href="/schedule" className="inline-flex items-center gap-2 h-11 px-7 rounded-xl text-sm font-bold text-white" style={{ background:`linear-gradient(135deg,${ph.color},${ph.color}bb)` }}>
                    Start this phase →
                  </Link>
                </div>
                <div className="p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-white/50">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-5">Key deliverables</p>
                  <div className="space-y-3">
                    {ph.deliverables.map(d=>(
                      <div key={d} className="flex items-start gap-3 rounded-xl p-3" style={{ background:"rgba(58,111,248,0.04)" }}>
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background:`${ph.color}20`, border:`1.5px solid ${ph.color}40` }}>
                          <svg viewBox="0 0 12 12" className="w-3 h-3" style={{ stroke:ph.color }}><path d="M2 6l3 3 5-5" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <span className="text-slate-700 text-sm leading-relaxed">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ); })()}
        </div>
      </section>

      {/* Choose your AI type */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Choose Your AI Type</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">What kind of AI do you need?</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {FRAMEWORKS.map((f,i)=>(
              <button key={f.name} onClick={()=>setActiveFramework(i)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={{ background:activeFramework===i?"linear-gradient(135deg,#3A6FF8,#6ea0ff)":"rgba(255,255,255,0.6)", backdropFilter:"blur(12px)", border:`1px solid ${activeFramework===i?"transparent":"rgba(255,255,255,0.75)"}`, color:activeFramework===i?"#fff":"#475569" }}>
                <Icon name={f.icon} size={14} className="inline-block" /> {f.name}
              </button>
            ))}
          </div>
          <div className="rounded-3xl p-8 md:p-12" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)", color:"#fff" }}><Icon name={FRAMEWORKS[activeFramework].icon} size={22} /></div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{FRAMEWORKS[activeFramework].name}</h3>
                <p className="text-slate-700 font-semibold text-sm mb-4">Best for: {FRAMEWORKS[activeFramework].fit}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">This AI type works best when your team processes large volumes of repetitive inputs or interactions where accuracy and speed are both critical. CandexAI trains a dedicated expert model for your specific domain.</p>
                <Link href="/schedule" className="inline-flex items-center gap-2 h-11 px-7 rounded-xl text-sm font-bold text-white" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>
                  Explore {FRAMEWORKS[activeFramework].name} →
                </Link>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase mb-4">Example applications</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FRAMEWORKS[activeFramework].examples.map(ex=>(
                    <div key={ex} className="rounded-xl p-4 text-center" style={{ background:"rgba(58,111,248,0.06)", border:"1px solid rgba(58,111,248,0.12)" }}>
                      <p className="text-slate-700 text-sm font-medium">{ex}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop image */}
      <section className="relative z-10 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden" style={{ height:300 }}>
            <Image src="/images/strategy/workshop.jpg" alt="AI strategy workshop" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0" style={{ background:"linear-gradient(to right, rgba(10,18,35,0.75) 0%, rgba(10,18,35,0.3) 100%)" }} />
            <div className="absolute inset-0 flex items-center px-10 md:px-16">
              <div className="max-w-md">
                <p className="text-white font-bold text-2xl md:text-3xl leading-snug mb-3">"The enterprises winning with AI today designed their data strategy first."</p>
                <p className="text-slate-300 text-sm">— CandexAI Enterprise Strategy Report, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Avoid the Common Pitfalls</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">6 reasons enterprise AI projects fail</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MISTAKES.map((m,i)=>(
              <div key={m.title} className="p-7 rounded-2xl relative overflow-hidden" style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                <div className="absolute top-4 right-5 text-5xl font-black" style={{ color:"rgba(58,111,248,0.06)" }}>0{i+1}</div>
                <h3 className="font-bold text-slate-800 text-sm leading-snug mb-2 pr-8">{m.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Readiness checklist */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Self-Assessment</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Enterprise AI Readiness Checklist</h2>
            <p className="text-slate-500 mt-3">If you can check 80% of these, you&apos;re ready to start. If not — we can help you get there.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {READINESS_CHECKLIST.map(cat=>(
              <div key={cat.category} className="p-6 rounded-2xl" style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                <p className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg flex items-center justify-center text-white" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}><Icon name="check" size={13} /></span>
                  {cat.category}
                </p>
                <ul className="space-y-2">
                  {cat.items.map(item=>(
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-500 leading-snug">
                      <span className="w-3 h-3 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl px-10 py-10 sm:py-16" style={{ background:"linear-gradient(135deg,rgba(14,26,43,0.94) 0%,rgba(15,23,42,0.9) 100%)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-4">Let&apos;s Build Your Strategy</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">Get your free AI strategy session.</h2>
            <p className="text-slate-300 leading-relaxed mb-10">In 30 minutes, our team will map your top 3 AI opportunities, score your data readiness, and give you a concrete next step — at no cost.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/schedule" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors">Book a Free Session →</Link>
              <Link href="/customer-stories" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors">See Customer Stories</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
