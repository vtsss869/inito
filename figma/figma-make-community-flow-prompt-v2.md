# Figma Make — Inito Community App: Interactive Prototype

The attached screenshot is the **Community Feed screen** — use it as the single source of truth for the visual design language: colors, typography, spacing, icons, component styles. Replicate everything you see pixel-perfectly.

Build all 7 screens as a single React component with shared state and animated navigation. The attached screen is Screen 1. Screens 2–7 are described below — build them using the exact same visual language as the attached reference.

---

## Global design tokens

Font: `-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif` — use everywhere, no exceptions.
Secondary font: `'Montserrat', sans-serif` — only for the "inito" chart brand label.

```
Colors:
  background:    #FFFFFF
  surface:       #F2F2F7   ← input fields, inactive chips, tag pills
  surfaceBlue:   #DDE9FF   ← poll option backgrounds
  textPrimary:   #26313A   ← all main text
  textSecondary: #9D9D9D   ← placeholders, inactive tabs, subtitles
  textMuted:     #AEAEAE   ← timestamps
  blue:          #5790FF   ← CTAs, links, active tab underline, back arrows, badges
  dark:          #112D35   ← FAB, active Next/Post buttons
  infoBg:        #EAF0FF   ← info banners
  separator:     #E5E5EA   ← dividers, borders
  green:         #34C759   ← toggle ON state
  red:           #FF3B30   ← badges, errors
```

---

## Animation system — apply consistently to all transitions

### Screen navigation (push/pop)
- **Forward (new screen opens):** new screen slides in from right → `translateX(100%) → translateX(0)`, duration `320ms`, easing `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out)
- **Back (screen closes):** current screen slides out to right → `translateX(0) → translateX(100%)`, same duration + easing; previous screen simultaneously slides from `translateX(-30%) → translateX(0)` (parallax feel)

### Modal bottom sheet (not used in this flow — all screens are push navigation)

### Micro-interactions:
- **Button press:** `scale(0.97)` on press, `scale(1)` on release — `100ms ease-out`
- **Chip/tag select:** background + color change — `150ms ease`
- **Toggle switch:** thumb slides with `200ms ease`, track color fades — `200ms`
- **FAB press:** `scale(0.93)` on press, bounce back `scale(1.04) → scale(1)` — spring feel, `250ms`
- **Tooltip appear:** `opacity 0→1` + `translateY(6px→0)` — `200ms ease-out`; auto-dismiss after 2.5s with `opacity 1→0`, `150ms`
- **Progress bar:** width animates from `0% → 100%`, `2000ms linear`
- **New post appear in feed:** `opacity 0→1` + `translateY(-8px→0)` — `300ms ease-out`
- **Poll option select:** checkbox fills with blue + scale pulse `1 → 1.1 → 1`, `200ms`
- **Photo remove:** photo fades `opacity 1→0` + `scale(1→0.9)`, `200ms ease`
- **Photo fullscreen open:** photo scales from its position in grid `scale(0.3→1)` + `opacity 0→1`, `280ms ease-out`
- **Keyboard slide up:** `translateY(100%→0)`, `300ms cubic-bezier(0.32, 0.72, 0, 1)`

---

## Screen 1 — Community Feed

This is the starting screen. Shown first when prototype loads.

**Layout top to bottom:**
1. Status bar (9:41, signal icons) — 47px
2. Top bar — 56px
3. Tab row — 44px
4. Optionally: Posting bar (hidden by default)
5. Scrollable post list
6. FAB (position: fixed, overlays content)
7. Bottom navigation — 83px

**Top bar content:**
- User avatar circle 32px (placeholder photo)
- Search bar: pill shape, `#F2F2F7` bg, 36px height, 18px radius, magnifier icon + "Search" text in `#9D9D9D` 14px. Full width minus avatar and bell.
- Bell icon (22px, `#26313A`) with small red dot badge top-right

**Tab row:**
- "My feed" — 14px 600-weight `#26313A`, active 2px `#5790FF` underline at bottom
- "Featured" — 14px 600-weight `#9D9D9D`, no underline
- Filter/sort icon (right side) with small orange badge "1"
- Full-width 1px `#E5E5EA` bottom border

**Posting bar** (hidden by default, appears during post submission):
- "Posting..." text 13px `#9D9D9D`, 16px left padding, 8px top
- Thin progress bar below it: 3px height, `#E5E5EA` track, `#5790FF` fill animated 0→100% over 2s

### Post cards

No card background. Each post sits directly on white. Separated by 1px `#E5E5EA` full-width divider.

**Card structure:**
```
16px left padding ─────────────────────────
[avatar 40px] [name][badge] [timestamp] [···]
              [post body text]
              [optional: chart / poll / photos]
─────────────────────────────────────────────
[♡ N]  [💬 N comments]   ← 16px + 50px left offset
1px #E5E5EA divider
```

**Post 1 — Marissa Layfield**
- Avatar: round photo, tappable → opens Screen 7 (User Profile)
- Name "Marissa Layfield": 14px 600 `#26313A`, tappable → opens Screen 7
- Badge "Admin": pill, `rgba(87,144,255,0.12)` bg, `#5790FF` text, 11px, 2px 8px padding, 10px radius
- Time "12m": 12px `#AEAEAE`
- "···" button: `#9D9D9D`, opens nothing (placeholder)
- Body text: "Fertility journeys can be a rollercoaster ride! 🌈 Whether you're just starting out or have been trying for a while, it's important to celebrate every little victory. Remember, you're not alone in this journey. Let's uplift one another and share our stories!" — 14px `#26313A`, line-height 21px
- ♡ "24" + 💬 "10 comments" — 14px `#9D9D9D`

**Post 2 — Anonymous member**
- Avatar: 40px circle, `#EEF2FF` bg, gray person icon inside (no photo)
- Name "Anonymous member": 14px 600 `#26313A`, NOT tappable
- Time "56m"
- Body: "I'm new to Inito. How does my chart appear? Is there still a chance to confirm ov?"
- Chart card below body (left-offset 50px, right 16px, 10px radius, 1px `#F2F2F7` border):
  - White bg, 130px height
  - Top-left: "inito" text in Montserrat Bold 10px `#112D35`
  - Three smooth SVG polylines: green (PdG), purple (LH), pink (Estrogen) — wave shapes across the full width
  - Small date labels on x-axis: "08 Jul", "04 Aug", "06 Sep", "05 Oct", "19 Apr" in 7px `#9D9D9D`
  - Amber annotation box "Ovulation ↑" in middle of chart
- ♡ "38" + 💬 "2 comments"

**Post 3 — Clementine**
- Avatar photo, tappable → Screen 7
- "Clementine", "2h"
- Body: "Cycle 6 and still waiting. Some days are harder than others but knowing you're all on the same journey makes it feel less lonely 🩶"
- ♡ "78" + 💬 "Comment"

**Post 4 — Kate (poll)**
- Avatar photo, tappable → Screen 7
- "Kate", badge "Expert" (amber: `rgba(245,166,35,0.12)` bg, `#F5A623` text), "4d"
- Tag pills below name row: "BFP" and "Pregnancy" in gray pills (`#F2F2F7` bg, `#26313A` text)
- Body: "What's the earliest DPO you got a positive test? 🌊"
- Poll (left-offset 50px): four option rows, each `#DDE9FF` bg, 8px radius, 48px height, 12px padding:
  - Checkbox 18px (border `#5790FF`, white fill) + label + percentage + "›" chevron
  - Options: "8 DPO — 4%", "9 DPO — 23%", "10 DPO — 17%", "11 DPO or later — 56%"
  - Background fill behind each option proportional to %, `rgba(87,144,255,0.15)`
  - **TAP on any poll option:** checkbox fills solid `#5790FF` with white checkmark, scale pulse animation. Only one can be selected. Once voted, no more changes.
- "234 voters" below, 12px `#9D9D9D`
- ♡ "33" + 💬 "10 comments"

**Post 5 — Samantha Rivers**
- Avatar photo, tappable → Screen 7
- "Samantha Rivers", "5d"
- Body: "Tip from cycle 9 me to cycle 1 you: don't compare your chart to anyone else's. Your hormones have their own rhythm — trust the data, not the anxiety"
- ♡ "123" + 💬 "5 comments"

**FAB:**
- 56px circle, `#112D35` bg, white "+" (24px)
- Fixed bottom-right: 90px from bottom, 16px from right
- Shadow: `0 4px 16px rgba(17,45,53,0.4)`
- **TAP FAB → opens Screen 2 (New Post Step 1)** with push-right animation

**Bottom nav:**
- 4 tabs: Home / Chart / Shop / Community
- Community is active: `#5790FF` icon + label
- Others: `#8E8E93`
- **TAP Bell icon in top bar → opens Screen 5 (Notifications)** with push-right animation

---

## Screen 2 — New Post: Step 1 / 2

**How to arrive:** tap FAB on Feed. Slides in from right.
**How to leave:** tap ✕ → back to Feed (slide out right). Tap "Next" (when active) → Screen 3 (slide right).

**Navigation bar (52px):**
- Left: "✕" character, 20px, `#26313A` — **TAP → go back to Feed** (slide-out-right animation)
- Center: "New post" 17px 600 `#26313A`
- Right: "Next" pill button — 32px height, 20px radius, 16px horizontal padding
  - **Disabled state:** `#F2F2F7` bg, `#9D9D9D` text, pointer-events none
  - **Active state** (when textarea has text OR photos are added): `#112D35` bg, white text — **TAP → open Screen 3** (slide right)
  - Transitions between states: `150ms ease`

**Step subtitle:** "Step 1 / 2" — 12px `#9D9D9D`, 16px left padding, 6px below nav bar. Not inside nav bar.

**Content area (flex-1, scrollable):**
- Multiline textarea: no border, no outline, 16px all padding, 14px `#26313A`, line-height 21px
- Placeholder: "Add text…" in `#C7C7CC`
- **TAP textarea → keyboard slides up from bottom** (300ms spring animation). Next button activates as soon as ≥1 character typed.
- **TAP anywhere outside textarea → keyboard slides down**

**Photo grid** (shown only after tapping camera icon):
- Two photos side by side, 8px gap, 16px horizontal margins
- Each photo: `flex:1`, aspect-ratio 4:3, 8px radius, overflow hidden
- Each has a remove "✕" badge: 22px circle, `rgba(0,0,0,0.55)` bg, white "✕", 13px, top-right 6px from edges
- **TAP photo → opens Screen 4 (Photo Fullscreen Viewer)** — scale-from-thumbnail animation
- **TAP "✕" badge on photo → removes that photo** with fade+scale animation (200ms). If both removed, photo grid hides.

**Poll inputs** (shown only after tapping poll icon, replaces textarea):
- "Ask a poll question" placeholder input: full width, `#F2F2F7` bg, 48px height, 10px radius, 14px
- "Add option" input 1 (with blinking text cursor): same style
- "Add option" input 2: same style
- "Remove poll" text: 14px `#5790FF` — **TAP → hides poll inputs, shows textarea again**

**Tooltip** (shown briefly when poll icon tapped while photos present, or camera icon tapped while poll active):
- White popover, `#E5E5EA` border, 8px radius, soft shadow
- Text: "Post can include only images or poll" — 13px `#26313A`
- Appears with `opacity 0→1` + `translateY(4px→0)`, 200ms ease-out
- Auto-disappears after 2.5s: `opacity 1→0`, 150ms

**Bottom toolbar** (56px, stays pinned above keyboard, never scrolls):
- Separated from content by 1px `#E5E5EA` top border
- Left: camera-with-plus icon (24px `#26313A`) — **TAP:**
  - If poll mode is active → show tooltip, do nothing
  - Otherwise → add 2 placeholder photos to photo grid, auto-fill textarea with demo text: "So I built a morning ritual: test, coffee, journal. It became my time, not a source of anxiety. I'm on cycle 4 now. I don't know when it'll happen — but I know my body better than I ever have. Do you keep a cycle journal? Drop a comment 🌿", activate "Next" button
- Next to it: lines/poll icon (24px `#26313A`) — **TAP:**
  - If photos are present → show tooltip, do nothing
  - Otherwise → toggle poll mode (show/hide poll inputs)
- Right side: "Anonymously" label 14px `#26313A` + iOS toggle switch
  - Toggle width 51px, height 31px, 16px radius
  - OFF: `#E5E5EA` track, white thumb (27px circle) at left
  - ON: `#34C759` track, white thumb at right
  - **TAP toggle → switches state** with thumb slide + color fade animation (200ms)

**iOS keyboard mockup** (291px height, shown when textarea focused):
- Background `#D1D5DB`, top 1px border `#B0B4BA`
- Row 1: Q W E R T Y U I O P — 10 keys
- Row 2: A S D F G H J K L — 9 keys (centered)
- Row 3: ⇧ Z X C V B N M ⌫ — shift and backspace are wider, gray (`#ADB5BD`)
- Bottom row: "123" gray | "space" white wide | "return" gray
- Home indicator bar at very bottom (5px × 134px, `rgba(0,0,0,0.2)`, centered)
- Keys: 42px height, 5px radius, white bg, 1px bottom shadow

---

## Screen 3 — New Post: Step 2 / 2

**How to arrive:** tap active "Next" on Screen 2. Slides in from right.
**How to leave:** tap ← → back to Screen 2 (slide out right). Tap active "Post" → go to Feed with posting animation.

**Navigation bar:**
- Left: ← back arrow, `#5790FF`, 22px — **TAP → go back to Screen 2** (slide out right)
- Center: "New post" 17px 600
- Right: "Post" pill button (same sizing as "Next")
  - **Disabled** (default, no topic selected): `#F2F2F7` bg, `#9D9D9D` text
  - **Active** (≥1 topic chip selected): `#112D35` bg, white text
  - **TAP when active → submit post:** go to Screen 1 (Feed) with posting animation:
    1. Feed slides in (back animation)
    2. Posting bar appears at top with "Posting..." text + progress bar animating 0→100% over 2s
    3. After 2s: posting bar fades out, new post card appears at top of list with `opacity 0→1` + `translateY(-8px→0)` animation

**Step subtitle:** "Step 2 / 2" — 12px `#9D9D9D`, 16px left

**Content area (scrollable, 20px top padding, 16px horizontal):**

Heading: "Does your post include any sensitive topics?" — 17px 600 `#26313A`, line-height 24px

Subtext: "Some topics can be sensitive. Adding a trigger warning helps others avoid content they're not ready to see." — 13px `#9D9D9D`, line-height 18px, 8px top margin

Topic chips (flex-wrap layout, 8px gap, 20px top margin):
Each chip: 36px height, pill shape (18px radius), 0 16px padding, 14px font, `font-family: inherit`

| Chip label | Default | Selected |
|---|---|---|
| Mention of Loss | `#F2F2F7` bg / `#26313A` text | `#5790FF` bg / white text |
| Pregnancy Announcement (BFP) | same | same |
| Graphic Images | same | same |
| Mention of Pregnancy | same | same |
| None of above | same | same |

**TAP any chip:**
- Toggles selected state with 150ms color transition
- Multiple chips can be selected simultaneously
- As soon as ≥1 chip is selected → "Post" button transitions to active state (150ms)
- If all chips deselected → "Post" returns to disabled

**Info banner (pinned to bottom, does not scroll):**
- 16px horizontal margin, 8px bottom margin
- `#EAF0FF` bg, 12px radius, 12px padding
- Left: 20px circle with `#5790FF` border (2px) + "i" letter inside in `#5790FF`, 11px Bold
- Text: "Line eyes posts aren't allowed on the feed. Please post any line eyes in the weekly thread." — 13px `#26313A`, line-height 18px

---

## Screen 4 — Photo Fullscreen Viewer

**How to arrive:** tap any photo in Screen 2 photo grid. Scale-from-origin animation (photo scales from its grid position to fullscreen, 280ms ease-out).
**How to leave:** tap ✕ button → back to Screen 2 (scale-to-origin animation, same 280ms).

**Layout:**
- Full screen, background `#1C1C1E` (near-black)
- Status bar icons change to white
- Photo: full width, centered vertically, `object-fit: contain`
- ✕ button: top-right corner, 8px from edges. 32px circle, `rgba(90,90,90,0.8)` bg, white "✕" 15px. **TAP → go back to Screen 2**
- Pagination text: "1 of 2" centered below photo, 13px `rgba(255,255,255,0.7)`
- Home indicator: 134px × 5px white bar, centered, 8px from bottom, `opacity: 0.3`

---

## Screen 5 — Notifications

**How to arrive:** tap bell icon in Feed top bar. Slides in from right.
**How to leave:** tap ← → back to Feed (slide out right).

**Navigation bar:**
- Left: ← back arrow `#5790FF` — **TAP → go back to Feed**
- Center: "Notifications" 17px 600 `#26313A`
- No right element

**Scrollable list:**

Section headers: 13px 600 `#9D9D9D`, 20px top padding, 8px bottom padding, 16px left

**Row structure (min 64px, 10px vertical padding, 16px horizontal):**
- Left: 44×44px icon area
- Middle: text block (flex-1)
- Right: timestamp + optional button or chevron

**Rows in order:**

*— Today —*

Row 1 (non-tappable):
- Icon: 40px circle, `#FFF9E6` bg, ⭐ emoji
- Text: "Your post made it to our **featured section**" + line break + "Thanks for sharing!" — 14px, bold parts in 600
- Right: "2d" timestamp + "›" chevron `#C7C7CC`

Row 2 (non-tappable):
- Icon: avatar photo 40px + small red heart badge (18px circle, `#FF3B30` bg, ❤️) bottom-right
- Text: "**username 1** liked your post"
- Right: "3h"

Row 3 (non-tappable):
- Icon: two overlapping avatar photos (first 36px at top-left, second 32px at bottom-right, -8px offset, white border 2px) + heart badge
- Text: "**username 1** and **username 2** liked your post"
- Right: "3h"

*— Yesterday —*

Row 4 (non-tappable):
- Icon: 40px circle, `#F2F2F7` bg, 🕐 emoji
- Text: "**Support request update**" + line break + small text "Your request from Oct 10, 2024 has been updated." in 13px `#9D9D9D`
- Right: "2d" + "›"

Row 5 (non-tappable):
- Icon: avatar photo + small blue chat badge bottom-right (18px, `#5790FF` bg, white chat icon)
- Text: "**username 1** commented: ❤️❤️❤️"
- Right: "2d"

Row 6 — **TAP → opens Screen 6 (Post Removed)**:
- Icon: 40px circle, `#FFEBEE` bg, 🚫 emoji
- Text: "**Post restored**" + line break + "Your post from Oct 14, 2024 is restored." in 13px `#9D9D9D`
- Right: "2d" + "›" chevron
- Entire row has press state: `background #F2F2F7` on press

*— Last 7 days —*

Row 7 (non-tappable):
- Icon: avatar photo 40px
- Text: "**username 1** started following you"
- Right: "3d" + "Follow" button (28px height, 14px radius, `#5790FF` bg, white text, 13px 600, 12px padding)
- **TAP "Follow" button → changes to "Following"** (`#F2F2F7` bg, `#26313A` text), 150ms transition

Row 8 (non-tappable):
- Icon: avatar photo 40px
- Text: "**username 2** started following you"
- Right: "3d" + "Following" button (already followed state)

*— Last 30 days —*

Row 9 — **TAP → opens Screen 6 (Post Removed)**:
- Icon: 40px circle, `#EAF0FF` bg, 💬 emoji
- Text: "**Feedback on your comment**" + "An admin shared feedback on one of your comments." 13px `#9D9D9D`
- Right: "2d" + "›"
- Row press state: `background #F2F2F7`

Row 10 (non-tappable):
- Icon: 40px circle, `#E8F5E9` bg, ✅ emoji
- Text: "**Comment approved**" + "Your comment is now visible in the community." 13px `#9D9D9D`
- Right: "2d" + "›"

Row 11 — **TAP → opens Screen 6 (Post Removed)**:
- Icon: 40px circle, `#FFEBEE` bg, ❌ emoji
- Text: "**Post not approved**" + "A moderator did not approve your post. See feedback for details." 13px `#9D9D9D`
- Right: "2d" + "›"
- Row press state: `background #F2F2F7`

---

## Screen 6 — Post Removed Feedback

**How to arrive:** tap any tappable notification row in Screen 5. Slides in from right.
**How to leave:** tap ← → back to Screen 5 (slide out right).

**Navigation bar:**
- Left: ← back `#5790FF` — **TAP → go back to Screen 5**
- Center: "Your post was removed" 15px 600 `#26313A`
- No right element

**Scrollable content (16px horizontal padding):**

Section label "POST" (13px 600 `#9D9D9D` uppercase, 20px top, 8px bottom):
Post preview card (1px `#E5E5EA` border, 12px radius, 12px padding):
- Avatar 32px + "TTCwithEmilyJourney" 14px 600 + "2m" 12px `#AEAEAE`
- Body: "Girls, I have to share this — someone in the group posted the most detailed breakdown of their Inito hormone chart and I screenshotted it to send to my sister who's also TTC. She's not in the group but I thought it would help her. Should I add her to the group instead? She's been struggling for 2 years 😊" — 14px `#26313A`, line-height 20px

Section label "FEEDBACK" (20px top):
Feedback card (`#EAF0FF` bg, 12px radius, 12px padding):
- "This post references sharing screenshots of members' personal content outside of the group. To protect everyone's privacy and keep this a safe space, we ask that all content shared here stays within the group." — 14px `#26313A`, line-height 20px

Section label "GROUP RULES VIOLATED" (20px top):
Rule card (`#F2F2F7` bg, 12px radius, 12px padding):
- "🤔 Don't Share Group Information Outside" — 14px 600 `#26313A`, margin-bottom 6px
- "Sharing openly is what makes this group great, but some things are best kept private. Please keep sensitive information (like screenshots) within the group." — 13px `#9D9D9D`, line-height 18px

Footer text (20px top, 32px bottom):
"If you believe this was a mistake, you can " + **"Appeal"** (inline, `#5790FF`, tappable — tapping does nothing, placeholder) + ". An admin will review your post and get back to you. Their decision will be final." — 14px `#26313A`, line-height 20px

---

## Screen 7 — User Profile

**How to arrive:** tap any avatar or username in Feed post cards. Slides in from right.
**How to leave:** tap ← → back to Feed (slide out right).

**Navigation bar:**
- Left: ← back `#5790FF` — **TAP → go back to Feed**
- Center: empty
- Right: "Edit" pill (1px `#E5E5EA` border, `#fff` bg, `#26313A` text, 13px 600, 28px height, 12px horizontal padding) + "···" button (20px, `#26313A`)

**Scrollable content:**

Profile header (centered, 20px top padding, 16px horizontal):
- Avatar: 72px circle photo, centered
- "Expert" badge below (8px top): `rgba(245,166,35,0.12)` bg, `#F5A623` text, 11px, pill
- Name "TTCwithEmilyJourney": 17px 600 `#26313A`, 6px top
- Stats "**96** posts · **11** following · **11** followers": 13px, numbers in 600 `#26313A`, rest in `#9D9D9D`
- Goal "🎯 Goal: Get pregnant": 14px `#26313A`, 8px top
- Bio "Sharing my TTC journey one cycle at a time 🌸": 14px `#26313A`, 8px top, centered

Profile tab bar (below header):
- Two icon tabs centered in equal-width columns, 44px height
- Pen/edit icon tab: active, `#26313A` color, 2px `#26313A` underline
- Bookmark icon tab: inactive, `#9D9D9D`
- Bottom border: 1px `#E5E5EA`
- **TAP inactive tab → switch active state** (150ms underline transition)

Posts list (below tab bar):
- Three short post rows separated by 1px `#E5E5EA` dividers, 12px vertical padding, 16px horizontal
- Post 1: "Sharing my journey week by week — the highs, the confusing charts, and everything in between 💙"
- Post 2: "CD 18 and my LH still hasn't peaked. Anyone else ovulate super late? Staying hopeful ✨"
- Post 3: "My Inito readings this cycle have been SO much clearer than last month. Feeling more confident 🌸"

---

## Complete navigation map summary

```
Feed
├── TAP bell icon ──────────────────────────────► Notifications [push right]
├── TAP FAB (+) ────────────────────────────────► New Post Step 1 [push right]
└── TAP avatar or name on any post ─────────────► User Profile [push right]

New Post Step 1
├── TAP ✕ close ────────────────────────────────► Feed [pop right]
├── TAP camera icon (no poll) ──────────────────► adds photos to current screen
├── TAP poll icon (no photos) ──────────────────► shows poll inputs on current screen
├── TAP photo thumbnail ────────────────────────► Photo Fullscreen [scale animation]
└── TAP "Next" (active) ────────────────────────► New Post Step 2 [push right]

New Post Step 2
├── TAP ← back ─────────────────────────────────► New Post Step 1 [pop right]
├── TAP topic chip ─────────────────────────────► toggles chip (stays on same screen)
└── TAP "Post" (active) ────────────────────────► Feed [pop right] + posting animation

Photo Fullscreen
└── TAP ✕ ──────────────────────────────────────► New Post Step 1 [scale back]

Notifications
├── TAP ← back ─────────────────────────────────► Feed [pop right]
└── TAP rows 6, 9, or 11 ───────────────────────► Post Removed [push right]

Post Removed
└── TAP ← back ─────────────────────────────────► Notifications [pop right]

User Profile
└── TAP ← back ─────────────────────────────────► Feed [pop right]
```

All "push right" = new screen slides in from right edge.
All "pop right" = current screen slides out to right, previous screen reveals from slight left offset.
