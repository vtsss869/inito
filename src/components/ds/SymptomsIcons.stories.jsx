import { IconAsset } from "./Icon.jsx";
import { Text } from "./Text.jsx";
import { IconGrid, CategoryBlock, CatalogSectionLabel, groupByCategory } from "./IconCatalogHelpers.jsx";
import icons32 from "./foundations/icon-data/symptoms-icons-32.json";
import icons18 from "./foundations/icon-data/symptoms-icons-18.json";

// Figma: 🧬 Icons → "Symptoms Icons" (node 20578:6957). Two full icon sets, same 22 categories:
// "Icons — 32px" (13952:2759) and "Icons — 18px" (20578:6958).
// Categories: General, Beverages, Mood, Flow, Vaginal Discharge, Sex & Sex Drive, Insemination,
// Pregnancy test, Pelvic Pain, Follicle tracking, Symptoms, Other, Physical activity, Appetite,
// Swelling, Color, Medication, Foul odor, Blood test, Chart, Testosterone, Weight.

const groups32 = groupByCategory(icons32);
const groups18 = groupByCategory(icons18);
const categoryNames = groups32.map((g) => g.category);

function findGroup(groups, name) {
  const g = groups.find((x) => x.category === name);
  return g ? g.items : [];
}

function SideBySideCategory({ name }) {
  const items32 = findGroup(groups32, name);
  const items18 = findGroup(groups18, name);
  return (
    <CategoryBlock title={name} count={items32.length}>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 320px", minWidth: 280 }}>
          <Text variant="mini" color="grey" style={{ marginBottom: 8, display: "block" }}>
            Icons — 32px ({items32.length})
          </Text>
          <IconGrid items={items32} size={32} tile={84} />
        </div>
        <div style={{ flex: "1 1 320px", minWidth: 280 }}>
          <Text variant="mini" color="grey" style={{ marginBottom: 8, display: "block" }}>
            Icons — 18px ({items18.length})
          </Text>
          <IconGrid items={items18} size={24} tile={72} />
        </div>
      </div>
    </CategoryBlock>
  );
}

const meta = {
  title: "DS/Components/Icons/Symptoms Icons",
  component: IconAsset,
  parameters: { layout: "padded" },
};

export default meta;

export const Overview = {
  name: "Overview",
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font)" }}>
      <Text as="h1" variant="header-3">
        Symptoms Icons
      </Text>
      <Text variant="mini" color="grey">
        Figma node 20578:6957 · {icons32.length} icons at 32px + {icons18.length} icons at 18px ·{" "}
        {categoryNames.length} categories, shown side by side
      </Text>
      <div style={{ marginTop: 24 }}>
        {categoryNames.map((name) => (
          <SideBySideCategory key={name} name={name} />
        ))}
      </div>
    </div>
  ),
};

export const Icons32px = {
  name: "Icons — 32px (all categories)",
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font)" }}>
      <Text variant="mini" color="grey">
        {icons32.length} icons across {groups32.length} categories
      </Text>
      <div style={{ marginTop: 16 }}>
        {groups32.map((g) => (
          <CategoryBlock key={g.category} title={g.category} count={g.items.length}>
            <IconGrid items={g.items} size={32} tile={84} />
          </CategoryBlock>
        ))}
      </div>
    </div>
  ),
};

export const Icons18px = {
  name: "Icons — 18px (all categories)",
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font)" }}>
      <Text variant="mini" color="grey">
        {icons18.length} icons across {groups18.length} categories
      </Text>
      <div style={{ marginTop: 16 }}>
        {groups18.map((g) => (
          <CategoryBlock key={g.category} title={g.category} count={g.items.length}>
            <IconGrid items={g.items} size={24} tile={72} />
          </CategoryBlock>
        ))}
      </div>
    </div>
  ),
};

function categoryStory(name) {
  return {
    name,
    render: () => (
      <div style={{ padding: 24, fontFamily: "var(--font)" }}>
        <SideBySideCategory name={name} />
      </div>
    ),
  };
}

export const General = categoryStory("General");
export const Beverages = categoryStory("Beverages");
export const Mood = categoryStory("Mood");
export const Flow = categoryStory("Flow");
export const VaginalDischarge = categoryStory("Vaginal Discharge");
export const SexAndSexDrive = categoryStory("Sex & Sex Drive");
export const Insemination = categoryStory("Insemination");
export const PregnancyTest = categoryStory("Pregnancy test");
export const PelvicPain = categoryStory("Pelvic Pain");
export const FollicleTracking = categoryStory("Follicle tracking");
export const Symptoms = categoryStory("Symptoms");
export const Other = categoryStory("Other");
export const PhysicalActivity = categoryStory("Physical activity");
export const Appetite = categoryStory("Appetite");
export const Swelling = categoryStory("Swelling");
export const Color = categoryStory("Color");
export const Medication = categoryStory("Medication");
export const FoulOdor = categoryStory("Foul odor");
export const BloodTest = categoryStory("Blood test");
export const Chart = categoryStory("Chart");
export const Testosterone = categoryStory("Testosterone");
export const Weight = categoryStory("Weight");
