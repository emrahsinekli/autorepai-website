import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import {
  Download,
  ArrowRight,
  Sparkles,
  Wrench,
  Image as ImageIcon,
  Youtube,
  Mic,
  MessageCircle,
  Reply,
  Link as LinkIcon,
  BookOpen,
  Search,
  Layers,
  Workflow,
  BarChart3,
  Users,
  Radar,
  Zap,
  CheckCircle2,
  Star
} from "lucide-react";

const FEATURE_ICONS = {
  contentGen: Sparkles,
  autoRepair: Wrench,
  imageGen: ImageIcon,
  youtube: Youtube,
  audio: Mic,
  chatbot: MessageCircle,
  commentReplier: Reply,
  internalLinker: LinkIcon,
  notebook: BookOpen,
  reddit: Search,
  multiSource: Layers,
  workflow: Workflow,
  seo: BarChart3,
  leads: Users,
  brand: Radar,
  quickEdit: Zap
} as const;

type FeatureKey = keyof typeof FEATURE_ICONS;
const FEATURE_KEYS: FeatureKey[] = Object.keys(FEATURE_ICONS) as FeatureKey[];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("hero");
  const tFeatures = await getTranslations("features");
  const tStats = await getTranslations("stats");
  const tProviders = await getTranslations("providers");
  const tPricing = await getTranslations("pricing");
  const tCta = await getTranslations("cta");

  const stats = [
    { label: tStats("providers"), value: "8+" },
    { label: tStats("features"), value: "18" },
    { label: tStats("languages"), value: "10" },
    { label: tStats("freeMonthly"), value: "50/tool" }
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-ink-50 -z-10" />
        <div className="absolute top-0 -left-10 w-72 h-72 bg-brand-300/30 rounded-full blur-3xl -z-10" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink-900 text-white text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              {t("badge")}
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight">
              {t("title")}{" "}
              <span className="gradient-text block sm:inline">{t("titleAccent")}</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wordpress.org/plugins/auto-repai-ai-content-generator/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-ink-900 text-white font-semibold shadow-xl shadow-ink-900/20 hover:bg-ink-800 transition"
              >
                <Download className="w-5 h-5" />
                {t("ctaPrimary")}
              </a>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-ink-900 font-semibold border-2 border-ink-200 hover:border-ink-900 transition"
              >
                {t("ctaSecondary")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-ink-600">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                {t("freePlan")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                {t("noCreditCard")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                {t("openSource")}
              </span>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-ink-100 p-5 text-center shadow-sm"
              >
                <div className="text-3xl font-display font-bold gradient-text">{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
              {tFeatures("title")}
            </h2>
            <p className="mt-4 text-lg text-ink-600">{tFeatures("subtitle")}</p>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {FEATURE_KEYS.map((key) => {
              const Icon = FEATURE_ICONS[key];
              return (
                <div
                  key={key}
                  className="group rounded-2xl border border-ink-100 p-6 bg-white hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/10 transition"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700 grid place-items-center group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 font-display font-bold">
                    {tFeatures(`${key}.title` as any)}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                    {tFeatures(`${key}.desc` as any)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROVIDERS */}
      <section className="py-16 lg:py-20 bg-ink-50/50 border-y border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold">{tProviders("title")}</h2>
          <p className="mt-2 text-ink-600">{tProviders("subtitle")}</p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "OpenAI",
              "Anthropic",
              "Google",
              "Cohere",
              "Stability",
              "Replicate",
              "Leonardo",
              "DeepAI"
            ].map((name) => (
              <div
                key={name}
                className="px-4 py-5 rounded-xl bg-white border border-ink-100 font-semibold text-sm text-ink-700 flex items-center justify-center hover:border-brand-300 hover:shadow-sm transition"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
              {tPricing("title")}
            </h2>
            <p className="mt-4 text-lg text-ink-600">{tPricing("subtitle")}</p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <PricingCard
              name={tPricing("free.name")}
              price={tPricing("free.price")}
              period={tPricing("free.period")}
              desc={tPricing("free.desc")}
              cta={tPricing("free.cta")}
              features={tPricing.raw("free.features") as string[]}
              highlighted={false}
            />
            <PricingCard
              name={tPricing("pro.name")}
              price={tPricing("pro.price")}
              period={tPricing("pro.period")}
              desc={tPricing("pro.desc")}
              cta={tPricing("pro.cta")}
              badge={tPricing("pro.badge")}
              features={tPricing.raw("pro.features") as string[]}
              highlighted={true}
            />
          </div>
          <p className="mt-8 text-center text-sm text-ink-500 max-w-xl mx-auto">
            {tPricing("note")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 sm:p-14 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.8),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.6),transparent_60%)]" />
            <div className="relative">
              <Star className="w-10 h-10 text-brand-400 mx-auto" />
              <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-white">
                {tCta("title")}
              </h2>
              <p className="mt-4 text-lg text-ink-200 max-w-xl mx-auto">{tCta("subtitle")}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wordpress.org/plugins/auto-repai-ai-content-generator/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-ink-900 font-semibold hover:bg-brand-100 transition"
                >
                  <Download className="w-5 h-5" />
                  {tCta("button")}
                </a>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition"
                >
                  {tCta("secondary")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PricingCard({
  name,
  price,
  period,
  desc,
  cta,
  features,
  highlighted,
  badge
}: {
  name: string;
  price: string;
  period: string;
  desc: string;
  cta: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}) {
  return (
    <div
      className={`relative rounded-3xl p-8 border ${
        highlighted
          ? "border-ink-900 bg-ink-900 text-white shadow-2xl shadow-ink-900/20"
          : "border-ink-200 bg-white"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs font-semibold">
          {badge}
        </span>
      )}
      <h3 className="font-display text-xl font-bold">{name}</h3>
      <p className={`mt-1 text-sm ${highlighted ? "text-ink-200" : "text-ink-600"}`}>{desc}</p>
      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="text-5xl font-display font-bold">{price}</span>
        <span className={`text-sm ${highlighted ? "text-ink-400" : "text-ink-500"}`}>
          / {period}
        </span>
      </div>
      <a
        href="https://wordpress.org/plugins/auto-repai-ai-content-generator/"
        target="_blank"
        rel="noopener"
        className={`mt-6 w-full inline-flex justify-center items-center px-5 py-3 rounded-xl font-semibold ${
          highlighted
            ? "bg-white text-ink-900 hover:bg-brand-100"
            : "bg-ink-900 text-white hover:bg-ink-800"
        } transition`}
      >
        {cta}
      </a>
      <ul className="mt-8 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <CheckCircle2
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                highlighted ? "text-brand-400" : "text-brand-500"
              }`}
            />
            <span className={highlighted ? "text-ink-100" : "text-ink-700"}>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
