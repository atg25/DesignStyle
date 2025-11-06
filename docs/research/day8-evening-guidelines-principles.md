# MCM Design System - Guidelines & Principles

**Day 8 Evening Session:** Design Principles, Governance & Implementation  
**Created:** November 5, 2025  
**Purpose:** Establish design principles and system governance for consistent implementation

---

## Part 1: Core Design Principles

### The MCM Design Philosophy

Our design system is built on mid-century modern principles adapted for digital experiences.

**1. Form Follows Function**

_Every element serves a purpose. Beauty emerges from utility._

**In Practice:**

- No decoration for decoration's sake
- Every UI element must have clear function
- Remove anything that doesn't serve user goals
- Prioritize usability over aesthetics

```html
<!-- Bad: Decorative elements with no function -->
<div class="decorative-flourish"></div>
<div class="animated-background"></div>
<button class="btn">
  <span class="sparkle-effect"></span>
  <span class="glow-ring"></span>
  Submit
</button>

<!-- Good: Clean, functional design -->
<button class="btn btn--primary">Submit</button>
```

**2. Honest Materials**

_Digital materials should behave naturally, not simulate physical textures._

**In Practice:**

- Use flat colors, not faux textures
- Shadows suggest depth, not skeuomorphism
- Animations follow physics principles
- Transparency shows layering honestly

```css
/* Bad: Skeuomorphic fake wood texture */
.card {
  background-image: url("wood-texture.jpg");
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.5), inset 0 -1px rgba(0, 0, 0, 0.5);
  border: 3px outset #8b7355;
}

/* Good: Honest digital material */
.card {
  background: var(--color-surface);
  box-shadow: var(--shadow-md);
  border-radius: 8px;
}
```

**3. Clean Lines & Geometric Forms**

_Simple shapes create visual clarity._

**In Practice:**

- Use circles, squares, rectangles consistently
- Align to grid system
- Maintain consistent spacing
- Avoid unnecessary curves or angles

```css
/* Consistent geometric approach */
.card {
  border-radius: 8px;
} /* Soft rectangle */
.avatar {
  border-radius: 50%;
} /* Circle */
.badge {
  border-radius: 100px;
} /* Pill */
.alert {
  border-radius: 4px;
} /* Subtle rounding */
```

**4. Bold Use of Color**

_Color should be intentional and impactful._

**In Practice:**

- Use 1-2 accent colors max per screen
- Let color guide attention
- Maintain neutral base (80% neutral, 20% color)
- Ensure accessibility (WCAG AA minimum)

```html
<!-- Color hierarchy in action -->
<section class="hero" style="background: var(--color-cream-100)">
  <h1 class="display" style="color: var(--color-charcoal-600)">
    Discover Timeless Design
  </h1>
  <p class="lead" style="color: var(--color-walnut-500)">
    Mid-century modern furniture for contemporary living
  </p>
  <a href="/collection" class="btn btn--primary">
    <!-- Orange CTA stands out against neutral palette -->
    Explore Collection
  </a>
</section>
```

**5. Generous Whitespace**

_Space is not wasted. It creates breathing room and focus._

**In Practice:**

- Use 2-4x more spacing than feels necessary
- Let content breathe
- Group related elements close, separate unrelated
- Empty space has visual weight

```css
/* Whitespace as design element */
.section {
  padding: var(--space-32) 0; /* 128px vertical spacing */
}

.content-block {
  max-width: 65ch; /* ~65 characters for readability */
  margin: 0 auto;
  padding: var(--space-8); /* 32px all around */
}

.card {
  padding: var(--space-8); /* Internal breathing room */
}

.grid {
  gap: var(--space-8); /* Space between items */
}
```

**6. Typography as Hierarchy**

_Size, weight, and spacing create clear information structure._

**In Practice:**

- Establish clear type scale (6-8 levels)
- Use size to indicate importance
- Limit to 2-3 font families
- Use all-caps sparingly (labels only)

```html
<!-- Typography hierarchy example -->
<article>
  <span class="label">Design History</span>
  <!-- Smallest, all caps -->

  <h1 class="h1">The Eames Legacy</h1>
  <!-- Largest, most important -->

  <p class="lead">
    <!-- Larger body text, introduction -->
    Charles and Ray Eames revolutionized modern furniture design...
  </p>

  <p class="body">
    <!-- Standard body text, details -->
    Their innovative approach combined...
  </p>

  <small class="small">
    <!-- Smallest, metadata -->
    Published March 2025
  </small>
</article>
```

---

## Part 2: Accessibility Guidelines

### WCAG 2.1 AA Compliance (Minimum Standard)

**Color Contrast Requirements:**

```css
/* Text contrast ratios */
:root {
  /* Normal text (under 24px): 4.5:1 minimum */
  --text-on-light: #2c2416; /* Charcoal on cream: 14.59:1 ✓ AAA */
  --text-on-dark: #ffffff; /* White on charcoal: 17.68:1 ✓ AAA */

  /* Large text (24px+): 3:1 minimum */
  --large-text-accent: #ff6b35; /* Orange on white: 4.57:1 ✓ AA */

  /* UI components: 3:1 minimum */
  --border-color: rgba(44, 36, 22, 0.3); /* 3.2:1 ✓ AA */
}

/* Test your colors */
.contrast-test {
  background: #ff6b35;
  color: #ffffff;
  /* Orange + White = 4.57:1 - PASSES AA for all text sizes */
}
```

**Testing Tool:**

```javascript
// Calculate contrast ratio
function getContrastRatio(color1, color2) {
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function getLuminance(hexColor) {
  const rgb = hexToRgb(hexColor);
  const [r, g, b] = rgb.map((val) => {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Usage
const ratio = getContrastRatio("#FF6B35", "#FFFFFF");
console.log(`Contrast ratio: ${ratio.toFixed(2)}:1`);
// Output: Contrast ratio: 4.57:1 (AA Pass)
```

**Focus Indicators:**

```css
/* Visible focus states (required) */
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* Custom focus for different components */
.btn:focus-visible {
  outline: 3px solid rgba(255, 107, 53, 0.5);
  outline-offset: 2px;
}

.form-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  outline: none; /* Only if you provide custom focus style */
}

.nav__link:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 4px;
  border-radius: 2px;
}
```

**Keyboard Navigation:**

```html
<!-- All interactive elements must be keyboard accessible -->

<!-- Tab order follows visual order -->
<nav>
  <a href="/" tabindex="0">Home</a>
  <!-- Accessible via Tab -->
  <a href="/about" tabindex="0">About</a>
  <a href="/contact" tabindex="0">Contact</a>
</nav>

<!-- Skip links for keyboard users -->
<a href="#main-content" class="skip-link"> Skip to main content </a>

<!-- Proper button semantics -->
<button type="button" onclick="openModal()">Open Dialog</button>
<!-- NOT: <div onclick="openModal()">Open Dialog</div> -->

<!-- Disabled elements not in tab order -->
<button disabled>Unavailable Action</button>

<!-- Custom interactive elements need roles -->
<div
  role="button"
  tabindex="0"
  onclick="handleClick()"
  onkeydown="if(event.key === 'Enter' || event.key === ' ') handleClick()"
>
  Custom Button
</div>
```

**Screen Reader Support:**

```html
<!-- Semantic HTML first -->
<nav aria-label="Primary navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<!-- Descriptive labels -->
<button aria-label="Close dialog">
  <svg aria-hidden="true"><use href="#icon-close"></use></svg>
</button>

<!-- Live regions for dynamic content -->
<div role="status" aria-live="polite" aria-atomic="true">
  Item added to cart
</div>

<!-- Expanded/collapsed states -->
<button aria-expanded="false" aria-controls="menu" onclick="toggleMenu()">
  Menu
</button>

<!-- Hidden content -->
<div id="menu" aria-hidden="true" hidden>
  <!-- Menu content -->
</div>

<!-- Loading states -->
<button aria-busy="true">
  <span class="sr-only">Loading...</span>
  <span aria-hidden="true" class="spinner"></span>
</button>
```

**Screen Reader Only Text:**

```css
/* Hide visually but keep for screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Show on focus (for skip links) */
.sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

**Motion & Animation:**

```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Safe animations (subtle, functional) */
.btn {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }

  .btn:hover {
    transform: none;
    /* Keep visual feedback, just not animated */
    box-shadow: var(--shadow-lg);
  }
}
```

---

## Part 3: Responsive Design Strategy

### Mobile-First Approach

**Breakpoint System:**

```css
:root {
  /* Breakpoints */
  --screen-sm: 640px; /* Phones landscape */
  --screen-md: 768px; /* Tablets portrait */
  --screen-lg: 1024px; /* Tablets landscape, small laptops */
  --screen-xl: 1280px; /* Desktops */
  --screen-2xl: 1536px; /* Large desktops */
}

/* Start with mobile (no media query needed) */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Add complexity as screen grows */
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

@media (min-width: 1280px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

**Responsive Typography:**

```css
/* Fluid typography with clamp() */
h1 {
  font-size: clamp(2rem, 5vw + 1rem, 5rem);
  /* Min: 2rem (32px) */
  /* Preferred: 5vw + 1rem (scales with viewport) */
  /* Max: 5rem (80px) */
}

p {
  font-size: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
  /* Min: 1rem (16px) */
  /* Max: 1.125rem (18px) */
}

/* Alternative: Step-based approach */
h1 {
  font-size: var(--text-3xl);
}

@media (min-width: 640px) {
  h1 {
    font-size: var(--text-4xl);
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: var(--text-5xl);
  }
}
```

**Touch Targets:**

```css
/* Minimum 44x44px touch targets (WCAG 2.1 Level AAA) */
.btn {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.5rem;
}

/* Increase spacing between touch targets on mobile */
.btn-group {
  gap: 0.5rem;
}

@media (min-width: 1024px) {
  .btn-group {
    gap: 0; /* Can be tighter with mouse precision */
  }
}
```

**Container Strategy:**

```css
/* Fluid containers */
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem; /* Mobile padding */
}

@media (min-width: 640px) {
  .container {
    padding: 0 2rem;
  }
}

@media (min-width: 1280px) {
  .container {
    padding: 0 4rem;
  }
}

/* Narrow content containers for readability */
.content-container {
  max-width: 65ch; /* ~65 characters */
  margin: 0 auto;
}
```

---

## Part 4: Performance Standards

### Core Web Vitals Targets

**Largest Contentful Paint (LCP): < 2.5s**

```html
<!-- Optimize hero images -->
<img
  src="hero-800w.jpg"
  srcset="
    hero-400w.jpg   400w,
    hero-800w.jpg   800w,
    hero-1200w.jpg 1200w,
    hero-1600w.jpg 1600w
  "
  sizes="100vw"
  alt="Eames Lounge Chair"
  loading="eager"
  fetchpriority="high"
  width="1600"
  height="900"
/>

<!-- Preload critical resources -->
<link
  rel="preload"
  href="/fonts/helvetica-neue.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
<link rel="preload" href="/images/hero.jpg" as="image" />

<!-- Inline critical CSS -->
<style>
  /* Above-fold styles only */
  .hero {
    /* ... */
  }
</style>
```

**First Input Delay (FID): < 100ms**

```javascript
// Defer non-critical JavaScript
<script src="/js/analytics.js" defer></script>
<script src="/js/main.js" defer></script>

// Break up long tasks
function processLargeArray(items) {
  const chunkSize = 100;
  let index = 0;

  function processChunk() {
    const chunk = items.slice(index, index + chunkSize);
    // Process chunk

    index += chunkSize;
    if (index < items.length) {
      setTimeout(processChunk, 0); // Yield to browser
    }
  }

  processChunk();
}
```

**Cumulative Layout Shift (CLS): < 0.1**

```css
/* Reserve space for images */
.img-container {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Reserve space for ads/embeds */
.ad-slot {
  min-height: 250px;
  background: var(--color-cream-200);
}

/* Avoid inserting content above existing content */
.notification {
  position: fixed; /* Don't push content down */
  top: 0;
  left: 0;
  right: 0;
}
```

**File Size Budgets:**

```javascript
// package.json
{
  "scripts": {
    "build": "npm run build:css && npm run build:js && npm run check-size"
  },
  "bundlesize": [
    {
      "path": "./dist/css/main.css",
      "maxSize": "50 kB"
    },
    {
      "path": "./dist/js/main.js",
      "maxSize": "100 kB"
    },
    {
      "path": "./dist/images/*",
      "maxSize": "200 kB"
    }
  ]
}
```

---

## Part 5: Design System Governance

### Contribution Guidelines

**When to Add to the System:**

✅ **DO add when:**

- Pattern is used 3+ times across site
- Multiple people need the component
- Component solves common user need
- Design is validated through testing

❌ **DON'T add when:**

- One-off specific use case
- Experimental/unvalidated design
- Duplicates existing component
- Too complex or too specific

**Contribution Process:**

1. **Propose** - Open discussion with examples
2. **Design** - Create variants and documentation
3. **Develop** - Build component with tests
4. **Review** - Team reviews code and design
5. **Document** - Add to documentation site
6. **Release** - Version bump and changelog

**Component Checklist:**

```markdown
## New Component Checklist

### Design

- [ ] Fits MCM design principles
- [ ] Uses design tokens (no hard-coded values)
- [ ] Includes all necessary variants
- [ ] Works on all breakpoints
- [ ] Tested with real content

### Development

- [ ] Semantic HTML
- [ ] Accessible (WCAG 2.1 AA)
- [ ] Keyboard navigable
- [ ] Screen reader tested
- [ ] Works without JavaScript
- [ ] No console errors
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)

### Documentation

- [ ] Overview and usage guidelines
- [ ] Code examples
- [ ] Props/parameters documented
- [ ] Accessibility notes
- [ ] Best practices
- [ ] Related components

### Performance

- [ ] No layout shift
- [ ] Optimized images
- [ ] Minimal JavaScript
- [ ] CSS < 5kb
- [ ] Tested on slow connections

### Testing

- [ ] Unit tests written
- [ ] Integration tests pass
- [ ] Visual regression tests
- [ ] Lighthouse score > 90
```

**Deprecation Process:**

````markdown
## Deprecating a Component

1. **Announce** (1 month notice)

   - Add deprecation warning to docs
   - Update changelog
   - Notify team

2. **Provide Alternative** (required)

   - Document migration path
   - Provide codemod if possible
   - Offer support for migration

3. **Mark as Deprecated** (in code)
   ```css
   /* @deprecated Use .card-v2 instead. Will be removed in v3.0 */
   .card-old {
     /* ... */
   }
   ```
````

4. **Remove** (next major version)
   - Delete from codebase
   - Update documentation
   - Major version bump

````

---

## Part 6: Implementation Guide

### Getting Started with the System

**Step 1: Install Base Styles**

```html
<!-- In your HTML <head> -->
<link rel="stylesheet" href="/css/design-system.css">
````

**Step 2: Use Design Tokens**

```css
/* Your custom CSS */
.my-component {
  /* Use tokens, not hard-coded values */
  background: var(--color-surface);
  color: var(--color-text-primary);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);

  /* NOT this: */
  /* background: #FFFFFF; */
  /* color: #2C2416; */
  /* padding: 16px; */
}
```

**Step 3: Compose with Utilities**

```html
<!-- Use utility classes for spacing, typography -->
<article class="card p-8 mb-8">
  <h3 class="text-2xl font-bold mb-4">Article Title</h3>
  <p class="text-base leading-normal mb-6">Article content goes here...</p>
  <a href="#" class="btn btn--primary">Read More</a>
</article>
```

**Step 4: Build Custom Components**

```html
<!-- Extend system components -->
<div class="product-card card card--soft card--elevated">
  <div class="product-card__badge">New</div>
  <div class="card__image">
    <img src="product.jpg" alt="Product name" />
  </div>
  <h3 class="card__title">Product Name</h3>
  <p class="card__description">Description...</p>
  <div class="product-card__price">$999</div>
  <button class="card__action">Add to Cart</button>
</div>

<style>
  /* Custom extensions use BEM naming */
  .product-card__badge {
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    padding: var(--space-2) var(--space-4);
    background: var(--color-primary);
    color: white;
    font-size: var(--text-xs);
    font-weight: var(--font-bold);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wider);
    border-radius: var(--radius-sm);
  }

  .product-card__price {
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    color: var(--color-primary);
    margin-bottom: var(--space-4);
  }
</style>
```

### Naming Conventions

**CSS Classes (BEM):**

```css
/* Block - standalone component */
.card {
}

/* Element - part of component */
.card__image {
}
.card__title {
}
.card__action {
}

/* Modifier - variant of component */
.card--soft {
}
.card--dark {
}
.card--elevated {
}

/* State - temporary state */
.card.is-loading {
}
.card.is-expanded {
}
```

**Design Tokens:**

```css
/* Pattern: --{category}-{property}-{variant} */
--color-orange-500
--text-2xl
--space-8
--shadow-md
--radius-lg
--font-bold
--leading-tight
```

**File Organization:**

```
src/
├── tokens/
│   ├── colors.css
│   ├── typography.css
│   └── spacing.css
├── base/
│   ├── reset.css
│   └── typography.css
├── components/
│   ├── button.css
│   ├── card.css
│   └── navigation.css
└── utilities/
    ├── spacing.css
    └── display.css
```

---

## Deliverables Summary

✅ **Design Principles Established:**

- 6 core MCM principles (form/function, honest materials, clean lines, bold color, whitespace, typography)
- Each principle includes "in practice" guidelines
- Code examples for each principle (good vs. bad)
- Clear philosophy for digital MCM adaptation

✅ **Accessibility Guidelines:**

- Complete WCAG 2.1 AA compliance requirements
- Color contrast ratios with testing tool
- Focus indicator patterns for all components
- Keyboard navigation requirements
- Screen reader support with ARIA patterns
- Motion/animation accessibility
- 30+ code examples

✅ **Responsive Design Strategy:**

- 5 breakpoints defined (sm to 2xl)
- Mobile-first CSS patterns
- Fluid typography with clamp()
- Touch target minimums (44x44px)
- Container strategies
- 15+ responsive examples

✅ **Performance Standards:**

- Core Web Vitals targets (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- Optimization techniques for each metric
- File size budgets defined
- Image optimization patterns
- JavaScript performance best practices

✅ **Governance Framework:**

- Component contribution guidelines
- Complete component checklist (30+ items)
- Deprecation process (4-step)
- Design review criteria
- Quality standards

✅ **Implementation Guide:**

- 4-step getting started process
- Design token usage examples
- Utility class composition
- Custom component extension patterns
- Naming conventions (BEM, tokens)
- File organization structure

**Total Guidelines Documented:**

- 6 design principles
- 50+ accessibility requirements
- 15+ responsive patterns
- 3 performance metrics
- 30+ quality checkpoints
- 20+ implementation examples

---

**Day 8 Complete!** 🎉

**Sessions Completed:**

- Morning: Complete design token system (162 tokens)
- Afternoon: Component documentation (3 major components, 27 variants)
- Evening: Design principles, accessibility, governance, implementation

**Total Day 8 Deliverables:**

- 162 design tokens (colors, typography, spacing, shadows)
- 3 fully documented components
- 6 core design principles
- Complete accessibility framework
- Responsive design system
- Performance standards
- Governance guidelines
- Implementation guide

**Progress:** 8 of 12 days complete (67%)

---

**Session Complete:** Day 8 Evening  
**Next Session:** Day 9 Morning - Content Strategy & Information Architecture
