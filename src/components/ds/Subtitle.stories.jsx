import { Subtitle } from "./Subtitle.jsx";
import pictogramNotifications from "../../assets/icons/pictogram-notifications.svg";
import pictogramTestResults from "../../assets/icons/pictogram-test-results.svg";

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
