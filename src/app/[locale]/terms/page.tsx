import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  return { title: t("title") };
}

export default async function TermsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("terms");

  const keys = ["license", "apiResponsibility", "noWarranty", "pro", "changes", "contact"] as const;

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-ink-500">
          {t("updated")}: {new Date().toISOString().split("T")[0]}
        </p>
        <p className="mt-6 text-lg text-ink-700 leading-relaxed">{t("intro")}</p>
        <div className="mt-10 space-y-8">
          {keys.map((k) => (
            <div key={k}>
              <h2 className="text-2xl font-display font-bold">{t(`sections.${k}.title`)}</h2>
              <p className="mt-3 text-ink-600 leading-relaxed">{t(`sections.${k}.body`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
