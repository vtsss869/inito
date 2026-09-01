import { IconAsset } from "./Icon.jsx";
import { Text } from "./Text.jsx";
import { IconGrid, CategoryBlock, groupByCategory, iconSrc } from "./IconCatalogHelpers.jsx";
import icons from "./foundations/icon-data/notification-icons.json";

// Figma: 🧬 Icons → "Notification Icons" (node 14101:5026) → "General Icons" → two size groups,
// each its own "Icons Grid": "General — 36×60" (43 icons) and "General — 40×40" (2 icons, both
// named "Validation" — a genuine Figma duplicate, disambiguated here as notif-validation-2/-3).
// 45 illustration-style glyphs total, used by HomeNotificationCard (see src/styles/ds.css
// .hnc__illustration) and push-notification imagery.

const groups = groupByCategory(icons);

const CATEGORY_SIZE = {
  "General — 36×60": 40,
  "General — 40×40": 40,
};

function groupSize(name) {
  return CATEGORY_SIZE[name] || 40;
}

const meta = {
  title: "DS/Components/Icons/Notification Icons",
  component: IconAsset,
  parameters: { layout: "padded" },
};

export default meta;

export const Overview = {
  name: "Overview",
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font)" }}>
      <Text as="h1" variant="header-3">
        Notification Icons
      </Text>
      <Text variant="mini" color="grey">
        Figma node 14101:5026 · {icons.length} icons across {groups.length} categories
      </Text>
      <div style={{ marginTop: 24 }}>
        {groups.map((g) => (
          <CategoryBlock key={g.category} title={g.category} count={g.items.length}>
            <IconGrid items={g.items} size={groupSize(g.category)} tile={104} />
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
          <IconGrid items={group ? group.items : []} size={groupSize(name)} tile={104} />
        </div>
      </div>
    ),
  };
}

export const General36x60 = categoryStory("General — 36×60");
export const General40x40 = categoryStory("General — 40×40");

export const AtActualSize = {
  name: "At actual size (36×60)",
  render: () => {
    const primary = groups.find((g) => g.category === "General — 36×60");
    const items = primary ? primary.items.slice(0, 12) : [];
    return (
      <div style={{ padding: 24, fontFamily: "var(--font)" }}>
        <Text variant="mini" color="grey">
          Rendered 1:1 to show the true illustration proportions used in HomeNotificationCard.
        </Text>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 16 }}>
          {items.map((icon) => (
            <div
              key={icon.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                padding: 8,
                background: "var(--bg-grey)",
                borderRadius: 12,
              }}
            >
              <IconAsset src={iconSrc(icon)} w={icon.w} h={icon.h} size={60} alt={icon.name} />
              <Text variant="mini" color="grey" style={{ fontSize: 10 }}>
                {icon.name}
              </Text>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
