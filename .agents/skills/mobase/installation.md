# Setup & Installation Guide

To configure `@momo-webplatform/mobase` correctly in a consumer project, follow these setup instructions. This ensures that the components load their styles, compile correctly under Next.js or React bundlers, and design tokens compile accurately.

## 1. Install Package & Peer Dependencies

Mobase relies on standard third-party libraries for complex primitives (like Embla Carousel, Radix, and React Hook Form). You must install these peer dependencies in the consumer project.

```bash
# Using npm
npm install @momo-webplatform/mobase react-hook-form @hookform/resolvers zod embla-carousel embla-carousel-react embla-carousel-autoplay react-day-picker date-fns lucide-react class-variance-authority clsx tailwind-merge motion

# Using pnpm
pnpm add @momo-webplatform/mobase react-hook-form @hookform/resolvers zod embla-carousel embla-carousel-react embla-carousel-autoplay react-day-picker date-fns lucide-react class-variance-authority clsx tailwind-merge motion
```

## 2. Configure Tailwind CSS

You must add the Mobase Tailwind plugin and tell Tailwind to compile styles from Mobase's build artifacts in `node_modules`.

Update `tailwind.config.js` or `tailwind.config.mjs`:

```javascript
import { mobaseTW } from "@momo-webplatform/mobase";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // Include your project content files
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // IMPORTANT: Include mobase files in node_modules to parse tailwind classes
    "./node_modules/@momo-webplatform/mobase/dist/esm/**/*.js",
  ],
  darkMode: ["class"],
  theme: {
    extend: {},
  },
  // Register mobaseTW plugin to load design tokens
  plugins: [mobaseTW()],
};

export default config;
```

Add standard Tailwind directives in your global CSS file (e.g., `globals.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. Next.js Configuration

Since Mobase is published as an ESM/CJS dual package, Next.js projects must transpile it to ensure proper compilation in server/client boundaries.

Update your `next.config.js` or `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile mobase to handle ESM modules
  transpilePackages: ["@momo-webplatform/mobase"],
  reactStrictMode: true,
};

export default nextConfig;
```

## 4. Troubleshooting Setup Issues

*   **Styles are missing/not rendering:** Ensure the content array in `tailwind.config.js` includes `"./node_modules/@momo-webplatform/mobase/dist/esm/**/*.js"`. Otherwise, Tailwind will tree-shake Mobase's utility classes.
*   **Next.js compile errors (e.g., "Cannot use import statement outside a module"):** Ensure `transpilePackages: ["@momo-webplatform/mobase"]` is added to `next.config.js`.
*   **Zod/React Hook Form conflicts:** Make sure the versions installed in your project match the peer dependencies requested by Mobase:
    *   `react-hook-form`: `^7.53.1`
    *   `zod`: `^3.23.8`
    *   `react-day-picker`: `^8.10.1`
    *   `embla-carousel-react`: `^8.3.0`
