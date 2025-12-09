# Motion Components

Reusable animation components built with Framer Motion for smooth, performant animations.

## Animation Wrappers

### FadeIn

Fade in with optional vertical slide.

```tsx
import { FadeIn } from "@components/motion/Animations";

<FadeIn delay={0.2} duration={0.6}>
  <h1>Content appears smoothly</h1>
</FadeIn>;
```

### SlideIn

Slide in from any direction.

```tsx
import { SlideIn } from "@components/motion/Animations";

<SlideIn direction="left" delay={0.1}>
  <div>Slides from left</div>
</SlideIn>;
```

Directions: `left`, `right`, `up`, `down`

### ScaleIn

Scale up with fade in.

```tsx
import { ScaleIn } from "@components/motion/Animations";

<ScaleIn delay={0.3}>
  <img src="..." />
</ScaleIn>;
```

### StaggerContainer

Animate children in sequence.

```tsx
import { StaggerContainer, staggerItem } from "@components/motion/Animations";
import { motion } from "framer-motion";

<StaggerContainer staggerDelay={0.1}>
  {items.map((item) => (
    <motion.div variants={staggerItem}>{item}</motion.div>
  ))}
</StaggerContainer>;
```

## Interactive Elements

### FloatingCard

Card that floats up on hover.

```tsx
import { FloatingCard } from "@components/motion/InteractiveElements";

<FloatingCard delay={0.2}>
  <div className="card-content">Hovers smoothly</div>
</FloatingCard>;
```

### AnimatedButton

Button with scale interactions.

```tsx
import { AnimatedButton } from "@components/motion/InteractiveElements";

<AnimatedButton onClick={handleClick} className="btn-primary">
  Click Me
</AnimatedButton>;
```

### ParallaxText

Text with parallax scroll effect.

```tsx
import { ParallaxText } from "@components/motion/InteractiveElements";

<ParallaxText speed={50}>Moves with scroll</ParallaxText>;
```

### RotatingBadge

Gently rotating badge for attention.

```tsx
import { RotatingBadge } from "@components/motion/InteractiveElements";

<RotatingBadge>
  <span className="badge">New!</span>
</RotatingBadge>;
```

### CountUp

Animated number counter.

```tsx
import { CountUp } from "@components/motion/InteractiveElements";

<CountUp end={10000} duration={2} suffix="+" />;
```

## Best Practices

1. Use `viewport={{ once: true }}` to animate only on first view
2. Keep durations between 0.3-0.8s for snappy feel
3. Stagger delays by 0.1-0.2s for smooth sequences
4. Use `ease: "easeOut"` for natural motion
5. Avoid animating too many elements simultaneously

## Performance

These components use Framer Motion's optimized animation engine with:

- Hardware-accelerated transforms
- RequestAnimationFrame
- Automatic will-change management
- Viewport-based lazy loading
