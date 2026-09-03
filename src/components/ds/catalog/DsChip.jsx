import { Text } from "../Text.jsx";

/**
 * Figma DS: Chips — purpose variants (Info / Achievement / Alert / Promo / Disabled)
 * Distinct from Day Status gradient chip used on Home.
 *
 * `purpose="tag"` is the Community content-warning pill from the
 * "Community (App)" file (fileKey LLjQAqluK9e7WtuV3HNUK7), "Community kit"
 * → "tags" (node 10230:345523, e.g. "BFP" / "Graphic Images" / "Mention of
 * Loss" / "Pregnancy" on an anonymous post). Its Figma instance is built
 * from the SAME "Main Button" component (Style=Secondary, Size=Small,
 * Type=Text) as this DS's own Button — so it's documented here as a DsChip
 * variant (a non-interactive label, unlike Button) rather than a new
 * component.
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
        variant={purpose === "tag" ? "tc-caption-11" : "caption-bold-14"}
        color={
          purpose === "promo"
            ? "main"
            : purpose === "alert"
              ? "error"
              : purpose === "disabled"
                ? "grey"
                : purpose === "achievement"
                  ? "success"
                  : purpose === "tag"
                    ? "black"
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
