import { Text } from "../Text.jsx";
import { Button } from "../Button.jsx";
import { IconAsset, MaskIcon } from "../Icon.jsx";
import { iconSrc } from "../IconCatalogHelpers.jsx";
import icons32 from "../foundations/icon-data/symptoms-icons-32.json";
import dailyLogCardIcons32 from "../foundations/icon-data/daily-log-card-icons-32.json";
import chevronRight from "../../../assets/icons/chevron-right.svg";
import { DAILY_LOG_CARD_CATEGORIES } from "./dailyLogCardData.js";

/**
 * Figma DS: "Daily logs cards" component set — node 22655:90121, on the
 * "🌸 Cards (Shop, Symptoms, Day status)" canvas, section `Daily logs cards`
 * (22650:20481). 56 variants (category × Logged × Type) across 21 categories —
 * data extracted 1:1 into `dailyLogCardData.js` (see that file's header for the
 * Figma-side noise normalized away — hidden duplicate chip menus, a stray
 * default "Link"/"Abnormal" header text — and for the selected-chip fill-color
 * and icon-pool notes, including a prior mistaken "5 categories are text-only"
 * assumption that a QA pass corrected).
 *
 * Structure (matches Figma's `Copy` header / `.wrapper_symptoms` chip row /
 * detail-line frames / trailing `Main Button` CTA(s), collapsed into one
 * generic renderer since the 56 variants share this shape even though what
 * fills each slot differs wildly per category — free-text journal entries,
 * a medication schedule, follicle-tracking measurements, a BBT reading, or a
 * plain multi-select symptom chip grid):
 *
 * - Header: category title + chevron button
 * - Chips: multi-select option row (unselected = full menu when Logged=no;
 *   selected-only subset when Logged=yes — exactly what Figma shows, chip
 *   visibility was already resolved when the data was extracted). Selected
 *   chips get a solid per-category tint (`cat.selectedFill`), matching Figma —
 *   not a generic grey ring.
 * - Body lines: any remaining free-form detail text (dosage, measurements,
 *   diary copy, timestamps) not already represented by the title/chips/CTA
 * - Actions: trailing Log/Edit/Add button(s)
 */

function normalizeLabel(s) {
  return (s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Chip text on the "Daily logs cards" page occasionally drifts from the matching
// label on the "Symptoms Icons" page (20578:6957) — alias the few known cases so
// the icon lookup below still resolves them.
const CHIP_LABEL_ALIASES = {
  "no discharge": "none",
  "didn't have sex": "no sex",
  illness: "ilness",
};

function lastSegment(name) {
  const parts = name.split("/");
  return parts[parts.length - 1];
}

// Two icon pools: the 22-category "Symptoms Icons" page set (symptoms-icons-32.json), and a
// second pool for the 5 Daily-logs-card-only categories that have their own dedicated per-chip
// icon artwork not present on the Symptoms Icons page (daily-log-card-icons-32.json — see
// dailyLogCardData.js header for how these were found and exported).
const iconsByCategory = [...icons32, ...dailyLogCardIcons32].reduce((acc, icon) => {
  (acc[icon.category] ||= []).push(icon);
  return acc;
}, {});

/** Resolve a Daily-logs-card chip label to its 32px icon asset, if any. */
export function resolveDailyLogChipIcon(iconCategory, label) {
  if (!iconCategory || !label) return null;
  const pool = iconsByCategory[iconCategory];
  if (!pool) return null;
  const key = normalizeLabel(CHIP_LABEL_ALIASES[label.toLowerCase()] || label);
  let match = pool.find((icon) => normalizeLabel(lastSegment(icon.name)) === key);
  if (!match) {
    match = pool.find((icon) => {
      const iconKey = normalizeLabel(lastSegment(icon.name));
      return iconKey && key.length > 2 && (key.includes(iconKey) || iconKey.includes(key));
    });
  }
  return match ? { src: iconSrc(match), w: match.w, h: match.h } : null;
}

function Chip({ label, selected, icon, selectedFill }) {
  const style =
    selected && selectedFill ? { "--daily-log-card-chip-fill": selectedFill } : undefined;
  return (
    <button
      type="button"
      className={
        selected ? "daily-log-card__chip daily-log-card__chip--selected" : "daily-log-card__chip"
      }
      data-name="Symptom Chip"
      style={style}
    >
      {icon ? <IconAsset src={icon.src} w={icon.w} h={icon.h} size={20} /> : null}
      <Text as="span" variant="caption-bold-14">
        {label}
      </Text>
    </button>
  );
}

export function DailyLogCard({
  category = "symptoms",
  logged = "no",
  type,
  className = "",
}) {
  const cat =
    DAILY_LOG_CARD_CATEGORIES.find((c) => c.id === category) ||
    DAILY_LOG_CARD_CATEGORIES[0];
  const variant =
    cat.variants.find(
      (v) => v.logged === logged && (type ? v.type === type : true)
    ) || cat.variants[0];

  return (
    <div
      className={`daily-log-card ${className}`.trim()}
      data-name={`category=${cat.label}, Logged=${variant.logged}, Type=${variant.type}`}
    >
      <div className="daily-log-card__header">
        <Text as="h3" variant="caption-bold-16">
          {variant.title}
        </Text>
        <div className="daily-log-card__header-actions">
          <button type="button" className="daily-log-card__icon-btn" aria-label="More">
            <MaskIcon src={chevronRight} size={32} />
          </button>
        </div>
      </div>

      {variant.chips.length > 0 ? (
        <div className="daily-log-card__chips">
          {variant.chips.map((chip, i) => (
            <Chip
              key={chip.label + i}
              label={chip.label}
              selected={chip.selected}
              icon={resolveDailyLogChipIcon(cat.iconCategory, chip.label)}
              selectedFill={cat.selectedFill}
            />
          ))}
        </div>
      ) : null}

      {variant.bodyLines.length > 0 ? (
        <div className="daily-log-card__body-lines">
          {variant.bodyLines.map((line, i) => (
            <Text key={i} as="p" variant="mini" color="grey">
              {line}
            </Text>
          ))}
        </div>
      ) : null}

      {variant.cta.length > 0 ? (
        <div className="daily-log-card__actions">
          {variant.cta.map((label, i) => (
            <Button
              key={label + i}
              size="medium"
              variant={i === variant.cta.length - 1 && variant.cta.length > 1 ? "grey" : "primary"}
            >
              {label}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
