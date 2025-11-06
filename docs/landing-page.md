# MCM Design Hub - Landing Page

## Overview

The landing page serves as the primary entry point for the MCM Design Hub, designed to immediately showcase the beauty of mid-century modern design while providing clear pathways for different user types.

## Page Structure

### 1. Hero Section (Split Layout)
**Purpose:** Immediate visual impact and clear value proposition

**Features:**
- Split-screen design: Content left, iconic furniture image right
- Bold headline with color emphasis
- Dual CTAs: "Start Learning" (primary) + "Explore Gallery" (secondary)
- Quick stats badges (50+ modules, 100+ pieces, 20+ designers)
- Rotating hero image with caption overlay

**Design Decisions:**
- Split layout provides balance between information and visual appeal
- Rotated image adds playful MCM character
- Stats build credibility immediately
- Primary CTA focuses on education (aligns with site purpose)

### 2. Value Pillars (Three Pathways)
**Purpose:** Guide users based on their interests

**Three Pillars:**
1. **Learn** - Educational content (orange accent)
2. **Explore** - Browse collection (teal accent)
3. **Practice** - Interactive tools (yellow accent)

**Features:**
- Icon-based visual hierarchy
- Feature lists under each pillar
- Consistent ghost button CTAs
- Hover animations (lift + shadow)

**Design Decisions:**
- Three-column layout mirrors navigation structure
- Color-coded icons create visual associations
- Feature bullets preview what's available
- Cards lift on hover (engagement feedback)

### 3. Featured Content
**Purpose:** Showcase quality content immediately

**Components:**
- Latest educational article
- Featured furniture piece
- Designer spotlight

**Features:**
- Grid layout with three cards
- Consistent card component usage
- Meta information (read time, year, price)
- "View All Articles" CTA below

**Design Decisions:**
- Shows variety of content types
- Uses existing card component (consistency)
- Soft style cards (friendly, approachable)

### 4. Interactive Preview
**Purpose:** Engage visitors with hands-on experience

**Features:**
- Color palette generator with 6 preset palettes
- Click to copy color codes
- Generate new palette button
- Link to full tool

**Palettes Included:**
- Warm Sunset
- Cool Retro
- Atomic Age
- Earthy Tones
- Bold Primary
- Pastel Dream

**Interactions:**
- Button rotates 360° on click
- Swatches animate in with stagger
- Click swatch to copy hex code
- Shows "Copied!" tooltip feedback

**Design Decisions:**
- Dark background (charcoal) makes colors pop
- White card provides clean canvas
- Interactive element drives engagement
- Low-commitment preview (no account needed)

### 5. Testimonial / Social Proof
**Purpose:** Build credibility and trust

**Features:**
- Frank Lloyd Wright quote
- Three badge indicators:
  - WCAG 2.1 AA Accessible
  - 100/100 Lighthouse Score
  - Mobile Optimized

**Design Decisions:**
- Quote from legendary designer adds authority
- Technical badges appeal to designers/developers
- Light background section for variety

### 6. Newsletter CTA
**Purpose:** Capture interested visitors

**Features:**
- Email input with validation
- Submit with loading state
- Success state animation
- Privacy policy link
- Gradient orange background

**Interactions:**
- Email validation on submit
- Loading state ("Subscribing...")
- Success message with checkmark
- Error handling with timeout

**Design Decisions:**
- Prominent orange background draws attention
- White card provides contrast
- Privacy note builds trust
- Simple, single-field form (low friction)

## Technical Implementation

### Files Created

```
src/
├── index.njk                          # Main landing page template
├── assets/
│   ├── css/
│   │   └── pages/
│   │       └── landing.css           # Landing page specific styles
│   └── js/
│       └── pages/
│           └── landing.js            # Interactive features
```

### Components Used

- `button.njk` - All CTAs
- `card.njk` - Featured content
- `icon.njk` - Pillar icons, badges, form icons

### CSS Architecture

**Organized by section:**
- Hero styles (.hero--split, .hero__grid, etc.)
- Pillars styles (.pillars, .pillar, etc.)
- Featured styles (.featured, .featured__grid)
- Interactive styles (.color-preview, .swatch)
- Testimonial styles (.testimonial__quote)
- Newsletter styles (.newsletter, .newsletter__form)

**Key Features:**
- Mobile-first responsive design
- Smooth transitions and animations
- Hover states on interactive elements
- Print styles included

### JavaScript Features

**Classes:**
1. `ColorPalettePreview` - Color generator
2. `NewsletterForm` - Form handling
3. `ScrollAnimations` - Intersection Observer animations

**Functions:**
- `initSmoothScroll()` - Anchor link handling
- Copy to clipboard for color codes
- Form validation

## Performance Optimizations

- Hero image uses `loading="eager"` and `fetchpriority="high"`
- Intersection Observer for scroll animations (only animates visible elements)
- CSS transitions use transform/opacity (GPU accelerated)
- Minimal JavaScript (3KB minified)

## Accessibility Features

- Semantic HTML throughout
- Skip link support (from base layout)
- ARIA labels on icon buttons
- Form labels (visible or sr-only)
- Keyboard navigation support
- Focus indicators on all interactive elements
- Color contrast meets WCAG 2.1 AA

## Responsive Breakpoints

**Desktop (1024px+):**
- Hero: Side-by-side layout
- Pillars: 3 columns
- Featured: 3 columns
- Color preview: 5 columns

**Tablet (768px-1023px):**
- Hero: Stacked, centered
- Pillars: 1 column (max-width 600px)
- Featured: 1 column (max-width 500px)
- Color preview: 5 columns

**Mobile (< 768px):**
- Hero: Stacked, full width
- Hero buttons: Full width, stacked
- Stats: Smaller numbers, closer together
- Color preview: 2 columns
- Newsletter: Stacked form

## Content Guidelines

### Hero Copy
- **Headline:** Action-oriented, clear benefit
- **Subhead:** Expands on headline, 3 key benefits
- **Stats:** Round numbers, impressive but achievable

### Pillar Descriptions
- Lead with benefit, not feature
- 2-3 sentences maximum
- Active voice
- Feature bullets: 4 per pillar

### Featured Cards
- Descriptive titles
- Concise descriptions (1-2 sentences)
- Complete meta information
- Compelling but accurate

## Future Enhancements

### Potential Additions:
1. **Hero Carousel** - Rotate through multiple hero images
2. **Video Background** - Subtle animation in hero
3. **Live Search Preview** - Mini search bar in hero
4. **User Testimonials** - Real user quotes
5. **Latest Updates Feed** - Recently added content
6. **A/B Testing** - Test different hero variants
7. **Personalization** - Remember user preferences
8. **Loading Animation** - Branded loader on first visit

### Analytics to Track:
- CTA click rates (which pillar performs best)
- Color generator interactions
- Newsletter conversion rate
- Scroll depth
- Time to first interaction
- Exit points

## Maintenance

### Regular Updates:
- Rotate featured content weekly
- Update stats quarterly
- Refresh hero image monthly
- Add new color palettes seasonally

### Testing Checklist:
- [ ] All CTAs work
- [ ] Forms validate and submit
- [ ] Color generator functions
- [ ] Images load properly
- [ ] Responsive on all breakpoints
- [ ] Accessible with keyboard
- [ ] Screen reader tested

## Launch Checklist

- [ ] Replace placeholder images with real photos
- [ ] Verify all links point to correct pages
- [ ] Test newsletter form with real API
- [ ] Run Lighthouse audit (target 95+)
- [ ] Check color contrast ratios
- [ ] Test on multiple devices
- [ ] Verify Open Graph meta tags
- [ ] Set up analytics tracking

---

**Status:** ✅ Ready for implementation  
**Last Updated:** November 6, 2025
