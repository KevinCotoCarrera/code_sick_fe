# Landing Page Components

Complete toolkit for building modern, conversion-focused landing pages with 3D elements and smooth animations.

## Quick Start

```tsx
import Hero3D from "@components/three/Hero3D";
import LeadCaptureForm from "@components/lead/LeadCaptureForm";
import FeatureGrid from "@components/shared/FeatureGrid";
import StatsGrid from "@components/shared/StatsGrid";
import CTAButtons from "@components/shared/CTAButtons";
import { FadeIn, SlideIn } from "@components/motion/Animations";
```

## Complete Example

```tsx
export default function LandingPage() {
  return (
    <div>
      {/* Hero with 3D Background */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <FadeIn>
            <h1 className="text-6xl font-bold">Your Headline</h1>
            <p className="text-xl mt-4">Your compelling subtitle</p>
          </FadeIn>
          <SlideIn delay={0.2}>
            <CTAButtons
              primaryText="Get Started"
              onPrimaryClick={() => scrollTo("#form")}
            />
          </SlideIn>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <FeatureGrid
          features={[
            {
              icon: "🚀",
              title: "Fast",
              description: "Lightning-fast performance",
            },
            // ... more features
          ]}
        />
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-900 text-white">
        <StatsGrid
          stats={[
            { value: "10K+", label: "Users" },
            { value: "98%", label: "Satisfaction" },
            { value: "24/7", label: "Support" },
          ]}
        />
      </section>

      {/* Lead Form */}
      <section id="form" className="py-20">
        <LeadCaptureForm
          title="Start Your Free Trial"
          showCompany={true}
          showMessage={true}
        />
      </section>
    </div>
  );
}
```

## Component Reference

### 3D Components (`/components/three/`)

- **Hero3D**: Animated sphere for hero sections
- **Feature3D**: Interactive cube/text for features
- **Product3D**: Torus animation for products

### Motion Components (`/components/motion/`)

- **FadeIn**: Smooth fade with optional slide
- **SlideIn**: Directional slide animations
- **ScaleIn**: Scale up animation
- **StaggerContainer**: Sequential child animations
- **FloatingCard**: Hover float effect
- **AnimatedButton**: Interactive button

### Shared Components (`/components/shared/`)

- **FeatureGrid**: Grid of feature cards with icons
- **StatsGrid**: Statistics display with animations
- **CTAButtons**: Call-to-action button pair
- **LeadCaptureForm**: Server-side form submission

## Layouts

### Full-Width Hero

```tsx
<section className="w-full min-h-screen">
  <div className="absolute inset-0">
    <Hero3D />
  </div>
  {/* Content */}
</section>
```

### Split Layout

```tsx
<div className="grid lg:grid-cols-2 gap-12">
  <div>
    <h2>Content</h2>
    <p>Description</p>
  </div>
  <div className="h-[400px]">
    <Feature3D />
  </div>
</div>
```

### Centered Content

```tsx
<div className="max-w-4xl mx-auto px-4">
  <FadeIn>
    <h2 className="text-center">Heading</h2>
  </FadeIn>
  <LeadCaptureForm />
</div>
```

## Color Schemes

### Primary (Blue)

- `bg-blue-600`, `text-blue-600`
- `from-blue-400 to-blue-600`

### Accent (Purple)

- `bg-purple-600`, `text-purple-600`
- `from-purple-400 to-purple-600`

### Neutral

- `bg-gray-50`, `bg-gray-900`
- `text-gray-600`, `text-gray-900`

## Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)
- **Large**: `xl:` (≥ 1280px)

## Animation Timing

- **Fast**: 0.3s (micro-interactions)
- **Normal**: 0.6s (page elements)
- **Slow**: 1.0s (hero content)
- **Stagger**: 0.1-0.2s delay between items

## Best Practices

1. **Performance**

   - Lazy load 3D components
   - Use Suspense boundaries
   - Optimize images

2. **Accessibility**

   - Add ARIA labels
   - Ensure keyboard navigation
   - Test with screen readers

3. **SEO**

   - Use semantic HTML
   - Add meta descriptions
   - Implement structured data

4. **Conversion**
   - Clear CTAs above fold
   - Social proof (stats, testimonials)
   - Minimal form fields
   - Strong value proposition

## Examples Directory

Check `/src/app/page.tsx` for a complete implementation.

## Customization

All components accept `className` props for custom styling. Modify internal colors and animations in component files.

## Support

- Framer Motion: https://www.framer.com/motion/
- React Three Fiber: https://docs.pmnd.rs/react-three-fiber
- Tailwind CSS: https://tailwindcss.com/docs
