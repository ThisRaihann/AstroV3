import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 1. Pastikan domain ini sesuai dengan repo/hosting kamu
  site: 'https://ngarumi.dev',
  
  // 2. Tambahkan trailingSlash untuk konsistensi SEO (Penting!)
  trailingSlash: 'always',

  integrations: [
    tailwind(), 
    sitemap({
      // Opsional: Bikin sitemap lebih informatif buat Google
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});