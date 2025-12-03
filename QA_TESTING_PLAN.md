# QA Testing Plan - MCM Design Hub

## Overview

This document outlines a comprehensive two-pronged testing strategy to achieve a flawless website. The testing cycle iterates until both quantitative and qualitative tests pass with zero issues.

---

## Test Types

### 1. Quantitative Testing (Lighthouse)

**Objective:** Achieve perfect scores (100) in all Lighthouse categories.

**Categories:**

- Performance
- Accessibility
- Best Practices
- SEO

**Tools:**

- Lighthouse CLI (`npx lighthouse`)
- Playwright with `@playwright/test` for automation

**Pass Criteria:**

- All categories score 100
- Zero critical/serious issues
- All audits pass

---

### 2. Qualitative Testing (Visual AI Analysis)

**Objective:** Identify and fix all visual/UX issues through AI-powered screenshot analysis.

**Tools:**

- Playwright for screenshots
- `eai vision` for AI analysis
- `eai multi_vision` for comparisons

**Pass Criteria:**

- AI reports zero issues for 3 consecutive runs
- All viewports render correctly
- No visual regressions

---

## Test Configurations

### Viewports

| Name    | Width  | Height | Use Case        |
| ------- | ------ | ------ | --------------- |
| Mobile  | 375px  | 812px  | iPhone X/12/13  |
| Tablet  | 768px  | 1024px | iPad Portrait   |
| Desktop | 1440px | 900px  | Standard laptop |

### Pages to Test

1. **Homepage** (`/`)
   - Hero section
   - Principles section
   - Designers section
   - Impact/Conclusion section
   - Footer

2. **Gallery** (`/gallery/`)
   - Hero section
   - Image grid
   - Footer

### Browser

- Chromium (primary)
- Optional: Firefox, WebKit for cross-browser

---

## Testing Cycle Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                    START TESTING CYCLE                       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 1: QUANTITATIVE (Lighthouse)                         │
│  ─────────────────────────────────────────────────────────  │
│  1. Run Lighthouse on / (all viewports)                     │
│  2. Run Lighthouse on /gallery/ (all viewports)             │
│  3. Collect scores and failed audits                        │
│  4. If scores < 100: Fix issues → Repeat Phase 1            │
│  5. If scores = 100: Proceed to Phase 2                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 2: QUALITATIVE (Visual AI Analysis)                  │
│  ─────────────────────────────────────────────────────────  │
│  1. Capture screenshots (all pages × all viewports)         │
│  2. Analyze each screenshot with eai vision                 │
│  3. Generate issue report                                   │
│  4. If issues found: Fix → Return to Phase 1                │
│  5. If no issues: Increment clean_run_count                 │
│  6. If clean_run_count < 3: Repeat Phase 2                  │
│  7. If clean_run_count = 3: TESTING COMPLETE ✓              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    TESTING COMPLETE                          │
│                    All tests passing                         │
│                    Commit and push                           │
└─────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Lighthouse Testing (Detailed)

### Step 1.1: Run Lighthouse Audits

```bash
# Homepage - Desktop
npx lighthouse http://localhost:8080 --output=json --output-path=./qa-reports/lighthouse-home-desktop.json --preset=desktop --chrome-flags="--headless"

# Homepage - Mobile
npx lighthouse http://localhost:8080 --output=json --output-path=./qa-reports/lighthouse-home-mobile.json --preset=perf --chrome-flags="--headless"

# Gallery - Desktop
npx lighthouse http://localhost:8080/gallery/ --output=json --output-path=./qa-reports/lighthouse-gallery-desktop.json --preset=desktop --chrome-flags="--headless"

# Gallery - Mobile
npx lighthouse http://localhost:8080/gallery/ --output=json --output-path=./qa-reports/lighthouse-gallery-mobile.json --preset=perf --chrome-flags="--headless"
```

### Step 1.2: Analyze Results

Extract scores from JSON:

```bash
cat ./qa-reports/lighthouse-home-desktop.json | jq '.categories | to_entries[] | "\(.key): \(.value.score * 100)"'
```

### Step 1.3: Common Lighthouse Fixes

| Issue                     | Category       | Fix                                              |
| ------------------------- | -------------- | ------------------------------------------------ |
| Render-blocking resources | Performance    | Defer/async scripts, inline critical CSS         |
| Image size                | Performance    | Use responsive images, WebP format, lazy loading |
| Missing alt text          | Accessibility  | Add descriptive alt attributes                   |
| Color contrast            | Accessibility  | Adjust colors to meet WCAG AA (4.5:1)            |
| Missing meta description  | SEO            | Add meta description to all pages                |
| Missing lang attribute    | Accessibility  | Add lang="en" to html tag                        |
| Tap targets too small     | Accessibility  | Minimum 48x48px touch targets                    |
| Missing HTTPS             | Best Practices | Ensure all resources use HTTPS                   |

### Step 1.4: Pass Criteria Checklist

- [ ] Performance: 100
- [ ] Accessibility: 100
- [ ] Best Practices: 100
- [ ] SEO: 100
- [ ] Zero failed audits
- [ ] All pages tested (/, /gallery/)
- [ ] Both mobile and desktop pass

---

## Phase 2: Visual AI Analysis (Detailed)

### Step 2.1: Screenshot Capture Matrix

| Screenshot ID           | Page      | Viewport | Section    |
| ----------------------- | --------- | -------- | ---------- |
| home-mobile-hero        | /         | Mobile   | Hero       |
| home-mobile-principles  | /         | Mobile   | Principles |
| home-mobile-designers   | /         | Mobile   | Designers  |
| home-mobile-impact      | /         | Mobile   | Impact     |
| home-mobile-footer      | /         | Mobile   | Footer     |
| home-tablet-hero        | /         | Tablet   | Hero       |
| home-tablet-principles  | /         | Tablet   | Principles |
| home-tablet-designers   | /         | Tablet   | Designers  |
| home-tablet-impact      | /         | Tablet   | Impact     |
| home-tablet-footer      | /         | Tablet   | Footer     |
| home-desktop-hero       | /         | Desktop  | Hero       |
| home-desktop-principles | /         | Desktop  | Principles |
| home-desktop-designers  | /         | Desktop  | Designers  |
| home-desktop-impact     | /         | Desktop  | Impact     |
| home-desktop-footer     | /         | Desktop  | Footer     |
| gallery-mobile-full     | /gallery/ | Mobile   | Full page  |
| gallery-tablet-full     | /gallery/ | Tablet   | Full page  |
| gallery-desktop-full    | /gallery/ | Desktop  | Full page  |

### Step 2.2: Playwright Screenshot Script

Location: `tests/visual-qa.spec.ts`

```typescript
// Captures all screenshots for AI analysis
// Run with: npx playwright test tests/visual-qa.spec.ts
```

### Step 2.3: AI Analysis Prompts

**Standard Analysis Prompt:**

```
Analyze this website screenshot for UI/UX issues. Check for:
1. Text alignment and centering problems
2. Spacing inconsistencies (margins, padding)
3. Overlapping or cut-off elements
4. Color contrast issues
5. Responsive layout problems
6. Missing or broken images
7. Typography issues (readability, hierarchy)
8. Visual balance and symmetry
9. Button/link visibility and clickability
10. Overall professional appearance

Report each issue with:
- Issue description
- Severity (Critical/High/Medium/Low)
- Location in the screenshot
- Suggested fix

If no issues found, respond with: "NO ISSUES DETECTED"
```

**Comparison Prompt (for multi_vision):**

```
Compare these screenshots across different viewports.
Identify any inconsistencies in:
1. Element positioning relative to viewport
2. Content that should be consistent but differs
3. Responsive breakpoint issues
4. Missing elements in certain viewports

Report any discrepancies found.
```

### Step 2.4: Analysis Commands

```bash
# Single screenshot analysis
eai vision ./qa-reports/screenshots/home-desktop-hero.png --prompt "Analyze this website screenshot for UI/UX issues..."

# Multi-viewport comparison
eai multi_vision ./qa-reports/screenshots/home-mobile-hero.png ./qa-reports/screenshots/home-tablet-hero.png ./qa-reports/screenshots/home-desktop-hero.png --prompt "Compare these screenshots across viewports..."
```

### Step 2.5: Pass Criteria

- [ ] AI reports "NO ISSUES DETECTED" on all screenshots
- [ ] 3 consecutive clean runs achieved
- [ ] All viewports analyzed
- [ ] All pages analyzed
- [ ] No visual regressions from previous run

---

## Directory Structure

```
/Users/agard/NJIT/is373/DesignStyle/
├── qa-reports/
│   ├── lighthouse/
│   │   ├── home-desktop.json
│   │   ├── home-mobile.json
│   │   ├── gallery-desktop.json
│   │   └── gallery-mobile.json
│   ├── screenshots/
│   │   ├── home-mobile-hero.png
│   │   ├── home-mobile-principles.png
│   │   ├── ... (all screenshot matrix)
│   │   └── gallery-desktop-full.png
│   └── ai-analysis/
│       ├── run-001.md
│       ├── run-002.md
│       └── run-003.md
├── tests/
│   ├── homepage.spec.ts (functional tests)
│   └── visual-qa.spec.ts (screenshot capture)
└── QA_TESTING_PLAN.md (this file)
```

---

## Quick Reference Commands

### Start Dev Server

```bash
npm run dev
```

### Run Functional Tests

```bash
npm run test:e2e
```

### Run Lighthouse (Quick)

```bash
npx lighthouse http://localhost:8080 --view
```

### Capture Screenshots

```bash
npx playwright test tests/visual-qa.spec.ts
```

### Analyze Screenshot

```bash
eai vision ./qa-reports/screenshots/[filename].png --prompt "[analysis prompt]"
```

### Full Test Cycle

```bash
# 1. Ensure server is running
npm run dev &

# 2. Run Lighthouse
npx lighthouse http://localhost:8080 --output=json --output-path=./qa-reports/lighthouse/home-desktop.json --preset=desktop

# 3. Capture screenshots
npx playwright test tests/visual-qa.spec.ts

# 4. Analyze with AI
eai vision ./qa-reports/screenshots/home-desktop-hero.png --prompt "..."
```

---

## Issue Tracking Template

When issues are found, document them:

```markdown
## Issue #[N]

**Source:** Lighthouse / AI Analysis
**Page:** / or /gallery/
**Viewport:** Mobile / Tablet / Desktop
**Severity:** Critical / High / Medium / Low

**Description:**
[What the issue is]

**Location:**
[Where in the page/screenshot]

**Fix Applied:**
[What was changed]

**Files Modified:**

- path/to/file.css
- path/to/file.njk

**Verified Fixed:** ✓ / ✗
```

---

## Success Metrics

| Metric                    | Target        | Current |
| ------------------------- | ------------- | ------- |
| Lighthouse Performance    | 100           | TBD     |
| Lighthouse Accessibility  | 100           | TBD     |
| Lighthouse Best Practices | 100           | TBD     |
| Lighthouse SEO            | 100           | TBD     |
| AI Clean Runs             | 3 consecutive | 0       |
| Total Issues Found        | 0             | TBD     |
| Total Issues Fixed        | 0             | TBD     |

---

## Revision History

| Date       | Version | Changes              |
| ---------- | ------- | -------------------- |
| 2025-12-03 | 1.0     | Initial plan created |

---

## Notes

- Always run `npm run build` before testing to ensure latest changes are reflected
- Keep the dev server running during all tests
- Save all reports for documentation
- Commit after each successful test cycle
- If fixing one issue breaks another, prioritize and re-run full cycle
