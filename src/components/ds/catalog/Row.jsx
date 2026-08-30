import { Text } from "../Text.jsx";
import { Toggle } from "../Toggle.jsx";
import { Button } from "../Button.jsx";
import chevronRight from "../../../assets/icons/chevron-right.svg";

/**
 * Figma DS: Item / Row (list item)
 * Types: Text | Icon Text | Toogle | IconTextText | Icon text Button | Text + Item | Table
 * Storybook catalog — not wired to Home.
 */
export function Row({
  type = "text",
  title,
  label = "Label",
  description,
  icon,
  checked = false,
  onToggle,
  buttonLabel = "Go to shop",
  nestedLabel = "Change term",
  className = "",
}) {
  return (
    <div className={`ds-row ${className}`.trim()} data-name="Item">
      {type === "icon-text" || type === "icon-text-text" || type === "icon-text-button" ? (
        <span className="ds-row__leading-icon">
          {icon ? <img src={icon} alt="" width={32} height={32} /> : null}
        </span>
      ) : null}

      <div className="ds-row__body">
        {title ? (
          <Text as="span" variant="caption-16" className="ds-row__title">
            {title}
          </Text>
        ) : null}
        <Text as="span" variant="caption-bold-16" color="black">
          {label}
        </Text>
        {description ? (
          <Text as="span" variant="mini" color="grey">
            {description}
          </Text>
        ) : null}
        {type === "text-item" ? (
          <div className="ds-row__nested" data-name="Item">
            <Text as="span" variant="caption-bold-16">
              {nestedLabel}
            </Text>
            <img src={chevronRight} alt="" width={32} height={32} />
          </div>
        ) : null}
        {type === "icon-text-button" ? (
          <div className="ds-row__cta">
            <Button size="medium" variant="primary">
              <Text as="span" variant="caption-bold-14" color="white">
                {buttonLabel}
              </Text>
            </Button>
          </div>
        ) : null}
        {type === "table" ? (
          <div className="ds-row__table">
            <Text as="span" variant="mini" color="grey">
              Date
            </Text>
            <Text as="span" variant="mini" color="grey">
              Time
            </Text>
            <Text as="span" variant="mini" color="grey">
              Fertility level
            </Text>
          </div>
        ) : null}
      </div>

      {type === "toggle" ? (
        <Toggle checked={checked} onChange={onToggle} aria-label={label} />
      ) : type === "text" || type === "icon-text" || type === "icon-text-text" ? (
        <button type="button" className="ds-row__chevron" aria-label="Open">
          <img src={chevronRight} alt="" width={32} height={32} />
        </button>
      ) : null}
    </div>
  );
}
