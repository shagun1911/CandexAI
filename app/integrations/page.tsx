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

type Integration = {
  name: string; slug: string; color: string; category: string;
  desc: string; features: string[];
};

const INTEGRATIONS: Integration[] = [
  { name:"Slack",          slug:"slack",          color:"#4A154B", category:"Communication",
    desc:"Deploy AI agents directly inside Slack channels. Answer employee questions, route requests, and trigger workflows — all within the apps your team already uses.",
    features:["Slash command support","/ask-ai in any channel","Thread-aware context","Admin controls per workspace"] },
  { name:"WhatsApp",       slug:"whatsapp",       color:"#25D366", category:"Communication",
    desc:"Run 24/7 customer-facing AI agents on WhatsApp Business API. Handle queries, process orders, and collect documents — all secured within your infrastructure.",
    features:["WhatsApp Business API","Multi-language support","Rich media handling","End-to-end encrypted messaging"] },
  { name:"MS Teams",       slug:"microsoftteams", color:"#6264A7", category:"Communication",
    desc:"Embed CandexAI agents into Microsoft Teams for enterprise internal use. HR bots, IT helpdesks, and knowledge assistants — fully integrated with your AD directory.",
    features:["Native Teams app","Azure AD / SSO integration","Adaptive Cards support","Meeting transcription ready"] },
  { name:"Gmail",          slug:"gmail",          color:"#EA4335", category:"Productivity",
    desc:"Process inbound email with AI — classify, extract, respond, and route automatically. Works with Gmail, Outlook, and any IMAP/SMTP provider.",
    features:["Smart email classification","Auto-draft responses","Attachment extraction","Multi-inbox routing"] },
  { name:"Google Drive",   slug:"googledrive",    color:"#4285F4", category:"Productivity",
    desc:"Index and search all your Google Drive documents with CandexAI's semantic search. Ask questions and get cited answers directly from your Drive files.",
    features:["Real-time Drive sync","Full document indexing","Permission-aware search","Shared Drive support"] },
  { name:"Notion",         slug:"notion",         color:"#000000", category:"Productivity",
    desc:"Search, summarise, and update your Notion workspace with AI. Create pages, query databases, and surface relevant knowledge — entirely within your security boundary.",
    features:["Full workspace indexing","Database query support","Page creation via AI","Block-level citations"] },
  { name:"HubSpot",        slug:"hubspot",        color:"#FF7A59", category:"CRM & Sales",
    desc:"Enrich contacts, summarise deal histories, draft outreach, and auto-log meeting notes — all powered by AI trained on your sales corpus. No data leaves HubSpot.",
    features:["Contact enrichment","Deal summary AI","Auto-log call notes","Sequence drafting"] },
  { name:"Salesforce",     slug:"salesforce",     color:"#00A1E0", category:"CRM & Sales",
    desc:"AI-powered CRM intelligence inside Salesforce. Surface next best actions, generate account summaries, and automate data hygiene tasks with an expert sales model.",
    features:["Einstein-compatible","Opportunity scoring","Auto-fill field suggestions","APEX SDK support"] },
  { name:"Stripe",         slug:"stripe",         color:"#635BFF", category:"Payments",
    desc:"Integrate CandexAI document AI with your Stripe billing — automate invoice queries, payment dispute analysis, and chargeback documentation entirely on your server.",
    features:["Invoice Q&A agent","Dispute documentation","Refund policy AI","Webhook-triggered flows"] },
  { name:"GitHub",         slug:"github",         color:"#181717", category:"Engineering",
    desc:"AI code review, PR summarisation, issue triage, and documentation generation. Runs entirely within your GitHub Enterprise — no code leaves your organisation.",
    features:["PR auto-review","Issue classification","Commit summarisation","Doc generation from code"] },
  { name:"Jira",           slug:"jira",           color:"#0052CC", category:"Engineering",
    desc:"Triage issues, summarise epics, auto-generate tickets from meeting notes, and answer team questions about sprint progress — all AI-powered within your Jira instance.",
    features:["Smart issue triage","Sprint summarisation","Ticket creation from notes","Velocity Q&A"] },
  { name:"AWS",            slug:"amazonaws",      color:"#FF9900", category:"Infrastructure",
    desc:"Deploy CandexAI natively on AWS — EC2, ECS, EKS, or Lambda. Use S3 for document storage, RDS for agent state, and CloudWatch for monitoring. All within your VPC.",
    features:["VPC-native deployment","S3 document ingestion","EKS / ECS support","CloudWatch integration"] },
  { name:"OpenAI",         slug:"openai",         color:"#412991", category:"AI Models",
    desc:"Use OpenAI models as a fallback or for specific tasks while keeping your primary inference private. CandexAI's router intelligently selects the best model per query.",
    features:["Hybrid routing support","Cost-optimised fallback","Private-first architecture","Per-query model selection"] },
  { name:"Anthropic",      slug:"anthropic",      color:"#D97757", category:"AI Models",
    desc:"Integrate Claude models for tasks where constitutional AI principles matter — long-form reasoning, code generation, and safety-critical workflows — alongside your private models.",
    features:["Claude 3 / 3.5 support","Constitutional AI tasks","Long-context documents","Code generation fallback"] },
  { name:"Perplexity",     slug:"perplexity",     color:"#20808D", category:"AI Models",
    desc:"Add real-time web search capability to your CandexAI agents using Perplexity's search API — giving agents access to current information while keeping internal data private.",
    features:["Real-time web grounding","Source-cited answers","Configurable search scope","Private + public hybrid"] },
  { name:"Zapier",         slug:"zapier",         color:"#FF4A00", category:"Automation",
    desc:"Connect CandexAI to 7,000+ apps via Zapier. Trigger AI workflows from any app event, or push AI outputs to downstream tools — without writing a line of code.",
    features:["7,000+ app connectors","Webhook triggers","Multi-step Zap support","No-code configuration"] },
  { name:"Twilio",         slug:"twilio",         color:"#F22F46", category:"Communication",
    desc:"Power SMS, WhatsApp, and voice call AI experiences via Twilio. CandexAI agents handle inbound calls, send intelligent SMS responses, and route to human agents when needed.",
    features:["Voice call AI routing","SMS AI responses","IVR replacement","Call transcript AI"] },
  { name:"Meta",           slug:"meta",           color:"#0866FF", category:"Communication",
    desc:"Deploy AI agents on Instagram DM, Facebook Messenger, and WhatsApp Business — serving customers across Meta platforms with a single CandexAI agent backend.",
    features:["Messenger AI support","Instagram DM agent","Cross-platform context","Meta Business API"] },
  { name:"PostgreSQL",     slug:"postgresql",     color:"#4169E1", category:"Data",
    desc:"Give your AI agents live read/write access to PostgreSQL databases. Natural language queries, automated data extraction, and AI-generated SQL — all within your DB perimeter.",
    features:["Natural language to SQL","Read + write access","Schema-aware responses","Row-level security honoured"] },
  { name:"MongoDB",        slug:"mongodb",        color:"#47A248", category:"Data",
    desc:"Connect MongoDB collections to CandexAI for document intelligence and semantic search across unstructured data. AI agents query, aggregate, and reason over your MongoDB data.",
    features:["Collection indexing","Vector search support","Aggregation pipeline AI","Atlas-compatible"] },
];

const CATEGORIES = ["All", "Communication", "Productivity", "CRM & Sales", "Engineering", "AI Models", "Infrastructure", "Automation", "Data", "Payments"];

export default function IntegrationsPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const shown = filter === "All" ? INTEGRATIONS : INTEGRATIONS.filter(i => i.category === filter);
  const active = selected ? INTEGRATIONS.find(i => i.slug === selected) : null;

  return (
    <div className="relative min-h-screen">
      <PageBg />
      <Header />

      {/* Hero */}
      <section className="relative z-10 pt-28 pb-14 md:pt-36 md:pb-18 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-6" style={{ background:"rgba(58,111,248,0.08)", border:"1px solid rgba(58,111,248,0.2)", letterSpacing:"0.07em" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> INTEGRATIONS
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight tracking-tight mb-5">
            Works with your<br /><span style={{ color:"#3A6FF8" }}>entire stack.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
            20+ native integrations — communication, CRM, data, AI models, and infrastructure. Connect CandexAI to your existing tools in minutes, not months.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[["20+","Native integrations"],["50+","Via REST + webhooks"],["<5 min","To connect"],["Zero","Data leaves your infra"]].map(([v,l])=>(
              <div key={l} className="rounded-2xl p-4" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
                <p className="text-2xl font-bold text-slate-800">{v}</p>
                <p className="text-xs text-slate-500 mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="relative z-10 pb-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map(cat=>(
            <button key={cat} onClick={()=>{ setFilter(cat); setSelected(null); }}
              className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
              style={{ background:filter===cat?"linear-gradient(135deg,#3A6FF8,#6ea0ff)":"rgba(255,255,255,0.6)", backdropFilter:"blur(12px)", border:`1px solid ${filter===cat?"transparent":"rgba(255,255,255,0.75)"}`, color:filter===cat?"#fff":"#475569" }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Integration cards grid — customer-stories pattern */}
      <section className="relative z-10 py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {shown.map(intg=>(
              <button key={intg.slug} onClick={()=>setSelected(selected===intg.slug?null:intg.slug)}
                className="text-left rounded-2xl p-5 transition-transform hover:-translate-y-1"
                style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:`1.5px solid ${selected===intg.slug?"rgba(58,111,248,0.5)":"rgba(255,255,255,0.75)"}`, boxShadow:selected===intg.slug?"0 0 0 3px rgba(58,111,248,0.12)":"0 6px 20px rgba(58,111,248,0.04)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0" style={{ background:`${intg.color}15` }}>
                    <Image src={`/images/integrations/${intg.slug}.svg`} alt={intg.name} width={26} height={26} className="object-contain" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{intg.name}</p>
                    <span className="text-[10px] font-semibold" style={{ color:intg.color }}>{intg.category}</span>
                  </div>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{intg.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded integration detail — customer-stories expanded panel */}
      {active && (
        <section className="relative z-10 py-8 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden" style={{ background:"rgba(255,255,255,0.65)", backdropFilter:"blur(10px)", border:"1.5px solid rgba(255,255,255,0.75)", boxShadow:"0 24px 64px rgba(58,111,248,0.1)" }}>
              <div className="grid lg:grid-cols-5">
                {/* Left: logo + identity */}
                <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center items-center text-center" style={{ background:`linear-gradient(135deg, ${active.color}0a 0%, transparent 100%)`, borderRight:"1px solid rgba(255,255,255,0.5)" }}>
                  <div className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6" style={{ background:`${active.color}15` }}>
                    <Image src={`/images/integrations/${active.slug}.svg`} alt={active.name} width={56} height={56} className="object-contain" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color:active.color }}>{active.category}</span>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">{active.name}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{active.desc}</p>
                </div>
                {/* Right: features + CTA */}
                <div className="lg:col-span-3 p-8 md:p-12">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">What&apos;s included</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {active.features.map(feat=>(
                      <div key={feat} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background:"rgba(58,111,248,0.05)" }}>
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>
                          <svg viewBox="0 0 12 12" className="w-3 h-3 fill-white"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <span className="text-slate-700 text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl p-5 mb-8" style={{ background:"rgba(58,111,248,0.06)", border:"1px dashed rgba(58,111,248,0.25)" }}>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      <span className="font-bold text-slate-800">Zero data leaves your infrastructure.</span> CandexAI&apos;s {active.name} integration runs entirely within your private cloud or on-prem deployment. No credentials, tokens, or data are sent to external APIs.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/schedule" className="inline-flex items-center gap-2 h-11 px-7 rounded-xl text-sm font-bold text-white" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>
                      Connect {active.name} →
                    </Link>
                    <Link href="/documentation" className="inline-flex items-center gap-2 h-11 px-7 rounded-xl text-sm font-semibold text-slate-700" style={{ background:"rgba(255,255,255,0.7)", border:"1px solid rgba(255,255,255,0.75)" }}>
                      View Docs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Custom integration CTA */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl p-8 md:p-12" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Don&apos;t See Your Tool?</p>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 tracking-tight">Build any integration via REST API or webhooks.</h2>
                <p className="text-slate-500 leading-relaxed">If your tool isn&apos;t in this list, connect it via our REST API, SDK, or webhook triggers. 50+ additional connectors are available for enterprise clients. Custom integrations can be built by our team in 5–10 business days.</p>
              </div>
              <div className="space-y-3">
                {[["REST API","OpenAPI 3.0 spec with full authentication"],["Webhooks","Trigger AI flows from any external event"],["Python SDK","pip install candexai — LangChain compatible"],["Custom Connectors","Built by CandexAI team in 5–10 days"]].map(([n,d])=>(
                  <div key={n} className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ background:"rgba(58,111,248,0.05)" }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background:"rgba(58,111,248,0.12)" }}>
                      <div className="w-2 h-2 rounded-full" style={{ background:"#3A6FF8" }} />
                    </div>
                    <div>
                      <p className="text-slate-800 text-sm font-semibold">{n}</p>
                      <p className="text-slate-500 text-xs">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl px-10 py-10 sm:py-16" style={{ background:"linear-gradient(135deg,rgba(14,26,43,0.94) 0%,rgba(15,23,42,0.9) 100%)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-4">Connect Everything</p>
            <h2 className="text-3xl font-bold text-white mb-5 tracking-tight">Your stack. Your data. Our AI.</h2>
            <p className="text-slate-300 leading-relaxed mb-10">Book a technical session and we&apos;ll show you exactly how CandexAI connects to your existing tools — zero disruption, full control.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/schedule" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors">Book a Technical Demo →</Link>
              <Link href="/documentation" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors">Read the Docs</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
