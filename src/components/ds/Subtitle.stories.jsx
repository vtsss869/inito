import { Subtitle } from "./Subtitle.jsx";
// Figma "24px — Pictograms for subtitles" catalog (system-icons.json) — the
// correctly-centered, current-token-color source for these two glyphs. The
// standalone pictogram-notifications.svg / pictogram-test-results.svg files
// (still used by src/screens/HomeScreen.jsx) are stale exports: their
// viewBox is offset into a larger icon sheet instead of being self-
// contained 0,0,24,24, which visibly shifts the artwork off-center inside
// its 24×24 slot (most noticeable on the Test Results glyph — this is the
// bug the user flagged). See design-system-agent's Subtitle audit.
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
