import { Subtitle } from "./Subtitle.jsx";
// Figma "24px — Pictograms for subtitles" catalog (system-icons.json) — the
// correctly-centered, current-token-color source for these two glyphs. Home
// uses the same files.
import pictogramNotifications from "../../assets/icons/system/sys-calendar-pictograms-state-new.svg";
import pictogramTestResults from "../../assets/icons/system/sys-calendar-pictograms-state-default-type-test-results.svg";

const meta = {
  title: "DS/Components/Subtitle",
  component: Subtitle,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 341 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Notifications = {
  args: {
    icon: pictogramNotifications,
    children: "Notifications",
  },
};

export const TestResults = {
  args: {
    icon: pictogramTestResults,
    children: "Test Results",
  },
};
