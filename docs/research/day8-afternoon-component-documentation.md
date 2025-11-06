# MCM Design System - Component Documentation

**Day 8 Afternoon Session:** Component Library & Usage Guidelines  
**Created:** November 5, 2025  
**Purpose:** Document all components with usage examples and best practices

---

## Part 1: Component Documentation Structure

### Documentation Template

Each component includes:

1. **Overview** - What it is and when to use it
2. **Anatomy** - Visual breakdown of parts
3. **Variants** - All available options
4. **Props/Parameters** - Configuration options
5. **Usage Examples** - Code samples
6. **Accessibility** - WCAG compliance notes
7. **Best Practices** - Do's and don'ts
8. **Related Components** - What works together

---

## Part 2: Button Component

### Overview

Buttons trigger actions and events. They're one of the most important interactive elements.

**When to use:**

- Primary actions (submit forms, navigate)
- Secondary actions (cancel, go back)
- Tertiary actions (view more, learn more)

**When NOT to use:**

- For navigation between pages (use links instead)
- For toggling UI states (use toggle switches)

### Anatomy

```
┌─────────────────────────┐
│  [Icon]  Text  [Icon]  │  ← Button container
└─────────────────────────┘
     ↑       ↑       ↑
   Icon   Label  Icon (optional)
```

### Variants

**1. Color Variants**

```html
<!-- Primary (orange) - Main actions -->
<button class="btn btn--primary">Primary Action</button>

<!-- Secondary (teal) - Supporting actions -->
<button class="btn btn--secondary">Secondary Action</button>

<!-- Ghost (transparent with border) - Tertiary actions -->
<button class="btn btn--ghost">Ghost Button</button>

<!-- Dark (charcoal) - On light backgrounds -->
<button class="btn btn--dark">Dark Button</button>

<!-- Light (white) - On dark backgrounds -->
<button class="btn btn--light">Light Button</button>
```

**2. Size Variants**

```html
<!-- Small - Compact UIs, table actions -->
<button class="btn btn--primary btn--sm">Small</button>

<!-- Base (default) - Standard actions -->
<button class="btn btn--primary">Base</button>

<!-- Large - Hero sections, primary CTAs -->
<button class="btn btn--primary btn--lg">Large</button>

<!-- Extra Large - Landing pages, major actions -->
<button class="btn btn--primary btn--xl">Extra Large</button>
```

**3. Shape Variants**

```html
<!-- Default (4px radius) - Standard -->
<button class="btn btn--primary">Default</button>

<!-- Rounded (pill-shaped) - Friendly, modern -->
<button class="btn btn--primary btn--rounded">Rounded</button>

<!-- Square (no radius) - Architectural, bold -->
<button class="btn btn--primary btn--square">Square</button>
```

**4. Width Variants**

```html
<!-- Default (auto width) -->
<button class="btn btn--primary">Auto Width</button>

<!-- Full width - Forms, mobile layouts -->
<button class="btn btn--primary btn--full">Full Width</button>

<!-- Icon only (square) - Toolbars, compact UIs -->
<button class="btn btn--primary btn--icon" aria-label="Save">
  <svg width="20" height="20"><use href="#icon-save"></use></svg>
</button>
```

**5. State Variants**

```html
<!-- Disabled - Action not available -->
<button class="btn btn--primary" disabled>Disabled</button>

<!-- Loading - Action in progress -->
<button class="btn btn--primary btn--loading">Loading...</button>
```

### Complete Props Table

| Prop           | Type    | Values                                           | Default   | Description         |
| -------------- | ------- | ------------------------------------------------ | --------- | ------------------- |
| `variant`      | string  | `primary`, `secondary`, `dark`, `light`, `ghost` | `primary` | Button color scheme |
| `size`         | string  | `sm`, `base`, `lg`, `xl`                         | `base`    | Button size         |
| `shape`        | string  | `default`, `rounded`, `square`                   | `default` | Border radius style |
| `width`        | string  | `auto`, `full`, `icon`                           | `auto`    | Width behavior      |
| `disabled`     | boolean | `true`, `false`                                  | `false`   | Disabled state      |
| `loading`      | boolean | `true`, `false`                                  | `false`   | Loading state       |
| `icon`         | string  | Icon ID                                          | -         | Optional icon       |
| `iconPosition` | string  | `left`, `right`                                  | `left`    | Icon placement      |

### Usage Examples

**Example 1: Form Submit Button**

```html
<form>
  <!-- Form fields... -->

  <div class="form-actions">
    <button type="submit" class="btn btn--primary btn--lg">
      Submit Application
    </button>
    <button type="button" class="btn btn--ghost">Save as Draft</button>
  </div>
</form>
```

**Example 2: Hero CTA**

```html
<section class="hero">
  <h1 class="display">Discover Mid-Century Modern</h1>
  <p class="lead">Timeless design for contemporary living</p>

  <div class="hero__actions">
    <a href="/collection" class="btn btn--primary btn--xl btn--rounded">
      Explore Collection
    </a>
    <a href="/about" class="btn btn--ghost btn--xl btn--rounded">
      Learn More
    </a>
  </div>
</section>
```

**Example 3: Button Group**

```html
<div class="btn-group">
  <button class="btn btn--light">Day</button>
  <button class="btn btn--light">Week</button>
  <button class="btn btn--primary">Month</button>
  <button class="btn btn--light">Year</button>
</div>
```

**Example 4: Loading State**

```html
<button class="btn btn--primary" id="submitBtn">Submit</button>

<script>
  document
    .getElementById("submitBtn")
    .addEventListener("click", async function () {
      this.classList.add("btn--loading");
      this.disabled = true;

      try {
        await submitForm();
      } finally {
        this.classList.remove("btn--loading");
        this.disabled = false;
      }
    });
</script>
```

### Accessibility

**Requirements:**

- ✅ Keyboard accessible (Tab to focus, Enter/Space to activate)
- ✅ Focus visible (3px outline)
- ✅ Sufficient color contrast (4.5:1 minimum)
- ✅ Clear hover/focus states
- ✅ Descriptive text or `aria-label` for icon-only buttons
- ✅ `disabled` attribute when not actionable
- ✅ `type` attribute specified (button, submit, reset)

**ARIA Attributes:**

```html
<!-- Icon-only button -->
<button class="btn btn--icon" aria-label="Close dialog">
  <svg aria-hidden="true"><use href="#icon-close"></use></svg>
</button>

<!-- Button with external action -->
<button class="btn" aria-describedby="tooltip">Delete</button>
<span id="tooltip" role="tooltip">This action cannot be undone</span>

<!-- Toggle button -->
<button
  class="btn"
  aria-pressed="false"
  onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true')"
>
  Toggle Setting
</button>
```

### Best Practices

**✅ DO:**

- Use primary buttons for the main action
- Limit to one primary button per screen section
- Use clear, action-oriented labels ("Save Changes", not "Submit")
- Make buttons large enough (min 44x44px touch target)
- Provide visual feedback on hover/press
- Disable buttons when action unavailable
- Show loading state for async actions

**❌ DON'T:**

- Use multiple primary buttons competing for attention
- Use vague labels ("Click Here", "OK")
- Make buttons too small (especially on mobile)
- Use buttons for navigation (use links instead)
- Forget to disable during loading states
- Remove focus indicators

**Button Label Guidelines:**

```html
<!-- Bad: Vague -->
<button class="btn">Submit</button>

<!-- Good: Specific -->
<button class="btn">Create Account</button>

<!-- Bad: Generic -->
<button class="btn">Click Here</button>

<!-- Good: Action-oriented -->
<button class="btn">Download PDF</button>

<!-- Bad: Too long -->
<button class="btn">Click this button to subscribe to our newsletter</button>

<!-- Good: Concise -->
<button class="btn">Subscribe</button>
```

### Related Components

- **Link** - For navigation
- **Icon Button** - Compact toolbar actions
- **Split Button** - Button with dropdown menu
- **Button Group** - Related actions together

---

## Part 3: Card Component

### Overview

Cards contain content and actions about a single subject. They're the workhorse of modern web design.

**When to use:**

- Product listings
- Article previews
- Feature showcases
- Team member profiles

**When NOT to use:**

- Single pieces of content (use regular layout)
- Complex forms (use dedicated form layout)

### Anatomy

```
┌─────────────────────────┐
│       IMAGE             │  ← Card image (optional)
├─────────────────────────┤
│ CATEGORY                │  ← Card category (optional)
│                         │
│ Title Goes Here         │  ← Card title
│                         │
│ Description text that   │  ← Card description
│ provides more details   │
│ about the content.      │
│                         │
│ Meta • Info • Here      │  ← Card meta (optional)
│                         │
│ ┌──────────────┐        │
│ │ Call to Action │        │  ← Card action (optional)
│ └──────────────┘        │
└─────────────────────────┘
```

### Variants

**1. Style Variants**

```html
<!-- Sharp edges (default) - Architectural, bold -->
<div class="card card--sharp">
  <!-- Content -->
</div>

<!-- Soft edges - Friendly, modern -->
<div class="card card--soft">
  <!-- Content -->
</div>

<!-- Very soft edges - Maximum friendliness -->
<div class="card card--very-soft">
  <!-- Content -->
</div>

<!-- Minimal (border only) - Subtle, lightweight -->
<div class="card card--minimal">
  <!-- Content -->
</div>

<!-- Elevated (strong shadow) - Important content -->
<div class="card card--elevated">
  <!-- Content -->
</div>
```

**2. Color Variants**

```html
<!-- Light (white background - default) -->
<div class="card">
  <!-- Content -->
</div>

<!-- Tinted (cream background) - Subtle differentiation -->
<div class="card card--tinted">
  <!-- Content -->
</div>

<!-- Dark (charcoal background) - Emphasis -->
<div class="card card--dark">
  <h3 class="card__title">White text on dark</h3>
  <p class="card__description">High contrast design</p>
</div>
```

### Complete Card Structure

```html
<article class="card card--soft card--elevated">
  <!-- Image (optional) -->
  <div class="card__image">
    <img
      src="/images/eames-chair.jpg"
      alt="Eames Lounge Chair"
      loading="lazy"
      width="800"
      height="600"
    />
  </div>

  <!-- Category (optional) -->
  <span class="card__category">Furniture</span>

  <!-- Title (required) -->
  <h3 class="card__title">Eames Lounge Chair</h3>

  <!-- Description (recommended) -->
  <p class="card__description">
    Icon of mid-century modern design, combining molded plywood with premium
    leather for ultimate comfort.
  </p>

  <!-- Meta information (optional) -->
  <div class="card__meta">
    <span class="card__meta-item">Charles & Ray Eames</span>
    <span class="card__meta-item">1956</span>
    <span class="card__meta-item">Herman Miller</span>
  </div>

  <!-- Price (optional, for products) -->
  <div class="card__price">$5,995</div>

  <!-- Action (optional) -->
  <a href="/products/eames-lounge" class="card__action"> View Details </a>
</article>
```

### Usage Examples

**Example 1: Product Grid**

```html
<section class="section">
  <div class="container">
    <h2 class="h2 mb-8">Iconic Furniture</h2>

    <div class="grid grid--3 gap-8">
      <!-- Card 1 -->
      <article class="card card--soft">
        <div class="card__image">
          <img src="/images/eames-chair.jpg" alt="Eames Lounge Chair" />
        </div>
        <span class="card__category">Seating</span>
        <h3 class="card__title">Eames Lounge Chair</h3>
        <p class="card__description">
          Timeless design icon combining comfort and style.
        </p>
        <div class="card__price">$5,995</div>
        <a href="/products/eames-lounge" class="card__action"> View Details </a>
      </article>

      <!-- Card 2 -->
      <article class="card card--soft">
        <div class="card__image">
          <img src="/images/noguchi-table.jpg" alt="Noguchi Table" />
        </div>
        <span class="card__category">Tables</span>
        <h3 class="card__title">Noguchi Coffee Table</h3>
        <p class="card__description">
          Sculptural glass and wood create organic form.
        </p>
        <div class="card__price">$1,895</div>
        <a href="/products/noguchi-table" class="card__action">
          View Details
        </a>
      </article>

      <!-- Card 3 -->
      <article class="card card--soft">
        <div class="card__image">
          <img src="/images/nelson-bench.jpg" alt="Nelson Platform Bench" />
        </div>
        <span class="card__category">Seating</span>
        <h3 class="card__title">Nelson Platform Bench</h3>
        <p class="card__description">
          Versatile bench or table with distinctive slatted design.
        </p>
        <div class="card__price">$995</div>
        <a href="/products/nelson-bench" class="card__action"> View Details </a>
      </article>
    </div>
  </div>
</section>
```

**Example 2: Article Cards**

```html
<section class="section">
  <div class="container">
    <h2 class="h2 mb-8">Design Stories</h2>

    <div class="grid grid--2 gap-8">
      <article class="card card--minimal">
        <div class="card__image">
          <img src="/images/article-1.jpg" alt="Article cover" />
        </div>
        <span class="card__category">Design History</span>
        <h3 class="card__title">The Bauhaus Influence on Mid-Century Modern</h3>
        <p class="card__description">
          Exploring how Bauhaus principles shaped the MCM movement.
        </p>
        <div class="card__meta">
          <span>Sarah Johnson</span>
          <span>March 15, 2025</span>
          <span>8 min read</span>
        </div>
        <a href="/articles/bauhaus-influence" class="card__action">
          Read Article
        </a>
      </article>

      <article class="card card--minimal">
        <div class="card__image">
          <img src="/images/article-2.jpg" alt="Article cover" />
        </div>
        <span class="card__category">Designer Spotlight</span>
        <h3 class="card__title">Charles and Ray Eames: Partners in Design</h3>
        <p class="card__description">
          The legendary duo who revolutionized furniture design.
        </p>
        <div class="card__meta">
          <span>Michael Chen</span>
          <span>March 12, 2025</span>
          <span>12 min read</span>
        </div>
        <a href="/articles/eames-partners" class="card__action">
          Read Article
        </a>
      </article>
    </div>
  </div>
</section>
```

**Example 3: Feature Cards**

```html
<section class="section">
  <div class="container">
    <h2 class="h2 text-center mb-12">Why Choose MCM Design</h2>

    <div class="grid grid--3 gap-8">
      <div class="card card--very-soft card--tinted text-center">
        <div class="card__icon">
          <svg width="48" height="48"><use href="#icon-timeless"></use></svg>
        </div>
        <h3 class="card__title">Timeless Design</h3>
        <p class="card__description">
          MCM pieces remain relevant decades after creation, offering lasting
          value and style.
        </p>
      </div>

      <div class="card card--very-soft card--tinted text-center">
        <div class="card__icon">
          <svg width="48" height="48"><use href="#icon-functional"></use></svg>
        </div>
        <h3 class="card__title">Functional Beauty</h3>
        <p class="card__description">
          Form follows function with clean lines and purposeful design that
          works.
        </p>
      </div>

      <div class="card card--very-soft card--tinted text-center">
        <div class="card__icon">
          <svg width="48" height="48"><use href="#icon-quality"></use></svg>
        </div>
        <h3 class="card__title">Quality Materials</h3>
        <p class="card__description">
          Crafted from premium woods, metals, and fabrics built to last
          generations.
        </p>
      </div>
    </div>
  </div>
</section>
```

### Accessibility

**Requirements:**

- ✅ Use semantic HTML (`<article>` for cards)
- ✅ Proper heading hierarchy (h2, h3, etc.)
- ✅ Descriptive alt text for images
- ✅ Clickable area extends to full card (if entire card is clickable)
- ✅ Sufficient color contrast (4.5:1 text, 3:1 UI)
- ✅ Keyboard accessible (Tab through focusable elements)

**Making Entire Card Clickable:**

```html
<!-- Method 1: Wrapper link (simple but not semantic) -->
<a href="/products/eames-chair" class="card-link">
  <article class="card">
    <div class="card__image">...</div>
    <h3 class="card__title">Eames Chair</h3>
  </article>
</a>

<!-- Method 2: Stretched link (better semantics) -->
<article class="card">
  <div class="card__image">...</div>
  <h3 class="card__title">
    <a href="/products/eames-chair" class="card__link-stretched">
      Eames Chair
    </a>
  </h3>
  <p class="card__description">...</p>
</article>

<style>
  .card {
    position: relative;
  }

  .card__link-stretched::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  /* Other links need higher z-index */
  .card__action {
    position: relative;
    z-index: 2;
  }
</style>
```

### Best Practices

**✅ DO:**

- Keep card heights consistent in grids
- Use high-quality images (min 800px wide)
- Optimize images (WebP, lazy loading)
- Include alt text for all images
- Use consistent padding/spacing
- Limit text to 2-3 lines for titles
- Show hover states clearly

**❌ DON'T:**

- Mix different card styles in same grid
- Use low-quality or pixelated images
- Forget to lazy load images
- Overcrowd cards with too much content
- Make entire card clickable if there are multiple actions
- Use cards for single pieces of content

**Content Guidelines:**

```html
<!-- Bad: Too much content -->
<div class="card">
  <h3 class="card__title">
    This is an extremely long title that goes on and on and probably shouldn't
    be in a card at all
  </h3>
  <p class="card__description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat... [400 more words]
  </p>
</div>

<!-- Good: Concise content -->
<div class="card">
  <h3 class="card__title">Eames Lounge Chair</h3>
  <p class="card__description">
    Icon of mid-century modern design combining comfort and style.
  </p>
  <a href="/products/eames-chair" class="card__action"> Learn More </a>
</div>
```

### Related Components

- **Grid** - Layout system for cards
- **Image** - Optimized images in cards
- **Button** - Actions within cards
- **Badge** - Labels and tags on cards

---

## Part 4: Navigation Component

### Overview

Navigation provides wayfinding and access to key areas of the site.

**When to use:**

- Site header (primary navigation)
- Secondary navigation (sidebar, footer)
- In-page navigation (table of contents)

**When NOT to use:**

- For UI controls (use buttons)
- For one-time flows (use stepper/wizard)

### Variants

**1. Sticky Navigation**

```html
<nav class="nav nav--sticky" id="main-nav">
  <div class="nav__container">
    <a href="/" class="nav__logo">MCM Design</a>

    <ul class="nav__menu">
      <li><a href="/" class="nav__link nav__link--active">Home</a></li>
      <li><a href="/collection" class="nav__link">Collection</a></li>
      <li><a href="/designers" class="nav__link">Designers</a></li>
      <li><a href="/about" class="nav__link">About</a></li>
      <li><a href="/contact" class="nav__link">Contact</a></li>
    </ul>

    <div class="nav__actions">
      <a href="/search" class="nav__action" aria-label="Search">
        <svg width="20" height="20"><use href="#icon-search"></use></svg>
      </a>
      <a href="/cart" class="nav__action" aria-label="Cart" data-count="3">
        <svg width="20" height="20"><use href="#icon-cart"></use></svg>
      </a>
    </div>

    <button class="nav__toggle" aria-label="Toggle menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>
```

**2. Transparent Navigation (Hero Overlay)**

```html
<nav class="nav nav--transparent nav--sticky">
  <!-- Same structure as above -->
</nav>

<!-- Becomes opaque on scroll via JavaScript -->
```

**3. Sidebar Navigation**

```html
<aside class="nav-sidebar">
  <nav aria-label="Sidebar navigation">
    <ul class="nav-sidebar__menu">
      <li class="nav-sidebar__item">
        <a href="#overview" class="nav-sidebar__link nav-sidebar__link--active">
          Overview
        </a>
      </li>
      <li class="nav-sidebar__item">
        <a href="#features" class="nav-sidebar__link"> Features </a>
      </li>
      <li class="nav-sidebar__item">
        <a href="#specifications" class="nav-sidebar__link"> Specifications </a>
      </li>
    </ul>
  </nav>
</aside>
```

### Accessibility

**Requirements:**

- ✅ Use semantic `<nav>` element
- ✅ Provide `aria-label` or `aria-labelledby` for multiple navs
- ✅ Mark current page with `aria-current="page"`
- ✅ Keyboard accessible (Tab, Enter, Escape)
- ✅ Mobile menu accessible (proper ARIA attributes)
- ✅ Focus visible on all links
- ✅ Skip link for keyboard users

**Complete Accessible Navigation:**

```html
<!-- Skip link for keyboard users -->
<a href="#main-content" class="skip-link"> Skip to main content </a>

<nav class="nav" aria-label="Primary navigation">
  <div class="nav__container">
    <a href="/" class="nav__logo">MCM Design</a>

    <button
      class="nav__toggle"
      aria-label="Toggle menu"
      aria-expanded="false"
      aria-controls="nav-menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav__menu" id="nav-menu">
      <li>
        <a href="/" class="nav__link" aria-current="page"> Home </a>
      </li>
      <li>
        <a href="/collection" class="nav__link"> Collection </a>
      </li>
      <li>
        <a href="/about" class="nav__link"> About </a>
      </li>
    </ul>
  </div>
</nav>

<main id="main-content" tabindex="-1">
  <!-- Page content -->
</main>

<style>
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-primary);
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    z-index: 10000;
  }

  .skip-link:focus {
    top: 0;
  }
</style>
```

### Best Practices

**✅ DO:**

- Limit primary nav to 5-7 items
- Use clear, descriptive labels
- Indicate current page visually
- Make touch targets min 44x44px
- Show hover/focus states clearly
- Provide mobile menu for small screens
- Include search prominently

**❌ DON'T:**

- Create mega-menus with dozens of items
- Use vague labels ("Services", "Resources")
- Remove focus indicators
- Make navigation too small on mobile
- Hide navigation completely on scroll
- Forget about keyboard accessibility

### Related Components

- **Dropdown Menu** - Secondary navigation
- **Breadcrumb** - Hierarchy navigation
- **Pagination** - Sequential navigation
- **Tabs** - Section navigation

---

## Deliverables Summary

✅ **Component Documentation Created:**

**Button Component:**

- Complete overview and usage guidelines
- 5 variant categories (color, size, shape, width, state)
- 17 total variations documented
- Props table with 8 configurable options
- 4 complete usage examples (forms, hero, groups, loading)
- Accessibility requirements (7 points)
- ARIA attribute examples
- Best practices (10 do's and don'ts)
- Button label guidelines
- 4 related components

**Card Component:**

- Complete overview and usage guidelines
- Visual anatomy diagram
- 7 variant styles (sharp, soft, very-soft, minimal, elevated, tinted, dark)
- Complete card structure with all optional elements
- 3 detailed usage examples (product grid, article cards, feature cards)
- Accessibility requirements (6 points)
- Clickable card patterns (2 methods with code)
- Best practices (10 do's and don'ts)
- Content guidelines with examples
- 4 related components

**Navigation Component:**

- Complete overview and usage guidelines
- 3 variant types (sticky, transparent, sidebar)
- Accessibility requirements (7 points)
- Complete accessible navigation example with skip link
- ARIA attributes for mobile menu
- Best practices (7 do's and don'ts)
- 4 related components

**Total Documentation:**

- 3 major components fully documented
- 27 variant options across components
- 8 complete code examples
- 20+ accessibility requirements
- 27+ best practice guidelines
- 12 related component connections

---

**Session Complete:** Day 8 Afternoon  
**Next Session:** Day 8 Evening - Design System Guidelines & Principles
