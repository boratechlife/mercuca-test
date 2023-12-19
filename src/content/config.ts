import { locales, type Locale } from "@/i18n";
import { z, defineCollection } from "astro:content";
import { type UnionToTuple } from "@/types";

const langs = Object.keys(locales) as UnionToTuple<Locale>;

const articles = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      cover: image(),
      language: z.enum(langs),
      isDraft: z.boolean(),
      publishDate: z.date(),
      alternate: createLocaleSchema<typeof locales>(locales),
    }),
});

export const collections = {
  articles,
};

function createLocaleSchema<T extends Record<string, string>>(locales: T) {
  const schema: Record<string, any> = {};
  for (const key in locales) {
    schema[key] = z.string().optional();
  }
  return z
    .object(schema as Record<keyof T, z.ZodOptional<z.ZodString>>)
    .optional();
}
