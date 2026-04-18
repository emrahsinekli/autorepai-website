export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://autorepai.com/#software",
        name: "Auto RepAI - AI Content Generator",
        operatingSystem: "WordPress",
        applicationCategory: "WordPress Plugin",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "1"
        },
        url: "https://wordpress.org/plugins/auto-repai-ai-content-generator/",
        downloadUrl:
          "https://downloads.wordpress.org/plugin/auto-repai-ai-content-generator.zip"
      },
      {
        "@type": "Organization",
        "@id": "https://autorepai.com/#org",
        name: "Auto RepAI",
        url: "https://autorepai.com",
        logo: "https://autorepai.com/logo.png",
        sameAs: [
          "https://github.com/emrahsinekli/auto-repai",
          "https://wordpress.org/plugins/auto-repai-ai-content-generator/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://autorepai.com/#website",
        url: "https://autorepai.com",
        name: "Auto RepAI",
        publisher: { "@id": "https://autorepai.com/#org" },
        inLanguage: ["en", "tr", "es", "fr", "de", "pt", "ja", "zh", "ar", "ru"]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
