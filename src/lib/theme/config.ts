/**
 * Comprehensive Theme System for Landing Pages
 * Supports complete visual customization through environment variables
 */

export interface ThemeConfig {
  // Theme metadata
  name: string;
  mode: "light" | "dark";
  style: "modern" | "minimalist" | "neon" | "classic" | "gradient";

  // Brand
  brand: {
    name: string;
    logo?: string;
  };

  // Colors
  colors: {
    primary: string;
    primaryHover: string;
    primaryActive: string;
    secondary: string;
    secondaryHover: string;
    background: string;
    backgroundAlt: string; // Alternate background for sections
    text: string;
    textMuted: string;
    border: string;
    accent: string;
    success: string;
    warning: string;
    error: string;
  };

  // Typography
  typography: {
    fontFamily: string;
    headingWeight: string;
    bodyWeight: string;
    scale: "sm" | "md" | "lg"; // Size scale multiplier
  };

  // Spacing
  spacing: {
    section: string; // Vertical padding for sections
    container: string; // Max width for containers
    gap: string; // Default gap between elements
  };

  // Effects
  effects: {
    borderRadius: string; // Default border radius
    shadow: string; // Default shadow
    shadowHover: string; // Hover shadow
    blur: boolean; // Enable backdrop blur
    gradients: boolean; // Enable gradient backgrounds
    animations: "subtle" | "moderate" | "playful" | "none";
  };

  // Components
  navbar: {
    background: string;
    borderColor: string;
    textColor: string;
    logoColor: string;
    height: string;
    sticky: boolean;
    blur: boolean;
  };

  button: {
    primaryBg: string;
    primaryText: string;
    primaryHover: string;
    secondaryBg: string;
    secondaryText: string;
    secondaryHover: string;
    radius: string;
    shadow: boolean;
  };

  card: {
    background: string;
    border: string;
    borderColor: string;
    radius: string;
    shadow: string;
    hoverShadow: string;
    padding: string;
  };

  sections: {
    hero: {
      background: string;
      textColor: string;
      overlay: string; // Overlay color/gradient
    };
    features: {
      background: string;
      cardBackground: string;
    };
    showcase: {
      background: string;
    };
    stats: {
      background: string;
      textColor: string;
    };
    product: {
      background: string;
    };
    leadForm: {
      background: string;
    };
    cta: {
      background: string;
      textColor: string;
    };
  };
}

// Light - Modern Professional Theme
export const lightTheme: ThemeConfig = {
  name: "Light Modern",
  mode: "light",
  style: "modern",
  brand: { name: "CodeSick" },
  colors: {
    primary: "#2563eb",
    primaryHover: "#1d4ed8",
    primaryActive: "#1e40af",
    secondary: "#f3f4f6",
    secondaryHover: "#e5e7eb",
    background: "#ffffff",
    backgroundAlt: "#f9fafb",
    text: "#111827",
    textMuted: "#6b7280",
    border: "#e5e7eb",
    accent: "#3b82f6",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
    headingWeight: "700",
    bodyWeight: "400",
    scale: "md",
  },
  spacing: {
    section: "5rem",
    container: "80rem",
    gap: "2rem",
  },
  effects: {
    borderRadius: "1rem",
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    shadowHover: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    blur: true,
    gradients: true,
    animations: "moderate",
  },
  navbar: {
    background: "rgba(255, 255, 255, 0.8)",
    borderColor: "#f3f4f6",
    textColor: "#6b7280",
    logoColor: "#2563eb",
    height: "4rem",
    sticky: true,
    blur: true,
  },
  button: {
    primaryBg: "#2563eb",
    primaryText: "#ffffff",
    primaryHover: "#1d4ed8",
    secondaryBg: "#f3f4f6",
    secondaryText: "#111827",
    secondaryHover: "#e5e7eb",
    radius: "0.75rem",
    shadow: true,
  },
  card: {
    background: "#ffffff",
    border: "1px solid",
    borderColor: "#e5e7eb",
    radius: "1rem",
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    hoverShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
  },
  sections: {
    hero: {
      background: "linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)",
      textColor: "#111827",
      overlay: "",
    },
    features: {
      background: "#ffffff",
      cardBackground: "linear-gradient(to bottom right, #ffffff, #f9fafb)",
    },
    showcase: {
      background:
        "linear-gradient(135deg, #dbeafe 0%, #fce7f3 50%, #ddd6fe 100%)",
    },
    stats: {
      background: "#111827",
      textColor: "#ffffff",
    },
    product: {
      background: "linear-gradient(135deg, #d1fae5 0%, #dbeafe 100%)",
    },
    leadForm: {
      background: "#ffffff",
    },
    cta: {
      background: "linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)",
      textColor: "#ffffff",
    },
  },
};

// Dark - Modern Dark Theme
export const darkTheme: ThemeConfig = {
  name: "Dark Modern",
  mode: "dark",
  style: "modern",
  brand: { name: "CodeSick" },
  colors: {
    primary: "#3b82f6",
    primaryHover: "#2563eb",
    primaryActive: "#1d4ed8",
    secondary: "#1e293b",
    secondaryHover: "#334155",
    background: "#0f172a",
    backgroundAlt: "#1e293b",
    text: "#f1f5f9",
    textMuted: "#94a3b8",
    border: "#334155",
    accent: "#60a5fa",
    success: "#34d399",
    warning: "#fbbf24",
    error: "#f87171",
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
    headingWeight: "700",
    bodyWeight: "400",
    scale: "md",
  },
  spacing: {
    section: "5rem",
    container: "80rem",
    gap: "2rem",
  },
  effects: {
    borderRadius: "1rem",
    shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
    shadowHover: "0 20px 25px -5px rgba(0, 0, 0, 0.4)",
    blur: true,
    gradients: true,
    animations: "moderate",
  },
  navbar: {
    background: "rgba(15, 23, 42, 0.8)",
    borderColor: "#334155",
    textColor: "#94a3b8",
    logoColor: "#60a5fa",
    height: "4rem",
    sticky: true,
    blur: true,
  },
  button: {
    primaryBg: "#3b82f6",
    primaryText: "#ffffff",
    primaryHover: "#2563eb",
    secondaryBg: "#1e293b",
    secondaryText: "#f1f5f9",
    secondaryHover: "#334155",
    radius: "0.75rem",
    shadow: true,
  },
  card: {
    background: "#1e293b",
    border: "1px solid",
    borderColor: "#334155",
    radius: "1rem",
    shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
    hoverShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
    padding: "2rem",
  },
  sections: {
    hero: {
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      textColor: "#f1f5f9",
      overlay: "",
    },
    features: {
      background: "#0f172a",
      cardBackground: "linear-gradient(to bottom right, #1e293b, #334155)",
    },
    showcase: {
      background:
        "linear-gradient(135deg, #1e293b 0%, #312e81 50%, #1e3a8a 100%)",
    },
    stats: {
      background: "#000000",
      textColor: "#ffffff",
    },
    product: {
      background: "linear-gradient(135deg, #065f46 0%, #1e40af 100%)",
    },
    leadForm: {
      background: "#1e293b",
    },
    cta: {
      background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
      textColor: "#ffffff",
    },
  },
};

// Neon - Vibrant Cyberpunk Theme
export const neonTheme: ThemeConfig = {
  name: "Neon",
  mode: "dark",
  style: "neon",
  brand: { name: "CodeSick" },
  colors: {
    primary: "#06b6d4",
    primaryHover: "#0891b2",
    primaryActive: "#0e7490",
    secondary: "#1a1a2e",
    secondaryHover: "#16213e",
    background: "#0a0a0f",
    backgroundAlt: "#16162a",
    text: "#f0f0ff",
    textMuted: "#a5b4fc",
    border: "#4c1d95",
    accent: "#f0abfc",
    success: "#2dd4bf",
    warning: "#fb923c",
    error: "#f43f5e",
  },
  typography: {
    fontFamily: "var(--font-geist-mono)",
    headingWeight: "800",
    bodyWeight: "400",
    scale: "lg",
  },
  spacing: {
    section: "6rem",
    container: "75rem",
    gap: "2.5rem",
  },
  effects: {
    borderRadius: "0.5rem",
    shadow: "0 0 20px rgba(6, 182, 212, 0.5)",
    shadowHover: "0 0 40px rgba(240, 171, 252, 0.6)",
    blur: false,
    gradients: true,
    animations: "playful",
  },
  navbar: {
    background: "rgba(10, 10, 15, 0.9)",
    borderColor: "#4c1d95",
    textColor: "#a5b4fc",
    logoColor: "#06b6d4",
    height: "4rem",
    sticky: true,
    blur: false,
  },
  button: {
    primaryBg: "#06b6d4",
    primaryText: "#0a0a0f",
    primaryHover: "#0891b2",
    secondaryBg: "#1a1a2e",
    secondaryText: "#f0f0ff",
    secondaryHover: "#16213e",
    radius: "0.5rem",
    shadow: true,
  },
  card: {
    background: "#16162a",
    border: "2px solid",
    borderColor: "#4c1d95",
    radius: "0.75rem",
    shadow: "0 0 20px rgba(76, 29, 149, 0.3)",
    hoverShadow: "0 0 40px rgba(240, 171, 252, 0.5)",
    padding: "2rem",
  },
  sections: {
    hero: {
      background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)",
      textColor: "#f0f0ff",
      overlay:
        "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1), transparent)",
    },
    features: {
      background: "#0a0a0f",
      cardBackground: "linear-gradient(135deg, #16162a 0%, #1a1a2e 100%)",
    },
    showcase: {
      background:
        "linear-gradient(135deg, #4c1d95 0%, #581c87 50%, #0891b2 100%)",
    },
    stats: {
      background: "linear-gradient(180deg, #000000 0%, #1a1a2e 100%)",
      textColor: "#06b6d4",
    },
    product: {
      background: "linear-gradient(135deg, #134e4a 0%, #581c87 100%)",
    },
    leadForm: {
      background: "#16162a",
    },
    cta: {
      background: "linear-gradient(90deg, #06b6d4 0%, #f0abfc 100%)",
      textColor: "#0a0a0f",
    },
  },
};

// Minimalist - Clean Simple Theme
export const minimalistTheme: ThemeConfig = {
  name: "Minimalist",
  mode: "light",
  style: "minimalist",
  brand: { name: "CodeSick" },
  colors: {
    primary: "#000000",
    primaryHover: "#1f1f1f",
    primaryActive: "#3f3f3f",
    secondary: "#fafafa",
    secondaryHover: "#f5f5f5",
    background: "#ffffff",
    backgroundAlt: "#fafafa",
    text: "#000000",
    textMuted: "#737373",
    border: "#e5e5e5",
    accent: "#000000",
    success: "#22c55e",
    warning: "#eab308",
    error: "#ef4444",
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
    headingWeight: "600",
    bodyWeight: "400",
    scale: "md",
  },
  spacing: {
    section: "4rem",
    container: "72rem",
    gap: "1.5rem",
  },
  effects: {
    borderRadius: "0rem",
    shadow: "none",
    shadowHover: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    blur: false,
    gradients: false,
    animations: "subtle",
  },
  navbar: {
    background: "#ffffff",
    borderColor: "#e5e5e5",
    textColor: "#737373",
    logoColor: "#000000",
    height: "3.5rem",
    sticky: true,
    blur: false,
  },
  button: {
    primaryBg: "#000000",
    primaryText: "#ffffff",
    primaryHover: "#1f1f1f",
    secondaryBg: "#ffffff",
    secondaryText: "#000000",
    secondaryHover: "#fafafa",
    radius: "0rem",
    shadow: false,
  },
  card: {
    background: "#ffffff",
    border: "1px solid",
    borderColor: "#e5e5e5",
    radius: "0rem",
    shadow: "none",
    hoverShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
  },
  sections: {
    hero: {
      background: "#ffffff",
      textColor: "#000000",
      overlay: "",
    },
    features: {
      background: "#fafafa",
      cardBackground: "#ffffff",
    },
    showcase: {
      background: "#ffffff",
    },
    stats: {
      background: "#000000",
      textColor: "#ffffff",
    },
    product: {
      background: "#fafafa",
    },
    leadForm: {
      background: "#ffffff",
    },
    cta: {
      background: "#000000",
      textColor: "#ffffff",
    },
  },
};

// Modern Gradient - Colorful Contemporary Theme
export const modernTheme: ThemeConfig = {
  name: "Modern Gradient",
  mode: "light",
  style: "gradient",
  brand: { name: "CodeSick" },
  colors: {
    primary: "#8b5cf6",
    primaryHover: "#7c3aed",
    primaryActive: "#6d28d9",
    secondary: "#f3f4f6",
    secondaryHover: "#e5e7eb",
    background: "#ffffff",
    backgroundAlt: "#faf5ff",
    text: "#1f2937",
    textMuted: "#6b7280",
    border: "#e5e7eb",
    accent: "#ec4899",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
    headingWeight: "800",
    bodyWeight: "400",
    scale: "lg",
  },
  spacing: {
    section: "6rem",
    container: "80rem",
    gap: "2.5rem",
  },
  effects: {
    borderRadius: "1.5rem",
    shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    shadowHover: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    blur: true,
    gradients: true,
    animations: "playful",
  },
  navbar: {
    background: "rgba(255, 255, 255, 0.9)",
    borderColor: "#e5e7eb",
    textColor: "#6b7280",
    logoColor: "#8b5cf6",
    height: "4.5rem",
    sticky: true,
    blur: true,
  },
  button: {
    primaryBg: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    primaryText: "#ffffff",
    primaryHover: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)",
    secondaryBg: "#f3f4f6",
    secondaryText: "#1f2937",
    secondaryHover: "#e5e7eb",
    radius: "1rem",
    shadow: true,
  },
  card: {
    background: "#ffffff",
    border: "1px solid",
    borderColor: "#e5e7eb",
    radius: "1.5rem",
    shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    hoverShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
    padding: "2.5rem",
  },
  sections: {
    hero: {
      background:
        "linear-gradient(135deg, #faf5ff 0%, #fce7f3 50%, #dbeafe 100%)",
      textColor: "#1f2937",
      overlay: "",
    },
    features: {
      background: "#ffffff",
      cardBackground: "linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)",
    },
    showcase: {
      background:
        "linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #f59e0b 100%)",
    },
    stats: {
      background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
      textColor: "#ffffff",
    },
    product: {
      background: "linear-gradient(135deg, #d1fae5 0%, #a78bfa 100%)",
    },
    leadForm: {
      background: "linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)",
    },
    cta: {
      background:
        "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%)",
      textColor: "#ffffff",
    },
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  neon: neonTheme,
  minimalist: minimalistTheme,
  modern: modernTheme,
} as const;

export type ThemeName = keyof typeof themes;
