"use client";

import Link from "next/link";
import { useTheme } from "@lib/theme/ThemeProvider";

export default function Footer() {
  const theme = useTheme();

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
          <span>CodeSick</span>
          <span style={{ color: theme.colors.textMuted }}>•</span>
          <span>AI-powered business solutions</span>
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
            Phone: +66 63 645 5571
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
            Email: contact@codesick.com
          </a>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${theme.colors.border}` }}>
        <div
          className="mx-auto max-w-7xl px-4 sm:px-8 py-4 text-xs flex items-center justify-between"
          style={{ color: theme.colors.textMuted }}
        >
          <span>
            © {new Date().getFullYear()} CodeSick. All rights reserved.
          </span>
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
              Features
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
              Pricing
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
              Why Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
