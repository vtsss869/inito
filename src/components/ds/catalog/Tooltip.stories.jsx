import { Tooltip } from "./Tooltip.jsx";
import { CarouselDots } from "./CarouselDots.jsx";

const meta = {
  title: "DS/Components/Tooltip",
  component: Tooltip,
  parameters: { layout: "padded" },
};

export default meta;

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
    </div>
  ),
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
