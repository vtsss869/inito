import { CarouselDots } from "./CarouselDots.jsx";

const meta = {
  title: "DS/Components/Carousel",
  component: CarouselDots,
  parameters: { layout: "padded" },
  argTypes: {
    count: { control: { type: "range", min: 1, max: 6, step: 1 } },
    active: { control: { type: "range", min: 0, max: 5, step: 1 } },
  },
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <CarouselDots key={n} count={n} active={0} />
      ))}
    </div>
  ),
};

export const Playground = {
  args: { count: 4, active: 1 },
};
