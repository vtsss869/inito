import { Text } from "../Text.jsx";

/**
 * Figma DS: Chips — purpose variants (Info / Achievement / Alert / Promo / Disabled)
 * Distinct from Day Status gradient chip used on Home.
 * Storybook catalog — not wired to Home.
 */
export function DsChip({
  purpose = "info",
  children = "Chip",
  icon,
  iconEnd,
  className = "",
}) {
  return (
    <span className={`ds-chip ds-chip--${purpose} ${className}`.trim()} data-name="Chips">
      {icon ? (
        <span className="ds-chip__icon">
          <img src={icon} alt="" width={32} height={32} />
        </span>
      ) : null}
      <Text
        as="span"
        variant="caption-bold-14"
        color={
          purpose === "promo"
            ? "main"
            : purpose === "alert"
              ? "error"
              : purpose === "disabled"
                ? "grey"
                : purpose === "achievement"
                  ? "success"
                  : "grey"
        }
      >
        {children}
      </Text>
      {iconEnd ? (
        <span className="ds-chip__icon">
          <img src={iconEnd} alt="" width={32} height={32} />
        </span>
      ) : null}
    </span>
  );
}
