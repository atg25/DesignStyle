# Mid-Century Modern Materials & Textures in Web Design

**Day 5 Afternoon Session:** Material Palettes & Texture Implementation  
**Created:** November 5, 2025  
**Purpose:** Translate physical material textures into authentic digital patterns

---

## Part 1: The Material Palette

### Essential MCM Materials

**The Core Materials:**

1. **Teak Wood** (#B87333 - #D2691E)

   - Rich, warm orange-brown
   - Prominent grain pattern
   - Oily finish (subtle sheen)
   - Ages to silver-gray if untreated

2. **Walnut Wood** (#5C4033 - #3E2723)

   - Dark chocolate brown
   - Straight grain with occasional figure
   - Satin finish
   - Premium material choice

3. **Rosewood** (#65000B - #8B4513)

   - Deep reddish-brown
   - Striking grain patterns
   - High contrast figure
   - Exotic, expensive

4. **Birch Plywood** (#F5E6D3 - #E8D4B8)

   - Light cream color
   - Visible plywood edge bands
   - Molded forms (Aalto, Eames)
   - Affordable yet elegant

5. **Chrome Metal** (#C0C0C0 - #E8E8E8)

   - Bright silver shine
   - Reflective surface
   - Cool, modern feeling
   - Often used for legs/frames

6. **Brass Accents** (#B5A642 - #D4AF37)

   - Warm gold tone
   - Develops patina over time
   - Used sparingly (pulls, feet, details)
   - Adds warmth to cool materials

7. **Leather Upholstery** (#8B4513 - #654321)

   - Cognac, tan, black colors
   - Develops patina with age
   - Tufted or smooth
   - Premium seating surface

8. **Fabric Upholstery**

   - Wool bouclé (#F5F5DC, #E8E8D0)
   - Naugahyde (#Multiple colors)
   - Alexander Girard patterns
   - Bold colors common

9. **Formica Surfaces** (#Multiple colors)

   - Laminate countertops/tables
   - Boomerang patterns
   - Atomic-age graphics
   - Easy-clean surfaces

10. **Terrazzo Flooring** (#E8E8E8 base + color chips)
    - Concrete with embedded marble chips
    - Speckled appearance
    - Durable, seamless
    - Mid-century institutional favorite

---

## Part 2: Wood Grain Textures (Digital)

### Creating Authentic Wood Effects

**CSS Wood Grain Patterns:**

```css
/* Teak Wood Effect */
.teak-surface {
  background: 
    /* Grain pattern (subtle lines) */ repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px
    ),
    /* Base teak color with variation */ linear-gradient(180deg, #d2691e 0%, #b87333
          50%, #cd853f 100%);

  /* Oily sheen (subtle highlight) */
  position: relative;
}

.teak-surface::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.05) 100%
  );
  pointer-events: none;
}

/* Walnut Wood Effect */
.walnut-surface {
  background: 
    /* Darker grain (more prominent) */ repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 3px,
      rgba(0, 0, 0, 0.1) 3px,
      rgba(0, 0, 0, 0.1) 6px
    ),
    /* Rich walnut base */ linear-gradient(180deg, #5c4033 0%, #3e2723 50%, #4e342e
          100%);

  /* Satin finish (less shiny than teak) */
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05);
}

/* Rosewood Effect (High Contrast) */
.rosewood-surface {
  background: 
    /* Striking figuring (irregular stripes) */ repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 10px,
      rgba(0, 0, 0, 0.2) 10px,
      rgba(0, 0, 0, 0.2) 15px,
      transparent 15px,
      transparent 30px,
      rgba(0, 0, 0, 0.3) 30px,
      rgba(0, 0, 0, 0.3) 32px
    ),
    /* Deep reddish base */ linear-gradient(135deg, #65000b 0%, #8b4513 50%, #a0522d
          100%);
}

/* Birch Plywood (With Edge Bands) */
.birch-plywood {
  background: linear-gradient(180deg, #f5e6d3 0%, #e8d4b8 100%);
  border: 6px solid transparent;
  border-image: 
    /* Plywood edge showing layers */ repeating-linear-gradient(
      180deg,
      #d2b48c 0px,
      #d2b48c 1px,
      #8b7355 1px,
      #8b7355 2px,
      #d2b48c 2px,
      #d2b48c 3px,
      #8b7355 3px,
      #8b7355 4px
    ) 1;
}
```

**Usage in Components:**

```html
<!-- Teak Card -->
<article class="card teak-surface">
  <header class="card__header">
    <h2>Teak Inspiration</h2>
  </header>
  <div class="card__content">
    <p>Content with warm, organic wood texture background...</p>
  </div>
</article>

<!-- Walnut Section -->
<section class="hero walnut-surface">
  <div class="hero__content">
    <h1 style="color: #F5DEB3;">Rich & Sophisticated</h1>
    <p style="color: #E8D4B8;">Dark walnut creates drama...</p>
  </div>
</section>

<!-- Birch Plywood Panel -->
<aside class="sidebar birch-plywood">
  <nav>
    <!-- Light, affordable elegance -->
  </nav>
</aside>
```

---

## Part 3: Metal Textures

### Chrome, Brass, and Brushed Metal

**Chrome Effect (High Shine):**

```css
.chrome-surface {
  background: 
    /* Reflective highlights */ linear-gradient(
    135deg,
    #ffffff 0%,
    #e8e8e8 25%,
    #c0c0c0 50%,
    #e8e8e8 75%,
    #ffffff 100%
  );

  /* Mirror-like reflection */
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(0, 0, 0, 0.2),
    0 2px 4px rgba(0, 0, 0, 0.1);

  /* Smooth, polished */
  border-radius: 4px;
}

/* Chrome Border/Frame */
.chrome-frame {
  border: 3px solid transparent;
  border-image: linear-gradient(180deg, #ffffff 0%, #c0c0c0 50%, #e8e8e8 100%) 1;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
}
```

**Brass Effect (Warm Gold):**

```css
.brass-surface {
  background: 
    /* Warm metallic gradient */ linear-gradient(
    135deg,
    #d4af37 0%,
    #b5a642 25%,
    #c5b358 50%,
    #b5a642 75%,
    #d4af37 100%
  );

  /* Subtle patina effect */
  position: relative;
}

.brass-surface::after {
  content: "";
  position: absolute;
  inset: 0;
  background: 
    /* Random patina spots */ radial-gradient(
      circle at 20% 30%,
      rgba(101, 67, 33, 0.1) 0%,
      transparent 50%
    ), radial-gradient(circle at 80% 70%, rgba(139, 90, 43, 0.1) 0%, transparent
        50%);
  pointer-events: none;
}

/* Brass Accent (Pull, Handle, Foot) */
.brass-accent {
  background: linear-gradient(135deg, #d4af37 0%, #b5a642 100%);
  width: 40px;
  height: 10px;
  border-radius: 5px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

**Brushed Aluminum Effect:**

```css
.brushed-aluminum {
  background: 
    /* Horizontal brush lines */ repeating-linear-gradient(
      90deg,
      #b8b8b8 0px,
      #c8c8c8 1px,
      #b8b8b8 2px
    ),
    /* Base aluminum color */ linear-gradient(180deg, #d8d8d8 0%, #a8a8a8 100%);

  /* Matte finish (not shiny like chrome) */
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
}
```

**Metal Button Examples:**

```html
<style>
  .btn-chrome {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-chrome {
    background: linear-gradient(135deg, #ffffff 0%, #c0c0c0 100%);
    color: #333;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .btn-chrome:hover {
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }

  .btn-brass {
    background: linear-gradient(135deg, #d4af37 0%, #b5a642 100%);
    color: white;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .btn-brass:hover {
    background: linear-gradient(135deg, #e5c047 0%, #c5b652 100%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 4px 8px rgba(0, 0, 0, 0.25);
  }
</style>

<button class="btn-chrome">Chrome Button</button>
<button class="btn-brass">Brass Accent</button>
```

---

## Part 4: Fabric & Leather Textures

### Upholstery Materials

**Leather Texture:**

```css
.leather-surface {
  background: 
    /* Subtle pebbling/grain */ radial-gradient(
      circle at 25% 25%,
      rgba(0, 0, 0, 0.02) 1px,
      transparent 1px
    ), radial-gradient(
      circle at 75% 75%,
      rgba(0, 0, 0, 0.02) 1px,
      transparent 1px
    ),
    /* Base leather color (cognac) */ linear-gradient(135deg, #a0522d 0%, #8b4513
          50%, #654321 100%);
  background-size: 4px 4px, 4px 4px, 100% 100%;

  /* Leather sheen (worn areas shinier) */
  position: relative;
}

.leather-surface::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 60%
  );
  pointer-events: none;
}

/* Tufted Leather Effect */
.leather-tufted {
  background: radial-gradient(circle at 50% 50%, #654321 0%, #8b4513 100%);
  box-shadow: 
    /* Button depression */ inset 0 0 10px rgba(0, 0, 0, 0.3), inset 0 2px 4px
      rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;
}

.leather-tufted::after {
  /* Center button */
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background: #8b7355;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
```

**Wool Bouclé Texture:**

```css
.boucle-surface {
  background: 
    /* Nubby texture (small bumps) */ radial-gradient(
      circle at 30% 30%,
      rgba(232, 232, 208, 1) 1px,
      transparent 1px
    ), radial-gradient(
      circle at 70% 70%,
      rgba(240, 240, 220, 1) 1px,
      transparent 1px
    ), radial-gradient(
      circle at 50% 80%,
      rgba(228, 228, 198, 1) 1px,
      transparent 1px
    ), /* Base cream color */ #f5f5dc;
  background-size: 8px 8px, 8px 8px, 8px 8px, 100%;

  /* Soft, matte finish */
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
```

**Naugahyde (Vinyl) - Smooth:**

```css
.vinyl-surface {
  /* Naugahyde came in ANY color */
  background: var(--color-vinyl, #ff6b35);

  /* Smooth, slightly glossy */
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);

  /* Very subtle texture (almost smooth) */
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0,
    transparent 100px,
    rgba(255, 255, 255, 0.02) 100px,
    rgba(255, 255, 255, 0.02) 101px
  );
}

/* Color variations */
.vinyl-orange {
  --color-vinyl: #ff6b35;
}
.vinyl-teal {
  --color-vinyl: #1fb7c8;
}
.vinyl-mustard {
  --color-vinyl: #ffbf00;
}
.vinyl-avocado {
  --color-vinyl: #568203;
}
```

**Complete Upholstered Element:**

```html
<style>
  .chair-cushion {
    padding: 3rem;
    border-radius: 2rem;
    position: relative;
  }

  /* Leather option */
  .chair-cushion--leather {
    background: radial-gradient(
        circle at 25% 25%,
        rgba(0, 0, 0, 0.02) 1px,
        transparent 1px
      ), linear-gradient(135deg, #a0522d 0%, #654321 100%);
    background-size: 4px 4px, 100% 100%;
    color: white;
  }

  /* Bouclé option */
  .chair-cushion--boucle {
    background: radial-gradient(
        circle at 30% 30%,
        rgba(232, 232, 208, 1) 1px,
        transparent 1px
      ), radial-gradient(
        circle at 70% 70%,
        rgba(240, 240, 220, 1) 1px,
        transparent 1px
      ), #f5f5dc;
    background-size: 8px 8px, 8px 8px, 100%;
    color: #3e2723;
  }

  /* Vinyl option */
  .chair-cushion--vinyl {
    background: #ff6b35;
    color: white;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
</style>

<div class="chair-cushion chair-cushion--leather">
  <h3>Leather Comfort</h3>
  <p>Ages beautifully with patina...</p>
</div>

<div class="chair-cushion chair-cushion--boucle">
  <h3>Bouclé Softness</h3>
  <p>Cozy, textured warmth...</p>
</div>

<div class="chair-cushion chair-cushion--vinyl">
  <h3>Naugahyde Practicality</h3>
  <p>Easy-clean modern surface...</p>
</div>
```

---

## Part 5: Hard Surface Materials

### Formica, Terrazzo, Linoleum

**Formica Laminate:**

```css
.formica-surface {
  /* Solid color or pattern */
  background: var(--formica-color, #fafafa);

  /* High gloss finish */
  position: relative;
  overflow: hidden;
}

.formica-surface::after {
  content: "";
  position: absolute;
  inset: 0;
  background: 
    /* Glossy highlight */ linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4) 0%,
    transparent 30%,
    transparent 70%,
    rgba(255, 255, 255, 0.2) 100%
  );
  pointer-events: none;
}

/* Boomerang pattern Formica */
.formica-boomerang {
  background: 
    /* Boomerang shapes */ url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M 10 50 Q 30 30 50 50 Q 30 70 10 50" fill="%23FF6B35" opacity="0.3"/><path d="M 60 20 Q 80 10 90 30 Q 80 50 60 40" fill="%231FB7C8" opacity="0.3"/></svg>'),
    #fafafa;
  background-size: 200px 200px;
}
```

**Terrazzo Effect:**

```css
.terrazzo-surface {
  /* Base concrete color */
  background: #e8e8e8;
  position: relative;
  overflow: hidden;
}

.terrazzo-surface::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: 
    /* Marble chips (random colored shapes) */ radial-gradient(
      circle at 15% 20%,
      #c1272d 0%,
      #c1272d 3px,
      transparent 3px
    ), radial-gradient(
      circle at 45% 15%,
      #5c4033 0%,
      #5c4033 4px,
      transparent 4px
    ), radial-gradient(
      circle at 75% 30%,
      #ffffff 0%,
      #ffffff 5px,
      transparent 5px
    ), radial-gradient(
      circle at 25% 60%,
      #1fb7c8 0%,
      #1fb7c8 3px,
      transparent 3px
    ), radial-gradient(
      circle at 60% 55%,
      #ff6b35 0%,
      #ff6b35 4px,
      transparent 4px
    ), radial-gradient(
      circle at 85% 70%,
      #2c2416 0%,
      #2c2416 2px,
      transparent 2px
    ), radial-gradient(
      circle at 35% 85%,
      #ffbf00 0%,
      #ffbf00 3px,
      transparent 3px
    ), radial-gradient(
      circle at 70% 90%,
      #654321 0%,
      #654321 4px,
      transparent 4px
    ), radial-gradient(circle at 50% 45%, #fafafa 0%, #fafafa 5px, transparent
        5px);
  pointer-events: none;
}

/* Polished finish */
.terrazzo-surface::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 50%
  );
  pointer-events: none;
}
```

**Linoleum (Matte Finish):**

```css
.linoleum-surface {
  background: var(--linoleum-color, #ffbf00);

  /* Matte, not glossy */
  box-shadow: none;

  /* Very subtle texture (compressed cork backing) */
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0,
    transparent 200px,
    rgba(0, 0, 0, 0.01) 200px,
    rgba(0, 0, 0, 0.01) 201px
  );
}

/* Classic linoleum colors */
.linoleum-mustard {
  --linoleum-color: #ffbf00;
}
.linoleum-avocado {
  --linoleum-color: #568203;
}
.linoleum-harvest-gold {
  --linoleum-color: #da9100;
}
.linoleum-burnt-orange {
  --linoleum-color: #cc5500;
}
```

**Complete Countertop Component:**

```html
<style>
  .countertop {
    padding: 2rem;
    border-radius: 0; /* Countertops are flat */
    margin: 2rem 0;
  }

  .countertop__surface {
    padding: 3rem;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Formica countertop */
  .countertop--formica .countertop__surface {
    background: #fafafa;
    position: relative;
  }

  .countertop--formica .countertop__surface::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.4) 0%,
      transparent 50%
    );
    pointer-events: none;
  }

  /* Terrazzo countertop */
  .countertop--terrazzo .countertop__surface {
    background: #e8e8e8;
    position: relative;
  }

  .countertop--terrazzo .countertop__surface::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
        circle at 15% 20%,
        #c1272d 0%,
        #c1272d 3px,
        transparent 3px
      ), radial-gradient(
        circle at 45% 15%,
        #5c4033 0%,
        #5c4033 4px,
        transparent 4px
      ), radial-gradient(
        circle at 75% 30%,
        #ffffff 0%,
        #ffffff 5px,
        transparent 5px
      ), radial-gradient(
        circle at 25% 60%,
        #1fb7c8 0%,
        #1fb7c8 3px,
        transparent 3px
      ), radial-gradient(circle at 60% 55%, #ff6b35 0%, #ff6b35 4px, transparent
          4px);
  }
</style>

<div class="countertop countertop--formica">
  <div class="countertop__surface">
    <h3>Formica: Easy Clean, High Gloss</h3>
  </div>
</div>

<div class="countertop countertop--terrazzo">
  <div class="countertop__surface">
    <h3>Terrazzo: Durable, Artistic</h3>
  </div>
</div>
```

---

## Part 6: Glass Materials

### Transparency & Reflection

**Clear Glass:**

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  /* Subtle reflection */
  position: relative;
}

.glass-panel::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    transparent 100%
  );
  pointer-events: none;
}
```

**Frosted/Etched Glass:**

```css
.frosted-glass {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px) saturate(120%);
  border: 1px solid rgba(255, 255, 255, 0.3);

  /* More opaque than clear */
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

**Colored Glass (Blenko, Empoli):**

```css
.colored-glass {
  background: var(--glass-color, #1fb7c8);
  opacity: 0.6;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%; /* Often organic shapes */

  /* Translucent, glowing effect */
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.3), 0 4px 12px rgba(31, 183, 200, 0.4);
}

/* Color variants */
.colored-glass--teal {
  --glass-color: #1fb7c8;
}
.colored-glass--amber {
  --glass-color: #ffbf00;
}
.colored-glass--tangerine {
  --glass-color: #ff6b35;
}
.colored-glass--amethyst {
  --glass-color: #9966cc;
}
```

**Complete Glass Component:**

```html
<style>
  .glass-container {
    padding: 4rem 2rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .glass-vase {
    aspect-ratio: 3 / 4;
    border-radius: 40% 40% 20% 20%; /* Organic shape */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
  }

  .glass-vase--clear {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: #2c2416;
  }

  .glass-vase--frosted {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: #2c2416;
  }

  .glass-vase--teal {
    background: #1fb7c8;
    opacity: 0.7;
    color: white;
    box-shadow: 0 4px 12px rgba(31, 183, 200, 0.4);
  }

  .glass-vase--amber {
    background: #ffbf00;
    opacity: 0.7;
    color: #2c2416;
    box-shadow: 0 4px 12px rgba(255, 191, 0, 0.4);
  }
</style>

<div class="glass-container">
  <div class="glass-vase glass-vase--clear">
    <p><strong>Clear Glass</strong><br />Transparent elegance</p>
  </div>
  <div class="glass-vase glass-vase--frosted">
    <p><strong>Frosted Glass</strong><br />Diffused light</p>
  </div>
  <div class="glass-vase glass-vase--teal">
    <p><strong>Teal Glass</strong><br />Blenko-inspired</p>
  </div>
  <div class="glass-vase glass-vase--amber">
    <p><strong>Amber Glass</strong><br />Warm glow</p>
  </div>
</div>
```

---

## Part 7: Complete Material System

### All Materials in One Design System

```css
:root {
  /* Wood Materials */
  --material-teak: linear-gradient(
    180deg,
    #d2691e 0%,
    #b87333 50%,
    #cd853f 100%
  );
  --material-walnut: linear-gradient(
    180deg,
    #5c4033 0%,
    #3e2723 50%,
    #4e342e 100%
  );
  --material-rosewood: linear-gradient(
    135deg,
    #65000b 0%,
    #8b4513 50%,
    #a0522d 100%
  );
  --material-birch: linear-gradient(180deg, #f5e6d3 0%, #e8d4b8 100%);

  /* Metal Materials */
  --material-chrome: linear-gradient(
    135deg,
    #ffffff 0%,
    #c0c0c0 50%,
    #e8e8e8 100%
  );
  --material-brass: linear-gradient(135deg, #d4af37 0%, #b5a642 100%);
  --material-aluminum: linear-gradient(180deg, #d8d8d8 0%, #a8a8a8 100%);

  /* Upholstery Materials */
  --material-leather-cognac: linear-gradient(135deg, #a0522d 0%, #654321 100%);
  --material-leather-black: linear-gradient(135deg, #3e3e3e 0%, #1c1c1c 100%);
  --material-boucle-cream: #f5f5dc;
  --material-vinyl-orange: #ff6b35;
  --material-vinyl-teal: #1fb7c8;

  /* Hard Surfaces */
  --material-formica-white: #fafafa;
  --material-terrazzo-gray: #e8e8e8;
  --material-linoleum-mustard: #ffbf00;

  /* Glass */
  --material-glass-clear: rgba(255, 255, 255, 0.1);
  --material-glass-frosted: rgba(255, 255, 255, 0.4);
  --material-glass-teal: rgba(31, 183, 200, 0.7);
  --material-glass-amber: rgba(255, 191, 0, 0.7);
}

/* Material Classes */
.material-teak {
  background: var(--material-teak);
}
.material-walnut {
  background: var(--material-walnut);
  color: #f5deb3;
}
.material-rosewood {
  background: var(--material-rosewood);
  color: #f5deb3;
}
.material-birch {
  background: var(--material-birch);
}

.material-chrome {
  background: var(--material-chrome);
}
.material-brass {
  background: var(--material-brass);
}
.material-aluminum {
  background: var(--material-aluminum);
}

.material-leather-cognac {
  background: var(--material-leather-cognac);
  color: white;
}
.material-leather-black {
  background: var(--material-leather-black);
  color: white;
}
.material-boucle {
  background: var(--material-boucle-cream);
}
.material-vinyl-orange {
  background: var(--material-vinyl-orange);
  color: white;
}
.material-vinyl-teal {
  background: var(--material-vinyl-teal);
  color: white;
}

.material-formica {
  background: var(--material-formica-white);
}
.material-terrazzo {
  background: var(--material-terrazzo-gray);
}
.material-linoleum {
  background: var(--material-linoleum-mustard);
}

.material-glass-clear {
  background: var(--material-glass-clear);
  backdrop-filter: blur(10px);
}
.material-glass-frosted {
  background: var(--material-glass-frosted);
  backdrop-filter: blur(20px);
}
.material-glass-teal {
  background: var(--material-glass-teal);
}
.material-glass-amber {
  background: var(--material-glass-amber);
}
```

**Complete Room Component Using All Materials:**

```html
<style>
  .mcm-room {
    display: grid;
    grid-template-areas:
      "floor floor floor"
      "wall-wood furniture wall-glass"
      "floor floor floor";
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 4fr 1fr;
    min-height: 600px;
    gap: 0;
  }

  .mcm-room__floor {
    grid-area: floor;
    background: var(--material-terrazzo-gray);
    position: relative;
  }

  .mcm-room__floor::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
        circle at 15% 20%,
        #c1272d 0%,
        #c1272d 3px,
        transparent 3px
      ), radial-gradient(
        circle at 45% 15%,
        #5c4033 0%,
        #5c4033 4px,
        transparent 4px
      ), radial-gradient(circle at 75% 30%, #ffffff 0%, #ffffff 5px, transparent
          5px);
  }

  .mcm-room__wall-wood {
    grid-area: wall-wood;
    background: var(--material-walnut);
    padding: 2rem;
  }

  .mcm-room__furniture {
    grid-area: furniture;
    background: var(--material-boucle-cream);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .mcm-room__wall-glass {
    grid-area: wall-glass;
    background: var(--material-glass-frosted);
    backdrop-filter: blur(20px);
    border-left: 2px solid rgba(255, 255, 255, 0.3);
  }

  .mcm-room__accent {
    background: var(--material-brass);
    width: 60px;
    height: 12px;
    border-radius: 6px;
  }
</style>

<div class="mcm-room">
  <div class="mcm-room__floor"></div>
  <div class="mcm-room__wall-wood"></div>
  <div class="mcm-room__furniture">
    <h2>Material Harmony</h2>
    <p>Bouclé cushion on birch frame</p>
    <div class="mcm-room__accent"></div>
    <p><small>Brass hardware accent</small></p>
  </div>
  <div class="mcm-room__wall-glass"></div>
</div>
```

---

## Deliverables Summary

✅ **Material Catalog Created:**

1. Woods: Teak, Walnut, Rosewood, Birch (4 types)
2. Metals: Chrome, Brass, Brushed Aluminum (3 types)
3. Upholstery: Leather, Bouclé, Vinyl (3 types)
4. Hard Surfaces: Formica, Terrazzo, Linoleum (3 types)
5. Glass: Clear, Frosted, Colored (4 variants)

**Total Materials:** 17 distinct materials with CSS implementations

✅ **Texture Techniques:**

- Wood grain patterns (linear gradients + repeating lines)
- Metal reflections (multi-layer gradients + highlights)
- Fabric textures (radial gradients for nubs/bumps)
- Hard surface patterns (custom chip patterns for terrazzo)
- Glass transparency (backdrop-filter + rgba)

✅ **Complete Components:**

- Wood surface cards
- Metal buttons (chrome, brass)
- Upholstered cushions (3 materials)
- Countertop sections (Formica, terrazzo)
- Glass vase showcase
- Complete MCM room layout

✅ **Design System:**

- CSS custom properties for all materials
- Reusable material classes
- Composable texture patterns
- Authentic physical material translations

**Code Examples:** 25+ material implementations  
**Complete Systems:** 6 full component examples  
**CSS Variables:** 17 material definitions

---

**Session Complete:** Day 5 Afternoon  
**Next Session:** Day 5 Evening - Production Methods & Performance Optimization
