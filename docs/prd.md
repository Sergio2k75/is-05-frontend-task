# Product Requirements

> Fill this file with **what** you are building, **for whom**, and the **Figma URLs** that act as the source of truth. The agent reads this on every session via `AGENTS.md`.

## What

<!-- 1–3 sentences: what page / app are you building? -->
Example: We are implementing a responsive marketing landing page for a developer-tools SaaS.

## For Whom

<!-- 1 sentence: who is the audience? -->
Example: Senior backend engineers evaluating an internal observability platform.

## Constraints

- Mobile-first responsive (375px → 1440px+)
- Accessibility: WCAG 2.2 AA, visible focus rings, keyboard navigation
- Zero hardcoded hex colors in components — use tokens from `app/globals.css`
- Server Components by default; `"use client"` only where strictly needed
- Bundle: do not add charting / animation libraries unless mandatory

## Figma Source of Truth

<!--
Replace the example URLs below with your own Figma file.

Use *Copy link to selection* in Figma to get a URL with `?node-id=...` —
this gives the agent the **scoped frame**, not the whole file.
-->

Main Figma file:
https://www.figma.com/design/REPLACE_ME/Your-Design-File

Mobile layout (frame URL with `node-id`):
https://www.figma.com/design/REPLACE_ME/Your-Design-File?node-id=REPLACE_ME

Desktop layout (frame URL with `node-id`):
https://www.figma.com/design/REPLACE_ME/Your-Design-File?node-id=REPLACE_ME

## Sections to Implement (minimum 3)

- [ ] Hero
- [ ] Features
- [ ] Pricing
- [ ] Newsletter / CTA
- [ ] Contact / Footer

## Interaction Requirements (minimum 1 client component)

- [ ] Burger menu (mobile nav)
- [ ] Tabs / accordion
- [ ] Modal / dialog / sheet
- [ ] Tooltip
- [ ] Form with validation
