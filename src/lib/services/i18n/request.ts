import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "./locale";

export default getRequestConfig(async () => {
  // Detect user's locale using intelligent detection:
  // 1. Cookie (user preference)
  // 2. Accept-Language header (browser/OS)
  // 3. IP-based location headers (Cloudflare)
  // 4. English (fallback)
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../../../../messages/${locale}.json`)).default,
  };
});
