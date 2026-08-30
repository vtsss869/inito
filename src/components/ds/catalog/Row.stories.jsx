import { useState } from "react";
import { Row } from "./Row.jsx";
import logMeds from "../../../assets/icons/log-meds.svg";

const meta = {
  title: "DS/Components/Row",
  component: Row,
  parameters: { layout: "padded" },
  argTypes: {
    type: {
      control: "select",
      options: [
        "text",
        "icon-text",
        "toggle",
        "icon-text-text",
        "icon-text-button",
        "text-item",
        "table",
      ],
    },
  },
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 24, maxWidth: 360 }}>
      <Row type="text" label="Country" description="Description" />
      <Row type="icon-text" label="Meds" icon={logMeds} description="Optional note" />
      <Row type="toggle" label="Notifications" checked />
      <Row type="icon-text-text" title="Section" label="Value" icon={logMeds} />
      <Row type="icon-text-button" label="Shop" icon={logMeds} buttonLabel="Go to shop" />
      <Row type="text-item" label="Subscription" nestedLabel="Change term" />
      <Row type="table" label="History" />
    </div>
  ),
};

export const Playground = {
  render: (args) => {
    const [on, setOn] = useState(!!args.checked);
    return (
      <div style={{ padding: 24, maxWidth: 360 }}>
        <Row {...args} checked={on} onToggle={setOn} icon={logMeds} />
      </div>
    );
  },
  args: {
    type: "text",
    label: "Label",
    description: "Description",
    checked: false,
  },
};
