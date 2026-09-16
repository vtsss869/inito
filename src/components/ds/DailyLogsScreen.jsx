import { useEffect, useMemo, useRef, useState } from "react";
import { Navbar } from "./Navbar.jsx";
import { SegmentControl } from "./SegmentControl.jsx";
import { Button } from "./Button.jsx";
import {
  DailyLogsMeta,
  DailyLogsSection,
} from "./catalog/DailyLogsSection.jsx";
import { SymptomChip } from "./catalog/SymptomChip.jsx";
import { Text } from "./Text.jsx";
import { EditDailyLogsScreen } from "./EditDailyLogsScreen.jsx";
import { ModalWindow } from "./catalog/ModalWindow.jsx";
import {
  MedicationLoggedCard,
  MEDICATION_DEMO_ITEMS,
} from "./catalog/MedicationLoggedCard.jsx";
import { FollicleSizeSheet } from "./catalog/FollicleSizeSheet.jsx";
import closeIcon from "../../assets/icons/system/sys-interface-interface-close-m.svg";
import settingsIcon from "../../assets/icons/system/sys-interface-interface-settings.svg";
import calendarIcon from "../../assets/icons/nav-calendar.svg";
import closeSmall from "../../assets/icons/system/sys-interface-interface-close-s.svg";
import bbtIcon from "../../assets/icons/symptoms/32px/symp32-general-general-bbt.svg";
import follicleSizeIcon from "../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-follicle-size.svg";
import endometrialIcon from "../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-endometrial-thickness.svg";
import leftOvaryIcon from "../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-left-ovary.svg";
import rightOvaryIcon from "../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-right-ovary.svg";
import fluidIcon from "../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-fluid-in-pod.svg";
import lufIcon from "../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-luf.svg";
import plusIcon from "../../assets/icons/system/sys-interface-interface-plus.svg";
import {
  DAILY_LOGS_SEGMENT_OPTIONS,
  DAILY_LOGS_TTC_FILLED_SEED,
  getDefaultDailyLogsLayout,
  normalizeDailyLogsLayout,
  sectionsForLayout,
} from "./dailyLogsData.js";

function seedFromProps(initialLogs, variant) {
  if (initialLogs) return initialLogs;
  if (variant === "ttc-filled") return DAILY_LOGS_TTC_FILLED_SEED;
  return null;
}

const BLOOD_UNITS = ["ng/mL", "nmol/L"];
const PREG_POSITIVE_IDS = new Set(["positive", "faint"]);

/** Save shows only after ≥1 chip / journal / BBT / follicle / blood (Figma `211:383822`). */
function hasDailyLogsDraft(
  selections,
  journal,
  bbtValue,
  follicleSizes,
  endometrialThickness,
  bloodValues,
  medicationLogged,
) {
  if (String(journal || "").trim()) return true;
  if (bbtValue) return true;
  if (follicleSizes?.length) return true;
  if (endometrialThickness) return true;
  if (Object.keys(bloodValues || {}).length) return true;
  if (medicationLogged) return true;
  return Object.values(selections || {}).some(
    (ids) => Array.isArray(ids) && ids.length > 0,
  );
}

function scrollSectionToFocus(scroller, sectionEl) {
  if (!scroller || !sectionEl) return false;
  // Not laid out yet — caller will retry.
  if (scroller.clientHeight < 40) return false;
  const pad = 8;
  const delta =
    sectionEl.getBoundingClientRect().top - scroller.getBoundingClientRect().top;
  const target = Math.max(0, scroller.scrollTop + delta - pad);
  scroller.scrollTop = target;
  // Confirm the section is actually in the scrollport (near the top).
  const after =
    sectionEl.getBoundingClientRect().top - scroller.getBoundingClientRect().top;
  return after >= -8 && after < scroller.clientHeight * 0.65;
}

/**
 * Figma Daily logs canvas `128:105483`
 * Variants: `ttc-empty` (212:439067), `ttc-filled` (212:439066)
 *
 * Draft lives in local state. Close (X) → `onClose` (discard).
 * Save → `onSave({ selections, journal, bbtValue })`.
 * Settings → Edit Daily logs (`128:111439`); tap Visible ↔ Hidden (no drag). Layout via `layout` / `onLayoutChange`.
 * Follicle: `FollicleSizeSheet` (keypad, white 70% scrim) → page cards `682:582195` / `590376` / `587103` (tan chips).
 * `focusSectionId` centers that card (Home icon tap).
 * Save CTA: hidden until draft has ≥1 selection (Figma `211:382547` / `211:383822`);
 * when shown, sticky at bottom over scroll (`212:441327`).
 */
export function DailyLogsScreen({
  onClose,
  onSave,
  initialLogs = null,
  focusSectionId = null,
  layout: layoutProp = null,
  onLayoutChange,
  variant = "ttc-empty",
  dateLabel = "2 May 2023",
  cycleLabel = "Cycle Day 13",
  dpoLabel = "DPO 10",
  className = "",
}) {
  const seed = seedFromProps(initialLogs, variant);
  const scrollRef = useRef(null);
  const [editingLayout, setEditingLayout] = useState(false);
  const [layout, setLayout] = useState(() =>
    normalizeDailyLogsLayout(layoutProp || getDefaultDailyLogsLayout()),
  );
  const [segment, setSegment] = useState("all");
  const [selections, setSelections] = useState(
    () => (seed?.selections ? { ...seed.selections } : {}),
  );
  const [journal, setJournal] = useState(() => seed?.journal || "");
  const [bbtValue, setBbtValue] = useState(() => seed?.bbtValue || "");
  const [follicleSizes, setFollicleSizes] = useState(
    () => (seed?.follicleSizes ? [...seed.follicleSizes] : []),
  );
  const [endometrialThickness, setEndometrialThickness] = useState(
    () => seed?.endometrialThickness || "",
  );
  const [bloodValues, setBloodValues] = useState(
    () => (seed?.bloodValues ? { ...seed.bloodValues } : {}),
  );
  const [bloodUnitModal, setBloodUnitModal] = useState(null);
  const [medicationLogged, setMedicationLogged] = useState(
    () => Boolean(seed?.medicationLogged),
  );
  const [medicationItems, setMedicationItems] = useState(() =>
    seed?.medicationItems
      ? structuredClone(seed.medicationItems)
      : structuredClone(MEDICATION_DEMO_ITEMS),
  );
  const [confirmPregnancy, setConfirmPregnancy] = useState(false);
  const [follicleSheet, setFollicleSheet] = useState(false);
  const [follicleTracks, setFollicleTracks] = useState(
    () => (seed?.follicleTracks ? { ...seed.follicleTracks } : { ovary: null, multi: [] }),
  );

  const draftExtra = useMemo(
    () => ({
      follicleSizes,
      endometrialThickness,
      bloodValues,
      medicationLogged,
      follicleTracks,
    }),
    [follicleSizes, endometrialThickness, bloodValues, medicationLogged, follicleTracks],
  );

  const visibleSections = useMemo(
    () =>
      sectionsForLayout(
        layout,
        segment,
        selections,
        journal,
        bbtValue,
        draftExtra,
      ),
    [layout, segment, selections, journal, bbtValue, draftExtra],
  );

  const canSave = useMemo(
    () =>
      hasDailyLogsDraft(
        selections,
        journal,
        bbtValue,
        follicleSizes,
        endometrialThickness,
        bloodValues,
        medicationLogged,
      ),
    [
      selections,
      journal,
      bbtValue,
      follicleSizes,
      endometrialThickness,
      bloodValues,
      medicationLogged,
    ],
  );

  const buildSavePayload = () => ({
    selections: { ...selections },
    journal,
    bbtValue,
    follicleSizes: [...follicleSizes],
    endometrialThickness,
    bloodValues: { ...bloodValues },
    medicationLogged,
    medicationItems: structuredClone(medicationItems),
    follicleTracks: { ...follicleTracks },
  });

  const commitSave = () => {
    onSave?.(buildSavePayload());
  };

  const requestSave = () => {
    const preg = selections["pregnancy-test"] || [];
    if (preg.some((id) => PREG_POSITIVE_IDS.has(id))) {
      setConfirmPregnancy(true);
      return;
    }
    commitSave();
  };

  // Home daily-log icon → open this screen scrolled to that section (once per focus).
  useEffect(() => {
    if (!focusSectionId) return;
    if (segment !== "all") {
      setSegment("all");
      return;
    }

    let cancelled = false;
    let attempts = 0;
    const delays = [0, 32, 80, 160, 280, 450, 700];

    const tryScroll = () => {
      if (cancelled) return;
      const scroller = scrollRef.current;
      const sectionEl = scroller?.querySelector(
        `[data-section-id="${focusSectionId}"]`,
      );
      if (scrollSectionToFocus(scroller, sectionEl)) return;
      attempts += 1;
      if (attempts < delays.length) {
        window.setTimeout(tryScroll, delays[attempts]);
      } else if (sectionEl && scroller) {
        const pad = 8;
        const delta =
          sectionEl.getBoundingClientRect().top -
          scroller.getBoundingClientRect().top;
        scroller.scrollTop = Math.max(0, scroller.scrollTop + delta - pad);
      }
    };

    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(tryScroll);
    });
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(id);
    };
  }, [focusSectionId, segment]);

  const toggleSelection = (sectionId, optionId, multi) => {
    setSelections((prev) => {
      const current = prev[sectionId] || [];
      if (multi === false) {
        const next = current.includes(optionId) ? [] : [optionId];
        return { ...prev, [sectionId]: next };
      }
      const next = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId];
      return { ...prev, [sectionId]: next };
    });
  };

  const clearSection = (sectionId, followups = []) => {
    setSelections((prev) => {
      const next = { ...prev, [sectionId]: [] };
      followups.forEach((f) => {
        next[`${sectionId}__${f.id}`] = [];
      });
      return next;
    });
  };

  const wrapSection = (sectionId, node) => (
    <div key={sectionId} data-section-id={sectionId} className="daily-logs-screen__section">
      {node}
    </div>
  );

  const renderFollowups = (section) => {
    if (!section.followups) return null;
    const primary = selections[section.id] || [];
    if (primary.length === 0 || primary.includes("no-sex")) return null;
    return section.followups.map((group) => (
      <div key={group.id} className="daily-logs-section__nested">
        <Text as="p" variant="mini" color="grey" className="daily-logs-section__subtitle">
          {group.title}
        </Text>
        <div className="daily-logs-section__chips">
          {group.options.map((opt) => (
            <SymptomChip
              key={`${section.id}-${group.id}-${opt.id}`}
              label={opt.label}
              icon={opt.icon}
              tone={section.tone}
              selected={(selections[`${section.id}__${group.id}`] || []).includes(opt.id)}
              onClick={() =>
                toggleSelection(`${section.id}__${group.id}`, opt.id, group.multi !== false)
              }
            />
          ))}
        </div>
      </div>
    ));
  };

  const renderChipSection = (section) => {
    const selected = selections[section.id] || [];
    const isClearableLogged =
      (section.clearable || section.id === "period") &&
      section.multi === false &&
      selected.length > 0;
    const optionsToShow = isClearableLogged
      ? section.options.filter((o) => selected.includes(o.id))
      : section.options;

    return wrapSection(
      section.id,
      <DailyLogsSection
        title={section.title}
        info={section.info}
        helper={section.helper}
        tone={section.tone}
        options={isClearableLogged ? [] : optionsToShow}
        selectedIds={selected}
        multi={section.multi !== false}
        onToggle={(id) => toggleSelection(section.id, id, section.multi !== false)}
        actions={section.actions}
      >
        {isClearableLogged ? (
          <div className="daily-logs-section__logged-row">
            <Button
              variant="grey"
              size="medium"
              icon={closeSmall}
              iconOnly
              className="daily-logs-section__clear"
              aria-label={`Clear ${section.title}`}
              onClick={() => clearSection(section.id, section.followups || [])}
            />
            {optionsToShow.map((opt) => (
              <SymptomChip
                key={opt.id}
                label={opt.label}
                icon={opt.icon}
                tone={section.tone}
                selected
                onClick={() => toggleSelection(section.id, opt.id, false)}
              />
            ))}
          </div>
        ) : null}

        {renderFollowups(section)}

        {section.nested ? (
          <div className="daily-logs-section__nested">
            <Text as="p" variant="mini" color="grey" className="daily-logs-section__subtitle">
              {section.nested.title}
            </Text>
            <div className="daily-logs-section__chips">
              {section.nested.options.map((opt) => (
                <SymptomChip
                  key={`${section.id}-nested-${opt.id}`}
                  label={opt.label}
                  icon={opt.icon}
                  tone={section.tone}
                  selected={(selections[`${section.id}__nested`] || []).includes(opt.id)}
                  onClick={() => toggleSelection(`${section.id}__nested`, opt.id, false)}
                />
              ))}
            </div>
          </div>
        ) : null}
      </DailyLogsSection>,
    );
  };

  if (editingLayout) {
    return (
      <EditDailyLogsScreen
        initialLayout={layout}
        onClose={() => setEditingLayout(false)}
        onSave={(next) => {
          const normalized = normalizeDailyLogsLayout(next);
          setLayout(normalized);
          onLayoutChange?.(normalized);
          setEditingLayout(false);
        }}
      />
    );
  }

  return (
    <div
      className={`daily-logs-screen ${className}`.trim()}
      data-name="Daily logs"
      data-variant={variant}
    >
      <Navbar
        title="Daily logs"
        titleSize="h4"
        align="center"
        back={closeIcon}
        onBackClick={onClose}
        rightIcons={[
          {
            src: settingsIcon,
            label: "Daily logs settings",
            onClick: () => setEditingLayout(true),
          },
        ]}
      />

      <div className="daily-logs-screen__meta">
        <DailyLogsMeta
          dateLabel={dateLabel}
          cycleLabel={cycleLabel}
          dpoLabel={dpoLabel}
          icon={calendarIcon}
        />
      </div>

      <div className="daily-logs-screen__segment">
        <SegmentControl
          options={DAILY_LOGS_SEGMENT_OPTIONS}
          value={segment}
          onChange={setSegment}
        />
      </div>

      <div className="daily-logs-screen__scroll" ref={scrollRef}>
        {visibleSections.map((section) => {
          if (section.kind === "journal") {
            return wrapSection(
              section.id,
              <DailyLogsSection
                title={section.title}
                journal
                journalValue={journal}
                journalPlaceholder={section.journalPlaceholder}
                onJournalChange={setJournal}
              />,
            );
          }

          if (section.id === "bbt") {
            return wrapSection(
              section.id,
              <DailyLogsSection
                title={section.title}
                info={section.info}
                helper={
                  bbtValue
                    ? "Keep track of your Basal Body Temperature here."
                    : section.helper
                }
                actions={section.actions.map((a) =>
                  a.id === "manual"
                    ? {
                        ...a,
                        onClick: () => setBbtValue(bbtValue || "98.67°F"),
                      }
                    : a.id === "inito"
                      ? {
                          ...a,
                          onClick: () => setBbtValue(bbtValue || "98.67°F"),
                        }
                      : a,
                )}
              >
                {bbtValue ? (
                  <div className="daily-logs-section__logged-row">
                    <Button
                      variant="grey"
                      size="medium"
                      icon={closeSmall}
                      iconOnly
                      className="daily-logs-section__clear"
                      aria-label="Clear BBT"
                      onClick={() => setBbtValue("")}
                    />
                    <SymptomChip
                      label={`${bbtValue}  9:41 AM`}
                      icon={bbtIcon}
                      tone="bbt"
                      selected
                    />
                  </div>
                ) : null}
              </DailyLogsSection>,
            );
          }

          if (section.kind === "follicle") {
            const openSheet = () => setFollicleSheet(true);
            const hasFollicle = follicleSizes.length > 0;
            const ovaryId = follicleTracks?.ovary || null;
            const multi = follicleTracks?.multi || [];
            const ovaryMeta =
              ovaryId === "left"
                ? { id: "left", label: "Left Ovary", icon: leftOvaryIcon }
                : ovaryId === "right"
                  ? { id: "right", label: "Right Ovary", icon: rightOvaryIcon }
                  : null;
            return wrapSection(
              section.id,
              <DailyLogsSection title={section.title}>
                <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
                  Follicle Size
                </Text>
                {hasFollicle
                  ? follicleSizes.map((fs) => (
                      <div key={fs.id} className="daily-logs-section__logged-row">
                        <Button
                          variant="grey"
                          size="medium"
                          icon={closeSmall}
                          iconOnly
                          className="daily-logs-section__clear"
                          aria-label={`Clear follicle ${fs.mm} mm`}
                          onClick={() =>
                            setFollicleSizes((prev) => prev.filter((x) => x.id !== fs.id))
                          }
                        />
                        <SymptomChip
                          label={`${fs.mm} mm`}
                          icon={follicleSizeIcon}
                          tone="tan"
                          selected
                          onClick={openSheet}
                        />
                      </div>
                    ))
                  : (
                      <div className="daily-logs-section__actions">
                        <Button
                          className="btn--full"
                          size="medium"
                          variant="grey"
                          icon={follicleSizeIcon}
                          iconMono={false}
                          onClick={openSheet}
                        >
                          Add Follicle Size
                        </Button>
                      </div>
                    )}

                {hasFollicle ? (
                  <>
                    <Text
                      as="p"
                      variant="mini"
                      color="grey"
                      className="daily-logs-section__helper"
                    >
                      Endometrial Thickness
                    </Text>
                    {endometrialThickness ? (
                      <div className="daily-logs-section__logged-row">
                        <Button
                          variant="grey"
                          size="medium"
                          icon={closeSmall}
                          iconOnly
                          className="daily-logs-section__clear"
                          aria-label="Clear endometrial thickness"
                          onClick={() => setEndometrialThickness("")}
                        />
                        <SymptomChip
                          label={endometrialThickness}
                          icon={endometrialIcon}
                          tone="tan"
                          selected
                          onClick={openSheet}
                        />
                      </div>
                    ) : (
                      <div className="daily-logs-section__actions">
                        <Button
                          className="btn--full"
                          size="medium"
                          variant="grey"
                          icon={endometrialIcon}
                          iconMono={false}
                          onClick={openSheet}
                        >
                          Add Endometrial Thickness
                        </Button>
                      </div>
                    )}

                    <Text
                      as="p"
                      variant="mini"
                      color="grey"
                      className="daily-logs-section__helper"
                    >
                      Additional tracks
                    </Text>
                    {ovaryMeta ? (
                      <div className="daily-logs-section__logged-row">
                        <Button
                          variant="grey"
                          size="medium"
                          icon={closeSmall}
                          iconOnly
                          className="daily-logs-section__clear"
                          aria-label="Clear ovary selection"
                          onClick={() =>
                            setFollicleTracks((prev) => ({ ...prev, ovary: null }))
                          }
                        />
                        <SymptomChip
                          label={ovaryMeta.label}
                          icon={ovaryMeta.icon}
                          tone="tan"
                          selected
                        />
                      </div>
                    ) : null}
                    <div className="daily-logs-section__chips">
                      {!ovaryMeta ? (
                        <>
                          <SymptomChip
                            label="Left Ovary"
                            icon={leftOvaryIcon}
                            tone="tan"
                            onClick={() =>
                              setFollicleTracks((prev) => ({ ...prev, ovary: "left" }))
                            }
                          />
                          <SymptomChip
                            label="Right Ovary"
                            icon={rightOvaryIcon}
                            tone="tan"
                            onClick={() =>
                              setFollicleTracks((prev) => ({ ...prev, ovary: "right" }))
                            }
                          />
                        </>
                      ) : null}
                      <SymptomChip
                        label="Fluid in Pod"
                        icon={fluidIcon}
                        tone="tan"
                        selected={multi.includes("fluid")}
                        onClick={() =>
                          setFollicleTracks((prev) => {
                            const cur = prev?.multi || [];
                            const next = cur.includes("fluid")
                              ? cur.filter((x) => x !== "fluid")
                              : [...cur, "fluid"];
                            return { ...prev, multi: next };
                          })
                        }
                      />
                      <SymptomChip
                        label="LUF Detected"
                        icon={lufIcon}
                        tone="tan"
                        selected={multi.includes("luf")}
                        onClick={() =>
                          setFollicleTracks((prev) => {
                            const cur = prev?.multi || [];
                            const next = cur.includes("luf")
                              ? cur.filter((x) => x !== "luf")
                              : [...cur, "luf"];
                            return { ...prev, multi: next };
                          })
                        }
                      />
                    </div>
                  </>
                ) : null}
              </DailyLogsSection>,
            );
          }

          if (section.kind === "blood") {
            return wrapSection(
              section.id,
              <DailyLogsSection title={section.title}>
                <div className="daily-logs-section__chips">
                  {section.options.map((opt) => {
                    const logged = bloodValues[opt.id];
                    if (logged) {
                      const invalid = Number(logged.value) > 100 || Number(logged.value) < 0;
                      return (
                        <div key={opt.id} className="daily-logs-blood-block">
                          <div className="daily-logs-blood-row">
                            <Text
                              as="span"
                              variant="caption-bold-16"
                              className="daily-logs-blood-row__name"
                            >
                              {opt.label}
                            </Text>
                            <button
                              type="button"
                              className="daily-logs-blood-row__value"
                              onClick={() => setBloodUnitModal(opt.id)}
                            >
                              <SymptomChip
                                label={`${logged.value} ${logged.unit}`}
                                icon={opt.icon}
                                tone="red"
                                selected
                              />
                            </button>
                            <Button
                              variant="grey"
                              size="medium"
                              icon={closeSmall}
                              iconOnly
                              className="daily-logs-section__clear"
                              aria-label={`Clear ${opt.label}`}
                              onClick={() =>
                                setBloodValues((prev) => {
                                  const next = { ...prev };
                                  delete next[opt.id];
                                  return next;
                                })
                              }
                            />
                          </div>
                          {invalid ? (
                            <Text as="p" variant="mini" className="daily-logs-blood-error">
                              Invalid entry. Enter a value between 0ng/mL - 100ng/mL.
                            </Text>
                          ) : null}
                        </div>
                      );
                    }
                    return (
                      <SymptomChip
                        key={opt.id}
                        label={opt.label}
                        icon={opt.icon}
                        tone={section.tone}
                        onClick={() => {
                          setBloodValues((prev) => ({
                            ...prev,
                            [opt.id]: { value: "55", unit: "ng/mL" },
                          }));
                          setBloodUnitModal(opt.id);
                        }}
                      />
                    );
                  })}
                </div>
              </DailyLogsSection>,
            );
          }

          if (section.id === "medication") {
            if (medicationLogged) {
              return wrapSection(
                section.id,
                <MedicationLoggedCard
                  items={medicationItems}
                  onDoseChange={(medId, doseId, status) => {
                    setMedicationItems((prev) =>
                      prev.map((med) =>
                        med.id !== medId
                          ? med
                          : {
                              ...med,
                              doses: med.doses.map((d) =>
                                d.id === doseId ? { ...d, status } : d,
                              ),
                            },
                      ),
                    );
                  }}
                  onAdd={() => setMedicationLogged(true)}
                />,
              );
            }
            return wrapSection(
              section.id,
              <DailyLogsSection
                title={section.title}
                info={section.info}
                actions={section.actions.map((a) =>
                  a.id === "add-med"
                    ? {
                        ...a,
                        icon: plusIcon,
                        className: "daily-logs-section__action-add",
                        onClick: () => setMedicationLogged(true),
                      }
                    : a,
                )}
              />,
            );
          }

          if (section.kind === "actions") {
            return wrapSection(
              section.id,
              <DailyLogsSection
                title={section.title}
                info={section.info}
                helper={section.helper}
                actions={section.actions}
              />,
            );
          }

          return renderChipSection(section);
        })}
      </div>

      {canSave ? (
        <div className="daily-logs-screen__save" data-name="Button">
          <Button
            className="btn--full"
            size="large"
            variant="primary"
            onClick={requestSave}
          >
            Save
          </Button>
        </div>
      ) : null}

      {follicleSheet ? (
        <FollicleSizeSheet
          onBack={() => setFollicleSheet(false)}
          onConfirm={(data) => {
            if (data.follicleMm != null) {
              setFollicleSizes((prev) => [
                ...prev,
                { id: `fs-${Date.now()}`, mm: data.follicleMm },
              ]);
            }
            if (data.endometrialMm != null) {
              setEndometrialThickness(`${data.endometrialMm} mm`);
            }
            setFollicleTracks({
              ovary: data.ovary || null,
              multi: data.tracks || [],
            });
            setFollicleSheet(false);
          }}
        />
      ) : null}

      {bloodUnitModal ? (
        <ModalWindow
          title="Select unit"
          description="Choose the unit for this blood test value."
          buttonsLayout="2-rows"
          primaryLabel={BLOOD_UNITS[0]}
          secondaryLabel={BLOOD_UNITS[1]}
          onPrimary={() => {
            setBloodValues((prev) => ({
              ...prev,
              [bloodUnitModal]: {
                value: prev[bloodUnitModal]?.value || "55",
                unit: BLOOD_UNITS[0],
              },
            }));
            setBloodUnitModal(null);
          }}
          onSecondary={() => {
            setBloodValues((prev) => ({
              ...prev,
              [bloodUnitModal]: {
                value: prev[bloodUnitModal]?.value || "55",
                unit: BLOOD_UNITS[1],
              },
            }));
            setBloodUnitModal(null);
          }}
          onDismiss={() => setBloodUnitModal(null)}
        />
      ) : null}

      {confirmPregnancy ? (
        <ModalWindow
          title="Confirm pregnancy"
          description="Inito is here to help you track every step of your journey. We highly recommend that you switch your app goal from ‘Track cycles’ to ‘Track pregnancy’."
          buttonsLayout="2-rows"
          primaryLabel="Confirm pregnancy"
          secondaryLabel="Keep logging as usual"
          onPrimary={() => {
            setConfirmPregnancy(false);
            commitSave();
          }}
          onSecondary={() => {
            setConfirmPregnancy(false);
            commitSave();
          }}
          onDismiss={() => setConfirmPregnancy(false)}
        />
      ) : null}
    </div>
  );
}
