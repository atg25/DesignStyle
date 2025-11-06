# Technical Specification: IS117 Portfolio Analysis

**Project Analyzed:** is117_portfolio by kaw393939  
**Analysis Date:** November 5, 2025  
**Purpose:** Extract technologies, best practices, and architectural patterns for Mid-Century Modern design project

---

## Executive Summary

The IS117 Portfolio is a production-ready, professional portfolio website that achieves **perfect 100% Lighthouse scores** across all categories (Performance, Accessibility, Best Practices, SEO). This specification documents the complete technology stack, architectural decisions, development workflow, and best practices that can be adapted for our Mid-Century Modern design project.

**Key Achievement Metrics:**

- Performance: 100%
- Accessibility: 100% (WCAG AA compliant)
- Best Practices: 100%
- SEO: 100%
- Core Web Vitals: FCP 1.4s, LCP 1.4s, CLS 0.003

---

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Project Architecture](#project-architecture)
3. [Build System & Configuration](#build-system--configuration)
4. [Docker Implementation](#docker-implementation)
5. [CI/CD Pipeline](#cicd-pipeline)
6. [Performance Optimization Techniques](#performance-optimization-techniques)
7. [Accessibility Implementation](#accessibility-implementation)
8. [CSS Architecture](#css-architecture)
9. [JavaScript Implementation](#javascript-implementation)
10. [Content Management Strategy](#content-management-strategy)
11. [Development Workflow](#development-workflow)
12. [Best Practices & Patterns](#best-practices--patterns)
13. [Recommendations for Mid-Century Modern Project](#recommendations-for-mid-century-modern-project)

---

## 1. Technology Stack

### Core Technologies

| Category                  | Technology      | Version | Purpose                                            |
| ------------------------- | --------------- | ------- | -------------------------------------------------- |
| **Static Site Generator** | Eleventy (11ty) | 3.0.0+  | Transforms templates and content into static HTML  |
| **Templating Engine**     | Nunjucks        | Latest  | Dynamic HTML generation with logic and includes    |
| **Styling**               | Vanilla CSS3    | -       | Custom properties, modern layout (Grid/Flexbox)    |
| **JavaScript**            | Vanilla ES6+    | -       | Progressive enhancement, no framework dependencies |
| **Build Tool**            | Node.js         | 18+     | Runtime for build process                          |
| **Package Manager**       | npm             | Latest  | Dependency management                              |

### Development & Deployment

| Category                    | Technology     | Purpose                              |
| --------------------------- | -------------- | ------------------------------------ |
| **Containerization**        | Docker         | Consistent development environment   |
| **Container Orchestration** | Docker Compose | Multi-environment setup (dev/prod)   |
| **Web Server (Production)** | Nginx Alpine   | High-performance static file serving |
| **CI/CD**                   | GitHub Actions | Automated build and deployment       |
| **Hosting**                 | GitHub Pages   | Free, reliable static site hosting   |
| **Version Control**         | Git/GitHub     | Source control and collaboration     |

### Development Tools

| Tool            | Purpose                                  |
| --------------- | ---------------------------------------- |
| **VS Code**     | Primary IDE with workspace configuration |
| **Prettier**    | Code formatting                          |
| **Markdown-it** | Markdown parsing (v14.1.0)               |
| **Live Reload** | Development server with hot reloading    |
| **Make**        | Command automation and shortcuts         |

---

## 2. Project Architecture

### Directory Structure

```
is117_portfolio/
├── .github/                          # GitHub-specific configurations
│   ├── workflows/
│   │   └── deploy.yml               # Automated deployment workflow
│   └── copilot-instructions.md      # AI assistant context and guidelines
│
├── .vscode/                         # VS Code workspace settings
│   ├── settings.json                # Editor configuration (formatting, validation)
│   ├── tasks.json                   # Build tasks for VS Code
│   └── extensions.json              # Recommended extensions
│
├── src/                             # Source files (Eleventy input directory)
│   ├── _data/                       # Global data files
│   │   └── site.json               # Site metadata (title, author, URLs, social)
│   │
│   ├── _layouts/                    # Nunjucks template layouts
│   │   ├── base.njk                # Base HTML structure (all pages extend this)
│   │   ├── post.njk                # Blog post template
│   │   └── project.njk             # Project showcase template
│   │
│   ├── blog/                        # Blog content
│   │   ├── index.njk               # Blog listing page with pagination
│   │   └── *.md                    # Individual blog posts (Markdown)
│   │
│   ├── projects/                    # Portfolio projects
│   │   ├── index.njk               # Projects listing page
│   │   └── *.md                    # Individual project pages (Markdown)
│   │
│   ├── css/                         # Stylesheets
│   │   └── main.css                # Single CSS file with custom properties
│   │
│   ├── js/                          # Client-side JavaScript
│   │   └── main.js                 # Navigation, interactions, enhancements
│   │
│   ├── images/                      # Image assets (copied to output)
│   ├── assets/                      # Other assets (fonts, files, etc.)
│   ├── favicon.svg                  # Site favicon (SVG format)
│   ├── index.njk                    # Homepage template
│   └── about.njk                    # About page template
│
├── _site/                           # Generated static site (git ignored)
│
├── .eleventy.js                     # Eleventy configuration file
├── package.json                     # Node.js dependencies and scripts
├── package-lock.json                # Locked dependency versions
│
├── Dockerfile                       # Multi-stage production build
├── Dockerfile.dev                   # Development container with live reload
├── docker-compose.yml               # Docker Compose services and profiles
├── nginx.conf                       # Nginx configuration for production
├── Makefile                         # Command shortcuts (make dev, make prod)
│
├── .gitignore                       # Git ignore patterns (92 entries)
├── .dockerignore                    # Docker ignore patterns
├── .env.example                     # Environment variables template
│
├── README.md                        # Comprehensive project documentation
├── DOCKER.md                        # Detailed Docker setup guide
└── DOCKER_QUICK_START.md            # Quick Docker reference
```

### Architectural Principles

1. **Static Site Generation**: All pages pre-rendered at build time for maximum performance
2. **Separation of Concerns**: Content (Markdown), presentation (Nunjucks), styling (CSS), behavior (JS)
3. **Progressive Enhancement**: Core content works without JavaScript, enhanced with JS
4. **Mobile-First Design**: Responsive layout starting from mobile breakpoints
5. **Component-Based Templates**: Reusable layouts with template inheritance
6. **Data-Driven Content**: Centralized configuration in `_data/site.json`

---

## 3. Build System & Configuration

### Eleventy Configuration (`.eleventy.js`)

```javascript
// Key configuration insights:

// 1. Plugin System
const { EleventyHtmlBasePlugin } = await import('@11ty/eleventy');
eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
// Handles path prefixes for GitHub Pages deployment

// 2. Asset Handling (Passthrough Copy)
eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });
eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });
eleventyConfig.addPassthroughCopy('src/assets');
eleventyConfig.addPassthroughCopy({ 'src/favicon.svg': 'favicon.svg' });
// Static assets copied directly to output without processing

// 3. Watch Targets (Live Reload)
eleventyConfig.addWatchTarget('src/css/');
eleventyConfig.addWatchTarget('src/js/');
// Files that trigger rebuild when changed

// 4. Collections (Content Organization)
eleventyConfig.addCollection('blog', function (collectionApi) {
  return collectionApi.getFilteredByGlob('src/blog/*.md').reverse();
});
// Automatically gather and sort content by type

// 5. Custom Filters (Template Helpers)
- dateFormat: Formats dates for display
- excerpt: Extracts first 200 characters for previews
- limit: Limits array items for "recent posts" features
- currentYear: Dynamic copyright year
- baseUrl: Handles GitHub Pages path prefixes

// 6. Markdown Configuration
markdown-it with html, breaks, and linkify enabled
```

### NPM Scripts (`package.json`)

```json
{
  "scripts": {
    "build": "eleventy", // Production build
    "dev": "eleventy --serve --watch --port=8080", // Dev server
    "serve": "eleventy --serve", // Serve built site
    "start": "npm run dev", // Alias for dev
    "clean": "rm -rf _site", // Clean output
    "docker:dev": "docker compose --profile dev up --build",
    "docker:prod": "docker compose --profile production up -d --build",
    "docker:stop": "docker compose --profile dev --profile production down",
    "docker:clean": "docker compose --profile dev --profile production down -v"
  }
}
```

### Package Dependencies

**Production Dependencies:** None (Eleventy only needed at build time)

**Development Dependencies:**

- `@11ty/eleventy`: ^3.0.0 - Static site generator
- `markdown-it`: ^14.1.0 - Markdown parser

**Key Insight**: Minimal dependencies = faster builds, fewer security vulnerabilities, easier maintenance

---

## 4. Docker Implementation

### Multi-Stage Production Dockerfile

```dockerfile
# Stage 1: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci                    # Clean install (faster, reproducible)
COPY . .
RUN npm run build            # Generate static site

# Stage 2: Production Runtime
FROM nginx:alpine AS production
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/_site /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget --quiet --tries=1 --spider http://localhost/health
CMD ["nginx", "-g", "daemon off;"]
```

**Benefits:**

- Small final image (only nginx + static files, ~20MB)
- No Node.js in production
- Secure (minimal attack surface)
- Health check endpoint for monitoring

### Development Dockerfile

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install              # Include devDependencies
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev"]    # Live reload server
```

### Docker Compose with Profiles

```yaml
services:
  web: # Production
    build:
      context: .
      dockerfile: Dockerfile
      target: production
    ports: ['8080:80']
    profiles: ['production']
    healthcheck: [...]

  dev: # Development
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports: ['3000:8080']
    volumes:
      - ./src:/app/src:cached # Live code updates
      - node_modules:/app/node_modules # Cached dependencies
    environment:
      - CHOKIDAR_USEPOLLING=true # File watching
    profiles: ['dev', 'development']
```

**Profile System Benefits:**

- Single docker-compose.yml for all environments
- `docker compose --profile dev up` for development
- `docker compose --profile production up` for production
- No environment conflicts

### Nginx Configuration Highlights

```nginx
# Gzip Compression
gzip on;
gzip_comp_level 6;
gzip_types text/plain text/css text/xml application/javascript ...;

# Cache Control
map $sent_http_content_type $expires {
    text/html                  epoch;  # Never cache HTML
    text/css                   max;    # Cache CSS forever
    application/javascript     max;    # Cache JS forever
    ~image/                    max;    # Cache images forever
}

# Security Headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;

# Performance
sendfile on;
tcp_nopush on;
tcp_nodelay on;
keepalive_timeout 65;

# Health Check Endpoint
location /health {
    return 200 "healthy\n";
    add_header Content-Type text/plain;
}
```

### Makefile Commands

```makefile
dev:        # Start development with live reload
prod:       # Start production with nginx
build:      # Build production Docker image
push:       # Build and push to Docker Hub
stop:       # Stop all containers
clean:      # Remove containers and volumes
logs:       # Show container logs
shell-dev:  # Open shell in dev container
shell-prod: # Open shell in prod container
```

---

## 5. CI/CD Pipeline

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Build and Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm' # Cache npm dependencies

      - name: Install dependencies
        run: npm ci # Clean install

      - name: Build site
        run: npm run build
        env:
          PATH_PREFIX: /218_portfolio # Repository-specific path

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '_site'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main' # Only deploy from main
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Pipeline Features:**

- ✅ Automated builds on every push
- ✅ Dependency caching for faster builds
- ✅ Separate build and deploy jobs
- ✅ Only deploys from main branch
- ✅ Concurrency control (one deployment at a time)
- ✅ Proper permissions (least privilege)

---

## 6. Performance Optimization Techniques

### 100% Lighthouse Score Strategies

#### 1. **Font Loading Optimization**

```html
<!-- Preconnect to font servers -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Preload CSS as style -->
<link
  rel="preload"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
  as="style"
/>

<!-- Async load with print media (then switch to all) -->
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
  media="print"
  onload="this.media='all'"
/>

<!-- Fallback for no-JS -->
<noscript>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
</noscript>
```

**Why this works:**

- Preconnect reduces DNS + TLS time
- Async loading prevents render blocking
- Display=swap prevents invisible text (FOIT)
- Fallback ensures fonts load without JS

#### 2. **Asset Preloading**

```html
<link rel="preload" href="{{ '/css/main.css' | baseUrl }}" as="style" />
<link rel="stylesheet" href="{{ '/css/main.css' | baseUrl }}" />
```

#### 3. **JavaScript Deferral**

```html
<script src="{{ '/js/main.js' | baseUrl }}" defer></script>
```

**Benefits:**

- Doesn't block HTML parsing
- Executes after DOM is ready
- Maintains execution order

#### 4. **Image Optimization**

```html
<img src="{{ image }}" alt="{{ title }}" loading="lazy" />
```

**Lazy Loading:**

- Images load only when near viewport
- Reduces initial page weight
- Improves FCP (First Contentful Paint)

#### 5. **CSS Optimization**

- Single CSS file (reduces HTTP requests)
- No CSS-in-JS overhead
- Custom properties for theming (efficient)
- Mobile-first approach (progressive enhancement)

#### 6. **Static Site Generation**

- Zero server-side processing
- Instant page loads
- CDN-friendly
- Scales infinitely

#### 7. **Minimal JavaScript**

- Vanilla JS only (no framework overhead)
- Progressive enhancement
- Graceful degradation
- Total JS size: ~10KB

---

## 7. Accessibility Implementation

### WCAG AA Compliance (100% Score)

#### 1. **Semantic HTML**

```html
<header>
  ,
  <nav>
    ,
    <main>
      ,
      <article>
        ,
        <section>
          ,
          <footer></footer>
        </section>
      </article>
    </main>
  </nav>
</header>
```

- Proper document structure
- Screen reader navigation
- Better SEO

#### 2. **ARIA Labels**

```html
<a
  href="{{ site.social.github }}"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
></a>
```

```html
<nav class="pagination" aria-label="Blog pagination"></nav>
```

#### 3. **Color Contrast**

```css
--color-text: #1f2937; /* Dark gray on white */
--color-text-muted: #6b7280; /* WCAG AA compliant */
--color-bg: #ffffff;
```

**Tested Ratios:**

- Text: 4.5:1 minimum
- Large text: 3:1 minimum
- All combinations meet or exceed WCAG AA

#### 4. **Keyboard Navigation**

```javascript
// Mobile menu closes on link click
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Smooth scroll with keyboard support
window.scrollTo({
  top: offsetPosition,
  behavior: 'smooth',
});
```

#### 5. **Focus Management**

```css
a:focus,
button:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

#### 6. **Alt Text for Images**

```html
<img src="{{ project.data.image }}" alt="{{ project.data.title }}" loading="lazy" />
```

#### 7. **Skip Links** (Recommended Addition)

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

---

## 8. CSS Architecture

### Custom Properties Strategy

```css
:root {
  /* Color System */
  --color-primary: #2563eb;
  --color-primary-light: #3b82f6;
  --color-primary-dark: #1d4ed8;

  /* Typography Scale */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;

  /* Spacing System (8px base) */
  --spacing-xs: 0.25rem; /* 4px */
  --spacing-sm: 0.5rem; /* 8px */
  --spacing-md: 1rem; /* 16px */
  --spacing-lg: 1.5rem; /* 24px */
  --spacing-xl: 2rem; /* 32px */
  --spacing-2xl: 3rem; /* 48px */
  --spacing-3xl: 4rem; /* 64px */

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow: 350ms ease;
}
```

### Design System Benefits

1. **Consistency**: All spacing follows 8px grid
2. **Maintainability**: Change one variable, update entire site
3. **Theming**: Easy to create dark mode or alternate themes
4. **Performance**: Native CSS, no preprocessor needed
5. **Documentation**: Variables self-document design decisions

### Layout Patterns

```css
/* Modern Grid with Auto-fit */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

/* Flexbox for Navigation */
.nav-menu {
  display: flex;
  gap: var(--spacing-xl);
}

/* Container Pattern */
.container {
  max-width: var(--container-max-width); /* 1200px */
  margin: 0 auto;
  padding: 0 var(--container-padding);
}
```

### Responsive Design Strategy

```css
/* Mobile First - Base styles for mobile */
.hero {
  padding: var(--spacing-2xl) 0;
}

/* Tablet and up */
@media (max-width: 768px) {
  :root {
    --font-size-4xl: 2rem; /* Smaller headings */
    --spacing-3xl: 2rem; /* Tighter spacing */
  }

  .nav-menu {
    position: fixed;
    flex-direction: column;
    /* Mobile menu slides in */
  }
}

/* Small mobile */
@media (max-width: 480px) {
  .btn {
    width: 100%; /* Full-width buttons */
  }
}
```

### Component Styles

**Card Pattern:**

```css
.project-card,
.post-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.project-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px); /* Lift effect */
}
```

**Button System:**

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--border-radius);
  transition: all var(--transition-fast);
}

.btn-primary {
  /* Solid primary color */
}
.btn-secondary {
  /* Outlined */
}
.btn-outline {
  /* Primary outline */
}
```

---

## 9. JavaScript Implementation

### Progressive Enhancement Philosophy

**Core Principle**: Site works without JavaScript, enhanced with it.

### Main.js Structure

```javascript
// 1. Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', function () {
  initMobileNavigation();
  initSmoothScrolling();
  initHeaderScrollEffect();
  initImageLoading();
  initCodeCopyButtons();
  initFormValidation();
  initThemeToggle();
});

// 2. Error Handling in Every Function
function initMobileNavigation() {
  try {
    // Implementation...
  } catch (error) {
    console.warn('Mobile navigation initialization failed:', error);
  }
}
```

### Key Features

#### 1. **Mobile Navigation**

```javascript
// Toggle mobile menu
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close when clicking outside
document.addEventListener('click', function (event) {
  const isClickInsideNav = navMenu.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);
  if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});
```

#### 2. **Smooth Scrolling**

```javascript
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  });
});
```

#### 3. **Hide Header on Scroll Down**

```javascript
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    header.style.transform = 'translateY(-100%)'; // Hide
  } else {
    header.style.transform = 'translateY(0)'; // Show
  }
  lastScrollTop = scrollTop;
});
```

#### 4. **Copy Code Buttons**

```javascript
codeBlocks.forEach((codeBlock) => {
  const copyButton = document.createElement('button');
  copyButton.textContent = 'Copy';

  copyButton.addEventListener('click', async function () {
    await navigator.clipboard.writeText(codeBlock.textContent);
    this.textContent = 'Copied!';
    setTimeout(() => {
      this.textContent = 'Copy';
    }, 2000);
  });

  codeBlock.parentElement.appendChild(copyButton);
});
```

#### 5. **Lazy Image Loading**

```javascript
const images = document.querySelectorAll('img[loading="lazy"]');
images.forEach((img) => {
  img.style.opacity = '0';
  img.style.transition = 'opacity 0.3s ease';
  img.addEventListener('load', function () {
    this.style.opacity = '1';
  });
});
```

### Best Practices Demonstrated

1. **Defensive Programming**: Try-catch blocks
2. **Feature Detection**: Check if elements exist before manipulating
3. **Event Delegation**: Efficient event handling
4. **No Global Pollution**: Everything in DOMContentLoaded or functions
5. **Accessibility**: Keyboard support, ARIA
6. **Performance**: Minimal DOM manipulation
7. **Modern APIs**: Clipboard API, Async/await

---

## 10. Content Management Strategy

### Front Matter Schema

#### Blog Posts (`src/blog/*.md`)

```yaml
---
layout: post.njk
title: 'Post Title'
description: 'Meta description for SEO'
date: 2025-01-01
tags: ['blog', 'category1', 'category2']
---
```

**Required Fields:**

- `layout`: Template to use
- `title`: Post title
- `date`: Publication date (YYYY-MM-DD)
- `tags`: Must include "blog" for collection

**Optional Fields:**

- `description`: SEO meta description
- `author`: Override default author
- `image`: Featured image

#### Project Showcases (`src/projects/*.md`)

```yaml
---
layout: project.njk
title: 'Project Name'
description: 'Brief description'
technologies: ['React', 'Node.js', 'PostgreSQL']
status: 'Completed'
github: 'https://github.com/user/repo'
demo: 'https://demo.example.com'
date: 2025-01-01
featured: true
image: '/images/project-screenshot.png'
---
```

**Status Options:**

- `Completed`
- `In Progress`
- `Archived`

### Collections System

```javascript
// Eleventy automatically creates collections from tags
eleventyConfig.addCollection('blog', function (collectionApi) {
  return collectionApi.getFilteredByGlob('src/blog/*.md').reverse();
});

eleventyConfig.addCollection('projects', function (collectionApi) {
  return collectionApi.getFilteredByGlob('src/projects/*.md').reverse();
});
```

**Benefits:**

- Automatic sorting (newest first)
- No database required
- Version controlled content
- Easy to backup

### Global Data (`src/_data/site.json`)

```json
{
  "title": "Portfolio Name",
  "description": "Site description",
  "author": "Your Name",
  "url": "https://yourdomain.com",
  "social": {
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "twitter": "https://twitter.com/username"
  }
}
```

**Access in templates:**

```nunjucks
{{ site.title }}
{{ site.author }}
{{ site.social.github }}
```

---

## 11. Development Workflow

### Local Development

```bash
# 1. Clone repository
git clone https://github.com/kaw393939/is117_portfolio.git
cd is117_portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Opens on http://localhost:8080
# Live reload enabled
# Changes appear instantly
```

### Docker Development

```bash
# Option A: Using Make
make dev        # Development mode
make prod       # Production mode
make build      # Build production image
make logs       # View logs
make shell-dev  # Access container shell

# Option B: Using Docker Compose
docker compose --profile dev up --build
docker compose --profile production up --build
```

### Adding Content

**New Blog Post:**

```bash
# 1. Create file
touch src/blog/my-new-post.md

# 2. Add front matter
---
layout: post.njk
title: "My New Post"
date: 2025-11-05
tags: ["blog", "tutorial"]
---

# 3. Write content in Markdown
```

**New Project:**

```bash
# 1. Create file
touch src/projects/my-project.md

# 2. Add front matter with project details
---
layout: project.njk
title: "My Project"
technologies: ["HTML", "CSS", "JavaScript"]
status: "Completed"
---

# 3. Write project description
```

### Testing

```bash
# Build production version
npm run build

# Serve locally to test
npm run serve

# Test with Docker
make test-prod
# Access at http://localhost:8081
```

### Deployment

**Automatic (GitHub Actions):**

1. Push to main branch
2. GitHub Actions builds site
3. Deploys to GitHub Pages
4. Live in ~2 minutes

**Manual (Docker Hub):**

```bash
# Set Docker Hub username in .env
DOCKER_USERNAME=yourusername

# Build and push
make push

# Pull and run anywhere
docker pull yourusername/eleventy-portfolio:latest
docker run -p 8080:80 yourusername/eleventy-portfolio:latest
```

---

## 12. Best Practices & Patterns

### Code Quality

1. **Consistent Formatting**
   - Prettier for code formatting
   - EditorConfig for consistency
   - Pre-commit hooks (recommended)

2. **Version Control**
   - Comprehensive `.gitignore` (92 patterns)
   - Meaningful commit messages
   - Branch protection on main

3. **Documentation**
   - README with all setup instructions
   - Docker documentation separate
   - Copilot instructions for AI context
   - Inline code comments where needed

### Performance

1. **Static Generation**: Pre-render everything
2. **Minimal Dependencies**: Only 2 dev dependencies
3. **Asset Optimization**: Gzip, caching, lazy loading
4. **CDN-Friendly**: All static assets
5. **No Runtime**: Zero server-side processing

### Security

1. **Content Security**: Static = no server vulnerabilities
2. **Dependency Scanning**: Regular `npm audit`
3. **Container Security**: Alpine images, minimal packages
4. **Security Headers**: Nginx configured properly
5. **No Secrets in Code**: `.env` for sensitive data

### Accessibility

1. **Semantic HTML**: Always
2. **ARIA Labels**: Where needed
3. **Keyboard Navigation**: Full support
4. **Color Contrast**: WCAG AA compliant
5. **Screen Reader Testing**: Regular checks

### SEO

1. **Meta Tags**: Title, description on every page
2. **Semantic Structure**: Proper heading hierarchy
3. **Alt Text**: All images
4. **Sitemap**: Auto-generated
5. **Performance**: Fast sites rank higher

---

## 13. Recommendations for Mid-Century Modern Project

### Technologies to Adopt

✅ **Core Stack:**

- Eleventy 3.x for static generation
- Nunjucks for templating
- Vanilla CSS with custom properties
- Docker for development consistency

✅ **Development Tools:**

- GitHub Actions for CI/CD
- Docker Compose with profiles
- VS Code with workspace settings
- Make for command shortcuts

### Adaptations for Mid-Century Modern Design

#### 1. **Color Palette**

Update CSS custom properties:

```css
:root {
  /* Mid-Century Modern Colors */
  --color-primary: #d97706; /* Warm orange */
  --color-secondary: #0e7490; /* Teal */
  --color-accent: #ea580c; /* Burnt orange */
  --color-neutral-warm: #78716c; /* Warm gray */
  --color-neutral-cool: #475569; /* Cool gray */

  /* Period-Appropriate Typography */
  --font-family-heading: 'Futura', 'Century Gothic', sans-serif;
  --font-family-body: 'Helvetica Neue', 'Arial', sans-serif;
}
```

#### 2. **Typography System**

```css
:root {
  /* Geometric Sans-Serif (MCM characteristic) */
  --font-family-primary: 'Futura', 'Century Gothic', 'Avenir', sans-serif;

  /* Clean, readable body text */
  --font-family-body: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;

  /* Optional serif for contrast */
  --font-family-serif: 'Garamond', 'Georgia', serif;

  /* Larger, bolder headings (MCM style) */
  --font-size-hero: 4rem; /* 64px */
  --font-weight-bold: 700;
}
```

#### 3. **Layout Patterns**

```css
/* Asymmetric Grid (MCM characteristic) */
.mcm-grid {
  display: grid;
  grid-template-columns: 2fr 1fr; /* Unequal columns */
  gap: var(--spacing-xl);
}

/* Clean Lines and Negative Space */
.mcm-section {
  padding: var(--spacing-3xl) 0;
  background: var(--color-bg);
}

/* Geometric Shapes */
.mcm-card {
  border-radius: 0; /* No rounded corners */
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.1); /* Offset shadow */
}
```

#### 4. **Design Elements**

```css
/* Sunburst/Starburst Pattern */
.mcm-starburst {
  background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
}

/* Atomic Age Graphics */
.mcm-atomic-dot {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-accent);
  position: relative;
}

/* Boomerang Shapes */
.mcm-boomerang {
  clip-path: polygon(0% 50%, 30% 0%, 70% 30%, 100% 50%, 70% 70%, 30% 100%);
}
```

#### 5. **Project Structure Additions**

```
src/
├── _data/
│   ├── site.json
│   └── design-principles.json    # MCM design tokens
├── _includes/
│   ├── patterns/
│   │   ├── starburst.njk        # Reusable MCM patterns
│   │   ├── atomic-dots.njk
│   │   └── geometric-shapes.njk
│   └── components/
│       ├── hero-mcm.njk
│       └── furniture-card.njk   # Product showcases
├── designers/                    # MCM designers profiles
│   ├── index.njk
│   └── *.md
├── furniture/                    # Furniture showcases
│   ├── index.njk
│   └── *.md
├── timeline/                     # Historical timeline
│   └── index.njk
└── gallery/                      # Image gallery
    └── index.njk
```

#### 6. **Content Types**

**Designer Profiles:**

```yaml
---
layout: designer.njk
name: 'Charles Eames'
period: '1950s-1960s'
specialties: ['Furniture Design', 'Architecture']
notable_works: ['Eames Lounge Chair', 'Eames House']
image: '/images/designers/eames.jpg'
---
```

**Furniture Pieces:**

```yaml
---
layout: furniture.njk
title: 'Eames Lounge Chair'
designer: 'Charles and Ray Eames'
year: 1956
materials: ['Molded Plywood', 'Leather', 'Aluminum']
category: 'Seating'
era: 'Mid-Century Modern'
status: 'Iconic'
image: '/images/furniture/eames-lounge.jpg'
---
```

**Timeline Events:**

```yaml
---
layout: timeline-event.njk
year: 1956
title: 'Introduction of Eames Lounge Chair'
significance: 'Revolutionized modern furniture design'
image: '/images/timeline/1956-eames.jpg'
---
```

#### 7. **Visual Enhancements**

```css
/* Parallax Scrolling (Modern Touch) */
.mcm-parallax {
  background-attachment: fixed;
  background-size: cover;
}

/* Hover Effects (Subtle) */
.furniture-card {
  transition: transform var(--transition-normal);
}
.furniture-card:hover {
  transform: translateY(-4px) rotate(-1deg); /* Slight tilt */
}

/* Period-Appropriate Colors */
.color-palette {
  --mcm-orange: #ff6b35;
  --mcm-teal: #004e89;
  --mcm-mustard: #f7b801;
  --mcm-olive: #6a994e;
  --mcm-brown: #815a3d;
}
```

#### 8. **Interactive Elements**

```javascript
// Image galleries with smooth transitions
function initGallery() {
  const gallery = document.querySelector('.mcm-gallery');
  // Implement lightbox or carousel
}

// Timeline animations
function initTimeline() {
  // Animate timeline entries on scroll
}

// 3D furniture viewer (optional advanced feature)
function init3DViewer() {
  // Three.js integration for furniture models
}
```

### Implementation Roadmap

**Phase 1: Foundation (Week 1)**

- Clone portfolio structure
- Update color scheme to MCM palette
- Replace fonts with geometric sans-serifs
- Configure Eleventy for new content types

**Phase 2: Content Structure (Week 2)**

- Create designers collection
- Create furniture collection
- Create timeline structure
- Build layout templates

**Phase 3: Design Implementation (Week 3)**

- Implement MCM visual patterns
- Add geometric shapes and graphics
- Create asymmetric layouts
- Add period-appropriate imagery

**Phase 4: Content Population (Week 4)**

- Add designer profiles (10-15)
- Add furniture pieces (20-30)
- Create historical timeline
- Curate image gallery

**Phase 5: Enhancement (Week 5)**

- Add interactive elements
- Implement animations
- Optimize images
- Test accessibility

**Phase 6: Polish & Deploy (Week 6)**

- Performance optimization
- SEO optimization
- Docker setup
- GitHub Pages deployment

### Key Differences from Original Portfolio

| Aspect            | Original Portfolio | MCM Project                          |
| ----------------- | ------------------ | ------------------------------------ |
| **Color Palette** | Blue primary       | Warm oranges, teal, mustard          |
| **Typography**    | Inter (modern)     | Futura, Helvetica (geometric)        |
| **Layout**        | Symmetric grids    | Asymmetric, creative layouts         |
| **Imagery**       | Code screenshots   | Furniture photography, period photos |
| **Content Types** | Blog + Projects    | Designers + Furniture + Timeline     |
| **Visual Style**  | Clean minimal      | Bold geometric patterns              |
| **Navigation**    | Standard           | Period-inspired icons                |

---

## Conclusion

The IS117 Portfolio demonstrates **production-ready architecture** with:

✅ **100% Lighthouse scores** through optimization strategies  
✅ **Docker-based workflow** for consistency  
✅ **Automated CI/CD** for effortless deployment  
✅ **Accessibility first** (WCAG AA compliant)  
✅ **Performance optimization** at every level  
✅ **Clean, maintainable code** with best practices  
✅ **Comprehensive documentation** for easy onboarding

**For the Mid-Century Modern project:**

- Adopt the core architecture (Eleventy + Docker + GitHub Actions)
- Customize the design system for period-appropriate aesthetics
- Extend content types for designers, furniture, and timeline
- Maintain the performance and accessibility standards
- Add period-specific visual elements and patterns

This specification provides a complete blueprint for building a modern, performant, accessible website while honoring Mid-Century Modern design principles.

---

**Document Version:** 1.0  
**Last Updated:** November 5, 2025  
**Author:** Technical Analysis Team  
**Project:** Mid-Century Modern Design Showcase
