# solvdd-website

Landing page for [solvdd.com](https://solvdd.com) — Solvdd Technology Solutions.

Built with Next.js 14, deployed on Vercel. Warm monochrome design with a single ember accent, Geist + Geist Mono + Newsreader typefaces.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Stack

- [Next.js 14](https://nextjs.org) — static export, no SSR
- [Geist](https://vercel.com/font) + [Newsreader](https://fonts.google.com/specimen/Newsreader) via Google Fonts
- Vanilla CSS + inline styles (no Tailwind, no CSS-in-JS)
- Deployed on [Vercel](https://vercel.com)

## Structure

```text
pages/
  index.js          # landing page — assembles all sections
  _document.js      # fonts, favicons, OG meta
components/
  tokens.js         # design tokens, capabilities data, familiar-with list
  Nav.js
  Hero.js
  Diagram.js        # animated SVG topology diagram
  Manifesto.js
  Capabilities.js
  FamiliarWith.js
  Contact.js
  SolvddFooter.js
public/
  favicon.svg
  favicon-32.png
  apple-touch-icon.png
  og-image.png
  robots.txt
  sitemap.xml
styles/
  globals.css       # reset, keyframes, responsive breakpoints
```
