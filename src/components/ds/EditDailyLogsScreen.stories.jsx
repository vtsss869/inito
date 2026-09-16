import { useState } from "react";
import { EditDailyLogsScreen } from "./EditDailyLogsScreen.jsx";
import { MaskIcon } from "./Icon.jsx";
import {
  DAILY_LOGS_SECTIONS,
  getDefaultDailyLogsLayout,
} from "./dailyLogsData.js";
import minusIcon from "../../assets/icons/system/sys-interface-interface-minus.svg";
import plusIcon from "../../assets/icons/system/sys-interface-interface-plus.svg";

const meta = {
  title: "DS/Data / Analytics/Edit Daily Logs",
  component: EditDailyLogsScreen,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Figma `128:111439` — Edit Daily logs. Tap a category row (or − / +) to move between Visible and Hidden. ✓ saves, ✕ discards.",
      },
    },
  },
  decorators: [
    (Story, context) => {
      if (context.name?.startsWith("Action icons")) {
        return <Story />;
      }
      return (
        <div
          style={{
            width: 390,
            height: 844,
            margin: "0 auto",
            background: "#fff",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

/** Default — all sections Visible, same order as Daily Logs page. */
export const Default = {
  name: "Default / All visible",
  parameters: {
    docs: {
      description: {
        story:
          "Initial layout: every Daily Logs section under Visible in page order. Tap a row to hide it.",
      },
    },
  },
  render: function Render() {
    const [layout, setLayout] = useState(getDefaultDailyLogsLayout());
    return (
      <EditDailyLogsScreen
        initialLayout={layout}
        onClose={() => {}}
        onSave={(next) => setLayout(next)}
      />
    );
  },
};

/** Sample with some Hidden — closer to Figma frame mix. */
export const WithHidden = {
  name: "With Hidden sample",
  parameters: {
    docs: {
      description: {
        story:
          "Demo: Follicle, Pregnancy Test, Mood hidden. Tap a Visible row to hide; tap a Hidden row to restore.",
      },
    },
  },
  render: function Render() {
    const all = DAILY_LOGS_SECTIONS.map((s) => s.id);
    const hidden = ["follicle", "pregnancy-test", "mood"];
    const [layout, setLayout] = useState({
      visibleIds: all.filter((id) => !hidden.includes(id)),
      hiddenIds: hidden,
    });
    return (
      <EditDailyLogsScreen
        initialLayout={layout}
        onClose={() => {}}
        onSave={(next) => setLayout(next)}
      />
    );
  },
};

/** Action glyphs used on this screen (also in DS/Components/Icons/System Icons). */
export const ActionIcons = {
  name: "Action icons (− / +)",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Figma Interface/Minus · Plus as used on Edit Daily logs. Minus = Text Error stroke; Plus = Grey Icons; no circular fills. Menu-2 / drag handle removed — tap the row instead.",
      },
    },
  },
  render: () => {
    const cell = (label, color, src) => (
      <div
        key={label}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          padding: 16,
          background: "var(--bg-grey)",
          borderRadius: 20,
          minWidth: 120,
        }}
      >
        <span style={{ color, display: "inline-flex" }}>
          <MaskIcon src={src} size={32} />
        </span>
        <span style={{ fontFamily: "var(--font)", fontSize: 12, color: "var(--text-grey)" }}>
          {label}
        </span>
      </div>
    );
    return (
      <div style={{ display: "flex", gap: 16, padding: 24, flexWrap: "wrap" }}>
        {cell("Interface/Minus", "var(--text-error)", minusIcon)}
        {cell("Interface/Plus", "var(--grey-icons)", plusIcon)}
      </div>
    );
  },
};
