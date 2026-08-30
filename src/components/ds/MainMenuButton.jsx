import { Text } from "./Text.jsx";
import { Button } from "./Button.jsx";
import iconTest from "../../assets/tabbar/icon-test.svg";

/**
 * Figma DS: `.main menu button`
 * Button Test (60×64) = Main Button Large Icon + Menu Caption label
 * (blue under-button shadow intentionally omitted)
 */
export function MainMenuButton({
  label = "Test",
  variant = "primary",
  icon = iconTest,
}) {
  const promo = variant === "promo";

  return (
    <div className="main-menu-button">
      <div className="main-menu-button__test">
        <Button
          className="main-menu-button__btn"
          size="large"
          variant={variant}
          icon={icon}
          iconOnly
          aria-label={label}
        />
      </div>
      <Text
        as="span"
        variant="menu"
        color={promo ? "current" : "black"}
        className={`main-menu-button__label${promo ? " main-menu-button__label--promo" : ""}`}
      >
        {label}
      </Text>
    </div>
  );
}
