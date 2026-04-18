import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import {
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
  Download,
  ArrowRight
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

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("features") };
}

export default async function FeaturesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("features");
  const tCta = await getTranslations("cta");

  return (
    <>
      <section className="relative py-16 lg:py-20 noise">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-transparent -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight">
            <span className="gradient-text">{t("title")}</span>
          </h1>
          <p className="mt-5 text-lg text-ink-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURE_KEYS.map((key, idx) => {
              const Icon = FEATURE_ICONS[key];
              return (
                <div
                  key={key}
                  className="flex gap-5 rounded-2xl border border-ink-100 p-6 lg:p-8 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 transition bg-white"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white grid place-items-center shadow-md shadow-brand-500/30">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-ink-400">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display font-bold text-lg">
                        {t(`${key}.title` as any)}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                      {t(`${key}.desc` as any)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-ink-900 to-ink-800 p-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              {tCta("title")}
            </h2>
            <p className="mt-3 text-ink-200">{tCta("subtitle")}</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wordpress.org/plugins/auto-repai-ai-content-generator/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 justify-center px-6 py-3.5 rounded-xl bg-white text-ink-900 font-semibold hover:bg-brand-100 transition"
              >
                <Download className="w-5 h-5" />
                {tCta("button")}
              </a>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 justify-center px-6 py-3.5 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition"
              >
                {tCta("secondary")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
