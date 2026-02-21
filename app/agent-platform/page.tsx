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

const FEATURES = [
  {
    id:"orchestration", label:"Multi-Agent Orchestration",
    icon:"shuffle",
    headline:"Coordinate armies of AI agents that think, delegate, and execute together.",
    body:"CandexAI's orchestration layer lets you chain specialist agents — a research agent, a summariser, a compliance checker, a writer — into automated pipelines that handle complex enterprise tasks from end to end. All within your infrastructure.",
    stats:[["10x","Throughput vs single-agent"],["99.9%","Uptime SLA"],["<200ms","Agent-to-agent latency"],["Unlimited","Concurrent workflows"]],
    bullets:["Visual workflow builder — drag, connect, deploy","Automatic agent failover and retry","Human-in-the-loop checkpoints","Full audit log for every agent decision","Role-based access per agent or workflow"],
    href:"/features/multi-agent-orchestration",
    img:"/images/agent-platform/orchestration.jpg",
  },
  {
    id:"engineering", label:"AI Engineering Tools",
    icon:"settings",
    headline:"Build, fine-tune, and monitor domain-expert models with a complete MLOps suite.",
    body:"A full AI engineering workspace — dataset management, model fine-tuning, evaluation harnesses, A/B testing, and live performance dashboards — all within your private infrastructure. No third-party ML platforms needed.",
    stats:[["87%","Avg domain accuracy"],["5–8x","Cost reduction vs GPT-4"],["1 week","Fine-tune to production"],["100%","On-prem, no external APIs"]],
    bullets:["Domain-specific fine-tuning on your data","Automated evaluation and regression testing","Model versioning with instant rollback","Live token cost and accuracy dashboards","RLHF-ready feedback collection tools"],
    href:"/features/ai-engineering-tools",
    img:"/images/agent-platform/engineering.jpg",
  },
  {
    id:"search", label:"Search + Data AI",
    icon:"search",
    headline:"Enterprise search that understands your data, not just your keywords.",
    body:"Hybrid semantic + lexical search across all your structured and unstructured data sources — documents, databases, emails, CRMs — with AI-powered re-ranking, source citation, and hallucination prevention built in.",
    stats:[["94%","Retrieval precision"],["3 sec","Avg query response time"],["50+","Connectable data sources"],["Zero","Hallucinated citations"]],
    bullets:["Vector + BM25 hybrid retrieval","AI re-ranking with confidence scores","Automatic source attribution","PII-aware redaction in results","Real-time index updates"],
    href:"/features/search-data-ai",
    img:"/images/agent-platform/analytics.jpg",
  },
  {
    id:"tools", label:"No-Code + Pro-Code",
    icon:"wrench",
    headline:"Build AI applications without compromise — no matter your technical level.",
    body:"Business analysts use our visual no-code builder. Engineers use our full SDK and REST APIs. Both work on the same platform, share the same models, and deploy to the same secure infrastructure. No silos.",
    stats:[["60%","Faster time-to-deploy","vs custom builds"],["REST + SDK","API-first architecture"],["No-code","Visual workflow builder"],["Pro-code","Full Python + JS SDK"]],
    bullets:["Drag-and-drop agent workflow builder","Full-featured REST API + webhooks","Python SDK with 200+ methods","SSO, RBAC, and audit logs built in","One-click deploy to your cloud or on-prem"],
    href:"/features/no-code-pro-code",
    img:"/images/agent-platform/hero.jpg",
  },
];

const PLATFORM_STATS = [
  { v:"99.9%", l:"Uptime SLA" },
  { v:"<200ms", l:"Agent response latency" },
  { v:"50+", l:"Native integrations" },
  { v:"100%", l:"Data stays in your infra" },
];

const HOW_IT_WORKS = [
  { step:"01", title:"Connect your data", body:"Point CandexAI at your document stores, databases, CRM, and communication tools. Our ingestion pipeline handles the rest — cleaning, chunking, indexing." },
  { step:"02", title:"Train your expert model", body:"We fine-tune a domain-specific model on your data. Smaller, faster, more accurate than a generic LLM. Your proprietary knowledge is baked in." },
  { step:"03", title:"Build your AI workflows", body:"Use our visual builder or SDK to assemble agents into workflows. Automated pipelines. Human checkpoints where you want them. Full audit trails." },
  { step:"04", title:"Deploy to your infrastructure", body:"Ship to your private cloud, on-prem datacenter, or air-gapped environment. Zero data leaves your network. You own everything, forever." },
];

export default function AgentPlatformPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="relative min-h-screen">
      <PageBg />
      <Header />

      {/* Hero */}
      <section className="relative z-10 pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-6" style={{ background:"rgba(58,111,248,0.08)", border:"1px solid rgba(58,111,248,0.2)", letterSpacing:"0.07em" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> AGENT PLATFORM
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight tracking-tight mb-6">
              Your strategic enabler<br /><span style={{ color:"#3A6FF8" }}>for enterprise AI.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
              One platform. Four powerful capabilities. End-to-end enterprise AI — from raw data to production-grade agents — deployed entirely within your infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/schedule" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-bold text-white" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>
                Start Your AI Project →
              </Link>
              <Link href="/customer-stories" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-semibold text-slate-700" style={{ background:"rgba(255,255,255,0.7)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                View Customer Stories
              </Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden" style={{ height:400 }}>
            <Image src="/images/agent-platform/hero.jpg" priority alt="CandexAI Agent Platform" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(10,18,35,0.6) 0%, transparent 55%)" }} />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-bold text-lg leading-snug">Built for enterprises that refuse to compromise on privacy, accuracy, or control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform stats */}
      <section className="relative z-10 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {PLATFORM_STATS.map(s=>(
            <div key={s.l} className="rounded-2xl p-5 text-center" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
              <p className="text-3xl font-bold text-slate-800">{s.v}</p>
              <p className="text-xs text-slate-500 mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features showcase — customer-stories style */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Platform Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Four capabilities. One platform.</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">Click any capability to explore what it does, how it works, and what it delivers.</p>
          </div>

          {/* Feature filter tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {FEATURES.map((f,i)=>(
              <button key={f.id} onClick={()=>setActiveFeature(i)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2"
                style={{ background:activeFeature===i?"linear-gradient(135deg,#3A6FF8,#6ea0ff)":"rgba(255,255,255,0.6)", backdropFilter:"blur(12px)", border:`1px solid ${activeFeature===i?"transparent":"rgba(255,255,255,0.75)"}`, color:activeFeature===i?"#fff":"#475569" }}>
                <Icon name={f.icon} size={16} /> {f.label}
              </button>
            ))}
          </div>

          {/* Feature cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {FEATURES.map((f,i)=>(
              <button key={f.id} onClick={()=>setActiveFeature(i)} className="text-left rounded-2xl p-6 transition-transform hover:-translate-y-1"
                style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:`1.5px solid ${activeFeature===i?"rgba(58,111,248,0.5)":"rgba(255,255,255,0.75)"}`, boxShadow:activeFeature===i?"0 0 0 3px rgba(58,111,248,0.15)":"0 8px 24px rgba(58,111,248,0.04)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background:"rgba(58,111,248,0.1)", color:"#3A6FF8" }}><Icon name={f.icon} size={18} /></div>
                <p className="font-bold text-slate-800 text-sm mb-2">{f.label}</p>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{f.body.substring(0,110)}...</p>
              </button>
            ))}
          </div>

          {/* Expanded feature detail */}
          {(() => { const f = FEATURES[activeFeature]; return (
            <div className="rounded-3xl overflow-hidden" style={{ background:"rgba(255,255,255,0.65)", backdropFilter:"blur(10px)", border:"1.5px solid rgba(255,255,255,0.75)", boxShadow:"0 24px 64px rgba(58,111,248,0.1)" }}>
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 relative" style={{ minHeight:320 }}>
                  <Image src={f.img} alt={f.label} fill className="object-cover" sizes="40vw" />
                  <div className="absolute inset-0" style={{ background:"linear-gradient(to right, transparent 40%, rgba(255,255,255,0.9) 100%)" }} />
                </div>
                <div className="lg:col-span-3 p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)", color:"#fff" }}><Icon name={f.icon} size={22} /></div>
                    <div>
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Platform Feature</span>
                      <p className="font-bold text-slate-800 text-lg">{f.label}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 leading-snug">{f.headline}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{f.body}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {f.stats.slice(0,4).map((s)=>(
                      <div key={String(s[0])} className="rounded-xl p-3 text-center" style={{ background:"rgba(58,111,248,0.07)" }}>
                        <p className="font-bold text-slate-800 text-base">{s[0]}</p>
                        <p className="text-slate-500 text-[10px] mt-0.5 leading-snug">{s[1]}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {f.bullets.map(b=>(
                      <div key={b} className="flex items-start gap-2 text-xs text-slate-600">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background:"rgba(58,111,248,0.1)" }}>
                          <svg viewBox="0 0 12 12" className="w-2.5 h-2.5"><path d="M2 6l3 3 5-5" stroke="#3A6FF8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        {b}
                      </div>
                    ))}
                  </div>
                  <Link href={f.href} className="inline-flex items-center gap-2 h-11 px-7 rounded-xl text-sm font-bold text-white" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>
                    Explore {f.label} →
                  </Link>
                </div>
              </div>
            </div>
          ); })()}
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Under the Hood</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">How the platform works</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map((h,i)=>(
              <div key={h.step} className="p-7 rounded-2xl relative" style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                <div className="text-6xl font-black absolute top-4 right-5" style={{ color:"rgba(58,111,248,0.07)" }}>0{i+1}</div>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-white text-xs font-bold mb-4" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>{h.step}</span>
                <h3 className="font-bold text-slate-800 mb-2">{h.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Why CandexAI vs the Alternatives</p>
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Not all AI platforms are equal</h2>
          </div>
          <div className="rounded-3xl overflow-hidden" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom:"1px solid rgba(148,163,184,0.2)" }}>
                    <th className="p-5 text-left text-slate-500 font-medium">Capability</th>
                    <th className="p-5 text-center text-slate-700 font-bold">CandexAI</th>
                    <th className="p-5 text-center text-slate-400 font-medium">Generic LLM API</th>
                    <th className="p-5 text-center text-slate-400 font-medium">Off-shelf AI SaaS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Data stays in your infra","Yes","No","No"],
                    ["Domain-expert accuracy","87–94%","60–75%","65–78%"],
                    ["Full IP ownership","Yes","No","No"],
                    ["Air-gapped deployment","Yes","No","No"],
                    ["Multi-agent orchestration","Yes","Limited","No"],
                    ["Custom fine-tuning","Yes","Expensive","No"],
                    ["Production in 8 weeks","Yes","3–6 months","6–12 months"],
                    ["Cost per 1K tokens","$0.10–0.15","$1.00–2.00","$0.50–1.50"],
                  ].map(([cap,...vals],i)=>(
                    <tr key={String(cap)} style={{ borderBottom:i<7?"1px solid rgba(148,163,184,0.1)":"none" }}>
                      <td className="p-5 text-slate-600 font-medium">{cap}</td>
                      {vals.map((v,j)=>(
                        <td key={j} className="p-5 text-center" style={{ color:j===0?"#3A6FF8":"#94a3b8", fontWeight:j===0?"bold":"normal" }}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl px-10 py-10 sm:py-16" style={{ background:"linear-gradient(135deg,rgba(14,26,43,0.94) 0%,rgba(15,23,42,0.9) 100%)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-4">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">See the platform in action.</h2>
            <p className="text-slate-300 leading-relaxed mb-10">Book a 30-minute technical demo and see how the CandexAI Agent Platform can be configured for your specific use case.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/schedule" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors">Request a Demo →</Link>
              <Link href="/features/multi-agent-orchestration" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors">Explore Features</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
