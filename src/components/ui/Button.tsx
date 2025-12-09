"use client";

import { forwardRef } from "react";
import { useTheme } from "@lib/theme/ThemeProvider";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "link"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled = false,
      fullWidth = false,
      style = {},
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    // Base styles for all buttons
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50";

    // Size styles
    const sizeStyles = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-4 py-2.5",
      lg: "text-base px-6 py-3",
    };

    // Variant styles - base classes only, colors from theme
    const variantClasses = {
      primary: "shadow-sm focus:ring-2",
      secondary: "focus:ring-2",
      outline: "bg-transparent border focus:ring-2",
      link: "bg-transparent hover:underline shadow-none p-0",
      danger: "shadow-sm focus:ring-2 focus:ring-red-300",
    };

    // Width styles
    const widthStyles = fullWidth ? "w-full" : "";

    // Disabled/loading styles
    const stateStyles =
      disabled || isLoading
        ? "opacity-60 cursor-not-allowed"
        : "cursor-pointer";

    const classes = `${baseStyles} ${sizeStyles[size]} ${variantClasses[variant]} ${widthStyles} ${stateStyles} ${className}`;

    // Dynamic styles based on theme
    const dynamicStyles = (() => {
      if (variant === "primary") {
        return {
          backgroundColor: theme.button.primaryBg,
          color: theme.button.primaryText,
          ...style,
        };
      }
      if (variant === "secondary") {
        return {
          backgroundColor: theme.colors.secondary,
          color: theme.colors.text,
          ...style,
        };
      }
      if (variant === "outline") {
        return {
          borderColor: theme.colors.border,
          color: theme.colors.text,
          ...style,
        };
      }
      if (variant === "link") {
        return {
          color: theme.colors.primary,
          ...style,
        };
      }
      if (variant === "danger") {
        return style;
      }
      return style;
    })();

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={classes}
        style={dynamicStyles}
        onMouseEnter={(e) => {
          if (variant === "primary" && !disabled && !isLoading) {
            (e.target as HTMLButtonElement).style.backgroundColor =
              theme.button.primaryHover;
          }
        }}
        onMouseLeave={(e) => {
          if (variant === "primary" && !disabled && !isLoading) {
            (e.target as HTMLButtonElement).style.backgroundColor =
              theme.button.primaryBg;
          }
        }}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
