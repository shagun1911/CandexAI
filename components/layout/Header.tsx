"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { nav, navDropdowns } from "@/lib/data/nav";

/* Total header height: top padding + bar height (for blur overlay) */
const HEADER_HEIGHT = "4.5rem";
const HERO_SCROLL_THRESHOLD = 120;

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<"solutions" | "platform" | "more" | null>(null);
  const [dropdownAnimOpen, setDropdownAnimOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const isEmbedded = pathname === "/" && !isScrolled;

  // Scroll: on homepage, switch from embedded to floating header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(typeof window !== "undefined" ? window.scrollY > HERO_SCROLL_THRESHOLD : false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    if (openMenu === null) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (navRef.current && !navRef.current.contains(target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openMenu]);

  // Smooth open animation: add open class after mount
  useEffect(() => {
    if (openMenu !== null) {
      setDropdownAnimOpen(false);
      const t = requestAnimationFrame(() => {
        requestAnimationFrame(() => setDropdownAnimOpen(true));
      });
      return () => cancelAnimationFrame(t);
    } else {
      setDropdownAnimOpen(false);
    }
  }, [openMenu]);

  const toggleMenu = useCallback((menu: "solutions" | "platform" | "more") => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  }, []);

  const sol = navDropdowns.aiSolutions;
  const plat = navDropdowns.agentPlatform;
  const more = navDropdowns.more;

  // Blur overlay: render via portal to body so it sits above page content (hero etc.)
  const blurOverlay =
    typeof document !== "undefined" && openMenu !== null
      ? createPortal(
          <div
            className="fixed left-0 right-0 bottom-0 z-40 nav-dropdown-backdrop bg-white/30"
            style={{ top: HEADER_HEIGHT }}
            onClick={() => setOpenMenu(null)}
            onMouseDown={(e) => e.preventDefault()}
            aria-hidden
          />,
          document.body
        )
      : null;

  const dropdownPanelClass = `nav-dropdown-panel ${dropdownAnimOpen ? "nav-dropdown-panel-open" : ""}`;

  return (
    <>
      <header className="sticky top-0 z-50 w-full pt-4 pb-2 px-4 sm:px-6 transition-all duration-300">
        <nav
          ref={navRef}
          className={`max-w-6xl mx-auto py-8 rounded-2xl flex items-center justify-between h-14 px-4 sm:px-6 lg:px-8 relative transition-all duration-300 ${
            isEmbedded
              ? "bg-transparent border border-white/20 shadow-none"
              : "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/80"
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="flex items-center gap-2 shrink-0 text-gray-900 hover:opacity-90 transition-opacity">
              <img src="/logo_candexAi.png" alt="candexAi" className="h-8 w-8 object-contain" width={32} height={32} />
              <span className="font-bold text-lg tracking-tight">CandexAI</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {/* AI Solutions - click to open */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleMenu("solutions")}
                  className="flex items-center gap-1 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  AI Solutions
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${openMenu === "solutions" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openMenu === "solutions" && (
                  <div className="absolute top-full left-0 pt-3 w-[min(880px,calc(100vw-2rem))] z-50">
                    <div className={`bg-white rounded-2xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden ${dropdownPanelClass}`}>
                      {/* Kore.ai-style: three main blocks + right column (less congested) */}
                      <div className="p-10 flex gap-12">
                        <div className="flex-1 grid grid-cols-3 gap-10">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">AI for Work</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              Search across silos. Automate workflows. Orchestrate AI agents. Govern with confidence.
                            </p>
                            <Link
                              href={sol.solutions[0].href}
                              className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                            >
                              Learn more
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">AI for Service</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              Leverage Agentic capabilities to empower customers and create personalized experiences.
                            </p>
                            <Link
                              href={sol.solutions[1].href}
                              className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                            >
                              Learn more
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">AI for Process</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              Streamline knowledge-intensive business processes with autonomous AI agents.
                            </p>
                            <Link
                              href={sol.solutions[2].href}
                              className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                            >
                              Learn more
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="w-56 shrink-0 pl-8 border-l border-gray-100 space-y-6">
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Top resources</div>
                            <ul className="space-y-2">
                              {sol.topResources.map((item) => (
                                <li key={item.name}>
                                  <Link href={item.href} className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors block py-0.5">
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Quick links</div>
                            <ul className="space-y-2">
                              {sol.quickLinks.slice(0, 6).map((item) => (
                                <li key={item.name}>
                                  <Link href={item.href} className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors block py-0.5">
                                    {item.name}
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

              {/* Agent Platform - click to open */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleMenu("platform")}
                  className="flex items-center gap-1 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Agent Platform
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${openMenu === "platform" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openMenu === "platform" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[min(900px,calc(100vw-2rem))] z-50">
                    <div className={`bg-white rounded-2xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden ${dropdownPanelClass}`}>
                      <div className="p-10 grid grid-cols-[1fr_1fr_280px] gap-10">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">{plat.title}</h3>
                          <p className="text-gray-600 text-[15px] mb-6">{plat.subtitle}</p>
                          <Link
                            href={plat.learnMoreHref}
                            className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors mb-8"
                          >
                            Learn more
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                          <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Features</div>
                          <ul className="space-y-2">
                            {plat.features.map((item) => (
                              <li key={item.name}>
                                <Link href={item.href} className="text-[15px] font-medium text-gray-900 hover:text-blue-600 transition-colors block py-1">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-8">
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Get started</div>
                            <ul className="space-y-2">
                              {plat.getStarted.map((item) => (
                                <li key={item.name}>
                                  <Link href={item.href} className="text-[15px] font-medium text-gray-900 hover:text-blue-600 transition-colors block py-1">
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Learn + Discover</div>
                            <ul className="space-y-2">
                              {plat.learnDiscover.map((item) => (
                                <li key={item.name}>
                                  <Link href={item.href} className="text-[15px] font-medium text-gray-900 hover:text-blue-600 transition-colors block py-1">
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <Link href={plat.featuredCard.href} className="block p-5 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                            <div className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-2">{plat.featuredCard.eyebrow}</div>
                            <div className="text-xl font-bold mb-1">{plat.featuredCard.title}</div>
                            <p className="text-sm text-white/90 leading-snug mb-3">{plat.featuredCard.description}</p>
                            <span className="inline-flex items-center justify-center h-9 px-4 rounded-lg bg-white text-gray-900 text-sm font-semibold">
                              {plat.featuredCard.label}
                            </span>
                          </Link>
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Recent insights</div>
                            <ul className="space-y-2">
                              {plat.recentInsights.map((item) => (
                                <li key={item.name}>
                                  <Link href={item.href} className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-lg bg-gray-100 shrink-0" />
                                    {item.name}
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

              <Link href="/voice-ai" className="py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Voice AI
              </Link>
              <Link href="/schedule" className="py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Schedule
              </Link>

              {/* More - click to open */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleMenu("more")}
                  className="flex items-center gap-1 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  More
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${openMenu === "more" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openMenu === "more" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[min(900px,calc(100vw-2rem))] z-50">
                    <div className={`bg-white rounded-2xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden ${dropdownPanelClass}`}>
                      <div className="p-10 grid grid-cols-[1fr_1fr_280px] gap-10 items-start">
                        <div className="grid grid-cols-2 gap-8">
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Resources</div>
                            <ul className="space-y-2">
                              {more.resources.map((item) => (
                                <li key={item.name}>
                                  <Link href={item.href} className="text-[15px] font-medium text-gray-900 hover:text-blue-600 transition-colors block py-0.5">
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Support</div>
                            <ul className="space-y-2">
                              {more.support.map((item) => (
                                <li key={item.name}>
                                  <Link href={item.href} className="text-[15px] font-medium text-gray-900 hover:text-blue-600 transition-colors block py-0.5">
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Company</div>
                          <ul className="space-y-2">
                            {more.company.map((item) => (
                              <li key={item.name}>
                                <Link href={item.href} className="text-[15px] font-medium text-gray-900 hover:text-blue-600 transition-colors block py-0.5">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <Link href={more.talkToExpert.href} className="block p-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-1.5 text-[15px]">{more.talkToExpert.title}</h4>
                            <p className="text-sm text-gray-600 leading-snug">{more.talkToExpert.description}</p>
                          </Link>
                          <Link href={more.requestDemo.href} className="block p-5 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                            <h4 className="font-bold mb-1.5 text-[15px]">{more.requestDemo.title}</h4>
                            <p className="text-sm text-gray-300 leading-snug">{more.requestDemo.description}</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <Link
                href={nav.cta.href}
                className="h-9 px-5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                {nav.cta.label}
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {blurOverlay}
    </>
  );
}
