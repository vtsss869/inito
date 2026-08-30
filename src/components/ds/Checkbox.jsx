/**
 * Figma DS: Checkbox (32 default / 20 small)
 * States: Default | Checked
 * Storybook / DS catalog — not wired to Home.
 */
export function Checkbox({
  checked = false,
  size = "default",
  disabled = false,
  onChange,
  "aria-label": ariaLabel = "Checkbox",
  className = "",
}) {
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
      data-name="Checkbox"
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
