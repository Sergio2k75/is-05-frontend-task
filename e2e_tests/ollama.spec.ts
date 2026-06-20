/**
 * Ollama Panel UI tests.
 *
 * Exercises the Next.js app in a real browser. Requires the dev server
 * running at http://localhost:3000 (npm run dev).
 *
 * Run: npx playwright test e2e_tests/ollama.spec.ts
 */
import { test, expect } from '@playwright/test';

const APP_URL = 'http://localhost:3000';

test('has title', async ({ page }) => {
  await page.goto(`${APP_URL}/`);

  // Page title should identify the Ollama Panel app.
  await expect(page).toHaveTitle(/Ollama/);
});

test('shows main UI and opens add-host dialog', async ({ page }) => {
  await page.goto(`${APP_URL}/`);

  // Hero section references the version API endpoint.
  await expect(page.getByText('From GET /api/version')).toBeVisible();

  // Core layout: heading and host management controls.
  await expect(page.getByRole('heading', { name: 'Ollama Panel' })).toBeVisible();
  await expect(page.getByRole('button', { name: /add host/i })).toBeVisible();

  // Add-host flow: button opens an accessible dialog.
  await page.getByRole('button', { name: /add host/i }).click();
  await expect(page.getByRole('heading', { name: /add ollama host/i })).toBeVisible();

  // Default local host chip is visible in the host list.
  await expect(
    page.getByRole('button', { name: /select host local/i })
  ).toBeVisible();
});
