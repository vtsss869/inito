import { IconAsset } from "./Icon.jsx";
import { Text } from "./Text.jsx";
import { IconGrid, CategoryBlock, groupByCategory } from "./IconCatalogHelpers.jsx";
import icons from "./foundations/icon-data/system-icons.json";

// Figma: 🧬 Icons → "System Icons" (node 13977:2597). 16 size/purpose categories, read live from
// Figma (not the older ~14-category structure) — each a separate named frame:
// Calendar & Pictograms/{12px — Calendar Legend, 12px — Delivery, 24px — Pictograms for subtitles,
// 24px — Tab bar, 24px — Community, 12×24px — Community, 16×16px — Community},
// Interface [32px, 157 icons], Interface Community [32px, 18 icons],
// 32px — Web, 32px — Old Icons, 32×54px — Onboarding Icons, 40px — Referral,
// 48px — Onboarding Devices, 60px, 80px, 100px.

const groups = groupByCategory(icons);
const CATEGORY_SIZE = {
  "12px — Calendar Legend": 24,
  "12px — Delivery": 24,
  "24px — Pictograms for subtitles": 32,
  "24px — Tab bar": 32,
  "24px — Community": 32,
  "12×24px — Community": 32,
  "16×16px — Community": 24,
  Interface: 32,
  "Interface Community": 32,
  "32px — Web": 32,
  "32px — Old Icons": 32,
  "32×54px — Onboarding Icons": 44,
  "40px — Referral": 40,
  "48px — Onboarding Devices": 48,
  "60px": 56,
  "80px": 64,
  "100px": 72,
};

function groupSize(name) {
  return CATEGORY_SIZE[name] || 32;
}

const meta = {
  title: "DS/Components/Icons/System Icons",
  component: IconAsset,
  parameters: { layout: "padded" },
};

export default meta;

export const Overview = {
  name: "Overview",
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font)" }}>
      <Text as="h1" variant="header-3">
        System Icons
      </Text>
      <Text variant="mini" color="grey">
        Figma node 13977:2597 · {icons.length} icons across {groups.length} categories
      </Text>
      <div style={{ marginTop: 24 }}>
        {groups.map((g) => (
          <CategoryBlock key={g.category} title={g.category} count={g.items.length}>
            <IconGrid items={g.items} size={groupSize(g.category)} tile={96} />
          </CategoryBlock>
        ))}
      </div>
    </div>
  ),
};

function categoryStory(name) {
  const group = groups.find((g) => g.category === name);
  return {
    name,
    render: () => (
      <div style={{ padding: 24, fontFamily: "var(--font)" }}>
        <Text variant="mini" color="grey">
          {group ? group.items.length : 0} icons
        </Text>
        <div style={{ marginTop: 16 }}>
          <IconGrid items={group ? group.items : []} size={groupSize(name)} tile={96} />
        </div>
      </div>
    ),
  };
}

export const CalendarLegend12 = categoryStory("12px — Calendar Legend");
export const Delivery12 = categoryStory("12px — Delivery");
export const PictogramsForSubtitles24 = categoryStory("24px — Pictograms for subtitles");
export const TabBar24 = categoryStory("24px — Tab bar");
export const Community24 = categoryStory("24px — Community");
export const Community12x24 = categoryStory("12×24px — Community");
export const Community16 = categoryStory("16×16px — Community");
export const Interface32 = categoryStory("Interface");
export const InterfaceCommunity32 = categoryStory("Interface Community");
export const Web32 = categoryStory("32px — Web");
export const OldIcons32 = categoryStory("32px — Old Icons");
export const OnboardingIcons = categoryStory("32×54px — Onboarding Icons");
export const Referral40 = categoryStory("40px — Referral");
export const OnboardingDevices48 = categoryStory("48px — Onboarding Devices");
export const Size60 = categoryStory("60px");
export const Size80 = categoryStory("80px");
export const Size100 = categoryStory("100px");
