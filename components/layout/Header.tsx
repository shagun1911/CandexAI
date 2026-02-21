"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
import { navDropdowns } from "@/lib/data/nav";

const SCROLL_THRESHOLD = 80;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-gray-400 transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`}
      fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function MobileCard({
  title,
  description,
  children,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_4px_rgba(0,0,0,0.04)] overflow-hidden">
      {(title || description) && (
        <div className="px-6 pt-6 pb-0">
          {title && <h3 className="text-[20px] font-bold text-gray-900 leading-tight">{title}</h3>}
          {description && <p className="text-[14px] text-gray-400 leading-relaxed mt-1.5">{description}</p>}
          <div className="border-t border-gray-100 mt-5" />
        </div>
      )}
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

function MobileCardLinks({
  label,
  links,
  showSeparator = false,
}: {
  label?: string;
  links: readonly { name: string; href: string }[];
  showSeparator?: boolean;
}) {
  return (
    <div>
      {showSeparator && <div className="border-t border-gray-100 mb-5 -mx-6 px-6" />}
      {label && (
        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-3">
          {label}
        </div>
      )}
      <ul>
        {links.map((l) => (
          <li key={l.name}>
            <Link
              href={l.href}
              className="block py-[9px] text-[15px] font-medium text-gray-800 hover:text-gray-500 transition-colors"
            >
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<"solutions" | "platform" | "more" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<"solutions" | "platform" | "more" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const isHome = pathname === "/";
  const embedded = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (openMenu === null) return;
    const h = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [openMenu]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
    setOpenMenu(null);
  }, [pathname]);

  const toggle = useCallback(
    (m: "solutions" | "platform" | "more") => setOpenMenu((p) => (p === m ? null : m)),
    [],
  );

  const sol = navDropdowns.aiSolutions;
  const plat = navDropdowns.agentPlatform;
  const more = navDropdowns.more;

  const panel = "absolute top-full pt-3 z-50";

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-3 pt-3 pb-2 sm:px-4 sm:pt-4">
        <nav
          ref={navRef}
          className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 transition-all duration-300 ${
            embedded
              ? "h-14 rounded-2xl bg-transparent border border-transparent"
              : "h-14 rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-gray-100/80"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 hover:opacity-80 transition-opacity">
            <img src="/logo_candexAi.png" alt="CandexAI" className="h-8 w-8 object-contain" width={32} height={32} />
            <span className="font-bold text-[17px] tracking-tight text-gray-900">CandexAI</span>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center gap-6">
            {/* AI Solutions */}
            <div className="relative">
              <button type="button" onClick={() => toggle("solutions")} className="flex items-center gap-1 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                AI Solutions <Chevron open={openMenu === "solutions"} />
              </button>
              {openMenu === "solutions" && (
                <div className={`${panel} left-0 w-[min(860px,calc(100vw-2rem))]`}>
                  <div className="bg-white rounded-2xl shadow-[0_24px_60px_-12px_rgba(0,0,0,0.14)] border border-gray-100 overflow-hidden animate-dropdown">
                    <div className="p-8 flex gap-10">
                      <div className="flex-1 grid grid-cols-3 gap-8">
                        {[
                          { title: "AI for Work", desc: "Search across silos. Automate workflows. Orchestrate AI agents.", href: "/ai-for-work" },
                          { title: "AI for Service", desc: "Agentic capabilities to empower customers and personalized experiences.", href: "/ai-for-service" },
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
              <button type="button" onClick={() => toggle("platform")} className="flex items-center gap-1 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
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
              <button type="button" onClick={() => toggle("more")} className="flex items-center gap-1 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
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
            <Link href="/schedule" className="h-9 px-5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center">
              Get started
            </Link>
          </div>

          {/* Mobile hamburger */}
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

        {/* Desktop dropdown backdrop */}
        {openMenu !== null && (
          <div
            className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[2px]"
            style={{ top: "4.5rem" }}
            onClick={() => setOpenMenu(null)}
            aria-hidden
          />
        )}
      </header>

      {/* ── Mobile menu ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 lg:hidden ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />

      {/* Slide-in panel */}
      <div
        className={`fixed inset-0 z-[70] bg-[#f0f6ff] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 bg-white">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
            <img src="/logo_candexAi.png" alt="CandexAI" className="h-8 w-8 object-contain" width={32} height={32} />
            <span className="font-bold text-[18px] tracking-tight text-gray-900">CandexAI</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pt-4 pb-6 space-y-3">
          {/* Menu card — all accordion triggers in one white card */}
          <div className="bg-white rounded-2xl shadow-[0_1px_4px_rgba(0,0,0,0.04)] overflow-hidden">
            {(
              [
                { key: "solutions" as const, label: "AI Solutions" },
                { key: "platform" as const, label: "Agent Platform" },
              ] as const
            ).map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setMobileAccordion((p) => (p === item.key ? null : item.key))}
                className="w-full flex items-center justify-between py-5 px-6 text-[16px] font-semibold text-gray-900 border-b border-gray-100/60"
              >
                {item.label}
                <Chevron open={mobileAccordion === item.key} />
              </button>
            ))}
            <Link
              href="/voice-ai"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center py-5 px-6 text-[16px] font-semibold text-gray-900 border-b border-gray-100/60 hover:text-gray-600 transition-colors"
            >
              Voice AI
            </Link>
            <Link
              href="/schedule"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center py-5 px-6 text-[16px] font-semibold text-gray-900 border-b border-gray-100/60 hover:text-gray-600 transition-colors"
            >
              Schedule
            </Link>
            <button
              type="button"
              onClick={() => setMobileAccordion((p) => (p === "more" ? null : "more"))}
              className="w-full flex items-center justify-between py-5 px-6 text-[16px] font-semibold text-gray-900"
            >
              More
              <Chevron open={mobileAccordion === "more"} />
            </button>
          </div>

          {/* Expanded content — kore.ai style white cards */}
          {mobileAccordion === "solutions" && (
            <>
              <MobileCard>
                <MobileCardLinks links={sol.solutions} />
              </MobileCard>
              <MobileCard>
                <MobileCardLinks label="Modules" links={sol.features} />
                <MobileCardLinks label="Departments" links={sol.departments} showSeparator />
              </MobileCard>
              <MobileCard>
                <MobileCardLinks label="Top Resources" links={sol.topResources} />
                <MobileCardLinks label="Quick Links" links={sol.quickLinks} showSeparator />
              </MobileCard>
            </>
          )}

          {mobileAccordion === "platform" && (
            <>
              <MobileCard title="Agent Platform" description={plat.subtitle}>
                <Link
                  href={plat.learnMoreHref}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-gray-900 text-white text-[11px] font-bold uppercase tracking-[0.08em] hover:bg-gray-800 transition-colors mb-1"
                >
                  Learn more
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                </Link>
                <MobileCardLinks label="Platform Modules" links={plat.features} showSeparator />
              </MobileCard>
              <MobileCard>
                <MobileCardLinks label="Get Started" links={plat.getStarted} />
                <MobileCardLinks label="Learn + Discover" links={plat.learnDiscover} showSeparator />
              </MobileCard>
            </>
          )}

          {mobileAccordion === "more" && (
            <>
              <MobileCard>
                <MobileCardLinks label="Resources" links={more.resources} />
                <MobileCardLinks label="Support" links={more.support} showSeparator />
              </MobileCard>
              <MobileCard>
                <MobileCardLinks label="Company" links={more.company} />
              </MobileCard>
            </>
          )}
        </div>

        {/* Footer CTA */}
        <div className="p-4 bg-[#f0f6ff]">
          <Link
            href="/schedule"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-full h-12 rounded-xl bg-gray-900 text-white text-[14px] font-bold hover:bg-gray-800 transition-colors shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
          >
            Get started
          </Link>
        </div>
      </div>
    </>
  );
}
