import { ShopCard } from "./ShopCard.jsx";

const meta = {
  title: "DS/Cards/Shop",
  component: ShopCard,
  parameters: { layout: "padded" },
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 390 }}>
      <ShopCard />
    </div>
  ),
};

export const Playground = {
  args: {
    quantityLabel: "30",
    title: "Pack of 30 fertility strips",
    description: "Measures LH, E3G, PdG and FSH. ",
    price: "$108",
    type: "ovulation",
    ctaVariant: "button",
  },
  argTypes: {
    type: { control: "select", options: ["ovulation", "pregnancy"] },
    ctaVariant: { control: "select", options: ["button", "counter"] },
  },
};

export const InCart = {
  name: "Variants/In cart (Counter CTA)",
  render: () => (
    <div style={{ padding: 24, maxWidth: 390 }}>
      <ShopCard ctaVariant="counter" counterValue={2} />
    </div>
  ),
};
