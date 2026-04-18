import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE = "https://autorepai.com";
const PAGES = ["", "/features", "/docs", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const page of PAGES) {
    const languages: Record<string, string> = {};
    for (const locale of routing.locales) {
      const path = locale === routing.defaultLocale ? page : `/${locale}${page}`;
      languages[locale] = `${SITE}${path || "/"}`;
    }
    entries.push({
      url: `${SITE}${page || "/"}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1.0 : page === "/features" ? 0.9 : 0.7,
      alternates: { languages }
    });
  }
  return entries;
}
