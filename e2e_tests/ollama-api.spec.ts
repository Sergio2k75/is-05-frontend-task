/**
 * Ollama API smoke tests (no browser).
 *
 * Calls the local Ollama HTTP API directly via Playwright's `request` fixture.
 * Default host: http://localhost:11434 — override with OLLAMA_HOST env var.
 *
 * API reference: https://docs.ollama.com/api/tags
 *
 * Run: npx playwright test e2e_tests/ollama-api.spec.ts
 */
import { test, expect } from '@playwright/test';

const OLLAMA_HOST = process.env.OLLAMA_HOST ?? 'http://localhost:11434';

test('GET /api/tags returns available models', async ({ request }) => {
  // List locally installed models; response shape is { models: ModelSummary[] }.
  const response = await request.get(`${OLLAMA_HOST}/api/tags`);

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body).toHaveProperty('models');
  expect(Array.isArray(body.models)).toBeTruthy();
});
