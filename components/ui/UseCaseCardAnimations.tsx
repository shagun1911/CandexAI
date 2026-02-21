"use client";

/**
 * Kore.ai-inspired use-case card animations.
 * Parent must have .use-case-anim-visible to trigger 20s CSS loops.
 * No play buttons. No JS animation – pure CSS keyframes.
 */

/* ────────────────────────────────────────────
   AI FOR WORK  ──  Agent Management UI
   Inspired by: kore.ai "Pre-built Applications"
──────────────────────────────────────────── */
export function WorkAnimation() {
  return (
    <div className="relative w-full h-full flex flex-col select-none overflow-hidden p-4" aria-hidden>
      {/* Card mockup */}
      <div
        className="rounded-xl flex-1 flex flex-col overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.7)",
          boxShadow: "0 8px 32px rgba(58,111,248,0.08)",
          padding: "18px 18px 14px",
        }}
      >
        {/* Top row: icon + "Preview & Deploy" button */}
        <div className="uc-work-header flex items-center justify-between mb-1" style={{ opacity: 0 }}>
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-700"
            style={{ background: "rgba(58,111,248,0.1)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </div>
          <button
            className="uc-work-deploy-btn flex items-center gap-1.5 text-xs font-semibold text-white rounded-full px-4 py-1.5"
            style={{
              background: "#1e3a5f",
              boxShadow: "0 2px 8px rgba(30,58,95,0.25)",
              opacity: 0,
            }}
          >
            Preview &amp; Deploy
          </button>
        </div>

        {/* Dotted separator */}
        <div
          className="uc-work-dotline my-3 h-px"
          style={{
            background: "repeating-linear-gradient(90deg,rgba(58,111,248,0.2) 0,rgba(58,111,248,0.2) 6px,transparent 6px,transparent 12px)",
            opacity: 0,
          }}
        />

        {/* Subtitle */}
        <p
          className="uc-work-subtitle text-xs font-medium text-slate-500 mb-4"
          style={{ opacity: 0 }}
        >
          Industry-ready AI applications
        </p>

        {/* Agent chips */}
        {[
          "Supervisor Agent",
          "Authentication Agent",
          "Transaction Disputes Agent",
          "Document Intelligence Agent",
        ].map((name, i) => (
          <div
            key={name}
            className={`uc-work-chip-${i + 1} flex items-center gap-2 px-3 py-2 rounded-lg mb-2 cursor-pointer`}
            style={{
              background: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(58,111,248,0.15)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              opacity: 0,
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: i === 0 ? "#3A6FF8" : "#94a3b8" }}
            />
            <span className="text-xs font-medium text-slate-700">{name}</span>
            <svg
              className="ml-auto"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   AI FOR SERVICE  ──  Integration Marketplace
   Inspired by: kore.ai "Application Accelerators"
──────────────────────────────────────────── */
export function ServiceAnimation() {
  return (
    <div className="relative w-full h-full flex flex-col select-none overflow-hidden p-4" aria-hidden>
      <div
        className="rounded-xl flex-1 flex flex-col overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.7)",
          boxShadow: "0 8px 32px rgba(58,111,248,0.08)",
          padding: "18px 18px 14px",
        }}
      >
        {/* Integration icons row */}
        <div className="flex items-center gap-3 mb-4">
          {[
            { color: "#FF7A59", letter: "H", label: "HubSpot" },
            { color: "#0078D4", letter: "M", label: "MS Teams" },
            { color: "#10a37f", letter: "G", label: "GPT" },
          ].map(({ color, letter, label }, i) => (
            <div
              key={label}
              className={`uc-svc-icon-${i + 1} w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-sm`}
              style={{ background: color, opacity: 0 }}
              title={label}
            >
              {letter}
            </div>
          ))}
          <span className="uc-svc-icon-1 text-xs text-slate-400 ml-auto font-medium" style={{ opacity: 0 }}>
            +42 integrations
          </span>
        </div>

        {/* Tabs */}
        <div className="uc-svc-tabs flex gap-0 mb-0 border-b border-slate-200/70" style={{ opacity: 0 }}>
          {[
            { label: "Legal", cls: "uc-svc-legal-highlight", barCls: "uc-svc-legal-bar" },
            { label: "IMG Processing", cls: "uc-svc-img-highlight", barCls: "uc-svc-img-bar" },
          ].map(({ label, cls, barCls }) => (
            <div key={label} className="relative flex flex-col items-center mr-6 pb-2">
              <span
                className={`${cls} text-xs font-semibold text-slate-600 cursor-pointer`}
                style={{ opacity: 0.4 }}
              >
                {label}
              </span>
              <div
                className={`${barCls} absolute bottom-0 left-0 h-[2px] rounded-full`}
                style={{ background: "#3A6FF8", width: 0, opacity: 0 }}
              />
            </div>
          ))}
        </div>

        {/* Category rows */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { label: "CRM", cls: "uc-svc-tag-1" },
            { label: "Claims", cls: "uc-svc-tag-2" },
            { label: "Insurance", cls: "uc-svc-tag-3" },
            { label: "Customer Support", cls: "uc-svc-tag-4" },
            { label: "+4", cls: "uc-svc-tag-5" },
          ].map(({ label, cls }) => (
            <span
              key={label}
              className={`${cls} inline-block text-xs font-medium px-3 py-1 rounded-full`}
              style={{
                background: "rgba(58,111,248,0.08)",
                color: "#3A6FF8",
                border: "1px solid rgba(58,111,248,0.15)",
                opacity: 0,
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="uc-svc-tabs my-3 h-px bg-slate-200/50" style={{ opacity: 0 }} />

        {/* Subtitle row */}
        <div className="uc-svc-tabs flex items-center justify-between" style={{ opacity: 0 }}>
          <span className="text-xs text-slate-500">Leverage marketplace AI agents,</span>
          <span className="text-xs text-slate-500">templates &amp; integrations</span>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   AI FOR PROCESS  ──  Code Editor / Builder
   Inspired by: kore.ai "Tailored Applications"
──────────────────────────────────────────── */
export function ProcessAnimation() {
  const codeLines = [
    { ln: "1", code: "def auto_reply(email):", indent: 0 },
    { ln: "2", code: 'if "invoice" in', indent: 1 },
    { ln: "3", code: "email.subject.lower():", indent: 2 },
    { ln: "4", code: 'return "Thanks for the', indent: 3 },
    { ln: "5", code: "invoice. We'll process", indent: 3 },
    { ln: "6", code: 'it soon."', indent: 3 },
    { ln: "7", code: 'return "Thank you for', indent: 1 },
    { ln: "8", code: 'your email."', indent: 2 },
  ] as const;

  return (
    <div className="relative w-full h-full flex flex-col select-none overflow-hidden p-4" aria-hidden>
      <div
        className="uc-code-panel rounded-xl flex-1 flex flex-col overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.7)",
          boxShadow: "0 8px 32px rgba(58,111,248,0.08)",
          opacity: 0,
        }}
      >
        {/* Editor chrome */}
        <div
          className="flex items-center gap-1.5 px-4 py-2.5 flex-shrink-0"
          style={{ background: "rgba(15,23,42,0.06)", borderBottom: "1px solid rgba(255,255,255,0.5)" }}
        >
          <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
          <span className="ml-3 text-xs text-slate-400 font-mono">auto_reply.py</span>
        </div>

        {/* Code lines */}
        <div className="flex-1 px-4 pt-3 pb-2 font-mono text-xs leading-6 overflow-hidden">
          {codeLines.map(({ ln, code, indent }, i) => (
            <div
              key={ln}
              className={`uc-code-line-${i + 1} flex items-start gap-3`}
              style={{ opacity: 0 }}
            >
              <span className="text-slate-300 w-4 text-right flex-shrink-0 select-none">{ln}</span>
              <span
                className="text-slate-700"
                style={{ paddingLeft: `${indent * 14}px` }}
              >
                {i === 0 ? (
                  <>
                    <span style={{ color: "#3A6FF8" }}>def </span>
                    <span style={{ color: "#0f172a" }}>auto_reply</span>
                    <span style={{ color: "#64748b" }}>(email):</span>
                  </>
                ) : i === 1 ? (
                  <>
                    <span style={{ color: "#7c3aed" }}>if </span>
                    <span style={{ color: "#0f766e" }}>&quot;invoice&quot;</span>
                    <span style={{ color: "#64748b" }}> in</span>
                  </>
                ) : i === 3 || i === 6 ? (
                  <>
                    <span style={{ color: "#3A6FF8" }}>return </span>
                    <span style={{ color: "#0f766e" }}>&quot;{code.replace("return \"", "")}</span>
                  </>
                ) : (
                  <span style={{ color: i >= 4 && i <= 5 ? "#0f766e" : "#64748b" }}>{code}</span>
                )}
                {i === codeLines.length - 1 && (
                  <span
                    className="uc-cursor inline-block w-[2px] h-[13px] ml-0.5 align-middle"
                    style={{ background: "#3A6FF8" }}
                  />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Run button row */}
        <div
          className="px-4 pb-3 pt-1 flex items-center justify-between flex-shrink-0"
          style={{ borderTop: "1px solid rgba(255,255,255,0.5)" }}
        >
          <button
            className="uc-code-run inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white"
            style={{
              background: "#1e3a5f",
              boxShadow: "0 2px 8px rgba(30,58,95,0.25)",
              opacity: 0,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Run
          </button>
          <span
            className="uc-code-deploy text-xs font-semibold text-slate-700"
            style={{ opacity: 0 }}
          >
            Deploy now →
          </span>
        </div>
      </div>
    </div>
  );
}
