import { useState } from "react";
import { Checkbox } from "./Checkbox.jsx";

const meta = {
  title: "DS/Components/Checkboxes",
  component: Checkbox,
  parameters: { layout: "padded" },
  argTypes: {
    type: { control: "select", options: ["checkbox", "radio"] },
    size: { control: "select", options: ["default", "small"] },
  },
};

export default meta;

/**
 * Figma "Checkboxes" page — Checkbox_Radio set
 * (Type=Checkbox/Radio, State=Default/Checked, Size=Default/Small/Light).
 * Figma only pairs Checkbox with Default/Small, and Radio with Light (20×20)
 * — there's no Default/Small Radio or Light Checkbox in the set.
 */
export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <Checkbox checked={false} aria-label="Unchecked" />
        <Checkbox checked aria-label="Checked" />
        <Checkbox checked={false} size="small" aria-label="Small unchecked" />
        <Checkbox checked size="small" aria-label="Small checked" />
      </div>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <Checkbox type="radio" checked={false} aria-label="Radio unchecked" />
        <Checkbox type="radio" checked aria-label="Radio checked" />
      </div>
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
  args: { type: "checkbox", checked: false, size: "default" },
};

export const CheckboxDefault = {
  name: "Checkbox/Default",
  args: { type: "checkbox", checked: false },
};
export const CheckboxChecked = {
  name: "Checkbox/Checked",
  args: { type: "checkbox", checked: true },
};
export const CheckboxSmall = {
  name: "Checkbox/Small",
  args: { type: "checkbox", size: "small", checked: true },
};
export const RadioDefault = {
  name: "Radio/Default",
  args: { type: "radio", checked: false },
};
export const RadioChecked = {
  name: "Radio/Checked",
  args: { type: "radio", checked: true },
};
