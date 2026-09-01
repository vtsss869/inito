import { Text } from "./Text.jsx";

/**
 * Figma DS: "Segment Control" page — " Segment Control" component
 * (327×48, radius 28, Background Grey track with a white pill behind the
 * selected segment).
 *
 * The page's Android-style Segment-start / Segment-middle / Segment-end +
 * Segmented button_Android component set is a separate platform variant and
 * is intentionally not covered here (this DS otherwise documents iOS
 * primitives; see Toggle's `Switch_Android` / Tabbar's `*_Android` sets,
 * also left undocumented in Storybook).
 * Storybook / DS catalog — not wired to Home.
 */
export function SegmentControl({ options = [], value, onChange, className = "" }) {
  return (
    <div className={`ds-segment-control ${className}`.trim()} data-name="Segment Control">
      {options.map((opt) => {
        const selected = opt.id === value;
        return (
          <button
            key={opt.id}
            type="button"
            className={
              selected
                ? "ds-segment-control__btn ds-segment-control__btn--selected"
                : "ds-segment-control__btn"
            }
            aria-pressed={selected}
            onClick={() => onChange && onChange(opt.id)}
          >
            <Text as="span" variant="caption-bold-14" color={selected ? "black" : "grey"}>
              {opt.label}
            </Text>
          </button>
        );
      })}
    </div>
  );
}
