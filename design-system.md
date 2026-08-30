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
| Fertile Window | `#38ABC5` → `#008697` |
| Unknown Fertility / Rate app | `#B2B8CA` → `#7F8598` |
| Pregnancy | `#D287CC` → `#AB66A5` (154° angle) |
| WFPR | `#557AD0` → `#4750B9` |

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
- A separate **Subtitle** component (Section divider / Legend types) is used as a general content separator elsewhere (e.g. calendar, chart legends), per the designer's note in-file.

### Row / List Item ("Item")
Base container: bg `#F6F6F6`, `rounded-20`, fixed width `327px`. Multiple Types: `Text`, `Icon Text`, `Toogle`, `Icon Text Text`, `Icon text Button`, `Text + Item`, `Table`, `Icon Text Text (2)`.
- Optional title/eyebrow (above value): Caption 16 Medium, color `rgba(17,45,53,0.4)` (Text/Black at 40%).
- Value/label: Caption Bold 16, `#112D35`.
- Description line: Mini 12, tracking 0.1, `#7F8598`.
- Chevron affordance: 32×32 transparent icon button.
- Embedded toggle uses the 52×32 Toogle component.
- `Table` type shows Mini-12 columns (Date / Time / Fertility level).
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

### Tooltip
bg white, `rounded-8`, shadow `0px 6px 6px rgba(0,0,0,0.06)` + `0px 16px 14px rgba(0,0,0,0.07)`, with a pointer/tail graphic (up or down, `property1: dow/up`).
- Title: Caption Bold 16, `#112D35`. Description: Caption 14 (14/17 Medium), `#112D35`.
- Buttons: "Dismiss" = bg white, `2px` border `#EAECED`, `rounded-100`, text `#112D35` Caption Bold 14; primary "Okay" = bg `#112D35`, `rounded-100`, text white Caption Bold 14.
- Multi-step variant (`amount=multiple`) replaces the two buttons with "Back"/"Next" text links (`#112D35`) flanking Carousel Dots pagination.

### Carousel Dots
Row of up to 6 dot indicators, `gap-12`, `px-20 py-12`. Active dot `8px`, inactive dots `4px` (inactive color = Grey Icons `#BDC1CD`).

---

## 4. Other components present in the file (identified, styling not individually re-sampled)

These were located via metadata but not deep-extracted (either out of scope for a first pass, or full composed screens rather than atomic specimens). They reuse the palette and type scale documented above:

- **iOS/Android Date, Time & Timer Pickers** — native-style pickers, AM/PM variants.
- **Home Notification Card** — many content variants (Empty/Logged Symptoms, Hormones, To-do list, streak states, calendar-state variants: before period / after period / pregnancy).
- **Rating Card ("Rate your experience")** — star rating row, checkbox list, Primary/Secondary card action buttons, comment field.
- **Chart Analytics** — cycle segment tabs, per-day fertility bars (Low/High/Peak/PdG Rise/hCG Normal-Abnormal/Pregnant), Day Status legend chips, Hormone legend chips (BBT/LH/PdG/E3G/hCG/FSH), TTC-vs-Pregnancy chart type toggle, Android chart variants.
- **Logo** (two size variants) and a large illustration/image library (tutorial images, onboarding illustrations, camera/QR/monitor graphics) — not color tokens, excluded from this doc.
- A handful of full composed screens (rating modals, onboarding flows, empty-state mockups) were found at very large node sizes and were skipped as out of scope — they only recombine the components already documented above.
