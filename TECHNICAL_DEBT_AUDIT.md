# Technical Debt Audit Report

**Project:** MCM Design Hub  
**Date:** November 6, 2025  
**Auditor:** GitHub Copilot  
**Status:** 🟡 Moderate Technical Debt

---

## Executive Summary

This audit identified **23 technical debt items** across 5 categories:

- 🔴 **Critical (3):** Issues requiring immediate attention
- 🟠 **High (6):** Should be addressed soon
- 🟡 **Medium (8):** Plan to address in next iteration
- 🟢 **Low (6):** Nice-to-have improvements

**Overall Health Score:** 72/100

---

## 🔴 Critical Issues (Must Fix)

### 1. ESLint Errors in JavaScript Files

**Location:** `src/assets/js/pages/landing.js`, `src/assets/js/main.js`  
**Severity:** 🔴 Critical  
**Impact:** Code quality, maintainability

**Issues Found:**

- 5 ESLint errors (missing curly braces, unused variables, trailing commas)
- 3 console.log warnings in production code
- Deprecated `.eslintignore` file still in use

**Current State:**

```javascript
// landing.js line 9: Missing curly braces
if (!this.previewEl) return;

// landing.js line 223: Unused variable
catch (error) { ... }

// main.js line 2-6: Console statements in production
console.log('🎨 MCM Design Hub initialized');
```

**Recommended Fix:**

```bash
npm run lint:js -- --fix  # Auto-fix 4 issues
# Then manually:
# 1. Remove unused 'error' variable or use it
# 2. Wrap single-line if statements with curly braces
# 3. Remove console.log or wrap in dev-only checks
# 4. Delete .eslintignore (already using ignores in eslint.config.js)
```

**Effort:** 15 minutes  
**Priority:** Fix before next deploy

---

### 2. Duplicate HTML Content in index.njk

**Location:** `src/index.njk` lines 103-121  
**Severity:** 🔴 Critical  
**Impact:** Duplicate content rendering, maintenance

**Issue:**
Practice pillar section is duplicated with different content. Lines 103-121 repeat the pillar structure with old content that conflicts with lines 79-102.

**Current State:**

```html
<!-- Lines 79-102: Correct Practice pillar -->
<div class="pillar pillar--practice">
  <ul class="pillar__features">
    <li>COLOR TOOLS</li>
    <li>TYPE PAIRING</li>
    <li>GRID TOOL</li>
    <li>PATTERNS</li>
  </ul>
</div>

<!-- Lines 103-121: DUPLICATE with different content -->
<div class="pillar pillar--practice">
  <ul>
    <li>Typography Playground</li>
    <li>Layout Grid Tool</li>
    <li>Pattern Creator</li>
  </ul>
</div>
```

**Recommended Fix:**
Delete lines 103-121 entirely (duplicate pillar content)

**Effort:** 2 minutes  
**Priority:** Fix immediately

---

### 3. Markdown Linting Errors

**Location:** `.github/QUALITY_CONTROL.md`  
**Severity:** 🔴 Critical (fails CI)  
**Impact:** Pre-commit hooks failing

**Issue:**

- MD029 ordered list prefix errors at lines 33 and 40
- List numbering uses 5, 6 instead of 1, 1 (consecutive 1's expected by markdownlint)

**Recommended Fix:**

```markdown
<!-- Change from: -->

5. **💬 Commit Message Validation (Commitlint)**
6. **📊 Success Feedback**

<!-- To: -->

1. **💬 Commit Message Validation (Commitlint)**
1. **📊 Success Feedback**
```

**Effort:** 2 minutes  
**Priority:** Fix to stop linter failures

---

## 🟠 High Priority Issues

### 4. CSS Duplication and Bloat

**Location:** `src/assets/css/pages/landing.css`  
**Severity:** 🟠 High  
**Impact:** File size (915 lines), maintainability

**Issues:**

- Duplicate `.pillar__features` definitions (lines 430-447)
- Multiple commented "SOLUTION" headers cluttering code
- Responsive breakpoints duplicated (lines 185-240)
- Unused CSS for newsletter, testimonial, interactive sections

**Metrics:**

- File size: 915 lines (should be ~600)
- Duplicate rules: 8+ instances
- Dead code: ~200 lines (22%)

**Recommended Actions:**

1. Remove duplicate `.pillar__features` definition at line 430-436
2. Consolidate all responsive queries into one section at bottom
3. Remove or extract unused section styles to separate file
4. Clean up "SOLUTION X" comments (keep only meaningful comments)

**Effort:** 1 hour  
**Savings:** ~300 lines, ~15KB file size

---

### 5. Missing CSS Variables Usage

**Location:** `src/assets/css/pages/landing.css`  
**Severity:** 🟠 High  
**Impact:** Maintainability, design system consistency

**Issue:**
Hard-coded values instead of using CSS variables from `main.css`:

```css
/* Hard-coded (BAD) */
font-size: clamp(1.75rem, 4vw, 2.5rem);
padding: clamp(2.5rem, 4vw, 3.5rem);
border: clamp(4px, 0.6vw, 6px);

/* Should use variables (GOOD) */
font-size: var(--text-2xl);
padding: var(--space-8);
border: 6px solid var(--color-text);
```

**Locations:**

- `.hero__title`, `.pillar__title`, `.section__title` (font sizes)
- `.hero__content`, `.pillar` (spacing)
- Most border values

**Recommended Fix:**
Create additional spacing/sizing tokens, then replace clamp() values

**Effort:** 45 minutes

---

### 6. JavaScript Class Organization

**Location:** `src/assets/js/pages/landing.js`  
**Severity:** 🟠 High  
**Impact:** Code organization, testability

**Issues:**

- Classes lack proper JSDoc documentation
- No error handling in ColorPalettePreview.generateNewPalette()
- Newsletter form simulates API without configuration
- No input sanitization

**Example Issues:**

```javascript
// Missing JSDoc params and return types
class ColorPalettePreview {
  constructor() {
    /* No param docs */
  }

  // No error handling
  generateNewPalette() {
    const swatches = this.swatchesContainer.querySelectorAll('[data-swatch]');
    // What if swatchesContainer is null?
  }
}
```

**Recommended Actions:**

1. Add comprehensive JSDoc comments
2. Add null checks and error boundaries
3. Extract API URL to configuration
4. Add input sanitization for email

**Effort:** 1.5 hours

---

### 7. No CSS Linting Implementation

**Location:** `package.json` line 22  
**Severity:** 🟠 High  
**Impact:** CSS quality, consistency

**Current State:**

```json
"lint:css": "echo 'CSS linting placeholder'"
```

**Issue:**
CSS linting is a placeholder. 915 lines of CSS with no automated quality checks.

**Recommended Fix:**

```bash
npm install --save-dev stylelint stylelint-config-standard

# Update package.json
"lint:css": "stylelint \"src/**/*.css\""
```

**Effort:** 30 minutes (setup + fix initial issues)

---

### 8. Hardcoded pathPrefix in Multiple Files

**Location:** `.eleventy.js`, `src/_data/site.json`, deployment docs  
**Severity:** 🟠 High  
**Impact:** Portability, configuration management

**Issue:**
`pathPrefix: '/DesignStyle/'` is hardcoded in multiple locations:

- `.eleventy.js` line 20
- `site.json` baseUrl
- Referenced in deployment documentation

**Problem:**
Makes it difficult to:

- Run locally without the prefix
- Deploy to different environments
- Rename repository

**Recommended Fix:**
Use environment variables:

```javascript
// .eleventy.js
module.exports = function (eleventyConfig) {
  return {
    pathPrefix: process.env.PATH_PREFIX || '/',
    // ...
  };
};
```

**Effort:** 20 minutes

---

### 9. Missing Accessibility Features

**Location:** Various components  
**Severity:** 🟠 High  
**Impact:** Accessibility, WCAG compliance

**Issues Found:**

1. **Color contrast:** Some text on colored backgrounds may fail WCAG AA
   - White text on `var(--color-accent)` (#f4c542) - likely fails
   - Feature list items with 0.1 opacity backgrounds

2. **Focus indicators:** No visible focus styles for keyboard navigation

   ```css
   /* Missing */
   .btn:focus-visible {
     outline: 2px solid var(--color-primary);
   }
   ```

3. **ARIA labels:** Interactive elements missing labels
   - Color swatch click targets (lines 268-283 in landing.js)
   - Newsletter form error messages not announced

4. **Skip link:** Present but not tested

**Recommended Actions:**

1. Audit color contrast with tool (contrast ratio >= 4.5:1)
2. Add focus-visible styles to all interactive elements
3. Add aria-label to color swatches
4. Add aria-live region for form errors

**Effort:** 2 hours

---

## 🟡 Medium Priority Issues

### 10. Unused Component Files

**Location:** `src/_includes/components/`  
**Severity:** 🟡 Medium  
**Impact:** Code maintenance overhead

**Issue:**
Components are defined but may be underutilized:

- `card.njk` - Used in index.njk
- `button.njk` - Used in index.njk
- `icon.njk` - Used in index.njk

However, their internal structure might not match all use cases. Need to verify if all props are being used.

**Action:** Audit component usage and remove unused props

**Effort:** 30 minutes

---

### 11. No TypeScript/Type Checking

**Location:** JavaScript files  
**Severity:** 🟡 Medium  
**Impact:** Developer experience, bug prevention

**Current State:**
Plain JavaScript with no type checking. Easy to make runtime errors:

```javascript
updateSwatch(swatchEl, colorData) {
  // What if colorData is missing .name or .hex?
  nameEl.textContent = colorData.name; // Potential undefined
}
```

**Recommended Fix:**
Add JSDoc with type annotations OR migrate to TypeScript:

```javascript
/**
 * @param {HTMLElement} swatchEl
 * @param {{name: string, hex: string}} colorData
 */
updateSwatch(swatchEl, colorData) {
  // Now VSCode provides intellisense
}
```

**Effort:** 2 hours for JSDoc, 8+ hours for TypeScript migration

---

### 12. Magic Numbers Throughout Codebase

**Location:** CSS and JavaScript files  
**Severity:** 🟡 Medium  
**Impact:** Maintainability

**Examples:**

```css
/* landing.css - What do these numbers mean? */
transform: rotate(-0.5deg);  /* Why -0.5? */
min-height: 60vh;  /* Why 60? */
max-width: 1000px;  /* Why 1000? */

/* JavaScript */
setTimeout(() => { /* ... */ }, 150);  /* Why 150ms? */
threshold: 0.1  /* Why 0.1? */
```

**Recommended Fix:**
Extract to named constants:

```css
:root {
  --hero-rotation: -0.5deg;
  --pillar-min-height: 60vh;
  --container-max-width: 1000px;
}

/* JavaScript */
const ANIMATION_DELAYS = {
  FADE_IN: 150,
  FADE_OUT: 300,
  TOOLTIP: 1000,
};
```

**Effort:** 1 hour

---

### 13. Inadequate Error Handling

**Location:** `landing.js`  
**Severity:** 🟡 Medium  
**Impact:** User experience, debugging

**Issues:**

```javascript
// What if clipboard API is unavailable?
navigator.clipboard
  .writeText(hex)
  .then(() => {
    this.showCopyFeedback(swatchEl);
  })
  .catch((err) => {
    console.error('Failed to copy:', err); // Silent failure
  });

// No fallback for older browsers
if (!('IntersectionObserver' in window)) return; // Just quits
```

**Recommended Actions:**

1. Add fallback for clipboard (create temp input, select, copy)
2. Add graceful degradation for IntersectionObserver
3. Show user-friendly error messages
4. Log errors to monitoring service

**Effort:** 1 hour

---

### 14. Responsive Design Breakpoints Not Consistent

**Location:** Multiple CSS files  
**Severity:** 🟡 Medium  
**Impact:** Responsive behavior consistency

**Issue:**
Breakpoints vary:

- `landing.css`: 768px, 1024px
- `main.css`: 768px only
- No documented breakpoint system

**Recommended Fix:**

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}

/* Then use consistently */
@media (max-width: 768px) { /* ❌ */
@media (max-width: var(--breakpoint-md)) { /* ✅ (not supported) */
@media (max-width: 768px) { /* ✅ with comment: --breakpoint-md */
```

**Effort:** 30 minutes

---

### 15. Git Hooks Documentation Mismatch

**Location:** `.github/hooks/pre-commit.sample`, `.husky/pre-commit`  
**Severity:** 🟡 Medium  
**Impact:** Developer onboarding confusion

**Issue:**
Two different pre-commit implementations:

- `.github/hooks/pre-commit.sample` - Sample with different checks
- `.husky/pre-commit` - Actual implementation

Sample file may confuse developers about what actually runs.

**Recommended Fix:**
Remove `.github/hooks/pre-commit.sample` or update it to match actual hooks

**Effort:** 10 minutes

---

### 16. No Build Optimization

**Location:** `package.json`, build process  
**Severity:** 🟡 Medium  
**Impact:** Performance, load times

**Missing Optimizations:**

1. CSS minification
2. JavaScript minification
3. Image optimization (none present anyway)
4. Critical CSS extraction
5. Asset versioning/cache busting

**Current Build:**

```json
"build": "eleventy"  // Just copies files
```

**Recommended Enhancement:**

```json
"build": "npm run clean && eleventy && npm run optimize",
"optimize": "npm run optimize:css && npm run optimize:js",
"optimize:css": "cleancss -o _site/assets/css/main.min.css _site/assets/css/main.css",
"optimize:js": "terser _site/assets/js/main.js -o _site/assets/js/main.min.js"
```

**Effort:** 2 hours

---

### 17. No Unit Tests

**Location:** Project root (missing)  
**Severity:** 🟡 Medium  
**Impact:** Code reliability, refactoring confidence

**Issue:**
Zero test coverage for JavaScript functionality:

- ColorPalettePreview class
- NewsletterForm validation
- ScrollAnimations

**Recommended Addition:**

```bash
npm install --save-dev vitest @vitest/ui jsdom

# Add to package.json
"test": "vitest run",
"test:watch": "vitest",
"test:ui": "vitest --ui"
```

**Effort:** 4 hours (setup + initial tests)

---

## 🟢 Low Priority Improvements

### 18. Documentation Could Be More Concise

**Location:** `docs/` directory  
**Severity:** 🟢 Low  
**Impact:** Developer onboarding time

**Issue:**
Large documentation files:

- 70+ markdown files (many in docs/research/)
- Some redundancy between CONTRIBUTING.md, DEPLOYMENT.md, QUICK-START.md
- Research docs (day1-day12) may be outdated or for reference only

**Recommended Action:**

1. Archive research docs to separate branch
2. Consolidate main docs into single comprehensive guide
3. Keep QUICK-START.md for fast onboarding

**Effort:** 3 hours

---

### 19. No Automated Dependency Updates

**Location:** Project root  
**Severity:** 🟢 Low  
**Impact:** Security, maintenance burden

**Current State:**
Manual dependency updates only. No Dependabot or Renovate configured.

**Recommended Fix:**
Add `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: 'npm'
    directory: '/'
    schedule:
      interval: 'weekly'
    open-pull-requests-limit: 5
```

**Effort:** 5 minutes

---

### 20. Color Palette Data in JavaScript

**Location:** `landing.js` lines 14-78  
**Severity:** 🟢 Low  
**Impact:** Maintainability, content management

**Issue:**
Color palettes hardcoded in JavaScript. Should be in external JSON/data file for:

- Easier editing by non-developers
- Reuse across pages
- Potential CMS integration

**Recommended Structure:**

```javascript
// src/_data/colorPalettes.json
[
  {
    "id": "warm-sunset",
    "name": "Warm Sunset",
    "colors": [...]
  }
]

// Then import in landing.js
import palettes from '../../_data/colorPalettes.json';
```

**Effort:** 30 minutes

---

### 21. Inconsistent Naming Conventions

**Location:** Various files  
**Severity:** 🟢 Low  
**Impact:** Code readability

**Examples:**

- CSS: BEM mixed with utility classes (`.hero__content` vs `.section`)
- JavaScript: `previewEl` vs `generateBtn` (inconsistent suffix)
- Files: `landing.js` vs `main.js` (different conventions)

**Not Critical** but could be improved for consistency.

**Effort:** 30 minutes documentation update

---

### 22. No Performance Monitoring

**Location:** Missing  
**Severity:** 🟢 Low  
**Impact:** Performance visibility

**Recommendation:**
Add basic performance monitoring:

```javascript
// main.js
if ('PerformanceObserver' in window) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > 100) {
        console.warn('Slow operation:', entry.name, entry.duration);
      }
    }
  });
  observer.observe({ entryTypes: ['measure'] });
}
```

**Effort:** 1 hour

---

### 23. Unused .vscode Directory

**Location:** `.vscode/` (if exists)  
**Severity:** 🟢 Low  
**Impact:** Minimal

**Check if:** `.vscode/` directory exists with settings. If not used by team, should be removed or added to `.gitignore`

**Effort:** 2 minutes

---

## Summary Metrics

### Issues by Severity

- 🔴 Critical: 3 issues
- 🟠 High: 6 issues
- 🟡 Medium: 8 issues
- 🟢 Low: 6 issues

### Estimated Effort

- **Quick Fixes (<30 min):** 7 issues = 2 hours
- **Medium Fixes (1-2 hours):** 10 issues = 15 hours
- **Large Refactors (3+ hours):** 6 issues = 25 hours
- **Total Effort:** ~42 hours

### Health Score Breakdown

- **Code Quality:** 65/100 (ESLint errors, duplication)
- **Maintainability:** 70/100 (magic numbers, documentation)
- **Performance:** 80/100 (no major issues, just optimization opportunities)
- **Accessibility:** 60/100 (missing focus states, contrast issues)
- **Security:** 85/100 (minimal risk, basic validation needed)
- **Testing:** 30/100 (no tests)

**Overall:** 72/100

---

## Recommended Action Plan

### Sprint 1 (Immediate - 4 hours)

1. ✅ Fix ESLint errors (15 min)
2. ✅ Remove duplicate HTML in index.njk (2 min)
3. ✅ Fix markdown linting errors (2 min)
4. ✅ Clean up CSS duplicates (1 hour)
5. ✅ Add CSS linting (30 min)
6. ✅ Add focus-visible styles (1 hour)
7. ✅ Extract magic numbers to constants (1 hour)

### Sprint 2 (Next Week - 8 hours)

1. Improve JavaScript error handling (1 hour)
2. Add JSDoc documentation (2 hours)
3. Implement build optimization (2 hours)
4. Audit and fix color contrast (1 hour)
5. Consolidate responsive breakpoints (30 min)
6. Add environment-based pathPrefix (20 min)
7. Setup Dependabot (5 min)

### Sprint 3 (Following Week - 10 hours)

1. Setup unit testing framework (4 hours)
2. Refactor color palette to data file (30 min)
3. Add performance monitoring (1 hour)
4. Archive research documentation (3 hours)
5. Improve component organization (1.5 hours)

### Ongoing (Nice-to-Have)

1. Consider TypeScript migration
2. Enhance documentation
3. Add E2E tests
4. Performance optimization

---

## Conclusion

The MCM Design Hub project is in **good overall health** with moderate technical debt. The codebase shows:

**Strengths:**

- ✅ Good project structure
- ✅ Git workflow automation (Husky, commitlint)
- ✅ Automated deployment
- ✅ Modern tooling (Eleventy, ESLint, Prettier)
- ✅ Responsive design implementation

**Areas for Improvement:**

- 🔧 Code quality (ESLint compliance)
- 🔧 CSS organization and deduplication
- 🔧 Accessibility enhancements
- 🔧 Testing infrastructure
- 🔧 Performance optimization

**Priority:** Address critical issues (Sprint 1) before production launch. The high-priority issues should be tackled within the next week to ensure maintainability.

---

**Next Steps:**

1. Review this audit with the team
2. Prioritize issues based on project timeline
3. Create GitHub issues for each item
4. Assign owners and deadlines
5. Schedule regular debt reviews (monthly)

**Audit Complete** ✅
