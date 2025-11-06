# Mid-Century Modern Production Methods & Performance

**Day 5 Evening Session:** Scale, Efficiency & Optimization  
**Created:** November 5, 2025  
**Purpose:** Apply MCM production efficiency principles to web performance optimization

---

## Part 1: Assembly Line Production

### Ford-Inspired Furniture Manufacturing

**Historical Context:**

- **Problem**: Hand-crafted furniture = expensive, slow
- **Solution**: Assembly line = affordable, fast
- **Result**: Middle class could afford good design

**The Process:**

1. **Standardized Parts**: Every DCM chair leg identical
2. **Specialized Workers**: Each person does one task well
3. **Sequential Stations**: Part moves from station to station
4. **Quality Checkpoints**: Inspect at each stage
5. **Final Assembly**: All parts come together

**Web Development Parallel: Build Pipeline**

```javascript
// Traditional approach (hand-crafted every time)
function buildPageManually() {
  const html = writeHTML();
  const css = writeCSS();
  const js = writeJS();
  const images = optimizeImages();
  const deploy = uploadFiles();
  // Every build = start from scratch
}

// Assembly line approach (automated pipeline)
// package.json scripts
{
  "scripts": {
    // Station 1: Clean
    "clean": "rm -rf dist",

    // Station 2: Build HTML (Eleventy)
    "build:html": "eleventy --input=src --output=dist",

    // Station 3: Build CSS
    "build:css": "postcss src/css/main.css -o dist/css/main.css",

    // Station 4: Build JS
    "build:js": "esbuild src/js/main.js --bundle --minify --outfile=dist/js/main.js",

    // Station 5: Optimize Images
    "build:images": "imagemin src/images/* --out-dir=dist/images",

    // Station 6: Quality Check
    "test": "npm run test:html && npm run test:css && npm run test:a11y",
    "test:html": "html-validate dist/**/*.html",
    "test:css": "stylelint 'src/css/**/*.css'",
    "test:a11y": "pa11y-ci dist/**/*.html",

    // Final Assembly: Run all stations in sequence
    "build": "npm run clean && npm run build:html && npm run build:css && npm run build:js && npm run build:images && npm run test",

    // Production deployment
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

**GitHub Actions CI/CD Pipeline (Assembly Line):**

```yaml
# .github/workflows/build.yml
name: Assembly Line Production

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      # Station 1: Get raw materials (code)
      - name: Checkout code
        uses: actions/checkout@v3

      # Station 2: Set up tools (Node)
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      # Station 3: Install dependencies
      - name: Install dependencies
        run: npm ci

      # Station 4: Run tests (quality check)
      - name: Run tests
        run: npm test

      # Station 5: Build site
      - name: Build site
        run: npm run build

      # Station 6: Deploy (ship finished product)
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**Key Principle: Automate Everything Repetitive**

```javascript
// .eleventy.js - Production automation
module.exports = function (eleventyConfig) {
  // Automated image optimization (like machine stamping)
  eleventyConfig.addPlugin(require("@11ty/eleventy-img"), {
    widths: [320, 640, 960, 1280],
    formats: ["webp", "avif", "jpeg"],
    outputDir: "./dist/images/",
    // Process once, use everywhere
  });

  // Automated minification (like compression molding)
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return require("html-minifier").minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        // Automated optimization
      });
    }
    return content;
  });

  // Automated critical CSS inline (like pre-assembly)
  eleventyConfig.addTransform(
    "critical-css",
    async function (content, outputPath) {
      if (outputPath && outputPath.endsWith(".html")) {
        const critical = await require("critical").generate({
          inline: true,
          base: "dist/",
          html: content,
          width: 375,
          height: 667,
          // Inline critical CSS automatically
        });
        return critical.html;
      }
      return content;
    }
  );
};
```

---

## Part 2: Modular Parts System

### Interchangeable Components

**MCM Innovation:**

- **Eames Storage Units (ESU)**: Mix & match panels, legs, drawers
- **Nelson Desk**: Choose wood, metal, or laminate top
- **Modular Seating**: Sections combine endlessly

**Advantages:**

1. **Reduced SKUs**: Fewer unique parts to manufacture
2. **Customer Choice**: Customize without custom manufacturing
3. **Inventory**: Stock standard parts, not finished products
4. **Repairs**: Replace individual parts, not whole unit

**Web Development Parallel: Component Library**

```javascript
// Component parts (like furniture components)
// Button.js
export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  ...props
}) {
  const variants = {
    primary: 'bg-orange text-white',
    secondary: 'bg-teal text-white',
    outline: 'border-2 border-gray bg-transparent',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${variants[variant]} ${sizes[size]} rounded-lg font-semibold transition`}
      {...props}
    >
      {children}
    </button>
  );
}

// Card.js
export default function Card({
  children,
  material = 'paper',
  elevated = false,
  ...props
}) {
  const materials = {
    paper: 'bg-white',
    wood: 'bg-gradient-to-br from-teak-light to-teak-dark',
    glass: 'bg-white/10 backdrop-blur-lg',
  };

  const elevation = elevated
    ? 'shadow-lg'
    : 'shadow-md';

  return (
    <div
      className={`${materials[material]} ${elevation} rounded-xl p-6`}
      {...props}
    >
      {children}
    </div>
  );
}

// "Assemble" custom pages from standard parts
function ProductPage() {
  return (
    <Card material="wood" elevated={true}>
      <h2>Premium Product</h2>
      <p>Description...</p>
      <Button variant="primary" size="large">
        Buy Now
      </Button>
    </Card>
  );
}

function BlogPost() {
  return (
    <Card material="paper">
      <h2>Blog Title</h2>
      <p>Content...</p>
      <Button variant="outline" size="small">
        Read More
      </Button>
    </Card>
  );
}

// Same components, infinite combinations
```

**Design Tokens (Standard Parts):**

```javascript
// tokens.js - The "parts catalog"
export const tokens = {
  // Standard spacing (like leg heights)
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "4rem",
  },

  // Standard colors (like Formica color options)
  colors: {
    primary: {
      orange: "#FF6B35",
      teal: "#1FB7C8",
    },
    neutral: {
      white: "#FFFFFF",
      offWhite: "#FAFAFA",
      gray: "#8B8589",
      darkGray: "#3E3E3E",
      black: "#000000",
    },
    wood: {
      teak: "#B87333",
      walnut: "#5C4033",
      birch: "#F5E6D3",
    },
  },

  // Standard sizes (like drawer dimensions)
  sizes: {
    button: {
      small: { padding: "0.5rem 1rem", fontSize: "0.875rem" },
      medium: { padding: "0.75rem 1.5rem", fontSize: "1rem" },
      large: { padding: "1rem 2rem", fontSize: "1.125rem" },
    },
    card: {
      compact: { padding: "1rem", gap: "0.5rem" },
      standard: { padding: "1.5rem", gap: "1rem" },
      spacious: { padding: "2rem", gap: "1.5rem" },
    },
  },

  // Standard effects (like finishes)
  effects: {
    shadow: {
      sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
      md: "0 4px 8px rgba(0, 0, 0, 0.1)",
      lg: "0 8px 16px rgba(0, 0, 0, 0.15)",
    },
    radius: {
      sm: "0.25rem",
      md: "0.5rem",
      lg: "1rem",
      xl: "2rem",
    },
  },
};

// Use tokens everywhere (like using standard parts)
const ButtonStyle = {
  padding: tokens.sizes.button.medium.padding,
  backgroundColor: tokens.colors.primary.orange,
  color: tokens.colors.neutral.white,
  borderRadius: tokens.effects.radius.lg,
  boxShadow: tokens.effects.shadow.md,
};
```

---

## Part 3: Quality at Scale

### Herman Miller's Quality Standards

**Manufacturing Quality Control:**

1. **Material Inspection**: Every batch checked
2. **In-Process Inspection**: Check during production
3. **Final Inspection**: 100% of products inspected
4. **Testing**: Load tests, durability tests
5. **Documentation**: Track defects, improve process

**Web Development Parallel: Testing Strategy**

```javascript
// 1. Material Inspection (Linting)
// .eslintrc.js
module.exports = {
  extends: ["eslint:recommended"],
  rules: {
    "no-unused-vars": "error",
    "no-console": "warn",
    "prefer-const": "error",
    // Check "raw materials" (code quality)
  },
};

// 2. In-Process Inspection (Unit Tests)
// Button.test.js
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  test("renders correctly", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies correct variant styles", () => {
    const { container } = render(<Button variant="primary">Click</Button>);
    expect(container.firstChild).toHaveClass("bg-orange");
  });
});

// 3. Final Inspection (Integration Tests)
// Page.test.js
describe("Product Page", () => {
  test("displays product information", () => {
    const { getByText } = render(<ProductPage />);
    expect(getByText("Premium Product")).toBeInTheDocument();
  });

  test("button triggers purchase flow", async () => {
    const { getByText } = render(<ProductPage />);
    fireEvent.click(getByText("Buy Now"));
    await waitFor(() => {
      expect(getByText("Added to cart")).toBeInTheDocument();
    });
  });
});

// 4. Load Testing (Performance)
// lighthouse.test.js
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

async function runLighthouse(url) {
  const chrome = await chromeLauncher.launch();
  const options = {
    port: chrome.port,
    onlyCategories: ["performance", "accessibility", "best-practices"],
  };

  const result = await lighthouse(url, options);
  await chrome.kill();

  // Quality standards (like Herman Miller specs)
  expect(result.lhr.categories.performance.score).toBeGreaterThan(0.9);
  expect(result.lhr.categories.accessibility.score).toBe(1.0);
  expect(result.lhr.categories["best-practices"].score).toBe(1.0);
}

test("Homepage meets performance standards", async () => {
  await runLighthouse("http://localhost:8080");
});

// 5. Documentation (Error Tracking)
// sentry.js
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: process.env.NODE_ENV,
  // Track defects in production
  beforeSend(event, hint) {
    // Log error details for analysis
    console.error("Error captured:", hint.originalException);
    return event;
  },
});
```

**Continuous Monitoring (Quality Assurance):**

```javascript
// Real User Monitoring (RUM)
// performance.js
export function trackPerformance() {
  // Core Web Vitals (like furniture stress tests)
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const { name, startTime, duration } = entry;

      // Track metrics
      if (name === "first-contentful-paint") {
        // Like checking first impression of furniture
        console.log("FCP:", duration, "ms");
        analytics.track("FCP", { duration });
      }

      if (name === "largest-contentful-paint") {
        // Like checking main visual element
        console.log("LCP:", startTime, "ms");
        analytics.track("LCP", { startTime });
      }
    }
  });

  observer.observe({ entryTypes: ["paint", "largest-contentful-paint"] });

  // Cumulative Layout Shift (like wobble test)
  let cumulativeLayoutShift = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) {
        cumulativeLayoutShift += entry.value;
      }
    }
  });
  clsObserver.observe({ entryTypes: ["layout-shift"] });

  // First Input Delay (like button press test)
  const fidObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const fid = entry.processingStart - entry.startTime;
      console.log("FID:", fid, "ms");
      analytics.track("FID", { fid });
    }
  });
  fidObserver.observe({ entryTypes: ["first-input"] });
}
```

---

## Part 4: Efficient Material Usage

### Minimizing Waste

**MCM Principle:**

- **Plywood**: No waste - use every piece
- **Bent Metal**: Minimal material for maximum strength
- **Modular**: Standard sizes reduce cuts/waste

**Web Development Parallel: Performance Budget**

```javascript
// Performance budget (like material budget)
// budget.json
{
  "resourceSizes": [
    {
      "resourceType": "document",
      "budget": 18 // KB (HTML should be tiny)
    },
    {
      "resourceType": "stylesheet",
      "budget": 50 // KB (CSS should be minimal)
    },
    {
      "resourceType": "script",
      "budget": 100 // KB (JS should be lean)
    },
    {
      "resourceType": "image",
      "budget": 200 // KB per image (optimized)
    },
    {
      "resourceType": "total",
      "budget": 500 // KB total (entire page)
    }
  ],
  "resourceCounts": [
    {
      "resourceType": "third-party",
      "budget": 5 // Limit external dependencies
    }
  ]
}

// Enforce in CI/CD
{
  "scripts": {
    "test:budget": "lighthouse --budget-path=budget.json --chrome-flags='--headless' http://localhost:8080"
  }
}
```

**Tree Shaking (Eliminate Unused Material):**

```javascript
// Import only what you need (like cutting exact plywood size)

// ❌ Wasteful (imports entire library)
import _ from "lodash";
const result = _.map(array, fn);
// Bundle size: 70KB

// ✅ Efficient (import only needed function)
import map from "lodash/map";
const result = map(array, fn);
// Bundle size: 3KB

// Even better: Use native methods
const result = array.map(fn);
// Bundle size: 0KB (built-in)
```

**Code Splitting (Ship Only What's Needed):**

```javascript
// Don't ship entire warehouse, ship only ordered parts

// ❌ Bundle everything together
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProductPage from "./ProductPage";
import AdminPanel from "./AdminPanel";
// User loads ALL code, even admin panel they can't access

// ✅ Split by route (lazy loading)
const HomePage = React.lazy(() => import("./HomePage"));
const AboutPage = React.lazy(() => import("./AboutPage"));
const ProductPage = React.lazy(() => import("./ProductPage"));
const AdminPanel = React.lazy(() => import("./AdminPanel"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Suspense>
  );
}
// Each route loads only its code
```

**Image Optimization (Like Material Efficiency):**

```javascript
// .eleventy.js
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes = "100vw") {
  // Generate multiple sizes (like cutting plywood efficiently)
  let metadata = await Image(src, {
    widths: [320, 640, 960, 1280],
    formats: ["avif", "webp", "jpeg"],
    outputDir: "./dist/images/",
    // AVIF: 50% smaller than JPEG
    // WebP: 30% smaller than JPEG
    // Ship smallest format browser supports
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

// Usage
// Input: 2MB JPEG
// Output: 50KB AVIF (96% reduction - minimal waste!)
```

---

## Part 5: Rapid Deployment

### From Factory to Customer

**MCM Distribution:**

1. **Factory**: Produce in bulk
2. **Warehouse**: Central distribution
3. **Showrooms**: Display models
4. **Delivery**: Ship to customer
5. **Assembly**: Customer or installer assembles

**Web Development Parallel: Deployment Pipeline**

```javascript
// Multi-stage deployment (like distribution network)

// 1. Build (Factory Production)
"build": "npm run clean && npm run build:all && npm run test"

// 2. Staging (Warehouse/Quality Check)
// netlify.toml
[context.deploy-preview]
  command = "npm run build"
  publish = "dist"
[context.deploy-preview.environment]
  NODE_ENV = "staging"

// 3. Preview (Showroom)
// Netlify creates preview URL for every PR
// https://deploy-preview-123--mysite.netlify.app

// 4. Production Deploy (Ship to Customer)
[context.production]
  command = "npm run build"
  publish = "dist"
[context.production.environment]
  NODE_ENV = "production"

// 5. CDN Distribution (Regional Warehouses)
// Cloudflare/Netlify Edge caches site globally
// User in Tokyo gets served from Tokyo
// User in NYC gets served from NYC
```

**Docker Deployment (Flat-Pack Shipping):**

```dockerfile
# Dockerfile - "Flat-pack" your site
# Multi-stage build (efficient like flat-pack)

# Stage 1: Build (Factory)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production (Ship only finished product)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Result: 25MB image instead of 500MB
# Like shipping assembled furniture (500lbs) vs flat-pack (50lbs)
```

**Kubernetes Scaling (Multiple Factories):**

```yaml
# deployment.yml - Scale production capacity
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mcm-website
spec:
  # Like having multiple factories
  replicas: 3
  selector:
    matchLabels:
      app: mcm-website
  template:
    metadata:
      labels:
        app: mcm-website
    spec:
      containers:
        - name: nginx
          image: mcm-website:latest
          resources:
            limits:
              # Prevent overproduction (resource limits)
              memory: "128Mi"
              cpu: "500m"
          ports:
            - containerPort: 80

---
# service.yml - Distribution center
apiVersion: v1
kind: Service
metadata:
  name: mcm-website-service
spec:
  type: LoadBalancer
  selector:
    app: mcm-website
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  # Distributes traffic across all replicas
  # Like routing orders to nearest warehouse
```

---

## Part 6: Iterative Improvement

### Continuous Refinement

**MCM Process:**

- Eames tested DCM chair for 2+ years
- Multiple prototypes
- User feedback incorporated
- Continuous improvement even after launch

**Web Development Parallel: A/B Testing & Analytics**

```javascript
// analytics.js - Track usage like furniture testing
export function trackUsage() {
  // Which "model" performs better?
  if (Math.random() < 0.5) {
    // Variant A: Orange button
    document.querySelector(".cta").classList.add("btn-orange");
    analytics.track("Variant", { version: "A" });
  } else {
    // Variant B: Teal button
    document.querySelector(".cta").classList.add("btn-teal");
    analytics.track("Variant", { version: "B" });
  }

  // Track "stress tests" (user interactions)
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (e) => {
      analytics.track("Button Click", {
        label: e.target.textContent,
        location: e.target.closest("section")?.id,
      });
    });
  });

  // Track "comfort" (scroll depth)
  let maxScroll = 0;
  window.addEventListener("scroll", () => {
    const scrollPercent = (window.scrollY / document.body.scrollHeight) * 100;
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      if (scrollPercent > 25) analytics.track("Scroll", { depth: "25%" });
      if (scrollPercent > 50) analytics.track("Scroll", { depth: "50%" });
      if (scrollPercent > 75) analytics.track("Scroll", { depth: "75%" });
      if (scrollPercent > 90) analytics.track("Scroll", { depth: "90%" });
    }
  });
}

// Analyze and iterate
// If orange button gets 2x clicks, make it default
// Like Eames choosing best prototype for production
```

**Feature Flags (Phased Rollout):**

```javascript
// featureFlags.js
export const features = {
  // Test new "model" with small group first
  newCheckoutFlow: {
    enabled: process.env.FEATURE_NEW_CHECKOUT === "true",
    rollout: 0.1, // 10% of users
  },
  materialTextures: {
    enabled: true,
    rollout: 1.0, // 100% (production-ready)
  },
  experimentalLayout: {
    enabled: false,
    rollout: 0, // Still in prototype phase
  },
};

export function isFeatureEnabled(featureName) {
  const feature = features[featureName];
  if (!feature.enabled) return false;
  return Math.random() < feature.rollout;
}

// Usage
function CheckoutPage() {
  const useNewFlow = isFeatureEnabled("newCheckoutFlow");

  return useNewFlow ? (
    <NewCheckoutFlow /> // Test with 10% of users
  ) : (
    <LegacyCheckoutFlow />
  ); // Stable version for 90%
}
```

---

## Part 7: Longevity & Maintenance

### Built to Last

**MCM Quality:**

- Herman Miller: 12-year warranty
- Knoll: Lifetime warranty on some pieces
- Design for repair: Replace parts, not whole unit
- Timeless design: Still relevant 70 years later

**Web Development Parallel: Sustainable Architecture**

```javascript
// Maintainable code (like repairable furniture)

// ❌ Hard to maintain (like glued furniture)
function processUserData(data) {
  const result = data
    .map((u) => {
      return {
        name: u.firstName + " " + u.lastName,
        age: new Date().getFullYear() - new Date(u.birthDate).getFullYear(),
        status: u.isActive
          ? "Active"
          : u.lastLogin > Date.now() - 30 * 24 * 60 * 60 * 1000
          ? "Recent"
          : "Inactive",
      };
    })
    .filter((u) => u.age >= 18)
    .sort((a, b) => b.age - a.age);
  return result;
}
// Can't easily modify or test individual steps

// ✅ Easy to maintain (like modular furniture)
function formatFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

function calculateAge(birthDate) {
  const birth = new Date(birthDate);
  const today = new Date();
  return today.getFullYear() - birth.getFullYear();
}

function getUserStatus(user) {
  if (user.isActive) return "Active";

  const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
  return user.lastLogin > thirtyDaysAgo ? "Recent" : "Inactive";
}

function processUserData(data) {
  return data
    .map((user) => ({
      name: formatFullName(user),
      age: calculateAge(user.birthDate),
      status: getUserStatus(user),
    }))
    .filter((user) => user.age >= 18)
    .sort((a, b) => b.age - a.age);
}
// Each function is a replaceable "part"
// Can test, modify, or replace independently
```

**Documentation (Maintenance Manual):**

```javascript
/**
 * Button Component
 *
 * A reusable button following MCM design principles.
 * Like furniture assembly instructions - clear, complete.
 *
 * @param {string} children - Button text
 * @param {string} variant - Style variant: 'primary' | 'secondary' | 'outline'
 * @param {string} size - Size: 'small' | 'medium' | 'large'
 * @param {function} onClick - Click handler
 *
 * @example
 * // Primary button (orange, most prominent)
 * <Button variant="primary" size="large" onClick={handleSubmit}>
 *   Submit Form
 * </Button>
 *
 * @example
 * // Secondary button (teal, less prominent)
 * <Button variant="secondary" size="medium" onClick={handleCancel}>
 *   Cancel
 * </Button>
 *
 * @example
 * // Outline button (minimal, tertiary action)
 * <Button variant="outline" size="small" onClick={handleInfo}>
 *   Learn More
 * </Button>
 */
export default function Button({ children, variant, size, onClick }) {
  // Implementation...
}
```

**Semantic Versioning (Model Years):**

```json
// package.json
{
  "name": "mcm-design-system",
  "version": "2.1.4",
  // 2 = Major version (breaking changes, like new chair model)
  // 1 = Minor version (new features, like new color option)
  // 4 = Patch version (bug fixes, like tightening bolt)

  "dependencies": {
    "@11ty/eleventy": "^3.0.0"
    // ^ = Compatible updates (3.0.0 to 3.9.9)
    // Like accepting replacement parts from same manufacturer
  }
}
```

---

## Part 8: Complete Production System

### End-to-End Efficiency

**Complete Build & Deploy Pipeline:**

```javascript
// package.json - Complete production system
{
  "name": "mcm-website",
  "version": "1.0.0",
  "scripts": {
    // Development (Prototype workshop)
    "dev": "npm-run-all --parallel dev:*",
    "dev:eleventy": "eleventy --serve --watch",
    "dev:css": "postcss src/css/main.css -o dist/css/main.css --watch",

    // Build (Factory production)
    "clean": "rm -rf dist",
    "build": "npm run clean && npm-run-all build:*",
    "build:eleventy": "eleventy --input=src --output=dist",
    "build:css": "postcss src/css/main.css -o dist/css/main.css --minify",
    "build:js": "esbuild src/js/main.js --bundle --minify --outfile=dist/js/main.js",
    "build:images": "node scripts/optimize-images.js",

    // Quality control
    "test": "npm-run-all test:*",
    "test:lint": "eslint src/**/*.js",
    "test:css": "stylelint 'src/css/**/*.css'",
    "test:html": "html-validate 'dist/**/*.html'",
    "test:a11y": "pa11y-ci 'dist/**/*.html'",
    "test:lighthouse": "lighthouse http://localhost:8080 --view",
    "test:budget": "lighthouse --budget-path=budget.json http://localhost:8080",

    // Deployment (Distribution)
    "predeploy": "npm run build && npm run test",
    "deploy": "gh-pages -d dist",
    "deploy:staging": "netlify deploy --dir=dist",
    "deploy:production": "netlify deploy --dir=dist --prod"
  },
  "devDependencies": {
    "@11ty/eleventy": "^3.0.0",
    "@11ty/eleventy-img": "^4.0.0",
    "postcss": "^8.4.31",
    "postcss-cli": "^10.1.0",
    "autoprefixer": "^10.4.16",
    "cssnano": "^6.0.1",
    "esbuild": "^0.19.5",
    "eslint": "^8.52.0",
    "stylelint": "^15.11.0",
    "html-validate": "^8.7.0",
    "pa11y-ci": "^3.1.0",
    "lighthouse": "^11.3.0",
    "npm-run-all": "^4.1.5",
    "gh-pages": "^6.0.0"
  }
}
```

---

## Deliverables Summary

✅ **Production Methods:**

1. Assembly Line Production → Build pipelines (CI/CD)
2. Modular Parts System → Component libraries + design tokens
3. Quality at Scale → Automated testing (unit, integration, E2E, performance)
4. Efficient Material Usage → Performance budgets, tree shaking, code splitting
5. Rapid Deployment → Docker, Kubernetes, CDN distribution
6. Iterative Improvement → A/B testing, feature flags, analytics
7. Longevity & Maintenance → Modular code, documentation, semantic versioning

✅ **Complete Systems:**

- Full npm scripts setup (20+ commands)
- GitHub Actions CI/CD pipeline
- Docker multi-stage build
- Kubernetes deployment config
- Testing strategy (5 types)
- Performance monitoring (Core Web Vitals)
- Feature flag system
- Analytics implementation

✅ **Optimization Techniques:**

- Performance budgets (500KB total page weight)
- Tree shaking (70KB → 3KB lodash example)
- Code splitting (lazy loading routes)
- Image optimization (2MB → 50KB AVIF)
- Critical CSS inlining
- HTML minification

✅ **Quality Assurance:**

- Linting (ESLint, Stylelint, HTML-validate)
- Unit tests (component testing)
- Integration tests (page testing)
- Performance tests (Lighthouse automation)
- Accessibility tests (Pa11y)
- Real User Monitoring (Core Web Vitals)

**Code Examples:** 30+ production patterns  
**Complete Configs:** 8 full configuration files  
**Performance Gains:** 96% image optimization, 95%+ bundle reduction techniques

---

**Day 5 Complete!** 🎉

**Total Deliverables Today:**

- Morning: 6 manufacturing innovations with web parallels
- Afternoon: 17 material textures with CSS implementations
- Evening: 7 production methods with complete automation

**Next:** Day 6 - Graphic Design & Visual Communication

---

**Session Complete:** Day 5 Evening  
**Sprint Progress:** 5 of 12 days complete (41.7%)  
**Next Session:** Day 6 Morning - MCM Graphics & Pattern Design
