import { Text } from "./Text.jsx";

const HAS_START_ICON = new Set(["icon", "icon-icon", "icon-text", "icon-text-icon"]);
const HAS_END_ICON = new Set(["text-icon", "icon-icon", "icon-text-icon"]);
const HAS_TEXT = new Set(["wrapper", "text-icon", "icon-text", "icon-text-icon"]);

export function WrapperIcon({ src, alt = "", mono = true }) {
  if (!src) return null;
  // Figma "Buttons" page, Main Button set: the icon stroke always matches the
  // button's text color per Style (white on Primary/Promo, dark on Secondary/
  // Transparent) — mask-image + currentColor recolors the flat line-art SVG
  // dynamically instead of baking in whatever color the source file happens
  // to use, so it stays correct across every variant/state automatically.
  //
  // `mono` opts a Button/Link/Navbar icon slot OUT of that recolor. Some
  // callers (Daily Log's category glyphs — log-meds.svg etc.) are genuine
  // multi-color illustrations, not flat line art; masking them to
  // currentColor would flatten their own brand colors to a solid block.
  // Those pass `mono={false}` and get a plain <img> instead.
  if (!mono) {
    return <img className="wrapper__icon-img" src={src} alt={alt} width={32} height={32} />;
  }
  return (
    <span
      className="wrapper__icon"
      style={{ WebkitMaskImage: `url(${src})`, maskImage: `url(${src})` }}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
    />
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
  iconMono = true,
  children,
  className = "",
}) {
  const gap =
    size === "large" && ["text-icon", "icon-text", "icon-text-icon", "icon-icon"].includes(type);
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

  const startIcon = HAS_START_ICON.has(type) ? <WrapperIcon src={icon} mono={iconMono} /> : null;
  const endIcon = HAS_END_ICON.has(type) ? (
    <WrapperIcon src={iconEnd || icon} mono={iconMono} />
  ) : null;

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
