import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { routing, localeNames } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const alternates: Record<string, string> = {};
  for (const l of routing.locales) {
    alternates[l] = l === routing.defaultLocale ? "/" : `/${l}`;
  }
  return {
    title: { default: t("siteName") + " — " + t("tagline"), template: "%s · " + t("siteName") },
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: alternates
    },
    openGraph: {
      title: t("siteName") + " — " + t("tagline"),
      description: t("description"),
      locale,
      type: "website"
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) notFound();
  setRequestLocale(locale);

  const dir = localeNames[locale]?.dir ?? "ltr";

  return (
    <html lang={locale} dir={dir} className={inter.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans bg-white text-ink-900 antialiased">
        <NextIntlClientProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
