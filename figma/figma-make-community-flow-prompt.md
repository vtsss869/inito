# Figma Make Prompt — Inito Community App: New Post Flow

Build a fully interactive mobile app prototype of the Inito community app's post creation flow. Use a 390×844px iPhone frame. The app is a women's health/fertility tracking community.

---

## Design language

Font: `-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif` throughout. Never use Inter or Roboto.

Color palette:
- Background: `#FFFFFF`
- Surface/input bg: `#F2F2F7`
- Light blue surface: `#DDE9FF` (poll options)
- Primary text: `#26313A`
- Secondary text: `#9D9D9D`
- Muted/timestamp: `#AEAEAE`
- Primary blue: `#5790FF` (CTAs, links, active states, back arrows)
- Dark teal: `#112D35` (FAB, active Next/Post buttons)
- Info bg: `#EAF0FF`
- Separator: `#E5E5EA`
- Success green: `#34C759`
- Danger red: `#FF3B30`

---

## Screens & navigation

### Screen 1 — Community Feed

**Top bar:**
- Left: circular user avatar (32px)
- Center: rounded search bar (`#F2F2F7` bg, 36px height, magnifier icon + "Search" placeholder in `#9D9D9D`)
- Right: bell icon with red badge

**Tab row below top bar:**
- "My feed" tab — active, 14px Semibold `#26313A`, 2px `#5790FF` underline
- "Featured" tab — inactive, `#9D9D9D`
- Right: filter icon with small orange badge "1"
- Bottom border `#E5E5EA`

**Post cards** (no card background, separated by 1px `#E5E5EA` dividers):

Post 1 — Marissa Layfield:
- Avatar (40px circle), name "Marissa Layfield" in 14px Semibold `#26313A`, "Admin" badge (`#5790FF` text, `rgba(87,144,255,.12)` bg, 11px, pill shape), timestamp "12m" in `#AEAEAE`, "···" overflow button
- Body: "Fertility journeys can be a rollercoaster ride! 🌈 Whether you're just starting out or have been trying for a while, it's important to celebrate every little victory. Remember, you're not alone in this journey. Let's uplift one another and share our stories!" — 14px Regular `#26313A`
- Actions row: heart icon + "24", chat icon + "10 comments" — both `#9D9D9D`, 14px

Post 2 — Anonymous member:
- Avatar: 40px circle with `#EEF2FF` bg and gray person icon (no photo)
- Name: "Anonymous member" 14px Semibold, no badge, "56m" timestamp
- Body: "I'm new to Inito. How does my chart appear? Is there still a chance to confirm ov?"
- Inline chart image: white rounded card showing a hormone tracking line chart with "inito" brand text top-left (Montserrat Bold), three colored lines (green=PdG, purple=LH, pink=Estrogen), date labels on x-axis, small "Ovulation ↑" annotation box in amber
- Actions: "38" likes, "2 comments"

Post 3 — Clementine:
- Avatar photo, name "Clementine", "2h", body: "Cycle 6 and still waiting. Some days are harder than others but knowing you're all on the same journey makes it feel less lonely 🩶"
- Actions: "78" likes, "Comment" (no count)

Post 4 — Kate (poll post):
- Avatar, name "Kate", "Expert" badge (amber `#F5A623` text, `rgba(245,166,35,.12)` bg), "4d", pill tags "BFP" and "Pregnancy" (gray pills)
- Body: "What's the earliest DPO you got a positive test? 🌊"
- Poll options (each is a row with `#DDE9FF` bg, 8px radius, 48px height, checkbox left + label + % right + "›"):
  - 8 DPO — 4%
  - 9 DPO — 23%
  - 10 DPO — 17%
  - 11 DPO or later — 56%
- "234 voters" in `#9D9D9D` below
- Poll options are tappable (tap selects with filled blue checkbox)
- Actions: "33" likes, "10 comments"

Post 5 — Samantha Rivers:
- Avatar, name "Samantha Rivers", "5d", body: "Tip from cycle 9 me to cycle 1 you: don't compare your chart to anyone else's. Your hormones have their own rhythm — trust the data, not the anxiety"
- Actions: "123" likes, "5 comments"

**FAB button:** 56px circle, `#112D35` bg, white "+" icon, fixed bottom-right (bottom 90px, right 16px), shadow. Tapping navigates to New Post Step 1.

**Bottom navigation bar:** white bg, 1px top border `#E5E5EA`, 83px height, 4 items: Home / Chart / Shop / Community. Community tab is active (`#5790FF` icon + label). Others are `#8E8E93`.

**"Posting…" state:** When returning from submitted post, show a thin blue progress bar below the tabs with "Posting…" label, animated width 0→100% over 2 seconds, then disappear and show new post at top of feed.

---

### Screen 2 — New Post Step 1/2

**Navigation bar:**
- Left: "✕" close icon (`#26313A`) → goes back to Feed
- Center: "New post" 17px Semibold `#26313A`
- Right: "Next" pill button (32px height, 20px border-radius)
  - Disabled state: `#F2F2F7` bg, `#9D9D9D` text
  - Active state (when text entered OR photos added): `#112D35` bg, white text
- Below nav bar (not inside): "Step 1 / 2" in 12px `#9D9D9D`, 16px left padding

**Content area:**
- Multiline text input, no border, 14px `#26313A`, placeholder "Add text…" in `#C7C7CC`
- When photos are added: 2-photo grid below text (each photo half-width, 4:3 ratio, 8px border-radius, removable via a small "✕" circle badge top-right corner of each photo)
- When poll mode: replace textarea with "Ask a poll question" text at top + two rounded inputs (`#F2F2F7` bg, 48px, "Add option" placeholders) + "Remove poll" blue text link below

**Bottom toolbar (stays above keyboard, never scrolls):**
- Left: photo add icon (camera with "+") — tapping adds 2 placeholder photos and fills in demo text
- Next to it: poll/lines icon — tapping toggles poll mode (if photos present, show tooltip "Post can include only images or poll")
- Right side: "Anonymously" label + iOS-style toggle switch (off = gray, on = green `#34C759`)

**Tooltip:** white popover with `#E5E5EA` border and shadow, appearing above toolbar: "Post can include only images or poll"

**iOS keyboard mockup:** gray block (`#D1D5DB`) showing 3 rows of keys (qwerty layout) + space/return bar. Appears when textarea is focused, slides up from bottom.

---

### Screen 3 — New Post Step 2/2

**Navigation bar:**
- Left: "←" back arrow in `#5790FF` → goes back to Step 1
- Center: "New post" 17px Semibold
- Right: "Post" pill button
  - Disabled: `#F2F2F7` bg, `#9D9D9D` text
  - Active (when ≥1 topic selected): `#112D35` bg, white text → tapping submits
- Below: "Step 2 / 2" 12px `#9D9D9D`

**Content:**
- Heading: "Does your post include any sensitive topics?" — 17px Semibold `#26313A`
- Sub-text: "Some topics can be sensitive. Adding a trigger warning helps others avoid content they're not ready to see." — 13px `#9D9D9D`
- Chip tags (flex-wrap, 8px gap):
  - "Mention of Loss"
  - "Pregnancy Announcement (BFP)"
  - "Graphic Images"
  - "Mention of Pregnancy"
  - "None of above"
  - Each chip: 36px height, pill shape (18px radius), 0 16px padding, 14px font
  - Unselected: `#F2F2F7` bg, `#26313A` text
  - Selected: `#5790FF` bg, white text
  - Tapping toggles selection

**Info banner (pinned to bottom):**
- `#EAF0FF` bg, 12px radius, 12px padding, 16px horizontal margin
- Left: circle "i" icon (`#5790FF` border + text)
- Text: "Line eyes posts aren't allowed on the feed. Please post any line eyes in the weekly thread." — 13px `#26313A`

---

### Screen 4 — Photo Fullscreen Viewer

- Full black background `#1C1C1E`
- Photo fills full width, centered vertically
- "✕" dismiss button top-right (32px circle, `rgba(90,90,90,.8)` bg, white ×)
- "1 of 2" pagination text below photo, `rgba(255,255,255,.7)`, 13px, centered
- White home indicator bar at very bottom

---

### Screen 5 — Notifications

**Navigation bar:** ← back (blue) + "Notifications" title 17px Semibold, no right button

**List grouped by date:**

Section headers: "Today" / "Yesterday" / "Last 7 days" / "Last 30 days" — 13px Semibold `#9D9D9D`

Notification rows (48px min-height, 12px vertical padding, 16px horizontal padding):
- Left icon (40px): avatar photo OR colored circle with emoji/icon
- Text: bold username + action description, 14px `#26313A`, with `#AEAEAE` timestamp
- For system rows (featured, support, restored, feedback, approved, not approved): "›" chevron right
- Follow rows: "Follow" blue pill button OR "Following" gray pill

Rows (in order):
1. ⭐ (yellow circle) — "Your post made it to our **featured section** Thanks for sharing!" + timestamp + ›
2. Avatar + heart badge — "**username 1** liked your post" + "3h"
3. Two overlapping avatars + heart badge — "**username 1** and **username 2** liked your post" + "3h"
4. 🕐 (gray circle) — "**Support request update** / Your request from Oct 10, 2024 has been updated." + ›
5. Avatar + chat badge — "**username 1** commented: ❤️❤️❤️" + "2d"
6. 🚫 (pink circle) — "**Post restored** / Your post from Oct 14, 2024 is restored." + ›  ← tappable → Post Removed screen
7. Avatar — "**username 1** started following you" + "Follow" blue pill
8. Avatar — "**username 2** started following you" + "Following" gray pill
9. 💬 (blue circle) — "**Feedback on your comment** / An admin shared feedback on one of your comments." + › ← tappable
10. ✅ (green circle) — "**Comment approved** / Your comment is now visible in the community." + ›
11. ❌ (red circle) — "**Post not approved** / A moderator did not approve your post. See feedback for details." + › ← tappable → Post Removed screen

---

### Screen 6 — Post Removed / Feedback

**Navigation bar:** ← back (blue, goes to Notifications) + "Your post was removed" 15px Semibold

**Sections:**

"POST" section label (13px Semibold uppercase `#9D9D9D`):
- Card (1px `#E5E5EA` border, 12px radius, 12px padding): avatar + "TTCwithEmilyJourney" bold + "2m" timestamp + post body text ("Girls, I have to share this — someone in the group posted the most detailed breakdown...")

"FEEDBACK" section label:
- `#EAF0FF` bg card (12px radius): explanation text about privacy policy

"GROUP RULES VIOLATED" section label:
- `#F2F2F7` bg card: "🤔 Don't Share Group Information Outside" bold + description in `#9D9D9D`

Footer paragraph: "If you believe this was a mistake, you can Appeal. An admin will review your post and get back to you." — "Appeal" is a `#5790FF` tappable link.

---

### Screen 7 — User Profile

Opened by tapping any username or avatar in the feed.

**Navigation bar:** ← back (blue, goes to Feed) + no title + right: "Edit" outline pill button + "···" overflow

**Profile header (centered):**
- 72px avatar circle
- "Expert" amber badge below avatar
- Name: "TTCwithEmilyJourney" 17px Semibold
- Stats: "96 posts · 11 following · 11 followers" — numbers bold `#26313A`, rest `#9D9D9D`
- Goal row: 🎯 "Goal: Get pregnant"
- Bio: short centered text

**Two-icon tab bar** (pen icon active | bookmark icon inactive), `#26313A` 2px underline on active tab.

**Posts list** below (3 short post texts with `#E5E5EA` dividers).

---

## Interaction requirements

1. FAB tap → New Post Step 1 (slide in from right)
2. Step 1: typing activates "Next" button
3. Camera icon → adds 2 photos + fills demo text
4. Poll icon → toggles poll mode (tooltip if photos present)
5. Photo tap → fullscreen viewer
6. "Next" → Step 2 (slide forward)
7. Step 2: tapping topic chip toggles selected state, activates "Post" button
8. "Post" tap → returns to Feed with "Posting…" animated progress bar (2s), then new post appears at top
9. Bell → Notifications (slide in)
10. Notification rows with › → Post Removed screen
11. Avatar/name in feed → User Profile
12. All ← arrows go back to previous screen with reverse slide

All screen transitions: slide from right (forward) or slide to right (back), 280ms ease-out.
