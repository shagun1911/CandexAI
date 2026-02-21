"use client";

/**
 * Kore.ai-style tabbed capability showcase.
 * Right panel: CSS-only animated visual per tab (no images).
 */

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Link from "next/link";

/* ─── Animated Visuals ────────────────────────────────────────────── */

/** INTELLIGENCE — benchmark bar chart */
function BenchmarkVisual() {
  const bars = [
    { label: "CandexAI",  score: 91, pct: "91%",  color: "#3A6FF8", bold: true },
    { label: "GPT-4o",    score: 79, pct: "79%",  color: "#94a3b8", bold: false },
    { label: "Gemini 2.0",score: 74, pct: "74%",  color: "#94a3b8", bold: false },
    { label: "Deepseek V3",score:70, pct: "70%",  color: "#94a3b8", bold: false },
  ];
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 py-6 gap-4">
      {/* header */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-bold text-slate-500 tracking-widest">MMLU BENCHMARK</span>
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{
            background: "rgba(58,111,248,0.12)",
            color: "#3A6FF8",
            animation: "cap-score-pop 3s ease-in-out infinite",
          }}
        >
          #1 RANKED
        </span>
      </div>

      {bars.map((b, i) => (
        <div key={b.label} className="flex items-center gap-3">
          <span
            className="text-[11px] w-20 flex-shrink-0 text-right"
            style={{ color: b.bold ? "#1e3a5f" : "#94a3b8", fontWeight: b.bold ? 700 : 400 }}
          >
            {b.label}
          </span>
          <div className="flex-1 h-5 rounded-full overflow-hidden" style={{ background: "rgba(226,232,240,0.5)" }}>
            <div
              className="h-full rounded-full"
              style={{
                width: b.pct,
                background: b.bold
                  ? "linear-gradient(90deg, #3A6FF8 0%, #6ea0ff 100%)"
                  : b.color,
                animation: `cap-bar 2s ${i * 0.15}s cubic-bezier(0.22,1,0.36,1) both`,
              }}
            />
          </div>
          <span
            className="text-[11px] font-bold w-8 flex-shrink-0"
            style={{ color: b.bold ? "#3A6FF8" : "#94a3b8" }}
          >
            {b.pct}
          </span>
        </div>
      ))}

      <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
        Evaluated across Finance, Legal, Healthcare & Engineering domains.
      </p>
    </div>
  );
}

/** DATA & DOCUMENTS — two-panel document extraction */
function DocumentVisual() {
  const fields = [
    { label: "Invoice No.",   value: "INV-20482",      delay: "0s" },
    { label: "Vendor",        value: "Apex Corp Ltd",  delay: "0.4s" },
    { label: "Amount",        value: "$48,320.00",     delay: "0.8s" },
    { label: "Due Date",      value: "Mar 15, 2026",   delay: "1.2s" },
    { label: "PO Reference",  value: "PO-884732",      delay: "1.6s" },
  ];
  return (
    <div className="w-full h-full flex gap-3 p-5">
      {/* Raw document panel */}
      <div
        className="flex-1 rounded-xl p-4 flex flex-col gap-2"
        style={{
          background: "rgba(248,250,255,0.6)",
          border: "1px solid rgba(226,232,240,0.8)",
        }}
      >
        <span className="text-[9px] font-bold text-slate-400 tracking-widest mb-1">RAW PDF</span>
        {[80, 55, 90, 45, 70, 35, 60].map((w, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full"
            style={{
              width: `${w}%`,
              background: i % 3 === 0
                ? "rgba(58,111,248,0.25)"
                : "rgba(148,163,184,0.3)",
              animation: `cap-field-hl 4s ${i * 0.2}s ease-in-out infinite`,
            }}
          />
        ))}
        <div
          className="mt-2 rounded-lg h-14 flex items-center justify-center"
          style={{ background: "rgba(226,232,240,0.5)" }}
        >
          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex items-center flex-shrink-0">
        <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>

      {/* Extracted fields panel */}
      <div
        className="flex-1 rounded-xl p-4 flex flex-col gap-2"
        style={{
          background: "rgba(248,250,255,0.6)",
          border: "1px solid rgba(226,232,240,0.8)",
        }}
      >
        <span className="text-[9px] font-bold text-slate-400 tracking-widest mb-1">EXTRACTED</span>
        {fields.map((f) => (
          <div
            key={f.label}
            className="flex flex-col rounded-lg px-2.5 py-1.5"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(226,232,240,0.7)",
              animation: `cap-field-hl 4s ${f.delay} ease-in-out infinite`,
            }}
          >
            <span className="text-[8px] text-slate-400">{f.label}</span>
            <span className="text-[10px] font-bold text-slate-700">{f.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** AGENTIC WORKFLOWS — 4-node horizontal flow */
function AgentWorkflowVisual() {
  const nodes = [
    { label: "Trigger",  icon: "zap",    color: "#f59e0b" },
    { label: "Research", icon: "search", color: "#3A6FF8" },
    { label: "Decide",   icon: "brain",  color: "#8b5cf6" },
    { label: "Execute",  icon: "check",  color: "#10b981" },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 py-6 gap-6">
      <span className="text-[9px] font-bold text-slate-500 tracking-widest">AGENT WORKFLOW</span>

      <div className="flex items-center gap-1 w-full">
        {nodes.map((n, i) => (
          <div key={n.label} className="flex items-center flex-1">
            {/* Node */}
            <div
              className="flex-1 flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: `1.5px solid ${n.color}30`,
                boxShadow: `0 2px 12px ${n.color}15`,
                animation: `cap-ag-node 3s ${i * 0.4}s ease-in-out infinite`,
              }}
            >
              <Icon name={n.icon} size={14} color={n.color} />
              <span className="text-[9px] font-bold text-slate-600">{n.label}</span>
            </div>
            {/* Connector */}
            {i < nodes.length - 1 && (
              <div
                className="h-px w-3 flex-shrink-0 mx-0.5"
                style={{
                  background: "linear-gradient(90deg, #3A6FF8 0%, #3A6FF8 100%)",
                  animation: `cap-ag-line 3s ${i * 0.4}s linear infinite`,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Status pills */}
      <div className="flex gap-2 flex-wrap justify-center">
        {["Full audit trail", "Zero hallucination", "On-premise"].map((t, i) => (
          <span
            key={t}
            className="text-[9px] font-bold px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(58,111,248,0.08)",
              color: "#3A6FF8",
              border: "1px solid rgba(58,111,248,0.2)",
              animation: `cap-ag-node 3s ${i * 0.5 + 1}s ease-in-out infinite`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/** VOICE & CODE — waveform + code editor */
function VoiceCodeVisual() {
  const bars = [3, 6, 9, 14, 18, 22, 18, 14, 9, 14, 18, 22, 18, 14, 9, 6, 3];
  const codeLines = [
    { txt: "import candex_ai as cx",        color: "#94a3b8", w: "75%" },
    { txt: "agent = cx.Agent(",              color: "#3A6FF8", w: "60%" },
    { txt: '  model="domain-expert-v3",',    color: "#10b981", w: "70%" },
    { txt: "  voice=True,",                  color: "#10b981", w: "45%" },
    { txt: "  on_premise=True",              color: "#10b981", w: "55%" },
    { txt: ")",                              color: "#3A6FF8", w: "15%" },
    { txt: "agent.run(task)",                color: "#f59e0b", w: "50%" },
  ];
  return (
    <div className="w-full h-full flex gap-3 p-5">
      {/* Voice panel */}
      <div
        className="w-[38%] rounded-xl p-4 flex flex-col items-center justify-center gap-3"
        style={{
          background: "rgba(248,250,255,0.6)",
          border: "1px solid rgba(226,232,240,0.8)",
        }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #3A6FF8 0%, #6ea0ff 100%)",
            boxShadow: "0 0 16px rgba(58,111,248,0.3)",
          }}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z" />
          </svg>
        </div>
        {/* Waveform bars */}
        <div className="flex items-end gap-[2px] h-10">
          {bars.map((h, i) => (
            <div
              key={i}
              className="w-[3px] rounded-full"
              style={{
                height: h,
                background: "linear-gradient(to top, #3A6FF8, #6ea0ff)",
                animation: `cap-wave 1.2s ${i * 0.07}s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>
        <span className="text-[9px] font-bold text-slate-600 tracking-widest">LIVE</span>
      </div>

      {/* Code editor panel */}
      <div
        className="flex-1 rounded-xl overflow-hidden flex flex-col"
        style={{
          background: "#0f172a",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Editor chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
          <div className="w-2 h-2 rounded-full bg-red-400/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <div className="w-2 h-2 rounded-full bg-green-400/60" />
          <span className="text-[8px] text-slate-500 ml-1">agent.py</span>
        </div>
        {/* Lines */}
        <div className="flex-1 px-3 py-3 flex flex-col gap-1.5 overflow-hidden">
          {codeLines.map((line, i) => (
            <div
              key={i}
              className="h-3 rounded"
              style={{
                width: line.w,
                background: line.color + "30",
                animation: `cap-code-in 0.4s ${i * 0.18}s cubic-bezier(0.22,1,0.36,1) both`,
              }}
            >
              <div className="h-full rounded" style={{ background: line.color + "60", width: "40%" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Tab definitions ─────────────────────────────────────────────── */
interface TabItem {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  ctaHref: string;
  visual: React.ReactNode;
}

import React from "react";

const TABS: TabItem[] = [
  {
    id: "intelligence",
    label: "INTELLIGENCE",
    eyebrow: "Accuracy Leadership",
    title: "CandexAI ranked #1 on MMLU domain benchmarks",
    body: "Our expert models, purpose-built for your domain, consistently outperform frontier models like GPT-4o, Gemini 2.0, and Deepseek V3—at a fraction of the cost. Precision over approximation, every time.",
    cta: "GET BENCHMARK REPORT",
    ctaHref: "/technology",
    visual: <BenchmarkVisual />,
  },
  {
    id: "data",
    label: "DATA & DOCUMENTS",
    eyebrow: "Multi-Modal Processing",
    title: "Extract meaning from any data source",
    body: "Transform unstructured invoices, contracts, forms, and images into structured, actionable intelligence. CandexAI processes multi-modal data with 99%+ field-level accuracy—end-to-end, on your infrastructure.",
    cta: "EXPLORE DATA CAPABILITIES",
    ctaHref: "/ai-for-process",
    visual: <DocumentVisual />,
  },
  {
    id: "agents",
    label: "AGENTIC WORKFLOWS",
    eyebrow: "Autonomous Execution",
    title: "Deploy AI agents that think, plan, and act",
    body: "Orchestrate multi-step workflows with autonomous AI agents that research, decide, and execute across your entire enterprise stack. Full audit trails, full control, and zero hallucination tolerance.",
    cta: "VIEW AGENT PLATFORM",
    ctaHref: "/ai-for-work",
    visual: <AgentWorkflowVisual />,
  },
  {
    id: "voice",
    label: "VOICE & CODE",
    eyebrow: "Build & Converse",
    title: "AI that speaks your language—and writes it",
    body: "Convert voice to intent to action in under two seconds. Generate production-grade code, automate documentation, and build new capabilities powered by models trained on your own codebase and terminology.",
    cta: "EXPLORE VOICE AI",
    ctaHref: "/voice-ai",
    visual: <VoiceCodeVisual />,
  },
];

/* ─── Main component ──────────────────────────────────────────────── */
export default function CapabilitiesShowcase() {
  const [activeId, setActiveId] = useState<string>("intelligence");
  const [key, setKey] = useState(0);

  const active = TABS.find((t) => t.id === activeId)!;

  function switchTab(id: string) {
    setActiveId(id);
    setKey((k) => k + 1);
  }

  return (
    <div
      className="w-full rounded-3xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.45)",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
        border: "1px solid rgba(255,255,255,0.65)",
        boxShadow:
          "0 20px 60px rgba(58,111,248,0.07), inset 0 1px 0 rgba(255,255,255,0.9)",
      }}
    >
      {/* ── Tab pills ─────────────────────────────────── */}
      <div
        className="flex items-center gap-2 px-6 pt-6 pb-5 overflow-x-auto"
        style={{ borderBottom: "1px solid rgba(226,232,240,0.5)" }}
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => switchTab(tab.id)}
            className="flex-shrink-0 px-4 py-2 rounded-full text-[11px] font-bold transition-all duration-200"
            style={
              activeId === tab.id
                ? {
                    background: "#1e3a5f",
                    color: "#fff",
                    boxShadow: "0 2px 10px rgba(30,58,95,0.3)",
                    letterSpacing: "0.07em",
                  }
                : {
                    background: "transparent",
                    color: "#64748b",
                    border: "1px solid rgba(226,232,240,0.8)",
                    letterSpacing: "0.07em",
                  }
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Content ───────────────────────────────────── */}
      <div key={key} className="tab-content-enter grid lg:grid-cols-2">
        {/* Left: text + CTA */}
        <div className="flex flex-col justify-center px-8 py-10 lg:pr-6">
          <p className="text-[10px] font-bold tracking-widest text-slate-700 uppercase mb-3">
            {active.eyebrow}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 leading-[1.2] mb-4 tracking-tight">
            {active.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">{active.body}</p>

          {/* Dotted-border CTA — kore.ai signature style */}
          <Link
            href={active.ctaHref}
            className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[11px] font-bold tracking-widest text-slate-700 hover:text-slate-900 transition-colors"
            style={{
              border: "1.5px dashed rgba(100,116,139,0.45)",
              letterSpacing: "0.07em",
            }}
          >
            {active.cta}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Right: animated visual */}
        <div
          className="relative overflow-hidden m-4 ml-0 lg:my-5 lg:mr-5 rounded-2xl"
          style={{
            minHeight: 280,
            background: "rgba(248,250,255,0.7)",
            border: "1px solid rgba(226,232,240,0.7)",
          }}
        >
          {active.visual}

          {/* CandexAI platform badge */}
          <div
            className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(226,232,240,0.9)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[9px] font-bold text-slate-600">CandexAI Platform</span>
          </div>
        </div>
      </div>
    </div>
  );
}
