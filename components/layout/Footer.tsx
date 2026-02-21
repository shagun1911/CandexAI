import Link from "next/link";
import type { ReactElement } from "react";

/* ── Social icon SVGs ──────────────────────────────────────────────── */
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
const SOCIAL_ICONS: Record<string, ReactElement> = {
  linkedin: <LinkedInIcon />,
  youtube: <YouTubeIcon />,
  x: <XIcon />,
};

/* ── Column data ───────────────────────────────────────────────────── */
const COL1 = {
  heading: "PRE-BUILT SOLUTIONS",
  links: [
    { label: "AI for Banking",        href: "/use-cases" },
    { label: "AI for Healthcare",     href: "/use-cases" },
    { label: "AI for Retail",         href: "/use-cases" },
    { label: "AI for HR & Recruiting",href: "/use-cases" },
    { label: "AI for Legal",          href: "/use-cases" },
    { label: "AI for Government",     href: "/use-cases" },
    { label: "AI for Manufacturing",  href: "/use-cases" },
  ],
};

const COL2 = {
  heading: "CANDEXAI PLATFORM",
  links: [
    { label: "Platform Overview",     href: "/technology" },
    { label: "Agentic AI Framework",  href: "/ai-for-work" },
    { label: "AI Engineering Tools",  href: "/technology" },
    { label: "Document Intelligence", href: "/ai-for-process" },
    { label: "Voice AI",              href: "/voice-ai" },
    { label: "Security & Governance", href: "/technology" },
    { label: "Integrations",          href: "/technology" },
  ],
};

const COL3 = {
  heading: "AI APPS",
  links: [
    { label: "AI for Work",         href: "/ai-for-work" },
    { label: "AI for Service",      href: "/ai-for-service" },
    { label: "AI for Process",      href: "/ai-for-process" },
    { label: "Use Cases Library",   href: "/use-cases" },
    { label: "Agent Marketplace",   href: "/use-cases" },
    { label: "Pricing",             href: "/pricing" },
  ],
};

const COL4 = {
  heading: "COMPANY",
  links: [
    { label: "About CandexAI",   href: "#about" },
    { label: "Leadership",       href: "#leadership" },
    { label: "Careers",          href: "#careers" },
    { label: "Partners",         href: "#partners" },
    { label: "Newsroom",         href: "/blog" },
    { label: "Contact Us",       href: "/schedule" },
  ],
};

const COL5 = {
  heading: "RESOURCES",
  links: [
    { label: "Documentation",      href: "/documentation" },
    { label: "Blog",               href: "/blog" },
    { label: "AI Cookbook",        href: "/cookbook" },
    { label: "Whitepapers",        href: "/blog" },
    { label: "Benchmark Reports",  href: "/technology" },
    { label: "AI Glossary",        href: "/blog" },
    { label: "Videos",             href: "/blog" },
    { label: "CXO Toolkit",        href: "/blog" },
  ],
};

const COL6 = {
  heading: "GET INVOLVED",
  links: [
    { label: "Request a Demo",   href: "/schedule" },
    { label: "Book a Meeting",   href: "/schedule" },
    { label: "Enterprise Plans", href: "/pricing" },
    { label: "Support",          href: "mailto:infoCandexAI@gmail.com" },
    { label: "Community",        href: "#community" },
    { label: "Events",           href: "#events" },
  ],
};

const SOCIAL = [
  { name: "LinkedIn",   href: "https://linkedin.com",  icon: "linkedin" },
  { name: "YouTube",    href: "https://youtube.com",   icon: "youtube" },
  { name: "X (Twitter)",href: "https://x.com",         icon: "x" },
];

const LEGAL = [
  { label: "Privacy Policy",            href: "/privacy" },
  { label: "Terms of Service",          href: "/terms" },
  { label: "Acceptable Use Policy",     href: "#" },
  { label: "Cookie Policy",             href: "#" },
  { label: "Intellectual Property Rights", href: "#" },
];

/* ── Link column ───────────────────────────────────────────────────── */
function LinkCol({ col }: { col: { heading: string; links: { label: string; href: string }[] } }) {
  return (
    <div>
      <p
        className="text-[10px] font-semibold text-slate-400 mb-4"
        style={{ letterSpacing: "0.1em" }}
      >
        {col.heading}
      </p>
      <ul className="space-y-2.5">
        {col.links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-[13px] text-slate-600 hover:text-slate-900 transition-colors leading-snug"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Footer ─────────────────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 10,
        background: "rgba(248,250,255,0.98)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderTop: "1px solid rgba(203,213,225,0.7)",
      }}
    >
      {/* ── Top brand strip ──────────────────────────────────────────── */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ borderBottom: "1px dashed rgba(203,213,225,0.8)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo_candexAi.png"
            alt="CandexAI"
            className="h-8 w-8 object-contain"
            width={32}
            height={32}
          />
          <div className="flex items-baseline gap-1.5">
            <span className="text-slate-900 font-bold text-lg tracking-tight">Candex</span>
            <span
              className="text-[10px] font-bold px-1.5 py-0.5 rounded text-slate-700"
              style={{
                border: "1px solid rgba(58,111,248,0.3)",
                background: "rgba(58,111,248,0.06)",
                letterSpacing: "0.04em",
              }}
            >
              AI
            </span>
          </div>
        </div>

        {/* Tagline — hidden on mobile */}
        <p className="text-slate-500 text-sm hidden md:block">
          AI Solutions for the Enterprise
        </p>

        {/* Contact CTA — dashed border pill like kore.ai language selector */}
        <a
          href="mailto:infoCandexAI@gmail.com"
          className="flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 transition-colors rounded-lg px-4 py-2"
          style={{ border: "1px solid rgba(203,213,225,0.9)" }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          infoCandexAI@gmail.com
        </a>
      </div>

      {/* ── Main columns ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        {/* Top row: 3 product columns + CTA card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 pb-10"
          style={{ borderBottom: "1px dashed rgba(203,213,225,0.7)" }}
        >
          <LinkCol col={COL1} />
          <LinkCol col={COL2} />
          <LinkCol col={COL3} />

          {/* "Let's work together" card — kore.ai style */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-between"
            style={{
              border: "1.5px dashed rgba(148,163,184,0.5)",
              background: "rgba(255,255,255,0.6)",
              minHeight: 220,
            }}
          >
            {/* Icon */}
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
              style={{
                background: "rgba(58,111,248,0.08)",
                border: "1px solid rgba(58,111,248,0.18)",
              }}
            >
              <svg className="w-4.5 h-4.5 text-slate-700" style={{ width: 18, height: 18 }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>

            <div className="mb-5">
              <p className="text-slate-900 font-bold text-base leading-snug mb-1.5">
                Let&apos;s work together
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                Get answers and a customized quote for your projects.
              </p>
            </div>

            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[11px] font-bold text-white transition-all hover:opacity-90 w-fit"
              style={{
                background: "#1e3a5f",
                letterSpacing: "0.06em",
              }}
            >
              BOOK A DEMO
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom row: 3 more columns + social icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 pt-10">
          <LinkCol col={COL4} />
          <LinkCol col={COL5} />
          <LinkCol col={COL6} />

          {/* Follow us on — kore.ai style */}
          <div>
            <p
              className="text-[10px] font-semibold text-slate-400 mb-4"
              style={{ letterSpacing: "0.1em" }}
            >
              FOLLOW US ON
            </p>
            <div className="flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  style={{ background: "#0f172a" }}
                >
                  {SOCIAL_ICONS[s.icon]}
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="mt-6 flex items-start gap-2 text-xs text-slate-400">
              <svg className="w-3.5 h-3.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="leading-relaxed">Mohan Nagar, Jaipur,<br />Rajasthan, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────── */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px dashed rgba(203,213,225,0.8)" }}
      >
        <p className="text-xs text-slate-400">
          © 2026 CandexAI Inc. All trademarks are property of their respective owners.
        </p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {LEGAL.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[11px] text-slate-400 hover:text-slate-700 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
