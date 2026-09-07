import { useRef } from "react";
import { Text } from "./Text.jsx";
import { useMaskImage } from "./Icon.jsx";

export function TabMenu({ icon, label, active = false, notification = false, glyph = 24 }) {
  const ref = useRef(null);
  useMaskImage(ref, icon);
  return (
    <div className={`tab-menu${active ? " tab-menu--active" : ""}`}>
      <span className="tab-menu__icon">
        <span
          ref={ref}
          className={`tab-menu__glyph tab-menu__glyph--${glyph}`}
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
