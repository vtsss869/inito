import { TabBar, TabMenu, MainMenuButton, BottomBarChip } from "./TabBar.jsx";
import iconHome from "../../assets/tabbar/icon-home.svg";
import iconChart from "../../assets/tabbar/icon-chart.svg";
import iconShop from "../../assets/tabbar/icon-shop.svg";
import iconProfile from "../../assets/tabbar/icon-profile.svg";
import iconTest from "../../assets/tabbar/icon-test.svg";

const meta = {
  title: "DS/Navigation/Tabbar",
  component: TabBar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          width: 390,
          height: 160,
          background: "#F6F6F6",
          overflow: "hidden",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    active: {
      control: "select",
      options: ["home", "chart", "shop", "profile"],
    },
    testVariant: {
      control: "select",
      options: ["primary", "promo"],
    },
  },
};

export default meta;

function SectionLabel({ children }) {
  return (
    <p
      style={{
        margin: "0 0 12px",
        fontFamily: "Montserrat, sans-serif",
        fontSize: 12,
        fontWeight: 600,
        color: "#7F8598",
        letterSpacing: "0.1px",
      }}
    >
      {children}
    </p>
  );
}

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24, background: "#F6F6F6" }}>
      <section>
        <SectionLabel>Tabbar — active states</SectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {["home", "chart", "shop", "profile"].map((id) => (
            <div
              key={id}
              style={{
                position: "relative",
                width: 390,
                height: 121,
                background: "#E8E8E8",
                overflow: "hidden",
              }}
            >
              <TabBar active={id} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionLabel>.tabbar menu</SectionLabel>
        <div style={{ display: "flex", gap: 24, alignItems: "flex-end", padding: 16, background: "#fff" }}>
          <TabMenu icon={iconHome} label="Home" glyph={24} active />
          <TabMenu icon={iconChart} label="Chart" glyph={24} />
          <TabMenu icon={iconShop} label="Shop" glyph={32} notification />
          <TabMenu icon={iconProfile} label="Profile" glyph={32} />
        </div>
      </section>

      <section>
        <SectionLabel>.main menu button</SectionLabel>
        <div style={{ display: "flex", gap: 32, alignItems: "flex-end", padding: 24, background: "#fff" }}>
          <MainMenuButton variant="primary" icon={iconTest} />
          <MainMenuButton variant="promo" icon={iconTest} />
        </div>
      </section>

      <section>
        <SectionLabel>.bottom bar - category (Bottom Bar section)</SectionLabel>
        <div style={{ display: "flex", gap: 8, alignItems: "center", padding: 24, background: "#fff" }}>
          <BottomBarChip type="category">Category</BottomBarChip>
          <BottomBarChip type="category" chosen>
            Category
          </BottomBarChip>
          <BottomBarChip type="subcategory">Category</BottomBarChip>
          <BottomBarChip type="subcategory" chosen>
            Category
          </BottomBarChip>
        </div>
      </section>
    </div>
  ),
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
  decorators: [],
};

export const Playground = {
  args: {
    active: "home",
    testVariant: "primary",
  },
};

export const HomeActive = {
  name: "Variants/Home Active",
  args: { active: "home" },
};

export const ChartActive = {
  name: "Variants/Chart Active",
  args: { active: "chart" },
};

export const ShopActive = {
  name: "Variants/Shop Active",
  args: { active: "shop" },
};

export const ProfileActive = {
  name: "Variants/Profile Active",
  args: { active: "profile" },
};

export const TestPromo = {
  name: "Variants/Test Promo",
  args: { active: "home", testVariant: "promo" },
};

export const NestedTabMenu = {
  name: "Nested/.tabbar menu",
  render: () => (
    <div style={{ display: "flex", gap: 24, padding: 24, background: "#fff" }}>
      <TabMenu icon={iconHome} label="Home" glyph={24} active />
      <TabMenu icon={iconHome} label="Home" glyph={24} />
      <TabMenu icon={iconChart} label="Chart" glyph={24} />
      <TabMenu icon={iconShop} label="Shop" glyph={32} />
      <TabMenu icon={iconProfile} label="Profile" glyph={32} />
    </div>
  ),
  parameters: { layout: "padded" },
  decorators: [],
};

export const NestedMainMenuButton = {
  name: "Nested/.main menu button",
  render: () => (
    <div style={{ display: "flex", gap: 32, padding: 24, background: "#fff", alignItems: "flex-end" }}>
      <MainMenuButton variant="primary" />
      <MainMenuButton variant="promo" />
    </div>
  ),
  parameters: { layout: "padded" },
  decorators: [],
};
