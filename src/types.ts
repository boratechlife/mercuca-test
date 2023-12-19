import type { Locale } from "./i18n";

export type UnionToFnInsertion<T> = (
  T extends T ? (arg: () => T) => unknown : never
) extends (arg: infer R) => unknown
  ? R
  : never;

export type UnionToTuple<T> = UnionToFnInsertion<T> extends () => infer R
  ? [...UnionToTuple<Exclude<T, R>>, R]
  : [];

export type ViewMode = { mode?: "page" | "article" };

export type ArticleRoutes = { altRoutes?: Partial<Record<Locale, string>> };
