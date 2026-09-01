/**
 * Figma DS: "Checkboxes" page — Checkbox_Radio set
 * (Type=Checkbox/Radio, State=Default/Checked, Size=Default/Small/Light)
 * Figma only pairs Checkbox with Default/Small, and Radio with Light — a
 * radio is always rendered at the 20×20 "Light" size.
 * Storybook / DS catalog — not wired to Home.
 */
export function Checkbox({
  type = "checkbox",
  checked = false,
  size = "default",
  disabled = false,
  onChange,
  "aria-label": ariaLabel = "Checkbox",
  className = "",
}) {
  if (type === "radio") {
    return (
      <button
        type="button"
        role="radio"
        aria-checked={checked}
        aria-label={ariaLabel}
        disabled={disabled}
        className={[
          "ds-radio",
          checked ? "ds-radio--checked" : "",
          disabled ? "ds-radio--disabled" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => {
          if (!disabled && onChange) onChange(!checked);
        }}
        data-name="Checkbox_Radio"
      />
    );
  }

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      className={[
        "ds-checkbox",
        `ds-checkbox--${size}`,
        checked ? "ds-checkbox--checked" : "",
        disabled ? "ds-checkbox--disabled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={() => {
        if (!disabled && onChange) onChange(!checked);
      }}
      data-name="Checkbox_Radio"
    >
      {checked ? (
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
          <path
            d="M1 5.5 4.2 8.5 11 1.5"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </button>
  );
}
