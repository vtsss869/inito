import { DayStatusCard } from "./DayStatusCard.jsx";

const meta = {
  title: "DS/Cards/Day Status",
  component: DayStatusCard,
  tags: ["autodocs"],
  args: {
    pill: "Cycle day 20",
    title: "High Fertility",
    state: "high-fertility",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 341 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const HighFertility = {};
