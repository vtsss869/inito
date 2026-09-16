import { FollicleSizeSheet } from "./FollicleSizeSheet.jsx";
import { IosStatusChrome } from "../../../device/IosStatusChrome.jsx";
import { HomeIndicator } from "../StatusBar.jsx";

const meta = {
  title: "DS/Data / Analytics/Follicle Size Sheet",
  component: FollicleSizeSheet,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: [
          "Figma Follicle Tracking overlay (e.g. `215:443703` keypad frame).",
          "Scrim: white 70% (`rgba(255,255,255,0.7)`).",
          "Desktop / Storybook: always shows iOS-style decimal keypad (digit + ABC labels, no overlap).",
          "Flow: valid follicle mm (2–30) → Endometrial CTA → Additional tracks (Left/Right single + ✕, Fluid/LUF multi).",
          "Selected chips use Background Tan. Confirm writes payload back to Daily Logs card states `682:582195` / `590376` / `587103`.",
        ].join(" "),
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="app-stage">
        <div className="phone">
          <IosStatusChrome />
          <div
            style={{
              position: "absolute",
              inset: "47px 0 34px",
              background: "var(--bg-white)",
            }}
          >
            <p
              style={{
                margin: 0,
                padding: "24px",
                fontFamily: "Montserrat, sans-serif",
                color: "var(--text-grey)",
                fontSize: 14,
              }}
            >
              Daily logs (dimmed behind sheet)
            </p>
            <Story />
          </div>
          <HomeIndicator />
        </div>
      </div>
    ),
  ],
};

export default meta;

/** Interactive playground — keypad unlocks Endometrial / tracks */
export const Playground = {
  name: "Playground / Full flow",
  parameters: {
    docs: {
      description: {
        story:
          "Type 2–30 on the keypad → Endometrial CTA appears. Tap Add Endometrial → enter mm → Additional tracks. ✓ confirms; Clear All clears the active field; Back dismisses.",
      },
    },
  },
  render: () => (
    <FollicleSizeSheet
      onBack={() => {}}
      onConfirm={(payload) => {
        // eslint-disable-next-line no-console
        console.log("follicle confirm", payload);
      }}
    />
  ),
};
