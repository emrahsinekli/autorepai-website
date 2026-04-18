import { getTranslations, setRequestLocale } from "next-intl/server";
import { BookOpen, Key, Rocket, Layers, LifeBuoy, ListOrdered, Mail } from "lucide-react";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("docs") };
}

export default async function DocsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("docs");

  const sections = [
    {
      key: "install",
      icon: Rocket,
      title: t("gettingStarted.install.title"),
      body: t("gettingStarted.install.body")
    },
    {
      key: "apiKeys",
      icon: Key,
      title: t("gettingStarted.apiKeys.title"),
      body: t("gettingStarted.apiKeys.body")
    },
    {
      key: "firstPost",
      icon: BookOpen,
      title: t("gettingStarted.firstPost.title"),
      body: t("gettingStarted.firstPost.body")
    }
  ];

  return (
    <>
      <section className="relative py-16 noise">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-50 to-transparent -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-ink-600">{t("subtitle")}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-display font-bold">
              <ListOrdered className="w-6 h-6 text-brand-500" />
              {t("gettingStarted.title")}
            </h2>
            <div className="mt-6 space-y-4">
              {sections.map((s, i) => (
                <div
                  key={s.key}
                  className="rounded-2xl border border-ink-100 p-6 bg-white hover:border-brand-300 transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-50 text-brand-700 grid place-items-center">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg">
                        {i + 1}. {s.title}
                      </h3>
                      <p className="mt-2 text-ink-600 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-2xl font-display font-bold">
              <Layers className="w-6 h-6 text-brand-500" />
              {t("modules.title")}
            </h2>
            <p className="mt-3 text-ink-600 leading-relaxed">{t("modules.body")}</p>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-2xl font-display font-bold">
              <LifeBuoy className="w-6 h-6 text-brand-500" />
              {t("support.title")}
            </h2>
            <p className="mt-3 text-ink-600 leading-relaxed">{t("support.body")}</p>
            <a
              href="mailto:support@autorepai.com"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-ink-900 text-white text-sm font-semibold hover:bg-ink-800 transition"
            >
              <Mail className="w-4 h-4" />
              {t("support.contact")}
            </a>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-2xl font-display font-bold">
              <BookOpen className="w-6 h-6 text-brand-500" />
              {t("changelog.title")}
            </h2>
            <p className="mt-3 text-ink-600 leading-relaxed">{t("changelog.body")}</p>
            <a
              href="https://github.com/emrahsinekli/auto-repai/releases"
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-ink-200 text-sm font-semibold hover:border-ink-900 transition"
            >
              GitHub Releases →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
