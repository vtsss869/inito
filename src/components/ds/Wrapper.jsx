import { Text } from "./Text.jsx";

const HAS_START_ICON = new Set(["icon", "icon-text", "icon-text-icon"]);
const HAS_END_ICON = new Set(["text-icon", "icon-text-icon"]);
const HAS_TEXT = new Set(["wrapper", "text-icon", "icon-text", "icon-text-icon"]);

export function WrapperIcon({ src, alt = "" }) {
  if (!src) return null;
  return (
    <span className="wrapper__icon">
      <img src={src} alt={alt} />
    </span>
  );
}

function textVariant(size, style) {
  if (size === "large") return style === "regular" ? "caption-16" : "caption-bold-16";
  return style === "regular" ? "caption-14" : "caption-bold-14";
}

export function Wrapper({
  size = "large",
  style = "bold",
  type = "wrapper",
  icon,
  iconEnd,
  children,
  className = "",
}) {
  const gap = size === "large" && ["text-icon", "icon-text", "icon-text-icon"].includes(type);
  const classes = [
    "wrapper",
    `wrapper--${size}`,
    `wrapper--${type}`,
    style === "regular" ? "wrapper--regular" : "wrapper--bold",
    gap ? "wrapper--gap" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const startIcon = HAS_START_ICON.has(type) ? <WrapperIcon src={icon} /> : null;
  const endIcon = HAS_END_ICON.has(type) ? <WrapperIcon src={iconEnd || icon} /> : null;

  let text = null;
  if (HAS_TEXT.has(type) && children != null && children !== false) {
    const solo = type === "wrapper";
    const textClass = [
      "wrapper__text",
      `wrapper__text--${size}`,
      solo ? "wrapper__text--solo" : "",
    ]
      .filter(Boolean)
      .join(" ");
    text = (
      <span className={textClass}>
        {typeof children === "string" || typeof children === "number" ? (
          <Text as="span" variant={textVariant(size, style)} color="current">
            {children}
          </Text>
        ) : (
          children
        )}
      </span>
    );
  }

  return (
    <span className={classes}>
      {startIcon}
      {text}
      {endIcon}
    </span>
  );
}
