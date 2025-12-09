# Theme System

This landing page framework includes a flexible theming system that allows you to easily customize colors, branding, and styling without touching component code.

## Quick Start

### Using a Pre-built Theme

Set the theme in your `.env.local` file:

```bash
# Options: default, blue, purple, green, dark
NEXT_PUBLIC_THEME=blue
```

### Available Themes

- **default** - Amber/orange color scheme (current design)
- **blue** - Professional blue palette
- **purple** - Modern violet/purple
- **green** - Fresh emerald green
- **dark** - Dark mode with blue accents

## Creating a Custom Theme

1. Open `/src/lib/theme/config.ts`
2. Add your custom theme to the `themes` object:

```typescript
export const themes = {
  // ... existing themes
  
  custom: {
    ...defaultTheme,
    brand: { 
      name: "YourBrand" 
    },
    colors: {
      primary: "#your-color",
      primaryHover: "#your-hover-color",
      primaryActive: "#your-active-color",
      // ... other colors
    },
    navbar: {
      background: "rgba(255, 255, 255, 0.75)",
      borderColor: "#e5e7eb",
      textColor: "#6b7280",
      logoColor: "#your-brand-color",
      sticky: true,
      blur: true,
    },
    button: {
      primaryBg: "#your-color",
      primaryText: "#ffffff",
      primaryHover: "#your-hover-color",
      radius: "md",
    },
  },
};
```

3. Set in your environment:
```bash
NEXT_PUBLIC_THEME=custom
```

## Theme Configuration Options

### Brand
- `brand.name` - Company/product name displayed in navbar
- `brand.logo` - Optional logo path (not yet implemented)

### Colors
- `primary` - Main brand color
- `primaryHover` - Hover state for primary elements
- `primaryActive` - Active/pressed state
- `secondary` - Secondary actions/elements
- `background` - Page background color
- `text` - Primary text color
- `textMuted` - Secondary/muted text
- `border` - Border colors
- `accent` - Accent color for highlights

### NavBar
- `background` - Navbar background (supports rgba for transparency)
- `borderColor` - Bottom border color
- `textColor` - Navigation link color
- `logoColor` - Brand name/logo color
- `sticky` - Boolean, stick to top on scroll
- `blur` - Boolean, enable backdrop blur effect

### Button
- `primaryBg` - Primary button background
- `primaryText` - Primary button text color
- `primaryHover` - Primary button hover color
- `radius` - Border radius ("sm", "md", "lg", "full")

## Using the Theme in Components

All themed components automatically use the `useTheme()` hook:

```tsx
import { useTheme } from "@lib/theme/ThemeProvider";

export function MyComponent() {
  const theme = useTheme();
  
  return (
    <div style={{ color: theme.colors.primary }}>
      Themed content
    </div>
  );
}
```

## NavBar Customization

The NavBar accepts props for easy customization:

```tsx
<NavBar 
  nav={[
    { href: "#section1", label: "Section 1" },
    { href: "#section2", label: "Section 2" },
  ]}
  showCTA={true}
  ctaText="Get Started"
  ctaHref="#signup"
/>
```

### Props
- `nav` - Array of navigation items
- `showCTA` - Show/hide the CTA button
- `ctaText` - Custom CTA button text
- `ctaHref` - CTA button link destination

## Dynamic Theming

For advanced use cases, you can determine the theme programmatically:

```typescript
// In layout.tsx
const themeName = 
  subdomain === "enterprise" ? "dark" :
  subdomain === "startup" ? "blue" :
  "default";

const theme = themes[themeName];
```

## Tips

1. **Color Contrast** - Ensure text colors have sufficient contrast with backgrounds
2. **Consistency** - Keep hover states slightly darker than base colors
3. **Testing** - Test all themes in both light and dark environments
4. **Accessibility** - Verify WCAG color contrast requirements
5. **Brand Guidelines** - Match your brand's style guide colors

## Example: Complete Custom Theme

```typescript
myBrand: {
  brand: {
    name: "MyStartup",
  },
  colors: {
    primary: "#6366f1", // indigo-500
    primaryHover: "#4f46e5", // indigo-600
    primaryActive: "#4338ca", // indigo-700
    secondary: "#f3f4f6",
    secondaryHover: "#e5e7eb",
    background: "#ffffff",
    text: "#111827",
    textMuted: "#6b7280",
    border: "#e5e7eb",
    accent: "#6366f1",
  },
  navbar: {
    background: "rgba(255, 255, 255, 0.9)",
    borderColor: "#e5e7eb",
    textColor: "#4b5563",
    logoColor: "#6366f1",
    sticky: true,
    blur: true,
  },
  button: {
    primaryBg: "#6366f1",
    primaryText: "#ffffff",
    primaryHover: "#4f46e5",
    radius: "lg",
  },
}
```
