import { Navbar, NAV_ICONS } from "./Navbar.jsx";

const HOME_ICONS = [
  { src: NAV_ICONS.device, label: "Device" },
  { src: NAV_ICONS.drop, label: "Log period" },
];

const meta = {
  title: "DS/Navigation/Header",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
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

// Figma "Header" page — Navbar set, Right icon=1 icon/Caption+icon/Caption,
// Align title=Center. All four are reachable with the existing `rightIcons`
// (any length) / `todayChip` / `align` props — no new API needed.
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
