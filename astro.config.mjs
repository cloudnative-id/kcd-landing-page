// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kcd.cloudnative.id',
  redirects: {
    '/apply-speaker': 'https://sessionize.com/kubernetes-community-days-indonesia-2026/',
    '/register': 'https://loket.com/event/kcd-indonesia-2026',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});