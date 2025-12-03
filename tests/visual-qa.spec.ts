import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Visual QA Screenshot Capture
 *
 * Captures screenshots of all pages at all viewports for AI analysis.
 * Run with: npx playwright test tests/visual-qa.spec.ts --project=chromium
 *
 * Screenshots saved to: ./qa-reports/screenshots/
 */

// Viewport configurations
const viewports = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1440, height: 900 },
};

// Page configurations
const pages = [
  { name: 'home', path: '/' },
  { name: 'gallery', path: '/gallery/' },
];

// Sections to capture on homepage (with scroll positions)
const homeSections = [
  { name: 'hero', selector: '#hero, .hero, [class*="hero"]' },
  { name: 'principles', selector: '#principles, [class*="principles"]' },
  { name: 'designers', selector: '#designers, [class*="designers"]' },
  { name: 'impact', selector: '#conclusion, [class*="conclusion"]' },
  { name: 'footer', selector: 'footer' },
];

// Ensure screenshots directory exists
const screenshotsDir = './qa-reports/screenshots';

test.beforeAll(async () => {
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }
});

// Generate tests for each viewport and page combination
for (const [viewportName, viewport] of Object.entries(viewports)) {
  test.describe(`${viewportName} viewport (${viewport.width}x${viewport.height})`, () => {
    test.use({ viewport });

    // Full page screenshots
    for (const page of pages) {
      test(`${page.name} - full page`, async ({ page: playwrightPage }) => {
        await playwrightPage.goto(page.path);
        await playwrightPage.waitForLoadState('networkidle');

        const filename = `${page.name}-${viewportName}-full.png`;
        await playwrightPage.screenshot({
          path: path.join(screenshotsDir, filename),
          fullPage: true,
        });

        // Basic assertion to ensure page loaded
        await expect(playwrightPage.locator('body')).toBeVisible();
      });
    }

    // Section-specific screenshots for homepage
    for (const section of homeSections) {
      test(`home - ${section.name} section`, async ({ page: playwrightPage }) => {
        await playwrightPage.goto('/');
        await playwrightPage.waitForLoadState('networkidle');

        const sectionElement = playwrightPage.locator(section.selector).first();

        // Scroll section into view
        await sectionElement.scrollIntoViewIfNeeded();
        await playwrightPage.waitForTimeout(300); // Allow animations to settle

        const filename = `home-${viewportName}-${section.name}.png`;

        // Try to capture just the section, fallback to viewport if section is larger
        try {
          await sectionElement.screenshot({
            path: path.join(screenshotsDir, filename),
          });
        } catch {
          // If section screenshot fails, capture viewport
          await playwrightPage.screenshot({
            path: path.join(screenshotsDir, filename),
          });
        }

        await expect(sectionElement).toBeVisible();
      });
    }
  });
}

// Special test: Capture navigation in all states
test.describe('Navigation states', () => {
  test('desktop nav hover states', async ({ page }) => {
    await page.setViewportSize(viewports.desktop);
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Capture nav in default state
    await page.screenshot({
      path: path.join(screenshotsDir, 'nav-desktop-default.png'),
      clip: { x: 0, y: 0, width: 1440, height: 100 },
    });

    // Hover over a nav link and capture
    await page.getByRole('link', { name: 'Principles', exact: true }).first().hover();
    await page.waitForTimeout(200);

    await page.screenshot({
      path: path.join(screenshotsDir, 'nav-desktop-hover.png'),
      clip: { x: 0, y: 0, width: 1440, height: 100 },
    });
  });

  test('mobile nav toggle', async ({ page }) => {
    await page.setViewportSize(viewports.mobile);
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Capture closed state
    await page.screenshot({
      path: path.join(screenshotsDir, 'nav-mobile-closed.png'),
      clip: { x: 0, y: 0, width: 375, height: 80 },
    });

    // Open mobile nav if toggle exists
    const navToggle = page
      .locator('.nav-toggle, [class*="hamburger"], [class*="menu-toggle"]')
      .first();
    if (await navToggle.isVisible()) {
      await navToggle.click();
      await page.waitForTimeout(300);

      await page.screenshot({
        path: path.join(screenshotsDir, 'nav-mobile-open.png'),
      });
    }
  });
});

// Summary test that lists all captured screenshots
test('summary - list all screenshots', async () => {
  const files = fs.readdirSync(screenshotsDir).filter((f) => f.endsWith('.png'));
  console.log('\n📸 Screenshots captured:');
  files.forEach((f) => console.log(`   - ${f}`));
  console.log(`\n   Total: ${files.length} screenshots`);
  console.log(`   Location: ${path.resolve(screenshotsDir)}\n`);

  expect(files.length).toBeGreaterThan(0);
});
