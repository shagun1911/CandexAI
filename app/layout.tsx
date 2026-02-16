import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://candexai.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "candexAi | Enterprise AI Models & Applications",
    template: "%s | candexAi",
  },
  description:
    "Purpose-built AI for the most ambitious organizations. Privacy, control, and performance. Deploy expert models and agentic workflows entirely on your infrastructure.",
  keywords: [
    "enterprise AI",
    "AI models",
    "sovereign AI",
    "on-premise AI",
    "agentic workflows",
    "privacy-first AI",
    "CandexAI",
    "expert models",
  ],
  authors: [{ name: "candexAi", url: siteUrl }],
  creator: "candexAi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "candexAi",
    title: "candexAi | Enterprise AI Models & Applications",
    description:
      "Purpose-built AI for the most ambitious organizations. Privacy, control, and performance. Deploy on your infrastructure.",
    images: [
      {
        url: "/logo_candexAi.png",
        width: 512,
        height: 512,
        alt: "candexAi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "candexAi | Enterprise AI Models & Applications",
    description:
      "Purpose-built AI for the most ambitious organizations. Privacy, control, and performance.",
    images: ["/logo_candexAi.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "candexAi",
  url: siteUrl,
  logo: `${siteUrl}/logo_candexAi.png`,
  description:
    "Purpose-built AI for the most ambitious organizations. Privacy, control, and performance. Deploy expert models and agentic workflows on your infrastructure.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
