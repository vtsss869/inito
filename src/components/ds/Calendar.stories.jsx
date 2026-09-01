import {
  Calendar,
  CalendarCell,
  CalendarDate,
  CalendarLegend,
  CALENDAR_LEGENDS,
} from "./Calendar.jsx";

const HOME_WEEK = [
  { dow: "MO", day: "28", muted: true, sex: true },
  { dow: "TU", day: "29", muted: true },
  { dow: "WE", day: "30", muted: true },
  { dow: "TH", day: "1", sex: true },
  { dow: "FR", day: "2", chosen: true },
  { dow: "SA", day: "3" },
  { dow: "SU", day: "4" },
];

const HOME_WEEK_YESTERDAY = HOME_WEEK.map((d) => ({
  ...d,
  chosen: d.day === "2",
  selected: d.day === "1",
  stroke: d.day !== "2",
}));

const meta = {
  title: "DS/Calendar/Calendar",
  component: Calendar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 390, background: "#fff" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

function SectionLabel({ children }) {
  return (
    <p
      style={{
        margin: "0 0 12px",
        fontFamily: "Montserrat, sans-serif",
        fontSize: 12,
        fontWeight: 600,
        color: "#7F8598",
        letterSpacing: "0.1px",
      }}
    >
      {children}
    </p>
  );
}

function Phone({ children }) {
  return <div style={{ width: 390, background: "#fff" }}>{children}</div>;
}

export const Overview = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
        padding: 24,
        background: "#F6F6F6",
      }}
    >
      <section>
        <SectionLabel>Home week — Calendar (HF)</SectionLabel>
        <Phone>
          <Calendar days={HOME_WEEK} />
        </Phone>
      </section>

      <section>
        <SectionLabel>Home week — Yesterday selected (date 1 grey, date 2 HF fill no stroke)</SectionLabel>
        <Phone>
          <Calendar days={HOME_WEEK_YESTERDAY} />
        </Phone>
      </section>

      <section>
        <SectionLabel>
          .calendar cell / Calendar days states — Home-relevant day states
        </SectionLabel>
        <div
          style={{
            display: "flex",
            gap: 8,
            padding: 16,
            background: "#fff",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <CalendarCell dow="SA" day="3" />
          <CalendarCell dow="MO" day="28" muted />
          <CalendarCell dow="FR" day="2" chosen />
          <CalendarCell dow="TH" day="1" sex />
          <CalendarCell dow="TH" day="1" sex selected />
          <CalendarCell dow="MO" day="28" muted sex />
          <CalendarCell dow="WE" day="15" legend="high-fertility" />
          <CalendarCell dow="TH" day="16" legend="peak-fertility" />
          <CalendarCell dow="FR" day="17" legend="test-required" />
          <CalendarCell dow="SA" day="18" legend="test-missed" />
          <CalendarCell dow="SU" day="19" legend="test-taken" />
        </div>
      </section>

      <section>
        <SectionLabel>.date — default / muted / chosen / selected</SectionLabel>
        <div
          style={{
            display: "flex",
            gap: 24,
            padding: 16,
            background: "#fff",
            alignItems: "center",
          }}
        >
          <CalendarDate day="3" />
          <CalendarDate day="28" muted />
          <CalendarDate day="2" chosen />
          <CalendarDate day="1" selected />
        </div>
      </section>

      <section>
        <SectionLabel>Calendar Legend — markers used with cells</SectionLabel>
        <div
          style={{
            display: "flex",
            gap: 16,
            padding: 16,
            background: "#fff",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            ["sex", "Sex Day (Home)"],
            ["sex-ds", "Sex Day (DS)"],
            ["high-fertility", "High Fertility"],
            ["peak-fertility", "Peak Fertility"],
            ["test-required", "Test Required"],
            ["test-missed", "Test Missed"],
            ["test-taken", "Test Taken"],
          ].map(([kind, label]) => (
            <div
              key={kind}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                minWidth: 72,
              }}
            >
              <CalendarLegend kind={kind} />
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 9,
                  color: "#7F8598",
                  textAlign: "center",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
  decorators: [],
};

/**
 * Figma "Calendar" page — `Calendar` set (VIew=Week 1 month/Week 2
 * months/Full Month). This DS only wires the single-week strip to Home; the
 * multi-week "Full Month" view is composed here from the same
 * `CalendarCell` primitive to visualize the layout Figma documents.
 */
const MONTH_WEEKS = [
  [
    { dow: "MO", day: "28", muted: true },
    { dow: "TU", day: "29", muted: true },
    { dow: "WE", day: "30", muted: true },
    { dow: "TH", day: "1", sex: true },
    { dow: "FR", day: "2", chosen: true },
    { dow: "SA", day: "3" },
    { dow: "SU", day: "4" },
  ],
  [
    { dow: "MO", day: "5" },
    { dow: "TU", day: "6" },
    { dow: "WE", day: "7" },
    { dow: "TH", day: "8" },
    { dow: "FR", day: "9" },
    { dow: "SA", day: "10" },
    { dow: "SU", day: "11" },
  ],
  [
    { dow: "MO", day: "12" },
    { dow: "TU", day: "13" },
    { dow: "WE", day: "14", legend: "high-fertility" },
    { dow: "TH", day: "15", legend: "peak-fertility" },
    { dow: "FR", day: "16" },
    { dow: "SA", day: "17" },
    { dow: "SU", day: "18" },
  ],
];

export const FullMonth = {
  name: "Variants/Full Month",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", background: "#fff", padding: "0 12px" }}>
      {MONTH_WEEKS.map((week, i) => (
        <div key={i} className="calendar__row" data-name="Row">
          {week.map((d) => (
            <CalendarCell key={`${d.dow}-${d.day}`} {...d} />
          ))}
        </div>
      ))}
    </div>
  ),
};

export const HomeWeek = {
  name: "Variants/Home week (HF)",
  args: {
    days: HOME_WEEK,
  },
};

export const HomeWeekYesterday = {
  name: "Variants/Home week (Yesterday selected)",
  args: {
    days: HOME_WEEK_YESTERDAY,
  },
};

export const DayStates = {
  name: "Variants/Day states",
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 8,
        padding: 16,
        background: "#fff",
        flexWrap: "wrap",
      }}
    >
      <CalendarCell dow="SA" day="3" />
      <CalendarCell dow="MO" day="28" muted />
      <CalendarCell dow="FR" day="2" chosen />
      <CalendarCell dow="TH" day="1" sex />
      <CalendarCell dow="TH" day="1" sex selected />
      <CalendarCell dow="MO" day="28" muted sex />
      <CalendarCell dow="WE" day="15" legend="high-fertility" />
      <CalendarCell dow="TH" day="16" legend="peak-fertility" />
      <CalendarCell dow="FR" day="17" legend="test-required" />
      <CalendarCell dow="SA" day="18" legend="test-missed" />
      <CalendarCell dow="SU" day="19" legend="test-taken" />
    </div>
  ),
};

export const Playground = {
  render: (args) => <CalendarCell {...args} />,
  args: {
    dow: "FR",
    day: "2",
    chosen: true,
    selected: false,
    muted: false,
    sex: false,
  },
  argTypes: {
    chosen: { control: "boolean" },
    selected: { control: "boolean" },
    muted: { control: "boolean" },
    sex: { control: "boolean" },
    legend: {
      control: "select",
      options: [null, ...Object.keys(CALENDAR_LEGENDS)],
    },
  },
};
