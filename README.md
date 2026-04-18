# Auto RepAI Website

Marketing website for the Auto RepAI WordPress plugin, built with Next.js 16, TypeScript, Tailwind, and next-intl.

## Features

- 10 languages with auto browser detection (en, tr, es, fr, de, pt, ja, zh, ar, ru)
- SEO optimized: sitemap.xml, robots.txt, hreflang, structured data (JSON-LD)
- Fully responsive, modern UI
- Static export friendly, edge-ready
- RTL support for Arabic

## Pages

- `/` — Home (hero, features, pricing, CTA)
- `/features` — Full feature list
- `/docs` — Getting started guide
- `/privacy` — Privacy policy (WordPress.org compliant)
- `/terms` — Terms of service

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
vercel --prod
```

Or connect the GitHub repo in Vercel dashboard — no env vars required.

## Custom domain

Point `autorepai.com` to Vercel:

- A record: `76.76.21.21`
- CNAME (www): `cname.vercel-dns.com`

## Translations

Translation files live in `messages/<locale>.json`. To add a new locale:

1. Create `messages/<code>.json` with the same keys as `messages/en.json`.
2. Add the code and label to `src/i18n/routing.ts`.

## License

MIT — See the plugin repository for the GPL-licensed WordPress plugin.
