"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function PageBg() {
  return (
    <div className="fixed-bg-layer" aria-hidden>
      <div className="gradient-bg-base absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-25" />
    </div>
  );
}

const INDUSTRIES = ["All","BFSI","Healthcare","Legal","Retail","Government"];

const STORIES = [
  {
    id:1, industry:"BFSI", tag:"Banking & Finance",
    title:"Leading Private Bank Cuts Compliance Review Time by 78%",
    teaser:"A top-10 Indian private bank deployed CandexAI's document AI across 400+ branches to automate KYC extraction, contract review, and regulatory reporting.",
    img:"/images/stories/finance.jpg",
    challenge:"Compliance officers were spending 6–8 hours daily reviewing loan documents, KYC submissions, and regulatory filings — entirely manual, error-prone, and expensive.",
    solution:"CandexAI trained a domain-expert document model on 3 years of the bank's own document corpus. Deployed air-gapped within their private cloud, it ingests, classifies, extracts, and flags regulatory issues in real-time.",
    metrics:[["78%","Reduction in review time"],["94%","Extraction accuracy"],["₹12Cr","Annual savings"],["6 wks","To deployment"]],
    quote:"CandexAI understood our regulatory constraints better than any vendor we\u2019ve evaluated. The model was live in 6 weeks.",
    quoteName:"CIO, Leading Private Bank",
  },
  {
    id:2, industry:"Healthcare", tag:"Healthcare & Pharma",
    title:"Hospital Chain Automates Clinical Documentation Across 18 Facilities",
    teaser:"A 4,000-bed hospital network deployed Voice AI to transcribe and structure physician notes in real-time — reducing documentation time by 70% per patient.",
    img:"/images/stories/healthcare.jpg",
    challenge:"Physicians were spending 35% of their working hours on documentation. Burnout was high, patient throughput was limited, and inconsistent records were causing downstream billing errors.",
    solution:"CandexAI's Voice AI model, trained on clinical transcripts in Hindi and English, captures structured SOAP notes from natural physician speech. Integrated with the hospital's existing EMR via secure API.",
    metrics:[["70%","Reduction in doc time"],["99.2%","Transcription accuracy"],["18","Facilities live"],["4.2x","More patients/day"]],
    quote:"Our doctors are spending time with patients again. The model understands medical terminology better than any transcription tool we\u2019ve tried.",
    quoteName:"Medical Director, Hospital Network",
  },
  {
    id:3, industry:"Legal", tag:"Legal & Compliance",
    title:"Big-4 Law Firm Deploys AI Contract Intelligence for 200+ Lawyers",
    teaser:"One of India's fastest-growing law firms automated contract drafting, clause extraction, and risk scoring — reducing junior associate workload by 60%.",
    img:"/images/stories/legal.jpg",
    challenge:"Junior lawyers were spending 70% of their time on first-draft contracts, standard clause matching, and deadline tracking — high-cost work that could be automated.",
    solution:"CandexAI built a legal-expert model fine-tuned on the firm's 10-year contract library. The model drafts, extracts, compares, and risk-scores contracts. Air-gapped. Client-confidential by design.",
    metrics:[["60%","Associate time saved"],["3 min","Avg contract review"],["8.9/10","Lawyer satisfaction"],["100%","On-premise"]],
    quote:"We reviewed 340 contracts last quarter with the same team that used to handle 120. The ROI paid for the system in 11 weeks.",
    quoteName:"Managing Partner, Law Firm",
  },
  {
    id:4, industry:"Retail", tag:"Retail & e-Commerce",
    title:"D2C Brand Scales Customer Support to 1M Queries/Month Without Hiring",
    teaser:"A high-growth D2C retail brand deployed CandexAI's conversational AI across WhatsApp, website, and email — handling 94% of queries without human escalation.",
    img:"/images/stories/retail.jpg",
    challenge:"Customer queries were growing 40% QoQ while the support team was capped. CSAT was dropping. Hiring was expensive. Generic chatbots hallucinated product details constantly.",
    solution:"CandexAI trained a brand-specific AI agent on the company's product catalogue, return policy, and 2 years of support logs. The agent resolves queries, processes returns, and escalates complex issues intelligently.",
    metrics:[["94%","Queries resolved autonomously"],["4.6/5","CSAT score"],["1M+","Monthly queries handled"],["65%","Support cost reduction"]],
    quote:"Our customers think they\u2019re talking to our best support agent. In reality, it\u2019s CandexAI running 24/7 with zero hallucinations.",
    quoteName:"Head of CX, D2C Retail Brand",
  },
  {
    id:5, industry:"Government", tag:"Government & PSU",
    title:"State Government Transforms Citizen Grievance Resolution with AI",
    teaser:"A state government deployed CandexAI's multilingual AI to process, classify, and route 2 lakh+ citizen grievances per month across 18 departments.",
    img:"/images/stories/government.jpg",
    challenge:"Citizen grievances were routed manually, leading to 45-day average resolution times, misfiling, and high drop-off rates. Grievances were in 4 languages. Staff were overwhelmed.",
    solution:"CandexAI's NLP model, trained on the state's grievance corpus in Hindi, English, Marathi, and Rajasthani, auto-classifies, prioritizes, and routes grievances with AI-suggested response drafts. 100% on-premise with no external API access.",
    metrics:[["87%","Reduction in resolution time"],["4 languages","Supported natively"],["2L+","Grievances/month"],["Zero","Data leaving the network"]],
    quote:"This is the first AI deployment in our state that actually addressed our data sovereignty requirements. Citizens are noticing the difference.",
    quoteName:"Secretary, IT Department",
  },
  {
    id:6, industry:"BFSI", tag:"Insurance",
    title:"InsurTech Platform Cuts Claims Processing from Days to Minutes",
    teaser:"A fast-growing insurance platform deployed CandexAI document AI to process motor, health, and property claims — reducing average processing time from 3 days to 11 minutes.",
    img:"/images/stories/finance.jpg",
    challenge:"Claims adjusters were manually reviewing thousands of documents — hospital bills, FIRs, vehicle inspection reports — leading to high TAT, fraud exposure, and customer churn.",
    solution:"CandexAI trained a claims-intelligence model on 5 years of claim records. The model extracts, validates, cross-checks, and scores claims. Suspicious patterns trigger human review. Clean claims are auto-approved.",
    metrics:[["98%","Straight-through processing rate"],["11 min","Avg claims resolution"],["₹8Cr","Fraud detected (Yr 1)"],["4.8/5","Policyholder NPS"]],
    quote:"What used to take 3 days now takes 11 minutes. Our adjusters handle exceptions, not data entry. That\u2019s how it should be.",
    quoteName:"VP Operations, Insurance Platform",
  },
];

const OUTCOMES = [
  { value:"94%", label:"Avg query resolution rate" },
  { value:"78%", label:"Avg time savings" },
  { value:"8 wks", label:"Avg deployment time" },
  { value:"100%", label:"On-premise all deployments" },
];

export default function CustomerStoriesPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<null|number>(null);
  const shown = filter==="All" ? STORIES : STORIES.filter(s=>s.industry===filter);
  const active = selected !== null ? STORIES.find(s=>s.id===selected) : null;

  return (
    <div className="relative min-h-screen">
      <PageBg />
      <Header />

      {/* Hero */}
      <section className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-6" style={{ background:"rgba(58,111,248,0.08)", border:"1px solid rgba(58,111,248,0.2)", letterSpacing:"0.07em" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> CUSTOMER STORIES
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight tracking-tight mb-5">
            Real results from<br /><span style={{ color:"#3A6FF8" }}>real enterprises.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Every CandexAI deployment is unique, but the outcomes are consistent — faster processes, lower costs, and AI that enterprises actually trust.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {OUTCOMES.map(o=>(
              <div key={o.label} className="rounded-2xl p-4" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                <p className="text-2xl font-bold text-slate-800">{o.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="relative z-10 pb-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {INDUSTRIES.map(ind=>(
            <button key={ind} onClick={()=>setFilter(ind)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{ background:filter===ind?"linear-gradient(135deg,#3A6FF8,#6ea0ff)":"rgba(255,255,255,0.6)", backdropFilter:"blur(12px)", border:`1px solid ${filter===ind?"transparent":"rgba(255,255,255,0.75)"}`, color:filter===ind?"#fff":"#475569" }}>
              {ind}
            </button>
          ))}
        </div>
      </section>

      {/* Story grid */}
      <section className="relative z-10 py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map(s=>(
            <button key={s.id} onClick={()=>setSelected(selected===s.id?null:s.id)}
              className="text-left rounded-3xl overflow-hidden transition-transform hover:-translate-y-1"
              style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:`1.5px solid ${selected===s.id?"rgba(58,111,248,0.5)":"rgba(255,255,255,0.75)"}`, boxShadow:selected===s.id?"0 0 0 3px rgba(58,111,248,0.15), 0 20px 40px rgba(58,111,248,0.1)":"0 8px 30px rgba(58,111,248,0.05)" }}>
              <div className="relative h-44 w-full overflow-hidden">
                <Image src={s.img} alt={s.tag} fill className="object-cover" sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" />
                <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(10,18,35,0.5) 0%, transparent 60%)" }} />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background:"rgba(58,111,248,0.75)", backdropFilter:"blur(8px)" }}>{s.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-slate-800 text-base leading-snug mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.teaser}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {s.metrics.slice(0,2).map(([v,l])=>(
                    <div key={l} className="rounded-lg p-2 text-center" style={{ background:"rgba(58,111,248,0.06)" }}>
                      <p className="font-bold text-slate-800 text-sm">{v}</p>
                      <p className="text-slate-500 text-[10px]">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Expanded story panel */}
      {active && (
        <section className="relative z-10 py-10 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden" style={{ background:"rgba(255,255,255,0.65)", backdropFilter:"blur(10px)", border:"1.5px solid rgba(255,255,255,0.75)", boxShadow:"0 24px 64px rgba(58,111,248,0.1)" }}>
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 relative" style={{ minHeight:320 }}>
                  <Image src={active.img} alt={active.tag} fill className="object-cover" sizes="40vw" />
                  <div className="absolute inset-0" style={{ background:"linear-gradient(to right, rgba(10,18,35,0.4) 0%, transparent 100%)" }} />
                </div>
                <div className="lg:col-span-3 p-8 md:p-12">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">{active.tag}</span>
                  <h2 className="text-2xl font-bold text-slate-800 mt-2 mb-6 leading-snug">{active.title}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    {active.metrics.map(([v,l])=>(
                      <div key={l} className="rounded-xl p-3 text-center" style={{ background:"rgba(58,111,248,0.07)" }}>
                        <p className="text-xl font-bold text-slate-800">{v}</p>
                        <p className="text-slate-500 text-[10px] mt-0.5 leading-snug">{l}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-2">Challenge</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{active.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-2">Solution</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{active.solution}</p>
                    </div>
                  </div>
                  <blockquote className="rounded-xl p-5 mb-6" style={{ background:"rgba(58,111,248,0.06)", borderLeft:"3px solid rgba(58,111,248,0.5)" }}>
                    <p className="text-slate-600 text-sm italic leading-relaxed mb-2">{active.quote}</p>
                    <p className="text-xs font-semibold text-slate-700">— {active.quoteName}</p>
                  </blockquote>
                  <Link href="/schedule" className="inline-flex items-center gap-2 h-11 px-7 rounded-xl text-sm font-bold text-white" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>
                    Replicate these results →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl px-10 py-10 sm:py-16" style={{ background:"linear-gradient(135deg,rgba(14,26,43,0.94) 0%,rgba(15,23,42,0.9) 100%)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-4">Your Story Starts Here</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">Become our next success story.</h2>
            <p className="text-slate-300 leading-relaxed mb-10">Every client started with a single conversation. Let&apos;s explore what&apos;s possible for your business in 30 minutes.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/schedule" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors">Schedule a Demo →</Link>
              <Link href="/enterprise-strategy" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors">Enterprise Strategy</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
