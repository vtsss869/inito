import { Text } from "./Text.jsx";
import legendSex from "../../assets/icons/legend-sex.svg";
import legendSexDs from "../../assets/icons/legend-sex-ds.svg";
import legendHighFertility from "../../assets/icons/legend-high-fertility.svg";
import legendPeakFertility from "../../assets/icons/legend-peak-fertility.svg";
import legendTestRequired from "../../assets/icons/legend-test-required.svg";
import legendTestMissed from "../../assets/icons/legend-test-missed.svg";
import legendTestTaken from "../../assets/icons/legend-test-taken.svg";

/**
 * Figma DS: Calendar Legend markers (12×12)
 * Home Sex Day uses Flow & Discharge coral (#F46E5C);
 * DS master Sex Day uses Sex & Insemination purple (#D96BCF).
 */
export const CALENDAR_LEGENDS = {
  sex: legendSex,
  "sex-ds": legendSexDs,
  "high-fertility": legendHighFertility,
  "peak-fertility": legendPeakFertility,
  "test-required": legendTestRequired,
  "test-missed": legendTestMissed,
  "test-taken": legendTestTaken,
};

/**
 * Figma DS: `.date` — 36×36, radius 25
 * States used on Home: default, muted (previous month), chosen (Calendar days states)
 */
export function CalendarDate({ day, muted = false, chosen = false }) {
  const dateClass = [
    "calendar-date",
    chosen ? "calendar-date--chosen" : "",
    muted && !chosen ? "calendar-date--muted" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={dateClass} data-name=".date">
      <div className="calendar-date__caption">
        <Text
          as="span"
          variant={chosen ? "caption-bold-16" : "caption-16"}
          color={chosen ? "success" : muted ? "grey" : "black"}
          className="calendar-date__num"
        >
          {day}
        </Text>
      </div>
    </div>
  );
}

/**
 * Figma DS: Calendar Legend slot under `.date`
 */
export function CalendarLegend({ kind }) {
  if (!kind) {
    return <div className="calendar-legend" data-name="Legend" aria-hidden="true" />;
  }

  const src = CALENDAR_LEGENDS[kind];
  if (!src) {
    return <div className="calendar-legend" data-name="Legend" aria-hidden="true" />;
  }

  return (
    <div className="calendar-legend" data-name="Legend">
      <div className="calendar-legend__slot" data-name="Legend 1">
        <img src={src} alt="" width={12} height={12} />
      </div>
    </div>
  );
}

function resolveLegend({ sex, legend }) {
  if (legend) return legend;
  if (sex) return "sex";
  return null;
}

/**
 * Figma DS: `.calendar cell` (52×65)
 * Chosen days are wrapped as Calendar days states → same cell with chosen `.date`.
 */
export function CalendarCell({
  dow,
  day,
  chosen = false,
  muted = false,
  sex = false,
  legend,
}) {
  const legendKind = resolveLegend({ sex, legend });
  const cellClass = [
    "calendar-cell",
    chosen ? "calendar-cell--chosen" : "",
    muted && !chosen ? "calendar-cell--muted" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cellClass}
      data-name={chosen ? "Calendar days states" : ".calendar cell"}
    >
      <div className="calendar-cell__dow-wrap" data-name="07 Caption 17">
        <Text as="span" variant="mini-semibold" color="grey" className="calendar-cell__dow">
          {dow}
        </Text>
      </div>
      <div className="calendar-cell__date-stack" data-name="Date">
        <CalendarDate day={day} muted={muted} chosen={chosen} />
        <CalendarLegend kind={legendKind} />
      </div>
    </div>
  );
}

/**
 * Figma DS / Home: `Calendar` week strip
 * Outer: pb-8 px-12 · Row: px-12 · cells 52 with mr -3.667 (except last)
 */
export function Calendar({ days }) {
  return (
    <div className="calendar" data-name="Calendar">
      <div className="calendar__row" data-name="Row">
        {days.map((d) => (
          <CalendarCell key={`${d.dow}-${d.day}`} {...d} />
        ))}
      </div>
    </div>
  );
}
