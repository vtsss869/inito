import { Chip } from "./Chip.jsx";
import { DsChip } from "./catalog/DsChip.jsx";

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
