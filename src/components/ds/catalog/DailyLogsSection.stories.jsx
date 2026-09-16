import { useState } from "react";
import { DailyLogsSection, DailyLogsMeta } from "./DailyLogsSection.jsx";
import flowLight from "../../../assets/icons/symptoms/32px/symp32-flow-flow-light.svg";
import flowMedium from "../../../assets/icons/symptoms/32px/symp32-flow-flow-medium.svg";
import bluetoothIcon from "../../../assets/icons/system/sys-interface-interface-bluetooth-on.svg";
import editIcon from "../../../assets/icons/system/sys-interface-interface-edit.svg";
import plusIcon from "../../../assets/icons/system/sys-interface-interface-plus.svg";
import calendarIcon from "../../../assets/icons/nav-calendar.svg";
import { SegmentControl } from "../SegmentControl.jsx";

const meta = {
  title: "DS/Data / Analytics/Daily Logs Section",
  component: DailyLogsSection,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Figma Daily Logs Cards (`p: 8`, radius 24). Header is `pl: 8` only — title uses Caption Bold 16 typography pad (`pt: 7` / `pb: 9`). Info is a 32×32 transparent Main Button in Grey Icons (`#BDC1CD`).",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 342, background: "#F6F6F6", padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

const PERIOD_OPTIONS = [
  { id: "light", label: "Light", icon: flowLight },
  { id: "medium", label: "Medium", icon: flowMedium },
];

/** Empty Medication — matches Home Daily Logs first card (info + CTA). */
export const MedicationEmpty = {
  name: "Medication / Empty",
  parameters: {
    docs: {
      description: {
        story:
          "Empty state: title + info (32×32 transparent, `--grey-icons`) + full-width grey pill CTA with meds/mood plus icon and “Add new medication”. Card padding is 8px — header is pl 8 only.",
      },
    },
  },
  render: () => (
    <DailyLogsSection
      title="Medication"
      info
      actions={[
        {
          id: "add-med",
          label: "Add new medication",
          variant: "grey",
          icon: plusIcon,
          className: "daily-logs-section__action-add",
        },
      ]}
    />
  ),
};

export const PeriodCard = {
  render: function Render() {
    const [selected, setSelected] = useState([]);
    return (
      <DailyLogsSection
        title="Period and Intensity"
        options={PERIOD_OPTIONS}
        selectedIds={selected}
        onToggle={(id) => setSelected((prev) => (prev.includes(id) ? [] : [id]))}
        multi={false}
        actions={[{ id: "edit", label: "Edit period", variant: "grey" }]}
      />
    );
  },
};

export const BbtCard = {
  render: () => (
    <DailyLogsSection
      title="BBT"
      info
      helper="Your Inito Temp Thermometer automatically logs your BBT data for seamless tracking."
      actions={[
        { id: "inito", label: "Log with InTemp", variant: "primary", icon: bluetoothIcon },
        { id: "manual", label: "Log manually", variant: "grey", icon: editIcon },
      ]}
    />
  ),
};

export const JournalCard = {
  render: () => (
    <DailyLogsSection
      title="Write your journal"
      journal
      journalPlaceholder="Describe your day, jot down your feelings or notes..."
    />
  ),
};

/**
 * Figma Home `Date` (`212:399521`) — three grey Mini chips:
 * calendar+date · Cycle Day · DPO. Row: gap 4, px 24, pb 8.
 */
export const DateChips = {
  name: "Date chips / Overview",
  parameters: {
    docs: {
      description: {
        story:
          "Figma node `212:399521`. Date chip: h 32, pl 8 / pr 12, 20×20 calendar icon, Mini 12 Text Black. Cycle/DPO chips: h 32, px 12. Track uses `--bg-grey`.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 390, background: "#ffffff", padding: "16px 0" }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <DailyLogsMeta
      dateLabel="2 May 2023"
      cycleLabel="Cycle Day 13"
      dpoLabel="DPO 10"
      icon={calendarIcon}
    />
  ),
};

export const MetaRow = {
  name: "Date chips / Alias",
  render: () => (
    <DailyLogsMeta
      dateLabel="2 May 2023"
      cycleLabel="Cycle Day 13"
      dpoLabel="DPO 10"
      icon={calendarIcon}
    />
  ),
};

const DAILY_LOGS_SORT_OPTIONS = [
  { id: "all", label: "All" },
  { id: "empty", label: "Empty" },
  { id: "logged", label: "Logged" },
];

/** Figma Sorting Control (`212:399604`) — 342×48 above Daily Logs cards. */
export const SortingControl = {
  name: "Sorting Control / Daily Logs",
  parameters: {
    docs: {
      description: {
        story:
          "Segment track: 342×48, padding 2px, radius 28. Three equal segments; selected segment uses white pill, inactive labels use Text Grey.",
      },
    },
  },
  render: function Render() {
    const [value, setValue] = useState("all");
    return (
      <SegmentControl options={DAILY_LOGS_SORT_OPTIONS} value={value} onChange={setValue} />
    );
  },
};
