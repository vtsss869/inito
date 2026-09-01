import { useState } from "react";
import { Counter } from "./Counter.jsx";

const STATES = ["default", "disabled", "only-plus", "only-minus"];

const meta = {
  title: "DS/Components/Counter",
  component: Counter,
  parameters: { layout: "padded" },
  args: { value: 1, state: "default" },
  argTypes: {
    state: { control: "select", options: STATES },
  },
};

export default meta;

export const CounterOverview = {
  name: "Counter/Overview",
  render: () => (
    <div style={{ display: "flex", gap: 24, padding: 24, alignItems: "center" }}>
      {STATES.map((state) => (
        <div key={state} style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
          <Counter state={state} value={state === "only-plus" ? 0 : 2} />
          <span className="t-mini color-grey">{state}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const CounterPlayground = {
  name: "Counter/Playground",
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 1);
    return (
      <div style={{ padding: 24 }}>
        <Counter {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const CounterDefault = { name: "Counter/Default", args: { state: "default", value: 2 } };
export const CounterDisabled = { name: "Counter/Disabled", args: { state: "disabled", value: 2 } };
export const CounterOnlyPlus = { name: "Counter/Only Plus", args: { state: "only-plus", value: 0 } };
export const CounterOnlyMinus = { name: "Counter/Only Minus", args: { state: "only-minus", value: 1 } };
