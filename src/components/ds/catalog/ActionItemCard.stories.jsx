import { ActionItemCard } from "./ActionItemCard.jsx";

const meta = {
  title: "DS/Community/Action Item Card",
  component: ActionItemCard,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div style={{ width: 342 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Playground = {};

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <ActionItemCard />
      <ActionItemCard status="Active" showDescription={false} />
      <ActionItemCard showDateRange={false} showDescription={false} showStatus={false} />
      <ActionItemCard showNameAndDate={false} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};
