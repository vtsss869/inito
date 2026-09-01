import { Text } from "./Text.jsx";
import { IconAsset } from "./Icon.jsx";

/**
 * Figma DS: "🌸 Header" page, `Subtitle` component set (14116:8694),
 * "Type=Section divider" variant — 24×24 icon + label, bottom-aligned,
 * padding-top 8. The icon is a two-color pictogram (grey line art + an
 * accent color for state, e.g. the red "new" badge), not flat line art —
 * it renders via the shared `IconAsset` catalog helper (same one used by
 * the bulk icon-catalog Storybook pages) so it keeps its own baked-in
 * colors and aspect-fits into the 24×24 slot, instead of a raw <img> with
 * no size-fitting.
 */
export function Subtitle({ icon, iconW = 24, iconH = 24, children }) {
  return (
    <div className="subtitle">
      <span className="subtitle__icon">
        <IconAsset src={icon} w={iconW} h={iconH} size={24} alt="" />
      </span>
      <Text as="h3" variant="mini" color="grey" className="subtitle__label">
        {children}
      </Text>
    </div>
  );
}
