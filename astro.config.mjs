import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // PASTIKAN site ada dan protokolnya lengkap (https://)
  site: 'https://ngarumi.dev',
  // Tambahkan trailingSlash agar sitemap nggak bingung ngitung path
  trailingSlash: 'always',
  integrations: [
    tailwind(), 
    sitemap() // Coba pakai yang default dulu tanpa konfigurasi objek {}
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});