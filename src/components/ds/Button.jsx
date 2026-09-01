import { Wrapper } from "./Wrapper.jsx";

function contentType({ iconOnly, icon, iconEnd, children }) {
  const hasText = children != null && children !== false && children !== "";
  // Figma "Buttons" page, Main Button set — Type=Icon+Icon (single documented
  // combo: Style=Secondary, Size=Small): two icon-only Wrapper slots, no text.
  if (!hasText && icon && iconEnd && !iconOnly) return "icon-icon";
  if (iconOnly || (icon && !hasText)) return "icon";
  if (icon && iconEnd && hasText) return "icon-text-icon";
  if (icon && hasText) return "icon-text";
  if (iconEnd && hasText) return "text-icon";
  return "wrapper";
}

const ICON_ONLY_TYPES = new Set(["icon", "icon-icon"]);

/**
 * Figma "Buttons" page, Main Button set — State=Default/Pressed/Disabled.
 * `state="pressed"` mirrors the `:active` look for static Storybook/QA
 * previews; real pointer interaction still gets it for free via `:active`.
 * `state="disabled"` (or the native `disabled` prop) applies the Figma
 * Disabled look (`--bg-grey` / `--text-grey`) via `.btn:disabled`.
 */
export function Button({
  size = "medium",
  variant = "primary",
  icon,
  iconEnd,
  iconOnly = false,
  iconMono = true,
  state = "default",
  disabled,
  children,
  className = "",
  type = "button",
  ...props
}) {
  const wrapperType = contentType({ iconOnly, icon, iconEnd, children });
  const wrapperSize =
    size === "large" || ICON_ONLY_TYPES.has(wrapperType) ? "large" : "medium";
  const isDisabled = disabled ?? state === "disabled";
  const classes = [
    "btn",
    `btn--${size}`,
    `btn--${variant}`,
    `btn--type-${wrapperType}`,
    ICON_ONLY_TYPES.has(wrapperType) ? "btn--icon" : "",
    state === "pressed" ? "btn--pressed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} disabled={isDisabled} {...props}>
      <Wrapper
        size={wrapperSize}
        type={wrapperType}
        style="bold"
        icon={icon}
        iconEnd={iconEnd}
        iconMono={iconMono}
      >
        {ICON_ONLY_TYPES.has(wrapperType) ? null : children}
      </Wrapper>
    </button>
  );
}
