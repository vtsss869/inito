import { Wrapper } from "./Wrapper.jsx";

/**
 * Figma DS: "Buttons" page — Link frame → .Link set
 * (Size Large/Medium × Type Text/Text Icon/Icon Text)
 * A bare-text call-to-action: Main color text, no fill/border, built on the
 * same Wrapper/Meta-Frame primitive as Main Button.
 * Storybook / DS catalog — not wired to Home.
 */
export function Link({
  as: Component = "button",
  size = "large",
  type = "text",
  icon,
  iconEnd,
  children,
  className = "",
  ...props
}) {
  const wrapperType = type === "text" ? "wrapper" : type;
  return (
    <Component
      type={Component === "button" ? "button" : undefined}
      className={["link", `link--${size}`, className].filter(Boolean).join(" ")}
      data-name=".Link"
      {...props}
    >
      <Wrapper size={size} style="bold" type={wrapperType} icon={icon} iconEnd={iconEnd}>
        {children}
      </Wrapper>
    </Component>
  );
}
