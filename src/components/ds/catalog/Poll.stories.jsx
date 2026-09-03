import { useState } from "react";
import { Poll } from "./Poll.jsx";

const meta = {
  title: "DS/Community/Poll",
  component: Poll,
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

export const Playground = {
  args: {
    options: [
      { id: "1", label: "Ovulation kits", percent: 4 },
      { id: "2", label: "Inito", percent: 96 },
    ],
    selectedId: "2",
    voters: 10,
    showResults: true,
  },
};

export const ThreeOptions = {
  name: "Variants/Three options",
  args: {
    options: [
      { id: "1", label: "Ovulation kits", percent: 4 },
      { id: "2", label: "Inito", percent: 96 },
      { id: "3", label: "Fertility strips", percent: 0 },
    ],
    selectedId: "2",
    voters: 10,
    showResults: true,
  },
};

export const BeforeVoting = {
  name: "States/Before results",
  args: {
    options: [
      { id: "1", label: "Ovulation kits" },
      { id: "2", label: "Inito" },
      { id: "3", label: "Fertility strips" },
      { id: "4", label: "Other" },
    ],
    showResults: false,
  },
};

export const Interactive = {
  name: "Playground/Interactive",
  render: () => {
    const [selectedId, setSelectedId] = useState("2");
    return (
      <Poll
        options={[
          { id: "1", label: "Ovulation kits", percent: 4 },
          { id: "2", label: "Inito", percent: 96 },
        ]}
        selectedId={selectedId}
        onSelect={setSelectedId}
        voters={10}
      />
    );
  },
};
