import { Tooltip } from "./Tooltip.jsx";
import pictogramNotifications from "../../../assets/icons/pictogram-notifications.svg";

const meta = {
  title: "DS/Components/Tooltip",
  component: Tooltip,
  parameters: { layout: "padded" },
};

export default meta;

/**
 * Figma "Tooltip" page — `tooltip` set booleans Show Title / Show image /
 * Show description / Show Buttons, plus Property 1 (pointer up/down) and
 * amount (single/multiple).
 */
export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 40 }}>
      <Tooltip title="Single step" description="Dismiss and Okay actions." amount="one" />
      <Tooltip
        title="Multi step"
        description="Back / Next with carousel dots."
        amount="multiple"
        activeDot={1}
        dots={4}
      />
      <Tooltip
        title="With image"
        description="Show image=true adds a leading pictogram."
        amount="one"
        image={pictogramNotifications}
      />
      <Tooltip
        title="No description"
        showDescription={false}
        amount="one"
      />
      <Tooltip pointer="up" title="Pointer up" description="Property 1=up." amount="one" />
    </div>
  ),
};

export const WithImage = {
  name: "Variants/Show image",
  args: { title: "With image", description: "Show image=true adds a leading pictogram.", image: pictogramNotifications },
};

export const NoButtons = {
  name: "Variants/Show Buttons=false",
  args: { title: "No buttons", description: "Show Buttons=false hides the action row.", showButtons: false },
};

export const PointerUp = {
  name: "Variants/Pointer up",
  args: { title: "Pointer up", description: "Property 1=up.", pointer: "up" },
};

export const Playground = {
  args: {
    title: "Title",
    description: "Description text for the tooltip.",
    amount: "one",
    pointer: "down",
  },
  argTypes: {
    amount: { control: "select", options: ["one", "multiple"] },
    pointer: { control: "select", options: ["up", "down"] },
  },
};
