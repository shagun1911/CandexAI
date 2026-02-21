"use client";

import { useEffect, useRef, useState } from "react";

const MIN_MS  = 2200;
const FADE_MS = 500;

/**
 * Client-only loader loaded via dynamic({ ssr: false }) from LoaderWrapper.
 * Never SSR'd → zero hydration risk.
 * Uses CSS classes only — no inline style objects that could differ server/client.
 */
export default function ElegantLoader() {
  const [show,  setShow]  = useState(true);
  const [fading, setFading] = useState(false);
  const start = useRef(Date.now());

  useEffect(() => {
    const dismiss = () => {
      const wait = Math.max(0, MIN_MS - (Date.now() - start.current));
      setTimeout(() => {
        setFading(true);
        setTimeout(() => setShow(false), FADE_MS);
      }, wait);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
      const guard = setTimeout(dismiss, 5000);
      return () => {
        clearTimeout(guard);
        window.removeEventListener("load", dismiss);
      };
    }
  }, []);

  if (!show) return null;

  return (
    <div className={`cx-loader-overlay${fading ? " cx-fading" : ""}`} aria-hidden="true">
      {/* Network graph */}
      <svg
        width="140"
        height="68"
        viewBox="0 0 140 68"
        fill="none"
        aria-hidden="true"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="cxGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#3A6FF8" stopOpacity="0" />
            <stop offset="50%"  stopColor="#3A6FF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3A6FF8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Spine */}
        <line className="cx-path" x1="18" y1="34" x2="56"  y2="34" stroke="url(#cxGrad)"            strokeWidth="1.5" strokeLinecap="round" />
        <line className="cx-path" x1="56" y1="34" x2="84"  y2="34" stroke="url(#cxGrad)"            strokeWidth="1.5" strokeLinecap="round" style={{ animationDelay: "0.15s" }} />
        <line className="cx-path" x1="84" y1="34" x2="122" y2="34" stroke="url(#cxGrad)"            strokeWidth="1.5" strokeLinecap="round" style={{ animationDelay: "0.3s" }} />

        {/* Branches */}
        <line className="cx-path" x1="56" y1="34" x2="56"  y2="16" stroke="rgba(58,111,248,0.35)"  strokeWidth="1.2" strokeLinecap="round" style={{ animationDelay: "0.1s" }} />
        <line className="cx-path" x1="56" y1="34" x2="56"  y2="52" stroke="rgba(58,111,248,0.35)"  strokeWidth="1.2" strokeLinecap="round" style={{ animationDelay: "0.24s" }} />
        <line className="cx-path" x1="84" y1="34" x2="84"  y2="18" stroke="rgba(58,111,248,0.25)"  strokeWidth="1.2" strokeLinecap="round" style={{ animationDelay: "0.38s" }} />

        {/* Nodes */}
        <circle className="cx-node" cx="18"  cy="34" r="4.5" fill="#3A6FF8" />
        <circle className="cx-node" cx="56"  cy="34" r="6"   fill="#3A6FF8"               style={{ animationDelay: "0.12s" }} />
        <circle className="cx-node" cx="84"  cy="34" r="4.5" fill="#3A6FF8"               style={{ animationDelay: "0.22s" }} />
        <circle className="cx-node" cx="122" cy="34" r="4.5" fill="#3A6FF8"               style={{ animationDelay: "0.36s" }} />
        <circle className="cx-node" cx="56"  cy="16" r="3"   fill="rgba(58,111,248,0.7)"  style={{ animationDelay: "0.06s" }} />
        <circle className="cx-node" cx="56"  cy="52" r="3"   fill="rgba(58,111,248,0.7)"  style={{ animationDelay: "0.28s" }} />
        <circle className="cx-node" cx="84"  cy="18" r="2.5" fill="rgba(58,111,248,0.55)" style={{ animationDelay: "0.4s" }} />
      </svg>

      {/* Wordmark */}
      <div className="cx-wordmark">
        <span className="cx-word">Candex</span>
        <span className="cx-word-accent">Ai</span>
        <div className="cx-underline" />
      </div>
    </div>
  );
}
