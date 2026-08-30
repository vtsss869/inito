import { useState } from "react";
import { Toggle } from "./Toggle.jsx";

const meta = {
  title: "DS/Components/Toggle",
  component: Toggle,
  parameters: { layout: "padded" },
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ display: "flex", gap: 24, padding: 24, alignItems: "center" }}>
      <Toggle checked aria-label="On" />
      <Toggle checked={false} aria-label="Off" />
      <Toggle checked disabled aria-label="On disabled" />
      <Toggle checked={false} disabled aria-label="Off disabled" />
    </div>
  ),
};

export const Playground = {
  render: (args) => {
    const [on, setOn] = useState(!!args.checked);
    return (
      <div style={{ padding: 24 }}>
        <Toggle {...args} checked={on} onChange={setOn} />
      </div>
    );
  },
  args: { checked: true },
};

export const On = { args: { checked: true } };
export const Off = { args: { checked: false } };
