# is-05-frontend-task

Day 5 homework starter — build a real Figma-driven landing page (or any 5-section UI) using the **AI-frontend workflow** from the workshop: Cursor / Claude Code + Figma MCP + DESIGN.md + Tailwind v4 tokens + shadcn + Next.js 16.

> Slides: [is-05-slidev-frontend](https://koldovsky.github.io/is-05-slidev-frontend/)
> Reference implementation: [koldovsky/is-05-frontend](https://github.com/koldovsky/is-05-frontend)

---

## Quick Start

```bash
git clone https://github.com/koldovsky/is-05-frontend-task.git
cd is-05-frontend-task
npm install
npm run dev          # → http://localhost:3000
```

Then:

```bash
cp .cursor/mcp.json.example .cursor/mcp.json
# Edit .cursor/mcp.json — pick the MCPs you want to use, supply env vars.
# Reload Cursor → MCP panel should show servers as green.
```

---

## What's in the Box

| Path | Purpose |
|------|---------|
| `app/page.tsx` | Empty landing page — replace with your composed sections |
| `app/layout.tsx` | Root layout (Geist fonts, full-height body) |
| `app/globals.css` | Tailwind v4 entry point + token slot |
| `components/sections/` | (empty) — your `Hero`, `Features`, `Pricing`, ... live here |
| `components/ui/` | (empty) — your `Button`, `Input`, `Logo`, ... primitives |
| `docs/prd.md` | Product brief — fill in your Figma URLs and constraints |
| `docs/DESIGN.md` | Agent-readable style guide — fill in your tokens |
| `.cursor/mcp.json.example` | Pre-wired Figma / shadcn / context7 / filesystem MCPs |
| `.agents/skills/` | Pinned Vercel skills (`vercel-react-best-practices`, `web-design-guidelines`) |
| `AGENTS.md` / `CLAUDE.md` | Engineering rules for the agent |
| `skills-lock.json` | Pinned skill versions for reproducibility |

---

## Assignment Checklist

1. **Pick a Figma design** to implement (suggested file in `docs/prd.md`, or bring your own).
2. **Fill `docs/prd.md`** — Figma URLs + audience + constraints.
3. **Fill `docs/DESIGN.md`** — colors, typography, spacing, radius from your Figma.
4. **Translate `DESIGN.md` into tokens** in `app/globals.css` (`:root` + `@theme inline`).
5. **Implement at least 3 sections** as RSC components in `components/sections/`, composed from primitives in `components/ui/`.
6. **Add at least 1 client component** (`"use client"`) with proper a11y (focus, aria, keyboard) — burger menu, dialog, tabs, etc.
7. **Run** `npm run lint`, `npx tsc --noEmit`, `npm run build` — all green.
8. **Open a PR** to `koldovsky/is-05-frontend-task` from a branch named `frontend/<your-github-username>`.

### Bonus

- Wire **Figma MCP** properly and demo a "URL → section" generation in the PR description.
- Install **caveman** in your agent and screenshot `/caveman-stats` after the session.
- Run `/caveman:compress AGENTS.md` and commit both `AGENTS.md` (compressed) and `AGENTS.original.md`.
- Use **shadcn MCP** to install at least one block, re-themed through your tokens.
- Add a Playwright MCP screenshot QA step.
- Deploy to **Vercel** and put the preview URL in the PR.
- Add `docs/frontend-testing/<your-page>.md` — A/B compare the same prompt with vs without DESIGN.md / Figma MCP.

---

## Workflow Reminder

The canonical 2026 frontend agent loop:

```text
1. Product intent       → docs/prd.md
2. Design context       → Figma frame URL (Figma MCP) + docs/DESIGN.md
3. Engineering context  → AGENTS.md / CLAUDE.md
4. Component context    → components/ui + (optionally) shadcn MCP
5. Agent plan           → ask agent to plan first, no edits
6. Human review         → confirm scope
7. Implementation       → agent edits files
8. Verification         → lint, typecheck, build
9. Visual QA            → Playwright MCP screenshots vs Figma
10. PR                  → human + AI code review on the PR
```

---

## Useful Commands

```bash
npm run dev              # dev server (Turbopack)
npm run build            # production build
npm run lint             # eslint
npx tsc --noEmit         # typecheck
```

---

## License

MIT — same as the parent workshop materials.
