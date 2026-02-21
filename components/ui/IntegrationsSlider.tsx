"use client";

/**
 * IntegrationsSlider — bulletproof infinite marquee.
 *
 * Uses requestAnimationFrame instead of CSS animation so the loop
 * never glitches, stutters, or jumps: we measure the exact pixel width
 * of one set of cards and reset the transform seamlessly.
 *
 * All logos are served locally from /public/images/integrations/
 * for instant load with no external requests.
 */

import { useEffect, useRef } from "react";
import Image from "next/image";

/* ── Platform list ─────────────────────────────────────────────────── */
const PLATFORMS = [
  { name: "Slack",             logo: "/images/integrations/slack.svg" },
  { name: "WhatsApp",          logo: "/images/integrations/whatsapp.svg" },
  { name: "Gmail",             logo: "/images/integrations/gmail.svg" },
  { name: "Google Drive",      logo: "/images/integrations/googledrive.svg" },
  { name: "Meta",              logo: "/images/integrations/meta.svg" },
  { name: "MS Teams",          logo: "/images/integrations/microsoftteams.svg" },
  { name: "Salesforce",        logo: "/images/integrations/salesforce.svg" },
  { name: "HubSpot",           logo: "/images/integrations/hubspot.svg" },
  { name: "Notion",            logo: "/images/integrations/notion.svg" },
  { name: "Stripe",            logo: "/images/integrations/stripe.svg" },
  { name: "OpenAI",            logo: "/images/integrations/openai.svg" },
  { name: "Twilio",            logo: "/images/integrations/twilio.svg" },
  { name: "Zapier",            logo: "/images/integrations/zapier.svg" },
  { name: "AWS",               logo: "/images/integrations/amazonaws.svg" },
  { name: "Perplexity",        logo: "/images/integrations/perplexity.svg" },
  { name: "Anthropic",         logo: "/images/integrations/anthropic.svg" },
  { name: "Jira",              logo: "/images/integrations/jira.svg" },
  { name: "GitHub",            logo: "/images/integrations/github.svg" },
  { name: "PostgreSQL",        logo: "/images/integrations/postgresql.svg" },
  { name: "MongoDB",           logo: "/images/integrations/mongodb.svg" },
];

const SPEED = 0.45; // px per frame at 60 fps ≈ 27 px/s — smooth and readable
const CARD_W = 128; // w-32
const CARD_H = 88;  // h-22
const GAP = 20;     // gap-5

/* ── Single card ───────────────────────────────────────────────────── */
function IntegrationCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-2.5 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
      style={{
        width: CARD_W,
        height: CARD_H,
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.85)",
        boxShadow:
          "0 4px 16px rgba(58,111,248,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
      }}
    >
      <div className="w-9 h-9 flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={32}
          height={32}
          className="object-contain w-8 h-8"
          unoptimized
        />
      </div>
      <span className="text-[11px] font-medium text-slate-500 leading-none">
        {name}
      </span>
    </div>
  );
}

/* ── Slider ────────────────────────────────────────────────────────── */
export default function IntegrationsSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const singleWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    /* Measure the exact pixel width of ONE set of cards
       = N items × CARD_W + N × GAP (flex gap applies before each item
       except the first, but since we duplicate the set the gap between
       the last item of set-1 and the first item of set-2 is also GAP) */
    const measure = () => {
      // Use scrollWidth / 2 — the track always contains exactly 2 sets
      singleWidthRef.current = track.scrollWidth / 2;
    };

    // Measure after fonts/images settle
    const t = setTimeout(measure, 80);
    window.addEventListener("resize", measure);

    function tick() {
      if (!pausedRef.current) {
        posRef.current -= SPEED;
        if (posRef.current <= -singleWidthRef.current) {
          // Teleport back by exactly one set — visually seamless
          posRef.current += singleWidthRef.current;
        }
        if (track) {
          track.style.transform = `translateX(${posRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      clearTimeout(t);
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", measure);
    };
  }, []);

  /* Pause on hover/focus, resume on leave */
  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  // Render 3 copies so there is always a full set filling the viewport
  // even at very wide screens (the rAF loop resets after one set width)
  const items = [...PLATFORMS, ...PLATFORMS, ...PLATFORMS];

  return (
    <div
      className="w-full overflow-hidden select-none"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      aria-label="Integration partners marquee"
    >
      <div
        ref={trackRef}
        className="flex"
        style={{
          gap: GAP,
          willChange: "transform",
        }}
      >
        {items.map((p, i) => (
          <IntegrationCard key={`${p.name}-${i}`} name={p.name} logo={p.logo} />
        ))}
      </div>
    </div>
  );
}
