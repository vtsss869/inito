import { Text } from "./Text.jsx";

/** Figma DS: `.tabbar menu` — 32×47, icon slot 32, gap 2, Menu Caption 9 */
export function TabMenu({ icon, label, active = false, glyph = 24 }) {
  return (
    <div className={`tab-menu${active ? " tab-menu--active" : ""}`}>
      <span className="tab-menu__icon">
        <span
          className={`tab-menu__glyph tab-menu__glyph--${glyph}`}
          style={{
            WebkitMaskImage: `url(${icon})`,
            maskImage: `url(${icon})`,
          }}
          aria-hidden="true"
        />
      </span>
      <Text
        as="span"
        variant="menu"
        color={active ? "black" : "grey"}
        className="tab-menu__label"
      >
        {label}
      </Text>
    </div>
  );
}
