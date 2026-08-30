import { useEffect, useRef } from "react";
import { Text } from "./Text.jsx";
import { Button } from "./Button.jsx";

import logMeds from "../../assets/icons/log-meds.svg";
import logPeriods from "../../assets/icons/log-period.svg";
import logSex from "../../assets/icons/log-sex.svg";
import logSymptoms from "../../assets/icons/log-symptoms.svg";
import logMoods from "../../assets/icons/log-moods.svg";
import logActivities from "../../assets/icons/log-activities.svg";
import logTests from "../../assets/icons/log-tests.svg";
import logPreg from "../../assets/icons/log-preg-test.svg";
import logBbt from "../../assets/icons/log-bbt.svg";
import logDiary from "../../assets/icons/log-diary.svg";
import logAppetite from "../../assets/icons/log-appetite.svg";

/**
 * Figma DS: `daily log` component set (`20532:11970`)
 * Structure: Main Button (Light Blue-Grey / Medium / Icon) + Mini label
 * Layout: width 70 · gap 8 · Home instances use pt-4 (DS master often py-12 / h-90)
 * Icon slot: 32×32 Icon replace · Button padding 6 → 44×44 (+ matching 4px fill ring)
 *
 * States:
 * - default — Background Light Blue-Grey `#F7F8FD`
 * - selected — Grey Borders `#EAECED`
 * - filled — category soft fill
 *
 * Categories (DS): Meds, Periods, Sex, Symptom, Moods, Activities, Tests,
 * Preg test, BBT, Diary, Appetite. Home HF labels "Period" / "Symptoms".
 */
export const DAILY_LOG_CATEGORIES = {
  meds: {
    id: "meds",
    label: "Meds",
    icon: logMeds,
    filledBg: "var(--bg-daily-tan)",
  },
  periods: {
    id: "periods",
    label: "Periods",
    icon: logPeriods,
    filledBg: "var(--bg-daily-red-light)",
  },
  sex: {
    id: "sex",
    label: "Sex",
    icon: logSex,
    filledBg: "var(--bg-daily-pink)",
  },
  symptoms: {
    id: "symptoms",
    label: "Symptoms",
    icon: logSymptoms,
    filledBg: "var(--bg-daily-red-light)",
  },
  moods: {
    id: "moods",
    label: "Moods",
    icon: logMoods,
    filledBg: "var(--bg-daily-violet)",
  },
  activities: {
    id: "activities",
    label: "Activities",
    icon: logActivities,
    filledBg: "var(--bg-daily-blue)",
  },
  tests: {
    id: "tests",
    label: "Tests",
    icon: logTests,
    filledBg: "var(--bg-daily-blue-dark)",
  },
  "preg-test": {
    id: "preg-test",
    label: "Preg test",
    icon: logPreg,
    filledBg: "var(--bg-daily-pink)",
  },
  bbt: {
    id: "bbt",
    label: "BBT",
    icon: logBbt,
    filledBg: "var(--bg-daily-bbt)",
  },
  diary: {
    id: "diary",
    label: "Diary",
    icon: logDiary,
    filledBg: "var(--bg-daily-blue)",
  },
  appetite: {
    id: "appetite",
    label: "Appetite",
    icon: logAppetite,
    filledBg: "var(--bg-daily-tan)",
  },
};

export const DAILY_LOG_CATEGORY_IDS = Object.keys(DAILY_LOG_CATEGORIES);

/** Home HF `412:238335` row order (label overrides Periods → Period) */
export const HOME_DAILY_LOGS = [
  { category: "preg-test" },
  { category: "symptoms" },
  { category: "periods", label: "Period" },
  { category: "bbt" },
  { category: "meds" },
  { category: "moods" },
  { category: "tests" },
  { category: "activities" },
  { category: "sex" },
  { category: "diary" },
];

export function DailyLog({
  category = "meds",
  state = "default",
  label,
  className = "",
}) {
  const meta = DAILY_LOG_CATEGORIES[category] || DAILY_LOG_CATEGORIES.meds;
  const text = label ?? meta.label;
  const toneClass =
    state === "filled"
      ? "daily-log--filled"
      : state === "selected"
        ? "daily-log--selected"
        : "daily-log--default";

  const style =
    state === "filled"
      ? { "--daily-log-fill": meta.filledBg }
      : undefined;

  return (
    <div
      className={`daily-log ${toneClass} ${className}`.trim()}
      data-name="daily log"
      data-category={meta.id}
      data-state={state}
      style={style}
    >
      <Button
        className="daily-log__btn"
        variant="light-blue-grey"
        size="medium"
        icon={meta.icon}
        iconOnly
        aria-label={text}
      />
      <Text as="span" variant="mini" color="grey" className="daily-log__label">
        {text}
      </Text>
    </div>
  );
}

/**
 * Horizontal scroller of `daily log` items — matches `.wrapper component` content
 * inside Home Notification Card (gap 4, px 8, pb 8).
 *
 * Uses native overflow-x scrolling (touch / trackpad). Mouse drag in the desktop
 * phone preview updates the same scrollLeft — not a transform animation.
 */
export function DailyLogRow({ items = HOME_DAILY_LOGS, className = "" }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    let dragging = false;
    let moved = false;
    let pointerId = null;
    let startX = 0;
    let startScroll = 0;

    const onPointerDown = (e) => {
      // Touch / pen use native overflow scrolling; only bridge mouse drag.
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      dragging = true;
      moved = false;
      pointerId = e.pointerId;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (!dragging || e.pointerId !== pointerId) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) < 4) return;
      moved = true;
      el.scrollLeft = startScroll - dx;
    };

    const suppressClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      el.removeEventListener("click", suppressClick, true);
    };

    const endDrag = (e) => {
      if (!dragging || (e && e.pointerId !== pointerId)) return;
      dragging = false;
      if (moved) {
        el.addEventListener("click", suppressClick, true);
      }
      if (pointerId != null) {
        try {
          el.releasePointerCapture(pointerId);
        } catch {
          /* already released */
        }
      }
      pointerId = null;
      moved = false;
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("click", suppressClick, true);
    };
  }, []);

  return (
    <div
      ref={rowRef}
      className={`daily-log-row ${className}`.trim()}
      data-name=".wrapper component"
    >
      {items.map((item) => (
        <DailyLog
          key={item.category + (item.label || "")}
          category={item.category}
          state={item.state || "default"}
          label={item.label}
        />
      ))}
    </div>
  );
}

/** @deprecated alias */
export const DailyLogItem = DailyLog;
