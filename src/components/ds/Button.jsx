import { Wrapper } from "./Wrapper.jsx";

function contentType({ iconOnly, icon, iconEnd, children }) {
  const hasText = children != null && children !== false && children !== "";
  if (iconOnly || (icon && !hasText)) return "icon";
  if (icon && iconEnd && hasText) return "icon-text-icon";
  if (icon && hasText) return "icon-text";
  if (iconEnd && hasText) return "text-icon";
  return "wrapper";
}

export function Button({
  size = "medium",
  variant = "primary",
  icon,
  iconEnd,
  iconOnly = false,
  children,
  className = "",
  type = "button",
  ...props
}) {
  const wrapperType = contentType({ iconOnly, icon, iconEnd, children });
  const wrapperSize = size === "large" || wrapperType === "icon" ? "large" : "medium";
  const classes = [
    "btn",
    `btn--${size}`,
    `btn--${variant}`,
    wrapperType === "icon" ? "btn--icon" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...props}>
      <Wrapper
        size={wrapperSize}
        type={wrapperType}
        style="bold"
        icon={icon}
        iconEnd={iconEnd}
      >
        {wrapperType === "icon" ? null : children}
      </Wrapper>
    </button>
  );
}
