/**
 * Supported languages object.
 */
export const locales = {
  en: "English",
  de: "Deutsch",
  es: "Español",
  da: "Danish",
};

/**
 * Default language.
 */
export const defaultLang: Locale = "en";

/**
 * Translations object containing translations for different languages.
 */
export const translations = {
  en: () => import("./translations/en.json").then((module) => module.default),
  de: () => import("./translations/de.json").then((module) => module.default),
  es: () => import("./translations/es.json").then((module) => module.default),
  da: () => import("./translations/da.json").then((module) => module.default),
} as const;

/**
 * Types
 */
export type Locale = keyof typeof locales;
export type Translation = typeof translations;
