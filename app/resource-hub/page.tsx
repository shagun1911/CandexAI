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

type Resource = {
  id: number; type: string; title: string; excerpt: string;
  readTime: string; tags: string[]; href: string; featured?: boolean;
};

const RESOURCES: Resource[] = [
  { id:1, type:"Guide", featured:true,
    title:"The Enterprise AI Adoption Playbook: From Proof of Concept to Production",
    excerpt:"A step-by-step guide for enterprise leaders navigating the journey from AI experiments to production deployments that deliver measurable ROI across the organisation.",
    readTime:"18 min read", tags:["Strategy","Enterprise","Deployment"],
    href:"/blog/enterprise-vs-genai" },
  { id:2, type:"Whitepaper",
    title:"Why Small Expert Models Outperform Large Language Models in Enterprise Settings",
    excerpt:"Quantitative analysis showing how domain-expert models with 7–13B parameters consistently outperform GPT-4 class models on enterprise tasks at 10% of the cost.",
    readTime:"22 min read", tags:["AI Models","Accuracy","Cost"],
    href:"/blog/small-expert-models" },
  { id:3, type:"Case Study",
    title:"How a Leading Private Bank Cut Compliance Review Time by 78%",
    excerpt:"Deep dive into the architecture, training process, and deployment strategy that enabled a top-10 Indian bank to automate KYC and contract review with AI.",
    readTime:"12 min read", tags:["BFSI","Document AI","Compliance"],
    href:"/customer-stories" },
  { id:4, type:"Article",
    title:"Parallel Agent Processing: How Multi-Agent Architectures Scale Enterprise AI",
    excerpt:"An architectural overview of how parallel agent orchestration enables enterprises to process thousands of complex workflows simultaneously without throughput bottlenecks.",
    readTime:"10 min read", tags:["Multi-Agent","Architecture","Performance"],
    href:"/blog/parallel-agent-processing" },
  { id:5, type:"Guide",
    title:"AI Security Best Practices for the Enterprise: A Complete Framework",
    excerpt:"Everything you need to know about deploying AI securely at enterprise scale — from air-gapped architectures to RBAC, audit trails, and model poisoning prevention.",
    readTime:"20 min read", tags:["Security","Compliance","Infrastructure"],
    href:"/blog/ai-security-best-practices" },
  { id:6, type:"Article",
    title:"Scaling AI to Production: Infrastructure, Monitoring, and MLOps at Enterprise Scale",
    excerpt:"A practical guide to the infrastructure decisions, monitoring strategies, and MLOps practices that separate AI experiments from production AI systems that stay reliable.",
    readTime:"15 min read", tags:["MLOps","Production","Infrastructure"],
    href:"/blog/scaling-to-production" },
  { id:7, type:"Whitepaper",
    title:"Agentic AI in the Enterprise: Taxonomy, Use Cases, and Risk Framework",
    excerpt:"A comprehensive framework for understanding, evaluating, and safely deploying agentic AI systems in enterprise environments — covering autonomy levels, oversight models, and governance.",
    readTime:"25 min read", tags:["Agentic AI","Governance","Risk"],
    href:"/blog/agentic-ai" },
  { id:8, type:"Guide",
    title:"Building Your Enterprise AI Strategy: A 90-Day Roadmap",
    excerpt:"From identifying high-value use cases to measuring ROI, this 90-day roadmap gives enterprise leaders a concrete action plan for launching an AI programme that delivers.",
    readTime:"14 min read", tags:["Strategy","Planning","ROI"],
    href:"/enterprise-strategy" },
  { id:9, type:"Case Study",
    title:"Hospital Chain Automates Clinical Documentation Across 18 Facilities",
    excerpt:"How a 4,000-bed hospital network reduced physician documentation time by 70% with CandexAI Voice AI — deployed air-gapped, HIPAA-compliant, across 18 sites in 8 weeks.",
    readTime:"10 min read", tags:["Healthcare","Voice AI","Documentation"],
    href:"/customer-stories" },
  { id:10, type:"Article",
    title:"The Essential Guide to Deploying AI in Air-Gapped Environments",
    excerpt:"Step-by-step technical guide to deploying large language models in networks with no internet access — covering model transfer, inference optimisation, and update strategies.",
    readTime:"16 min read", tags:["Air-Gapped","Security","On-Premise"],
    href:"/blog/air-gapped-ai" },
  { id:11, type:"Webinar",
    title:"Live Demo: CandexAI Multi-Agent Orchestration in Financial Services",
    excerpt:"Recorded walkthrough of a live multi-agent pipeline for loan processing at a major bank — from document ingestion to approval recommendation in under 45 minutes.",
    readTime:"45 min watch", tags:["BFSI","Multi-Agent","Demo"],
    href:"/schedule" },
  { id:12, type:"Guide",
    title:"Voice AI in Healthcare: Deployment, Compliance, and Accuracy Benchmarks",
    excerpt:"Clinical documentation AI is one of the highest-ROI AI deployments in healthcare. This guide covers architecture, HIPAA compliance, accuracy benchmarks, and physician adoption strategies.",
    readTime:"19 min read", tags:["Healthcare","Voice AI","Compliance"],
    href:"/blog/ai-healthcare" },
];

const TYPES = ["All","Guide","Whitepaper","Case Study","Article","Webinar"];

const TYPE_COLORS: Record<string, string> = {
  "Guide": "#3A6FF8",
  "Whitepaper": "#7c3aed",
  "Case Study": "#059669",
  "Article": "#d97706",
  "Webinar": "#e11d48",
};

export default function ResourceHubPage() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? RESOURCES : RESOURCES.filter(r => r.type === filter);
  const featured = RESOURCES.find(r => r.featured);
  const rest = shown.filter(r => !r.featured || filter !== "All");

  return (
    <div className="relative min-h-screen">
      <PageBg />
      <Header />

      {/* Hero */}
      <section className="relative z-10 pt-28 pb-14 md:pt-36 md:pb-18 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-6" style={{ background:"rgba(58,111,248,0.08)", border:"1px solid rgba(58,111,248,0.2)", letterSpacing:"0.07em" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> RESOURCE HUB
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight tracking-tight mb-5">
              Learn, strategy,<br /><span style={{ color:"#3A6FF8" }}>and deep dives.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
              Guides, whitepapers, case studies, and webinars — everything you need to navigate enterprise AI from strategy to production.
            </p>
            <div className="flex flex-wrap gap-3">
              {["12+ Resources","4 Formats","Updated Monthly"].map(tag=>(
                <span key={tag} className="px-4 py-2 rounded-full text-sm font-semibold text-slate-600" style={{ background:"rgba(255,255,255,0.7)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.75)" }}>{tag}</span>
              ))}
            </div>
          </div>
          {featured && (
            <Link href={featured.href} className="block rounded-3xl overflow-hidden group transition-transform hover:-translate-y-1" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)", boxShadow:"0 16px 40px rgba(58,111,248,0.08)" }}>
              <div className="relative h-44 w-full overflow-hidden">
                <Image src="/images/resource-hub/featured.jpg" alt="Featured resource" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(10,18,35,0.5) 0%, transparent 60%)" }} />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background:"rgba(58,111,248,0.8)", backdropFilter:"blur(8px)" }}>Featured · {featured.type}</span>
              </div>
              <div className="p-7">
                <h3 className="font-bold text-slate-800 text-base leading-snug mb-3">{featured.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{featured.excerpt.substring(0,130)}...</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{featured.readTime}</span>
                  <span className="text-xs font-bold text-slate-700">Read now →</span>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Type filter */}
      <section className="relative z-10 pb-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2">
          {TYPES.map(t=>(
            <button key={t} onClick={()=>setFilter(t)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{ background:filter===t?TYPE_COLORS[t]||"linear-gradient(135deg,#3A6FF8,#6ea0ff)":"rgba(255,255,255,0.6)", backdropFilter:"blur(12px)", border:`1px solid ${filter===t?"transparent":"rgba(255,255,255,0.75)"}`, color:filter===t?"#fff":"#475569" }}>
              {t}{filter!=="All"&&t!=="All"&&filter===t?` (${RESOURCES.filter(r=>r.type===t).length})`:t==="All"?" (12)":""}
            </button>
          ))}
        </div>
      </section>

      {/* Resource grid — customer-stories pattern */}
      <section className="relative z-10 py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map(r=>(
            <Link key={r.id} href={r.href} className="block rounded-2xl overflow-hidden group transition-transform hover:-translate-y-1" style={{ background:"rgba(255,255,255,0.55)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)", boxShadow:"0 8px 24px rgba(58,111,248,0.05)" }}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background:TYPE_COLORS[r.type]||"#3A6FF8" }}>{r.type}</span>
                  <span className="text-xs text-slate-400">{r.readTime}</span>
                </div>
                <h3 className="font-bold text-slate-800 text-sm leading-snug mb-3 group-hover:text-blue-600 transition-colors">{r.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{r.excerpt.substring(0,140)}...</p>
                <div className="flex flex-wrap gap-1.5">
                  {r.tags.map(tag=>(
                    <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-slate-800" style={{ background:"rgba(58,111,248,0.07)" }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 flex items-center justify-between" style={{ borderTop:"1px solid rgba(148,163,184,0.15)" }}>
                <span className="text-xs font-semibold text-slate-400">CandexAI Editorial</span>
                <span className="text-xs font-bold text-slate-700 group-hover:translate-x-0.5 transition-transform inline-block">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA strip */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl p-8 md:p-12" style={{ background:"rgba(255,255,255,0.6)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.75)" }}>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[11px] font-bold tracking-widest text-slate-700 uppercase mb-3">Stay Ahead</p>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 tracking-tight">Get new resources delivered monthly.</h2>
                <p className="text-slate-500 leading-relaxed">Whitepapers, deployment guides, case studies, and research from the CandexAI team — straight to your inbox. No fluff, no spam.</p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <input type="email" placeholder="your@company.com" className="flex-1 h-12 px-4 rounded-xl text-sm text-slate-700 outline-none" style={{ background:"rgba(255,255,255,0.8)", border:"1.5px solid rgba(148,163,184,0.3)" }} />
                  <button className="h-12 px-6 rounded-xl text-sm font-bold text-white flex-shrink-0" style={{ background:"linear-gradient(135deg,#3A6FF8,#6ea0ff)" }}>Subscribe</button>
                </div>
                <p className="text-xs text-slate-400">No spam. Unsubscribe anytime. Read by 2,000+ enterprise AI leaders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl px-10 py-10 sm:py-16" style={{ background:"linear-gradient(135deg,rgba(14,26,43,0.94) 0%,rgba(15,23,42,0.9) 100%)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-4">Ready to Go Further?</p>
            <h2 className="text-3xl font-bold text-white mb-5 tracking-tight">Turn insights into action.</h2>
            <p className="text-slate-300 leading-relaxed mb-10">Reading about AI is one thing. Deploying it is another. Talk to our team and let&apos;s build something specific for your organisation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/schedule" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors">Book a Strategy Session →</Link>
              <Link href="/customer-stories" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-colors">See Customer Stories</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
