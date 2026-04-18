import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://autorepai.com"),
  title: {
    default: "Auto RepAI — AI Content Generator for WordPress",
    template: "%s · Auto RepAI"
  },
  description:
    "Generate blog posts, AI images, transcribe videos and audio, build chatbots and more — directly inside WordPress. Powered by OpenAI, Claude, Gemini and Cohere.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    type: "website",
    siteName: "Auto RepAI",
    images: ["/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"]
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
