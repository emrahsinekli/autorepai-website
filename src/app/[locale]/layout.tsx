import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { routing, localeNames } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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

  const SITE = "https://autorepai.com";
  const alternates: Record<string, string> = {};
  for (const l of routing.locales) {
    alternates[l] = l === routing.defaultLocale ? `${SITE}/` : `${SITE}/${l}`;
  }
  alternates["x-default"] = `${SITE}/`;

  const canonical = locale === routing.defaultLocale ? `${SITE}/` : `${SITE}/${locale}`;
  const title = t("siteName") + " — " + t("tagline");

  return {
    metadataBase: new URL(SITE),
    title: { default: title, template: "%s · " + t("siteName") },
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "Emrah Sinekli", url: "https://github.com/emrahsinekli" }],
    creator: "Emrah Sinekli",
    publisher: t("siteName"),
    category: "WordPress Plugin",
    alternates: {
      canonical,
      languages: alternates
    },
    openGraph: {
      title,
      description: t("description"),
      url: canonical,
      siteName: t("siteName"),
      locale,
      alternateLocale: routing.locales.filter((l) => l !== locale),
      type: "website",
      images: [
        {
          url: `${SITE}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t("description"),
      images: [`${SITE}/og-image.svg`]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    verification: {},
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/logo.png", type: "image/png" }
      ]
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
