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
          <CalendarCell dow="MO" day="28" muted sex />
          <CalendarCell dow="WE" day="15" legend="high-fertility" />
          <CalendarCell dow="TH" day="16" legend="peak-fertility" />
          <CalendarCell dow="FR" day="17" legend="test-required" />
          <CalendarCell dow="SA" day="18" legend="test-missed" />
          <CalendarCell dow="SU" day="19" legend="test-taken" />
        </div>
      </section>

      <section>
        <SectionLabel>.date — default / muted / chosen</SectionLabel>
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

export const HomeWeek = {
  name: "Variants/Home week (HF)",
  args: {
    days: HOME_WEEK,
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
    muted: false,
    sex: false,
  },
  argTypes: {
    chosen: { control: "boolean" },
    muted: { control: "boolean" },
    sex: { control: "boolean" },
    legend: {
      control: "select",
      options: [null, ...Object.keys(CALENDAR_LEGENDS)],
    },
  },
};
