import { Chip } from "./Chip.jsx";
import { DsChip } from "./catalog/DsChip.jsx";

/**
 * Figma "🦠 Chips" page (62:14234) audit note: the page's only content is a
 * `.chips meta frame` whose `.Link` set is a stray copy of the Buttons-page
 * Link component (still literally labeled "Link", grey `#8f8f8f` icon
 * placeholders, default black/white text) — no distinct "Chip" visual
 * design was ever actually authored there. Structural fix applied per the
 * audit: `.chips meta frame` converted from a plain Frame to a Section for
 * consistency with sibling component pages (see the audit report).
 * `Chip` (Day Status gradient chip) and `DsChip` (purpose chip) below are
 * kept as the DS's real chip patterns since Figma's Chips page has nothing
 * further to reconcile against.
 */
const meta = {
  title: "DS/Components/Chips",
  component: Chip,
  tags: ["autodocs"],
};

export default meta;

export const PurposeOverview = {
  name: "Purpose variants",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, padding: 24 }}>
      <DsChip purpose="info">Info</DsChip>
      <DsChip purpose="achievement">Achievement</DsChip>
      <DsChip purpose="alert">Alert</DsChip>
      <DsChip purpose="promo">Promo</DsChip>
      <DsChip purpose="disabled">Disabled</DsChip>
    </div>
  ),
};

export const Default = {
  name: "Day Status / Info grey",
  args: {
    children: "Cycle day 20",
  },
};

export const OnGradient = {
  name: "Day Status / On gradient",
  args: {
    children: "Cycle day 20",
    onGradient: true,
  },
  parameters: {
    backgrounds: { value: "highFertility" },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "inline-flex",
          padding: 24,
          background: "var(--gradient-high-fertility)",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
