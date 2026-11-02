import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({ title: z.string(), description: z.string().max(170), date: z.coerce.date(), updated: z.coerce.date().optional(), tags: z.array(z.string()).min(1), author: z.string().default('The Ventrix team') }),
});
export const collections = { blog };
