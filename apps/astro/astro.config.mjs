import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  outDir: '../../dist',
  publicDir: '../../assets',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});

