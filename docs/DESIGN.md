# DESIGN.md

> Agent-readable style guide. Fill this in **before** writing any UI. Keep it in sync with `app/globals.css` — the agent reads both.

## Product

- Product type: <!-- e.g. SaaS dashboard, marketing landing -->
- Audience: <!-- e.g. technical users, designers, end consumers -->
- Tone: <!-- e.g. precise, calm, high-signal / playful, energetic -->

## Visual Direction

- Style: <!-- e.g. clean, dense, professional, minimal -->
- Avoid: <!-- e.g. generic gradient SaaS look, glassmorphism, neumorphism -->

## Color Tokens

| Token                   | Hex       | Usage                                    |
| ----------------------- | --------- | ---------------------------------------- |
| `color.primary`         | `#0000FF` | Primary buttons, CTAs, accent highlights |
| `color.text.default`    | `#111111` | Headings, navigation links               |
| `color.text.secondary`  | `#444444` | Paragraphs, descriptions                 |
| `color.text.inverse`    | `#FFFFFF` | Text on primary or dark backgrounds      |
| `color.background`      | `#FFFFFF` | Default page background                  |
| `color.background.dark` | `#0A0A0A` | Dark sections / hero backgrounds         |
| `color.border`          | `#E5E5E5` | Input borders and subtle dividers        |

> Replace the hex values above with the tokens extracted from your Figma file.

## Typography

Primary font family: <!-- e.g. Inter, Geist, Graphik, ... -->
Fallback: project default (`var(--font-geist-sans)`).

| Style          | Weight | Size | Line Height |
| -------------- | ------ | ---- | ----------- |
| `type.h1`      | 700    | 64px | 72px        |
| `type.h2`      | 700    | 48px | 56px        |
| `type.h3`      | 600    | 24px | 32px        |
| `type.body`    | 400    | 16px | 24px        |
| `type.button`  | 500    | 16px | 24px        |
| `type.caption` | 400    | 14px | 20px        |

## Spacing And Radius

| Token             | Value | Usage                       |
| ----------------- | ----- | --------------------------- |
| `radius.button`   | 12px  | Primary button radius       |
| `radius.input`    | 12px  | Input field radius          |
| `radius.card`     | 16px  | Card / surface radius       |
| `space.control.x` | 24px  | Horizontal button padding   |
| `space.control.y` | 12px  | Vertical button padding     |

## Components

- Prefer composition from `components/ui` primitives.
- Compose screens from Card, Button, Input, Dialog, Sheet, Tabs, Table, Badge.
- Do not create one-off components if an existing primitive fits.

## Interaction States

- Every interactive element must define hover, focus-visible, disabled, loading, and error states.
- Keyboard navigation is required end-to-end.

## Accessibility

- Target WCAG 2.2 AA.
- Preserve visible focus rings on every interactive element.
- Avoid low-contrast muted text for primary content.

## Responsive Behavior

- Mobile-first.
- Tables degrade into cards or horizontal scroll with clear affordance.
- Sidebars collapse to Sheet on mobile.
- Hero typography scales down gracefully (`text-[40px]` mobile → `text-[64px]` desktop).
