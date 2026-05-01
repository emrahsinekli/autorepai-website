import { setRequestLocale } from "next-intl/server";
import { Mail, Globe, Code } from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "Auto RepAI is built by Emrah Sinekli — an independent developer focused on AI-powered tools for WordPress."
};

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
          About <span className="gradient-text">Auto RepAI</span>
        </h1>
        <p className="mt-4 text-lg text-ink-700 leading-relaxed">
          Auto RepAI is an independent project that brings serious AI tooling to WordPress
          publishers. We believe content creators should not have to leave their CMS to write
          with GPT-4o, generate images with DALL·E, transcribe a podcast, or auto-reply to
          comments — all of that should live where their content lives.
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="text-2xl font-display font-bold">Who builds Auto RepAI</h2>
            <p className="mt-3 text-ink-600 leading-relaxed">
              Auto RepAI is designed and maintained by Emrah Sinekli, an independent software
              engineer based in Türkiye. The plugin started in late 2025 as an in-house tool to
              accelerate content production across multiple WordPress sites and was released
              publicly so other publishers and small agencies could benefit from the same
              workflow.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold">What we believe</h2>
            <ul className="mt-3 space-y-2 text-ink-600 leading-relaxed">
              <li>
                · You should own your data. Auto RepAI never proxies your content through our
                servers — every API call goes directly from your site to the provider you chose.
              </li>
              <li>
                · You should bring your own keys. We do not resell tokens at a markup or lock
                you into a single AI vendor.
              </li>
              <li>
                · The free tier should be genuinely useful. Every feature is unlocked in the
                free version with a generous monthly allowance.
              </li>
              <li>
                · Open standards win. The plugin is GPLv2 and follows WordPress.org guidelines
                for security, escaping, sanitization, and i18n.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold">How we make money</h2>
            <p className="mt-3 text-ink-600 leading-relaxed">
              Auto RepAI is sustained by an optional Professional plan that removes monthly
              soft caps for heavy users. No feature is hidden behind the paywall — only
              quantity. Billing is processed by Freemius, with cancellation and a 14-day refund
              guarantee available at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold">Contact</h2>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              <a
                href="mailto:support@autorepai.com"
                className="flex items-center gap-3 p-4 rounded-xl border border-ink-200 hover:border-brand-500 transition"
              >
                <Mail className="w-5 h-5 text-brand-500" />
                <div>
                  <div className="text-xs text-ink-400 uppercase tracking-wider">Support</div>
                  <div className="font-semibold">support@autorepai.com</div>
                </div>
              </a>
              <a
                href="https://autorepai.com"
                className="flex items-center gap-3 p-4 rounded-xl border border-ink-200 hover:border-brand-500 transition"
              >
                <Globe className="w-5 h-5 text-brand-500" />
                <div>
                  <div className="text-xs text-ink-400 uppercase tracking-wider">Website</div>
                  <div className="font-semibold">autorepai.com</div>
                </div>
              </a>
              <a
                href="https://wordpress.org/plugins/auto-repai-ai-content-generator/"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3 p-4 rounded-xl border border-ink-200 hover:border-brand-500 transition sm:col-span-2"
              >
                <Code className="w-5 h-5 text-brand-500" />
                <div>
                  <div className="text-xs text-ink-400 uppercase tracking-wider">Plugin</div>
                  <div className="font-semibold">WordPress.org plugin directory</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
