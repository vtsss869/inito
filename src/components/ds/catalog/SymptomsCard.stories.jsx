import { SymptomsCard } from "./SymptomsCard.jsx";

const meta = {
  title: "DS/Cards/Symptoms",
  component: SymptomsCard,
  parameters: { layout: "padded" },
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ padding: 24 }}>
      <SymptomsCard />
    </div>
  ),
};
