/**
 * `variant` normally maps to the app-wide Montserrat scale (`.t-${variant}`,
 * see src/styles/ds.css). Community screens use a second, separate SF Pro
 * scale (`.tc-*` classes, TEXT_STYLES_COMMUNITY in foundations/tokens.js) —
 * passing a variant already prefixed `tc-` (e.g. "tc-body-14") is used
 * as-is instead of being re-prefixed, so callers still go through Text
 * (never a raw <span>) for Community copy.
 */
export function Text({
  as: Tag = "p",
  variant = "body",
  color = "black",
  className = "",
  children,
  ...props
}) {
  const colorClass = color === "current" ? "color-current" : `color-${color}`;
  const variantClass = variant.startsWith("tc-") ? variant : `t-${variant}`;
  return (
    <Tag className={`${variantClass} ${colorClass} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
