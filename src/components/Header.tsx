"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Menu, X, Download } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/features", label: t("features") },
    { href: "/docs", label: t("docs") }
  ];

  return (
    <header className="sticky top-0 z-40 glass border-b border-ink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-ink-600 hover:text-ink-900 hover:bg-ink-100 transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <a
              href="https://wordpress.org/plugins/auto-repai-ai-content-generator/"
              target="_blank"
              rel="noopener"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/40 transition"
            >
              <Download className="w-4 h-4" />
              {t("install")}
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? t("closeMenu") : t("openMenu")}
              className="md:hidden p-2 rounded-lg hover:bg-ink-100"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-sm font-medium text-ink-700 hover:bg-ink-100"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wordpress.org/plugins/auto-repai-ai-content-generator/"
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center gap-1.5 justify-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold"
            >
              <Download className="w-4 h-4" />
              {t("install")}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
