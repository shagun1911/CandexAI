"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
import { navDropdowns } from "@/lib/data/nav";

const HERO_SCROLL_THRESHOLD = 80;

/* ─── Chevron icon ────────────────────────────────────────────────────────── */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`}
      fill="none" stroke="currentColor" viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

/* ─── Arrow icon ──────────────────────────────────────────────────────────── */
function Arrow() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

/* ─── Mobile: card-based section with title + description (kore.ai) ──────── */
function MobileCardSection({
  title, description, children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-4 mb-3 bg-white rounded-2xl shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
      <div className="px-6 pt-6 pb-2">
        <h3 className="text-[20px] font-bold text-gray-900 leading-tight">{title}</h3>
        {description && (
          <p className="text-[13px] text-gray-400 leading-relaxed mt-1.5">{description}</p>
        )}
      </div>
      <div className="px-3 pb-4">{children}</div>
    </div>
  );
}

/* ─── Mobile: sub-group with uppercase label (kore.ai) ───────────────────── */
function MobileCardGroup({
  label, links, dividerTop,
}: {
  label?: string;
  links: readonly { name: string; href: string }[];
  dividerTop?: boolean;
}) {
  return (
    <div className="mx-4 mb-3 bg-white rounded-2xl shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
      <div className="px-6 py-5">
        {dividerTop && <div className="border-t border-gray-100 -mx-6 mb-5" />}
        {label && (
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-4">{label}</div>
        )}
        <ul className="space-y-1">
          {links.map((l) => (
            <li key={l.name}>
              <Link
                href={l.href}
                className="block py-[6px] text-[15px] text-gray-800 hover:text-gray-600 transition-colors"
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Mobile: accordion row inside the nav card ──────────────────────────── */
function MobileAccordion({
  label, isOpen, onToggle, defaultOpen: _,
}: {
  label: string;
  isOpen?: boolean;
  onToggle?: () => void;
  defaultOpen?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-800 hover:text-gray-600 transition-colors"
    >
      {label}
      <Chevron open={!!isOpen} />
    </button>
  );
}

/* ─── Mobile: category arrow link ("For Service →") ──────────────────────── */
function MobileCatLink({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className="flex items-center justify-between px-6 py-4 group">
      <span className="text-[16px] font-semibold text-gray-900">{label}</span>
      <svg className="w-4 h-4 text-gray-400 shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

/* ─── Main component ──────────────────────────────────────────────────────── */
export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<"solutions" | "platform" | "more" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  // Start as `true` (solid white) on first render so server & client always agree.
  // After mount the scroll listener corrects it — preventing hydration mismatches.
  const [isScrolled, setIsScrolled] = useState(true);
  const navRef = useRef<HTMLElement>(null);

  const isEmbedded = pathname === "/" && !isScrolled;

  /* scroll listener — runs only on client after mount */
  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > HERO_SCROLL_THRESHOLD);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  /* close desktop dropdown on outside click */
  useEffect(() => {
    if (openMenu === null) return;
    const handle = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [openMenu]);

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* close on route change */
  useEffect(() => { setMobileOpen(false); setOpenMenu(null); setMobileSection(null); }, [pathname]);

  const toggle = useCallback((m: "solutions" | "platform" | "more") => {
    setOpenMenu((p) => (p === m ? null : m));
  }, []);

  const sol  = navDropdowns.aiSolutions;
  const plat = navDropdowns.agentPlatform;
  const more = navDropdowns.more;

  /* ── Desktop dropdown panel class ── */
  const panel = "absolute top-full pt-3 z-50";

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-3 pt-3 pb-2 sm:px-4 sm:pt-4" suppressHydrationWarning>
        <nav
          ref={navRef}
          suppressHydrationWarning
          className={`max-w-6xl mx-auto rounded-2xl flex items-center justify-between h-14 px-4 sm:px-6 transition-all duration-300 ${
            isEmbedded
              ? "bg-transparent border border-white/20"
              : "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-gray-100/80"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 hover:opacity-80 transition-opacity">
            <img src="/logo_candexAi.png" alt="CandexAI" className="h-8 w-8 object-contain" width={32} height={32} />
            <span className="font-bold text-[17px] tracking-tight text-gray-900">CandexAI</span>
          </Link>

          {/* ── Desktop nav ──────────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-6">

            {/* AI Solutions */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggle("solutions")}
                className="flex items-center gap-1 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                AI Solutions <Chevron open={openMenu === "solutions"} />
              </button>
              {openMenu === "solutions" && (
                <div className={`${panel} left-0 w-[min(860px,calc(100vw-2rem))]`}>
                  <div className="bg-white rounded-2xl shadow-[0_24px_60px_-12px_rgba(0,0,0,0.14)] border border-gray-100 overflow-hidden animate-dropdown">
                    <div className="p-8 flex gap-10">
                      <div className="flex-1 grid grid-cols-3 gap-8">
                        {[
                          { title: "AI for Work",    desc: "Search across silos. Automate workflows. Orchestrate AI agents.",              href: "/ai-for-work" },
                          { title: "AI for Service", desc: "Agentic capabilities to empower customers and personalized experiences.",     href: "/ai-for-service" },
                          { title: "AI for Process", desc: "Streamline knowledge-intensive business processes with autonomous AI agents.", href: "/ai-for-process" },
                        ].map((s) => (
                          <div key={s.title}>
                            <h3 className="text-base font-bold text-gray-900 mb-1.5">{s.title}</h3>
                            <p className="text-gray-500 text-[13px] leading-relaxed mb-3">{s.desc}</p>
                            <Link href={s.href} className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-gray-900 text-white text-xs font-semibold hover:bg-gray-700 transition-colors">
                              Learn more <Arrow />
                            </Link>
                          </div>
                        ))}
                      </div>
                      <div className="w-52 shrink-0 border-l border-gray-100 pl-8 space-y-5">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">Top Resources</div>
                          <ul className="space-y-1.5">
                            {sol.topResources.map((r) => (
                              <li key={r.name}><Link href={r.href} className="text-[13px] font-medium text-gray-800 hover:text-blue-600 transition-colors block">{r.name}</Link></li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">Quick Links</div>
                          <ul className="space-y-1.5">
                            {sol.quickLinks.slice(0, 5).map((r) => (
                              <li key={r.name}><Link href={r.href} className="text-[13px] font-medium text-gray-800 hover:text-blue-600 transition-colors block">{r.name}</Link></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Agent Platform */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggle("platform")}
                className="flex items-center gap-1 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Agent Platform <Chevron open={openMenu === "platform"} />
              </button>
              {openMenu === "platform" && (
                <div className={`${panel} left-1/2 -translate-x-1/2 w-[min(860px,calc(100vw-2rem))]`}>
                  <div className="bg-white rounded-2xl shadow-[0_24px_60px_-12px_rgba(0,0,0,0.14)] border border-gray-100 overflow-hidden animate-dropdown">
                    <div className="p-8 grid grid-cols-[1fr_1fr_260px] gap-8">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{plat.title}</h3>
                        <p className="text-[13px] text-gray-500 mb-4">{plat.subtitle}</p>
                        <Link href={plat.learnMoreHref} className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors mb-6">
                          Learn more <Arrow />
                        </Link>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">Features</div>
                        <ul className="space-y-1.5">
                          {plat.features.map((f) => (
                            <li key={f.name}><Link href={f.href} className="text-[13px] font-medium text-gray-800 hover:text-blue-600 transition-colors block py-0.5">{f.name}</Link></li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">Get Started</div>
                          <ul className="space-y-1.5">
                            {plat.getStarted.map((f) => (
                              <li key={f.name}><Link href={f.href} className="text-[13px] font-medium text-gray-800 hover:text-blue-600 transition-colors block py-0.5">{f.name}</Link></li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">Learn + Discover</div>
                          <ul className="space-y-1.5">
                            {plat.learnDiscover.map((f) => (
                              <li key={f.name}><Link href={f.href} className="text-[13px] font-medium text-gray-800 hover:text-blue-600 transition-colors block py-0.5">{f.name}</Link></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Link href={plat.featuredCard.href} className="block p-5 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1.5">{plat.featuredCard.eyebrow}</div>
                          <div className="text-base font-bold mb-1">{plat.featuredCard.title}</div>
                          <p className="text-[12px] text-white/80 leading-snug mb-3">{plat.featuredCard.description}</p>
                          <span className="inline-flex items-center h-8 px-3 rounded-lg bg-white text-gray-900 text-xs font-bold">{plat.featuredCard.label}</span>
                        </Link>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Recent Insights</div>
                          <ul className="space-y-2">
                            {plat.recentInsights.map((r) => (
                              <li key={r.name}>
                                <Link href={r.href} className="flex items-center gap-2.5 text-[12px] font-medium text-gray-800 hover:text-blue-600 transition-colors">
                                  <span className="w-8 h-8 rounded-lg bg-blue-50 shrink-0 flex items-center justify-center text-blue-600 text-[10px] font-bold">AI</span>
                                  {r.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/voice-ai" className="py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Voice AI</Link>
            <Link href="/schedule" className="py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Schedule</Link>

            {/* More */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggle("more")}
                className="flex items-center gap-1 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                More <Chevron open={openMenu === "more"} />
              </button>
              {openMenu === "more" && (
                <div className={`${panel} right-0 w-[min(780px,calc(100vw-2rem))]`}>
                  <div className="bg-white rounded-2xl shadow-[0_24px_60px_-12px_rgba(0,0,0,0.14)] border border-gray-100 overflow-hidden animate-dropdown">
                    <div className="p-8 grid grid-cols-[1fr_1fr_240px] gap-8">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">Resources</div>
                          <ul className="space-y-1.5">
                            {more.resources.map((r) => (
                              <li key={r.name}><Link href={r.href} className="text-[13px] font-medium text-gray-800 hover:text-blue-600 transition-colors block py-0.5">{r.name}</Link></li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">Support</div>
                          <ul className="space-y-1.5">
                            {more.support.map((r) => (
                              <li key={r.name}><Link href={r.href} className="text-[13px] font-medium text-gray-800 hover:text-blue-600 transition-colors block py-0.5">{r.name}</Link></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">Company</div>
                        <ul className="space-y-1.5">
                          {more.company.map((r) => (
                            <li key={r.name}><Link href={r.href} className="text-[13px] font-medium text-gray-800 hover:text-blue-600 transition-colors block py-0.5">{r.name}</Link></li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <Link href={more.talkToExpert.href} className="block p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors">
                          <h4 className="font-bold text-gray-900 text-[13px] mb-1">{more.talkToExpert.title}</h4>
                          <p className="text-[12px] text-gray-500 leading-snug">{more.talkToExpert.description}</p>
                        </Link>
                        <Link href={more.requestDemo.href} className="block p-4 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                          <h4 className="font-bold text-[13px] mb-1">{more.requestDemo.title}</h4>
                          <p className="text-[12px] text-gray-300 leading-snug">{more.requestDemo.description}</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link href="/schedule" className="h-9 px-5 rounded-lg bg-[#1e3a5f] text-white text-sm font-semibold hover:bg-[#152a47] transition-all duration-200 flex items-center shadow-sm hover:shadow-md">
              Get started
            </Link>
          </div>

          {/* ── Mobile hamburger ──────────────────────────────────────────── */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 -mr-1 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Desktop backdrop */}
        {openMenu !== null && (
          <div
            className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[2px]"
            style={{ top: "4.5rem" }}
            onClick={() => setOpenMenu(null)}
            aria-hidden
          />
        )}
      </header>

      {/* ── Mobile full-screen menu (kore.ai style) ─────────────────────────── */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "#EDF2FA" }}
      >
        <div className="h-full flex flex-col">

          {/* ── Header bar ── */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
              <img src="/logo_candexAi.png" alt="CandexAI" className="h-8 w-8 object-contain" width={32} height={32} />
              <span className="font-bold text-[18px] tracking-tight text-gray-900">CandexAI</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ── Scrollable content ── */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-0 pb-8">

            {/* Top-level nav card */}
            <div className="mx-4 mb-3 bg-white rounded-2xl shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
              <MobileAccordion
                label="AI Solutions"
                isOpen={mobileSection === "AI Solutions"}
                onToggle={() => setMobileSection(mobileSection === "AI Solutions" ? null : "AI Solutions")}
              />
              <MobileAccordion
                label="Agent Platform"
                isOpen={mobileSection === "Agent Platform"}
                onToggle={() => setMobileSection(mobileSection === "Agent Platform" ? null : "Agent Platform")}
              />
              <Link
                href="/voice-ai"
                onClick={() => setMobileOpen(false)}
                className="flex items-center px-6 py-4 text-[15px] font-medium text-gray-800 hover:text-gray-600 transition-colors"
              >
                Voice AI
              </Link>
              <MobileAccordion
                label="More"
                isOpen={mobileSection === "More"}
                onToggle={() => setMobileSection(mobileSection === "More" ? null : "More")}
              />
            </div>

            {/* ── Expanded content renders below based on mobileSection ── */}
            {mobileSection === "AI Solutions" && (
              <>
                {/* Pre-built Applications card */}
                <MobileCardSection
                  title="AI Solutions"
                  description="Work, service, and process — unified enterprise AI."
                >
                  <div className="border-t border-gray-100 mx-3 mt-2 mb-1" />
                  <MobileCatLink label="For Work" href="/ai-for-work" />
                  <MobileCatLink label="For Service" href="/ai-for-service" />
                  <MobileCatLink label="For Process" href="/ai-for-process" />
                </MobileCardSection>

                <MobileCardGroup label="Modules" links={sol.features} />
                <MobileCardGroup label="Departments" links={sol.departments} />
                <MobileCardGroup label="Top Resources" links={sol.topResources} />
                <MobileCardGroup label="Quick Links" links={sol.quickLinks} />
              </>
            )}

            {mobileSection === "Agent Platform" && (
              <>
                {/* Platform hero card */}
                <div className="mx-4 mb-3 bg-white rounded-2xl shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                  <div className="px-6 pt-6 pb-6">
                    <h3 className="text-[22px] font-bold text-gray-900 leading-tight mb-2">
                      {plat.title}
                    </h3>
                    <p className="text-[14px] text-gray-400 leading-relaxed mb-5">
                      {plat.subtitle}
                    </p>
                    <Link
                      href={plat.learnMoreHref}
                      onClick={() => setMobileOpen(false)}
                      className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-gray-900 text-white text-[12px] font-bold uppercase tracking-[0.08em] hover:bg-gray-800 transition-colors"
                    >
                      Learn more
                      <span className="w-1 h-1 rounded-full bg-white/60" />
                    </Link>
                  </div>
                </div>

                <MobileCardGroup label="Platform Modules" links={plat.features} />
                <MobileCardGroup label="Get Started" links={plat.getStarted} />
                <MobileCardGroup label="Learn + Discover" links={plat.learnDiscover} />

                {/* Featured card */}
                <div className="mx-4 mb-3">
                  <Link
                    href={plat.featuredCard.href}
                    onClick={() => setMobileOpen(false)}
                    className="block p-5 rounded-2xl bg-gray-900 text-white hover:bg-gray-800 transition-colors shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50 mb-2">{plat.featuredCard.eyebrow}</div>
                    <div className="text-[16px] font-bold mb-1">{plat.featuredCard.title}</div>
                    <p className="text-[13px] text-white/60 leading-relaxed mb-4">{plat.featuredCard.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white uppercase tracking-wide">
                      {plat.featuredCard.label}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </>
            )}

            {mobileSection === "More" && (
              <>
                <MobileCardGroup label="Resources" links={more.resources} />
                <MobileCardGroup label="Support" links={more.support} />
                <MobileCardGroup label="Company" links={more.company} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
