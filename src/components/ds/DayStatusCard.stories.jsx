import { DayStatusCard } from "./DayStatusCard.jsx";
import { Text } from "./Text.jsx";

const STATES = [
  "high-fertility",
  "fertile-window",
  "low-fertility",
  "ovulation-confirmed",
  "waiting-for-pdg-rise",
  "pdg-is-rising",
  "attention",
  "informational",
  "pregnancy",
  "test-not-required",
];

const meta = {
  title: "DS/Cards/Day Status",
  component: DayStatusCard,
  tags: ["autodocs"],
  args: {
    state: "high-fertility",
  },
  argTypes: {
    state: { control: "select", options: STATES },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 341 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 341 }}>
      {STATES.map((state) => (
        <DayStatusCard key={state} state={state} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const HighFertility = { args: { state: "high-fertility" } };
export const FertileWindow = { args: { state: "fertile-window" } };
export const LowFertility = { args: { state: "low-fertility" } };
export const OvulationConfirmed = { args: { state: "ovulation-confirmed" } };
export const WaitingForPdgRise = { args: { state: "waiting-for-pdg-rise" } };
export const PdgIsRising = { args: { state: "pdg-is-rising" } };
export const Attention = { args: { state: "attention" } };
export const Informational = { args: { state: "informational" } };
export const Pregnancy = { args: { state: "pregnancy" } };
export const TestNotRequired = {
  name: "Variants/Test not required",
  args: { state: "test-not-required" },
};

export const Playground = {
  args: { state: "high-fertility" },
};

/**
 * Figma "INITO | IOS – Home" (app-screens file), canvas "Calendar & main
 * card & notification states" → section "📱 In Prod" → "Legend" (node
 * 246:61671), "Main card states" matrix — every state the Home main card
 * can show, grouped the same way the Legend groups them (Pregnancy /
 * Period / Fertility ratings, after test / Other states / NG), with the
 * condition that triggers each one. Text is transcribed verbatim from the
 * Legend's own card copy; the condition sentences describe the rule as
 * documented by the row/column position (Past/Present/Future) and the
 * surrounding NG (device test) sequence — not invented.
 *
 * States already wired in STATE_META render as live `DayStatusCard`s. The
 * rest don't have a matching gradient token confirmed against Figma yet
 * (see the "OPEN FINDING" note in DayStatusCard.jsx), so they're listed as
 * reference rows instead of guessing a color.
 */
function SectionHeading({ children }) {
  return (
    <Text as="h2" variant="header-4" style={{ marginBottom: 4 }}>
      {children}
    </Text>
  );
}

function LegendRow({ chip, headline, condition }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2, padding: "10px 0", borderBottom: "1px solid var(--border-grey, #ECEDF2)" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <Text variant="mini" color="grey">{chip}</Text>
        <Text variant="caption-bold-16">{headline}</Text>
      </div>
      <Text variant="caption-14" color="grey">{condition}</Text>
    </div>
  );
}

export const LegendMainCardStates = {
  name: "Legend/Main Card States (Figma)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, width: 480, maxWidth: "100%" }}>
      <section>
        <SectionHeading>Pregnancy</SectionHeading>
        <Text variant="caption-14" color="grey" style={{ marginBottom: 12 }}>
          Shown when the user is in pregnancy-tracking mode. Headline is the running pregnancy
          duration; viewing a past/present/future day only changes which duration and "weeks
          left / due date" line is shown — not the card's structure.
        </Text>
        <div style={{ width: 341 }}>
          <DayStatusCard state="pregnancy" />
        </div>
      </section>

      <section>
        <SectionHeading>Period</SectionHeading>
        <LegendRow
          chip="Cycle day 1–2"
          headline="Period Day 1 / Period Day 2"
          condition="Shown on a logged period day, viewed in the past or as today."
        />
        <LegendRow
          chip="Cycle day 29"
          headline="Expected Period Day"
          condition={'Shown on a future day Inito predicts as the next period, based on cycle history. Offers "Log period" / "Log pregnancy" actions.'}
        />
      </section>

      <section>
        <SectionHeading>Fertility ratings, after test</SectionHeading>
        <Text variant="caption-14" color="grey" style={{ marginBottom: 12 }}>
          Only shown for the present (today) column in the Legend — these reflect the day's live
          hormone/test data rather than a fixed past or predicted-future value.
        </Text>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ width: 341 }}>
            <DayStatusCard state="low-fertility" />
          </div>
          <div style={{ width: 341 }}>
            <DayStatusCard state="high-fertility" />
          </div>
          <LegendRow
            chip="Cycle day 13"
            headline="Peak Fertility"
            condition="LH surge confirmed today — the single highest-probability day to conceive."
          />
          <div style={{ width: 341 }}>
            <DayStatusCard state="ovulation-confirmed" />
          </div>
          <div style={{ width: 341 }}>
            <DayStatusCard state="waiting-for-pdg-rise" />
          </div>
          <div style={{ width: 341 }}>
            <DayStatusCard state="pdg-is-rising" />
          </div>
          <LegendRow
            chip="Cycle day 9"
            headline="Take test tomorrow"
            condition="A test is expected the next day per the testing schedule."
          />
        </div>
      </section>

      <section>
        <SectionHeading>Other states</SectionHeading>
        <LegendRow chip="Cycle day 9 · Past" headline="Test not required" condition="No test was required on this past day for fertility prediction / ovulation confirmation." />
        <LegendRow chip="Cycle day 9 · Past" headline="Missed test" condition="A test was expected on this past day but wasn't taken." />
        <LegendRow chip="Cycle day 9 · Past" headline="Fertility data not available" condition="No hormone/test data exists for this day — before the user started using Inito, or after a cycle-data reset." />
        <LegendRow chip="Cycle day 8 · Present/Future" headline="Optional Test Day" condition="Testing isn't required today, but the user can still test to monitor hormone levels." />
        <LegendRow chip="Cycle day 9 · Present/Future" headline="Test Required Day" condition="This day requires a test to keep fertile-day tracking and ovulation confirmation accurate." />
      </section>

      <section>
        <SectionHeading>NG — device test in progress</SectionHeading>
        <Text variant="caption-14" color="grey" style={{ marginBottom: 12 }}>
          Sequential states shown on the main card only while a physical NG-device test is
          running (present day only), in this order:
        </Text>
        <LegendRow chip="Cycle day 10 · 1" headline="Checking strip" condition="Test starting; Inito is verifying the strip is seated correctly before beginning." />
        <LegendRow chip="Cycle day 10 · 2" headline="{N} min left · Strip developing" condition="Test running — countdown and progress bar while the strip develops." />
        <LegendRow chip="Cycle day 10 · 3" headline="Calculating results" condition="Strip finished developing; results are being calculated (up to 2 minutes)." />
        <LegendRow chip="Cycle day 10 · 4a" headline="Test Under Review" condition="Result needs a second-level verification pass by the Inito team before it's released to the app." />
        <LegendRow chip="Cycle day 10 · 4b" headline="Reader is offline" condition="The device lost connection to the Reader mid-test; tapping the card explains how to reconnect." />
        <LegendRow chip="Cycle Day 13 · 4c" headline="Test Failed" condition="The test could not produce a valid result." />
      </section>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
