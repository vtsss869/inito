# Inito — Design System & Prototype Project

## What this is

A React + Vite project that implements the Inito mobile app's design system as a Storybook component library, with screen prototypes. This is NOT the production app — it's a design-to-code bridge for the Inito fertility/hormone tracker.

## Tech stack

- **React 18** (JSX, no TypeScript)
- **Vite 5** — dev server on port 5173
- **Storybook 10** — component catalog on port 6006 (`npm run storybook`)
- **Vitest** + Playwright — browser-based story tests
- **CSS** — plain CSS with design tokens as CSS custom properties (no CSS-in-JS, no Tailwind)
- **Font**: Montserrat (app), SF Pro (community feature)

## Project structure

```
src/
  components/ds/           # Design system components (Button, Chip, Toggle, etc.)
    foundations/            # Tokens, icon data, foundation stories (Colors, Typography, Icons)
    catalog/               # Additional catalog components
  screens/                 # Full-screen prototypes
  styles/
    tokens.css             # CSS custom properties (colors, spacing, fonts)
    ds.css                 # Typography classes (.t-header-1, .t-body, etc.) and component styles
    global.css             # App-level resets and layout
  assets/                  # Icons (SVG), images, tab bar assets
  stories/                 # Storybook-specific assets
figma/                     # Local .fig files for reference
design-system.md           # Comprehensive DS spec (typography, colors, components)
```

## Commands

- `npm run storybook` — launch Storybook dev server (port 6006)
- `npm run dev` — launch Vite dev server (port 5173)
- `npm run build-storybook` — static Storybook build → `storybook-static/`

## Conventions

### Components
- One component per file: `ComponentName.jsx` + `ComponentName.stories.jsx` in `src/components/ds/`
- Props validated with `prop-types`
- CSS classes prefixed with `.ds-` (e.g. `.ds-button`, `.ds-chip`)
- Component styles live in `src/styles/ds.css`, not in component files

### Design tokens
- All colors, fonts, and spacing defined as CSS custom properties in `src/styles/tokens.css`
- Token names mirror Figma style names (e.g. `--text-black`, `--bg-grey`, `--bg-daily-pink`)
- Typography classes in `ds.css` (`.t-header-1` through `.t-mini-semibold`)
- Do not hardcode hex values in components — always use tokens

### Figma source of truth
- Design System Figma file key: `LwXvi6EzEzOpBt6ZFVOkuq`
- Component specs documented in `design-system.md`
- When Figma and code diverge, Figma is the source of truth (flag discrepancies in code comments)

### Storybook stories
- Co-located with components: `Component.stories.jsx` next to `Component.jsx`
- Foundation stories (Colors, Typography, Icons, Layouts) in `src/components/ds/foundations/`
- Use CSF3 format (object export)

## Custom agents

Configured in `.claude/agents/`, split into two deliberately separate tracks plus an orchestrator. **`lead-agent` decides which track a task belongs to — if it's ambiguous whether something should stay in Figma or turn into real shipped code, it must ask, never guess.**

- **lead-agent** — orchestrator for everything below; use it for tasks that span more than one specialty, or whenever it's unclear which track (design-only vs code-shipping) a task belongs to. Breaks the task into stages, delegates each to the matching agent, and ends with a stage-coverage table plus an aggregated Сделано/Не получилось summary.

Design track (Figma only, nothing shipped as running code):
- **research-agent** — deep research combining clinical/medical evidence with UX/competitive pattern analysis (`feature-research` skill + Mobbin). Writes a project `.md` report and, on request, pushes it into Figma as a formatted research note (SF Pro font, bullets, bold/italic emphasis).
- **design-agent** (formerly figma-icon-sync-agent) — two jobs: (1) takes a brief/context and produces Figma design variants using existing DS components/patterns, each with a rationale note documenting *why* (evidence → derivation → alternatives considered, not just what changed); (2) moves new icon/category artwork from Figma staging into the Icons — 32px/18px reference frames and propagates it into consumers (Symptom Chip, Main Button "Icon replace" slots, category buttons) across the Design System file and the product files (INITO iOS Home, INITO iOS Chart) that reference it. Uses the official Figma MCP tools, not the Console MCP Desktop Bridge plugin the agents below rely on.

Bridge (Figma ↔ code, scoped only to design-system components, not full features):
- **design-system-agent** — builds/syncs DS components between Figma and code
- **design-system-qa-agent** — read-only verification of Figma-vs-Storybook parity (must run before reporting any DS task as complete)

Code-shipping track (a full feature/app, spec through to a live deploy — never touches Figma):
- **spec-agent** — writes `SPEC.md` (states, behavior, edge cases, acceptance criteria) and stops for explicit user approval before anything gets built
- **builder-agent** — implements exactly the approved spec, runs it locally, returns a working URL
- **code-reviewer-agent** — read-only PASS/FAIL against the spec; on FAIL, back to builder-agent until PASS
- **shipper-agent** — on PASS: conventional commit → push (with confirmation) → deploy (Cloudflare Pages or Vercel, whichever this repo is actually configured for) → live URL

## Working with this project

- Always verify visual changes in Storybook (`npm run storybook`), not just in code
- When adding/updating a component, update both the `.jsx` and `.stories.jsx`
- Keep `design-system.md` in sync with any token or component changes
- Figma file references use node IDs — verify they're current before relying on them
