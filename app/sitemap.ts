import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://candexai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/use-cases",
    "/ai-for-work",
    "/ai-for-service",
    "/ai-for-process",
    "/technology",
    "/voice-ai",
    "/schedule",
    "/cookbook",
    "/blog",
    "/documentation",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : ("weekly" as const),
    priority: path === "" ? 1 : 0.8,
  }));

  return routes;
}
