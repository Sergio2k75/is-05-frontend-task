/**
 * Reference example kept for Playwright basics.
 *
 * This file is intentionally lightweight and can be used as a template for new
 * browser tests. The project-specific coverage lives in the other spec files.
 *
 * Run: npx playwright test e2e_tests/example.spec.ts
 */
import { expect, test } from '@playwright/test';

test('loads the Playwright docs home page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await expect(page.getByText('link', { name: 'Getting started'})).toBeVisible();
});
