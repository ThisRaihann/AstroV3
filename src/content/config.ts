import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
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

export const collections = { 'blog': blog };