"use server";

import { cookies, headers } from "next/headers";
import { Locale, defaultLocale, locales } from "@lib/services/i18n/config";

// Cookie name for storing user's locale preference
const COOKIE_NAME = "NEXT_LOCALE";

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
 * Detects locale from Accept-Language header
 */
function detectLocaleFromHeader(acceptLanguage: string | null): Locale | null {
  if (!acceptLanguage) return null;

  // Parse Accept-Language header (e.g., "en-US,en;q=0.9,es;q=0.8")
  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, qValue] = lang.trim().split(";q=");
      return {
        code: code.trim(),
        quality: qValue ? parseFloat(qValue) : 1.0,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { code } of languages) {
    // Try exact match
    if (LANGUAGE_MAP[code]) {
      return LANGUAGE_MAP[code];
    }

    // Try language without region
    const langCode = code.split("-")[0];
    if (LANGUAGE_MAP[langCode]) {
      return LANGUAGE_MAP[langCode];
    }
  }

  return null;
}

/**
 * Detects locale from Cloudflare's CF-IPCountry header (if available)
 */
function detectLocaleFromIPHeader(headersList: Headers): Locale | null {
  // Cloudflare sets CF-IPCountry header
  const cfCountry = headersList.get("cf-ipcountry");
  if (cfCountry && COUNTRY_LOCALE_MAP[cfCountry]) {
    return COUNTRY_LOCALE_MAP[cfCountry];
  }

  // Some hosting providers set X-Country header
  const xCountry = headersList.get("x-country");
  if (xCountry && COUNTRY_LOCALE_MAP[xCountry]) {
    return COUNTRY_LOCALE_MAP[xCountry];
  }

  return null;
}

/**
 * Gets user locale with intelligent detection:
 * 1. Cookie (if already set by user)
 * 2. Browser Accept-Language header
 * 3. IP-based location header (Cloudflare CF-IPCountry)
 * 4. English (default fallback)
 */
export async function getUserLocale(): Promise<Locale> {
  // 1. Check if locale is already set in cookie (user preference)
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(COOKIE_NAME)?.value;

  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // 2. Try to detect from Accept-Language header (browser/OS preference)
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  const headerLocale = detectLocaleFromHeader(acceptLanguage);

  if (headerLocale) {
    // Automatically set cookie for future visits
    cookieStore.set(COOKIE_NAME, headerLocale, {
      maxAge: 365 * 24 * 60 * 60, // 1 year
      path: "/",
      sameSite: "lax",
    });
    return headerLocale;
  }

  // 3. Try to detect from IP-based location headers
  const ipLocale = detectLocaleFromIPHeader(headersList);

  if (ipLocale) {
    // Automatically set cookie for future visits
    cookieStore.set(COOKIE_NAME, ipLocale, {
      maxAge: 365 * 24 * 60 * 60, // 1 year
      path: "/",
      sameSite: "lax",
    });
    return ipLocale;
  }

  // 4. Fallback to English
  return defaultLocale;
}

/**
 * Sets user's locale preference
 */
export async function setUserLocale(locale: Locale) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, locale, {
    maxAge: 365 * 24 * 60 * 60, // 1 year
    path: "/",
    sameSite: "lax",
  });
}
