---
name: tokens-sync
description: Sync design tokens from Figma to code — export Variables via Figma MCP, build tokens.css with Style Dictionary, diff, commit and push.
---

# Tokens Sync — Figma → Code Pipeline

Automate the full design-token pipeline: read Figma Variables, write `tokens.json` (W3C DTCG), build `src/styles/tokens.css`, review the diff, commit & push.

## Inputs

- `FIGMA_URL` (optional) — a Figma file or node URL. Defaults to `https://www.figma.com/design/LwXvi6EzEzOpBt6ZFVOkuq` (the Inito Design System file).

## Steps

### 1. EXPORT — Read Figma Variables

1. Extract `fileKey` from the URL (default: `LwXvi6EzEzOpBt6ZFVOkuq`).
2. Use the Figma MCP tool `get_variable_defs` to fetch all published Variables (colors, spacing, radii, typography) from the file.
3. If `get_variable_defs` is unavailable, fall back to `get_figma_data` or `get_design_context` to read paint/text styles.
4. Build a `tokens/tokens.json` file in **W3C DTCG format** (`$value`, `$type`). Preserve aliases where Figma uses variable references.
5. Before overwriting, read the existing `tokens/tokens.json` and compute a diff. **Do NOT delete tokens** that exist in code but are missing from Figma without asking the user first — they may be hand-added.

### 2. BUILD — Generate CSS

1. Run:
   ```
   node sd.config.js
   ```
   This executes Style Dictionary and writes `src/styles/tokens.css`.
2. If `sd.config.js` does not exist, create the default config (source: `tokens/**/*.json`, platform: css, output: `src/styles/tokens.css`, DTCG mode on).
3. If the build fails, read the error, fix `tokens.json` (likely a format issue), and retry once.

### 3. DIFF — Review changes

1. Run `git diff tokens/tokens.json src/styles/tokens.css` and show the output to the user.
2. Summarize: how many tokens total, how many added / changed / removed.
3. If any tokens were **renamed** in Figma, update both JSON keys and CSS variable names consistently.
4. Wait for user confirmation before committing. If the user says to proceed, continue. If they flag issues, fix and re-diff.

### 4. COMMIT — Save to git

1. Stage the changed files:
   ```
   git add tokens/tokens.json src/styles/tokens.css
   ```
2. Commit with message:
   ```
   chore(tokens): sync design tokens from Figma
   ```
   Include a short body listing what changed (e.g., "Added 3 colors, updated spacing.16").
3. Push to the current branch:
   ```
   git push
   ```
4. Report: total token count, what was added/changed, and the commit SHA.

## Rules

- Never delete a token from `tokens.json` without explicit user confirmation.
- If a Figma Variable was renamed, update the key in JSON **and** the CSS variable name — keep them consistent.
- Gradients (linear-gradient values) are NOT standard DTCG `color` type — store them as `$type: "other"` or keep them as manual entries in `tokens.css`.
- Shadows use the DTCG `shadow` composite type with `offsetX`, `offsetY`, `blur`, `spread`, `color`.
- Font families use the DTCG `fontFamily` type (array of strings).
- End every run with a short summary: token count, changes, commit link.
