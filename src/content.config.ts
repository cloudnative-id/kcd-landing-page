import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One YAML file per person (organizer or volunteer). Put the photo next to
// the YAML file and reference it relatively, e.g. `photo: ./jane-doe.webp`.
const team = defineCollection({
  loader: glob({ pattern: ['**/*.{yaml,yml}', '!**/_*'], base: './src/content/team' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      company: z.string().optional(),
      photo: image().optional(),
      linkedin: z.url().optional(),
      // Lower numbers are shown first; people without `order` are sorted by name.
      order: z.number().optional(),
    }),
});

export const collections = { team };
