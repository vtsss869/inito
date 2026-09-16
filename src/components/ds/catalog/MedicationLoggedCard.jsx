import { Text } from "../Text.jsx";
import { Button } from "../Button.jsx";
import { MaskIcon } from "../Icon.jsx";
import settingsIcon from "../../../assets/icons/system/sys-interface-interface-settings.svg";
import plusIcon from "../../../assets/icons/system/sys-interface-interface-plus.svg";
import checkIcon from "../../../assets/icons/system/sys-interface-interface-check-small.svg";
import closeSmall from "../../../assets/icons/system/sys-interface-interface-close-s.svg";
import chevronRight from "../../../assets/icons/chevron-right.svg";
import tabletIcon from "../../../assets/icons/symptoms/32px/symp32-medication-new-med-tablet.svg";
import dropsIcon from "../../../assets/icons/symptoms/32px/symp32-medication-new-med-drops.svg";

/** Demo schedule matching Figma `679:159800` / Taken `679:160055`. */
export const MEDICATION_DEMO_ITEMS = [
  {
    id: "gripex-max",
    name: "Gripex Max",
    form: "Tablets",
    icon: tabletIcon,
    iconTone: "blue",
    doses: [
      { id: "gm-1300", label: "1 capsule at 13:00", status: "taken" },
      { id: "gm-2300", label: "1,5 capsules at 23:00", status: "skipped" },
    ],
  },
  {
    id: "gripex",
    name: "Gripex",
    form: "Drops, 200mg",
    icon: dropsIcon,
    iconTone: "violet",
    doses: [{ id: "g-1015", label: "10 drops at 10:15", status: null }],
  },
];

/**
 * Figma Medication logged (`679:159800`) / Taken selected (`679:160055`).
 * Schedule cards with Skipped / Taken toggles + Add new medication CTA.
 */
export function MedicationLoggedCard({
  items = MEDICATION_DEMO_ITEMS,
  onDoseChange,
  onAdd,
  onSettings,
  className = "",
}) {
  const setDose = (medId, doseId, status) => {
    onDoseChange?.(medId, doseId, status);
  };

  return (
    <section
      className={`daily-logs-section med-logged ${className}`.trim()}
      data-name="Daily Logs Cards"
    >
      <div className="daily-logs-section__header">
        <Text as="h2" variant="caption-bold-16" className="daily-logs-section__title">
          Medication
        </Text>
        <div className="daily-logs-section__header-actions">
          <Button
            variant="transparent"
            size="medium"
            icon={settingsIcon}
            iconOnly
            className="daily-logs-section__info"
            aria-label="Medication settings"
            onClick={onSettings}
          />
        </div>
      </div>

      <div className="med-logged__list">
        {items.map((med) => (
          <div key={med.id} className="med-logged__card" data-name="Medication item">
            <div className="med-logged__head">
              <span
                className={`med-logged__icon med-logged__icon--${med.iconTone || "blue"}`}
              >
                <img src={med.icon} alt="" width={32} height={32} />
              </span>
              <div className="med-logged__titles">
                <Text as="p" variant="caption-bold-16">
                  {med.name}
                </Text>
                <Text as="p" variant="mini" color="grey">
                  {med.form}
                </Text>
              </div>
            </div>

            {med.doses.map((dose) => (
              <div key={dose.id} className="med-logged__dose">
                <button type="button" className="med-logged__dose-label">
                  <Text as="span" variant="caption-14">
                    {dose.label}
                  </Text>
                  <MaskIcon src={chevronRight} size={16} />
                </button>
                <div className="med-logged__dose-actions">
                  <button
                    type="button"
                    className={[
                      "med-logged__status",
                      dose.status === "skipped" ? "med-logged__status--skipped" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-pressed={dose.status === "skipped"}
                    onClick={() =>
                      setDose(
                        med.id,
                        dose.id,
                        dose.status === "skipped" ? null : "skipped",
                      )
                    }
                  >
                    <MaskIcon src={closeSmall} size={16} />
                    <Text as="span" variant="mini-semibold">
                      Skipped
                    </Text>
                  </button>
                  <button
                    type="button"
                    className={[
                      "med-logged__status",
                      dose.status === "taken" ? "med-logged__status--taken" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-pressed={dose.status === "taken"}
                    onClick={() =>
                      setDose(med.id, dose.id, dose.status === "taken" ? null : "taken")
                    }
                  >
                    <MaskIcon src={checkIcon} size={16} />
                    <Text as="span" variant="mini-semibold">
                      Taken
                    </Text>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="daily-logs-section__actions">
        <Button
          className="btn--full daily-logs-section__action-add"
          size="medium"
          variant="grey"
          icon={plusIcon}
          onClick={onAdd}
        >
          Add new medication
        </Button>
      </div>
    </section>
  );
}
