import { Button } from "./Button.jsx";
import { Text } from "./Text.jsx";
import chevronRight from "../../assets/icons/chevron-right.svg";
import navDevice from "../../assets/icons/nav-device.svg";
import navDrop from "../../assets/icons/nav-drop.svg";

const VARIANTS = ["primary", "secondary", "promo", "transparent", "grey"];
const SIZES = ["large", "medium", "small"];

function labelColor(variant) {
  return variant === "primary" || variant === "promo" ? "white" : "black";
}

function Label({ size, variant, children }) {
  return (
    <Text
      as="span"
      variant={size === "large" ? "caption-bold-16" : "caption-bold-14"}
      color={labelColor(variant)}
    >
      {children}
    </Text>
  );
}

function RenderButton({
  label = "Continue",
  size = "medium",
  variant = "primary",
  iconOnly = false,
  icon,
  ...props
}) {
  return (
    <Button
      size={size}
      variant={variant}
      icon={icon}
      iconOnly={iconOnly}
      aria-label={iconOnly ? label : undefined}
      {...props}
    >
      {iconOnly ? null : (
        <Label size={size} variant={variant}>
          {label}
        </Label>
      )}
    </Button>
  );
}

function SectionLabel({ children }) {
  return (
    <Text as="h2" variant="mini-semibold" color="grey" style={{ marginBottom: 16 }}>
      {children}
    </Text>
  );
}

function SizeRow({ size, children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
        minHeight: 60,
      }}
    >
      <Text as="span" variant="mini" color="grey" style={{ width: 64, flexShrink: 0 }}>
        {size}
      </Text>
      {children}
    </div>
  );
}

const STATES = ["default", "pressed", "disabled"];

const meta = {
  title: "DS/Components/Buttons",
  component: Button,
  render: RenderButton,
  args: {
    label: "Continue",
    variant: "primary",
    size: "medium",
    iconOnly: false,
    icon: "none",
    state: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: VARIANTS,
    },
    size: {
      control: "select",
      options: SIZES,
    },
    state: {
      control: "select",
      options: STATES,
    },
    iconOnly: { control: "boolean" },
    label: { control: "text" },
    icon: {
      control: "select",
      options: ["none", "chevron", "device", "drop"],
      mapping: {
        none: undefined,
        chevron: chevronRight,
        device: navDevice,
        drop: navDrop,
      },
    },
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    type: { table: { disable: true } },
  },
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <section>
        <SectionLabel>Text</SectionLabel>
        {SIZES.map((size) => (
          <SizeRow key={size} size={size}>
            {VARIANTS.map((variant) => (
              <Button key={variant} size={size} variant={variant}>
                <Label size={size} variant={variant}>
                  {variant}
                </Label>
              </Button>
            ))}
          </SizeRow>
        ))}
      </section>

      <section>
        <SectionLabel>Icon only</SectionLabel>
        {SIZES.map((size) => (
          <SizeRow key={size} size={size}>
            {["primary", "secondary", "promo", "grey"].map((variant) => (
              <Button
                key={variant}
                size={size}
                variant={variant}
                icon={chevronRight}
                iconOnly
                aria-label={`${variant} ${size}`}
              />
            ))}
            <Button
              size={size}
              variant="transparent"
              icon={navDevice}
              iconOnly
              aria-label={`device ${size}`}
            />
            <Button
              size={size}
              variant="transparent"
              icon={navDrop}
              iconOnly
              aria-label={`drop ${size}`}
            />
          </SizeRow>
        ))}
      </section>

      <section>
        <SectionLabel>Type — Text Icon / Icon Text / Icon Text Icon (medium)</SectionLabel>
        <SizeRow size="medium">
          <Button size="medium" variant="primary" iconEnd={chevronRight}>
            <Label size="medium" variant="primary">
              Text Icon
            </Label>
          </Button>
          <Button size="medium" variant="secondary" icon={chevronRight}>
            <Label size="medium" variant="secondary">
              Icon Text
            </Label>
          </Button>
          <Button size="medium" variant="promo" icon={chevronRight} iconEnd={chevronRight}>
            <Label size="medium" variant="promo">
              Icon Text Icon
            </Label>
          </Button>
        </SizeRow>
      </section>

      <section>
        <SectionLabel>
          Type — Icon+Icon (one documented Figma combo: Secondary / Small)
        </SectionLabel>
        <SizeRow size="small">
          <Button size="small" variant="secondary" icon={navDevice} iconEnd={navDrop} aria-label="Icon and icon" />
        </SizeRow>
      </section>

      <section>
        <SectionLabel>States — Default / Pressed / Disabled (medium)</SectionLabel>
        {/* Plain string children (not the <Label> helper) so Wrapper's Text
            renders with color="current" and correctly inherits the
            per-state color set on .btn / .btn:disabled below. */}
        {VARIANTS.filter((v) => v !== "grey").map((variant) => (
          <SizeRow key={variant} size={variant}>
            {STATES.map((state) => (
              <Button key={state} size="medium" variant={variant} state={state}>
                {state}
              </Button>
            ))}
          </SizeRow>
        ))}
      </section>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {};

export const PrimaryLarge = {
  name: "Variants/Primary Large",
  args: { variant: "primary", size: "large" },
};

export const PrimaryMedium = {
  name: "Variants/Primary Medium",
  args: { variant: "primary", size: "medium" },
};

export const PrimarySmall = {
  name: "Variants/Primary Small",
  args: { variant: "primary", size: "small" },
};

export const SecondaryLarge = {
  name: "Variants/Secondary Large",
  args: { variant: "secondary", size: "large" },
};

export const SecondaryMedium = {
  name: "Variants/Secondary Medium",
  args: { variant: "secondary", size: "medium" },
};

export const SecondarySmall = {
  name: "Variants/Secondary Small",
  args: { variant: "secondary", size: "small" },
};

export const PromoLarge = {
  name: "Variants/Promo Large",
  args: { variant: "promo", size: "large" },
};

export const PromoMedium = {
  name: "Variants/Promo Medium",
  args: { variant: "promo", size: "medium" },
};

export const PromoSmall = {
  name: "Variants/Promo Small",
  args: { variant: "promo", size: "small" },
};

export const TransparentMedium = {
  name: "Variants/Transparent Medium",
  args: { variant: "transparent", size: "medium" },
};

export const GreyMedium = {
  name: "Variants/Grey Medium",
  args: { variant: "grey", size: "medium" },
};

export const IconDevice = {
  name: "Variants/Icon Device",
  args: {
    variant: "transparent",
    size: "medium",
    icon: "device",
    iconOnly: true,
    label: "Device",
  },
};

export const IconDrop = {
  name: "Variants/Icon Drop",
  args: {
    variant: "transparent",
    size: "medium",
    icon: "drop",
    iconOnly: true,
    label: "Log period",
  },
};

export const IconChevron = {
  name: "Variants/Icon Chevron",
  args: {
    variant: "grey",
    size: "medium",
    icon: "chevron",
    iconOnly: true,
    label: "Open",
  },
};

export const TransparentLarge = {
  name: "Variants/Transparent Large",
  args: { variant: "transparent", size: "large" },
};

export const TransparentSmall = {
  name: "Variants/Transparent Small",
  args: { variant: "transparent", size: "small" },
};

export const IconIcon = {
  name: "Variants/Icon+Icon (Secondary Small)",
  render: () => (
    <Button size="small" variant="secondary" icon={navDevice} iconEnd={navDrop} aria-label="Device and drop" />
  ),
};

// State=Default/Pressed/Disabled — Figma "Buttons" page, Main Button set.
export const PrimaryPressed = {
  name: "States/Primary Pressed",
  args: { variant: "primary", size: "medium", state: "pressed" },
};

export const PrimaryDisabled = {
  name: "States/Primary Disabled",
  args: { variant: "primary", size: "medium", state: "disabled" },
};

export const SecondaryPressed = {
  name: "States/Secondary Pressed",
  args: { variant: "secondary", size: "medium", state: "pressed" },
};

export const SecondaryDisabled = {
  name: "States/Secondary Disabled",
  args: { variant: "secondary", size: "medium", state: "disabled" },
};

export const PromoPressed = {
  name: "States/Promo Pressed",
  args: { variant: "promo", size: "medium", state: "pressed" },
};

export const PromoDisabled = {
  name: "States/Promo Disabled",
  args: { variant: "promo", size: "medium", state: "disabled" },
};

export const TransparentPressed = {
  name: "States/Transparent Pressed",
  args: { variant: "transparent", size: "medium", state: "pressed" },
};

export const TransparentDisabled = {
  name: "States/Transparent Disabled",
  args: { variant: "transparent", size: "medium", state: "disabled" },
};
