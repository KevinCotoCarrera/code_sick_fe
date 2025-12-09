"use client";

import Link from "next/link";
import Button from "@components/ui/Button";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@components/shared/LocaleSwitcher";
import { useScreenSize } from "@lib/hooks/useScreenSize";
import { useTheme } from "@lib/theme/ThemeProvider";

type NavItem = { href: string; label: string };

export interface HeaderProps {
  nav?: NavItem[];
  showLogin?: boolean;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

// Labels are keys for i18n under the "nav" namespace (fallbacks handled below)
const defaultNav: NavItem[] = [
  { href: "#features", label: "features" },
  { href: "#pricing", label: "pricing" },
  { href: "#whyus", label: "whyus" },
];

export default function NavBar({
  nav = defaultNav,
  showCTA = true,
  ctaText,
  ctaHref = "#join-waitlist",
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const screen = useScreenSize();
  const t = useTranslations("nav");
  const theme = useTheme();

  // Translate known nav keys, otherwise fall back to the provided label
  const KNOWN_NAV_KEYS = new Set([
    "features",
    "pricing",
    "about",
    "whyus",
    "login",
  ]);
  const getLabel = (label: string) => {
    const key = (label || "").toLowerCase();
    if (KNOWN_NAV_KEYS.has(key)) {
      return t(key as keyof typeof t);
    }
    return label;
  };

  const headerClasses = [
    theme.navbar.sticky ? "sticky top-0" : "",
    "z-40 w-full border-b",
    theme.navbar.blur ? "backdrop-blur" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header
      className={headerClasses}
      style={{
        backgroundColor: theme.navbar.background,
        borderColor: theme.navbar.borderColor,
      }}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-2xl font-semibold"
            style={{ color: theme.navbar.logoColor }}
          >
            {theme.brand.name}
          </Link>

          <nav
            className="hidden md:flex items-center gap-1 text-sm"
            style={{ color: theme.navbar.textColor }}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 transition-colors hover:opacity-80"
              >
                {getLabel(item.label)}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Locale Switcher + CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>

          {showCTA && (
            <Link href={ctaHref}>
              <Button size={screen === "xs" ? "sm" : "md"} variant="primary">
                {ctaText || t("lockDiscount")}
              </Button>
            </Link>
          )}

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 md:hidden"
            style={{ color: theme.navbar.textColor }}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div
          className="border-t md:hidden"
          style={{
            backgroundColor: theme.navbar.background,
            borderColor: theme.navbar.borderColor,
          }}
        >
          <div className="px-4 py-3 sm:px-6">
            <nav
              className="flex flex-col gap-1 text-sm"
              style={{ color: theme.navbar.textColor }}
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 hover:opacity-80"
                  onClick={() => setOpen(false)}
                >
                  {getLabel(item.label)}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-between mt-3">
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
