import { useState } from "react";
import { Checkbox } from "./Checkbox.jsx";

const meta = {
  title: "DS/Components/Checkboxes",
  component: Checkbox,
  parameters: { layout: "padded" },
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ display: "flex", gap: 24, padding: 24, alignItems: "center" }}>
      <Checkbox checked={false} aria-label="Unchecked" />
      <Checkbox checked aria-label="Checked" />
      <Checkbox checked={false} size="small" aria-label="Small unchecked" />
      <Checkbox checked size="small" aria-label="Small checked" />
    </div>
  ),
};

export const Playground = {
  render: (args) => {
    const [on, setOn] = useState(!!args.checked);
    return (
      <div style={{ padding: 24 }}>
        <Checkbox {...args} checked={on} onChange={setOn} />
      </div>
    );
  },
  args: { checked: false, size: "default" },
};
