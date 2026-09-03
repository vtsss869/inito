# Claude Code Prompt — Inito Community App: New Post Flow (Pixel-Perfect Interactive Prototype)

## Context

Build a **clickable React web prototype** that replicates the Inito community app's "Create New Post" flow from Figma (Page 9). The prototype must be a single HTML file with React + Tailwind CDN (no bundler). Every screen must match the Figma designs pixel-for-pixel: exact colors, fonts, spacing, iconography, and interaction states. All transitions between screens must be clickable.

---

## Tech Stack

- React 18 (CDN via esm.sh or unpkg)
- Tailwind CSS (CDN)
- Lucide React (CDN) for icons
- Single `index.html` file
- Mobile frame: 390×844px centered on desktop, with iPhone notch/status bar
- Font: **SF Pro** via `font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', sans-serif`
- Secondary font: **Montserrat** via Google Fonts (for "inito" logo and section headings)

---

## Design Tokens (exact values from Figma)

```js
const COLORS = {
  // Core
  background: '#FFFFFF',
  surface: '#F2F2F7',          // search bar, input backgrounds
  surfaceBlue: '#DDE9FF',      // poll option backgrounds, selected tab bg
  
  // Text
  textPrimary: 'rgb(38, 49, 54)',    // #26313A — all main body text, names
  textSecondary: 'rgb(157, 157, 157)', // #9D9D9D — placeholder, inactive tabs
  textMuted: 'rgb(174, 174, 174)',    // #AEAEAE — timestamps
  textWhite: '#FFFFFF',
  
  // Brand
  primary: 'rgb(87, 144, 255)',      // #5790FF — primary blue, CTAs, links, active tab underline, Admin/Expert badge text
  primaryDark: 'rgb(17, 45, 53)',    // #112D35 — FAB button, dark header elements
  
  // Semantic
  infoBackground: '#EAF0FF',         // info banner bg
  dangerRed: '#FF3B30',              // error states
  successGreen: '#34C759',           // success/approved
  
  // Separators
  separator: 'rgba(0,0,0,0.1)',
  border: '#E5E5EA',
};

const FONT_SIZE = {
  caption2: 11,    // badge labels
  caption1: 12,    // timestamps, subtitles
  subheadline: 14, // body text, tab labels, post text, names
  body: 15,        // standard body
  callout: 16,     // buttons, input text
  headline: 17,    // nav titles
  title3: 20,      // screen titles
};

const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
};

const RADIUS = {
  sm: 8,
  md: 10,
  lg: 12,
  xl: 16,
  pill: 999,
  circle: '50%',
};
```

---

## Screens & Navigation Map

```
[Feed] 
  ├─ tap "+" FAB ──────────────────────────────→ [New Post Step 1 - Empty]
  ├─ tap bell icon ────────────────────────────→ [Notifications]
  └─ tap username/avatar ──────────────────────→ [User Profile]

[New Post Step 1 - Empty]
  ├─ type text ────────────────────────────────→ [New Post Step 1 - With Text]
  ├─ tap × (close) ────────────────────────────→ [Feed]
  └─ "Next" button disabled (gray)

[New Post Step 1 - With Text]
  ├─ tap 📷 icon ──────────────────────────────→ [New Post Step 1 - With Text + 2 Photos]
  ├─ tap ≡ poll icon ──────────────────────────→ [New Post Step 1 - Poll Mode]
  ├─ tap "Next" (active) ──────────────────────→ [New Post Step 2]
  └─ tap × (close) ────────────────────────────→ [Feed]

[New Post Step 1 - With Text + 2 Photos]
  ├─ tap any photo ────────────────────────────→ [Photo Fullscreen Viewer]
  ├─ tap × on a photo ─────────────────────────→ removes that photo
  ├─ tap ≡ poll icon ──────────────────────────→ shows tooltip "Post can include only images or poll"
  ├─ tap "Next" (active) ──────────────────────→ [New Post Step 2]
  └─ tap × (close) ────────────────────────────→ [Feed]

[New Post Step 1 - Poll Mode]
  ├─ tap "Remove poll" ────────────────────────→ [New Post Step 1 - With Text]
  ├─ tap "Next" ───────────────────────────────→ [New Post Step 2]
  └─ tap × (close) ────────────────────────────→ [Feed]

[Photo Fullscreen Viewer]
  └─ tap × ────────────────────────────────────→ back to [New Post Step 1 - With Text + 2 Photos]

[New Post Step 2 - Sensitive Topics]
  ├─ tap ← back ───────────────────────────────→ [New Post Step 1 - With Text + 2 Photos]
  ├─ tap any topic tag ────────────────────────→ tag selected (filled blue), "Post" becomes active
  ├─ "Post" disabled (no tag selected)
  └─ tap "Post" (when active) ─────────────────→ [Feed - Posting State]

[Feed - Posting State]
  └─ after 2s auto-transition ─────────────────→ [Feed] (with new post at top)

[Notifications]
  ├─ tap ← back ───────────────────────────────→ [Feed]
  └─ tap "Your post was removed" row ──────────→ [Post Removed Feedback]

[Post Removed Feedback]
  └─ tap ← back ───────────────────────────────→ [Notifications]

[User Profile]
  └─ tap ← back ───────────────────────────────→ [Feed]
```

---

## Screen Specifications

### 1. FEED SCREEN

**Status bar:** `9:41` left, signal/wifi/battery icons right. White background. Height 44px.

**Top bar (below status bar):**
- Left: circular avatar (32px diameter, user photo)
- Center: Search bar — rounded pill, `#F2F2F7` background, magnifying glass icon (14px, `#9D9D9D`), placeholder "Search" in `#9D9D9D`, 14px SF Pro Regular. Full width minus avatar and bell icon. Height 36px, border-radius 18px.
- Right: Bell icon (`#26313A`, 22px) with a red circular badge (12px, `#FF3B30`, white "!" or dot inside)

**Tab row (below top bar):**
- "My feed" tab: 14px SF Pro Semibold, `#26313A`, active underline `#5790FF` (2px solid, full width of text), bottom border entire row is `#E5E5EA` 1px
- "Featured" tab: same size, `#9D9D9D`, no underline
- Right side: filter/sort icon with small orange badge (number "1")
- Padding: 16px horizontal, 12px vertical

**Post cards** (separated by `#E5E5EA` 1px divider or 8px gap):

Each post card layout (16px horizontal padding, 12px top padding):
```
[Avatar 40px] [Name 14px Semibold #26313A]  [Admin/Expert badge]  [timestamp 12px #AEAEAE]   [... 3 dots]
              [Post body text 14px Regular #26313A, line-height 20px]
              [Optional: poll, image, chart]
[♡ count]  [💬 count comments]
```

**Badges:**
- "Admin" badge: `#5790FF` text, `rgba(87,144,255,0.12)` background, 11px SF Pro Regular, 4px 8px padding, 10px border-radius
- "Expert" badge: amber `#F5A623` text, `rgba(245,166,35,0.12)` background, same sizing
- "BFP" / "Pregnancy" tags on posts: similar pill style, smaller

**Poll options:**
```
[ □  Option text                    23% > ]
```
- Background: `#DDE9FF` (light blue)
- Checkbox: 16px square, `#5790FF` border when unselected, filled blue when selected
- Text: 14px Regular `#26313A`
- Percentage: 14px Regular `#26313A`, right-aligned
- ">" chevron: 12px `#9D9D9D`
- 8px border-radius, 48px height, full width

**Anonymous member avatar:** 
- Circular 40px, `#EEF2FF` background, shield/person icon in `#6B7280`

**Like/comment row:**
- Heart icon (outline, 20px) + count, 8px gap, `#9D9D9D` color
- Chat bubble icon (20px) + "N comments", same style
- 14px SF Pro Regular

**FAB button:**
- 56px circle, background `#112D35` (very dark teal)
- "+" icon in white, 24px
- Position: fixed, bottom 88px (above nav bar), right 16px
- Box shadow: `0 4px 12px rgba(17,45,53,0.3)`

**Bottom navigation bar:**
- White background, 1px top border `#E5E5EA`
- Height 83px (with home indicator area), content area 49px
- 4 items: Home (🏠) | Chart (📈) | Shop (🛍) | Community (👥)
- Icon size: 22px, label: 10px SF Pro Regular
- Active (Community): `#5790FF` icon + label. Inactive: `#8E8E93`
- "Community" tab has active state in this flow

---

### 2. NEW POST SCREEN — STEP 1/2

**Status bar:** same as above

**Navigation bar:**
- Left: × close icon (20px, `#26313A`)
- Center: "New post" — 17px SF Pro Semibold `#26313A`
- Right: "Next" button — pill shape, 14px SF Pro Semibold
  - **Disabled state:** `#F2F2F7` background, `#9D9D9D` text, border-radius 20px, 32px height, 16px horizontal padding
  - **Active state:** `#112D35` background, white text
- Below title: "Step 1 / 2" — 12px SF Pro Regular `#9D9D9D`, left-aligned, 16px left padding

**Content area (scrollable):**
- 16px horizontal padding
- Multiline text input, no border, 14px SF Pro Regular `#26313A`, placeholder "Add text..." in `#C7C7CC`
- Min height: fills available space above toolbar

**If photos are attached (2-photo grid):**
```
[Photo 1 (with × badge)]  [Photo 2 (with × badge)]
```
- Each photo: half-width minus gap, aspect ratio ~4:3, border-radius 8px, overflow hidden
- × badge: 20px circle, `rgba(0,0,0,0.6)` background, white ×, position top-right 8px 8px

**If poll mode is active:**
- "Ask a poll question" text (14px, `#9D9D9D`, underlined or dashed border bottom) at top
- Two input rows (rounded rectangle, `#F2F2F7` bg, 48px height, 12px horizontal padding):
  - First: text cursor "|Add option" (blinking cursor, placeholder text)
  - Second: "Add option" (placeholder)
- "Remove poll" text link below: 14px SF Pro Regular `#5790FF`, left-aligned

**Bottom toolbar (above keyboard, fixed):**
- Left cluster: 
  - 📷+ icon (add photo, 22px, `#26313A`): SF Symbol `photo.badge.plus` style
  - ≡ icon (add poll, 22px, `#26313A`): list/poll icon
  - 8px gap between icons
- Right: "Anonymously" label (14px Regular `#26313A`) + iOS toggle switch (off state: gray thumb on gray track; on state: white thumb on blue track `#34C759`)

**Tooltip (appears on tap of poll icon when photos present):**
- Small popover/tooltip: white bg, 1px border `#E5E5EA`, 8px border-radius, shadow
- Text: "Post can include only images or poll" — 13px Regular `#26313A`
- Appears just above the toolbar, dismiss on tap outside

**iOS keyboard:** render as a gray block (the actual keyboard area, `#D1D5DB` background) with approximate key layout, height 291px. Show visible when "Add text..." field is focused.

---

### 3. PHOTO FULLSCREEN VIEWER

- Full screen takeover (390×844px)
- Background: `#1C1C1E` (near-black)
- Photo centered, full width, proportional height (~60% of screen)
- × dismiss button: top-right, 8px from edges — 32px circle, `rgba(90,90,90,0.8)` background, white × icon (16px)
- Pagination: "1 of 3" — 13px SF Pro Regular `rgba(255,255,255,0.7)`, centered, 20px from bottom of photo
- White home indicator bar at very bottom, centered

---

### 4. NEW POST SCREEN — STEP 2/2

**Navigation bar:**
- Left: ← back arrow (SF Symbol, 22px, `#5790FF` — iOS blue)
- Center: "New post" — 17px SF Pro Semibold `#26313A`
- Right: "Post" button (same pill style as "Next")
  - Disabled: `#F2F2F7` bg, `#9D9D9D` text
  - Active (when ≥1 tag selected): `#112D35` bg, white text
- Below: "Step 2 / 2" — 12px SF Pro Regular `#9D9D9D`

**Content (16px horizontal padding, 20px top):**

**Heading:** "Does your post include any sensitive topics?"
- 17px SF Pro Semibold `#26313A`, full width, wraps to 2 lines

**Sub-text:** "Some topics can be sensitive. Adding a trigger warning helps others avoid content they're not ready to see."
- 13px SF Pro Regular `#9D9D9D`, line-height 18px, 6px top margin

**Topic chips (20px top margin, flex-wrap, 8px gap):**

Each chip — unselected state:
- Background: `#F2F2F7`
- Text: 14px SF Pro Regular `#26313A`
- Padding: 8px 16px
- Border-radius: 20px (pill)

Selected state:
- Background: `#5790FF`
- Text: white
- Same sizing

Chips (in order, wrapping naturally):
1. "Mention of Loss"
2. "Pregnancy Announcement (BFP)"
3. "Graphic Images"
4. "Mention of Pregnancy"
5. "None of above"

Note: "Mention of Loss" and "Pregnancy Announcement (BFP)" are full-width rows. "Graphic Images" and "Mention of Pregnancy" fit side-by-side.

**Info banner (pinned to bottom, above home indicator):**
- Background: `#EAF0FF`
- 12px border-radius, 12px padding, 16px horizontal margin
- Left: circular `#5790FF` info "i" icon (18px), outlined circle style
- Text: "Line eyes posts aren't allowed on the feed. Please post any line eyes in the weekly thread." — 13px SF Pro Regular `#26313A`, line-height 18px

---

### 5. FEED — POSTING STATE

Same as Feed screen, but with a posting progress bar below the tab row:
- "Posting..." text in `#9D9D9D`, 13px, left-aligned (16px padding)
- Below it: a thin progress bar (4px height, `#5790FF` color, border-radius 2px, animating from 0→100% width over 2 seconds, background `#E5E5EA`)
- After 2 seconds, transition to normal Feed with the new post appearing as first item in "My feed"

---

### 6. NOTIFICATIONS SCREEN

**Navigation bar:**
- Left: ← back (22px, `#5790FF`)
- Center/Left: "Notifications" — 20px SF Pro Semibold `#26313A`, left-aligned (not centered), large title style

**List (16px horizontal padding):**

Grouped by date labels:
- "Today", "Yesterday", "Last 7 days", "Last 30 days"
- Label style: 13px SF Pro Semibold `#9D9D9D`, 20px top padding, 8px bottom padding

**Notification row layout (64px min-height, 12px vertical padding):**
```
[Icon/Avatar 36px]  [Text block]  [Timestamp]  [Optional chevron >]
```

**Icon variants:**
- ⭐ Featured: `#F2F2F7` circle bg, star icon `#F5A623`
- 👍 Like (single user): circular avatar photo, small heart badge bottom-right (red)
- 👍 Like (2 users): two overlapping avatars (first 36px, second 28px offset -8px), same heart badge
- 👍 Like (3+): three overlapping avatars, same
- 💬 Comment: circular avatar photo, small chat bubble badge bottom-right (`#5790FF`)
- 🔔 System/Support: `#F2F2F7` circle bg, clock or check icon `#9D9D9D`
- 👤 Follow: circular avatar photo
- 🔵 Admin Feedback: `#EAF0FF` circle bg, chat icon `#5790FF`
- ✅ Approved: `#E8F5E9` circle bg, checkmark `#34C759`
- ❌ Not approved: `#FFEBEE` circle bg, exclamation `#FF3B30`

**Text content (flex-1, 8px left margin from icon):**
- Main text: 14px SF Pro Regular `#26313A`, line-height 18px
- Bold/highlighted usernames inline: 14px SF Pro Semibold `#26313A`
- Blue links (like "@username4"): `#5790FF`

**Right side:**
- Timestamp: 12px SF Pro Regular `#AEAEAE`
- For tappable rows (featured, support, restored, removed, feedback, approved/not approved): ">" chevron 12px `#C7C7CC`
- Follow row has "Follow" button (pill: `#5790FF` bg, white text, 13px Semibold, 28px height, 12px horizontal padding) or "Following" (gray bg)

**The "Your post was removed" row** is tappable → navigates to Post Removed screen.

---

### 7. POST REMOVED FEEDBACK SCREEN

**Navigation bar:**
- Left: ← back (22px, `#5790FF`)
- Title: "Your post was removed" — 17px SF Pro Semibold `#26313A`

**Content (16px horizontal padding, 20px top):**

**"Post" section label:** 13px SF Pro Semibold `#9D9D9D` uppercase

**Post card (below label):**
- 1px border `#E5E5EA`, 12px border-radius, 12px padding
- Avatar (32px) + "TTCwithEmilyJourney" (14px Semibold `#26313A`) + "2m" timestamp
- Post body text: 14px Regular `#26313A`, line-height 20px

**"Feedback" section label** (20px top): same label style

**Feedback card:**
- Background: `#EAF0FF`, 12px border-radius, 12px padding
- Body text explaining the reason: 14px Regular `#26313A`, line-height 20px

**"Group rules violated" section label** (20px top): same label style

**Rule card:**
- Background: `#F2F2F7`, 12px border-radius, 12px padding
- Rule title with emoji: "🤔 Don't Share Group Information Outside" — 14px SF Pro Semibold `#26313A`
- Rule description: 13px Regular `#9D9D9D`, line-height 18px

**Footer text (20px top):**
- "If you believe this was a mistake, you can " (14px Regular `#26313A`) + "Appeal" (`#5790FF`, same size) + ". An admin will review your post and get back to you. Their decision will be final."
- Line-height: 20px

---

### 8. USER PROFILE SCREEN

**Navigation bar:**
- Left: ← back (22px, `#5790FF`)
- Right: "Edit" button (outline pill: 1px border `#E5E5EA`, `#26313A` text, 13px Semibold, 28px height) + "..." overflow (22px, `#26313A`)

**Profile header (centered, 20px top padding):**
- Avatar: 72px circle photo
- "Expert" badge (above name): same badge style as feed
- Name: "TTCwithEmilyJourney" — 17px SF Pro Semibold `#26313A`
- Stats row (20px top): "96 posts · 11 following · 11 followers" — 13px Regular `#9D9D9D`, numbers in Semibold `#26313A`
- Goal row: 🎯 icon + "Goal: Get pregnant" — 14px Regular `#26313A`
- Bio text: 14px Regular `#26313A`, 16px horizontal padding

**Tab bar (below bio, with bottom border):**
- Two icon tabs: pen/edit icon | bookmark icon
- Active: `#26313A`, 2px `#26313A` underline. Inactive: `#9D9D9D`

**Posts grid:** same feed post cards below

---

## Animation & Interaction Details

1. **Screen transitions:** slide in from right (translateX 100% → 0) on forward, slide out right on back. Duration 280ms, ease-out.
2. **Keyboard appearance:** when tapping the text area in New Post Step 1, the keyboard slides up from bottom (300ms ease-out). The content area shrinks (bottom padding adjusts).
3. **Tag chip selection:** instant color change on tap (no animation needed, just state toggle).
4. **Posting progress bar:** CSS animation `@keyframes progress { from { width: 0% } to { width: 100% } }` duration 2s linear, then auto-navigate.
5. **FAB press:** slight scale-down (0.95) on press, scale back on release.
6. **Tooltip dismissal:** tap anywhere outside tooltip to dismiss.

---

## Component Hierarchy

```
<App>
  <MobileFrame>                    // 390×844 container, iPhone bezels, notch
    <StatusBar />                  // 9:41, signal icons
    {currentScreen === 'feed' && <FeedScreen />}
    {currentScreen === 'newpost1' && <NewPostStep1 />}
    {currentScreen === 'newpost2' && <NewPostStep2 />}
    {currentScreen === 'photofull' && <PhotoViewer />}
    {currentScreen === 'notifications' && <NotificationsScreen />}
    {currentScreen === 'postremoved' && <PostRemovedScreen />}
    {currentScreen === 'profile' && <UserProfileScreen />}
  </MobileFrame>
</App>
```

Use a `useReducer` or `useState` for:
- `currentScreen` — which screen is visible
- `newPostText` — text content of new post
- `newPostPhotos` — array of photo URLs (use placeholder images from `https://picsum.photos`)
- `isPollMode` — boolean
- `pollOptions` — array of strings
- `selectedTopics` — array of selected sensitive topic tags
- `isAnonymous` — boolean
- `isPosting` — boolean (triggers progress bar)

---

## Assets & Placeholder Images

Use these specific Unsplash/picsum placeholder images:

**User avatars:**
- Marissa: `https://i.pravatar.cc/80?img=47`
- Clementine: `https://i.pravatar.cc/80?img=12`
- Kate: `https://i.pravatar.cc/80?img=25`
- Samantha: `https://i.pravatar.cc/80?img=32`
- Anonymous: use a gray circle with a shield SVG icon

**Post photos (for New Post image grid):**
- Photo 1: woman with Inito device at desk — use `https://picsum.photos/400/300?random=1`
- Photo 2: Inito device on coffee table — use `https://picsum.photos/400/300?random=2`
- Photo 3 (viewer): use `https://picsum.photos/390/520?random=3`

**Inito chart image (in feed post):**
- Render as a simple inline SVG mimicking a hormone tracking chart (green line, purple line, axis labels "inito" brand watermark at top-left, date labels along bottom). Background white. ~320×140px.

---

## Feed Post Data (hardcoded)

```js
const posts = [
  {
    id: 1,
    author: 'Marissa Layfield',
    avatar: 'https://i.pravatar.cc/80?img=47',
    badge: 'Admin',
    time: '12m',
    text: "Fertility journeys can be a rollercoaster ride! 🌈 Whether you're just starting out or have been trying for a while, it's important to celebrate every little victory. Remember, you're not alone in this journey. Let's uplift one another and share our stories!",
    likes: 24,
    comments: 10,
  },
  {
    id: 2,
    author: 'Anonymous member',
    avatar: null, // anonymous avatar
    badge: null,
    time: '56m',
    text: "I'm new to Inito. How does my chart appear? Is there still a chance to confirm ov?",
    chart: true,
    likes: 38,
    comments: 2,
  },
  {
    id: 3,
    author: 'Clementine',
    avatar: 'https://i.pravatar.cc/80?img=12',
    badge: null,
    time: '2h',
    text: "Cycle 6 and still waiting. Some days are harder than others but knowing you're all on the same journey makes it feel less lonely 🩶",
    likes: 78,
    comments: 0,
    commentLabel: 'Comment',
  },
  {
    id: 4,
    author: 'Kate',
    avatar: 'https://i.pravatar.cc/80?img=25',
    badge: 'Expert',
    time: '4d',
    tags: ['BFP', 'Pregnancy'],
    text: "What's the earliest DPO you got a positive test? 🌊",
    poll: {
      question: "What's the earliest DPO you got a positive test?",
      voters: 234,
      options: [
        { label: '8 DPO', percent: 4 },
        { label: '9 DPO', percent: 23 },
        { label: '10 DPO', percent: 17 },
        { label: '11 DPO or later', percent: 56 },
      ],
    },
    likes: 33,
    comments: 10,
  },
  {
    id: 5,
    author: 'Samantha Rivers',
    avatar: 'https://i.pravatar.cc/80?img=32',
    badge: null,
    time: '5d',
    text: "Tip from cycle 9 me to cycle 1 you: don't compare your chart to anyone else's. Your hormones have their own rhythm — trust the data, not the anxiety",
    likes: 123,
    comments: 5,
  },
];
```

---

## Critical Details to Get Right

1. **SF Pro font rendering** — use `-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', sans-serif` throughout. Never use Roboto or Inter.
2. **The primary dark color `#112D35`** is used for the FAB, the active "Next"/"Post" button, and it's a very dark teal (not pure black).
3. **The primary blue `#5790FF`** is used for: active tab underline, Admin badge text, back arrows, active link text, selected chip background, Follow button, progress bar, info icon.
4. **The "Step N / N" subtitle** sits directly below the nav bar title, NOT inside the nav bar. It's a second line, 12px, `#9D9D9D`, left-padded 16px.
5. **Post cards have NO card background** — they sit directly on white, separated only by a thin `#E5E5EA` divider line (1px full-width) below each post's like/comment row.
6. **The "Next"/"Post" button** is a pill/capsule shape, NOT a rectangle. Border-radius ~20px, height 32px.
7. **The post × close button** at top-left is `×` character (or a custom X SVG), NOT a back arrow. The back screen (Step 2) uses a ← arrow.
8. **Bottom toolbar in New Post** (photo icon + poll icon + anonymously toggle) must stay ABOVE the keyboard, not scroll away with the content.
9. **The info banner in Step 2** is pinned to the bottom of the screen (position fixed relative to mobile frame), not scrollable.
10. **Notification avatars** — when 2 people liked a post, show 2 overlapping circular photos. When 3+, show 3 overlapping.

---

## Deliverable

A single `index.html` file that:
- Opens in any modern browser
- Shows a centered iPhone frame (390×844px) with proper phone bezels and notch
- Starts on the Feed screen
- All 8 screens are reachable via the click interactions described above
- No external dependencies except CDN links for React, ReactDOM, Tailwind, and Lucide
- Uses `<script type="text/babel">` with Babel CDN for JSX, OR uses precompiled inline JS

The result should look indistinguishable from the Figma designs when placed side-by-side.
