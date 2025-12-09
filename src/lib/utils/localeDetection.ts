"use client";

import { Locale, locales } from "@lib/services/i18n/config";

// Map browser language codes to our supported locales
const LANGUAGE_MAP: Record<string, Locale> = {
  en: "en",
  "en-US": "en",
  "en-GB": "en",
  es: "es",
  "es-ES": "es",
  "es-MX": "es",
  fr: "fr",
  "fr-FR": "fr",
  ja: "ja",
  "ja-JP": "ja",
  ko: "ko",
  "ko-KR": "ko",
  th: "th",
  "th-TH": "th",
  pt: "pt",
  "pt-BR": "pt",
  "pt-PT": "pt",
  it: "it",
  "it-IT": "it",
  zh: "zh",
  "zh-CN": "zh",
  "zh-TW": "zh",
  "zh-HK": "zh",
};

// Map country codes to locales for IP-based detection
const COUNTRY_LOCALE_MAP: Record<string, Locale> = {
  US: "en",
  GB: "en",
  CA: "en",
  AU: "en",
  NZ: "en",
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  CL: "es",
  FR: "fr",
  BE: "fr",
  CH: "fr",
  JP: "ja",
  KR: "ko",
  TH: "th",
  BR: "pt",
  PT: "pt",
  IT: "it",
  CN: "zh",
  TW: "zh",
  HK: "zh",
  SG: "zh",
};

/**
 * Detects user's preferred locale based on browser language
 */
export function detectBrowserLocale(): Locale | null {
  if (typeof window === "undefined") return null;

  const browserLangs = navigator.languages || [navigator.language];

  for (const lang of browserLangs) {
    // Try exact match first
    if (LANGUAGE_MAP[lang]) {
      return LANGUAGE_MAP[lang];
    }

    // Try language without region (e.g., 'en' from 'en-US')
    const langCode = lang.split("-")[0];
    if (LANGUAGE_MAP[langCode]) {
      return LANGUAGE_MAP[langCode];
    }
  }

  return null;
}

/**
 * Detects user's locale based on IP geolocation
 * Uses a free IP geolocation service
 */
export async function detectLocaleByIP(): Promise<Locale | null> {
  try {
    // Using ipapi.co free tier (no API key required, 1000 requests/day)
    const response = await fetch("https://ipapi.co/json/", {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      throw new Error("Failed to fetch geolocation");
    }

    const data = await response.json();
    const countryCode = data.country_code as string;

    if (COUNTRY_LOCALE_MAP[countryCode]) {
      return COUNTRY_LOCALE_MAP[countryCode];
    }

    return null;
  } catch (error) {
    console.warn("Failed to detect locale by IP:", error);
    return null;
  }
}

/**
 * Detects the best locale for the user with fallback chain:
 * 1. Cookie (if already set)
 * 2. Browser/OS language
 * 3. IP-based geolocation
 * 4. English (default)
 */
export async function detectUserLocale(cookieLocale?: string): Promise<Locale> {
  // 1. Check if locale is already set in cookie
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // 2. Try browser language detection
  const browserLocale = detectBrowserLocale();
  if (browserLocale) {
    return browserLocale;
  }

  // 3. Try IP-based detection (only in production/client-side)
  if (typeof window !== "undefined") {
    const ipLocale = await detectLocaleByIP();
    if (ipLocale) {
      return ipLocale;
    }
  }

  // 4. Fallback to English
  return "en";
}

/**
 * Check if a locale is supported
 */
export function isSupportedLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
