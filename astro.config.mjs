import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ngarumi.dev',
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});