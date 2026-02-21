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

const TECH_INTEGRATIONS = [
  { name:"Slack",       slug:"slack",          color:"#4A154B" },
  { name:"WhatsApp",    slug:"whatsapp",        color:"#25D366" },
  { name:"Gmail",       slug:"gmail",           color:"#EA4335" },
  { name:"Google Drive",slug:"googledrive",     color:"#4285F4" },
  { name:"Meta",        slug:"meta",            color:"#0866FF" },
  { name:"MS Teams",    slug:"microsoftteams",  color:"#6264A7" },
  { name:"Salesforce",  slug:"salesforce",      color:"#00A1E0" },
  { name:"HubSpot",     slug:"hubspot",         color:"#FF7A59" },
  { name:"Notion",      slug:"notion",          color:"#000000" },
  { name:"Stripe",      slug:"stripe",          color:"#635BFF" },
  { name:"OpenAI",      slug:"openai",          color:"#412991" },
  { name:"Twilio",      slug:"twilio",          color:"#F22F46" },
  { name:"Zapier",      slug:"zapier",          color:"#FF4A00" },
  { name:"AWS",         slug:"amazonaws",       color:"#FF9900" },
  { name:"Perplexity",  slug:"perplexity",      color:"#20808D" },
  { name:"Anthropic",   slug:"anthropic",       color:"#D97757" },
  { name:"Jira",        slug:"jira",            color:"#0052CC" },
  { name:"GitHub",      slug:"github",          color:"#181717" },
  { name:"PostgreSQL",  slug:"postgresql",      color:"#4169E1" },
  { name:"MongoDB",     slug:"mongodb",         color:"#47A248" },
];

const PARTNER_TYPES = [
  {
    type:"Technology Partners",
    icon:"link",
    desc:"Best-in-class tools that CandexAI natively integrates with out of the box — no custom connectors required.",
    benefits:["Pre-built integration modules","Dedicated partner engineering","Co-marketing opportunities","Joint solution briefs"],
  },
  {
    type:"Consulting Partners",
    icon:"layers",
    desc:"Systems integrators and consulting firms who embed CandexAI into enterprise transformation programmes.",
    benefits:["Reseller margins up to 30%","Priority deal registration","Dedicated partner success manager","Joint GTM campaigns"],
  },
  {
    type:"Referral Partners",
    icon:"megaphone",
    desc:"Independent advisors and coaches who recommend CandexAI and earn revenue for every successful introduction.",
    benefits:["Competitive referral fees","Deal tracking dashboard","Partner community access","CandexAI Academy certification"],
  },
];

const CONSULTING_PARTNERS = [
  { name:"TechBridge Consulting", focus:"BFSI & Compliance AI", region:"India & SEA", initials:"TB" },
  { name:"Nexus Digital Partners", focus:"Healthcare AI Transformation", region:"Pan-India", initials:"ND" },
  { name:"Acuity Systems", focus:"Government & PSU Deployments", region:"North India", initials:"AS" },
  { name:"DataMind Advisory", focus:"Retail & Supply Chain AI", region:"Mumbai & Pune", initials:"DM" },
  { name:"Vertex Innovations", focus:"Legal & Contract Intelligence", region:"Bengaluru & Delhi", initials:"VI" },
  { name:"Cloudtek Solutions", focus:"Manufacturing Process AI", region:"Gujarat & Maharashtra", initials:"CS" },
];

const PROGRAM_TIERS = [
  { tier:"Referral", color:"#64748b", req:"No revenue commitment", margins:"8% referral fee", support:"Email support", training:"Self-serve academy" },
  { tier:"Registered", color:"#3A6FF8", req:"2 active client intros/quarter", margins:"15% referral fee", support:"Dedicated partner desk", training:"Quarterly webinars" },
  { tier:"Premier", color:"#7c3aed", req:"₹50L ARR generated", margins:"25% reseller margin", support:"Named partner success mgr", training:"Onsite training + certifications" },
];

export default function PartnersPage() {
  const [activeType, setActiveType] = useState(0);

  return (
    <div className="relative min-h-screen">
      <PageBg />
      <Header />

      {/* Hero */}
      <section className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-6" style={{ background:"rgba(58,111,248,0.08)", border:"1px solid rgba(58,111,248,0.2)", letterSpacing:"0.07em" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> PARTNER ECOSYSTEM
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight tracking-tight mb-5">
            Build the future of<br /><span style={{ color:"#3A6FF8" }}>enterprise AI together.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Join the CandexAI partner ecosystem — whether you&apos;re a SaaS platform, systems integrator, or independent advisor.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/schedule" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-bold text-white" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>Become a Partner →</Link>
            <a href="#technology" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-semibold text-slate-700" style={{ background:"rgba(255,255,255,0.7)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.75)" }}>
              See Integrations
            </a>
          </div>
        </div>
      </section>

      {/* Partner type selector */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Partnership Models</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Find your partnership model</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {PARTNER_TYPES.map((p,i)=>(
              <button key={p.type} onClick={()=>setActiveType(i)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={{ background:activeType===i?"linear-gradient(135deg,#3A6FF8,#6ea0ff)":"rgba(255,255,255,0.6)", backdropFilter:"blur(12px)", border:`1px solid ${activeType===i?"transparent":"rgba(255,255,255,0.75)"}`, color:activeType===i?"#fff":"#475569" }}>
                <Icon name={p.icon} size={14} className="inline-block" /> {p.type}
              </button>
            ))}
          </div>
          <div className="rounded-3xl p-8 md:p-12" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)", boxShadow:"0 20px 50px rgba(58,111,248,0.07)" }}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)", color:"#fff" }}><Icon name={PARTNER_TYPES[activeType].icon} size={22} /></div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{PARTNER_TYPES[activeType].type}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{PARTNER_TYPES[activeType].desc}</p>
                <Link href="/schedule" className="inline-flex items-center gap-2 h-11 px-7 rounded-xl text-sm font-bold text-white" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>
                  Apply Now →
                </Link>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-400 uppercase mb-4">What you get</p>
                {PARTNER_TYPES[activeType].benefits.map(b=>(
                  <div key={b} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background:"rgba(58,111,248,0.06)" }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>
                      <svg viewBox="0 0 12 12" className="w-3 h-3 fill-white"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-slate-700 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology integrations */}
      <section className="relative z-10 py-16 px-4 sm:px-6" id="technology">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Integrations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight mb-3">Works with your existing stack</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">20+ native integrations. No middleware. No custom connectors. Just connect and deploy.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3">
            {TECH_INTEGRATIONS.map(t=>(
              <div key={t.name} className="flex flex-col items-center gap-2 p-3 rounded-2xl transition-transform hover:-translate-y-1" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center" style={{ background:`${t.color}15` }}>
                  <Image src={`/images/integrations/${t.slug}.svg`} alt={t.name} width={28} height={28} className="object-contain" />
                </div>
                <span className="text-[9px] font-semibold text-slate-600 text-center leading-tight">{t.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-6">+ More integrations via REST API, webhooks, and custom connectors</p>
        </div>
      </section>

      {/* Consulting partners */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Consulting Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Our trusted SI partners</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONSULTING_PARTNERS.map(p=>(
              <div key={p.name} className="p-6 rounded-2xl flex gap-4 items-start" style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>{p.initials}</div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{p.name}</p>
                  <p className="text-xs text-slate-700 font-semibold mt-0.5">{p.focus}</p>
                   <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><Icon name="pin" size={11} /> {p.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program tiers */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Partner Program</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Grow with us at every stage</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm rounded-2xl overflow-hidden" style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
              <thead>
                <tr style={{ borderBottom:"1px solid rgba(148,163,184,0.2)" }}>
                  <th className="p-5 text-left text-slate-400 font-semibold">Tier</th>
                  <th className="p-5 text-left text-slate-400 font-semibold">Requirement</th>
                  <th className="p-5 text-left text-slate-400 font-semibold">Earnings</th>
                  <th className="p-5 text-left text-slate-400 font-semibold">Support</th>
                  <th className="p-5 text-left text-slate-400 font-semibold">Training</th>
                </tr>
              </thead>
              <tbody>
                {PROGRAM_TIERS.map((t,i)=>(
                  <tr key={t.tier} style={{ borderBottom:i<PROGRAM_TIERS.length-1?"1px solid rgba(148,163,184,0.15)":"none" }}>
                    <td className="p-5">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background:t.color }}>
                        {t.tier}
                      </span>
                    </td>
                    <td className="p-5 text-slate-600">{t.req}</td>
                    <td className="p-5 text-slate-600">{t.margins}</td>
                    <td className="p-5 text-slate-600">{t.support}</td>
                    <td className="p-5 text-slate-600">{t.training}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl px-10 py-10 sm:py-16" style={{ background:"linear-gradient(135deg,rgba(14,26,43,0.94) 0%,rgba(15,23,42,0.9) 100%)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-4">Let&apos;s Grow Together</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">Ready to partner with CandexAI?</h2>
            <p className="text-slate-300 leading-relaxed mb-10">Whether you&apos;re a startup or an enterprise, there&apos;s a place for you in the CandexAI ecosystem. Let&apos;s build something great together.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/schedule" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors">Apply to Partner Program →</Link>
              <Link href="/about" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors">About CandexAI</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
