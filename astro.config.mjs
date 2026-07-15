// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ⚠️ Mets à jour cette URL avec le domaine de déploiement Vercel.
  // Elle sert au sitemap et aux balises Open Graph (URLs absolues).
  site: 'https://jami-inf.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
