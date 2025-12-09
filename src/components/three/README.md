# 3D Components with React Three Fiber

This directory contains reusable 3D components built with React Three Fiber for modern landing pages.

## Components

### Hero3D

An animated distorted sphere with auto-rotation. Perfect for hero sections.

**Usage:**

```tsx
import Hero3D from "@components/three/Hero3D";

<div className="h-[600px]">
  <Hero3D />
</div>;
```

### Feature3D

Interactive 3D element with two variants: rotating cube or floating 3D text.

**Usage:**

```tsx
import Feature3D from '@components/three/Feature3D';

// Cube variant
<Feature3D variant="cube" />

// Text variant (requires font file)
<Feature3D variant="text" text="Innovation" />
```

### Product3D

Animated torus with wobble effect. Great for product showcases.

**Usage:**

```tsx
import Product3D from "@components/three/Product3D";

<div className="h-[400px]">
  <Product3D />
</div>;
```

## Configuration

These components use:

- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers for R3F
- **three**: 3D library

## Performance Tips

1. Use `dynamic` imports with `ssr: false` for better initial load:

```tsx
const Hero3D = dynamic(() => import("@components/three/Hero3D"), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-100" />,
});
```

2. Wrap in `Suspense` for progressive loading
3. Keep polygon counts reasonable for mobile devices
4. Use `OrbitControls` sparingly on mobile

## Customization

Each component accepts a `className` prop for styling the container. Modify colors, speeds, and geometry in the component files.
