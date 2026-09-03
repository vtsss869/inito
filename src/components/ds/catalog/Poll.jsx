import { Text } from "../Text.jsx";
import { Checkbox } from "../Checkbox.jsx";
import { MaskIcon } from "../Icon.jsx";
import chevronRight from "../../../assets/icons/system/sys-calendar-pictograms-interface-community-chevron-right-small.svg";

/**
 * Figma "Community (App)" file (fileKey LLjQAqluK9e7WtuV3HNUK7), UI KIT
 * canvas, "Community kit" → "Post types" (node 2:8558) poll swatches and
 * "New post" (node 33:13087) poll builder. Each option row shows a
 * percent-filled background bar behind the label once results are visible
 * (`showResults`); reuses the existing DS Checkbox for the selectable
 * control rather than a new custom control.
 * Storybook / DS catalog — not wired to Home.
 */
export function Poll({
  options = [
    { id: "1", label: "Ovulation kits", percent: 4 },
    { id: "2", label: "Inito", percent: 96 },
  ],
  selectedId,
  onSelect,
  voters = 10,
  showResults = true,
  className = "",
}) {
  return (
    <div className={`ds-poll ${className}`.trim()} data-name="Poll">
      <div className="ds-poll__options">
        {options.map((opt) => {
          const selected = opt.id === selectedId;
          return (
            <div
              key={opt.id}
              className="ds-poll__option"
              data-selected={selected || undefined}
            >
              {showResults ? (
                <span
                  className="ds-poll__fill"
                  style={{ width: `${Math.max(0, Math.min(100, opt.percent ?? 0))}%` }}
                  aria-hidden="true"
                />
              ) : null}
              <span className="ds-poll__option-content">
                <span className="ds-poll__option-left">
                  <Checkbox
                    checked={selected}
                    onChange={() => onSelect && onSelect(opt.id)}
                    aria-label={opt.label}
                  />
                  <Text as="span" variant="tc-body-13-semibold" color="black">
                    {opt.label}
                  </Text>
                </span>
                <span className="ds-poll__option-right">
                  {showResults ? (
                    <Text as="span" variant="tc-body-13-semibold" color="black">
                      {opt.percent}%
                    </Text>
                  ) : null}
                  <MaskIcon src={chevronRight} size={16} alt="" />
                </span>
              </span>
            </div>
          );
        })}
      </div>
      {showResults ? (
        <Text as="p" variant="tc-caption-11" color="grey" className="ds-poll__voters">
          {voters} voters
        </Text>
      ) : null}
    </div>
  );
}
