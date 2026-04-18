import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Logo } from "./Logo";
import { Github } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-ink-100 bg-ink-50/40 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-ink-600 max-w-sm">{t("tagline")}</p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com/emrahsinekli/auto-repai"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-ink-100 hover:bg-ink-900 hover:text-white grid place-items-center transition"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://wordpress.org/plugins/auto-repai-ai-content-generator/"
                target="_blank"
                rel="noopener"
                aria-label="WordPress.org"
                className="w-9 h-9 rounded-lg bg-ink-100 hover:bg-ink-900 hover:text-white grid place-items-center transition text-xs font-bold"
              >
                WP
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-4">
              {t("product")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/features" className="text-ink-600 hover:text-ink-900">
                  {t("docs" as any) !== "docs" ? "Features" : "Features"}
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-ink-600 hover:text-ink-900">
                  {t("docs")}
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/emrahsinekli/auto-repai/releases"
                  target="_blank"
                  rel="noopener"
                  className="text-ink-600 hover:text-ink-900"
                >
                  {t("changelog")}
                </a>
              </li>
              <li>
                <a
                  href="https://wordpress.org/plugins/auto-repai-ai-content-generator/"
                  target="_blank"
                  rel="noopener"
                  className="text-ink-600 hover:text-ink-900"
                >
                  {t("wordpress")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-4">
              {t("legal")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="text-ink-600 hover:text-ink-900">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-ink-600 hover:text-ink-900">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <a href="mailto:support@autorepai.com" className="text-ink-600 hover:text-ink-900">
                  {t("contact")}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/emrahsinekli/auto-repai"
                  target="_blank"
                  rel="noopener"
                  className="text-ink-600 hover:text-ink-900"
                >
                  {t("github")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-ink-100 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-ink-400">
          <span>
            © {new Date().getFullYear()} Auto RepAI. {t("rights")}
          </span>
          <span>{t("madeWith")}</span>
        </div>
      </div>
    </footer>
  );
}
