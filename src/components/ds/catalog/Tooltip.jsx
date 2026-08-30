import { Text } from "../Text.jsx";
import { Button } from "../Button.jsx";
import { CarouselDots } from "./CarouselDots.jsx";

/**
 * Figma DS: tooltip
 * radius 8 · Card elevation shadow · pointer up/down
 * amount=one → Dismiss + Okay; amount=multiple → Back / Dots / Next
 * Storybook catalog — not wired to Home.
 */
export function Tooltip({
  title = "Title",
  description = "Description text for the tooltip.",
  amount = "one",
  pointer = "down",
  activeDot = 0,
  dots = 3,
  className = "",
}) {
  return (
    <div className={`ds-tooltip ds-tooltip--${pointer} ${className}`.trim()} data-name="tooltip">
      <div className="ds-tooltip__card">
        <div className="ds-tooltip__copy">
          <Text as="p" variant="caption-bold-16">
            {title}
          </Text>
          <Text as="p" variant="caption-14">
            {description}
          </Text>
        </div>
        {amount === "multiple" ? (
          <div className="ds-tooltip__nav">
            <button type="button" className="ds-tooltip__link">
              <Text as="span" variant="caption-bold-14">
                Back
              </Text>
            </button>
            <CarouselDots count={dots} active={activeDot} />
            <button type="button" className="ds-tooltip__link">
              <Text as="span" variant="caption-bold-14">
                Next
              </Text>
            </button>
          </div>
        ) : (
          <div className="ds-tooltip__actions">
            <Button size="small" variant="secondary">
              <Text as="span" variant="caption-bold-14">
                Dismiss
              </Text>
            </Button>
            <Button size="small" variant="primary">
              <Text as="span" variant="caption-bold-14" color="white">
                Okay
              </Text>
            </Button>
          </div>
        )}
      </div>
      <span className="ds-tooltip__pointer" aria-hidden="true" />
    </div>
  );
}
