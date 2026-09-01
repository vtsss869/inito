import { CalendarCell, CalendarDate } from "../Calendar.jsx";

const meta = {
  title: "DS/Calendar/Calendar Cell",
  component: CalendarCell,
  parameters: { layout: "padded" },
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ display: "flex", gap: 8, padding: 24, background: "#fff" }}>
      <CalendarCell dow="M" day={10} />
      <CalendarCell dow="T" day={11} muted />
      <CalendarCell dow="W" day={12} chosen />
      <CalendarCell dow="T" day={13} sex />
      <CalendarCell dow="T" day={1} sex selected />
      <CalendarCell dow="F" day={14} legend="high-fertility" />
      <CalendarCell dow="S" day={15} legend="peak-fertility" />
      <CalendarCell dow="S" day={16} legend="test-required" />
    </div>
  ),
};

export const DateOnly = {
  name: ".date states",
  render: () => (
    <div style={{ display: "flex", gap: 12, padding: 24, alignItems: "center" }}>
      <CalendarDate day={8} />
      <CalendarDate day={9} muted />
      <CalendarDate day={10} chosen />
      <CalendarDate day={1} selected />
    </div>
  ),
};

export const Playground = {
  args: {
    dow: "M",
    day: 20,
    chosen: false,
    selected: false,
    muted: false,
    sex: false,
  },
};
