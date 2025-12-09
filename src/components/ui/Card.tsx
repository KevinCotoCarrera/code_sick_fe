"use client";

import React from "react";
import { useTheme } from "@lib/theme/ThemeProvider";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "feature";
  padding?: "none" | "sm" | "md" | "lg";
  hoverable?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  padding = "md",
  hoverable = true,
  header,
  footer,
}) => {
  const theme = useTheme();

  const paddingClasses = {
    none: "",
    sm: "p-3",
    md: "p-5",
    lg: "p-8",
  };

  const baseStyles =
    variant === "feature"
      ? { background: theme.sections.features.cardBackground }
      : { background: theme.card.background };

  const cardStyles = {
    ...baseStyles,
    border: theme.card.border,
    borderColor: theme.card.borderColor,
    borderRadius: theme.card.radius,
    boxShadow: theme.card.shadow,
    color: theme.colors.text,
  };

  const hoverClass = hoverable ? "transition-all duration-300" : "";

  return (
    <div
      className={`${paddingClasses[padding]} ${hoverClass} ${className}`}
      style={cardStyles}
      onMouseEnter={(e) => {
        if (hoverable && theme.card.hoverShadow !== "none") {
          (e.currentTarget as HTMLElement).style.boxShadow =
            theme.card.hoverShadow;
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        }
      }}
      onMouseLeave={(e) => {
        if (hoverable) {
          (e.currentTarget as HTMLElement).style.boxShadow = theme.card.shadow;
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }
      }}
    >
      {header && (
        <div
          className={`${
            padding !== "none" ? "-mx-5 -mt-5 mb-5 px-5 py-4" : ""
          } border-b border-gray-100`}
        >
          {header}
        </div>
      )}
      {children}
      {footer && (
        <div
          className={`${
            padding !== "none" ? "-mx-5 -mb-5 mt-5 px-5 py-4" : ""
          } border-t border-gray-100`}
        >
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
export { Card };
