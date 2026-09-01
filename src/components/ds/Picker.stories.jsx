import { Picker } from "./Picker.jsx";

/**
 * Figma DS: "Picker" page — iOS Time & Date Picker (AM or PM=Yes/No),
 * iOS Time Picker (AM or PM=Yes/No), iOS Timer Picker.
 * Simplified static wheel — see Picker.jsx doc comment.
 */
const TIME_DATE_COLUMNS = [
  { items: ["Mon 26", "Tue 27", "Today", "Thu 29", "Fri 30"], active: 2, width: 120 },
  { items: ["9", "10", "11", "12", "1"], active: 2, width: 56 },
  { items: ["28", "29", "30", "31", "32"], active: 2, width: 56 },
  { items: ["AM", "AM", "PM", "PM", "PM"], active: 2, width: 56 },
];

const TIME_COLUMNS = [
  { items: ["9", "10", "11", "12", "1"], active: 2, width: 64 },
  { items: ["28", "29", "30", "31", "32"], active: 2, width: 64 },
  { items: ["AM", "AM", "PM", "PM", "PM"], active: 2, width: 64 },
];

const TIME_COLUMNS_24H = [
  { items: ["9", "10", "11", "12", "13"], active: 2, width: 72 },
  { items: ["28", "29", "30", "31", "32"], active: 2, width: 72 },
];

const TIMER_COLUMNS = [
  { items: ["1", "2", "3", "4", "5"], active: 2, width: 56 },
  { items: ["hours"], active: 0, width: 64 },
  { items: ["10", "15", "20", "25", "30"], active: 2, width: 56 },
  { items: ["min"], active: 0, width: 56 },
];

const meta = {
  title: "DS/Components/Picker",
  component: Picker,
  parameters: { layout: "padded" },
};

export default meta;

function SectionLabel({ children }) {
  return (
    <p className="t-mini-semibold color-grey" style={{ marginBottom: 16 }}>
      {children}
    </p>
  );
}

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <section>
        <SectionLabel>iOS Time &amp; Date Picker (AM/PM=Yes)</SectionLabel>
        <Picker columns={TIME_DATE_COLUMNS} />
      </section>
      <section>
        <SectionLabel>iOS Time Picker (AM/PM=Yes)</SectionLabel>
        <Picker columns={TIME_COLUMNS} />
      </section>
      <section>
        <SectionLabel>iOS Time Picker (AM/PM=No / 24h)</SectionLabel>
        <Picker columns={TIME_COLUMNS_24H} />
      </section>
      <section>
        <SectionLabel>iOS Timer Picker</SectionLabel>
        <Picker columns={TIMER_COLUMNS} />
      </section>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const TimeAndDatePicker = {
  name: "Variants/Time & Date Picker",
  args: { columns: TIME_DATE_COLUMNS },
};

export const TimePicker = {
  name: "Variants/Time Picker",
  args: { columns: TIME_COLUMNS },
};

export const TimePicker24h = {
  name: "Variants/Time Picker (No AM-PM)",
  args: { columns: TIME_COLUMNS_24H },
};

export const TimerPicker = {
  name: "Variants/Timer Picker",
  args: { columns: TIMER_COLUMNS },
};
