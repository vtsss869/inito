import { DailyLogsScreen } from "./DailyLogsScreen.jsx";
import { SymptomChip } from "./catalog/SymptomChip.jsx";
import { IosStatusChrome } from "../../device/IosStatusChrome.jsx";
import { HomeIndicator } from "./StatusBar.jsx";
import moodGuilty from "../../assets/icons/symptoms/32px/symp32-mood-mood-guilty.svg";
import sexProtected from "../../assets/icons/symptoms/32px/symp32-sex-sex-drive-sex-protected.svg";
import sympBackache from "../../assets/icons/symptoms/32px/symp32-symptoms-interface-backache.svg";
import actAerobics from "../../assets/icons/symptoms/32px/symp32-physical-activity-interface-aerobics-dancing.svg";
import follicleSizeIcon from "../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-follicle-size.svg";

const meta = {
  title: "DS/Screens/Daily Logs",
  component: DailyLogsScreen,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Figma canvas `128:105483` — Daily logs page matrix: TTC/NTTC/Preg × unfilled/filled. Prototype wires TTC empty + filled. Follicle Tracking: sheet + incomplete card states (`682:582195` / `590376` / `587103`). Edit layout: tap Visible ↔ Hidden (no drag).",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="app-stage">
        <div className="phone">
          <IosStatusChrome />
          <Story />
          <HomeIndicator />
        </div>
      </div>
    ),
  ],
};

export default meta;

/** Figma `symptoms page/ttc unfilled` (`212:439067` / `211:382547`) — no Save until a chip is picked */
export const TtcEmpty = {
  name: "TTC / Empty",
  parameters: {
    docs: {
      description: {
        story:
          "Empty draft: no Save CTA (Figma `211:382547`). Save appears only after ≥1 selection and sticks to the bottom while scrolling.",
      },
    },
  },
  render: () => <DailyLogsScreen variant="ttc-empty" />,
};

/** Figma `symptoms page/ ttc filled` (`212:439066` / `211:383822`) — seeded logged chips + sticky Save */
export const TtcFilled = {
  name: "TTC / Filled",
  parameters: {
    docs: {
      description: {
        story:
          "Logged draft with sticky Save at bottom (Figma `211:383822`). Clear all selections → Save hides again.",
      },
    },
  },
  render: () => <DailyLogsScreen variant="ttc-filled" />,
};

/** Home icon deep-link — scrolls to the matching section (e.g. Symptoms). */
export const FocusSymptoms = {
  name: "Deep-link / Focus Symptoms",
  parameters: {
    docs: {
      description: {
        story:
          "Same as opening from Home → Symptoms icon. `focusSectionId=\"symptoms\"` scrolls that card to the top of the list.",
      },
    },
  },
  render: () => (
    <DailyLogsScreen variant="ttc-empty" focusSectionId="symptoms" />
  ),
};

export const FocusJournal = {
  name: "Deep-link / Focus Journal (Diary)",
  render: () => (
    <DailyLogsScreen variant="ttc-empty" focusSectionId="journal" />
  ),
};

export const FocusBloodTests = {
  name: "Deep-link / Focus Blood Test Values",
  render: () => (
    <DailyLogsScreen variant="ttc-empty" focusSectionId="blood-tests" />
  ),
};

export const FocusFollicle = {
  name: "Deep-link / Focus Follicle Tracking",
  parameters: {
    docs: {
      description: {
        story:
          "Opens Follicle Tracking card. Empty → Add Follicle Size opens sheet (keypad + white 70% scrim). Confirming a valid size (2–30 mm) shows Endometrial CTA + Additional tracks on the page (Figma `682:582195`+). Logged chips use Background Tan.",
      },
    },
  },
  render: () => (
    <DailyLogsScreen variant="ttc-empty" focusSectionId="follicle" />
  ),
};

export const PregnancyConfirmSave = {
  name: "Pregnancy / Confirm on Save",
  parameters: {
    docs: {
      description: {
        story:
          "Select Positive → Save opens Confirm pregnancy modal (Figma `219:145684`). Primary/secondary both commit the draft.",
      },
    },
  },
  render: () => (
    <DailyLogsScreen
      variant="ttc-empty"
      initialLogs={{
        selections: { "pregnancy-test": ["positive"] },
        journal: "",
        bbtValue: "",
      }}
      focusSectionId="pregnancy-test"
    />
  ),
};

export const Overview = {
  render: () => <DailyLogsScreen variant="ttc-empty" />,
};

export const LoggedChipTones = {
  name: "Atoms / Logged chip tones",
  decorators: [
    (Story) => (
      <div style={{ padding: 24, display: "flex", flexWrap: "wrap", gap: 8, width: 342 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Selected fills: pink (sex), tan (mood / follicle), blue (symptoms), violet (other), green (activity), red (pain/blood), bbt.",
      },
    },
  },
  render: () => (
    <>
      <SymptomChip label="Protected" icon={sexProtected} selected tone="pink" />
      <SymptomChip label="Feeling Guilty" icon={moodGuilty} selected tone="tan" />
      <SymptomChip label="23 mm" icon={follicleSizeIcon} selected tone="tan" />
      <SymptomChip label="Backache" icon={sympBackache} selected tone="blue" />
      <SymptomChip label="Aerobics" icon={actAerobics} selected tone="green" />
    </>
  ),
};
