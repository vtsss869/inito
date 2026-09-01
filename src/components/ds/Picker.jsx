import { Text } from "./Text.jsx";

/**
 * Figma DS: "Picker" page — iOS Time & Date Picker / iOS Time Picker /
 * iOS Timer Picker.
 * Simplified static wheel: a highlighted center row with faded rows above
 * and below per column. Not a functional scroll wheel — Storybook/QA
 * reference only, matching the read-only master components in Figma.
 * Storybook / DS catalog — not wired to Home.
 */
export function PickerColumn({ items, active = Math.floor(items.length / 2), width = 64 }) {
  return (
    <div className="ds-picker__column" style={{ width }}>
      {items.map((item, i) => {
        const dist = Math.abs(i - active);
        return (
          <div
            key={i}
            className={dist === 0 ? "ds-picker__row ds-picker__row--active" : "ds-picker__row"}
            style={{ opacity: Math.max(0.18, 1 - dist * 0.32) }}
          >
            <Text
              as="span"
              variant={dist === 0 ? "header-4" : "caption-16"}
              color={dist === 0 ? "black" : "grey"}
            >
              {item}
            </Text>
          </div>
        );
      })}
    </div>
  );
}

export function Picker({ columns, className = "" }) {
  return (
    <div className={`ds-picker ${className}`.trim()} data-name="iOS Picker">
      <span className="ds-picker__selection" aria-hidden="true" />
      <div className="ds-picker__columns">
        {columns.map((col, i) => (
          <PickerColumn key={i} items={col.items} active={col.active} width={col.width} />
        ))}
      </div>
    </div>
  );
}
