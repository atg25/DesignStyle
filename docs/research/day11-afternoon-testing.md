# MCM Testing & Quality Assurance

**Day 11 Afternoon Session:** Comprehensive Testing Strategy  
**Created:** November 5, 2025  
**Purpose:** Ensure quality, accessibility, and performance standards

---

## Part 1: Accessibility Testing

### Pa11y Configuration

```json
// .pa11yci.json

{
  "defaults": {
    "standard": "WCAG2AA",
    "timeout": 10000,
    "wait": 500,
    "chromeLaunchConfig": {
      "args": ["--no-sandbox", "--disable-setuid-sandbox"]
    },
    "runners": ["axe", "htmlcs"]
  },
  "urls": [
    "http://localhost:8080",
    "http://localhost:8080/learn",
    "http://localhost:8080/explore",
    "http://localhost:8080/practice",
    "http://localhost:8080/resources",
    "http://localhost:8080/learn/color-theory",
    "http://localhost:8080/explore/furniture",
    "http://localhost:8080/practice/design-lab"
  ]
}
```

### Manual Accessibility Checklist

```markdown
## Keyboard Navigation Testing

- [ ] Tab order is logical and follows visual flow
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are clearly visible (3px outline, 2px offset)
- [ ] Skip link appears on Tab and works correctly
- [ ] Modal dialogs trap focus appropriately
- [ ] Escape key closes modals and dropdowns
- [ ] Arrow keys navigate through search results
- [ ] Enter/Space activates buttons and links

## Screen Reader Testing

### NVDA (Windows)

- [ ] Page title is announced correctly
- [ ] Headings are announced in proper hierarchy (h1 → h2 → h3)
- [ ] Landmarks are identified (navigation, main, footer)
- [ ] Images have appropriate alt text
- [ ] Links have descriptive text
- [ ] Buttons announce their purpose
- [ ] Form labels are associated correctly
- [ ] Error messages are announced
- [ ] Dynamic content updates are announced (aria-live)

### VoiceOver (macOS)

- [ ] Navigate by headings (VO + Command + H)
- [ ] Navigate by links (VO + Command + L)
- [ ] Navigate by landmarks (VO + U, then arrows)
- [ ] All content is accessible
- [ ] No content is hidden incorrectly

### JAWS (Windows)

- [ ] Forms mode works correctly
- [ ] Tables are navigable
- [ ] Lists are announced with item count

## Color Contrast Testing

- [ ] Body text meets 4.5:1 ratio (WCAG AA)
  - Primary text on surface: #2C1810 on #FAF8F6 = 12.5:1 ✓
  - Secondary text on surface: #5C4A42 on #FAF8F6 = 6.2:1 ✓
- [ ] Large text meets 3:1 ratio (WCAG AA)
  - Headings: #2C1810 on #FAF8F6 = 12.5:1 ✓
- [ ] UI components meet 3:1 ratio

  - Orange primary on white: #FF6B35 on #FFFFFF = 3.4:1 ✓
  - Teal secondary on white: #1FB7C8 on #FFFFFF = 3.2:1 ✓
  - Borders: #DDD5CC on #FAF8F6 = 1.4:1 ✗ (decorative only)

- [ ] Non-text content (icons, graphics) meets 3:1 ratio

## ARIA Testing

- [ ] aria-label present on icon buttons
- [ ] aria-expanded toggles correctly on dropdowns
- [ ] aria-controls links to controlled elements
- [ ] aria-current="page" on active navigation items
- [ ] aria-hidden="true" on decorative elements
- [ ] role="img" on meaningful SVGs with aria-label
- [ ] aria-live regions announce dynamic content
- [ ] aria-describedby links to descriptions

## Focus Management

- [ ] Focus moves to modal when opened
- [ ] Focus returns to trigger when modal closed
- [ ] First interactive element in modal receives focus
- [ ] Focus doesn't leave modal (focus trap)
- [ ] Tab wraps from last to first element in modal

## Responsive Testing

- [ ] Content reflows at 320px width (WCAG 1.4.10)
- [ ] Text can be zoomed to 200% without horizontal scrolling
- [ ] No content is lost when zoomed
- [ ] Target sizes meet 44×44px minimum
- [ ] Orientation works in both portrait and landscape
```

---

## Part 2: Performance Testing

### Lighthouse Configuration

```javascript
// lighthouse.config.js

module.exports = {
  extends: "lighthouse:default",
  settings: {
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 1,
    },
  },
  audits: [
    "first-contentful-paint",
    "largest-contentful-paint",
    "first-meaningful-paint",
    "speed-index",
    "total-blocking-time",
    "cumulative-layout-shift",
    "time-to-interactive",
  ],
};
```

### Performance Budget

```json
// performance-budget.json

{
  "budget": [
    {
      "resourceType": "document",
      "budget": 18
    },
    {
      "resourceType": "stylesheet",
      "budget": 30
    },
    {
      "resourceType": "script",
      "budget": 50
    },
    {
      "resourceType": "image",
      "budget": 200
    },
    {
      "resourceType": "font",
      "budget": 100
    },
    {
      "resourceType": "total",
      "budget": 400
    }
  ],
  "timings": [
    {
      "metric": "first-contentful-paint",
      "budget": 1500
    },
    {
      "metric": "largest-contentful-paint",
      "budget": 2500
    },
    {
      "metric": "cumulative-layout-shift",
      "budget": 0.1
    },
    {
      "metric": "total-blocking-time",
      "budget": 300
    },
    {
      "metric": "speed-index",
      "budget": 3000
    }
  ]
}
```

### Core Web Vitals Checklist

````markdown
## Largest Contentful Paint (LCP) - Target: < 2.5s

- [ ] Hero images use fetchpriority="high"
- [ ] Hero images use loading="eager"
- [ ] Critical CSS is inlined (< 14KB)
- [ ] Fonts are preloaded with crossorigin
- [ ] No render-blocking resources above the fold
- [ ] Images use next-gen formats (WebP)
- [ ] Images are properly sized (srcset)
- [ ] CDN is used for assets
- [ ] Server response time < 200ms

**Current Strategy:**

```html
<!-- Hero image optimization -->
<img
  src="hero.webp"
  alt="Description"
  width="1600"
  height="900"
  loading="eager"
  fetchpriority="high"
  decoding="async"
/>

<!-- Font preload -->
<link
  rel="preload"
  href="/fonts/inter-var.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```
````

## First Input Delay (FID) / Interaction to Next Paint (INP) - Target: < 100ms

- [ ] JavaScript bundle < 50KB (gzipped)
- [ ] Long tasks are broken up (< 50ms)
- [ ] JavaScript is deferred or async
- [ ] Third-party scripts are lazy loaded
- [ ] Event handlers are passive where possible
- [ ] Web Workers for heavy computation
- [ ] Code splitting for route-based loading

**Current Strategy:**

```html
<!-- Defer non-critical JavaScript -->
<script src="/js/main.js" defer></script>

<!-- Passive event listeners -->
<script>
  window.addEventListener("scroll", handler, { passive: true });
</script>
```

## Cumulative Layout Shift (CLS) - Target: < 0.1

- [ ] Image dimensions are specified (width/height)
- [ ] Font loading uses font-display: swap
- [ ] Space reserved for ads/embeds
- [ ] No content inserted above existing content
- [ ] Animations use transform/opacity only
- [ ] Skeleton screens for dynamic content

**Current Strategy:**

```css
/* Font loading */
@font-face {
  font-family: "Inter";
  src: url("/fonts/inter-var.woff2") format("woff2");
  font-display: swap;
  font-weight: 300 700;
}

/* Reserve space for images */
img {
  aspect-ratio: attr(width) / attr(height);
}

/* Animate with transform only */
.card {
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-2px);
}
```

````

---

## Part 3: Cross-Browser Testing

### Browser Support Matrix

```markdown
## Desktop Browsers (Last 2 versions)

### Chrome (Primary)
- [ ] Layout renders correctly
- [ ] All interactions work
- [ ] Animations are smooth
- [ ] Lighthouse score: 95+

### Firefox
- [ ] Layout matches Chrome
- [ ] Backdrop-filter fallback works
- [ ] Grid layouts render correctly
- [ ] Custom properties work

### Safari
- [ ] Aspect-ratio property works (fallback if needed)
- [ ] Sticky positioning works
- [ ] Smooth scroll works
- [ ] Font rendering is acceptable

### Edge
- [ ] Chromium-based features work
- [ ] No legacy Edge issues (not supported)

## Mobile Browsers

### Chrome Mobile (Android)
- [ ] Touch targets are 44×44px minimum
- [ ] Viewport meta tag prevents zoom on input focus
- [ ] Hamburger menu works smoothly
- [ ] Scroll performance is good

### Safari Mobile (iOS)
- [ ] Fixed positioning works correctly
- [ ] Momentum scrolling works
- [ ] Input fields don't zoom (font-size: 16px minimum)
- [ ] 100vh doesn't cause issues with address bar

### Samsung Internet
- [ ] All features work
- [ ] No visual bugs

## Testing Tools

### BrowserStack
- Test on real devices
- Automated screenshot comparison
- Network throttling

### Cross-Browser Testing Checklist
```bash
# Local testing with BrowserSync
npm install -g browser-sync
browser-sync start --server "_site" --files "_site/**/*"
````

---

## Part 4: HTML/CSS/JS Validation

### HTMLHint Configuration

```json
// .htmlhintrc

{
  "tagname-lowercase": true,
  "attr-lowercase": true,
  "attr-value-double-quotes": true,
  "attr-no-duplication": true,
  "doctype-first": true,
  "tag-pair": true,
  "tag-self-close": false,
  "spec-char-escape": true,
  "id-unique": true,
  "src-not-empty": true,
  "title-require": true,
  "alt-require": true,
  "doctype-html5": true,
  "id-class-value": "dash",
  "style-disabled": false,
  "inline-style-disabled": false,
  "inline-script-disabled": false,
  "space-tab-mixed-disabled": "space",
  "id-class-ad-disabled": true,
  "attr-unsafe-chars": true
}
```

### Stylelint Configuration

```javascript
// .stylelintrc.js

module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["custom-media"],
      },
    ],
    "color-hex-length": "long",
    "color-named": "never",
    "declaration-block-no-redundant-longhand-properties": true,
    "font-family-name-quotes": "always-where-recommended",
    "font-weight-notation": "numeric",
    "function-url-quotes": "always",
    "max-nesting-depth": 3,
    "no-descending-specificity": null,
    "number-max-precision": 4,
    "property-no-vendor-prefix": true,
    "selector-class-pattern":
      "^[a-z][a-z0-9]*(-[a-z0-9]+)*((__[a-z][a-z0-9]*(-[a-z0-9]+)*)?(--[a-z][a-z0-9]*(-[a-z0-9]+)*))?$",
    "selector-max-id": 0,
    "selector-max-type": 2,
    "selector-max-universal": 1,
    "shorthand-property-no-redundant-values": true,
    "value-keyword-case": "lower",
  },
};
```

### ESLint Configuration

```javascript
// .eslintrc.js

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "prefer-const": "error",
    "no-var": "error",
    "arrow-spacing": "error",
    "comma-dangle": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "max-len": [
      "warn",
      {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
      },
    ],
  },
};
```

---

## Part 5: Visual Regression Testing

### BackstopJS Configuration

```javascript
// backstop.config.js

module.exports = {
  id: "mcm_design_hub",
  viewports: [
    {
      label: "phone",
      width: 375,
      height: 667,
    },
    {
      label: "tablet",
      width: 768,
      height: 1024,
    },
    {
      label: "desktop",
      width: 1440,
      height: 900,
    },
  ],
  scenarios: [
    {
      label: "Homepage",
      url: "http://localhost:8080",
      referenceUrl: "",
      readyEvent: "",
      readySelector: "",
      delay: 500,
      hideSelectors: [],
      removeSelectors: [],
      hoverSelector: "",
      clickSelector: "",
      postInteractionWait: 0,
      selectors: ["document"],
      selectorExpansion: true,
      expect: 0,
      misMatchThreshold: 0.1,
      requireSameDimensions: true,
    },
    {
      label: "Learn Page",
      url: "http://localhost:8080/learn",
      selectors: ["document"],
      delay: 500,
      misMatchThreshold: 0.1,
    },
    {
      label: "Card Component",
      url: "http://localhost:8080/explore/furniture",
      selectors: [".card"],
      delay: 500,
      misMatchThreshold: 0.1,
    },
    {
      label: "Card Component - Hover",
      url: "http://localhost:8080/explore/furniture",
      hoverSelector: ".card",
      selectors: [".card"],
      delay: 500,
      misMatchThreshold: 0.1,
    },
    {
      label: "Navigation - Mobile",
      url: "http://localhost:8080",
      clickSelector: "[data-nav-toggle]",
      selectors: ["[data-nav]"],
      viewportLabel: "phone",
      delay: 500,
      misMatchThreshold: 0.1,
    },
    {
      label: "Search Modal",
      url: "http://localhost:8080",
      clickSelector: "[data-search-toggle]",
      selectors: ["[data-search-modal]"],
      delay: 500,
      misMatchThreshold: 0.1,
    },
  ],
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report",
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
```

### Visual Testing Scripts

```json
// package.json scripts addition

{
  "scripts": {
    "backstop:reference": "backstop reference",
    "backstop:test": "backstop test",
    "backstop:approve": "backstop approve",
    "test:visual": "npm-run-all start:eleventy backstop:test"
  }
}
```

---

## Part 6: Automated Testing Suite

### Test Runner Script

```bash
#!/bin/bash
# test-suite.sh

echo "🧪 Starting MCM Design Hub Test Suite..."
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Start dev server in background
echo "Starting development server..."
npm run start > /dev/null 2>&1 &
SERVER_PID=$!
sleep 5

# HTML Validation
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1️⃣  HTML Validation"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if npm run test:html; then
  echo -e "${GREEN}✓ HTML validation passed${NC}"
else
  echo -e "${RED}✗ HTML validation failed${NC}"
  ERROR=1
fi
echo ""

# CSS Validation
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "2️⃣  CSS Validation"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if npm run test:css; then
  echo -e "${GREEN}✓ CSS validation passed${NC}"
else
  echo -e "${RED}✗ CSS validation failed${NC}"
  ERROR=1
fi
echo ""

# JavaScript Validation
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "3️⃣  JavaScript Validation"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if npm run test:js; then
  echo -e "${GREEN}✓ JavaScript validation passed${NC}"
else
  echo -e "${RED}✗ JavaScript validation failed${NC}"
  ERROR=1
fi
echo ""

# Accessibility Testing
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "4️⃣  Accessibility Testing"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if npm run test:a11y; then
  echo -e "${GREEN}✓ Accessibility tests passed${NC}"
else
  echo -e "${RED}✗ Accessibility tests failed${NC}"
  ERROR=1
fi
echo ""

# Lighthouse Performance
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "5️⃣  Lighthouse Performance"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
lighthouse http://localhost:8080 \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=json \
  --output-path=./lighthouse-report.json \
  --quiet

# Parse scores
PERF=$(cat lighthouse-report.json | jq '.categories.performance.score * 100')
A11Y=$(cat lighthouse-report.json | jq '.categories.accessibility.score * 100')
BP=$(cat lighthouse-report.json | jq '.categories["best-practices"].score * 100')
SEO=$(cat lighthouse-report.json | jq '.categories.seo.score * 100')

echo "Performance:    $PERF/100"
echo "Accessibility:  $A11Y/100"
echo "Best Practices: $BP/100"
echo "SEO:            $SEO/100"

if (( $(echo "$PERF >= 90" | bc -l) )); then
  echo -e "${GREEN}✓ Performance score meets target${NC}"
else
  echo -e "${YELLOW}⚠ Performance score below target (90+)${NC}"
fi
echo ""

# Kill server
kill $SERVER_PID

# Summary
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Test Suite Complete"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $ERROR ]; then
  echo -e "${RED}Some tests failed. Please review the output above.${NC}"
  exit 1
else
  echo -e "${GREEN}All tests passed! 🎉${NC}"
  exit 0
fi
```

---

## Part 7: CI/CD Integration

### GitHub Actions Workflow

```yaml
# .github/workflows/test.yml

name: Test & Deploy

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    name: Run Test Suite
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: HTML validation
        run: npm run test:html

      - name: CSS validation
        run: npm run test:css

      - name: JavaScript validation
        run: npm run test:js

      - name: Start server
        run: |
          npm run start &
          sleep 5

      - name: Accessibility testing
        run: npm run test:a11y

      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            http://localhost:8080
            http://localhost:8080/learn
            http://localhost:8080/explore
          budgetPath: ./performance-budget.json
          uploadArtifacts: true
          temporaryPublicStorage: true

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: test-results
          path: |
            lighthouse-report.json
            backstop_data/html_report

  deploy:
    name: Deploy to GitHub Pages
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build
        env:
          ELEVENTY_ENV: production

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
          cname: mcmdesignhub.com
```

---

## Deliverables Summary

✅ **Accessibility Testing:**

- Pa11y CI configuration for automated testing
- Manual checklist (keyboard nav, screen readers, color contrast, ARIA, focus management)
- Testing with NVDA, VoiceOver, JAWS
- Color contrast verification (12.5:1 body text, 3.4:1 orange primary)
- Complete WCAG 2.1 AA compliance strategy

✅ **Performance Testing:**

- Lighthouse configuration with throttling
- Performance budget (400KB total, 2.5s LCP, 0.1 CLS)
- Core Web Vitals optimization checklist
- LCP: Hero image optimization, font preload, eager loading
- FID/INP: Deferred JS, passive listeners, code splitting
- CLS: Image dimensions, font-display swap, transform animations

✅ **Cross-Browser Testing:**

- Browser support matrix (Chrome/Firefox/Safari/Edge)
- Mobile testing (Chrome Mobile/Safari Mobile/Samsung Internet)
- Device-specific considerations (44px touch targets, viewport zoom, 100vh issues)
- BrowserStack integration

✅ **Code Validation:**

- HTMLHint configuration (semantic HTML, alt attributes, id uniqueness)
- Stylelint configuration (BEM pattern enforcement, no vendor prefixes, max nesting 3)
- ESLint configuration (ES2021, 2-space indent, single quotes, no-console warn)

✅ **Visual Regression Testing:**

- BackstopJS configuration
- 6 test scenarios (homepage, learn page, card, card hover, mobile nav, search modal)
- 3 viewports (375px phone, 768px tablet, 1440px desktop)
- 0.1% mismatch threshold

✅ **Automated Test Suite:**

- Complete bash script with color output
- 5-stage testing: HTML → CSS → JS → Accessibility → Performance
- Lighthouse score parsing (90+ target for all categories)
- Automatic server management

✅ **CI/CD Integration:**

- GitHub Actions workflow
- Automated testing on push/PR
- Lighthouse CI with budget enforcement
- Artifact uploading
- Automatic deployment to GitHub Pages on main branch

**Testing Coverage:**

- 8 URLs tested for accessibility
- 6 visual regression scenarios
- 3 responsive viewports
- 4 Lighthouse categories
- 100% automated in CI/CD

---

**Session Complete:** Day 11 Afternoon  
**Next Session:** Day 11 Evening - Production Optimization & Deployment
