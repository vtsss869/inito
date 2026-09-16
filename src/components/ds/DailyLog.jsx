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
    filledBg: "var(--bg-daily-blue)",
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
    filledBg: "var(--bg-daily-blue)",
  },
  moods: {
    id: "moods",
    label: "Moods",
    icon: logMoods,
    filledBg: "var(--bg-tan)",
  },
  activities: {
    id: "activities",
    label: "Activities",
    icon: logActivities,
    filledBg: "var(--bg-green-transparent)",
  },
  tests: {
    id: "tests",
    label: "Tests",
    icon: logTests,
    filledBg: "var(--bg-daily-red-light)",
  },
  "preg-test": {
    id: "preg-test",
    label: "Preg test",
    icon: logPreg,
    filledBg: "var(--bg-daily-violet)",
  },
  bbt: {
    id: "bbt",
    label: "BBT",
    icon: logBbt,
    filledBg: "var(--bg-blue-bbt)",
  },
  diary: {
    id: "diary",
    label: "Diary",
    icon: logDiary,
    filledBg: "var(--bg-daily-violet)",
  },
  appetite: {
    id: "appetite",
    label: "Appetite",
    icon: logAppetite,
    filledBg: "var(--bg-tan)",
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

/** Home circular log → Daily Logs section id (for deep-link scroll). */
export const HOME_CATEGORY_TO_SECTION = {
  "preg-test": "pregnancy-test",
  symptoms: "symptoms",
  periods: "period",
  bbt: "bbt",
  meds: "medication",
  moods: "mood",
  tests: "blood-tests",
  activities: "activity",
  sex: "sex",
  diary: "journal",
};

function hasSelection(selections, sectionId) {
  return (selections?.[sectionId] || []).length > 0;
}

/** Whether a Home daily-log category should show `filled` from saved Daily Logs. */
export function isHomeCategoryFilled(category, saved) {
  if (!saved) return false;
  const selections = saved.selections || {};
  switch (category) {
    case "preg-test":
      return hasSelection(selections, "pregnancy-test");
    case "symptoms":
      return (
        hasSelection(selections, "symptoms") ||
        hasSelection(selections, "abdominal") ||
        hasSelection(selections, "discharge")
      );
    case "periods":
      return hasSelection(selections, "period");
    case "bbt":
      return Boolean(saved.bbtValue);
    case "meds":
      return Boolean(saved.medicationLogged) || hasSelection(selections, "medication");
    case "moods":
      return hasSelection(selections, "mood");
    case "tests":
      return (
        hasSelection(selections, "blood-tests") ||
        Boolean(saved.follicleSizes?.length) ||
        Boolean(saved.endometrialThickness) ||
        Object.keys(saved.bloodValues || {}).length > 0
      );
    case "activities":
      return hasSelection(selections, "activity");
    case "sex":
      return hasSelection(selections, "sex") || hasSelection(selections, "sex-drive");
    case "diary":
      return Boolean(String(saved.journal || "").trim());
    default:
      return false;
  }
}

/** Figma Home `204:380112` — filled icons after Save; caption `N/15 logged`. */
export function homeDailyLogItemsFromSaved(saved) {
  return HOME_DAILY_LOGS.map((item) => ({
    ...item,
    state: isHomeCategoryFilled(item.category, saved) ? "filled" : "default",
  }));
}

export function homeDailyLogsCaption(saved) {
  const filled = homeDailyLogItemsFromSaved(saved).filter((i) => i.state === "filled").length;
  return `${filled}/15 logged`;
}

export function DailyLog({
  category = "meds",
  state = "default",
  label,
  onClick,
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

  const interactive = typeof onClick === "function";

  return (
    <div
      className={`daily-log ${toneClass} ${className}`.trim()}
      data-name="daily log"
      data-category={meta.id}
      data-state={state}
      style={style}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={interactive ? onClick : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick(e);
              }
            }
          : undefined
      }
    >
      <Button
        className="daily-log__btn"
        variant="light-blue-grey"
        size="medium"
        icon={meta.icon}
        iconOnly
        // Figma DS: category icons (log-meds.svg etc.) are two-color
        // illustrations (dark + accent), not flat line art — they must keep
        // their own baked-in colors rather than being masked to
        // currentColor like Button's usual chevron/device/drop glyphs.
        iconMono={false}
        aria-label={text}
        tabIndex={interactive ? -1 : undefined}
        // Outer `.daily-log` owns the click (deep-link). Keep the visual
        // Button but don't nest a second activation target.
        onClick={
          interactive
            ? (e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick(e);
              }
            : undefined
        }
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
export function DailyLogRow({ items = HOME_DAILY_LOGS, onItemClick, className = "" }) {
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
      // Never capture when tapping a log item — that must open Daily Logs.
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      if (e.target.closest(".daily-log")) return;
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
          onClick={
            onItemClick
              ? () => onItemClick(item.category, HOME_CATEGORY_TO_SECTION[item.category])
              : undefined
          }
        />
      ))}
    </div>
  );
}

/** @deprecated alias */
export const DailyLogItem = DailyLog;
