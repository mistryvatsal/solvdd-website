#!/usr/bin/env node
// Generates og-image.png, apple-touch-icon.png, and favicon-32.png
// using Chrome headless. Run once; commit the output PNGs.
// Usage: node scripts/generate-assets.js

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const PUBLIC = path.join(__dirname, '..', 'public');

// Locate Chrome on macOS
const CHROME = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
].find(fs.existsSync);

if (!CHROME) {
  console.error('Chrome / Chromium not found');
  process.exit(1);
}

function screenshot(htmlFile, output, width, height) {
  const url = `file://${path.resolve(PUBLIC, htmlFile)}`;
  const cmd = [
    `"${CHROME}"`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    `--window-size=${width},${height}`,
    `--screenshot="${path.resolve(PUBLIC, output)}"`,
    `"${url}"`,
  ].join(' ');
  console.log(`  → ${output}`);
  execSync(cmd, { stdio: 'pipe' });
}

console.log('Generating brand assets...');
screenshot('_og-source.html',          'og-image.png',          1200, 630);
screenshot('_apple-touch-source.html', 'apple-touch-icon.png',  180,  180);

// favicon-32: render the favicon SVG at 32×32 via a tiny HTML wrapper
const faviconHtml = path.join(PUBLIC, '_favicon-32-source.html');
fs.writeFileSync(faviconHtml, `<!doctype html><html><head><meta charset="utf-8"/><style>*{margin:0;padding:0}html,body{width:32px;height:32px;overflow:hidden;background:#16140f}span{font-family:ui-monospace,"SF Mono",Menlo,monospace;font-size:23px;font-weight:400;color:#f6f4ef;display:flex;align-items:center;justify-content:center;width:32px;height:32px;padding-top:3px}</style></head><body><span>/</span></body></html>`);
screenshot('_favicon-32-source.html',  'favicon-32.png',        32,   32);
fs.unlinkSync(faviconHtml);

console.log('Done. Commit public/og-image.png, public/apple-touch-icon.png, public/favicon-32.png');
