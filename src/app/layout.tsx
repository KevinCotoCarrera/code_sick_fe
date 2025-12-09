// Import Metadata from "next" to fix the error.
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./skeleton.css";
import { NextIntlClientProvider } from "next-intl";
import { getUserLocale } from "@i18n/locale";
import { generateMetadata as generateSEOMetadata } from "@lib/seo/metadata";
import { Locale } from "@lib/services/i18n/config";
import { ThemeProvider } from "@lib/theme/ThemeProvider";
import { themes, ThemeName } from "@lib/theme/config";
import enMessages from "../../messages/en.json";
import thMessages from "../../messages/th.json";
import esMessages from "../../messages/es.json";
import frMessages from "../../messages/fr.json";
import jaMessages from "../../messages/ja.json";
import koMessages from "../../messages/ko.json";
import ptMessages from "../../messages/pt.json";
import itMessages from "../../messages/it.json";
import zhMessages from "../../messages/zh.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateSEOMetadata({
  title: "AI-Powered Restaurant Feedback Platform | Bangkok Restaurant Reviews",
  description:
    "Transform your Bangkok restaurant's feedback collection with our AI-powered platform. Smart QR code reviews, sentiment analysis, and actionable insights. Join the waitlist for exclusive launch pricing.",
  keywords: [
    "restaurant feedback",
    "Bangkok restaurants",
    "AI sentiment analysis",
    "QR code reviews",
    "restaurant management",
    "customer feedback",
    "restaurant analytics",
    "food service technology",
    "Thailand restaurant tech",
    "restaurant insights",
    "waitlist",
    "launch pricing",
  ],
  canonical: "https://your-domain.com",
});

// Map locales to their message files
const messagesMap: Record<Locale, any> = {
  en: enMessages,
  th: thMessages,
  es: esMessages,
  fr: frMessages,
  ja: jaMessages,
  ko: koMessages,
  pt: ptMessages,
  it: itMessages,
  zh: zhMessages,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getUserLocale();
  const messages = messagesMap[locale] || enMessages;

  // Theme selection based on environment variables
  // Options: light, dark, neon, minimalist, modern
  const themeName: ThemeName =
    (process.env.NEXT_PUBLIC_THEME as ThemeName) || "light";
  const theme = themes[themeName] || themes.light;

  // Optional: Override brand name from environment
  if (process.env.NEXT_PUBLIC_BRAND_NAME) {
    theme.brand.name = process.env.NEXT_PUBLIC_BRAND_NAME;
  }

  // Optional: Override typography scale (sm, md, lg)
  if (process.env.NEXT_PUBLIC_TYPOGRAPHY_SCALE) {
    theme.typography.scale = process.env.NEXT_PUBLIC_TYPOGRAPHY_SCALE as
      | "sm"
      | "md"
      | "lg";
  }

  // Optional: Override animations (none, subtle, moderate, playful)
  if (process.env.NEXT_PUBLIC_ANIMATIONS) {
    theme.effects.animations = process.env.NEXT_PUBLIC_ANIMATIONS as any;
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: theme.colors.background,
          color: theme.colors.text,
          fontFamily: theme.typography.fontFamily,
        }}
      >
        <ThemeProvider theme={theme}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
