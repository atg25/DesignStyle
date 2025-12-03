import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/MCM|Mid-Century Modern/i);
  });

  test('navigation is visible', async ({ page }) => {
    await expect(page.locator('nav')).toBeVisible();
    // Use first() to handle mobile/desktop nav duplicates
    await expect(page.getByRole('link', { name: 'Home', exact: true }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Principles', exact: true }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Designers', exact: true }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Gallery', exact: true }).first()).toBeVisible();
  });

  test('hero section is visible', async ({ page }) => {
    await expect(page.locator('#hero, .hero, [class*="hero"]').first()).toBeVisible();
  });

  test('gallery link navigates correctly', async ({ page }) => {
    // Click the first Gallery link (main nav)
    await page.getByRole('link', { name: 'Gallery', exact: true }).first().click();
    await expect(page).toHaveURL(/\/gallery/);
  });
});

test.describe('Gallery Page', () => {
  test('gallery page loads correctly', async ({ page }) => {
    await page.goto('/gallery/');
    await expect(page.locator('h1')).toContainText(/gallery/i);
  });
});
