/**
 * Figma DS: Toogle (52×32) — Inputs/Toggle page
 * States: Yes (on) | No (off)
 * Storybook / DS catalog — not wired to Home.
 */
export function Toggle({
  checked = false,
  disabled = false,
  onChange,
  "aria-label": ariaLabel = "Toggle",
  className = "",
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      className={[
        "ds-toggle",
        checked ? "ds-toggle--on" : "ds-toggle--off",
        disabled ? "ds-toggle--disabled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={() => {
        if (!disabled && onChange) onChange(!checked);
      }}
      data-name="Toogle"
    >
      <span className="ds-toggle__knob" />
    </button>
  );
}
