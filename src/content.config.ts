import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders'; // Pastikan ini terimport

const blogCollection = defineCollection({
  // Kita pakai pattern yang lebih simpel agar Astro tidak bingung
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), 
    tags: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    readingTime: z.number().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};