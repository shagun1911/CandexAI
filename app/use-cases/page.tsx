"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/ui/Icon";

/* ─── Types ─────────────────────────────────────────────────────── */
interface ChatMsg { type: "user" | "ai" | "action"; text: string }
interface UcCard {
  id: string;
  prefix: string;
  accent: string;
  accentColor: string;
  description: string;
  learnHref: string;
  guideLabel: string;
  chat: ChatMsg[];
}
interface Tab { id: string; label: string; eyebrow: string; subtitle: string; cards: UcCard[] }

/* ─── Page data ──────────────────────────────────────────────────── */
const TABS: Tab[] = [
  {
    id: "work",
    label: "AI FOR WORK",
    eyebrow: "Workforce Automation",
    subtitle: "Empower every employee with AI that searches, decides, and executes across your organisation—end-to-end.",
    cards: [
      {
        id: "finance", prefix: "AI for", accent: "Finance", accentColor: "#3A6FF8",
        description: "Automate financial reporting, budget variance analysis, and compliance monitoring with expert AI models.",
        learnHref: "/ai-for-work", guideLabel: "GUIDE: FINANCE",
        chat: [
          { type: "user", text: "Generate Q3 budget variance report for APAC" },
          { type: "ai",   text: "Analysing 847 transactions across 12 cost centres… APAC overspent by 4.2% in Operations." },
          { type: "action", text: "DOWNLOAD REPORT →" },
        ],
      },
      {
        id: "hr", prefix: "AI for", accent: "Human Resources", accentColor: "#7c3aed",
        description: "Resolve employee queries instantly, automate onboarding workflows, and reduce HR workload by 60%.",
        learnHref: "/ai-for-work", guideLabel: "GUIDE: HR",
        chat: [
          { type: "user", text: "How many vacation days do I have left in 2025?" },
          { type: "ai",   text: "You have 12 remaining leave days. Your next scheduled leave: Dec 24–26." },
          { type: "action", text: "VIEW LEAVE CALENDAR →" },
        ],
      },
      {
        id: "legal", prefix: "AI for", accent: "Legal", accentColor: "#0891b2",
        description: "Review contracts, flag risky clauses, and generate compliance summaries in seconds instead of hours.",
        learnHref: "/ai-for-work", guideLabel: "GUIDE: LEGAL",
        chat: [
          { type: "user", text: "Check NDA with Vendor XYZ for unusual clauses" },
          { type: "ai",   text: "Found 2 high-risk clauses: §4.2 unlimited liability, §7.1 perpetual exclusivity. Recommend legal review." },
          { type: "action", text: "VIEW FLAGGED CLAUSES →" },
        ],
      },
      {
        id: "it-ops", prefix: "AI for", accent: "IT Operations", accentColor: "#059669",
        description: "Automate ticket routing, incident response, and system monitoring with zero manual triage.",
        learnHref: "/ai-for-work", guideLabel: "GUIDE: IT OPS",
        chat: [
          { type: "user", text: "Prod server response time spiked—what happened?" },
          { type: "ai",   text: "Memory leak detected in Service B at 14:32. Auto-restart initiated. All systems nominal now." },
          { type: "action", text: "VIEW INCIDENT LOG →" },
        ],
      },
    ],
  },
  {
    id: "service",
    label: "AI FOR SERVICE",
    eyebrow: "Customer Experience",
    subtitle: "Deliver instant, personalised service experiences at every touchpoint—across banking, healthcare, retail, and more.",
    cards: [
      {
        id: "banking", prefix: "AI for", accent: "Banking", accentColor: "#3A6FF8",
        description: "Coordinate self-service and live agent support with shared context, consistency, and built-in compliance.",
        learnHref: "/ai-for-service", guideLabel: "GUIDE: BANKING",
        chat: [
          { type: "user", text: "I see a $250 charge from Hiking World I didn't make." },
          { type: "ai",   text: "Got it. I've flagged the transaction, issued a temporary block on your card, and raised a dispute. New card arrives in 2 days." },
          { type: "action", text: "TRACK DISPUTE →" },
        ],
      },
      {
        id: "healthcare", prefix: "AI for", accent: "Healthcare", accentColor: "#dc2626",
        description: "Enable 24/7 patient self-service, reduce staff burden, and maintain HIPAA-compliant intelligent assistance.",
        learnHref: "/ai-for-service", guideLabel: "GUIDE: HEALTHCARE",
        chat: [
          { type: "user", text: "Is the claim for yourself or a dependent?" },
          { type: "ai",   text: "Thanks, I've verified your mother's coverage. Claim #HC-88210 is approved—processing in 3 business days." },
          { type: "action", text: "VIEW CLAIM STATUS →" },
        ],
      },
      {
        id: "retail", prefix: "AI for", accent: "Retail", accentColor: "#d97706",
        description: "Deliver frictionless shopping with personalised product discovery, cart assistance, and returns automation.",
        learnHref: "/ai-for-service", guideLabel: "GUIDE: RETAIL",
        chat: [
          { type: "user", text: "I need a new faucet for my bathroom—budget $50" },
          { type: "ai",   text: "Here are 3 top-rated options under $50. The Ashland 2-Handle (4.8/5) fits your décor perfectly." },
          { type: "action", text: "VIEW RECOMMENDATIONS →" },
        ],
      },
      {
        id: "it-support", prefix: "AI for", accent: "IT Support", accentColor: "#7c3aed",
        description: "Resolve incidents, reduce ticket volume, and deliver 24/7 support without adding headcount.",
        learnHref: "/ai-for-service", guideLabel: "GUIDE: IT",
        chat: [
          { type: "user", text: "What is the status of ticket RITM0012057?" },
          { type: "ai",   text: "Transferring to IT Support agent… Ticket RITM0012057: VPN issue escalated. ETA resolution: 45 min." },
          { type: "action", text: "SHOW TICKET DETAILS →" },
        ],
      },
    ],
  },
  {
    id: "process",
    label: "AI FOR PROCESS",
    eyebrow: "Intelligent Automation",
    subtitle: "Streamline knowledge-intensive business processes with autonomous AI agents—from documents to decisions.",
    cards: [
      {
        id: "documents", prefix: "AI for", accent: "Documents", accentColor: "#3A6FF8",
        description: "Extract, classify, and route data from invoices, contracts, and forms with 99%+ accuracy.",
        learnHref: "/ai-for-process", guideLabel: "GUIDE: DOCUMENTS",
        chat: [
          { type: "user", text: "Process the 47 invoices in the Finance inbox" },
          { type: "ai",   text: "Processed 47 invoices: 44 auto-approved, 3 flagged for manager review (>$10k threshold)." },
          { type: "action", text: "VIEW FLAGGED ITEMS →" },
        ],
      },
      {
        id: "claims", prefix: "AI for", accent: "Claims Processing", accentColor: "#0891b2",
        description: "Accelerate insurance and warranty claims with AI-driven validation, fraud detection, and straight-through processing.",
        learnHref: "/ai-for-process", guideLabel: "GUIDE: CLAIMS",
        chat: [
          { type: "user", text: "New auto claim #CLM-4421 from John M. filed" },
          { type: "ai",   text: "Claim validated: no fraud indicators, all docs verified. Approved for $3,200 payout. Processing initiated." },
          { type: "action", text: "VIEW CLAIM DETAILS →" },
        ],
      },
      {
        id: "compliance", prefix: "AI for", accent: "Compliance", accentColor: "#059669",
        description: "Monitor regulatory changes, generate audit trails, and enforce policy adherence automatically.",
        learnHref: "/ai-for-process", guideLabel: "GUIDE: COMPLIANCE",
        chat: [
          { type: "user", text: "Any GDPR violations in this month's data exports?" },
          { type: "ai",   text: "Detected 1 potential violation: Export #E-0091 included 3 PII fields not in consent scope. Quarantined." },
          { type: "action", text: "VIEW COMPLIANCE REPORT →" },
        ],
      },
      {
        id: "procurement", prefix: "AI for", accent: "Procurement", accentColor: "#d97706",
        description: "Evaluate vendors, automate PO approvals, and negotiate contracts with AI-powered intelligence.",
        learnHref: "/ai-for-process", guideLabel: "GUIDE: PROCUREMENT",
        chat: [
          { type: "user", text: "Compare top 3 vendors for cloud storage RFP" },
          { type: "ai",   text: "Recommendation: Vendor B scores highest (92/100) on price, SLA, and security. Initiating NDA workflow." },
          { type: "action", text: "START VENDOR WORKFLOW →" },
        ],
      },
    ],
  },
];

/* ─── Chat mockup component ─────────────────────────────────────── */
function ChatMockup({ chat }: { chat: ChatMsg[] }) {
  return (
    <div
      className="w-full h-full flex flex-col gap-2 p-3 overflow-hidden"
      aria-hidden
    >
      {/* User message */}
      {chat[0] && (
        <div className="uc-card-msg-1 flex items-start gap-2">
          <div
            className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center text-white text-[8px] font-bold"
            style={{ background: "#94a3b8" }}
          >
            U
          </div>
          <div
            className="text-[10px] text-slate-700 leading-relaxed px-2.5 py-1.5 rounded-xl rounded-tl-sm max-w-[85%]"
            style={{
              background: "rgba(241,245,249,0.9)",
              border: "1px solid rgba(226,232,240,0.8)",
            }}
          >
            {chat[0].text}
          </div>
        </div>
      )}

      {/* Typing indicator */}
      <div className="uc-card-typing flex items-center gap-1.5 pl-7">
        <div
          className="flex items-center gap-0.5 px-2.5 py-1.5 rounded-xl"
          style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(226,232,240,0.7)" }}
        >
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className={`uc-typing-d${i} w-1.5 h-1.5 rounded-full inline-block`}
              style={{ background: "#3A6FF8" }}
            />
          ))}
        </div>
      </div>

      {/* AI response */}
      {chat[1] && (
        <div className="uc-card-msg-2 flex items-start gap-2">
          <div
            className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center text-white text-[8px] font-bold"
            style={{ background: "#3A6FF8" }}
          >
            AI
          </div>
          <div
            className="text-[10px] text-slate-700 leading-relaxed px-2.5 py-1.5 rounded-xl rounded-tl-sm max-w-[85%]"
            style={{
              background: "rgba(255,255,255,0.95)",
              border: "1px solid rgba(226,232,240,0.8)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            {chat[1].text}
          </div>
        </div>
      )}

      {/* Action button */}
      {chat[2] && chat[2].type === "action" && (
        <div className="uc-card-msg-3 pl-7">
          <span
            className="inline-block text-[9px] font-bold px-3 py-1 rounded-full tracking-wide"
            style={{
              background: "#1e3a5f",
              color: "#fff",
              letterSpacing: "0.05em",
            }}
          >
            {chat[2].text}
          </span>
        </div>
      )}
    </div>
  );
}

/* ─── Card component ─────────────────────────────────────────────── */
function UseCaseCard({ card }: { card: UcCard }) {
  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.65)",
        boxShadow: "0 8px 32px rgba(58,111,248,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      {/* Card header */}
      <div className="px-6 pt-6 pb-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-base font-bold text-slate-800 leading-snug">
            {card.prefix}{" "}
            <span style={{ color: card.accentColor }}>{card.accent}</span>
          </h3>
          <Link
            href={card.learnHref}
            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ml-3 mt-0.5 transition-colors hover:bg-slate-100"
            style={{ border: "1px solid rgba(226,232,240,0.8)" }}
          >
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <p className="text-slate-500 text-xs leading-relaxed mb-5">{card.description}</p>

        {/* Buttons row */}
        <div className="flex items-center gap-3">
          <Link
            href={card.learnHref}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[11px] font-bold tracking-wide text-white transition-all hover:opacity-90"
            style={{ background: "#1e3a5f", letterSpacing: "0.04em" }}
          >
            LEARN MORE →
          </Link>
          <span className="text-[10px] font-semibold text-slate-400 tracking-widest uppercase">
            {card.guideLabel}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(226,232,240,0.5)" }} />

      {/* Chat animation area */}
      <div
        className="flex-1"
        style={{
          minHeight: 148,
          background: "rgba(248,250,252,0.6)",
        }}
      >
        <ChatMockup chat={card.chat} />
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function UseCasesPage() {
  const [activeTab, setActiveTab] = useState("work");
  const [animKey, setAnimKey] = useState(0);

  const active = TABS.find((t) => t.id === activeTab)!;

  function switchTab(id: string) {
    setActiveTab(id);
    setAnimKey((k) => k + 1);
  }

  return (
    <div className="relative min-h-screen">

      {/* Fixed background – same as homepage */}
      <div className="fixed-bg-layer" aria-hidden>
        <div className="gradient-bg-base absolute inset-0" />

        <div className="hero-grid absolute inset-0 opacity-30" />
      </div>

      <Header />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative z-10 pt-28 pb-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold text-slate-800"
            style={{ background: "rgba(58,111,248,0.09)", border: "1px solid rgba(58,111,248,0.18)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Purpose-built enterprise AI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 mb-5 leading-[1.1]">
            Use purpose-built AI<br />
            <span style={{ color: "#3A6FF8" }}>for every layer of your business</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            CandexAI solves the most urgent enterprise challenges—from workforce automation to process intelligence—with sovereign, privacy-first AI deployed on your infrastructure.
          </p>
        </div>
      </section>

      {/* ── Main two-column layout ────────────────────────────────── */}
      <section className="relative z-10 pb-20 px-4 md:px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Left: Sticky sidebar ───────────────────────────────── */}
          <aside className="lg:sticky lg:top-24 w-full lg:w-[260px] flex-shrink-0">
            <nav className="flex flex-col gap-1.5">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  className="w-full text-left px-4 py-3.5 rounded-xl text-xs font-bold tracking-widest transition-all duration-200"
                  style={
                    activeTab === tab.id
                      ? {
                          background: "#1e3a5f",
                          color: "#fff",
                          boxShadow: "0 4px 16px rgba(30,58,95,0.25)",
                          letterSpacing: "0.07em",
                        }
                      : {
                          background: "rgba(255,255,255,0.45)",
                          color: "#475569",
                          border: "1px solid rgba(255,255,255,0.6)",
                          backdropFilter: "blur(12px)",
                          letterSpacing: "0.07em",
                        }
                  }
                >
                  {tab.label}
                </button>
              ))}

              {/* Dotted separator */}
              <div className="my-2 h-px"
                style={{ background: "repeating-linear-gradient(90deg,rgba(58,111,248,0.2) 0,rgba(58,111,248,0.2) 5px,transparent 5px,transparent 10px)" }} />

              <Link
                href="/schedule"
                className="w-full text-left px-4 py-3 rounded-xl text-xs font-bold tracking-widest transition-all duration-200 flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.45)",
                  color: "#475569",
                  border: "1px solid rgba(255,255,255,0.6)",
                  backdropFilter: "blur(12px)",
                  letterSpacing: "0.07em",
                }}
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                </svg>
                EXPLORE PLATFORM
              </Link>

              <Link
                href="/technology"
                className="w-full text-left px-4 py-3 rounded-xl text-xs font-bold tracking-widest transition-all duration-200 flex items-center justify-between"
                style={{
                  background: "rgba(255,255,255,0.45)",
                  color: "#475569",
                  border: "1px solid rgba(255,255,255,0.6)",
                  backdropFilter: "blur(12px)",
                  letterSpacing: "0.07em",
                }}
              >
                VIEW ARCHITECTURE
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </nav>

            {/* Active tab info card */}
            <div
              className="mt-6 p-5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.45)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.65)",
                boxShadow: "0 4px 20px rgba(58,111,248,0.05)",
              }}
            >
              <p className="text-[10px] font-bold tracking-widest text-slate-700 uppercase mb-2">
                {active.eyebrow}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">{active.subtitle}</p>
            </div>
          </aside>

          {/* ── Right: Card grid ──────────────────────────────────── */}
          <div key={animKey} className="tab-content-enter flex-1 min-w-0">
            <div className="grid sm:grid-cols-2 gap-5">
              {active.cards.map((card) => (
                <UseCaseCard key={card.id} card={card} />
              ))}
            </div>

            {/* Bottom CTA row */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">
                  Want a custom deployment for{" "}
                  <span className="font-semibold text-slate-700">{active.eyebrow.toLowerCase()}</span>?
                </p>
              </div>
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "#1e3a5f", boxShadow: "0 4px 16px rgba(30,58,95,0.25)" }}
              >
                Talk to our team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission-critical industries ───────────────────────────── */}
      <section className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
              Proven in Mission-Critical Industries
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Sovereign AI deployments across the most demanding sectors.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Government & Defence", desc: "Sovereign AI for national security and critical operations", icon: "columns" },
              { title: "Financial Services",   desc: "Risk management and regulatory compliance for banking", icon: "building" },
              { title: "Healthcare Systems",   desc: "Clinical decision support with complete privacy protection", icon: "cross" },
              { title: "Critical Infrastructure", desc: "AI across energy, telecom, and transportation", icon: "settings" },
              { title: "Tech, Telecom & SaaS",  desc: "Autonomous engineering at scale with full IP protection", icon: "lightbulb" },
              { title: "Commerce & Retail",     desc: "Personalised experiences with transparent data handling", icon: "shopping" },
            ].map(({ title, desc, icon }) => (
              <div
                key={title}
                className="p-6 rounded-2xl flex items-start gap-4 transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.45)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.65)",
                  boxShadow: "0 4px 20px rgba(58,111,248,0.04)",
                }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:"rgba(58,111,248,0.1)", color:"#3A6FF8" }}><Icon name={icon} size={18} /></div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1">{title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────── */}
      <section className="relative z-10 pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-3xl px-10 py-14 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(14,26,43,0.93) 0%, rgba(30,58,95,0.9) 100%)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to deploy enterprise AI?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-lg mx-auto">
              Every CandexAI solution is fully sovereign—deployed on your infrastructure with complete IP ownership.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/schedule"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors text-sm">
                Schedule a Demo →
              </Link>
              <Link href="/technology"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-xl text-sm font-semibold text-white transition-colors"
                style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}>
                View Technology
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
