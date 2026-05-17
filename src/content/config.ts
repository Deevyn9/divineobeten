import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    year: z.string(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    live: z.string().optional(),
    caseStudy: z.boolean().default(true),
  }),
});

export const collections = { projects };