import { DailyLogCard } from "./DailyLogCard.jsx";
import { Text } from "../Text.jsx";
import {
  DAILY_LOG_CARD_CATEGORIES,
  DAILY_LOG_CARD_CATEGORY_IDS,
  DAILY_LOG_CARD_VARIANT_COUNT,
} from "./dailyLogCardData.js";

// Figma DS: "Daily logs cards" component set — node 22655:90121, section `Daily logs cards`
// (22650:20481) on the "🌸 Cards (Shop, Symptoms, Day status)" canvas. 56 variants (category ×
// Logged × Type) across 21 categories — every one is rendered below, grouped by category, using
// the exact Figma variant name as its caption so this page can be diffed 1:1 against the Figma
// component set.

const meta = {
  title: "DS/Cards/Daily Log Card",
  component: DailyLogCard,
  parameters: { layout: "padded" },
  argTypes: {
    category: { control: "select", options: DAILY_LOG_CARD_CATEGORY_IDS },
    logged: { control: "select", options: ["no", "yes"] },
  },
};

export default meta;

function VariantLabel({ children }) {
  return (
    <Text
      variant="mini"
      color="grey"
      style={{ display: "block", marginBottom: 8, fontFamily: "monospace", fontSize: 11 }}
    >
      {children}
    </Text>
  );
}

// Categories whose iconCategory resolves against the new daily-log-card-icons-32.json pool
// (their own dedicated per-chip icon set) rather than the original symptoms-icons-32.json
// "Symptoms Icons" catalog — see dailyLogCardData.js header.
const OWN_ICON_POOL_CATEGORIES = new Set([
  "Hot Flashes",
  "Night Sweats",
  "Sleep",
  "Joints & muscles",
  "Energy & Focus",
]);

function CategorySection({ cat }) {
  const iconSource = OWN_ICON_POOL_CATEGORIES.has(cat.label)
    ? "Daily Log Card icons"
    : "Symptoms Icons";
  return (
    <section style={{ marginBottom: 40 }}>
      <Text as="h2" variant="caption-bold-16" style={{ display: "block", marginBottom: 4 }}>
        {cat.label}
      </Text>
      <Text
        variant="mini"
        color="grey"
        style={{ display: "block", marginBottom: 16 }}
      >
        {cat.variants.length} variant{cat.variants.length > 1 ? "s" : ""}
        {cat.iconCategory ? ` · icons: ${iconSource} / ${cat.iconCategory}` : " · no chips (free text)"}
      </Text>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        {cat.variants.map((v) => (
          <div key={`${v.logged}-${v.type}`}>
            <VariantLabel>
              category={cat.label}, Logged={v.logged}, Type={v.type}
            </VariantLabel>
            <DailyLogCard category={cat.id} logged={v.logged} type={v.type} />
          </div>
        ))}
      </div>
    </section>
  );
}

export const Overview = {
  name: "Overview",
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font)" }}>
      <Text as="h1" variant="header-3">
        Daily Log Card
      </Text>
      <Text variant="mini" color="grey">
        Figma node 22655:90121 · {DAILY_LOG_CARD_VARIANT_COUNT} variants across{" "}
        {DAILY_LOG_CARD_CATEGORY_IDS.length} categories
      </Text>
      <div style={{ marginTop: 24 }}>
        {DAILY_LOG_CARD_CATEGORIES.map((cat) => (
          <CategorySection key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

function categoryStory(id) {
  const cat = DAILY_LOG_CARD_CATEGORIES.find((c) => c.id === id);
  return {
    name: cat.label,
    render: () => (
      <div style={{ padding: 24, fontFamily: "var(--font)" }}>
        <CategorySection cat={cat} />
      </div>
    ),
    parameters: { controls: { disable: true } },
  };
}

export const Period = categoryStory("period");
export const Sex = categoryStory("sex");
export const BBT = categoryStory("bbt");
export const Mood = categoryStory("mood");
export const Symptoms = categoryStory("symptoms");
export const AbdominalPain = categoryStory("abdominal-pain");
export const SexDrive = categoryStory("sex-drive");
export const Insemination = categoryStory("insemination");
export const WriteYourJournal = categoryStory("write-your-journal");
export const Medication = categoryStory("medication");
export const FollicleTracking = categoryStory("follicle-tracking");
export const BloodTestValues = categoryStory("blood-test-values");
export const PhysicalActivity = categoryStory("physical-activity");
export const Other = categoryStory("other");
export const PregnancyTest = categoryStory("pregnancy-test");
export const VaginalDischarge = categoryStory("vaginal-discharge");
export const HotFlashes = categoryStory("hot-flashes");
export const NightSweats = categoryStory("night-sweats");
export const Sleep = categoryStory("sleep");
export const JointsAndMuscles = categoryStory("joints-and-muscles");
export const EnergyAndFocus = categoryStory("energy-and-focus");

export const Playground = {
  args: { category: "symptoms", logged: "no" },
};
