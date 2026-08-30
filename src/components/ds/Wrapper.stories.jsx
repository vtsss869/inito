import { Wrapper } from "./Wrapper.jsx";
import chevronRight from "../../assets/icons/chevron-right.svg";

const TYPES = ["wrapper", "text-icon", "icon-text", "icon-text-icon", "icon"];
const SIZES = ["large", "medium"];
const STYLES = ["bold", "regular"];

const meta = {
  title: "DS/Components/Meta Frame",
  component: Wrapper,
  render: ({ label = "Text", ...args }) => (
    <Wrapper {...args}>{args.type === "icon" ? null : label}</Wrapper>
  ),
  args: {
    label: "Text",
    size: "large",
    style: "bold",
    type: "wrapper",
    icon: chevronRight,
    iconEnd: chevronRight,
  },
  argTypes: {
    size: { control: "select", options: SIZES },
    style: { control: "select", options: STYLES },
    type: { control: "select", options: TYPES },
    label: { control: "text" },
    icon: { control: false },
    iconEnd: { control: false },
    children: { table: { disable: true } },
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

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      {STYLES.map((style) => (
        <section key={style}>
          <SectionLabel>{style}</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {SIZES.map((size) => (
              <div key={size} style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
                <span className="t-mini color-grey" style={{ width: 56 }}>
                  {size}
                </span>
                <Wrapper size={size} style={style} type="wrapper">
                  Text
                </Wrapper>
                <Wrapper size={size} style={style} type="text-icon" icon={chevronRight}>
                  Text
                </Wrapper>
                <Wrapper size={size} style={style} type="icon-text" icon={chevronRight}>
                  Text
                </Wrapper>
                <Wrapper
                  size={size}
                  style={style}
                  type="icon-text-icon"
                  icon={chevronRight}
                  iconEnd={chevronRight}
                >
                  Text
                </Wrapper>
                {size === "large" ? (
                  <Wrapper size={size} style={style} type="icon" icon={chevronRight} />
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {};

export const TypeWrapper = {
  name: "Variants/Type Wrapper",
  args: { type: "wrapper", size: "large", style: "bold", label: "Text" },
};

export const TypeTextIcon = {
  name: "Variants/Type Text Icon",
  args: { type: "text-icon", size: "large", style: "bold", label: "Text", icon: chevronRight },
};

export const TypeIconText = {
  name: "Variants/Type Icon Text",
  args: { type: "icon-text", size: "large", style: "bold", label: "Text", icon: chevronRight },
};

export const TypeIconTextIcon = {
  name: "Variants/Type Icon Text Icon",
  args: {
    type: "icon-text-icon",
    size: "large",
    style: "bold",
    label: "Text",
    icon: chevronRight,
    iconEnd: chevronRight,
  },
};

export const TypeIcon = {
  name: "Variants/Type Icon",
  args: { type: "icon", size: "large", style: "regular", icon: chevronRight, label: "" },
};

export const MediumBold = {
  name: "Variants/Medium Bold",
  args: { type: "wrapper", size: "medium", style: "bold", label: "Text" },
};
