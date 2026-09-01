import { Text } from "./Text.jsx";

/**
 * Figma DS: "Inputs" page — Counter set
 * (State=Default/Disabled/Only Plus/Only Minus)
 * Stepper: minus button · count · plus button. "Only Plus"/"Only Minus" hide
 * the opposite control (e.g. can't step below the minimum, or a re-add-only
 * state after removing an item).
 * Storybook / DS catalog — not wired to Home.
 */
export function Counter({
  value = 1,
  state = "default",
  onChange,
  min = 0,
  max = 99,
  className = "",
}) {
  const disabled = state === "disabled";
  const showMinus = state !== "only-plus";
  const showPlus = state !== "only-minus";

  function step(delta) {
    if (disabled || !onChange) return;
    onChange(Math.min(max, Math.max(min, value + delta)));
  }

  return (
    <div
      className={["ds-counter", `ds-counter--${state}`, className].filter(Boolean).join(" ")}
      data-name="Counter"
    >
      {showMinus ? (
        <button
          type="button"
          className="ds-counter__btn"
          onClick={() => step(-1)}
          disabled={disabled}
          aria-label="Decrease"
        >
          −
        </button>
      ) : null}
      <Text as="span" variant="caption-bold-16" className="ds-counter__value">
        {value}
      </Text>
      {showPlus ? (
        <button
          type="button"
          className="ds-counter__btn"
          onClick={() => step(1)}
          disabled={disabled}
          aria-label="Increase"
        >
          +
        </button>
      ) : null}
    </div>
  );
}
