import {
  Calendar,
  CalendarCell,
  CalendarDate,
  CalendarLegend,
  CALENDAR_LEGENDS,
} from "./Calendar.jsx";
import { Text } from "./Text.jsx";

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

/**
 * Figma "INITO | IOS – Home" (app-screens file), canvas "Calendar & main
 * card & notification states" → section "📱 In Prod" → "Legend" (node
 * 246:61671), the calendar-day-state grid (5 labeled columns × marker
 * rows). Text below is transcribed verbatim from the Legend's own column
 * headers and the one labeled row ("Sex day (could be any fertility)") —
 * the marker rows themselves carry no text label in Figma, only color, so
 * their description here is inferred from matching the same fertility
 * colors named in the DayStatusCard Legend section rather than invented
 * wording.
 *
 * Column → prop mapping confirmed against Calendar.jsx's own docstrings:
 * - "Regular day"          → no chosen/selected/muted (default `.date`)
 * - "Today in past"        → `chosen` with `stroke={false}` ("chosen-fill":
 *                             HF-colored fill, no outline — today's style
 *                             kept for a day that has since passed)
 * - "Today"                → `chosen` with `stroke` (default true) — HF
 *                             fill + green number + outline, current day
 * - "Chosen day (not today)" → `selected` — grey fill + border, a day the
 *                             user tapped to view that isn't today
 */
function LegendCellColumn({ label, condition, cellProps }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: 132 }}>
      <Text variant="caption-bold-16" style={{ textAlign: "center" }}>{label}</Text>
      <Text variant="mini" color="grey" style={{ textAlign: "center", minHeight: 44 }}>{condition}</Text>
      <div style={{ display: "flex", gap: 4 }}>
        <CalendarCell dow="WE" day="29" {...cellProps} />
        <CalendarCell dow="TH" day="20" legend="high-fertility" {...cellProps} />
        <CalendarCell dow="FR" day="13" legend="peak-fertility" {...cellProps} />
      </div>
    </div>
  );
}

export const LegendDayStates = {
  name: "Legend/Day States (Figma)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 16, background: "#fff", width: 620, maxWidth: "100%" }}>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <LegendCellColumn
          label="Regular day"
          condition="Default cell — no special relationship to the viewed date."
          cellProps={{}}
        />
        <LegendCellColumn
          label="Today in past"
          condition={'The live "today" cell kept its today-style fill, but real-world time has since moved past it (viewing an earlier week).'}
          cellProps={{ chosen: true, stroke: false }}
        />
        <LegendCellColumn
          label="Today"
          condition="The current real-world day — filled + outlined."
          cellProps={{ chosen: true }}
        />
        <LegendCellColumn
          label="Chosen day (not today)"
          condition="A day the user tapped to view/select that isn't today — grey fill + border."
          cellProps={{ selected: true }}
        />
      </div>

      <section>
        <Text variant="caption-bold-16" style={{ display: "block", marginBottom: 4 }}>Other states</Text>
        <Text variant="caption-14" color="grey" style={{ display: "block", marginBottom: 12 }}>
          Two extra badge markers appear in the Legend's "Other states" column, layered on top of a
          date cell rather than replacing it. Neither has a wired prop in `CalendarCell` yet — flagged
          here rather than guessed at.
        </Text>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>
            <Text variant="caption-14"><b>+ Week</b> — a small numbered badge (e.g. "4") stacked on the date, on a period-colored cell. Reads as a pregnancy/cycle week-count overlay; not implemented in code.</Text>
          </li>
          <li>
            <Text variant="caption-14"><b>expected</b> — the date number rendered in the period-red color with an "expected" caption beneath it, for a predicted (not logged) period day. Not implemented in code.</Text>
          </li>
        </ul>
      </section>

      <section>
        <Text variant="caption-bold-16" style={{ display: "block", marginBottom: 4 }}>Sex day (could be any fertility)</Text>
        <Text variant="caption-14" color="grey" style={{ display: "block", marginBottom: 12 }}>
          Figma's own row label — a heart marker can appear under the date regardless of that day's
          fertility rating. Already wired via the <code>sex</code> prop / <code>legend="sex"</code>.
        </Text>
        <div style={{ display: "flex", gap: 4 }}>
          <CalendarCell dow="WE" day="29" sex />
          <CalendarCell dow="TH" day="20" legend="high-fertility" sex />
          <CalendarCell dow="FR" day="2" chosen sex />
        </div>
      </section>

      <section>
        <Text variant="caption-bold-16" style={{ display: "block", marginBottom: 4 }}>Unlabeled marker rows</Text>
        <Text variant="caption-14" color="grey">
          The Legend's remaining rows (period, low-fertility-ish plain digit, high fertility, "LH
          Surged", "PdG risen", plus small triangle icons) carry no text label of their own in
          Figma — only color and, for two rows, a colored pill caption ("LH Surged" / "PdG risen").
          Their colors line up with the same named states documented with full logic text in
          "DS/Cards/Day Status → Legend/Main Card States", so that story is the source for the
          condition text rather than re-describing untitled swatches here.
        </Text>
      </section>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
