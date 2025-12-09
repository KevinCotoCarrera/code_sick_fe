"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTheme } from "@lib/theme/ThemeProvider";

export default function Footer() {
  const t = useTranslations("footer");
  const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-16 backdrop-blur"
      style={{
        borderTop: `1px solid ${theme.colors.border}`,
        background: theme.colors.backgroundAlt,
        color: theme.colors.textMuted,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm">
        <div
          className="flex items-center gap-2 font-semibold"
          style={{ color: theme.colors.text }}
        >
          <span>{t("brandName")}</span>
          <span style={{ color: theme.colors.textMuted }}>•</span>
          <span>{t("tagline")}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <a
            className="transition-colors"
            href="tel:+66636455571"
            style={{ color: theme.colors.textMuted }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = theme.colors.primary)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = theme.colors.textMuted)
            }
          >
            {t("contact.phoneLabel")}: {t("contact.phoneNumber")}
          </a>
          <span
            className="hidden sm:inline"
            style={{ color: theme.colors.border }}
          >
            |
          </span>
          <a
            className="transition-colors"
            href="mailto:contact@codesick.com"
            style={{ color: theme.colors.textMuted }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = theme.colors.primary)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = theme.colors.textMuted)
            }
          >
            {t("contact.emailLabel")}: {t("contact.emailAddress")}
          </a>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${theme.colors.border}` }}>
        <div
          className="mx-auto max-w-7xl px-4 sm:px-8 py-4 text-xs flex items-center justify-between"
          style={{ color: theme.colors.textMuted }}
        >
          <span>{t("copyright", { year })}</span>
          <div className="flex items-center gap-4">
            <Link
              href="#features"
              className="transition-colors"
              style={{ color: theme.colors.textMuted }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = theme.colors.text)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = theme.colors.textMuted)
              }
            >
              {t("links.features")}
            </Link>
            <Link
              href="#pricing"
              className="transition-colors"
              style={{ color: theme.colors.textMuted }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = theme.colors.text)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = theme.colors.textMuted)
              }
            >
              {t("links.pricing")}
            </Link>
            <Link
              href="#whyus"
              className="transition-colors"
              style={{ color: theme.colors.textMuted }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = theme.colors.text)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = theme.colors.textMuted)
              }
            >
              {t("links.whyUs")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
