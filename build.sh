#!/usr/bin/env bash
set -e

echo "==> Building Astro..."
cd apps/astro
npm install
npm run build
cd ../..

echo "==> Copying static root files into dist/..."
# Static demos & assets
cp -r demos  dist/demos
cp -r assets dist/assets   # astro publicDir already copies assets/, this ensures latest
cp lab.html  dist/lab.html

# Root index.html (marketing homepage) → placed at /index.html
# Note: Astro src/pages/index.astro outputs to dist/index.html (the Astro nav page).
# The root marketing index.html is served at / on the old static site.
# For the Vercel deploy we let Astro's index.astro win (it's the primary entry).
# Copy root index.html as /home.html for reference if needed.
[ -f index.html ] && cp index.html dist/home.html

echo "==> Build complete. Output: dist/"
