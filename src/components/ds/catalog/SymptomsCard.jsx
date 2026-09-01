import { Text } from "../Text.jsx";
import { MaskIcon } from "../Icon.jsx";
import logSymptoms from "../../../assets/icons/log-symptoms.svg";
import logMoods from "../../../assets/icons/log-moods.svg";
import logMeds from "../../../assets/icons/log-meds.svg";
import chevronRight from "../../../assets/icons/chevron-right.svg";

/**
 * Figma DS: Symptoms Card
 * 342 wide · radius 24 · border grey · p-8 · symptom pill buttons
 * Storybook catalog — not wired to Home.
 */
const DEFAULT_PILLS = [
  { id: "none", label: "None", icon: logSymptoms, selected: true },
  { id: "cramps", label: "Cramps", icon: logSymptoms, selected: false },
  { id: "headache", label: "Headache", icon: logMoods, selected: false },
  { id: "nausea", label: "Nausea", icon: logMeds, selected: false },
];

export function SymptomsCard({
  title = "Symptoms",
  pills = DEFAULT_PILLS,
  helper = "Select all that apply",
  className = "",
}) {
  return (
    <div className={`symptoms-card ${className}`.trim()} data-name="Symptoms Card">
      <div className="symptoms-card__header">
        <Text as="h3" variant="caption-bold-16">
          {title}
        </Text>
        <div className="symptoms-card__header-actions">
          <button type="button" className="symptoms-card__icon-btn" aria-label="More">
            <MaskIcon src={chevronRight} size={32} alt="" />
          </button>
        </div>
      </div>
      <div className="symptoms-card__body">
        {pills.map((p) => (
          <button
            key={p.id}
            type="button"
            className={
              p.selected
                ? "symptoms-card__pill symptoms-card__pill--selected"
                : "symptoms-card__pill"
            }
            data-name="Symptoms Button"
          >
            <img src={p.icon} alt="" width={32} height={32} />
            <Text as="span" variant="caption-bold-14">
              {p.label}
            </Text>
          </button>
        ))}
      </div>
      {helper ? (
        <Text as="p" variant="mini" color="grey" className="symptoms-card__helper">
          {helper}
        </Text>
      ) : null}
    </div>
  );
}
