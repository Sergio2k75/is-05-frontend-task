/**
 * Playwright starter example (external site).
 *
 * Boilerplate from `npx playwright init` — useful as a reference for basic
 * browser navigation and assertions. Not tied to this project.
 *
 * Run: npx playwright test e2e_tests/example.spec.ts
 */
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Landing page title includes "Playwright".
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link navigates to Installation', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click primary CTA and verify the docs page loaded.
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
