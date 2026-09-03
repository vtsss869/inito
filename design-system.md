# Inito — Design System Reference

Source: Figma file "Design System - Inito" (fileKey `LwXvi6EzEzOpBt6ZFVOkuq`). Compiled from the Typography page, Icons page, Colors page, and 20 additional component nodes (Buttons, Text Field, Chips, Toggle, Segment Control, Navbar, Row/List Item, Calendar, Day Status Card, Cards, Tooltip, Carousel Dots, Chart Analytics, etc).

---

## 1. Typography

Font family: **Montserrat**

| Style | Size / Line height | Weight | Tracking |
|---|---|---|---|
| Header 1 | 40 / 40 | Medium | — |
| Header 2 | 28 / 32 | Bold | — |
| Header 3 | 24 / 27 | SemiBold | — |
| Header 4 | 20 / 24 | SemiBold | — |
| Lead | 20 / 20 | Medium | — |
| Body | 14 / 20 | Medium (also has strikethrough variant) | — |
| Caption Bold 16 | 16 / 20 | SemiBold | — |
| Caption 16 | 16 / 20 | Medium | — |
| Caption Bold 14 | 14 / 16 | SemiBold | — |
| Caption 14 | 14 / 17 | Medium | — |
| Mini | 12 / 14 | Medium | 0.1 |
| Mini Semibold | 10 / 10 | SemiBold | 1 |
| Menu Caption Semibold | 9 / 11 | SemiBold | — |

These style names recur constantly as component text styles below (e.g. "Caption Bold 16" = 16px/20 SemiBold #112D35, used for button/list labels).

### Community type scale (SF Pro) — distinct from the app scale above

Figma frame "New - SFPro - Community" (node `22321:5`) on the 🧬 Text Styles page defines a
second, separate 11-style type scale in **SF Pro** (not Montserrat), used only by the Community
feature. The three sibling frames on that page — "App Styles/ Mode 1", "New App Styles - for
redesign - not used", "Website - not used" — are legacy/unused and intentionally not documented
here. Full table and live rendering: `DS/Foundations/Text Styles → Community (SF Pro)` in
Storybook (`src/components/ds/foundations/tokens.js` → `TEXT_STYLES_COMMUNITY`, classes `.tc-*` in
`src/styles/ds.css`). Styles: Title 20 semibold, Subtitle 16 semibold, Body 14 semibold, Body 14,
Body 13 semibold, Body 13, Body 12 medium, Body 12, Caption 11 semibold, Caption 11, Caption 8. SF
Pro isn't a licensed web font — rendered with a system-font fallback stack (`--font-community` in
`src/styles/tokens.css`).

---

## 2. Colors

### Text
| Token | Hex |
|---|---|
| Text/Black | `#112D35` |
| Text/Grey | `#7F8598` |
| Text/White | `#FFFFFF` |
| Text/Error | `#EF6262` |
| Success | `#109E6F` |
| CTA White | `#2D2F33` *(named "CTA White" in file but is a dark color — kept as found)* |

### Backgrounds
| Token | Hex |
|---|---|
| Background Grey | `#F6F6F6` |
| Background Light Blue-Grey | `#F7F8FD` |
| Background Violet | `#EEDCFF` |
| Background Pink (Preg) | `#F5D7F3` |
| Background Blue Dark | `#B1E5EF` |
| Background Blue BBT | `#C3D3F4` |
| Background Blue | `#D9FBFF` |
| Background Tan | `#FFEEEE` *(swatch value; components use a near-identical `#FFEEE3` — see Chips/Calendar below)* |
| Background Brown | `#ECDAC8` |
| Background Red Light | `#FDE6E3` |
| Background Green (10%) | `#109E6F` at 10% opacity |
| Background Green Clear | `#D0F1DC` |
| Background Green Transparent | `#E4FBF3` *(confirmed via Chips/Calendar usage)* |
| Violet Gradient | rgba (gradient, value not captured) |
| Transparent | `rgba(255,255,255,0.0001)` |

### Brand / Objects
| Token | Hex |
|---|---|
| Main (brand teal) | `#38ABC5` |
| Main Hover | `#2E9BB4` |
| Grey (bg) | `#F6FBFF` |
| Grey Icons | `#BDC1CD` |
| Grey Borders | `#EAECED` |

### Symptoms-specific
| Token | Hex |
|---|---|
| Flow | `#F46E5C` |
| Weight | `#666975` |
| Pelvic pain | `#DB4368` |
| Discharge/Mood — Creamy/Eggwhite/Sticky, Irritated/Self Critical | `#F0950E` |
| Discharge/Meds/Mood — Watery, Calm | `#409CC3` |
| Discharge/Mood — Green, Playful/Happy/Energetic | `#86A430` |
| Discharge/Mood — Foul Smelling, Depressed/Anxious | `#A98A5B` |
| Sex & Insemination | `#D96BCF` |
| Pregnancy Test | `#56B9B9` |
| Follicle Tracking | `#AB66A5` |
| BBT | `#7F8598` |
| Blood test values | `#E35454` |
| Mood (Mood Swings/Guilty/Sad) | `#E35454` |
| Caffeine | `#94816C` |
| Alcohol | `#414458` |
| Symptom icons (generic) | `#DB4368` |

### Hormones
| Hormone | Hex |
|---|---|
| E3G | `#109E6F` |
| PdG | `#1989BC` |
| LH | `#8828E2` |
| FSH | `#ED9512` |
| hCG | `#AB66A5` |

### Day Status Gradients (linear, ~158°)
| State | Stops |
|---|---|
| Ovulation | `#995AD3` → `#8828E2` |
| High Fertility | `#0ACA89` → `#109E6F` |
| Low Fertility | `#FF7955` → `#EC6766` |
| Miss Fertility / Attention | `#F87676` → `#DD525C` |
| Fertile Window | `#38ABC5` → `#009BAE` *(corrected from `#008697` after reading the live Figma paint style — see `--gradient-fertile-window` in tokens.css)* |
| Notify *(previously listed here as "Unknown Fertility / Rate app" — `#B2B8CA` → `#7F8598` — is this style's actual Figma name)* | `#B2B8CA` → `#7F8598` |
| Pregnancy | `#D287CC` → `#AB66A5` (154° angle) |
| WFPR | `#557AD0` → `#4750B9` |

All 55 Figma paint styles on the 🧬 Colors & Styles page (Text/, Background/, Symptoms/, Hormones/,
Day Status Gradients/, plus a handful of ungrouped base colors) are reconciled against
`src/styles/tokens.css` and documented with live swatches at `DS/Foundations/Colors & Styles` in
Storybook (`src/components/ds/foundations/tokens.js` → `COLOR_GROUPS` / `GRADIENT_TOKENS`). Note:
Figma has **two** paint styles both literally named "Symptoms/Vaginal Discharge & Mood" on
different nodes with different hex values (`#86A430` and `#A98A5B`) — a genuine naming collision
in the source file, kept as two distinct entries rather than merged.

### Shadows / Elevation
| Token | Value |
|---|---|
| Card/Elevation | `drop-shadow(0px 16px 28px rgba(0,0,0,0.07))` + `drop-shadow(0px 6px 12px rgba(0,0,0,0.06))` |
| Tooltip shadow (lighter variant) | `drop-shadow(0px 6px 6px rgba(0,0,0,0.06))` + `drop-shadow(0px 16px 14px rgba(0,0,0,0.07))` |
| Toggle knob shadow | `0px 6px 12px rgba(0,0,0,0.06)` + `0px 16px 28px rgba(0,0,0,0.07)` |

The Colors page also names (without captured values) a "Separator top / bottom / left / right" effect group — likely thin border/shadow separators, not resolved to exact values.

### Spacing & Corner Radius
No standalone spacing/radius token specimen page was found among the reviewed nodes. Values below are as **observed consistently across components**:

- Padding scale in use: `4, 6, 8, 10, 12, 14, 16, 20, 24, 32` px
- Corner radius scale in use:
  - `4px` — Toast bar
  - `8px` — tooltip
  - `20px` — list/row items, nested sub-rows
  - `24px` — cards (Symptoms Card, Shop image block)
  - `28px` — Day Status Card, general "Card" elevation shape
  - `36px` — text field
  - `100px` (pill/full) — buttons, chips, toggles, segment control, calendar day cell (`25px` on a 36px box = pill)

---

## 3. Components

### Buttons ("Main Button")
Sizes: **Large** (60px, `px-32 py-14`), **Medium** (44px), **Small** (32px). Types: Text, Text Icon, Icon Text, Icon, Icon+Icon. Radius: `100px` (pill) at every size. Label font: Caption Bold 16 for Large; Caption Bold 14 for Medium/Small (based on sampled uses elsewhere).

| Style | Default | Pressed |
|---|---|---|
| Primary | bg `#112D35`, text white | bg `#D9FBFF`, text `#112D35` |
| Secondary | bg transparent/white, border `#EAECED`, text `#112D35` | bg `#EAECED`, text `#112D35` |
| Promo | bg `#38ABC5`, text white | bg `#D9FBFF`, text `#38ABC5` |
| Transparent | bg transparent, text `#112D35` | (state exists, not sampled) |

Disabled state exists for every style/size but exact color wasn't sampled directly.

A separate **Link** component (text-only, no background) exists in Large/Medium at Text / Text Icon / Icon Text variants.

### Chips
Pill (`radius 100px`), height 32 for text-only, `px-12`; Text Icon/Icon Text add a 32×32 circular icon slot. Label font: Caption Bold 14.

| Purpose | Active | Inactive/Disabled |
|---|---|---|
| Info | bg `#F6F6F6`, text `#7F8598` | bg `#F6F6F6`, text `#BDC1CD` |
| Achievement | bg `#E4FBF3`, text white | — |
| Alert | bg `#FFEEE3`, text `#EF6262` | — |
| Promo | bg transparent, text `#38ABC5` | — |
| Disabled | bg `#F6F6F6`, text `#BDC1CD` | — |

### Text Field
Radius `36px`, `1px` border, `px-16 py-8`, bg white, gap `6px`. Value/label text: Caption 16 (Medium). Helper text: Mini 12, tracking 0.1.

| State | Border | Value text | Helper text |
|---|---|---|---|
| Default (placeholder) | `#EAECED` | `#7F8598` | `#7F8598` |
| Focused | `#7F8598` | `#112D35` | `#7F8598` |
| Filled | `#EAECED` | `#112D35` | `#7F8598` |
| Error | `#EF6262` | `#112D35` | `#EF6262` |

Optional 32×32 icon slots on left and right (clear/right icon).

### Toggle / Switch
Two families found:

**iOS-old style** (32×32 box, 32×16 pill track, 14px knob):
- On (enabled): track `#38ABC5`, white knob (with elevation shadow), right-aligned.
- Off (enabled): track `#8B939B`, white knob, left-aligned.
- On/Off (disabled): same track colors, knob `#C9CFD6`, no shadow.

**iOS-new "Toogle" / Android Switch** (52×32 pill track):
- On: track `#38ABC5`, white knob (large, `p-11`).
- Off: track `rgba(197,204,206,0.2)` with `2px` border `#BDC1CD`, knob `#BDC1CD`.

### Segment Button / Segment Control
Pill container, height `44px`, `px-16 py-6`, radius `100px`. Label font: Caption Bold 14.

| State | Background | Text |
|---|---|---|
| Chosen | white | `#112D35` |
| Option (unselected) | `#F6F6F6` | `#7F8598` |
| Disabled | `#F6F6F6` | `#7F8598` at 30% opacity |

A related "Segment Control" (start/middle/end) component set exists for grouped multi-way switches (Selected/Default states), same visual family.

### Navbar / Header
bg white, `pt-8 pb-16`, `px-12` (or `px-24`/`pr-12` when no left icon).
- Title: **Header 2** (28/32 Bold), `#112D35` — supports Left or Center alignment.
- Subtitle: **Header 4** (20/24 SemiBold), `#112D35`, indented under the left icon (`pl-48`).
- Left/right icon buttons: transparent bg, `p-6`, `rounded-100`, 32×32 icon.
- "Today" pill button: bg white, `2px` border `#EAECED`, `rounded-100`, `h-32`, `px-12 py-2`, text Caption Bold 14 `#112D35`.
- Text-only right action ("Caption"): text `#38ABC5`, Caption Bold 14.
- Optional Inito logo slot; configurable right-icon layouts: `2 icons` / `1 icon` / `Caption+icon` / `Caption`.
- A separate **Subtitle** component (Section divider / Legend types) is used as a general content separator elsewhere (e.g. calendar, chart legends), per the designer's note in-file. "Section divider": 24×24 icon + Mini-12 label, bottom-aligned, `pt-8`, no gap between icon and label. The icon is one of the "24px — Pictograms for subtitles" catalog glyphs (`sys-calendar-pictograms-*.svg` — e.g. `state-default-type-test-results`, `state-new`), grey `#BDC1CD` with an optional red `#EF6262` "new/updates" badge — not the older standalone `pictogram-*.svg` files, whose viewBox is offset into a larger icon sheet and renders visibly off-center.

### Row / List Item ("Item")
Base container: bg `#F6F6F6`, `rounded-20`, `px-16 py-12`, fixed width `327px`. Multiple Types: `Text`, `Icon Text`, `Toogle`, `Icon Text Text`, `Icon text Button`, `Text + Item`, `Table`, `Icon Text Text (2)`.
- Optional title/eyebrow (above value): Caption 16 Medium, color `rgba(17,45,53,0.4)` (Text/Black at 40%).
- Value/label: Caption Bold 16, `#112D35`.
- Description line: Mini 12, tracking 0.1, `#7F8598`.
- Chevron affordance: 32×32 transparent icon button.
- Embedded toggle uses the 52×32 Toogle component.
- `Table` type (327×44) is more compact: `px-16 py-10` (10px top/bottom, not the base row's 12px), Mini-12 columns (Date / Time / Fertility level).
- `Icon text Button` variant includes a full-width CTA row: bg `#112D35`, `rounded-100`, `h-44`, text white Caption Bold 14 (e.g. "Go to shop").
- `Text + Item` variant nests a secondary **white** `rounded-20` sub-row inside the grey outer row (e.g. "Change term").

### Calendar Day Cell (".date")
36×36 circle (`rounded-25`), label Caption 16 Medium, centered.

Background (state-dependent, Conceiving cycle unless noted):
| Condition | Background |
|---|---|
| Chosen + editing period | `#EF6262` (text white) |
| Unknown fertility, upcoming/none period | `#F6F6F6` |
| Fertile Window / Ov confirmed | `#D9FBFF` |
| Low fertility, or period logged | `#FFEEE3` |
| High fertility | `#E4FBF3` |
| Peak fertility | `#EEDCFF` |
| Past month / upcoming (chosen) | `#EAECED` |
| Pregnancy cycle, today | `#F5D7F3` |
| Default | transparent |

Text color by meaning (independent of background): period `#F46E5C`, fertile window/ov confirmed `#1989BC`, low `#ED9512`, high `#109E6F`, peak `#8828E2`, past-month (muted) `#7F8598`, pregnancy cycle `#AB66A5`, default `#112D35`.

### Day Status Card
`rounded-28`, `p-12`/`p-16`, full-bleed gradient background (see Day Status Gradients table above for exact stops per state: Attention, High/Low Fertility, Fertile Window, Informational, Pregnancy, Ovulation confirmed).
- Status pill(s): bg `rgba(255,255,255,0.15)`, text white, Caption Bold 14.
- Headline: **Header 2** (28/32 Bold), white, with a subtle `drop-shadow(0px 0.5px rgba(0,0,0,0.3))`.
- Pregnancy variant adds a progress bar (track `#D388CC`, fill white, `h-8`, pill) plus Mini-12 week/due-date captions.

### Cards — Shop Card
bg white, `pt-24`, bottom border `1px #EAECED`, width `366px`.
- Image block: bg `#ECECF2`, `rounded-24`, `h-140`.
- Title: Header 4 (20/24 SemiBold) `#112D35`. Description: Body (14/20 Medium) `#112D35`.
- Price: Header 4 `#112D35`.
- Primary CTA ("Add"): bg `#112D35`, `rounded-100`, `px-20 py-6`, text white Caption Bold 14.
- Secondary CTA ("Subscribe"): bg white, `2px` border `#EAECED`, `rounded-100`, text `#112D35`.
- Savings row: grey Chip (`#F6F6F6`/`#7F8598`) + brand-colored (`#38ABC5`) link-style chip with icon.
- Variant axes: Quantity (`CTA` / `One` / `Two+`) × Type (`Ovulation` / `Pregnancy`) — same styling family.

### Cards — Symptoms Card
bg white, `1px` border `#EAECED`, `rounded-24`, `p-8`, width `342px`.
- Header row: title Caption Bold 16 `#112D35` + optional secondary icon button + info icon button (both transparent, 32×32).
- Body: grid of pill "Symptoms Button" toggles — bg `#F6F6F6`, `rounded-100`, `pl-8 pr-20 py-6`, 32×32 icon + Caption Bold 14 label `#112D35` (reads "None" when unselected).
- Footer helper caption: Mini 12, tracking 0.1, `#7F8598`.
- Related sub-components in the same section (not individually re-sampled, same palette family): Diary Card (Empty/Filled/Filled Opened states), `.action_cell`, `.inputs` (CTA/Active/Unit-of-measurement states), `.info` (Normal/Abnormal states), and a "daily log" category-icon row (Meds, Periods, Sex, Symptom, Moods, Activities, Tests, Preg test, BBT, Diary, Appetite × Filled/Selected).

### Cards — Daily Log Card
Figma "Daily logs cards" COMPONENT_SET, node `22655:90121` (section `Daily logs cards`, node `22650:20481`, on the "🌸 Cards (Shop, Symptoms, Day status)" canvas) — a composed per-category log-entry card, distinct from the smaller "daily log" icon+label chip above and from Symptoms Card. 56 variants across 3 property axes: `category` (21 options — Period, Sex, BBT, Mood, Symptoms, Abdominal pain, Sex Drive, Insemination, Write your journal, Medication, Follicle Tracking, Blood Test Values, Physical Activity, Other, Pregnancy Test, Vaginal Discharge, Hot Flashes, Night Sweats, Sleep, Joints & muscles, Energy & Focus), `Logged` (no/yes), and a per-category `Type` axis (before/after/during, 1/2/3/4, empty/2 meds/as needed med, no temp/in temp, etc).
- Shell: bg white, `1px` border `#EAECED`, `rounded-24`, `p-8`, width `342px` — same shell as Symptoms Card.
- Header: title Caption Bold 16 `#112D35` + trailing chevron icon button (32×32, transparent).
- Chips (when present): "Symptom Chip"/"Symptoms Button" instances, same pill styling as the Symptoms Card body (bg `#F6F6F6`, `rounded-100`, 20px icon + Caption Bold 14 label). `Logged=no` shows the full option menu; `Logged=yes` shows only the selected subset — this state is driven by chip visibility in Figma itself, not a separate style. Selected chips get a **solid per-category tint fill**, not a ring/outline: Period/Abdominal pain/Blood Test Values → `#FDE6E3` (`--bg-daily-red-light`); Sex/Sex Drive/Insemination → `#F5D7F3` (`--bg-daily-pink`); Mood/Follicle Tracking/Vaginal Discharge/Hot Flashes → `#FFEEE3` (`--bg-tan` — the historically-correct Figma value, distinct from the similarly-named but known-off legacy `--bg-daily-tan` token, `#FFEEEE`); Symptoms/Pregnancy Test/Night Sweats → `#B1E5EF` (`--bg-daily-blue-dark`); Physical Activity/Joints & muscles → `#E4FBF3` (`--bg-green-transparent`); Other/Sleep → `#EEDCFF` (`--bg-daily-violet`); Energy & Focus → `#CDDCFB` (`--bg-blue-bbt` — ditto, the correct value vs. the off `--bg-daily-bbt`). BBT, Medication, and Write your journal never show a colored-selected chip in Figma (BBT's temperature reading and Medication's "Add" chip are plain grey pills, not part of a multi-select set).
- Body detail lines (when present): free-form Mini-12 grey text — medication schedule/dosage lines, follicle-tracking measurements, BBT readings/timestamps, or (Write your journal) the diary paragraph itself.
- Footer CTA(s): 1–2 trailing "Log …"/"Edit …"/"Add …" buttons — `variant="primary"` (dark) when solo or first of a pair, `variant="grey"` for the trailing button of a 2-button pair (matches e.g. "Log with InTemp" primary + "Log manually" grey on BBT).
- Chip icons resolve against two 32px icon pools by category: the existing "Symptoms Icons" catalog (`symptoms-icons-32.json`) for Period→Flow, Sex/Sex Drive→Sex & Sex Drive, Mood→Mood, Symptoms→Symptoms, Abdominal pain→Pelvic Pain, Insemination→Insemination, Physical Activity→Physical activity, Other→Other, Pregnancy Test→Pregnancy test, Vaginal Discharge→Vaginal Discharge, Follicle Tracking→Follicle tracking, BBT→General, Medication→Medication, Blood Test Values→Blood test; and a new `daily-log-card-icons-32.json` pool (21 icons exported from Figma component instances named e.g. "Interface/Hot flashes Perimenopause Mild", "Interface/Trouble concentrating" — not part of the Symptoms Icons page, 20578:6957) for the five newer menopause-tracking categories: Hot Flashes, Night Sweats, Sleep, Joints & muscles, Energy & Focus — these DO have real per-chip icon artwork in Figma, not text-only as an earlier pass assumed. Write your journal has no chips at all (free-text card), so no icon set applies.
- Implementation: `src/components/ds/catalog/DailyLogCard.jsx` (+ `dailyLogCardData.js` for the extracted per-variant content and per-category `selectedFill` token, `DailyLogCard.stories.jsx` for all 56 variants grouped by category, `foundations/icon-data/daily-log-card-icons-32.json` + `assets/icons/symptoms/32px/symp32-{hot-flashes,night-sweats,sleep,joints-muscles,energy-focus}-interface-*.svg` for the second icon pool).

### Tooltip
bg white, `rounded-8`, shadow `0px 6px 6px rgba(0,0,0,0.06)` + `0px 16px 14px rgba(0,0,0,0.07)`, with a pointer/tail graphic (up or down, `property1: dow/up`).
- Title: Caption Bold 16, `#112D35`. Description: Caption 14 (14/17 Medium), `#112D35`.
- Buttons: "Dismiss" = bg white, `2px` border `#EAECED`, `rounded-100`, text `#112D35` Caption Bold 14; primary "Okay" = bg `#112D35`, `rounded-100`, text white Caption Bold 14.
- Multi-step variant (`amount=multiple`) replaces the two buttons with "Back"/"Next" text links (`#112D35`) flanking Carousel Dots pagination.

### Carousel Dots
Row of up to 6 dot indicators, `gap-12`, `px-20 py-12`. Active dot `8px`, inactive dots `4px` (inactive color = Grey Icons `#BDC1CD`).

### Toast bar
Dark pill-shaped bar, `320×56`, bg `#112D35` (Text/Black), **`rounded-4`** (not a pill — confirmed via direct node inspection, smaller than every other radius in the scale). `px-16 py-12`, `gap-4`, horizontal, contents vertically centered.
- Optional leading icon, 32×32, single-color glyph recoloring to white (matches the toast's text color) — a plain white "+" in the master component.
- Message: Caption 14 (14/17 Medium), white, flexible width.
- Optional trailing action: a plain `Main Button` instance, white fill, no border, `px-12 py-2` (the small Button size), dark text — composed from the shared Button component (`size="small" variant="secondary"`) rather than one-off markup.
- The master component also contains a second, hidden "button stacked under the text" placement — authoring debris, not reproduced (same pattern noted on the Row page's `Icon Text Text` variant).

---

## 4. Other components present in the file (identified, styling not individually re-sampled)

These were located via metadata but not deep-extracted (either out of scope for a first pass, or full composed screens rather than atomic specimens). They reuse the palette and type scale documented above:

- **iOS/Android Date, Time & Timer Pickers** — native-style pickers, AM/PM variants.
- **Home Notification Card** — many content variants (Empty/Logged Symptoms, Hormones, To-do list, streak states, calendar-state variants: before period / after period / pregnancy).
- **Rating Card ("Rate your experience")** — star rating row, checkbox list, Primary/Secondary card action buttons, comment field.
- **Chart Analytics** — cycle segment tabs, per-day fertility bars (Low/High/Peak/PdG Rise/hCG Normal-Abnormal/Pregnant), Day Status legend chips, Hormone legend chips (BBT/LH/PdG/E3G/hCG/FSH), TTC-vs-Pregnancy chart type toggle, Android chart variants.
- **Logo** (two size variants) and a large illustration/image library (tutorial images, onboarding illustrations, camera/QR/monitor graphics) — not color tokens, excluded from this doc.
- A handful of full composed screens (rating modals, onboarding flows, empty-state mockups) were found at very large node sizes and were skipped as out of scope — they only recombine the components already documented above.

---

## 5. Icons — 🧬 Icons page

Five icon sections, each icon exported from Figma as its own standalone SVG file (one file per
icon, not a sprite/symbol sheet) — 913 icons total under `src/assets/icons/{notification,system,
symptoms/32px,symptoms/18px,flags}/*.svg`. Per-icon metadata (id/file/name/category/viewBox/
intrinsic size) lives in `src/components/ds/foundations/icon-data/*.json`, resolved to an asset
URL via `import.meta.glob(..., {eager:true})` in `IconCatalogHelpers.jsx` and rendered through the
plain `IconAsset`/`Icon` components in `src/components/ds/Icon.jsx` (`<img src=.../>`, no
sprite/symbol machinery). Each set has its own Storybook section under `DS/Components/Icons/*`
with an Overview story (everything assembled, grouped via `groupByCategory`) plus per-category
sub-stories built with `CategoryBlock`/`IconGrid`.

| Section | Figma node | Count | Categories |
|---|---|---|---|
| Notification Icons | `14101:5026` | 45 | 2 ("General — 36×60": 43, "General — 40×40": 2 — the latter both named "Validation", a genuine Figma duplicate kept as separate files) |
| System Icons | `13977:2597` | 296 | 16 (Calendar & Pictograms split into 7, Interface 32px split into 2, plus 32px Web/Old Icons, Onboarding, Referral, 60/80/100px) — includes 4 component-set "State=…" variant groups (10 icons) nested under Interface, Calendar & Pictograms, and Old Icons. The 296th ("Interface/Anonymous Glasses") is a hand-authored addition, not traced from a Figma node — see §6. |
| Symptoms Icons | `20578:6957` (32px root `13952:2759`, 18px root `20578:6958`) | 151 (32px) + 150 (18px) | 22, mirrored at both sizes; the 32px set carries one stray 18×18 "Beverages/Alcohol" debris node alongside the real 32×32 one (kept, disambiguated as `-2`, matching how every other genuine duplicate name in this system is handled) |
| Circle Flag | `15291:10226` | 271 | none (flat list, no sub-categories in Figma) |

Counts were re-read live from Figma for this pass (2026-09) rather than reused from any earlier
estimate. Confirmed duplicate Figma layer names, kept as separate node-id-suffixed files/ids rather
than merged: Notification "Insight" (×2, byte-identical artwork) and "Validation" (×3 across two
size groups); System "Interface/info small", "Interface/Health report", "Interface/Diary",
"Interface/battery2", "Interface/Replace", "Interface/Menu", and the two "Community/Chevron Right
Small" (24px vs 12×24px) — seven pairs total, each pair genuinely distinct artwork.

**Bug fixed 2026-09**: many icons across System and Symptoms (423 files) rendered as solid black
shapes in Storybook. Root cause was not a lost mask/clipPath as first suspected — comparing an
on-disk file byte-for-byte against a fresh Figma REST export showed identical path geometry. The
actual defect was a missing `fill="none"` on each icon's root `<svg>` tag: browsers default
un-filled shape elements to `fill: black`, so any stroke-only path/circle without its own explicit
`fill` attribute rendered as a solid black blob once that inherited default was gone. Fixed by
adding `fill="none"` to the root `<svg>` of every affected file (verified against Figma to confirm
no geometry was actually corrupted, so no re-export was needed).

---

## 6. Community (App) file — `DS/Community/*` catalog

A **separate** Figma file from the main `[Design System] Inito` file documented in §1–5 above:
"Community (App)", fileKey `LLjQAqluK9e7WtuV3HNUK7`, UI KIT canvas → "Community kit" section (node
`201:46123`). Reconciled 2026-09 against the existing Storybook DS to avoid duplicating components
that already exist. Two of its fourteen top-level nodes turned out to be **confirmed duplicates**
of existing DS pieces (documented here, no new component/story added beyond usage examples); the
rest are new `DS/Community/*` catalog components under `src/components/ds/catalog/`.

### Confirmed duplicates (no new component)

- **"Button - Main"** (node `15219:167888`) — the exact same Style/Size/Type/State matrix as this
  DS's own `Button.jsx` (`DS/Components/Buttons`). No new component; verified pixel-for-pixel via
  Storybook screenshot comparison against the Figma export.
- **"community post icon"** (`15220:168455`) and **"other examples"** (`15220:168456`) — Button
  usage, not new components: a dark iconOnly `Button` (`variant="primary" size="large"`, pencil
  icon) for the compose FAB, and dark icon+text `Button`s ("Take a test" / "Make a post" / "Post",
  default + disabled) for CTA rows. Documented as new example stories only:
  `Button.stories.jsx` → `Community/Compose FAB (community post icon)` and
  `Community/CTA buttons (other examples)`.
- **"tags"** (node `10230:345523`, e.g. "BFP" / "Graphic Images" / "Mention of Loss" / "Pregnancy"
  content-warning pills) — the Figma instance is built from the same `Main Button` component
  (Style=Secondary, Size=Small, Type=Text) as the DS Button, just non-interactive. Added as a new
  `DsChip` purpose, `purpose="tag"` (light violet @ 60% opacity, `.ds-chip--tag` in `ds.css`), not a
  new component — see `Chip.stories.jsx` → `Community/Content warning tags`.
- **"Interface/Refresh"** (node `13027:407844`) — already present in `System Icons` as
  `Interface/Refresh` (`sys-interface-interface-refresh.svg`) from an earlier pass; no action
  needed here.

### New components

All under `src/components/ds/catalog/`, paired `Name.jsx` + `Name.stories.jsx` per the existing DS
convention, composed from existing primitives (`Text`, `MaskIcon`, `Checkbox`) rather than one-off
markup, and grouped under the `DS/Community/*` Storybook title:

- **`Avatar.jsx`** — member avatar, three variants: `photo` (real `<img>`), `initial` (8-color
  letter fallback, `solid`/`soft` tone — from "Section 3", node `3833:273282`; exact colors read
  directly off the node's fills as `--avatar-1..8-bg/text` in `tokens.css`, since this file
  publishes no Figma Variables), and `anonymous` (glasses icon on light-violet — no matching
  published Figma icon was found via REST search for this specific glyph, so it was hand-authored
  as a new asset, `sys-interface-interface-anonymous-glasses.svg`, matching the existing Interface
  icon stroke style rather than traced 1:1 from Figma — flagged below). Optional `unread` red dot
  and `editable` pencil badge overlays (from the Main feed member rail and the profile-card kit).
- **`RoleBadge.jsx`** — Admin (blue) / Expert (orange) / Moderator (purple) / Chart Guide (green)
  pill, from "Post types" (node `2:8558`). Reuses existing DS bg/text tokens per role rather than
  new hex values.
- **`ReactionBar.jsx`** — from "Reaction count & react" (node `4:3232`). Verified via
  `figma_get_component_for_development` that this is built from the Community file's own local
  Interface-icon/Typography primitives, **not** an instance of the DS Button/Wrapper set (unlike
  "tags" above) — genuinely a new pattern. Two optional rows: a read-only like-count summary, and
  a tappable like-toggle + comment-count row.
- **`PostThumbnail.jsx`** — the "notif photo" component set (node `5836:223809`, variants
  `photo count` × `photo count=1|2`): small circular post-preview thumbnail with a colored
  type-icon badge (like/comment/poll/follow), single or two overlapping photos. No "follow" icon
  exists in the DS icon set — approximated with the existing `Interface/Plus-circle` glyph.
- **`ActionItemCard.jsx`** — the "Item" moderation card (node `5156:218582`, "Limited activity"):
  title + copyable ID, status pill + chevron, date range, description — each sub-part toggleable
  via boolean props matching the Figma component's own properties.
- **`Poll.jsx`** — voting list with a percent-filled background bar per option (from "Post types"
  and the "New post" poll builder), reusing the existing `Checkbox` for the option control.
- **`PostCard.jsx`** — the full feed post card composing `Avatar` + `RoleBadge` + `DsChip
  purpose="tag"` + body copy + `ReactionBar` (from "Main feed", node `2:7881`, and "Post types").

### Ambiguous / not fully resolved

- **"86:21841" — a second, smaller "New post" section**: despite the Figma layer name, its actual
  content is a **Profile Card kit** (avatar + edit badge, role badge, post/following/follower
  counts, goal, bio, Posts/Saved tabs, Follow button) — not a post composer. Likely a Figma
  organizational mistake (reused/misnamed section) rather than a real second "New post" flow. Not
  built as a new component this pass — flagged for a human to confirm intent before a "Profile
  Card" component is added.
- **"Main feed" (`2:7881`), the larger "New post" (`33:13087`), "Post view" (`42:8740`)**: large
  composite kit pages recombining pieces already covered elsewhere in this DS (Navbar, TabBar,
  TextField/search, SegmentControl-style tabs) plus the new Community pieces above (Poll builder
  state, image-upload mosaic grids, posting-progress loader, comment threads). Not fully rebuilt
  as new components — the genuinely reusable atomic pieces they introduce (Poll, ReactionBar,
  RoleBadge, PostCard, PostThumbnail) were extracted; the remaining screen-specific layout (image
  mosaic grids, the comment-thread list, the composer toolbar) was judged to be composed screens
  rather than DS-catalog components and was left unbuilt.
- **TabBar mismatch (not fixed)**: the "Main feed" kit's bottom tab bar shows "Community" as a
  plain, selected middle tab (5 equal tabs: Home / Chart / Community / Shop / Profile). The DS's
  own `TabBar.jsx` hard-codes an elevated `MainMenuButton` FAB in that middle slot instead (Home /
  Chart / **FAB** / Shop / Profile) and has no "Community" tab at all. This is a real structural
  difference, not just a missing variant — left as-is; needs a human decision on whether the FAB
  slot becomes conditional or the Community file's mock is stale.
