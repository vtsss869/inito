import { Text } from "./Text.jsx";
import { Button } from "./Button.jsx";
import { WrapperIcon } from "./Wrapper.jsx";
import navBack from "../../assets/icons/nav-back.svg";
import navDevice from "../../assets/icons/nav-device.svg";
import navDrop from "../../assets/icons/nav-drop.svg";
import navCalendar from "../../assets/icons/nav-calendar.svg";
import stripsIcon from "../../assets/icons/system/sys-interface-interface-strips2.svg";

export const NAV_ICONS = {
  back: navBack,
  device: navDevice,
  drop: navDrop,
  calendar: navCalendar,
  strips: stripsIcon,
};

const TITLE_VARIANT = {
  h2: "header-2",
  h4: "header-4",
};

/**
 * Remaining-strips control from Figma Header page "+ Strips tracker".
 * Same Main Button Secondary / Small / Icon+Icon construction as the
 * DS button, with a numeric count disc instead of a second glyph.
 */
export function StripsTrackerButton({
  count = 21,
  tone = "ok",
  className = "",
  ...props
}) {
  return (
    <button
      type="button"
      className={`btn btn--small btn--secondary btn--type-icon-icon btn--icon navbar__strips navbar__strips--${tone} ${className}`.trim()}
      aria-label={`${count} strips remaining`}
      {...props}
    >
      <span className="wrapper wrapper--large wrapper--icon-icon">
        <WrapperIcon src={stripsIcon} />
        <span className="navbar__strips-count">
          <span className="navbar__strips-count-disc">
            <Text as="span" variant="caption-bold-14" color="white">
              {count}
            </Text>
          </span>
        </span>
      </span>
    </button>
  );
}

/**
 * Figma DS: `Navbar` (Left icon On/Off, Right 0–2 icons, Align title).
 * Home (node 246:59238) is the layout source of truth: pl 24 / pr 12 /
 * pt 8 / pb 16, H4 title, Transparent Medium icon buttons, optional
 * Secondary Small "Today" chip.
 * Right icons are 32×32 Wrapper `.icon` slot assets (no per-icon CSS).
 */
export function Navbar({
  title = "H2",
  titleSize = "h2",
  back = false,
  todayChip = false,
  onTodayClick,
  rightIcons = [],
  trailing = null,
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
            <Button variant="secondary" size="small" aria-label="Today" onClick={onTodayClick}>
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
          {trailing}
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
