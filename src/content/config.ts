import { z, defineCollection } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      cover: image(),
      language: z.enum(["en", "de", "es", "da"]),
      isDraft: z.boolean(),
      publishDate: z.date(),
    }),
});

export const collections = {
  articles,
};
