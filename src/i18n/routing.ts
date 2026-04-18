import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "tr", "es", "fr", "de", "pt", "ja", "zh", "ar", "ru"],
  defaultLocale: "en",
  localePrefix: "as-needed"
});

export const localeNames: Record<string, { label: string; dir: "ltr" | "rtl" }> = {
  en: { label: "English", dir: "ltr" },
  tr: { label: "Türkçe", dir: "ltr" },
  es: { label: "Español", dir: "ltr" },
  fr: { label: "Français", dir: "ltr" },
  de: { label: "Deutsch", dir: "ltr" },
  pt: { label: "Português", dir: "ltr" },
  ja: { label: "日本語", dir: "ltr" },
  zh: { label: "中文", dir: "ltr" },
  ar: { label: "العربية", dir: "rtl" },
  ru: { label: "Русский", dir: "ltr" }
};

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
