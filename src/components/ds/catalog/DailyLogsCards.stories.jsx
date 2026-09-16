import { useState } from "react";
import {
  DailyLogsSection,
  JOURNAL_EMPTY_PLACEHOLDER,
  JOURNAL_LOGGED_SAMPLE,
} from "./DailyLogsSection.jsx";
import { SymptomChip } from "./SymptomChip.jsx";
import { Button } from "../Button.jsx";
import { Text } from "../Text.jsx";
import {
  DAILY_LOGS_SECTIONS,
  DAILY_LOGS_TTC_FILLED_SEED,
} from "../dailyLogsData.js";
import { MedicationLoggedCard } from "./MedicationLoggedCard.jsx";
import bluetoothIcon from "../../../assets/icons/system/sys-interface-interface-bluetooth-on.svg";
import editIcon from "../../../assets/icons/system/sys-interface-interface-edit.svg";
import plusIcon from "../../../assets/icons/system/sys-interface-interface-plus.svg";
import closeSmall from "../../../assets/icons/system/sys-interface-interface-close-s.svg";
import follicleSizeIcon from "../../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-follicle-size.svg";
import endometrialIcon from "../../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-endometrial-thickness.svg";
import leftOvaryIcon from "../../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-left-ovary.svg";
import rightOvaryIcon from "../../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-right-ovary.svg";
import fluidIcon from "../../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-fluid-in-pod.svg";
import lufIcon from "../../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-luf.svg";
import bbtIcon from "../../../assets/icons/symptoms/32px/symp32-general-general-bbt.svg";

/**
 * Figma Logs cards board (`212:393875`) — empty vs logged for every category.
 * Stories are documentation + visual reference for Storybook → prototype reuse.
 */
const meta = {
  title: "DS/Data / Analytics/Daily Logs Cards",
  component: DailyLogsSection,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Figma section `Logs cards` (`212:393875`). Empty vs Logged per category. Follicle Tracking partial/logged states: `682:582195` / `682:590376` / `682:587103` (Background Tan chips). Reuse `DailyLogsSection` + `SymptomChip` — do not fork UI for the prototype.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 342, background: "#F6F6F6", padding: 24, display: "flex", flexDirection: "column", gap: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

function SectionLabel({ children }) {
  return (
    <p
      style={{
        margin: "0 0 8px",
        fontFamily: "Montserrat, sans-serif",
        fontSize: 11,
        fontWeight: 600,
        color: "#7F8598",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </p>
  );
}

function Pair({ emptyLabel, loggedLabel, empty, logged }) {
  return (
    <>
      <div>
        <SectionLabel>{emptyLabel}</SectionLabel>
        {empty}
      </div>
      <div>
        <SectionLabel>{loggedLabel}</SectionLabel>
        {logged}
      </div>
    </>
  );
}

function byId(id) {
  return DAILY_LOGS_SECTIONS.find((s) => s.id === id);
}

const seed = DAILY_LOGS_TTC_FILLED_SEED.selections;

/** Journal — Figma `675:147480` */
export const JournalEmptyAndLogged = {
  name: "Journal / Empty + Logged",
  parameters: {
    docs: {
      description: {
        story:
          "Empty (`891:304214`): h 142, pl 16 / pr 8 / py 8, grey pencil Main Button, Mini placeholder `--text-transparent-grey`. Logged (`891:304215`): no pencil, Mini body Text Black, auto height.",
      },
    },
  },
  render: function Render() {
    const [emptyVal, setEmptyVal] = useState("");
    const [loggedVal, setLoggedVal] = useState(JOURNAL_LOGGED_SAMPLE);
    return (
      <Pair
        emptyLabel="Empty — not logged"
        loggedLabel="Logged — filled"
        empty={
          <DailyLogsSection
            title="Write your journal"
            journal
            journalValue={emptyVal}
            journalPlaceholder={JOURNAL_EMPTY_PLACEHOLDER}
            onJournalChange={setEmptyVal}
          />
        }
        logged={
          <DailyLogsSection
            title="Write your journal"
            journal
            journalValue={loggedVal}
            journalPlaceholder={JOURNAL_EMPTY_PLACEHOLDER}
            onJournalChange={setLoggedVal}
          />
        }
      />
    );
  },
};

export const MedicationEmptyAndLogged = {
  name: "Medication / Empty + Logged",
  parameters: {
    docs: {
      description: {
        story:
          "Empty: title + info + “Add new medication”. Logged: Figma `679:159800` / Taken `679:160055` — schedule cards with Skipped/Taken.",
      },
    },
  },
  render: () => (
    <Pair
      emptyLabel="Empty"
      loggedLabel="Logged — Taken / Skipped"
      empty={
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
      }
      logged={<MedicationLoggedCard />}
    />
  ),
};

export const PeriodEmptyAndLogged = {
  name: "Period / Empty + Logged",
  parameters: {
    docs: {
      description: {
        story:
          "Empty: intensity chips + Edit period. Logged: chips collapse; only secondary Edit period remains (filled screen pattern).",
      },
    },
  },
  render: function Render() {
    const section = byId("period");
    const [selected, setSelected] = useState([]);
    return (
      <Pair
        emptyLabel="Empty"
        loggedLabel="Logged (Edit period only)"
        empty={
          <DailyLogsSection
            title={section.title}
            tone={section.tone}
            options={section.options}
            selectedIds={selected}
            multi={false}
            onToggle={(id) => setSelected((p) => (p.includes(id) ? [] : [id]))}
            actions={[{ id: "edit", label: "Edit period", variant: "secondary" }]}
          />
        }
        logged={
          <DailyLogsSection
            title={section.title}
            actions={[{ id: "edit", label: "Edit period", variant: "secondary" }]}
          />
        }
      />
    );
  },
};

export const SexEmptyAndLogged = {
  name: "Sex / Empty + Logged",
  parameters: {
    docs: {
      description: {
        story:
          "Empty: three options. Logged: ✕ clear + selected pink chip; Orgasm + Position follow-ups appear when Protected/Unprotected.",
      },
    },
  },
  render: () => {
    const section = byId("sex");
    const selected = seed.sex;
    const opt = section.options.find((o) => selected.includes(o.id));
    return (
      <Pair
        emptyLabel="Empty"
        loggedLabel="Logged — Protected + follow-ups"
        empty={
          <DailyLogsSection
            title={section.title}
            tone={section.tone}
            options={section.options}
            selectedIds={[]}
            multi={false}
          />
        }
        logged={
          <DailyLogsSection title={section.title} tone={section.tone}>
            <div className="daily-logs-section__logged-row">
              <Button variant="grey" size="medium" icon={closeSmall} iconOnly className="daily-logs-section__clear" aria-label="Clear" />
              <SymptomChip label={opt.label} icon={opt.icon} tone="pink" selected />
            </div>
            <Text as="p" variant="mini" color="grey" className="daily-logs-section__subtitle">
              Orgasm
            </Text>
            <div className="daily-logs-section__chips">
              {section.followups[0].options.map((o) => (
                <SymptomChip
                  key={o.id}
                  label={o.label}
                  icon={o.icon}
                  tone="pink"
                  selected={(seed.sex__orgasm || []).includes(o.id)}
                />
              ))}
            </div>
            <Text as="p" variant="mini" color="grey" className="daily-logs-section__subtitle">
              Position during ejaculation
            </Text>
            <div className="daily-logs-section__chips">
              {section.followups[1].options.map((o) => (
                <SymptomChip
                  key={o.id}
                  label={o.label}
                  icon={o.icon}
                  tone="pink"
                  selected={(seed.sex__position || []).includes(o.id)}
                />
              ))}
            </div>
          </DailyLogsSection>
        }
      />
    );
  },
};

export const SexDriveEmptyAndLogged = {
  name: "Sex Drive / Empty + Logged",
  parameters: {
    docs: {
      description: {
        story: "Empty: High / Neutral / Low. Logged: ✕ + selected pink chip (e.g. High).",
      },
    },
  },
  render: () => {
    const section = byId("sex-drive");
    const opt = section.options.find((o) => o.id === "high");
    return (
      <Pair
        emptyLabel="Empty"
        loggedLabel="Logged"
        empty={
          <DailyLogsSection title={section.title} tone="pink" options={section.options} selectedIds={[]} multi={false} />
        }
        logged={
          <DailyLogsSection title={section.title}>
            <div className="daily-logs-section__logged-row">
              <Button variant="grey" size="medium" icon={closeSmall} iconOnly className="daily-logs-section__clear" aria-label="Clear" />
              <SymptomChip label={opt.label} icon={opt.icon} tone="pink" selected />
            </div>
          </DailyLogsSection>
        }
      />
    );
  },
};

export const BbtEmptyAndLogged = {
  name: "BBT / Empty + Logged",
  parameters: {
    docs: {
      description: {
        story:
          "Empty: helper + Log with InTemp / Log manually. Logged (Figma `675:147442`): ✕ + value·time chip + InTemp caption + same actions.",
      },
    },
  },
  render: () => (
    <Pair
      emptyLabel="Empty"
      loggedLabel="Logged — value chip"
      empty={
        <DailyLogsSection
          title="BBT"
          info
          helper="Your Inito Temp Thermometer automatically logs your BBT data for seamless tracking."
          actions={[
            { id: "inito", label: "Log with InTemp", variant: "primary", icon: bluetoothIcon },
            { id: "manual", label: "Log manually", variant: "grey", icon: editIcon },
          ]}
        />
      }
      logged={
        <DailyLogsSection
          title="BBT"
          info
          helper="Keep track of your Basal Body Temperature here."
          actions={[
            { id: "inito", label: "Log with InTemp", variant: "primary", icon: bluetoothIcon },
            { id: "manual", label: "Log manually", variant: "grey", icon: editIcon },
          ]}
        >
          <div className="daily-logs-section__logged-row">
            <Button variant="grey" size="medium" icon={closeSmall} iconOnly className="daily-logs-section__clear" aria-label="Clear" />
            <SymptomChip label="98.67°F  9:41 AM" icon={bbtIcon} tone="bbt" selected />
          </div>
        </DailyLogsSection>
      }
    />
  ),
};

function ChipGridStory({ id, emptyLabel = "Empty — all unselected", loggedLabel = "Logged — tinted selected" }) {
  const section = byId(id);
  const selected = seed[id] || [];
  return {
    name: `${section.title} / Empty + Logged`,
    parameters: {
      docs: {
        description: {
          story: `${emptyLabel}. ${loggedLabel}. Selected fill tone: \`${section.tone}\`.`,
        },
      },
    },
    render: () => (
      <Pair
        emptyLabel="Empty"
        loggedLabel="Logged"
        empty={
          <DailyLogsSection
            title={section.title}
            tone={section.tone}
            options={section.options}
            selectedIds={[]}
            multi={section.multi !== false}
          />
        }
        logged={
          <DailyLogsSection
            title={section.title}
            tone={section.tone}
            options={section.options}
            selectedIds={selected}
            multi={section.multi !== false}
          />
        }
      />
    ),
  };
}

export const MoodEmptyAndLogged = ChipGridStory({ id: "mood" });
export const SymptomsEmptyAndLogged = ChipGridStory({ id: "symptoms" });
export const AbdominalEmptyAndLogged = ChipGridStory({ id: "abdominal" });
export const DischargeEmptyAndLogged = ChipGridStory({ id: "discharge" });
export const PregnancyTestEmptyAndLogged = {
  name: "Pregnancy Test / Empty + Logged",
  parameters: {
    docs: {
      description: {
        story: "Empty: five options. Logged: ✕ + selected blue chip (e.g. Did not test).",
      },
    },
  },
  render: () => {
    const section = byId("pregnancy-test");
    const opt = section.options.find((o) => o.id === "no-test");
    return (
      <Pair
        emptyLabel="Empty"
        loggedLabel="Logged"
        empty={
          <DailyLogsSection title={section.title} tone="blue" options={section.options} selectedIds={[]} multi={false} />
        }
        logged={
          <DailyLogsSection title={section.title}>
            <div className="daily-logs-section__logged-row">
              <Button variant="grey" size="medium" icon={closeSmall} iconOnly className="daily-logs-section__clear" aria-label="Clear" />
              <SymptomChip label={opt.label} icon={opt.icon} tone="blue" selected />
            </div>
          </DailyLogsSection>
        }
      />
    );
  },
};
export const OtherEmptyAndLogged = ChipGridStory({ id: "other" });
export const ActivityEmptyAndLogged = ChipGridStory({ id: "activity" });
export const InseminationEmptyAndLogged = ChipGridStory({ id: "insemination" });
export const BloodTestsEmptyAndLogged = {
  name: "Blood Test Values / Empty + Logged",
  parameters: {
    docs: {
      description: {
        story:
          "Empty: hormone chips. Logged (Figma `219:131892`): name + value pill; tap opens unit modal (ng/mL / nmol/L) on Daily Logs screen.",
      },
    },
  },
  render: () => {
    const section = byId("blood-tests");
    const e2 = section.options.find((o) => o.id === "e2");
    return (
      <Pair
        emptyLabel="Empty"
        loggedLabel="Logged — Estradiol editing"
        empty={
          <DailyLogsSection
            title={section.title}
            tone={section.tone}
            options={section.options}
            selectedIds={[]}
          />
        }
        logged={
          <DailyLogsSection title={section.title}>
            <div className="daily-logs-blood-block">
              <div className="daily-logs-blood-row">
                <Text as="span" variant="caption-bold-16" className="daily-logs-blood-row__name">
                  {e2.label}
                </Text>
                <SymptomChip label="55 ng/mL" icon={e2.icon} tone="red" selected />
              </div>
            </div>
            <div className="daily-logs-section__chips">
              {section.options
                .filter((o) => o.id !== "e2")
                .map((o) => (
                  <SymptomChip key={o.id} label={o.label} icon={o.icon} tone="red" />
                ))}
            </div>
          </DailyLogsSection>
        }
      />
    );
  },
};

export const FollicleEmpty = {
  name: "Follicle Tracking / Empty",
  parameters: {
    docs: {
      description: {
        story:
          "Figma `682:580559` — Follicle Size helper + Add Follicle Size CTA.",
      },
    },
  },
  render: () => (
    <DailyLogsSection title="Follicle Tracking">
      <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
        Follicle Size
      </Text>
      <div className="daily-logs-section__actions">
        <Button
          className="btn--full"
          size="medium"
          variant="grey"
          icon={follicleSizeIcon}
          iconMono={false}
        >
          Add Follicle Size
        </Button>
      </div>
    </DailyLogsSection>
  ),
};

/** Figma `682:582195` — follicle logged, endometrial CTA, tracks unselected */
export const FolliclePartialSize = {
  name: "Follicle Tracking / Size only",
  parameters: {
    docs: {
      description: {
        story:
          "Figma `682:582195` — incomplete modal save: size chip (Background Tan) + Add Endometrial Thickness + Additional tracks grey.",
      },
    },
  },
  render: () => (
    <DailyLogsSection title="Follicle Tracking">
      <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
        Follicle Size
      </Text>
      <div className="daily-logs-section__logged-row">
        <Button
          variant="grey"
          size="medium"
          icon={closeSmall}
          iconOnly
          className="daily-logs-section__clear"
          aria-label="Clear"
        />
        <SymptomChip label="23 mm" icon={follicleSizeIcon} selected tone="tan" />
      </div>
      <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
        Endometrial Thickness
      </Text>
      <div className="daily-logs-section__actions">
        <Button
          className="btn--full"
          size="medium"
          variant="grey"
          icon={endometrialIcon}
          iconMono={false}
        >
          Add Endometrial Thickness
        </Button>
      </div>
      <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
        Additional tracks
      </Text>
      <div className="daily-logs-section__chips">
        <SymptomChip label="Left Ovary" icon={leftOvaryIcon} tone="tan" />
        <SymptomChip label="Right Ovary" icon={rightOvaryIcon} tone="tan" />
        <SymptomChip label="Fluid in Pod" icon={fluidIcon} tone="tan" />
        <SymptomChip label="LUF Detected" icon={lufIcon} tone="tan" />
      </div>
    </DailyLogsSection>
  ),
};

/** Figma `682:590376` — size + endometrial logged, tracks unselected */
export const FolliclePartialEndo = {
  name: "Follicle Tracking / Size + Endo",
  parameters: {
    docs: {
      description: {
        story:
          "Figma `682:590376` — size + endometrial chips (tan) + Additional tracks unselected.",
      },
    },
  },
  render: () => (
    <DailyLogsSection title="Follicle Tracking">
      <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
        Follicle Size
      </Text>
      <div className="daily-logs-section__logged-row">
        <Button
          variant="grey"
          size="medium"
          icon={closeSmall}
          iconOnly
          className="daily-logs-section__clear"
          aria-label="Clear"
        />
        <SymptomChip label="23 mm" icon={follicleSizeIcon} selected tone="tan" />
      </div>
      <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
        Endometrial Thickness
      </Text>
      <div className="daily-logs-section__logged-row">
        <Button
          variant="grey"
          size="medium"
          icon={closeSmall}
          iconOnly
          className="daily-logs-section__clear"
          aria-label="Clear"
        />
        <SymptomChip label="9.12 mm" icon={endometrialIcon} selected tone="tan" />
      </div>
      <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
        Additional tracks
      </Text>
      <div className="daily-logs-section__chips">
        <SymptomChip label="Left Ovary" icon={leftOvaryIcon} tone="tan" />
        <SymptomChip label="Right Ovary" icon={rightOvaryIcon} tone="tan" />
        <SymptomChip label="Fluid in Pod" icon={fluidIcon} tone="tan" />
        <SymptomChip label="LUF Detected" icon={lufIcon} tone="tan" />
      </div>
    </DailyLogsSection>
  ),
};

/** Figma `682:587103` — size + endo + ovary logged, multi tracks mixed */
export const FollicleLogged = {
  name: "Follicle Tracking / Logged",
  parameters: {
    docs: {
      description: {
        story:
          "Figma `682:587103` — size + endometrial + Left Ovary (✕ rows, tan) + Fluid grey / LUF selected tan.",
      },
    },
  },
  render: () => (
    <DailyLogsSection title="Follicle Tracking">
      <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
        Follicle Size
      </Text>
      <div className="daily-logs-section__logged-row">
        <Button
          variant="grey"
          size="medium"
          icon={closeSmall}
          iconOnly
          className="daily-logs-section__clear"
          aria-label="Clear"
        />
        <SymptomChip label="23 mm" icon={follicleSizeIcon} selected tone="tan" />
      </div>
      <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
        Endometrial Thickness
      </Text>
      <div className="daily-logs-section__logged-row">
        <Button
          variant="grey"
          size="medium"
          icon={closeSmall}
          iconOnly
          className="daily-logs-section__clear"
          aria-label="Clear"
        />
        <SymptomChip label="9.12 mm" icon={endometrialIcon} selected tone="tan" />
      </div>
      <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
        Additional tracks
      </Text>
      <div className="daily-logs-section__logged-row">
        <Button
          variant="grey"
          size="medium"
          icon={closeSmall}
          iconOnly
          className="daily-logs-section__clear"
          aria-label="Clear"
        />
        <SymptomChip label="Left Ovary" icon={leftOvaryIcon} selected tone="tan" />
      </div>
      <div className="daily-logs-section__chips">
        <SymptomChip label="Fluid in Pod" icon={fluidIcon} tone="tan" />
        <SymptomChip label="LUF Detected" icon={lufIcon} selected tone="tan" />
      </div>
    </DailyLogsSection>
  ),
};

/** Overview wall — all empty/logged pairs from Logs cards board */
export const CatalogOverview = {
  name: "Catalog / Overview wall",
  parameters: {
    docs: {
      description: {
        story:
          "Quick scan of Journal + chip categories + Follicle empty/partial. Open per-category stories for full Empty/Logged docs (Figma `212:393875`; Follicle `682:*`).",
      },
    },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 24, background: "#F6F6F6", display: "grid", gridTemplateColumns: "repeat(auto-fill, 342px)", gap: 24 }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <>
      <DailyLogsSection title="Write your journal" journal journalValue="" journalPlaceholder={JOURNAL_EMPTY_PLACEHOLDER} />
      <DailyLogsSection title="Write your journal" journal journalValue={JOURNAL_LOGGED_SAMPLE} />
      {["mood", "symptoms", "abdominal", "discharge", "other", "activity"].map((id) => {
        const section = byId(id);
        return (
          <DailyLogsSection
            key={id}
            title={section.title}
            tone={section.tone}
            options={section.options}
            selectedIds={seed[id] || []}
          />
        );
      })}
      {/* Follicle — empty + size-only (Figma incomplete) for catalog scan */}
      <DailyLogsSection title="Follicle Tracking">
        <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
          Follicle Size
        </Text>
        <div className="daily-logs-section__actions">
          <Button
            className="btn--full"
            size="medium"
            variant="grey"
            icon={follicleSizeIcon}
            iconMono={false}
          >
            Add Follicle Size
          </Button>
        </div>
      </DailyLogsSection>
      <DailyLogsSection title="Follicle Tracking">
        <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
          Follicle Size
        </Text>
        <div className="daily-logs-section__logged-row">
          <Button
            variant="grey"
            size="medium"
            icon={closeSmall}
            iconOnly
            className="daily-logs-section__clear"
            aria-label="Clear"
          />
          <SymptomChip label="23 mm" icon={follicleSizeIcon} selected tone="tan" />
        </div>
        <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
          Endometrial Thickness
        </Text>
        <div className="daily-logs-section__actions">
          <Button
            className="btn--full"
            size="medium"
            variant="grey"
            icon={endometrialIcon}
            iconMono={false}
          >
            Add Endometrial Thickness
          </Button>
        </div>
      </DailyLogsSection>
    </>
  ),
};
