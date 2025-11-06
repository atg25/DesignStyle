# MCM System Integration & Testing

**Day 11 Morning Session:** Eleventy Integration & Build System  
**Created:** November 5, 2025  
**Purpose:** Connect all components into a working Eleventy site

---

## Part 1: Eleventy Configuration

### Complete .eleventy.js

```javascript
// .eleventy.js

const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  // ==========================================
  // PLUGINS
  // ==========================================

  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  // ==========================================
  // FILTERS
  // ==========================================

  // Date formatting
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Get the first `n` elements of a collection
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  // Find item by ID
  eleventyConfig.addFilter("findById", (array, id) => {
    return array.find((item) => item.id === id);
  });

  // Calculate reading time
  eleventyConfig.addFilter("readingTime", (text) => {
    const wordsPerMinute = 200;
    const numberOfWords = text.split(/\s/g).length;
    return Math.ceil(numberOfWords / wordsPerMinute);
  });

  // Excerpt
  eleventyConfig.addFilter("excerpt", (text, length = 150) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  });

  // Markdownify
  eleventyConfig.addFilter("markdownify", (content) => {
    const md = markdownIt({ html: true });
    return md.render(content);
  });

  // ==========================================
  // SHORTCODES
  // ==========================================

  // Responsive image shortcode
  eleventyConfig.addNunjucksAsyncShortcode(
    "image",
    async function (src, alt, sizes = "100vw") {
      if (alt === undefined) {
        throw new Error(`Missing \`alt\` on image from: ${src}`);
      }

      let metadata = await Image(src, {
        widths: [400, 800, 1200, 1600],
        formats: ["webp", "jpeg"],
        outputDir: "./_site/images/",
        urlPath: "/images/",
      });

      let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
      };

      return Image.generateHTML(metadata, imageAttributes);
    }
  );

  // Current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // ==========================================
  // COLLECTIONS
  // ==========================================

  // Articles collection
  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/content/articles/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Furniture collection
  eleventyConfig.addCollection("furniture", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/content/furniture/**/*.md")
      .sort((a, b) => a.data.title.localeCompare(b.data.title));
  });

  // Designers collection
  eleventyConfig.addCollection("designers", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/content/designers/**/*.md")
      .sort((a, b) => a.data.name.localeCompare(b.data.name));
  });

  // All tags
  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  });

  // ==========================================
  // MARKDOWN CONFIGURATION
  // ==========================================

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "anchor-link",
      symbol: "#",
      level: [1, 2, 3, 4],
    }),
    slugify: eleventyConfig.getFilter("slug"),
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  // ==========================================
  // PASSTHROUGH COPY
  // ==========================================

  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // ==========================================
  // WATCH TARGETS
  // ==========================================

  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");

  // ==========================================
  // DEV SERVER
  // ==========================================

  eleventyConfig.setServerOptions({
    liveReload: true,
    domDiff: true,
    port: 8080,
    watch: ["_site/**/*.css", "_site/**/*.js"],
  });

  // ==========================================
  // RETURN CONFIG
  // ==========================================

  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
```

---

## Part 2: Project Structure

### Complete Directory Structure

```
mcm-design-hub/
├── .eleventy.js
├── package.json
├── .gitignore
├── README.md
├── nginx.conf
├── Dockerfile
├── docker-compose.yml
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── _data/
│   │   ├── site.json
│   │   ├── navigation.json
│   │   ├── furniture.js
│   │   └── designers.js
│   ├── _includes/
│   │   ├── components/
│   │   │   ├── button.njk
│   │   │   ├── card.njk
│   │   │   ├── navigation.njk
│   │   │   ├── hero.njk
│   │   │   ├── gallery.njk
│   │   │   ├── accordion.njk
│   │   │   ├── icon.njk
│   │   │   ├── breadcrumb.njk
│   │   │   ├── search.njk
│   │   │   └── feedback.njk
│   │   ├── layouts/
│   │   │   ├── base.njk
│   │   │   ├── article.njk
│   │   │   ├── furniture-item.njk
│   │   │   ├── designer-profile.njk
│   │   │   └── tool.njk
│   │   └── partials/
│   │       ├── head.njk
│   │       ├── header.njk
│   │       ├── footer.njk
│   │       ├── skip-link.njk
│   │       └── analytics.njk
│   ├── content/
│   │   ├── articles/
│   │   │   ├── color-theory.md
│   │   │   ├── typography-guide.md
│   │   │   └── [more articles]
│   │   ├── furniture/
│   │   │   ├── eames-lounge-chair.md
│   │   │   ├── noguchi-table.md
│   │   │   └── [more furniture]
│   │   └── designers/
│   │       ├── charles-ray-eames.md
│   │       ├── george-nelson.md
│   │       └── [more designers]
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css
│   │   │   ├── tokens/
│   │   │   │   ├── colors.css
│   │   │   │   ├── typography.css
│   │   │   │   └── spacing.css
│   │   │   ├── base/
│   │   │   │   ├── reset.css
│   │   │   │   ├── typography.css
│   │   │   │   └── global.css
│   │   │   ├── components/
│   │   │   │   ├── button.css
│   │   │   │   ├── card.css
│   │   │   │   ├── navigation.css
│   │   │   │   ├── hero.css
│   │   │   │   ├── gallery.css
│   │   │   │   ├── accordion.css
│   │   │   │   ├── icon.css
│   │   │   │   └── search.css
│   │   │   └── utilities/
│   │   │       ├── spacing.css
│   │   │       ├── layout.css
│   │   │       ├── typography.css
│   │   │       └── colors.css
│   │   ├── js/
│   │   │   ├── main.js
│   │   │   └── components/
│   │   │       ├── navigation.js
│   │   │       ├── gallery.js
│   │   │       ├── accordion.js
│   │   │       └── search.js
│   │   ├── images/
│   │   └── fonts/
│   ├── pages/
│   │   ├── index.njk
│   │   ├── about.njk
│   │   ├── learn.njk
│   │   ├── explore.njk
│   │   └── practice.njk
│   ├── favicon.svg
│   └── robots.txt
└── _site/ (generated)
```

---

## Part 3: Data Files

### Site Configuration

```json
// src/_data/site.json

{
  "name": "MCM Design Hub",
  "description": "Explore the timeless beauty of mid-century modern design",
  "url": "https://mcmdesignhub.com",
  "language": "en",
  "author": {
    "name": "MCM Design Hub Team",
    "email": "hello@mcmdesignhub.com"
  },
  "social": {
    "twitter": "@mcmdesignhub",
    "github": "mcmdesignhub"
  },
  "production": false
}
```

### Navigation Data

```json
// src/_data/navigation.json

{
  "primary": [
    {
      "text": "Home",
      "href": "/"
    },
    {
      "text": "Learn",
      "href": "/learn",
      "children": [
        {
          "text": "History & Origins",
          "href": "/learn/history"
        },
        {
          "text": "Design Principles",
          "href": "/learn/principles"
        },
        {
          "text": "Color Theory",
          "href": "/learn/color-theory"
        },
        {
          "text": "Typography",
          "href": "/learn/typography"
        },
        {
          "text": "Materials & Textures",
          "href": "/learn/materials"
        }
      ]
    },
    {
      "text": "Explore",
      "href": "/explore",
      "children": [
        {
          "text": "Furniture Gallery",
          "href": "/explore/furniture"
        },
        {
          "text": "Architecture",
          "href": "/explore/architecture"
        },
        {
          "text": "Graphic Design",
          "href": "/explore/graphics"
        },
        {
          "text": "Interior Spaces",
          "href": "/explore/interiors"
        }
      ]
    },
    {
      "text": "Practice",
      "href": "/practice",
      "children": [
        {
          "text": "Design Lab",
          "href": "/practice/design-lab"
        },
        {
          "text": "Color Palette Generator",
          "href": "/practice/color-generator"
        },
        {
          "text": "Typography Playground",
          "href": "/practice/typography"
        },
        {
          "text": "Pattern Library",
          "href": "/practice/patterns"
        }
      ]
    },
    {
      "text": "Resources",
      "href": "/resources",
      "children": [
        {
          "text": "Design System Docs",
          "href": "/resources/design-system"
        },
        {
          "text": "Code Examples",
          "href": "/resources/code"
        },
        {
          "text": "Books & References",
          "href": "/resources/books"
        }
      ]
    }
  ],
  "footer": [
    {
      "title": "Learn",
      "links": [
        { "text": "Getting Started", "href": "/learn" },
        { "text": "Design Principles", "href": "/learn/principles" },
        { "text": "Color Theory", "href": "/learn/color-theory" }
      ]
    },
    {
      "title": "Explore",
      "links": [
        { "text": "Furniture Gallery", "href": "/explore/furniture" },
        { "text": "Designers", "href": "/explore/designers" },
        { "text": "Architecture", "href": "/explore/architecture" }
      ]
    },
    {
      "title": "Resources",
      "links": [
        { "text": "Design System", "href": "/resources/design-system" },
        { "text": "Code Examples", "href": "/resources/code" },
        { "text": "Books", "href": "/resources/books" }
      ]
    },
    {
      "title": "About",
      "links": [
        { "text": "About This Project", "href": "/about" },
        { "text": "Contact", "href": "/contact" },
        { "text": "Privacy", "href": "/privacy" }
      ]
    }
  ]
}
```

---

## Part 4: CSS Build System

### Main CSS File

```css
/* src/assets/css/main.css */

/* ==========================================
   DESIGN TOKENS
   ========================================== */

@import "tokens/colors.css";
@import "tokens/typography.css";
@import "tokens/spacing.css";

/* ==========================================
   BASE STYLES
   ========================================== */

@import "base/reset.css";
@import "base/typography.css";
@import "base/global.css";

/* ==========================================
   COMPONENTS
   ========================================== */

@import "components/button.css";
@import "components/card.css";
@import "components/navigation.css";
@import "components/hero.css";
@import "components/gallery.css";
@import "components/accordion.css";
@import "components/icon.css";
@import "components/search.css";
@import "components/breadcrumb.css";
@import "components/footer.css";

/* ==========================================
   UTILITIES
   ========================================== */

@import "utilities/spacing.css";
@import "utilities/layout.css";
@import "utilities/typography.css";
@import "utilities/colors.css";
```

### Global Styles

```css
/* src/assets/css/base/global.css */

:root {
  --container-max-width: 1400px;
  --container-padding: clamp(1rem, 5vw, 4rem);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text-primary);
  background: var(--color-surface);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--color-primary);
  text-decoration: underline;
}

a:hover {
  color: var(--color-primary-dark);
}

button {
  font-family: inherit;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: var(--space-3) var(--space-4);
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  font-weight: var(--font-semibold);
  z-index: 1000;
}

.skip-link:focus {
  top: 0;
}

/* Focus styles */
:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* Selection */
::selection {
  background: var(--color-primary);
  color: white;
}
```

---

## Part 5: JavaScript Build System

### Main JavaScript File

```javascript
// src/assets/js/main.js

// Import all component modules
import Navigation from "./components/navigation.js";
import Gallery from "./components/gallery.js";
import Accordion from "./components/accordion.js";
import Search from "./components/search.js";

// Initialize all components when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Initialize navigation
  const navElements = document.querySelectorAll("[data-nav]");
  navElements.forEach((nav) => new Navigation(nav));

  // Initialize galleries
  const galleryElements = document.querySelectorAll("[data-gallery]");
  galleryElements.forEach((gallery) => new Gallery(gallery));

  // Initialize accordions
  const accordionElements = document.querySelectorAll("[data-accordion]");
  accordionElements.forEach((accordion) => new Accordion(accordion));

  // Initialize search
  const searchModal = document.getElementById("search-modal");
  if (searchModal) {
    new Search();
  }

  // Lazy loading images
  if ("loading" in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
    document.body.appendChild(script);
  }

  // External link handling
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  externalLinks.forEach((link) => {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute("rel", "noopener noreferrer");
      link.setAttribute("target", "_blank");
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update URL without jumping
        history.pushState(null, null, this.getAttribute("href"));
      }
    });
  });

  // Analytics event tracking
  if (window.gtag) {
    // Track button clicks
    document.querySelectorAll(".btn").forEach((button) => {
      button.addEventListener("click", () => {
        gtag("event", "button_click", {
          event_category: "engagement",
          event_label: button.textContent.trim(),
        });
      });
    });

    // Track outbound links
    document.querySelectorAll('a[href^="http"]').forEach((link) => {
      link.addEventListener("click", () => {
        gtag("event", "click", {
          event_category: "outbound",
          event_label: link.href,
        });
      });
    });
  }
});

// Service Worker registration (for PWA)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered:", registration);
      })
      .catch((error) => {
        console.log("SW registration failed:", error);
      });
  });
}

// Print stylesheet trigger
window.matchMedia("print").addEventListener("change", (e) => {
  if (e.matches) {
    // Before print
    document.body.classList.add("printing");
  } else {
    // After print
    document.body.classList.remove("printing");
  }
});

// Detect scroll direction
let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      document.body.classList.add("scrolling-down");
      document.body.classList.remove("scrolling-up");
    } else {
      document.body.classList.add("scrolling-up");
      document.body.classList.remove("scrolling-down");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  },
  { passive: true }
);

// Performance monitoring
if ("PerformanceObserver" in window) {
  // Largest Contentful Paint (LCP)
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log("LCP:", lastEntry.renderTime || lastEntry.loadTime);
  });
  lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

  // First Input Delay (FID)
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      console.log("FID:", entry.processingStart - entry.startTime);
    });
  });
  fidObserver.observe({ entryTypes: ["first-input"] });

  // Cumulative Layout Shift (CLS)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    }
    console.log("CLS:", clsValue);
  });
  clsObserver.observe({ entryTypes: ["layout-shift"] });
}
```

---

## Part 6: Package.json & Build Scripts

### Package Configuration

```json
{
  "name": "mcm-design-hub",
  "version": "1.0.0",
  "description": "Mid-Century Modern Design Educational Website",
  "scripts": {
    "clean": "rm -rf _site",
    "start": "npm-run-all clean --parallel start:*",
    "start:eleventy": "eleventy --serve",
    "start:css": "postcss src/assets/css/main.css --output _site/css/main.css --watch",
    "start:js": "esbuild src/assets/js/main.js --bundle --outfile=_site/js/main.js --watch",
    "build": "npm-run-all clean build:*",
    "build:eleventy": "ELEVENTY_ENV=production eleventy",
    "build:css": "postcss src/assets/css/main.css --output _site/css/main.css",
    "build:js": "esbuild src/assets/js/main.js --bundle --minify --outfile=_site/js/main.js",
    "build:optimize": "node scripts/optimize-images.js",
    "test": "npm-run-all test:*",
    "test:html": "htmlhint _site/**/*.html",
    "test:css": "stylelint 'src/assets/css/**/*.css'",
    "test:js": "eslint 'src/assets/js/**/*.js'",
    "test:a11y": "pa11y-ci",
    "lighthouse": "lighthouse http://localhost:8080 --view",
    "deploy": "npm run build && gh-pages -d _site"
  },
  "keywords": ["mid-century-modern", "design", "eleventy", "education"],
  "author": "MCM Design Hub Team",
  "license": "MIT",
  "dependencies": {
    "@11ty/eleventy": "^2.0.1",
    "@11ty/eleventy-img": "^3.1.0",
    "@11ty/eleventy-navigation": "^0.3.5",
    "@11ty/eleventy-plugin-rss": "^1.2.0",
    "@11ty/eleventy-plugin-syntaxhighlight": "^5.0.0",
    "luxon": "^3.3.0",
    "markdown-it": "^13.0.1",
    "markdown-it-anchor": "^8.6.7"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "cssnano": "^6.0.1",
    "esbuild": "^0.18.11",
    "eslint": "^8.44.0",
    "gh-pages": "^5.0.0",
    "htmlhint": "^1.1.4",
    "lighthouse": "^10.4.0",
    "npm-run-all": "^4.1.5",
    "pa11y-ci": "^3.0.1",
    "postcss": "^8.4.24",
    "postcss-cli": "^10.1.0",
    "postcss-import": "^15.1.0",
    "stylelint": "^15.10.1"
  },
  "browserslist": ["last 2 versions", "> 1%", "not dead"]
}
```

### PostCSS Configuration

```javascript
// postcss.config.js

module.exports = {
  plugins: [
    require("postcss-import"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production"
      ? require("cssnano")({
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
            },
          ],
        })
      : null,
  ].filter(Boolean),
};
```

---

## Deliverables Summary

✅ **Eleventy Configuration:**

- Complete .eleventy.js (200+ lines)
- Plugins: Navigation, RSS, Syntax Highlighting, Image optimization
- 8 custom filters (date formatting, reading time, excerpt, markdownify, etc.)
- 2 shortcodes (responsive images, current year)
- 4 collections (articles, furniture, designers, tags)
- Markdown configuration with anchor links
- Dev server with live reload

✅ **Project Structure:**

- Complete directory tree
- Organized by concerns (components, layouts, partials)
- Clear separation of content and presentation
- Scalable architecture

✅ **Data Files:**

- Site configuration (metadata, social, production flag)
- Navigation structure (primary + footer, nested dropdowns)
- Structured for easy maintenance

✅ **CSS Build System:**

- Main CSS with imports
- ITCSS organization (tokens → base → components → utilities)
- PostCSS with autoprefixer and cssnano
- Global styles with focus management

✅ **JavaScript Build System:**

- Main JS entry point
- Component initialization
- Lazy loading images
- External link handling
- Smooth scrolling
- Analytics integration
- Service Worker registration
- Performance monitoring (LCP, FID, CLS)
- Scroll direction detection

✅ **Build Scripts:**

- Complete package.json
- Development mode with watch
- Production build with optimization
- Testing scripts (HTML, CSS, JS, accessibility)
- Lighthouse integration
- Deployment script

**Total Integration Framework:**

- 200+ lines Eleventy config
- 8 custom filters
- 4 collections
- Complete build pipeline
- Performance monitoring
- Accessibility testing

---

**Session Complete:** Day 11 Morning  
**Next Session:** Day 11 Afternoon - Testing & Quality Assurance
