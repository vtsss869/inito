import {
  HomeNotificationCard,
  DailyLogsCard,
  FertilityNotificationCard,
  HormoneResultsCard,
  TEST_NOT_REQUIRED_MESSAGE,
  PERIOD_PAST_MESSAGE,
  PERIOD_TODAY_MESSAGE,
  EXPECTED_PERIOD_MESSAGE,
  LOW_FERTILITY_SHORT_MESSAGE,
  LOW_FERTILITY_MESSAGE,
  HIGH_FERTILITY_SHORT_MESSAGE,
  PEAK_FERTILITY_MESSAGE,
  OVULATION_CONFIRMED_MESSAGE,
  WAS_WAITING_FOR_PDG_RISE_MESSAGE,
  WAITING_FOR_PDG_RISE_MESSAGE,
  PDG_IS_RISING_MESSAGE,
  TESTING_OPTIONAL_MESSAGE,
  TESTING_OPTIONAL_PREGNANCY_MESSAGE,
  READY_FOR_NEXT_TEST_MESSAGE,
  TAKE_A_TEST_TODAY_MESSAGE,
  TODAYS_A_TEST_DAY_MESSAGE,
  FERTILITY_DATA_NOT_AVAILABLE_MESSAGE,
  CHECKING_STRIP_MESSAGE,
  TEST_IN_PROGRESS_MESSAGE,
  TEST_PENDING_REVIEW_ALGORITHM_MESSAGE,
  TEST_PENDING_REVIEW_MANUAL_MESSAGE,
  LH_SURGE_STRIPS_MESSAGE,
  TEST_STRIPS_ALERT_MESSAGE,
  INCREASE_CHANCES_MESSAGE,
  VISIT_A_DOCTOR_MESSAGE,
  HORMONE_CHARTS_HELP_MESSAGE,
  REFERRAL_MESSAGE,
  TAKE_THIS_TIME_MESSAGE,
} from "./HomeNotificationCard.jsx";
import { Text } from "./Text.jsx";

const meta = {
  title: "DS/Cards/Home Notification",
  component: HomeNotificationCard,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 342 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    content: {
      control: "select",
      options: ["daily-logs", "message", "hormones"],
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        padding: 24,
        background: "#F6F6F6",
        width: 390,
        boxSizing: "border-box",
      }}
    >
      <section>
        <SectionLabel>daily-logs — Fill in your daily logs</SectionLabel>
        <div style={{ width: 342 }}>
          <HomeNotificationCard content="daily-logs" />
        </div>
      </section>
      <section>
        <SectionLabel>message — High Fertility</SectionLabel>
        <div style={{ width: 341 }}>
          <HomeNotificationCard content="message" />
        </div>
      </section>
      <section>
        <SectionLabel>message — Test Not Required</SectionLabel>
        <div style={{ width: 341 }}>
          <HomeNotificationCard content="message" {...TEST_NOT_REQUIRED_MESSAGE} />
        </div>
      </section>
      <section>
        <SectionLabel>hormones — Hormones test results</SectionLabel>
        <div style={{ width: 342 }}>
          <HomeNotificationCard content="hormones" />
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

export const DailyLogs = {
  render: () => <DailyLogsCard />,
};

export const HighFertilityMessage = {
  name: "Variants/Message (High Fertility)",
  render: () => <FertilityNotificationCard />,
};

export const TestNotRequiredMessage = {
  name: "Variants/Message (Test Not Required)",
  render: () => <FertilityNotificationCard {...TEST_NOT_REQUIRED_MESSAGE} />,
};

export const Hormones = {
  name: "Variants/Hormones",
  render: () => <HormoneResultsCard />,
};

export const Playground = {
  args: {
    content: "daily-logs",
  },
};

/**
 * Figma "INITO | IOS – Home" (app-screens file), canvas "Calendar & main
 * card & notification states" → section "📱 In Prod" → "Legend" (node
 * 246:61671) "Notifications" grid — every notification state, grouped the
 * same way the Legend groups them. Title/body copy is transcribed verbatim
 * (see the constant-level docstring in HomeNotificationCard.jsx for the
 * exact cross-check against the Legend's "Inito Prod" column). Rows with
 * a "Shop now" / "Read now" / etc. action in Figma render with a live
 * `Button` via the `cta` prop added to `MessageContent` for this pass.
 */
function GroupHeading({ children }) {
  return (
    <Text as="h2" variant="header-4" style={{ marginBottom: 4 }}>
      {children}
    </Text>
  );
}

function NoteText({ children }) {
  return (
    <Text variant="caption-14" color="grey" style={{ marginBottom: 12, display: "block" }}>
      {children}
    </Text>
  );
}

export const LegendNotificationStates = {
  name: "Legend/Notification States (Figma)",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, width: 390, maxWidth: "100%" }}>
      <section>
        <GroupHeading>Period</GroupHeading>
        <NoteText>Which of the three shows depends on whether the period day is in the past, is today, or is a future prediction.</NoteText>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <HomeNotificationCard content="message" {...PERIOD_PAST_MESSAGE} />
          <HomeNotificationCard content="message" {...PERIOD_TODAY_MESSAGE} />
          <HomeNotificationCard content="message" {...EXPECTED_PERIOD_MESSAGE} />
        </div>
      </section>

      <section>
        <GroupHeading>Fertility</GroupHeading>
        <NoteText>
          Low/High Fertility each have a short push-style copy and a longer in-app-card copy
          (Figma shows both side by side); the rest only have one length.
        </NoteText>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <HomeNotificationCard content="message" {...LOW_FERTILITY_SHORT_MESSAGE} />
          <HomeNotificationCard content="message" {...LOW_FERTILITY_MESSAGE} />
          <HomeNotificationCard content="message" {...HIGH_FERTILITY_SHORT_MESSAGE} />
          <HomeNotificationCard content="message" />
          <HomeNotificationCard content="message" {...PEAK_FERTILITY_MESSAGE} />
          <HomeNotificationCard content="message" {...OVULATION_CONFIRMED_MESSAGE} />
          <HomeNotificationCard content="message" {...WAS_WAITING_FOR_PDG_RISE_MESSAGE} />
          <HomeNotificationCard content="message" {...WAITING_FOR_PDG_RISE_MESSAGE} />
          <HomeNotificationCard content="message" {...PDG_IS_RISING_MESSAGE} />
        </div>
      </section>

      <section>
        <GroupHeading>Testing</GroupHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <HomeNotificationCard content="message" {...TEST_NOT_REQUIRED_MESSAGE} />
          <HomeNotificationCard content="message" {...TESTING_OPTIONAL_MESSAGE} />
          <HomeNotificationCard content="message" {...TESTING_OPTIONAL_PREGNANCY_MESSAGE} />
          <HomeNotificationCard content="message" {...READY_FOR_NEXT_TEST_MESSAGE} />
          <HomeNotificationCard content="message" {...TAKE_A_TEST_TODAY_MESSAGE} />
          <HomeNotificationCard content="message" {...TODAYS_A_TEST_DAY_MESSAGE} />
          <HomeNotificationCard content="message" {...FERTILITY_DATA_NOT_AVAILABLE_MESSAGE} />
        </div>
      </section>

      <section>
        <GroupHeading>NG — device test in progress</GroupHeading>
        <NoteText>Shown while a physical NG-device test is running; two copy variants exist for the "Pending Review" step.</NoteText>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <HomeNotificationCard content="message" {...CHECKING_STRIP_MESSAGE} />
          <HomeNotificationCard content="message" {...TEST_IN_PROGRESS_MESSAGE} />
          <HomeNotificationCard content="message" {...TEST_PENDING_REVIEW_ALGORITHM_MESSAGE} />
          <HomeNotificationCard content="message" {...TEST_PENDING_REVIEW_MANUAL_MESSAGE} />
        </div>
      </section>

      <section>
        <GroupHeading>Marketing / engagement</GroupHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <HomeNotificationCard content="message" {...LH_SURGE_STRIPS_MESSAGE} />
          <HomeNotificationCard content="message" {...TEST_STRIPS_ALERT_MESSAGE} />
          <HomeNotificationCard content="message" {...INCREASE_CHANCES_MESSAGE} />
          <HomeNotificationCard content="message" {...VISIT_A_DOCTOR_MESSAGE} />
          <HomeNotificationCard content="message" {...HORMONE_CHARTS_HELP_MESSAGE} />
          <HomeNotificationCard content="message" {...REFERRAL_MESSAGE} />
          <HomeNotificationCard content="message" {...TAKE_THIS_TIME_MESSAGE} />
        </div>
      </section>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
