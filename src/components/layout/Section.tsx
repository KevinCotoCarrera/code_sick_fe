"use client";

import { useTheme } from "@lib/theme/ThemeProvider";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  variant?:
    | "hero"
    | "features"
    | "showcase"
    | "stats"
    | "product"
    | "leadForm"
    | "cta"
    | "default";
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export default function Section({
  id,
  variant = "default",
  children,
  className = "",
  noPadding = false,
}: SectionProps) {
  const theme = useTheme();

  const getBackgroundStyle = () => {
    switch (variant) {
      case "hero":
        return {
          background: theme.sections.hero.background,
          color: theme.sections.hero.textColor,
        };
      case "features":
        return {
          background: theme.colors.background,
          color: theme.colors.text,
        };
      case "showcase":
        return {
          background: theme.colors.background,
          color: theme.colors.text,
        };
      case "stats":
        return {
          background: theme.colors.background,
          color: theme.colors.text,
        };
      case "product":
        return {
          background: theme.colors.background,
          color: theme.colors.text,
        };
      case "leadForm":
        return {
          background: theme.colors.background,
          color: theme.colors.text,
        };
      case "cta":
        return {
          background: theme.colors.background,
          color: theme.colors.text,
        };
      default:
        return {
          background: theme.colors.background,
          color: theme.colors.text,
        };
    }
  };
  const baseStyle = getBackgroundStyle();
  const sectionStyle = {
    ...baseStyle,
    paddingTop: noPadding ? undefined : theme.spacing.section,
    paddingBottom: noPadding ? undefined : theme.spacing.section,
  } as const;

  return (
    <section
      id={id}
      className={`relative w-full ${className}`}
      style={sectionStyle}
    >
      {variant === "hero" && theme.sections.hero.overlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: theme.sections.hero.overlay }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
