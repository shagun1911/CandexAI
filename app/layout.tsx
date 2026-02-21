import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/* ── Fonts ─────────────────────────────────────────────────────────────── */
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://candexai.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F9FF",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CandexAI | Enterprise AI Models & Applications",
    template: "%s | CandexAI",
  },
  description:
    "Purpose-built AI for the most ambitious organizations. Privacy, control, and performance. Deploy expert models and agentic workflows entirely on your infrastructure.",
  keywords: [
    "enterprise AI", "AI models", "sovereign AI", "on-premise AI",
    "agentic workflows", "privacy-first AI", "CandexAI", "expert models",
  ],
  authors: [{ name: "CandexAI", url: siteUrl }],
  creator: "CandexAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CandexAI",
    title: "CandexAI | Enterprise AI Models & Applications",
    description: "Purpose-built AI for the most ambitious organizations.",
    images: [{ url: "/logo_candexAi.png", width: 512, height: 512, alt: "CandexAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CandexAI | Enterprise AI Models & Applications",
    description: "Purpose-built AI for the most ambitious organizations.",
    images: ["/logo_candexAi.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: siteUrl },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CandexAI",
  url: siteUrl,
  logo: `${siteUrl}/logo_candexAi.png`,
  description: "Purpose-built AI for the most ambitious organizations.",
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="font-sans antialiased min-h-screen"
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
