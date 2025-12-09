export type Locale = (typeof locales)[number];

export const locales = [
  "en",
  "es",
  "fr",
  "ja",
  "ko",
  "th",
  "pt",
  "it",
  "zh",
] as const;
export const defaultLocale: Locale = "en";
