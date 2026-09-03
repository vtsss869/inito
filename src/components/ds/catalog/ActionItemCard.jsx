import { Text } from "../Text.jsx";
import { MaskIcon } from "../Icon.jsx";
import copyIcon from "../../../assets/icons/system/sys-interface-interface-copy-small.svg";
import chevronDown from "../../../assets/icons/system/sys-calendar-pictograms-interface-small-chevron-down.svg";

/**
 * Figma "Community (App)" file (fileKey LLjQAqluK9e7WtuV3HNUK7), UI KIT
 * canvas, "Community kit" → "Item" (node 5156:218582) — the moderation
 * "Limited activity" action-item card (Admins & Moderation canvas uses it
 * for a member's applied restriction). White card, radius 20, grey border;
 * title + copyable ID on the left, a status pill + chevron on the right,
 * then an optional date range and description row. Built from the same
 * icon/Text primitives as Row.jsx rather than a new visual language.
 * Toggle sub-parts via `showStatus` / `showDateRange` / `showDescription` /
 * `showNameAndDate`, matching the Figma component's own boolean properties
 * (`Show status#5156:0`, `date#5156:1`, `Show Action Item Description#5156:2`,
 * `Show name & date#5160:3` — the last one hides the title + copyable-ID row).
 * Storybook / DS catalog — not wired to Home.
 */
export function ActionItemCard({
  title = "Limited activity",
  id = "12345",
  onCopyId,
  status = "Inactive",
  onStatusClick,
  dateRange = "26.06.2025 - 03.07.2025",
  description = "1 post per day & 3 comments per day",
  showStatus = true,
  showDateRange = true,
  showDescription = true,
  showNameAndDate = true,
  className = "",
}) {
  return (
    <div className={`ds-action-item ${className}`.trim()} data-name="Item">
      <div className="ds-action-item__header" data-name="Action Item Header">
        {showNameAndDate ? (
          <div className="ds-action-item__title" data-name="Frame 2147214758">
            <Text as="span" variant="tc-body-14-semibold" color="black">
              {title}
            </Text>
            <button
              type="button"
              className="ds-action-item__id"
              onClick={onCopyId}
              aria-label={`Copy ID ${id}`}
            >
              <Text as="span" variant="tc-caption-11" color="grey">
                ID {id}
              </Text>
              <MaskIcon src={copyIcon} size={16} alt="" />
            </button>
          </div>
        ) : null}
        {showStatus ? (
          <button type="button" className="ds-action-item__status" onClick={onStatusClick}>
            <span className="ds-action-item__status-pill">
              <Text as="span" variant="tc-caption-11" color="grey">
                {status}
              </Text>
            </span>
            <MaskIcon src={chevronDown} size={16} alt="" />
          </button>
        ) : null}
      </div>
      {showDateRange ? (
        <div className="ds-action-item__date" data-name="Date Range">
          <Text as="span" variant="tc-caption-11" color="grey">
            {dateRange}
          </Text>
        </div>
      ) : null}
      {showDescription ? (
        <div className="ds-action-item__description">
          <Text as="span" variant="tc-caption-11" color="black">
            {description}
          </Text>
        </div>
      ) : null}
    </div>
  );
}
