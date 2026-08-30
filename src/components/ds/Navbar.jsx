import { Text } from "./Text.jsx";
import { Button } from "./Button.jsx";
import navBack from "../../assets/icons/nav-back.svg";
import navDevice from "../../assets/icons/nav-device.svg";
import navDrop from "../../assets/icons/nav-drop.svg";

export const NAV_ICONS = {
  back: navBack,
  device: navDevice,
  drop: navDrop,
};

const TITLE_VARIANT = {
  h2: "header-2",
  h4: "header-4",
};

/**
 * Figma DS: `Navbar` (Left icon On/Off, Right 0–2 icons, Align title).
 * Home: Header 4 + two Transparent / Medium / Icon Main Buttons.
 * Right icons are 32×32 Wrapper `.icon` slot assets (no per-icon CSS).
 */
export function Navbar({
  title = "H2",
  titleSize = "h2",
  back = false,
  todayChip = false,
  rightIcons = [],
  subtitle,
  align = "left",
}) {
  const titleVariant = TITLE_VARIANT[titleSize] || TITLE_VARIANT.h4;

  return (
    <header className={`navbar${align === "center" ? " navbar--center" : ""}`}>
      <div className="navbar__bar">
        <div className="navbar__left">
          {back ? (
            <Button
              variant="transparent"
              size="medium"
              icon={typeof back === "string" ? back : navBack}
              iconOnly
              aria-label="Back"
            />
          ) : null}
          <div className={`navbar__title navbar__title--${titleSize}`}>
            <Text as="h1" variant={titleVariant}>
              {title}
            </Text>
          </div>
        </div>
        <div className="navbar__right">
          {todayChip ? (
            <Button variant="secondary" size="small" aria-label="Today">
              Today
            </Button>
          ) : null}
          {rightIcons.map((icon) => (
            <Button
              key={icon.label}
              variant="transparent"
              size="medium"
              icon={icon.src}
              iconOnly
              aria-label={icon.label}
            />
          ))}
        </div>
      </div>
      {subtitle ? (
        <div className="navbar__subtitle">
          <Text as="p" variant="header-4">
            {subtitle}
          </Text>
        </div>
      ) : null}
    </header>
  );
}
