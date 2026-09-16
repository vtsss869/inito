import { useState } from "react";
import { SegmentControl } from "./SegmentControl.jsx";

const OPTIONS = [
  { id: "all", label: "All" },
  { id: "ttc", label: "Trying to conceive" },
  { id: "pregnant", label: "Pregnant" },
  { id: "postpartum", label: "Postpartum" },
];

const DAILY_LOGS_SORT_OPTIONS = [
  { id: "all", label: "All" },
  { id: "empty", label: "Empty" },
  { id: "logged", label: "Logged" },
];

const meta = {
  title: "DS/Components/Segment Control",
  component: SegmentControl,
  parameters: { layout: "padded" },
  args: {
    options: OPTIONS,
    value: "all",
  },
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ padding: 24 }}>
      <SegmentControl options={OPTIONS} value="all" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const Playground = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? "all");
    return (
      <div style={{ padding: 24 }}>
        <SegmentControl {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const SecondOptionSelected = {
  name: "Variants/Second option selected",
  args: { options: OPTIONS, value: "ttc" },
};

/** Figma Daily Logs Sorting Control (`212:399604`). */
export const DailyLogsSorting = {
  name: "Daily Logs / Sorting Control",
  parameters: {
    docs: {
      description: {
        story: "342×48 track, padding 2px, radius 28. Equal-width segments; white pill for selection.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 342, padding: 24, background: "#F6F6F6" }}>
        <Story />
      </div>
    ),
  ],
  render: function Render() {
    const [value, setValue] = useState("all");
    return (
      <SegmentControl
        options={DAILY_LOGS_SORT_OPTIONS}
        value={value}
        onChange={setValue}
      />
    );
  },
};
