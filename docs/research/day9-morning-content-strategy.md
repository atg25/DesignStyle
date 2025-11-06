# MCM Content Strategy & Information Architecture

**Day 9 Morning Session:** Content Planning & Structure  
**Created:** November 5, 2025  
**Purpose:** Define content strategy where "the website IS the lesson"

---

## Part 1: Content Philosophy

### Teaching Through Design

**Core Concept:** Every page demonstrates the principles it teaches.

**Example Flow:**

1. User lands on "Color Theory" page
2. Page itself uses MCM color principles
3. Content explains what they're experiencing
4. Interactive examples let them experiment
5. They learn by seeing AND doing

**The Meta-Learning Experience:**

```
┌─────────────────────────────────────┐
│  Page about Typography              │
│                                     │
│  • Uses perfect type hierarchy     │ ← User sees it
│  • Shows the type scale being used │ ← User understands it
│  • Lets user adjust type sizes    │ ← User experiments
│  • Explains why it works          │ ← User learns principles
└─────────────────────────────────────┘
```

---

## Part 2: Site Structure (Information Architecture)

### Primary Navigation Structure

```
MCM Design Hub
├── Home
├── Learn
│   ├── History & Origins
│   ├── Design Principles
│   ├── Color Theory
│   ├── Typography
│   ├── Materials & Textures
│   └── Iconic Designers
├── Explore
│   ├── Furniture Gallery
│   ├── Architecture
│   ├── Graphic Design
│   ├── Product Design
│   └── Interior Spaces
├── Practice
│   ├── Design Lab (Interactive Tools)
│   ├── Pattern Library
│   ├── Color Palette Generator
│   └── Typography Playground
├── Resources
│   ├── Design System Docs
│   ├── Code Examples
│   ├── Books & References
│   └── Museums & Collections
└── About
    ├── About This Project
    ├── Credits & Sources
    └── Contact
```

### Content Hierarchy by Section

**1. LEARN Section (Educational Foundation)**

**History & Origins**

- Timeline: 1945-1970
- Geographic spread (US, Scandinavia, Europe)
- Key movements (Bauhaus influence, organic modernism)
- Cultural context (post-war optimism, atomic age)

**Design Principles**

- Form follows function (interactive examples)
- Clean lines & geometric forms
- Honest materials
- Bold color usage
- Integration of indoor/outdoor
- Asymmetric balance

**Color Theory**

- MCM color palette (oranges, teals, yellows, reds)
- Color psychology in MCM
- Creating palettes (interactive tool)
- Contrast and harmony
- Period-accurate colors vs. modern adaptations

**Typography**

- Popular MCM typefaces (Helvetica, Futura, Gill Sans)
- Type hierarchy principles
- Letter spacing and tracking
- Typography in signage and logos
- Digital adaptations

**Materials & Textures**

- Wood species (walnut, teak, oak)
- Metals (brass, chrome, steel)
- Fabrics (wool, linen, leather)
- Plastics (molded plywood, fiberglass)
- Glass applications

**Iconic Designers**

- Charles & Ray Eames
- George Nelson
- Eero Saarinen
- Florence Knoll
- Arne Jacobsen
- Hans Wegner

**2. EXPLORE Section (Visual Gallery)**

**Furniture Gallery**

- Chairs (lounges, dining, office)
- Tables (coffee, dining, side)
- Storage (credenzas, shelving, cabinets)
- Lighting (floor, table, pendant)
- Each with: photos, designer, year, materials, dimensions

**Architecture**

- Case Study Houses
- Farnsworth House
- Fallingwater
- Eichler homes
- Commercial buildings

**Graphic Design**

- Poster art (Girard patterns)
- Book covers
- Magazine layouts
- Corporate identities
- Signage systems

**Product Design**

- Electronics (radios, turntables)
- Kitchenware
- Appliances
- Toys and games
- Clocks

**Interior Spaces**

- Living rooms
- Dining rooms
- Offices
- Outdoor spaces
- Commercial interiors

**3. PRACTICE Section (Interactive Learning)**

**Design Lab**

- Build your own color palette
- Arrange furniture layouts
- Create typography compositions
- Mix materials and textures
- Save and share creations

**Pattern Library**

- Geometric patterns
- Organic shapes
- Atomic age graphics
- Textile designs
- Downloadable SVGs

**Color Palette Generator**

- Generate MCM-inspired palettes
- Test accessibility (contrast ratios)
- Export as CSS, JSON, or image
- Save favorites

**Typography Playground**

- Test MCM typefaces
- Adjust size, spacing, weight
- See hierarchy in action
- Copy CSS code

**4. RESOURCES Section (Reference)**

**Design System Docs**

- Complete component library
- Design tokens
- Usage guidelines
- Code examples
- Accessibility standards

**Code Examples**

- HTML/CSS snippets
- Eleventy templates
- JavaScript interactions
- Copy-paste ready

**Books & References**

- Essential reading list
- Online archives
- Video documentaries
- Museum collections

**Museums & Collections**

- Major museum collections
- Virtual tours
- Auction archives
- Contemporary manufacturers

---

## Part 3: Content Types & Templates

### Template System

**Learning Article Template:**

```markdown
# [Topic Title]

## Overview (What you'll learn)

- Key concept 1
- Key concept 2
- Key concept 3

## Visual Example

[Large image demonstrating concept]
[Caption explaining what makes this a good example]

## The Principle

[Deep explanation of the concept]
[Why it matters in MCM design]

## See It In Action

[Interactive demo or code example]
[User can modify parameters]

## Common Applications

[Where you'll see this used]

- Application 1 (with example)
- Application 2 (with example)
- Application 3 (with example)

## Try It Yourself

[Exercise or challenge]
[Template to start from]

## Related Topics

- Link to related article 1
- Link to related article 2
- Link to related article 3

## Further Reading

- Book/article reference 1
- Book/article reference 2
```

**Furniture Item Template:**

```markdown
# [Furniture Name]

[Hero image - large, high quality]

## Quick Facts

- **Designer:** Charles & Ray Eames
- **Year:** 1956
- **Manufacturer:** Herman Miller
- **Materials:** Molded plywood, leather, aluminum
- **Dimensions:** 32"H x 32"W x 33"D

## The Story

[Historical context]
[Design process]
[Cultural impact]

## Design Features

- **Feature 1:** Explanation with detail
- **Feature 2:** Explanation with detail
- **Feature 3:** Explanation with detail

## Materials & Construction

[Detailed material breakdown]
[Manufacturing process]
[Why these choices matter]

## Gallery

[Multiple images showing different angles]
[Detail shots]
[In-context photos]

## Variations

[Different versions/colors available]
[Similar pieces by same designer]

## Cultural Impact

[How it influenced design]
[Where you've seen it]
[Why it's still relevant]

## See Also

- Similar piece by different designer
- Different piece by same designer
- Related architectural project
```

**Designer Profile Template:**

```markdown
# [Designer Name]

[Portrait photo]

## Overview

[1-2 paragraph bio]
[Key accomplishments]
[Signature style]

## Timeline

- **1920:** Born in [location]
- **1945:** [Major event]
- **1956:** [Famous piece created]
- **1978:** [Later achievement]

## Philosophy

> "Design is not just what it looks like and feels like.
> Design is how it works."
> — Charles Eames

[Explanation of design approach]
[Core principles]

## Iconic Works

### [Piece Name] (Year)

[Image]
[Description and significance]

### [Piece Name] (Year)

[Image]
[Description and significance]

## Collaborations

[Partners and teams]
[Notable projects together]

## Legacy

[Influence on later designers]
[Pieces still in production]
[Museums and collections]

## Explore Their Work

[Links to furniture gallery]
[Links to architecture projects]
[External resources]
```

**Interactive Tool Template:**

```html
<!-- Color Palette Generator Example -->
<div class="tool-container">
  <div class="tool-header">
    <h1>MCM Color Palette Generator</h1>
    <p class="lead">Create authentic mid-century modern color palettes</p>
  </div>

  <div class="tool-interface">
    <!-- Controls -->
    <aside class="tool-controls">
      <div class="control-group">
        <label>Base Color</label>
        <input type="color" id="baseColor" value="#FF6B35" />
      </div>

      <div class="control-group">
        <label>Palette Style</label>
        <select id="paletteStyle">
          <option>Energetic (Orange + Yellow)</option>
          <option>Calm (Teal + Seafoam)</option>
          <option>Sophisticated (Walnut + Brass)</option>
        </select>
      </div>

      <div class="control-group">
        <label>Number of Colors</label>
        <input type="range" min="3" max="8" value="5" />
      </div>

      <button class="btn btn--primary">Generate Palette</button>
    </aside>

    <!-- Preview -->
    <div class="tool-preview">
      <div class="palette-swatches">
        <!-- Generated color swatches -->
      </div>

      <div class="palette-usage">
        <h3>Usage Example</h3>
        <!-- Live preview using generated colors -->
      </div>

      <div class="palette-accessibility">
        <h3>Accessibility Check</h3>
        <!-- Contrast ratios for all pairings -->
      </div>
    </div>
  </div>

  <div class="tool-export">
    <h3>Export</h3>
    <div class="export-options">
      <button class="btn btn--secondary">Copy CSS</button>
      <button class="btn btn--secondary">Download JSON</button>
      <button class="btn btn--secondary">Save Image</button>
    </div>
  </div>

  <div class="tool-info">
    <h3>About This Tool</h3>
    <p>
      This generator creates color palettes inspired by authentic mid-century
      modern design. All palettes are tested for WCAG AA accessibility
      compliance.
    </p>
  </div>
</div>
```

---

## Part 4: Content Progression (Learning Path)

### Beginner Journey

**Level 1: Introduction (30 minutes)**

1. **Start:** Homepage → "What is MCM Design?"
2. **Learn:** History & Origins → Timeline
3. **Explore:** View 5 iconic furniture pieces
4. **Practice:** Try color palette generator
5. **Result:** Understand basic MCM principles

**Level 2: Foundation (2 hours)**

1. **Learn:** All 6 design principles (detailed)
2. **Explore:** Furniture gallery (20+ pieces)
3. **Learn:** Color theory in depth
4. **Practice:** Create 3 color palettes
5. **Learn:** Typography fundamentals
6. **Practice:** Typography playground
7. **Result:** Can identify MCM design and explain why

**Level 3: Deep Dive (5 hours)**

1. **Learn:** All iconic designers (6 profiles)
2. **Explore:** Architecture examples (10+ buildings)
3. **Learn:** Materials & manufacturing
4. **Explore:** Product design gallery
5. **Practice:** Design lab challenges
6. **Learn:** Graphic patterns
7. **Result:** Can apply MCM principles to own work

**Level 4: Mastery (Ongoing)**

1. **Use:** Design system in projects
2. **Create:** Own MCM-inspired designs
3. **Share:** Contributions to community
4. **Teach:** Help others learn
5. **Result:** MCM design expert

### Content Relationships (Cross-linking)

```
Color Theory Page
├── Links to:
│   ├── Design Principles (bold color usage)
│   ├── Furniture Gallery (filtered by color)
│   ├── Designers (who used specific palettes)
│   ├── Color Palette Generator (practice tool)
│   └── Materials (natural wood colors)
│
├── Related Articles:
│   ├── "Orange: The MCM Signature Color"
│   ├── "Teal and Turquoise in 1960s Design"
│   └── "Creating Authentic MCM Palettes"
│
└── Next Steps:
    ├── Try the Color Palette Generator
    ├── Explore furniture by color
    └── Learn about graphic patterns
```

---

## Part 5: Content Delivery Strategy

### Progressive Disclosure

**Don't overwhelm users with everything at once.**

**Example: Eames Lounge Chair Page**

**Initial View (Above Fold):**

```
┌─────────────────────────────────────┐
│  [Large hero image of chair]        │
│                                     │
│  Eames Lounge Chair                │
│  Charles & Ray Eames, 1956         │
│                                     │
│  [Read More] [View Gallery]        │
└─────────────────────────────────────┘
```

**Scroll → More Details:**

```
┌─────────────────────────────────────┐
│  Quick Facts                        │
│  • Materials: Leather, plywood     │
│  • Size: 32" x 32" x 33"          │
│  [Expand for full specs]           │
└─────────────────────────────────────┘
```

**Scroll → Deep Content:**

```
┌─────────────────────────────────────┐
│  Design Story                       │
│  [Full historical context]         │
│                                     │
│  [Toggle: Simple | Detailed]       │
└─────────────────────────────────────┘
```

### Content Formats

**1. Text Articles**

- 800-1200 words
- Clear hierarchy (h2, h3, h4)
- Short paragraphs (3-4 sentences)
- Bullet points for lists
- Pull quotes for emphasis
- Reading time estimate

**2. Image Galleries**

- High-quality photos (min 1200px wide)
- Multiple angles
- Detail shots
- Context/lifestyle photos
- Lazy loading
- Lightbox for full-size view

**3. Interactive Demos**

- Sliders to adjust parameters
- Real-time preview
- Copy code feature
- Reset button
- Save/share functionality

**4. Video Content**

- Short (2-5 minutes)
- Auto-generated captions
- Pause/play controls
- No autoplay
- Transcripts available

**5. Infographics**

- Timeline visualizations
- Comparison charts
- Process diagrams
- Downloadable as PDF

**6. Code Examples**

- Syntax highlighted
- Copy button
- Live preview
- Editable (CodePen embed)
- Multiple language tabs (HTML/CSS/JS)

---

## Part 6: Search & Navigation Strategy

### Search Implementation

**Multi-faceted Search:**

```html
<form class="search-form" role="search">
  <input
    type="search"
    placeholder="Search furniture, designers, principles..."
    class="search-input"
    aria-label="Search site content"
  />

  <!-- Filters (shown after initial search) -->
  <div class="search-filters">
    <label>
      <input type="checkbox" name="type" value="furniture" />
      Furniture
    </label>
    <label>
      <input type="checkbox" name="type" value="designer" />
      Designers
    </label>
    <label>
      <input type="checkbox" name="type" value="article" />
      Articles
    </label>

    <label>
      Year Range:
      <input type="range" min="1945" max="1970" step="1" />
    </label>

    <label>
      Designer:
      <select>
        <option>All Designers</option>
        <option>Charles & Ray Eames</option>
        <option>George Nelson</option>
        <!-- etc -->
      </select>
    </label>
  </div>

  <button type="submit" class="btn btn--primary">Search</button>
</form>
```

**Search Results Page:**

```html
<div class="search-results">
  <div class="search-summary">
    <h1>Search Results for "Eames Chair"</h1>
    <p>Found 24 results in 0.03 seconds</p>

    <div class="result-filters">
      <button class="filter-tag active">All (24)</button>
      <button class="filter-tag">Furniture (8)</button>
      <button class="filter-tag">Articles (12)</button>
      <button class="filter-tag">Designers (4)</button>
    </div>
  </div>

  <div class="results-grid">
    <!-- Result Card -->
    <article class="result-card">
      <img src="eames-lounge.jpg" alt="Eames Lounge Chair" />
      <span class="result-type">Furniture</span>
      <h3>Eames Lounge Chair</h3>
      <p>
        Icon of mid-century modern design combining molded plywood with premium
        leather...
      </p>
      <a href="/furniture/eames-lounge-chair" class="result-link">
        View Details
      </a>
    </article>

    <!-- More result cards... -->
  </div>

  <div class="pagination">
    <button class="btn btn--ghost" disabled>Previous</button>
    <span>Page 1 of 3</span>
    <button class="btn btn--ghost">Next</button>
  </div>
</div>
```

### Breadcrumb Navigation

```html
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/learn">Learn</a></li>
    <li><a href="/learn/designers">Designers</a></li>
    <li aria-current="page">Charles & Ray Eames</li>
  </ol>
</nav>

<style>
  .breadcrumb ol {
    display: flex;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    font-size: var(--text-sm);
  }

  .breadcrumb li:not(:last-child)::after {
    content: "/";
    margin-left: 0.5rem;
    color: var(--color-text-tertiary);
  }

  .breadcrumb a {
    color: var(--color-text-secondary);
    text-decoration: none;
  }

  .breadcrumb a:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }

  .breadcrumb [aria-current="page"] {
    color: var(--color-text-primary);
    font-weight: var(--font-semibold);
  }
</style>
```

### Related Content Recommendations

```html
<!-- At bottom of article -->
<section class="related-content">
  <h2>You Might Also Like</h2>

  <div class="grid grid--3 gap-8">
    <!-- Algorithmic recommendations based on: -->
    <!-- - Same designer -->
    <!-- - Same time period -->
    <!-- - Similar style -->
    <!-- - User's browsing history -->

    <article class="card card--minimal">
      <div class="card__image">
        <img src="related-1.jpg" alt="Nelson Platform Bench" />
      </div>
      <span class="card__category">Furniture</span>
      <h3 class="card__title">Nelson Platform Bench</h3>
      <p class="card__description">
        Versatile seating or table with distinctive slatted design.
      </p>
      <a href="/furniture/nelson-bench" class="card__action"> Learn More </a>
    </article>

    <!-- 2 more cards... -->
  </div>
</section>
```

---

## Part 7: Content Creation Workflow

### Eleventy Data Structure

**Furniture Collection:**

```javascript
// _data/furniture.js
module.exports = [
  {
    id: "eames-lounge-chair",
    name: "Eames Lounge Chair",
    designer: {
      name: "Charles & Ray Eames",
      slug: "charles-ray-eames",
    },
    year: 1956,
    manufacturer: "Herman Miller",
    materials: ["Molded plywood", "Leather", "Aluminum"],
    dimensions: {
      height: 32,
      width: 32,
      depth: 33,
      unit: "inches",
    },
    colors: ["Black", "Walnut", "White Ash"],
    category: "Seating",
    subcategory: "Lounge Chairs",
    tags: ["iconic", "luxury", "comfort", "plywood"],
    images: {
      hero: "/images/furniture/eames-lounge/hero.jpg",
      gallery: [
        "/images/furniture/eames-lounge/front.jpg",
        "/images/furniture/eames-lounge/side.jpg",
        "/images/furniture/eames-lounge/detail.jpg",
        "/images/furniture/eames-lounge/context.jpg",
      ],
    },
    description:
      "Icon of mid-century modern design combining molded plywood with premium leather for ultimate comfort.",
    story: `
      Designed in 1956, the Eames Lounge Chair represents the 
      culmination of Charles and Ray Eames' experimentation with 
      molded plywood techniques developed during World War II.
    `,
    features: [
      {
        title: "Molded Plywood Shell",
        description: "Multi-layered veneer shaped using heat and pressure.",
      },
      {
        title: "Premium Leather Upholstery",
        description: "Top-grain leather with down-filled cushions.",
      },
      {
        title: "Five-Star Aluminum Base",
        description: "Polished or powder-coated aluminum swivel base.",
      },
    ],
    inProduction: true,
    currentPrice: 5995,
    relatedPieces: [
      "eames-ottoman",
      "nelson-platform-bench",
      "saarinen-womb-chair",
    ],
  },
  // More furniture items...
];
```

**Eleventy Template:**

```njk
{# furniture-item.njk #}
---
layout: layouts/base.njk
pagination:
  data: furniture
  size: 1
  alias: item
permalink: "/furniture/{{ item.id }}/"
---

<article class="furniture-detail">
  {# Breadcrumb #}
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol>
      <li><a href="/">Home</a></li>
      <li><a href="/explore">Explore</a></li>
      <li><a href="/explore/furniture">Furniture</a></li>
      <li aria-current="page">{{ item.name }}</li>
    </ol>
  </nav>

  {# Hero Section #}
  <div class="hero-section">
    <div class="hero-image">
      {% image item.images.hero, item.name, "(min-width: 1024px) 50vw, 100vw" %}
    </div>

    <div class="hero-content">
      <h1 class="display">{{ item.name }}</h1>
      <p class="lead">
        {{ item.designer.name }}, {{ item.year }}
      </p>
      <div class="quick-facts">
        <dl>
          <dt>Manufacturer</dt>
          <dd>{{ item.manufacturer }}</dd>

          <dt>Materials</dt>
          <dd>{{ item.materials | join(", ") }}</dd>

          <dt>Dimensions</dt>
          <dd>{{ item.dimensions.height }}" H × {{ item.dimensions.width }}" W × {{ item.dimensions.depth }}" D</dd>
        </dl>
      </div>
    </div>
  </div>

  {# Story Section #}
  <section class="content-section">
    <h2>The Story</h2>
    <div class="content-prose">
      {{ item.story | markdownify | safe }}
    </div>
  </section>

  {# Features #}
  <section class="features-section">
    <h2>Design Features</h2>
    <div class="grid grid--3 gap-8">
      {% for feature in item.features %}
        <div class="feature-card">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      {% endfor %}
    </div>
  </section>

  {# Gallery #}
  <section class="gallery-section">
    <h2>Gallery</h2>
    <div class="gallery-grid">
      {% for image in item.images.gallery %}
        <button class="gallery-item" onclick="openLightbox('{{ image }}')">
          {% image image, item.name, "400px" %}
        </button>
      {% endfor %}
    </div>
  </section>

  {# Related Content #}
  <section class="related-section">
    <h2>See Also</h2>
    <div class="grid grid--3 gap-8">
      {% for relatedId in item.relatedPieces %}
        {% set related = furniture | findById(relatedId) %}
        {% include "components/furniture-card.njk" with { item: related } %}
      {% endfor %}
    </div>
  </section>
</article>
```

---

## Deliverables Summary

✅ **Content Philosophy Established:**

- "Website IS the lesson" meta-learning approach
- Teaching through design demonstration
- Learning by seeing AND doing
- Interactive experience model

✅ **Complete Information Architecture:**

- 5 primary sections (Learn, Explore, Practice, Resources, About)
- 25+ content pages defined
- Clear hierarchy and organization
- Learning path from beginner to mastery

✅ **Content Types & Templates:**

- Learning article template (11 sections)
- Furniture item template (10 sections)
- Designer profile template (8 sections)
- Interactive tool template (complete HTML structure)
- 4 distinct content formats

✅ **Learning Progression:**

- 4 levels defined (Introduction → Foundation → Deep Dive → Mastery)
- Time estimates for each level
- Clear learning outcomes
- Progressive complexity

✅ **Content Relationships:**

- Cross-linking strategy
- Related articles system
- Next steps guidance
- 360-degree content connections

✅ **Content Delivery Strategy:**

- Progressive disclosure patterns
- 6 content formats (text, images, interactive, video, infographics, code)
- Each format with specifications
- User-friendly presentation

✅ **Navigation & Discovery:**

- Multi-faceted search system
- Filter implementation
- Breadcrumb navigation with code
- Related content recommendations
- Algorithmic relationship logic

✅ **Technical Implementation:**

- Complete Eleventy data structure
- Furniture collection schema (20+ fields)
- Template with pagination
- Component includes
- Data relationships

**Total Content Deliverables:**

- 5 major site sections
- 25+ page types defined
- 4 complete templates
- 4 learning levels
- 6 content formats
- Full data schema

---

**Session Complete:** Day 9 Morning  
**Next Session:** Day 9 Afternoon - Content Production & Writing Guidelines
