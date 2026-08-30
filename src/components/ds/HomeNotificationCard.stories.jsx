import {
  HomeNotificationCard,
  DailyLogsCard,
  FertilityNotificationCard,
  HormoneResultsCard,
} from "./HomeNotificationCard.jsx";

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

export const Hormones = {
  name: "Variants/Hormones",
  render: () => <HormoneResultsCard />,
};

export const Playground = {
  args: {
    content: "daily-logs",
  },
};
