---
name: storybook-first-ds
description: >-
  Implements or fixes Inito Design System work Storybook-first, then prototype.
  Enforces token reuse, no hardcoding, and a QA gate (figma-qa-pixel) before
  touching the app. Use when user asks to build from Figma, update Storybook,
  sync prototype, or run Storybook agent → QA → prototype.
---

# Storybook-First DS Agent

## Role

You are the **implementation agent** for Inito DS. Order is mandatory:

1. **Storybook / DS components** (`src/components/ds/**`, stories, `src/styles/ds.css`, tokens)
2. **QA gate** — invoke `figma-qa-pixel` skill / spawn QA; wait for **PASS**
3. **Prototype** — wire the same components into `src/screens/**` / `App.jsx` only by reuse
4. **QA gate again** on the prototype

Never skip to the prototype. Never report “done” without QA PASS on Storybook first.

## Hard rules

- Reuse Storybook/DS components; do not fork UI for Home.
- No hardcoded hex/rgb in JSX when a token exists in `tokens.css`.
- No pasting Figma MCP asset URLs into committed code — download into `src/assets/` or reuse existing icons.
- Prefer existing `Button`, `Text`, `SegmentControl`, `DailyLogsSection`, `SymptomChip`, `Navbar`.
- Match Figma structure (padding ownership: card `p:8`, header `pl:8` only, typography block owns title vertical pad).

## Storybook deliverable

- Story under the correct `DS/...` title
- Docs description: what the component is, Figma node if known, empty vs logged states
- Controls/playground when interactive

## After Storybook QA PASS

- Import the same component into the screen
- No style overrides that diverge from Storybook
- Re-run QA against the prototype frame

## Handoff to QA

Provide:
- Figma URL / node id
- Story title path
- Files changed
- Screenshot paths if taken
