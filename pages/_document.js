import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts: Geist, Geist Mono, Newsreader */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,500&display=swap"
        />

        {/* Favicon — SVG master (scales perfectly), PNG fallback, Apple touch */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* OG / social — title + description set per-page via <Head> in each page */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Solvdd" />
        <meta property="og:image" content="https://solvdd.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://solvdd.com/og-image.png" />

        <link rel="canonical" href="https://solvdd.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
