import { TabMenu } from "./TabMenu.jsx";
import { MainMenuButton } from "./MainMenuButton.jsx";
import { Text } from "./Text.jsx";
import tabbarBg from "../../assets/tabbar/tabbar-bg.svg";
import iconHome from "../../assets/tabbar/icon-home.svg";
import iconChart from "../../assets/tabbar/icon-chart.svg";
import iconShop from "../../assets/tabbar/icon-shop.svg";
import iconProfile from "../../assets/tabbar/icon-profile.svg";

const TABS = [
  { id: "home", label: "Home", icon: iconHome, glyph: 24 },
  { id: "chart", label: "Chart", icon: iconChart, glyph: 24 },
  { id: "shop", label: "Shop", icon: iconShop, glyph: 32 },
  { id: "profile", label: "Profile", icon: iconProfile, glyph: 32 },
];

/**
 * Figma DS: `Tabbar` (390×121)
 * Bottom Bar Bg X + Content (items-end, px-24) with
 * `.tabbar menu` ×4 and `.main menu button`
 */
export function TabBar({ active = "home", testVariant = "primary" }) {
  return (
    <nav className="tabbar" aria-label="Primary">
      <div className="tabbar__bg" aria-hidden="true">
        <img src={tabbarBg} alt="" />
      </div>
      <div className="tabbar__content">
        <TabMenu
          icon={TABS[0].icon}
          label={TABS[0].label}
          glyph={TABS[0].glyph}
          active={active === "home"}
        />
        <TabMenu
          icon={TABS[1].icon}
          label={TABS[1].label}
          glyph={TABS[1].glyph}
          active={active === "chart"}
        />
        <MainMenuButton variant={testVariant} />
        <TabMenu
          icon={TABS[2].icon}
          label={TABS[2].label}
          glyph={TABS[2].glyph}
          active={active === "shop"}
        />
        <TabMenu
          icon={TABS[3].icon}
          label={TABS[3].label}
          glyph={TABS[3].glyph}
          active={active === "profile"}
        />
      </div>
    </nav>
  );
}

export { TabMenu } from "./TabMenu.jsx";
export { MainMenuButton } from "./MainMenuButton.jsx";

/**
 * Figma DS: `.bottom bar - category` (Tabbar page, Bottom Bar section)
 * State=Default/Chosen × Type=Category/Subcategory — filter chip used on the
 * shop bottom bar. Category Chosen = dark fill/white text; Subcategory
 * Chosen = Background Blue fill/black text.
 */
export function BottomBarChip({ type = "category", chosen = false, children = "Category" }) {
  return (
    <button
      type="button"
      className={[
        "bottom-bar-chip",
        `bottom-bar-chip--${type}`,
        chosen ? "bottom-bar-chip--chosen" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-pressed={chosen}
      data-name=".bottom bar - category"
    >
      <Text as="span" variant={type === "category" ? "caption-bold-16" : "mini"} color="current">
        {children}
      </Text>
    </button>
  );
}
