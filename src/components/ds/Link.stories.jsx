import { Link } from "./Link.jsx";
import chevronRight from "../../assets/icons/chevron-right.svg";

const SIZES = ["large", "medium"];
const TYPES = ["text", "text-icon", "icon-text"];

const meta = {
  title: "DS/Components/Buttons",
  component: Link,
  render: (args) => <Link {...args} />,
  args: {
    children: "Link",
    size: "large",
    type: "text",
  },
  argTypes: {
    size: { control: "select", options: SIZES },
    type: { control: "select", options: TYPES },
    children: { control: "text" },
    icon: { control: false },
    iconEnd: { control: false },
  },
};

export default meta;

function SectionLabel({ children }) {
  return (
    <p className="t-mini-semibold color-grey" style={{ marginBottom: 16 }}>
      {children}
    </p>
  );
}

/**
 * Figma "Buttons" page — Link frame → .Link set (Size Large/Medium × Type
 * Text/Text Icon/Icon Text). The set also contains one duplicate
 * "Size=Large, Type=Text" variant in Figma (a naming collision — this is
 * what trips `get_componentPropertyDefinitions` into "Component set has
 * existing errors" for this specific set), not reproduced here.
 */
export const LinkOverview = {
  name: "Link/Overview",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {SIZES.map((size) => (
        <section key={size}>
          <SectionLabel>{size}</SectionLabel>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <Link size={size} type="text">
              Link
            </Link>
            <Link size={size} type="text-icon" icon={chevronRight}>
              Link
            </Link>
            <Link size={size} type="icon-text" icon={chevronRight}>
              Link
            </Link>
          </div>
        </section>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const LinkPlayground = { name: "Link/Playground" };

export const LargeText = {
  name: "Link/Variants/Large Text",
  args: { size: "large", type: "text", children: "Link" },
};

export const LargeTextIcon = {
  name: "Link/Variants/Large Text Icon",
  args: { size: "large", type: "text-icon", children: "Link", icon: chevronRight },
};

export const LargeIconText = {
  name: "Link/Variants/Large Icon Text",
  args: { size: "large", type: "icon-text", children: "Link", icon: chevronRight },
};

export const MediumText = {
  name: "Link/Variants/Medium Text",
  args: { size: "medium", type: "text", children: "Link" },
};
