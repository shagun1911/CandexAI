/**
 * Minimal inline SVG icon set — replaces all emoji icons project-wide.
 * All icons are 20×20 viewBox, stroke-based (currentColor).
 */

type IconProps = {
  name: string;
  size?: number;
  className?: string;
  color?: string;
};

const PATHS: Record<string, string> = {
  lock:         "M12 11V8a4 4 0 00-8 0v3M5 11h6a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5a1 1 0 011-1z",
  brain:        "M9.5 2a2.5 2.5 0 015 0v.5A2.5 2.5 0 0117 5v1a3 3 0 013 3v1a3 3 0 01-3 3v1a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 017 14v-1a3 3 0 01-3-3V9a3 3 0 013-3V5a2.5 2.5 0 012.5-2.5V2z",
  zap:          "M13 2L4.5 13h7L8 22l9.5-11H10.5L13 2z",
  infinity:     "M12 12c-1.5-2-3.5-3-5.5-3a4.5 4.5 0 000 9c2 0 4-1 5.5-3 1.5 2 3.5 3 5.5 3a4.5 4.5 0 000-9c-2 0-4 1-5.5 3z",
  handshake:    "M7 12l2-2m0 0l3-3 3 3m-3-3v8M3 9l4 3M21 9l-4 3M7 21h10",
  globe:        "M12 2a10 10 0 100 20A10 10 0 0012 2zM2 12h20M12 2c-2.8 3-4.5 6.3-4.5 10s1.7 7 4.5 10M12 2c2.8 3 4.5 6.3 4.5 10s-1.7 7-4.5 10",
  network:      "M4 6a2 2 0 100-4 2 2 0 000 4zM20 6a2 2 0 100-4 2 2 0 000 4zM12 22a2 2 0 100-4 2 2 0 000 4zM4 4h1m14 0h1M6 4l6 8-6 8M18 4l-6 8 6 8",
  settings:     "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z",
  search:       "M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z",
  wrench:       "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  link:         "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71",
  layers:       "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  megaphone:    "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  microphone:   "M12 1a4 4 0 014 4v6a4 4 0 01-8 0V5a4 4 0 014-4zM19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8",
  document:     "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",
  chat:         "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  cpu:          "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
  grid:         "M3 3h7v7H3V3zM14 3h7v7h-7V3zM3 14h7v7H3v-7zM14 14h7v7h-7v-7z",
  chart:        "M22 12h-4l-3 9L9 3l-3 9H2",
  building:     "M3 21h18M3 7v1a3 3 0 006 0V7M9 7v1a3 3 0 006 0V7M15 7v1a3 3 0 006 0V7M3 7h18M3 21V5l9-2 9 2v16",
  cross:        "M12 5v14M5 12h14",
  scale:        "M12 3v3M3 7l3 10h12l3-10M8 12h8M12 20v1",
  shopping:     "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0",
  columns:      "M4 2h16a2 2 0 012 2v4H2V4a2 2 0 012-2zM2 8h20v14H2z M8 8v14M16 8v14",
  lightbulb:    "M12 2a7 7 0 015 11.9V17a1 1 0 01-1 1H8a1 1 0 01-1-1v-3.1A7 7 0 0112 2zM9 21h6M10 17v4M14 17v4",
  pin:          "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6z",
  shuffle:      "M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5",
  puzzle:       "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
  trending:     "M23 6l-9.5 9.5-5-5L1 18",
  monitor:      "M23 3H1v14h10v4H8v2h8v-2h-3v-4h10zM5 14V5h14v9H5z",
  shield:       "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  check:        "M20 6L9 17l-5-5",
  close:        "M18 6L6 18M6 6l12 12",
};

export default function Icon({ name, size = 20, className = "", color }: IconProps) {
  const d = PATHS[name] ?? PATHS["settings"];
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color ?? "currentColor"}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
}
