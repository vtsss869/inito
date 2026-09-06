---
name: new-component
description: Create a new React+TS+Tailwind DS component from a Figma frame URL — reads Figma, generates component + stories, previews in Storybook, waits for approval, then commits/pushes/opens PR and runs Chromatic.
---

# /new-component [Figma URL]

Build a fully-typed React component from a Figma frame, using existing design tokens, with Storybook stories and visual review.

## Inputs

- `$ARGUMENTS` — a Figma frame URL (required). Example: `https://www.figma.com/design/LwXvi6EzEzOpBt6ZFVOkuq/...?node-id=123:456`

## Step 1 — Read Figma

1. Extract the file key and node ID from the URL.
2. Use the Figma MCP tools (`get_design_context`, `get_metadata`, `get_screenshot`) to read the frame:
   - All visual states (default, hover, active, disabled, focused, etc.)
   - All variants and component properties
   - Figma Variables and style references (colors, typography, spacing)
   - Exact dimensions, padding, border-radius, shadows
3. Take a screenshot of the frame for visual reference.

## Step 2 — Generate the component

Create `src/components/[Name]/[Name].tsx`:

- **React + TypeScript** — fully typed props interface, no `any`.
- **Tailwind CSS** for styling — use only classes that map to our design tokens from `tokens.json` / `tokens.css` / Tailwind preset.
- **Zero hardcoded colors** — every color must come from a token. If a Figma color has no matching token, **stop and ask the user** before proceeding.
- **All states** from Figma — map every Figma variant/property to a typed prop.
- Export the component as a named export.
- Add `prop-types` if the project uses them (check existing components for convention).
- Follow existing project conventions — check nearby components for patterns (file structure, naming, import style).

## Step 3 — Generate Storybook stories

Create `src/components/[Name]/[Name].stories.tsx`:

- CSF3 format (object exports).
- `tags: ['autodocs']` on the meta.
- `argTypes` for every prop with appropriate controls (`select`, `boolean`, `text`, `range`, etc.).
- One story per Figma state/variant (Default, Hover, Disabled, etc.).
- A `Playground` story with all args exposed.
- An `Overview` story showing all variants side-by-side if there are multiple.

## Step 4 — Preview in Storybook and WAIT

1. Start Storybook: `npm run storybook` (port 6006).
2. Navigate to the new component's story.
3. Take a screenshot and show it to the user.
4. **STOP and tell the user**: "Component ready for review at http://localhost:6006/?path=/story/[story-path]. Reply OK to commit and push, or tell me what to fix."
5. **Do NOT commit or push until the user explicitly says "OK" or "go ahead" or similar confirmation.**
6. If the user requests changes, apply them, re-screenshot, and wait again.

## Step 5 — Commit, push, open PR (on user OK only)

1. Create a new branch: `feat/[component-name]`
2. `git add` the new files.
3. `git commit -m "feat: add [Name] component"`
4. `git push -u origin feat/[component-name]`
5. `gh pr create --fill` — let GitHub auto-fill title and body from the commit.
6. Show the PR URL to the user.

## Step 6 — Run Chromatic

1. Run `npx chromatic` (or the project's chromatic script if one exists).
2. Return the Chromatic build URL for visual diff review.
3. If Chromatic is not configured, tell the user and skip this step.

## Rules

- Never hardcode hex/rgb values — always use tokens.
- If a token is missing, ask the user rather than inventing one.
- Match Figma exactly: spacing, radius, font weight, line-height.
- Keep the component self-contained — no side effects, no global state.
- Do not modify existing files unless strictly necessary (e.g., exporting from an index).
