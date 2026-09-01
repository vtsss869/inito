import { IconAsset } from "./Icon.jsx";
import { Text } from "./Text.jsx";
import { IconGrid } from "./IconCatalogHelpers.jsx";
import icons from "./foundations/icon-data/circle-flags.json";

// Figma: 🧬 Icons → "Circle Flag" (node 15291:10226), 783×1447, 271 country/territory flags.
// Still on manual/absolute positioning in Figma (not yet restructured like the other 3 sets) —
// exported and displayed as-is; not re-organized here. Alphabetical sub-stories are a Storybook-side
// convenience for browsing, not a Figma grouping.

const sorted = [...icons].sort((a, b) => a.name.localeCompare(b.name));

function letterOf(name) {
  const c = name.trim()[0].toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
}

function range(items, from, to) {
  return items.filter((icon) => {
    const l = letterOf(icon.name);
    return l >= from && l <= to;
  });
}

const meta = {
  title: "DS/Components/Icons/Circle Flag",
  component: IconAsset,
  parameters: { layout: "padded" },
};

export default meta;

export const Overview = {
  name: "Overview",
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font)" }}>
      <Text as="h1" variant="header-3">
        Circle Flag
      </Text>
      <Text variant="mini" color="grey">
        Figma node 15291:10226 · {icons.length} flags · not yet restructured in Figma (manual/absolute
        positioning) — exported as-is
      </Text>
      <div style={{ marginTop: 24 }}>
        <IconGrid items={sorted} size={40} tile={96} />
      </div>
    </div>
  ),
};

function letterStory(from, to, label) {
  return {
    name: label,
    render: () => {
      const items = range(sorted, from, to);
      return (
        <div style={{ padding: 24, fontFamily: "var(--font)" }}>
          <Text variant="mini" color="grey">
            {items.length} flags
          </Text>
          <div style={{ marginTop: 16 }}>
            <IconGrid items={items} size={40} tile={96} />
          </div>
        </div>
      );
    },
  };
}

export const AtoF = letterStory("A", "F", "A – F");
export const GtoM = letterStory("G", "M", "G – M");
export const NtoS = letterStory("N", "S", "N – S");
export const TtoZ = letterStory("T", "Z", "T – Z");
