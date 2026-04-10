import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Gunakan coerce.date agar teks di .md otomatis jadi objek Date
    pubDate: z.coerce.date(), 
    tags: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(), // Jaga-jaga kalau ada post tanpa gambar
    readingTime: z.number().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};