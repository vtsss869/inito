import { Text } from "./Text.jsx";

/**
 * Figma DS: `.tabbar menu` — 32×47, icon slot 32, gap 2, Menu Caption 9
 * State=Default/Active/Notification — `notification` adds the small badge
 * dot on the icon slot (e.g. new items in Shop / Community).
 */
export function TabMenu({ icon, label, active = false, notification = false, glyph = 24 }) {
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
        {notification ? <span className="tab-menu__badge" aria-hidden="true" /> : null}
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
