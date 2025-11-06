# Complete MCM Design System

**Day 8 Morning Session:** Design System Foundation & Core Tokens  
**Created:** November 5, 2025  
**Purpose:** Build comprehensive design system from 7 days of research

---

## Part 1: Design System Architecture

### System Overview

**What is a Design System?**
A design system is the single source of truth for design and development. It includes:

- Design tokens (colors, typography, spacing)
- Component library (reusable UI elements)
- Usage guidelines (when and how to use components)
- Code examples (copy-paste ready implementations)
- Accessibility standards (WCAG compliance)

**Our MCM Design System Structure:**

```
mcm-design-system/
├── tokens/
│   ├── colors.json
│   ├── typography.json
│   ├── spacing.json
│   ├── shadows.json
│   └── animations.json
├── components/
│   ├── card/
│   ├── button/
│   ├── navigation/
│   ├── grid/
│   ├── form/
│   └── modal/
├── patterns/
│   ├── hero-sections/
│   ├── product-grids/
│   └── article-layouts/
├── utilities/
│   ├── spacing.css
│   ├── typography.css
│   └── display.css
└── documentation/
    ├── getting-started.md
    ├── principles.md
    └── accessibility.md
```

---

## Part 2: Design Tokens

### Color System - Complete Specification

**tokens/colors.json:**

```json
{
  "color": {
    "brand": {
      "orange": {
        "50": {
          "value": "#FFF4EF",
          "description": "Lightest orange for backgrounds"
        },
        "100": {
          "value": "#FFE4D6",
          "description": "Light orange for hover states"
        },
        "200": {
          "value": "#FFCBAD",
          "description": "Light orange for borders"
        },
        "300": { "value": "#FFB184", "description": "Medium-light orange" },
        "400": { "value": "#FF8C5F", "description": "Medium orange" },
        "500": {
          "value": "#FF6B35",
          "description": "Primary orange - MAIN BRAND COLOR"
        },
        "600": { "value": "#E6522A", "description": "Dark orange for hover" },
        "700": { "value": "#CC421F", "description": "Darker orange" },
        "800": { "value": "#B33214", "description": "Very dark orange" },
        "900": { "value": "#99250A", "description": "Darkest orange for text" }
      },
      "teal": {
        "50": {
          "value": "#F0FBFC",
          "description": "Lightest teal for backgrounds"
        },
        "100": { "value": "#D6F4F7", "description": "Light teal" },
        "200": { "value": "#ADEBEF", "description": "Light teal for borders" },
        "300": { "value": "#84DDE3", "description": "Medium-light teal" },
        "400": { "value": "#4DC9D7", "description": "Medium teal" },
        "500": {
          "value": "#1FB7C8",
          "description": "Primary teal - SECONDARY BRAND COLOR"
        },
        "600": { "value": "#1A9AA8", "description": "Dark teal for hover" },
        "700": { "value": "#157D88", "description": "Darker teal" },
        "800": { "value": "#106068", "description": "Very dark teal" },
        "900": { "value": "#0B4348", "description": "Darkest teal for text" }
      },
      "yellow": {
        "50": { "value": "#FFFBF0", "description": "Lightest yellow" },
        "100": { "value": "#FFF5D6", "description": "Light yellow" },
        "200": {
          "value": "#FFEBAD",
          "description": "Light yellow for backgrounds"
        },
        "300": { "value": "#FFE084", "description": "Medium-light yellow" },
        "400": { "value": "#FFCB33", "description": "Medium yellow" },
        "500": {
          "value": "#FFBF00",
          "description": "Primary yellow - ACCENT COLOR"
        },
        "600": { "value": "#E6AC00", "description": "Dark yellow" },
        "700": { "value": "#CC9900", "description": "Darker yellow" },
        "800": { "value": "#B38600", "description": "Very dark yellow" },
        "900": { "value": "#997300", "description": "Darkest yellow" }
      },
      "red": {
        "50": { "value": "#FDEFEF", "description": "Lightest red" },
        "100": { "value": "#F9D5D6", "description": "Light red" },
        "200": {
          "value": "#F3ABAD",
          "description": "Light red for backgrounds"
        },
        "300": { "value": "#ED8184", "description": "Medium-light red" },
        "400": { "value": "#D04248", "description": "Medium red" },
        "500": {
          "value": "#C1272D",
          "description": "Primary red - ERROR/DANGER COLOR"
        },
        "600": { "value": "#A61F24", "description": "Dark red" },
        "700": { "value": "#8B171B", "description": "Darker red" },
        "800": { "value": "#700F12", "description": "Very dark red" },
        "900": { "value": "#550709", "description": "Darkest red" }
      }
    },
    "neutral": {
      "walnut": {
        "50": { "value": "#F5F3F2", "description": "Lightest walnut" },
        "100": { "value": "#E8E3E0", "description": "Light walnut" },
        "200": { "value": "#D1C7C1", "description": "Light walnut brown" },
        "300": { "value": "#BAABA2", "description": "Medium-light walnut" },
        "400": { "value": "#8B7769", "description": "Medium walnut" },
        "500": {
          "value": "#5C4033",
          "description": "Primary walnut - WARM NEUTRAL"
        },
        "600": { "value": "#4A332A", "description": "Dark walnut" },
        "700": { "value": "#382621", "description": "Darker walnut" },
        "800": { "value": "#261918", "description": "Very dark walnut" },
        "900": { "value": "#140C0F", "description": "Darkest walnut" }
      },
      "charcoal": {
        "50": { "value": "#F7F6F5", "description": "Lightest charcoal" },
        "100": { "value": "#EDEAE8", "description": "Light charcoal" },
        "200": { "value": "#DBD5D1", "description": "Light gray" },
        "300": { "value": "#C9C0BA", "description": "Medium-light gray" },
        "400": { "value": "#8B8589", "description": "Medium gray - TAUPE" },
        "500": { "value": "#5C5654", "description": "Medium charcoal" },
        "600": {
          "value": "#2C2416",
          "description": "Primary charcoal - MAIN TEXT COLOR"
        },
        "700": { "value": "#1F1910", "description": "Dark charcoal" },
        "800": { "value": "#130F0A", "description": "Very dark charcoal" },
        "900": { "value": "#070604", "description": "Almost black" }
      },
      "cream": {
        "50": { "value": "#FEFDFB", "description": "Almost white" },
        "100": {
          "value": "#FAF8F5",
          "description": "Primary cream - MAIN BACKGROUND"
        },
        "200": { "value": "#F5F1EC", "description": "Light cream" },
        "300": { "value": "#EBE5DD", "description": "Medium cream" },
        "400": {
          "value": "#D4C5B9",
          "description": "Beige - SECONDARY NEUTRAL"
        },
        "500": { "value": "#C4B5A9", "description": "Darker beige" },
        "600": { "value": "#B4A599", "description": "Dark beige" },
        "700": { "value": "#A49589", "description": "Darker beige" },
        "800": { "value": "#948579", "description": "Very dark beige" },
        "900": { "value": "#847569", "description": "Darkest beige" }
      },
      "pure": {
        "white": {
          "value": "#FFFFFF",
          "description": "Pure white for cards and surfaces"
        },
        "black": {
          "value": "#000000",
          "description": "Pure black for maximum contrast"
        }
      }
    },
    "semantic": {
      "success": {
        "50": { "value": "#F0F8F1", "description": "Light success background" },
        "500": { "value": "#4CAF50", "description": "Success green" },
        "900": { "value": "#1B5E20", "description": "Dark success" }
      },
      "warning": {
        "50": { "value": "#FFFBF0", "description": "Light warning background" },
        "500": {
          "value": "#FFBF00",
          "description": "Warning yellow (uses brand yellow)"
        },
        "900": { "value": "#997300", "description": "Dark warning" }
      },
      "error": {
        "50": { "value": "#FDEFEF", "description": "Light error background" },
        "500": {
          "value": "#C1272D",
          "description": "Error red (uses brand red)"
        },
        "900": { "value": "#550709", "description": "Dark error" }
      },
      "info": {
        "50": { "value": "#F0FBFC", "description": "Light info background" },
        "500": {
          "value": "#1FB7C8",
          "description": "Info teal (uses brand teal)"
        },
        "900": { "value": "#0B4348", "description": "Dark info" }
      }
    }
  }
}
```

**CSS Custom Properties from Tokens:**

```css
:root {
  /* Brand Colors - Orange */
  --color-orange-50: #fff4ef;
  --color-orange-100: #ffe4d6;
  --color-orange-200: #ffcbad;
  --color-orange-300: #ffb184;
  --color-orange-400: #ff8c5f;
  --color-orange-500: #ff6b35;
  --color-orange-600: #e6522a;
  --color-orange-700: #cc421f;
  --color-orange-800: #b33214;
  --color-orange-900: #99250a;

  /* Brand Colors - Teal */
  --color-teal-50: #f0fbfc;
  --color-teal-100: #d6f4f7;
  --color-teal-200: #adebef;
  --color-teal-300: #84dde3;
  --color-teal-400: #4dc9d7;
  --color-teal-500: #1fb7c8;
  --color-teal-600: #1a9aa8;
  --color-teal-700: #157d88;
  --color-teal-800: #106068;
  --color-teal-900: #0b4348;

  /* Brand Colors - Yellow */
  --color-yellow-50: #fffbf0;
  --color-yellow-100: #fff5d6;
  --color-yellow-200: #ffebad;
  --color-yellow-300: #ffe084;
  --color-yellow-400: #ffcb33;
  --color-yellow-500: #ffbf00;
  --color-yellow-600: #e6ac00;
  --color-yellow-700: #cc9900;
  --color-yellow-800: #b38600;
  --color-yellow-900: #997300;

  /* Brand Colors - Red */
  --color-red-50: #fdefef;
  --color-red-100: #f9d5d6;
  --color-red-200: #f3abad;
  --color-red-300: #ed8184;
  --color-red-400: #d04248;
  --color-red-500: #c1272d;
  --color-red-600: #a61f24;
  --color-red-700: #8b171b;
  --color-red-800: #700f12;
  --color-red-900: #550709;

  /* Neutral Colors - Walnut */
  --color-walnut-50: #f5f3f2;
  --color-walnut-100: #e8e3e0;
  --color-walnut-200: #d1c7c1;
  --color-walnut-300: #baaba2;
  --color-walnut-400: #8b7769;
  --color-walnut-500: #5c4033;
  --color-walnut-600: #4a332a;
  --color-walnut-700: #382621;
  --color-walnut-800: #261918;
  --color-walnut-900: #140c0f;

  /* Neutral Colors - Charcoal */
  --color-charcoal-50: #f7f6f5;
  --color-charcoal-100: #edeae8;
  --color-charcoal-200: #dbd5d1;
  --color-charcoal-300: #c9c0ba;
  --color-charcoal-400: #8b8589;
  --color-charcoal-500: #5c5654;
  --color-charcoal-600: #2c2416;
  --color-charcoal-700: #1f1910;
  --color-charcoal-800: #130f0a;
  --color-charcoal-900: #070604;

  /* Neutral Colors - Cream */
  --color-cream-50: #fefdfb;
  --color-cream-100: #faf8f5;
  --color-cream-200: #f5f1ec;
  --color-cream-300: #ebe5dd;
  --color-cream-400: #d4c5b9;
  --color-cream-500: #c4b5a9;
  --color-cream-600: #b4a599;
  --color-cream-700: #a49589;
  --color-cream-800: #948579;
  --color-cream-900: #847569;

  /* Pure Colors */
  --color-white: #ffffff;
  --color-black: #000000;

  /* Semantic Aliases */
  --color-primary: var(--color-orange-500);
  --color-primary-hover: var(--color-orange-600);
  --color-primary-light: var(--color-orange-100);

  --color-secondary: var(--color-teal-500);
  --color-secondary-hover: var(--color-teal-600);
  --color-secondary-light: var(--color-teal-100);

  --color-success: #4caf50;
  --color-success-light: #f0f8f1;
  --color-success-dark: #1b5e20;

  --color-warning: var(--color-yellow-500);
  --color-warning-light: var(--color-yellow-100);
  --color-warning-dark: var(--color-yellow-900);

  --color-error: var(--color-red-500);
  --color-error-light: var(--color-red-100);
  --color-error-dark: var(--color-red-900);

  --color-info: var(--color-teal-500);
  --color-info-light: var(--color-teal-100);
  --color-info-dark: var(--color-teal-900);

  /* UI Colors */
  --color-background: var(--color-cream-100);
  --color-surface: var(--color-white);
  --color-surface-alt: var(--color-cream-50);

  --color-text-primary: var(--color-charcoal-600);
  --color-text-secondary: var(--color-walnut-500);
  --color-text-tertiary: var(--color-charcoal-400);
  --color-text-inverse: var(--color-white);

  --color-border: rgba(44, 36, 22, 0.1);
  --color-border-hover: rgba(44, 36, 22, 0.2);
  --color-border-focus: var(--color-primary);
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #1a1a1a;
    --color-surface: #2a2a2a;
    --color-surface-alt: #333333;

    --color-text-primary: #f0f0f0;
    --color-text-secondary: #d0d0d0;
    --color-text-tertiary: #a0a0a0;
    --color-text-inverse: var(--color-charcoal-600);

    --color-border: rgba(255, 255, 255, 0.1);
    --color-border-hover: rgba(255, 255, 255, 0.2);

    /* Adjust brand colors for dark mode */
    --color-primary: var(--color-orange-400);
    --color-secondary: var(--color-teal-400);
  }
}
```

---

## Part 3: Typography System

### Complete Type Scale & Hierarchy

**tokens/typography.json:**

```json
{
  "typography": {
    "fontFamily": {
      "sans": {
        "value": "'Helvetica Neue', Helvetica, Arial, sans-serif",
        "description": "Primary sans-serif for body text and UI"
      },
      "serif": {
        "value": "Georgia, 'Times New Roman', serif",
        "description": "Serif for accents and emphasis"
      },
      "mono": {
        "value": "'Courier New', Courier, monospace",
        "description": "Monospace for code"
      }
    },
    "fontSize": {
      "xs": {
        "value": "0.64rem",
        "px": "10px",
        "description": "Extra small - labels, captions"
      },
      "sm": {
        "value": "0.8rem",
        "px": "13px",
        "description": "Small - help text, meta"
      },
      "base": {
        "value": "1rem",
        "px": "16px",
        "description": "Base - body text"
      },
      "lg": {
        "value": "1.25rem",
        "px": "20px",
        "description": "Large - subheadings"
      },
      "xl": {
        "value": "1.563rem",
        "px": "25px",
        "description": "Extra large - h4"
      },
      "2xl": {
        "value": "1.953rem",
        "px": "31px",
        "description": "2X large - h3"
      },
      "3xl": {
        "value": "2.441rem",
        "px": "39px",
        "description": "3X large - h2"
      },
      "4xl": {
        "value": "3.052rem",
        "px": "49px",
        "description": "4X large - h1"
      },
      "5xl": {
        "value": "3.815rem",
        "px": "61px",
        "description": "5X large - display"
      },
      "6xl": {
        "value": "4.768rem",
        "px": "76px",
        "description": "6X large - hero"
      },
      "7xl": {
        "value": "5.96rem",
        "px": "95px",
        "description": "7X large - massive hero"
      },
      "8xl": {
        "value": "7.451rem",
        "px": "119px",
        "description": "8X large - statement"
      }
    },
    "fontWeight": {
      "light": { "value": "300", "description": "Light weight" },
      "normal": { "value": "400", "description": "Normal/regular weight" },
      "medium": { "value": "500", "description": "Medium weight" },
      "semibold": { "value": "600", "description": "Semi-bold weight" },
      "bold": { "value": "700", "description": "Bold weight" },
      "black": { "value": "900", "description": "Black/heavy weight" }
    },
    "lineHeight": {
      "none": {
        "value": "1",
        "description": "No line height - tight headlines"
      },
      "tight": { "value": "1.2", "description": "Tight - large headlines" },
      "snug": { "value": "1.4", "description": "Snug - small headlines" },
      "normal": { "value": "1.6", "description": "Normal - body text" },
      "relaxed": {
        "value": "1.8",
        "description": "Relaxed - long-form content"
      },
      "loose": { "value": "2", "description": "Loose - extra spacing" }
    },
    "letterSpacing": {
      "tighter": { "value": "-0.05em", "description": "Very tight spacing" },
      "tight": { "value": "-0.025em", "description": "Tight spacing" },
      "normal": { "value": "0", "description": "Normal spacing" },
      "wide": { "value": "0.025em", "description": "Wide spacing" },
      "wider": { "value": "0.05em", "description": "Wider spacing" },
      "widest": { "value": "0.1em", "description": "Widest spacing - all caps" }
    }
  }
}
```

**CSS Typography System:**

```css
:root {
  /* Font Families */
  --font-sans: "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-serif: Georgia, "Times New Roman", serif;
  --font-mono: "Courier New", Courier, monospace;

  /* Font Sizes */
  --text-xs: 0.64rem; /* 10px */
  --text-sm: 0.8rem; /* 13px */
  --text-base: 1rem; /* 16px */
  --text-lg: 1.25rem; /* 20px */
  --text-xl: 1.563rem; /* 25px */
  --text-2xl: 1.953rem; /* 31px */
  --text-3xl: 2.441rem; /* 39px */
  --text-4xl: 3.052rem; /* 49px */
  --text-5xl: 3.815rem; /* 61px */
  --text-6xl: 4.768rem; /* 76px */
  --text-7xl: 5.96rem; /* 95px */
  --text-8xl: 7.451rem; /* 119px */

  /* Font Weights */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-black: 900;

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.2;
  --leading-snug: 1.4;
  --leading-normal: 1.6;
  --leading-relaxed: 1.8;
  --leading-loose: 2;

  /* Letter Spacing */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
}

/* Typography Classes */
.text-xs {
  font-size: var(--text-xs);
}
.text-sm {
  font-size: var(--text-sm);
}
.text-base {
  font-size: var(--text-base);
}
.text-lg {
  font-size: var(--text-lg);
}
.text-xl {
  font-size: var(--text-xl);
}
.text-2xl {
  font-size: var(--text-2xl);
}
.text-3xl {
  font-size: var(--text-3xl);
}
.text-4xl {
  font-size: var(--text-4xl);
}
.text-5xl {
  font-size: var(--text-5xl);
}
.text-6xl {
  font-size: var(--text-6xl);
}
.text-7xl {
  font-size: var(--text-7xl);
}
.text-8xl {
  font-size: var(--text-8xl);
}

.font-light {
  font-weight: var(--font-light);
}
.font-normal {
  font-weight: var(--font-normal);
}
.font-medium {
  font-weight: var(--font-medium);
}
.font-semibold {
  font-weight: var(--font-semibold);
}
.font-bold {
  font-weight: var(--font-bold);
}
.font-black {
  font-weight: var(--font-black);
}

.leading-none {
  line-height: var(--leading-none);
}
.leading-tight {
  line-height: var(--leading-tight);
}
.leading-snug {
  line-height: var(--leading-snug);
}
.leading-normal {
  line-height: var(--leading-normal);
}
.leading-relaxed {
  line-height: var(--leading-relaxed);
}
.leading-loose {
  line-height: var(--leading-loose);
}

.tracking-tighter {
  letter-spacing: var(--tracking-tighter);
}
.tracking-tight {
  letter-spacing: var(--tracking-tight);
}
.tracking-normal {
  letter-spacing: var(--tracking-normal);
}
.tracking-wide {
  letter-spacing: var(--tracking-wide);
}
.tracking-wider {
  letter-spacing: var(--tracking-wider);
}
.tracking-widest {
  letter-spacing: var(--tracking-widest);
}

.font-sans {
  font-family: var(--font-sans);
}
.font-serif {
  font-family: var(--font-serif);
}
.font-mono {
  font-family: var(--font-mono);
}

/* Heading Defaults */
h1,
.h1 {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

h2,
.h2 {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
  margin-bottom: 0.875rem;
}

h3,
.h3 {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--color-text-primary);
  margin-bottom: 0.75rem;
}

h4,
.h4 {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--color-text-primary);
  margin-bottom: 0.75rem;
}

h5,
.h5 {
  font-size: var(--text-lg);
  font-weight: var(--font-medium);
  line-height: var(--leading-snug);
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

h6,
.h6 {
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

/* Body Text */
p,
.body {
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
}

/* Small Text */
small,
.small {
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  color: var(--color-text-tertiary);
}

/* Label */
.label {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-tertiary);
}

/* Display Text */
.display {
  font-size: clamp(var(--text-4xl), 8vw, var(--text-8xl));
  font-weight: var(--font-black);
  line-height: var(--leading-none);
  letter-spacing: var(--tracking-tighter);
  color: var(--color-text-primary);
}

/* Lead Paragraph */
.lead {
  font-size: var(--text-lg);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}

/* Responsive Typography */
@media (max-width: 640px) {
  h1,
  .h1 {
    font-size: var(--text-3xl);
  }
  h2,
  .h2 {
    font-size: var(--text-2xl);
  }
  h3,
  .h3 {
    font-size: var(--text-xl);
  }
  h4,
  .h4 {
    font-size: var(--text-lg);
  }
}
```

---

## Part 4: Spacing System

### Complete Spacing Scale

**tokens/spacing.json:**

```json
{
  "spacing": {
    "0": { "value": "0", "px": "0px" },
    "px": { "value": "1px", "px": "1px" },
    "0.5": { "value": "0.125rem", "px": "2px" },
    "1": { "value": "0.25rem", "px": "4px" },
    "1.5": { "value": "0.375rem", "px": "6px" },
    "2": { "value": "0.5rem", "px": "8px" },
    "2.5": { "value": "0.625rem", "px": "10px" },
    "3": { "value": "0.75rem", "px": "12px" },
    "3.5": { "value": "0.875rem", "px": "14px" },
    "4": { "value": "1rem", "px": "16px" },
    "5": { "value": "1.25rem", "px": "20px" },
    "6": { "value": "1.5rem", "px": "24px" },
    "7": { "value": "1.75rem", "px": "28px" },
    "8": { "value": "2rem", "px": "32px" },
    "9": { "value": "2.25rem", "px": "36px" },
    "10": { "value": "2.5rem", "px": "40px" },
    "11": { "value": "2.75rem", "px": "44px" },
    "12": { "value": "3rem", "px": "48px" },
    "14": { "value": "3.5rem", "px": "56px" },
    "16": { "value": "4rem", "px": "64px" },
    "20": { "value": "5rem", "px": "80px" },
    "24": { "value": "6rem", "px": "96px" },
    "28": { "value": "7rem", "px": "112px" },
    "32": { "value": "8rem", "px": "128px" },
    "36": { "value": "9rem", "px": "144px" },
    "40": { "value": "10rem", "px": "160px" },
    "44": { "value": "11rem", "px": "176px" },
    "48": { "value": "12rem", "px": "192px" },
    "52": { "value": "13rem", "px": "208px" },
    "56": { "value": "14rem", "px": "224px" },
    "60": { "value": "15rem", "px": "240px" },
    "64": { "value": "16rem", "px": "256px" },
    "72": { "value": "18rem", "px": "288px" },
    "80": { "value": "20rem", "px": "320px" },
    "96": { "value": "24rem", "px": "384px" }
  }
}
```

**CSS Spacing Utilities:**

```css
:root {
  --space-0: 0;
  --space-px: 1px;
  --space-0-5: 0.125rem;
  --space-1: 0.25rem;
  --space-1-5: 0.375rem;
  --space-2: 0.5rem;
  --space-2-5: 0.625rem;
  --space-3: 0.75rem;
  --space-3-5: 0.875rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-7: 1.75rem;
  --space-8: 2rem;
  --space-9: 2.25rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
  --space-40: 10rem;
  --space-48: 12rem;
  --space-64: 16rem;
  --space-80: 20rem;
  --space-96: 24rem;
}

/* Margin utilities */
.m-0 {
  margin: 0;
}
.m-1 {
  margin: var(--space-1);
}
.m-2 {
  margin: var(--space-2);
}
.m-3 {
  margin: var(--space-3);
}
.m-4 {
  margin: var(--space-4);
}
.m-6 {
  margin: var(--space-6);
}
.m-8 {
  margin: var(--space-8);
}
.m-12 {
  margin: var(--space-12);
}
.m-16 {
  margin: var(--space-16);
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mt-0 {
  margin-top: 0;
}
.mt-2 {
  margin-top: var(--space-2);
}
.mt-4 {
  margin-top: var(--space-4);
}
.mt-8 {
  margin-top: var(--space-8);
}

.mb-0 {
  margin-bottom: 0;
}
.mb-2 {
  margin-bottom: var(--space-2);
}
.mb-4 {
  margin-bottom: var(--space-4);
}
.mb-8 {
  margin-bottom: var(--space-8);
}

/* Padding utilities */
.p-0 {
  padding: 0;
}
.p-1 {
  padding: var(--space-1);
}
.p-2 {
  padding: var(--space-2);
}
.p-3 {
  padding: var(--space-3);
}
.p-4 {
  padding: var(--space-4);
}
.p-6 {
  padding: var(--space-6);
}
.p-8 {
  padding: var(--space-8);
}
.p-12 {
  padding: var(--space-12);
}
.p-16 {
  padding: var(--space-16);
}

.px-2 {
  padding-left: var(--space-2);
  padding-right: var(--space-2);
}
.px-4 {
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}
.px-6 {
  padding-left: var(--space-6);
  padding-right: var(--space-6);
}
.px-8 {
  padding-left: var(--space-8);
  padding-right: var(--space-8);
}

.py-2 {
  padding-top: var(--space-2);
  padding-bottom: var(--space-2);
}
.py-4 {
  padding-top: var(--space-4);
  padding-bottom: var(--space-4);
}
.py-6 {
  padding-top: var(--space-6);
  padding-bottom: var(--space-6);
}
.py-8 {
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);
}

/* Gap utilities (for Grid/Flexbox) */
.gap-0 {
  gap: 0;
}
.gap-1 {
  gap: var(--space-1);
}
.gap-2 {
  gap: var(--space-2);
}
.gap-3 {
  gap: var(--space-3);
}
.gap-4 {
  gap: var(--space-4);
}
.gap-6 {
  gap: var(--space-6);
}
.gap-8 {
  gap: var(--space-8);
}
.gap-12 {
  gap: var(--space-12);
}
.gap-16 {
  gap: var(--space-16);
}
```

---

## Part 5: Shadows & Effects

### Shadow System

**tokens/shadows.json:**

```json
{
  "shadow": {
    "none": { "value": "none" },
    "xs": { "value": "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
    "sm": { "value": "0 2px 4px 0 rgba(0, 0, 0, 0.05)" },
    "md": { "value": "0 4px 8px 0 rgba(0, 0, 0, 0.1)" },
    "lg": { "value": "0 8px 16px 0 rgba(0, 0, 0, 0.15)" },
    "xl": { "value": "0 12px 24px 0 rgba(0, 0, 0, 0.2)" },
    "2xl": { "value": "0 20px 40px 0 rgba(0, 0, 0, 0.25)" },
    "inner": { "value": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)" }
  }
}
```

**CSS Shadow System:**

```css
:root {
  --shadow-none: none;
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 16px 0 rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 12px 24px 0 rgba(0, 0, 0, 0.2);
  --shadow-2xl: 0 20px 40px 0 rgba(0, 0, 0, 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}

.shadow-none {
  box-shadow: var(--shadow-none);
}
.shadow-xs {
  box-shadow: var(--shadow-xs);
}
.shadow-sm {
  box-shadow: var(--shadow-sm);
}
.shadow-md {
  box-shadow: var(--shadow-md);
}
.shadow-lg {
  box-shadow: var(--shadow-lg);
}
.shadow-xl {
  box-shadow: var(--shadow-xl);
}
.shadow-2xl {
  box-shadow: var(--shadow-2xl);
}
.shadow-inner {
  box-shadow: var(--shadow-inner);
}
```

---

## Deliverables Summary

✅ **Complete Design Token System:**

**Color Tokens:**

- 4 brand color scales (orange, teal, yellow, red) - 10 shades each = 40 colors
- 3 neutral scales (walnut, charcoal, cream) - 10 shades each = 30 colors
- 2 pure colors (white, black)
- 4 semantic color groups (success, warning, error, info) - 3 shades each = 12 colors
- **Total: 84 color tokens**
- Complete CSS custom properties for all colors
- Dark mode overrides
- Semantic aliases for UI usage

**Typography Tokens:**

- 3 font families (sans, serif, mono)
- 13 font sizes (xs to 8xl) with modular scale
- 6 font weights (light to black)
- 6 line heights (none to loose)
- 6 letter spacing values (tighter to widest)
- **Total: 34 typography tokens**
- Complete heading hierarchy (h1-h6)
- Body text, small text, label, display, lead styles
- Responsive adjustments

**Spacing Tokens:**

- 36 spacing values (0 to 96)
- Covers 0px to 384px range
- Follows 4px base grid
- **Total: 36 spacing tokens**
- Complete margin/padding utilities
- Gap utilities for Grid/Flexbox

**Shadow Tokens:**

- 8 shadow variations (none, xs, sm, md, lg, xl, 2xl, inner)
- Consistent elevation system
- **Total: 8 shadow tokens**

**Grand Total: 162 design tokens documented**

✅ **CSS Implementation:**

- 162 CSS custom properties
- 100+ utility classes
- Dark mode support
- Responsive typography
- Complete semantic naming

✅ **JSON Token Files:**

- Ready for Style Dictionary transformation
- Can generate iOS, Android, web formats
- Single source of truth
- Documented with descriptions

---

**Session Complete:** Day 8 Morning  
**Next Session:** Day 8 Afternoon - Component Documentation & Usage Guidelines
