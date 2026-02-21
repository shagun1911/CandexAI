"use client";

import Icon from "@/components/ui/Icon";

/**
 * Professional mini-UI animation components for benefit and security cards.
 * Trigger class: .use-case-anim-visible (applied by ScrollPlayMedia on scroll)
 * Duration: 12s looping CSS keyframes — no JS animation libs.
 *
 * Each component shows a realistic data/UI mockup inspired by enterprise dashboards.
 */

/* ══════════════════════════════════════════════════════
   BENEFIT CARDS
══════════════════════════════════════════════════════ */

/** 1. Optimized Token Costs — bar chart comparison */
export function TokenCostAnim() {
  return (
    <div
      className="flex items-end justify-center gap-8 w-full h-full px-4"
      aria-hidden
    >
      {/* Standard LLM bar */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-10 flex items-end justify-center" style={{ height: 52 }}>
          <div
            className="sa-bar-std w-full rounded-t-lg"
            style={{
              height: 52,
              background: "rgba(148,163,184,0.25)",
              border: "1px solid rgba(148,163,184,0.3)",
              transform: "scaleY(0)",
              transformOrigin: "bottom",
            }}
          />
        </div>
        <span className="text-[10px] text-slate-400 font-medium">Standard</span>
      </div>

      {/* 8X badge */}
      <div className="flex flex-col items-center justify-end gap-0.5 mb-6">
        <span
          className="sa-savings-num text-2xl font-extrabold leading-none"
          style={{ color: "#3A6FF8" }}
        >
          8×
        </span>
        <span className="sa-savings-sub text-[9px] text-slate-400 font-medium">less cost</span>
      </div>

      {/* CandexAI bar */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-10 flex items-end justify-center" style={{ height: 52 }}>
          <div
            className="sa-bar-cx w-full rounded-t-lg"
            style={{
              height: 7,
              background: "rgba(58,111,248,0.6)",
              border: "1px solid rgba(58,111,248,0.3)",
              transform: "scaleY(0)",
              transformOrigin: "bottom",
            }}
          />
        </div>
        <span className="text-[10px] text-slate-700 font-semibold">CandexAI</span>
      </div>
    </div>
  );
}

/** 2. Industry Leading Accuracy — MMLU benchmark bar */
export function AccuracyAnim() {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-3 px-2" aria-hidden>
      {/* Score row */}
      <div className="flex items-baseline justify-between mb-1">
        <span
          className="sa-acc-score text-xl font-extrabold"
          style={{ color: "#3A6FF8" }}
        >
          87%
        </span>
        <span className="sa-acc-label text-[10px] text-slate-400 font-medium">MMLU Benchmark</span>
      </div>

      {/* Progress bar track */}
      <div
        className="relative w-full h-2.5 rounded-full overflow-hidden"
        style={{ background: "rgba(58,111,248,0.08)", border: "1px solid rgba(58,111,248,0.12)" }}
      >
        <div
          className="sa-acc-fill absolute left-0 top-0 h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #3A6FF8 0%, #60a5fa 100%)",
            width: 0,
          }}
        />
      </div>

      {/* Comparison labels */}
      <div className="sa-acc-label flex justify-between text-[9px] text-slate-400 mt-0.5">
        <span>GPT-4o · 86%</span>
        <span>Gemini 2.0 · 84%</span>
      </div>
    </div>
  );
}

/** 3. Rapid End-to-End Delivery — 3-step timeline */
export function DeliveryAnim() {
  return (
    <div className="w-full h-full flex flex-col justify-center px-2 gap-3" aria-hidden>
      {/* Timeline track + nodes */}
      <div className="relative flex items-center justify-between">
        {/* Connecting line */}
        <div
          className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-[2px] rounded-full overflow-hidden"
          style={{ background: "rgba(58,111,248,0.1)" }}
        >
          <div
            className="sa-step-line h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #3A6FF8 0%, #60a5fa 100%)",
              width: 0,
            }}
          />
        </div>

        {/* Step 1 */}
        <div className="sa-step-1 relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-white"
          style={{ background: "#3A6FF8", boxShadow: "0 0 0 3px rgba(58,111,248,0.15)" }}
        >
          <Icon name="check" size={14} />
        </div>
        {/* Step 2 */}
        <div className="sa-step-2 relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-white"
          style={{ background: "#3A6FF8", boxShadow: "0 0 0 3px rgba(58,111,248,0.15)" }}
        >
          <Icon name="check" size={14} />
        </div>
        {/* Step 3 */}
        <div className="sa-step-3 relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-white"
          style={{ background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,0.18)" }}
        >
          <Icon name="check" size={14} />
        </div>
      </div>

      {/* Step labels */}
      <div className="sa-step-label flex items-center justify-between text-[10px] text-slate-500 font-medium">
        <span>Design</span>
        <span>Deploy</span>
        <span className="text-green-600 font-semibold">Live</span>
      </div>
    </div>
  );
}

/** 4. Embedded Upgradability — version cycling badge */
export function UpgradabilityAnim() {
  return (
    <div className="w-full h-full flex items-center justify-center" aria-hidden>
      <div className="relative flex flex-col items-center gap-2">
        {/* Version display area */}
        <div
          className="relative w-24 h-10 rounded-xl flex items-center justify-center overflow-hidden"
          style={{
            background: "rgba(58,111,248,0.06)",
            border: "1px solid rgba(58,111,248,0.14)",
          }}
        >
          <span
            className="sa-ver-v1 absolute text-base font-extrabold tracking-tight"
            style={{ color: "#3A6FF8" }}
          >
            v 1.0
          </span>
          <span
            className="sa-ver-v2 absolute text-base font-extrabold tracking-tight"
            style={{ color: "#3A6FF8" }}
          >
            v 2.0
          </span>
          <span
            className="sa-ver-v3 absolute text-base font-extrabold tracking-tight"
            style={{ color: "#22c55e" }}
          >
            v 3.0
          </span>
        </div>

        <span className="text-[9px] text-slate-400 font-medium tracking-wide uppercase">
          Auto-upgraded
        </span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   SECURITY CARDS
══════════════════════════════════════════════════════ */

/** 5. Full IP Ownership — shield + certified badge */
export function IPOwnershipAnim() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2" aria-hidden>
      {/* Shield icon */}
      <div
        className="sa-shield-icon w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: "rgba(58,111,248,0.1)", color: "#3A6FF8" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
      {/* Badge */}
      <div
        className="sa-ip-badge px-3 py-1 rounded-full text-[10px] font-bold tracking-wide"
        style={{
          background: "rgba(58,111,248,0.1)",
          color: "#3A6FF8",
          border: "1px solid rgba(58,111,248,0.2)",
        }}
      >
        100% YOURS
      </div>
    </div>
  );
}

/** 6. Regulatory Compliance — animated checklist */
export function ComplianceAnim() {
  const items = [
    { cls: "sa-chk-1", label: "GDPR Compliant" },
    { cls: "sa-chk-2", label: "SOC 2 Type II" },
    { cls: "sa-chk-3", label: "HIPAA Ready" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center gap-2.5 px-1" aria-hidden>
      {items.map(({ cls, label }) => (
        <div key={label} className={`${cls} flex items-center gap-2.5`}>
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e" }}
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M2 6l3 3 5-5" />
            </svg>
          </div>
          <span className="text-xs text-slate-700 font-medium">{label}</span>
        </div>
      ))}
    </div>
  );
}

/** 7. Air-Gapped Deployment — network isolation diagram */
export function AirGapAnim() {
  return (
    <div className="w-full h-full flex items-center justify-center" aria-hidden>
      <div className="flex items-center gap-2 relative">
        {/* Server */}
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: "rgba(58,111,248,0.1)", color: "#3A6FF8" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="3" width="20" height="5" rx="1" />
            <rect x="2" y="10" width="20" height="5" rx="1" />
            <rect x="2" y="17" width="20" height="5" rx="1" />
          </svg>
        </div>

        {/* Barrier wall */}
        <div
          className="sa-gap-barrier flex flex-col gap-0.5"
          style={{ transform: "scaleY(0)", transformOrigin: "top" }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-sm" style={{ background: "#3A6FF8", opacity: 0.7 }} />
          ))}
        </div>

        {/* Connection with cross */}
        <div className="relative w-8 h-0.5" style={{ background: "rgba(148,163,184,0.3)" }}>
          <div
            className="sa-gap-cross absolute inset-0 flex items-center justify-center"
          >
            <Icon name="close" size={12} color="#f87171" />
          </div>
        </div>

        {/* Cloud / Internet icon */}
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: "rgba(148,163,184,0.1)", color: "#94a3b8" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          </svg>
        </div>
      </div>

      {/* Label */}
      <span
        className="sa-gap-label absolute bottom-2 left-0 right-0 text-center text-[9px] text-slate-400 font-medium"
        style={{ position: "absolute", bottom: 2 }}
      >
        Zero external calls
      </span>
    </div>
  );
}

/** 8. Multi-Layer Encryption — concentric rings around data icon */
export function EncryptionAnim() {
  return (
    <div className="w-full h-full flex items-center justify-center relative" aria-hidden>
      {/* Outer ring 3 */}
      <div
        className="sa-enc-r3 absolute w-20 h-20 rounded-full"
        style={{
          border: "1.5px solid rgba(58,111,248,0.15)",
          background: "rgba(58,111,248,0.02)",
        }}
      />
      {/* Ring 2 */}
      <div
        className="sa-enc-r2 absolute w-14 h-14 rounded-full"
        style={{
          border: "1.5px solid rgba(58,111,248,0.25)",
          background: "rgba(58,111,248,0.03)",
        }}
      />
      {/* Ring 1 */}
      <div
        className="sa-enc-r1 absolute w-9 h-9 rounded-full"
        style={{
          border: "1.5px solid rgba(58,111,248,0.4)",
          background: "rgba(58,111,248,0.05)",
        }}
      />
      {/* Core icon */}
      <div
        className="sa-enc-core relative z-10 w-7 h-7 rounded-lg flex items-center justify-center"
        style={{ background: "#3A6FF8", color: "#fff" }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>

      {/* Layer labels */}
      <div
        className="sa-acc-label absolute bottom-0 left-0 right-0 flex justify-center gap-2"
      >
        {["AES-256", "TLS 1.3", "At Rest"].map((l) => (
          <span
            key={l}
            className="text-[8px] text-slate-400 font-medium"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
