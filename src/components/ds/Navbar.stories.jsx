import { Navbar, NAV_ICONS, StripsTrackerButton } from "./Navbar.jsx";

const HOME_ICONS = [
  { src: NAV_ICONS.device, label: "Device" },
  { src: NAV_ICONS.drop, label: "Log period" },
];

const OG_ICONS = [
  { src: NAV_ICONS.calendar, label: "Calendar" },
  { src: NAV_ICONS.drop, label: "Log period" },
];

const DROP_ONLY = [{ src: NAV_ICONS.drop, label: "Log period" }];

const meta = {
  title: "DS/Navigation/Header",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Layout matches the Home screen Navbar (Figma 246:59238): 24px left, 12px right, 8px top, 16px bottom. Right-side icons are product-state, not layout variants — see Product icon variants.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 390, background: "#fff" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: "text" },
    titleSize: { control: "select", options: ["h2", "h4"] },
    back: { control: "boolean" },
    todayChip: { control: "boolean" },
    subtitle: { control: "text" },
  },
};

export default meta;

function SectionLabel({ children }) {
  return (
    <p
      style={{
        margin: "0 0 12px",
        fontFamily: "Montserrat, sans-serif",
        fontSize: 12,
        fontWeight: 600,
        color: "#7F8598",
        letterSpacing: "0.1px",
      }}
    >
      {children}
    </p>
  );
}

function Note({ children }) {
  return (
    <p
      style={{
        margin: "0 0 16px",
        maxWidth: 640,
        fontFamily: "Montserrat, sans-serif",
        fontSize: 13,
        fontWeight: 500,
        lineHeight: "18px",
        color: "#112D35",
      }}
    >
      {children}
    </p>
  );
}

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24, background: "#F6F6F6" }}>
      <section>
        <SectionLabel>Home — Left icon Off, H4, 2 icons</SectionLabel>
        <div style={{ width: 390, background: "#fff" }}>
          <Navbar title="Today" titleSize="h4" rightIcons={HOME_ICONS} />
        </div>
      </section>
      <section>
        <SectionLabel>H4 + Today chip + 2 icons</SectionLabel>
        <div style={{ width: 390, background: "#fff" }}>
          <Navbar title="Yesterday" titleSize="h4" todayChip rightIcons={HOME_ICONS} />
        </div>
      </section>
      <section>
        <SectionLabel>DS default — H2, Today chip, 2 icons, subtitle H4</SectionLabel>
        <div style={{ width: 390, background: "#fff" }}>
          <Navbar title="H2" titleSize="h2" todayChip subtitle="H4" rightIcons={HOME_ICONS} />
        </div>
      </section>
      <section>
        <SectionLabel>Left icon On — back + H4</SectionLabel>
        <div style={{ width: 390, background: "#fff" }}>
          <Navbar title="Today" titleSize="h4" back rightIcons={HOME_ICONS} />
        </div>
      </section>
    </div>
  ),
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
  decorators: [],
};

export const ProductIconVariants = {
  name: "Product icon variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24, background: "#F6F6F6" }}>
      <section>
        <SectionLabel>Why the icons differ</SectionLabel>
        <Note>
          Figma Header page (246:57657) is the same Navbar layout as Home. The right-side glyphs
          swap by product state — they are not alternate header components. Home currently ships
          the NG pair (device + drop).
        </Note>
      </section>
      <section>
        <SectionLabel>NG — monitor connected</SectionLabel>
        <Note>
          Next-gen Inito monitor. Device opens the monitor; drop logs period. This is the Home
          screen pair (Today and Yesterday).
        </Note>
        <div style={{ width: 390, background: "#fff", marginBottom: 8 }}>
          <Navbar title="Yesterday" titleSize="h4" todayChip rightIcons={HOME_ICONS} />
        </div>
        <div style={{ width: 390, background: "#fff" }}>
          <Navbar title="Today" titleSize="h4" rightIcons={HOME_ICONS} />
        </div>
      </section>
      <section>
        <SectionLabel>OG &amp; No device — calendar replaces device</SectionLabel>
        <Note>
          Original monitor, or no monitor connected. There is no device screen to open, so the
          device glyph is replaced with calendar. Drop (log period) stays.
        </Note>
        <div style={{ width: 390, background: "#fff", marginBottom: 8 }}>
          <Navbar title="Yesterday" titleSize="h4" todayChip rightIcons={OG_ICONS} />
        </div>
        <div style={{ width: 390, background: "#fff" }}>
          <Navbar title="Today" titleSize="h4" rightIcons={OG_ICONS} />
        </div>
      </section>
      <section>
        <SectionLabel>+ Strips tracker — remaining-strip count</SectionLabel>
        <Note>
          When the strips tracker is on, device/calendar is replaced by a remaining-strips
          control (strip glyph + count). Drop stays. Count color: green = enough, orange = low,
          red = empty/critical, grey = off/unavailable.
        </Note>
        <div style={{ width: 390, background: "#fff", marginBottom: 8 }}>
          <Navbar
            title="Yesterday"
            titleSize="h4"
            todayChip
            rightIcons={DROP_ONLY}
            trailing={<StripsTrackerButton count={21} tone="ok" />}
          />
        </div>
        <div style={{ width: 390, background: "#fff", marginBottom: 12 }}>
          <Navbar
            title="Today"
            titleSize="h4"
            rightIcons={DROP_ONLY}
            trailing={<StripsTrackerButton count={21} tone="ok" />}
          />
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <StripsTrackerButton count={7} tone="empty" />
          <StripsTrackerButton count={7} tone="low" />
          <StripsTrackerButton count={7} tone="off" />
        </div>
      </section>
    </div>
  ),
  parameters: {
    layout: "padded",
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Figma Header page 246:57657. Icons change with product state (NG device vs OG/no-device calendar vs strips tracker). Layout padding matches Home 246:59238.",
      },
    },
  },
  decorators: [],
};

export const Playground = {
  args: {
    title: "Today",
    titleSize: "h4",
    back: false,
    todayChip: false,
    rightIcons: HOME_ICONS,
  },
};

export const HomeToday = {
  name: "Variants/Home H4 Today",
  args: {
    title: "Today",
    titleSize: "h4",
    rightIcons: HOME_ICONS,
  },
};

export const YesterdayTodayChip = {
  name: "Variants/H4 + Today chip",
  args: {
    title: "Yesterday",
    titleSize: "h4",
    todayChip: true,
    rightIcons: HOME_ICONS,
  },
};

export const H2WithSubtitle = {
  name: "Variants/H2 + subtitle",
  args: {
    title: "H2",
    titleSize: "h2",
    todayChip: true,
    subtitle: "H4",
    rightIcons: HOME_ICONS,
  },
};

export const WithBack = {
  name: "Variants/Left icon On",
  args: {
    title: "Today",
    titleSize: "h4",
    back: true,
    rightIcons: HOME_ICONS,
  },
};

export const RightOneIcon = {
  name: "Variants/Right icon — 1 icon",
  args: {
    title: "Today",
    titleSize: "h4",
    rightIcons: [HOME_ICONS[0]],
  },
};

export const RightCaption = {
  name: "Variants/Right icon — Caption",
  args: {
    title: "Today",
    titleSize: "h4",
    todayChip: true,
    rightIcons: [],
  },
};

export const RightCaptionIcon = {
  name: "Variants/Right icon — Caption+icon",
  args: {
    title: "Today",
    titleSize: "h4",
    todayChip: true,
    rightIcons: [HOME_ICONS[0]],
  },
};

export const AlignCenter = {
  name: "Variants/Align title — Center",
  args: {
    title: "Today",
    titleSize: "h4",
    align: "center",
    rightIcons: [HOME_ICONS[0]],
  },
};
