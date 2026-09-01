import { useState } from "react";
import { SegmentControl } from "./SegmentControl.jsx";

const OPTIONS = [
  { id: "all", label: "All" },
  { id: "ttc", label: "Trying to conceive" },
  { id: "pregnant", label: "Pregnant" },
  { id: "postpartum", label: "Postpartum" },
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
