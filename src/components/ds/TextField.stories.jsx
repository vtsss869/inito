import { useState } from "react";
import { TextField } from "./TextField.jsx";
import chevronRight from "../../assets/icons/chevron-right.svg";

const meta = {
  title: "DS/Components/Inputs",
  component: TextField,
  parameters: { layout: "padded" },
  argTypes: {
    state: {
      control: "select",
      options: ["default", "focused", "filled", "error"],
    },
  },
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24, maxWidth: 400 }}>
      <TextField state="default" placeholder="Country" description="Description" rightIcon={chevronRight} />
      <TextField state="focused" value="Focused value" description="Description" />
      <TextField state="filled" value="Filled value" description="Description" />
      <TextField state="error" value="Invalid value" description="Error description" />
    </div>
  ),
};

export const Playground = {
  render: (args) => {
    const [value, setValue] = useState(args.value || "");
    return (
      <div style={{ padding: 24, maxWidth: 400 }}>
        <TextField
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rightIcon={chevronRight}
        />
      </div>
    );
  },
  args: {
    state: "default",
    placeholder: "Country",
    description: "Description",
    value: "",
  },
};

export const Default = {
  args: { state: "default", placeholder: "Country", description: "Description" },
};

export const Focused = {
  args: { state: "focused", value: "United States", description: "Description" },
};

export const Filled = {
  args: { state: "filled", value: "United States", description: "Description" },
};

export const Error = {
  args: { state: "error", value: "Invalid", description: "Please enter a valid country" },
};
