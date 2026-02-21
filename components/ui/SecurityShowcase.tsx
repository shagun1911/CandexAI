"use client";

/**
 * SecurityShowcase — kore.ai-style two-column layout.
 * Left: headline + description + two CTAs.
 * Right: Tab pills + large full-bleed photo card with gradient overlay.
 */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BLOCKS = [
  {
    id: "full-ip",
    tab: "FULL IP OWNERSHIP",
    heading: "You own everything. Always.",
    description:
      "Every model, every line of code, every dataset trained on your data belongs exclusively to you. No vendor lock-in, no licensing fees, no shared infrastructure.",
    image: "/images/security/ip-ownership.jpg",
    imageAlt: "Padlock on circuit board representing complete intellectual property ownership",
    trustedBy: ["100% Yours", "No Lock-in", "Source Access"],
    cta: { label: "OUR TECHNOLOGY", href: "/technology" },
  },
  {
    id: "regulatory",
    tab: "COMPLIANCE",
    heading: "Built for the most regulated industries.",
    description:
      "Comprehensive compliance frameworks for finance, healthcare, legal, and government. Full audit trails, role-based access, and data residency guarantees out of the box.",
    image: "/images/security/compliance.jpg",
    imageAlt: "Professional reviewing compliance documentation and regulatory frameworks",
    trustedBy: ["SOC 2 Type II", "HIPAA Ready", "GDPR Ready"],
    cta: { label: "OUR PROCESS", href: "/ai-for-process" },
  },
  {
    id: "air-gapped",
    tab: "AIR-GAPPED",
    heading: "Full functionality with zero external calls.",
    description:
      "Deploy on isolated on-premise or private-cloud infrastructure with absolutely no external API calls, no telemetry, and no third-party dependencies. Runs entirely within your network perimeter.",
    image: "/images/security/air-gapped.jpg",
    imageAlt: "Isolated server room infrastructure representing air-gapped deployment",
    trustedBy: ["Zero External APIs", "On-Premise", "Private Cloud"],
    cta: { label: "DEPLOYMENT OPTIONS", href: "/technology" },
  },
  {
    id: "encryption",
    tab: "ENCRYPTION",
    heading: "Data protected at every layer.",
    description:
      "AES-256 encryption at rest, TLS 1.3 in transit, and application-layer encryption during processing. Your data is never exposed—not even to CandexAI engineers.",
    image: "/images/security/encryption.jpg",
    imageAlt: "Binary code matrix representing multi-layer encryption of enterprise data",
    trustedBy: ["AES-256", "TLS 1.3", "Zero-Knowledge"],
    cta: { label: "SECURITY DOCS", href: "/documentation" },
  },
] as const;

type BlockId = (typeof BLOCKS)[number]["id"];

export default function SecurityShowcase() {
  const [activeId, setActiveId] = useState<BlockId>("full-ip");
  const [imgKey, setImgKey] = useState(0);

  const active = BLOCKS.find((b) => b.id === activeId)!;

  function switchTab(id: BlockId) {
    setActiveId(id);
    setImgKey((k) => k + 1);
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

      {/* ── Left: text panel ─────────────────────────────────── */}
      <div className="lg:w-[36%] lg:sticky lg:top-28 flex flex-col gap-6">
        <div>
          <p className="text-[10px] font-bold tracking-widest text-slate-700 uppercase mb-3">
            Enterprise Security
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight tracking-tight mb-4">
            Designed for absolute security
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Built for organizations where data sovereignty, regulatory compliance,
            and zero-trust architecture are non-negotiable requirements.
          </p>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed">
          Trusted by enterprises across finance, healthcare, defence and government —
          where the stakes demand nothing less than complete control.
        </p>

        {/* Two CTAs — like kore.ai "REQUEST A DEMO" + "LET'S TALK" */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90"
            style={{
              background: "#1e3a5f",
              boxShadow: "0 4px 14px rgba(30,58,95,0.3)",
            }}
          >
            REQUEST A DEMO
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors"
            style={{ border: "1.5px solid rgba(100,116,139,0.35)" }}
          >
            OUR PROCESS
          </Link>
        </div>
      </div>

      {/* ── Right: tabs + large card ─────────────────────────── */}
      <div className="lg:w-[64%] flex flex-col gap-4">

        {/* Tab pills — matches kore.ai BANKING | HEALTHCARE | RETAIL style */}
        <div className="flex flex-wrap gap-2">
          {BLOCKS.map((b) => (
            <button
              key={b.id}
              onClick={() => switchTab(b.id as BlockId)}
              className="px-4 py-1.5 rounded-full text-[11px] font-bold transition-all duration-200"
              style={
                activeId === b.id
                  ? {
                      background: "#1e3a5f",
                      color: "#fff",
                      boxShadow: "0 2px 10px rgba(30,58,95,0.25)",
                      letterSpacing: "0.06em",
                    }
                  : {
                      background: "rgba(255,255,255,0.6)",
                      color: "#64748b",
                      border: "1px solid rgba(226,232,240,0.9)",
                      letterSpacing: "0.06em",
                    }
              }
            >
              {b.tab}
            </button>
          ))}
        </div>

        {/* Large image card — kore.ai style full-bleed with overlay */}
        <div
          key={imgKey}
          className="relative rounded-3xl overflow-hidden tab-content-enter"
          style={{ minHeight: 420 }}
        >
          <Image
            src={active.image}
            alt={active.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 64vw"
            priority
          />

          {/* Strong bottom gradient so text is always legible */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(7,12,28,0.96) 0%, rgba(7,12,28,0.6) 35%, rgba(0,0,0,0.1) 65%, transparent 100%)",
            }}
          />

          {/* Bottom content overlay — matches kore.ai card text + logo strip */}
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 pt-16">
            <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-2 tracking-tight">
              {active.heading}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-5 max-w-xl">
              {active.description}
            </p>

            {/* "Trusted by" strip — mirroring kore.ai's logo row */}
            <div
              className="flex flex-wrap items-center gap-3 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
            >
              <span className="text-[10px] text-slate-400 font-medium tracking-wide mr-1">
                Certified standards:
              </span>
              {active.trustedBy.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 rounded-full text-[10px] font-bold text-white"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {cert}
                </span>
              ))}
              <Link
                href={active.cta.href}
                className="ml-auto text-[11px] font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                style={{ letterSpacing: "0.06em" }}
              >
                {active.cta.label}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
