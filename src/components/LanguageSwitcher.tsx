"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, routing, localeNames } from "@/i18n/routing";
import { Globe, ChevronDown } from "lucide-react";

export function LanguageSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const switchTo = (next: string) => {
    router.replace(pathname, { locale: next as (typeof routing.locales)[number] });
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        aria-label={t("language")}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-ink-100 transition text-sm font-medium text-ink-600"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{localeNames[locale]?.label}</span>
        <ChevronDown className="w-3.5 h-3.5" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-52 rounded-xl bg-white border border-ink-200 shadow-xl py-1.5 z-50 max-h-[420px] overflow-y-auto">
          {routing.locales.map((l) => (
            <button
              key={l}
              onClick={() => switchTo(l)}
              className={`w-full text-left px-3.5 py-2 text-sm hover:bg-ink-50 flex items-center justify-between ${
                l === locale ? "text-brand-600 font-semibold" : "text-ink-800"
              }`}
            >
              <span>{localeNames[l]?.label}</span>
              <span className="text-xs text-ink-400 uppercase">{l}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
