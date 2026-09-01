import { Text } from "../Text.jsx";
import { Button } from "../Button.jsx";
import { CarouselDots } from "./CarouselDots.jsx";

/**
 * Figma DS: tooltip
 * radius 8 · Card elevation shadow · pointer up/down
 * amount=one → Dismiss + Okay; amount=multiple → Back / Dots / Next
 * Figma booleans Show Title / Show image / Show description / Show Buttons
 * map to `showTitle` / `image` / `showDescription` / `showButtons` below.
 * Storybook catalog — not wired to Home.
 */
export function Tooltip({
  title = "Title",
  description = "Description text for the tooltip.",
  amount = "one",
  pointer = "down",
  activeDot = 0,
  dots = 3,
  showTitle = true,
  showDescription = true,
  showButtons = true,
  image,
  className = "",
}) {
  return (
    <div className={`ds-tooltip ds-tooltip--${pointer} ${className}`.trim()} data-name="tooltip">
      <div className="ds-tooltip__card">
        {image ? (
          <div className="ds-tooltip__image">
            <img src={image} alt="" width={48} height={48} />
          </div>
        ) : null}
        <div className="ds-tooltip__copy">
          {showTitle ? (
            <Text as="p" variant="caption-bold-16">
              {title}
            </Text>
          ) : null}
          {showDescription ? (
            <Text as="p" variant="caption-14">
              {description}
            </Text>
          ) : null}
        </div>
        {showButtons ? (
          amount === "multiple" ? (
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
                Dismiss
              </Button>
              <Button size="small" variant="primary">
                Okay
              </Button>
            </div>
          )
        ) : null}
      </div>
      <span className="ds-tooltip__pointer" aria-hidden="true" />
    </div>
  );
}
