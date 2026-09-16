import { Text } from "../Text.jsx";
import { Button } from "../Button.jsx";
import chevronRight from "../../../assets/icons/chevron-right.svg";

const ACTIONS_CLASS = {
  "1-row": "",
  "2-rows": "ds-modal__actions--stack-2",
  "3-rows": "ds-modal__actions--stack-3",
  icon: "ds-modal__actions--icon",
};

/**
 * Figma DS: "Modal Window" page — `modal` component set
 * (Type=Default/picker; boolean slots: title / description / items).
 * `buttonsLayout` mirrors the page's `Buttons` set
 * (Type=1 raw/2 raws/3 raws/Icon — "raw" = row of stacked action buttons).
 * Centered dialog over a dimmed overlay.
 * Storybook catalog — not wired to Home.
 */
export function ModalWindow({
  title = "Title",
  description = "Supporting description for this modal.",
  showTitle = true,
  showDescription = true,
  buttonsLayout = "1-row",
  primaryLabel = "Continue",
  secondaryLabel = "Cancel",
  tertiaryLabel = "Not now",
  onPrimary,
  onSecondary,
  onTertiary,
  onDismiss,
  className = "",
}) {
  return (
    <div className={`ds-modal-stage ${className}`.trim()} data-name="modal">
      <button
        type="button"
        className="ds-modal-stage__scrim"
        aria-label="Dismiss"
        onClick={onDismiss || onSecondary}
      />
      <div className="ds-modal" role="dialog" aria-modal="true" aria-labelledby="ds-modal-title">
        {showTitle ? (
          <Text as="h2" id="ds-modal-title" variant="header-3">
            {title}
          </Text>
        ) : null}
        {showDescription ? (
          <Text as="p" variant="body" color="grey">
            {description}
          </Text>
        ) : null}
        <div className={`ds-modal__actions ${ACTIONS_CLASS[buttonsLayout] ?? ""}`.trim()}>
          {buttonsLayout === "icon" ? (
            <Button
              size="medium"
              variant="secondary"
              icon={chevronRight}
              iconOnly
              aria-label="Close"
              onClick={onDismiss || onSecondary}
            />
          ) : buttonsLayout === "3-rows" ? (
            <>
              <Button size="large" variant="primary" onClick={onPrimary}>
                {primaryLabel}
              </Button>
              <Button size="large" variant="secondary" onClick={onSecondary}>
                {secondaryLabel}
              </Button>
              <Button size="large" variant="transparent" onClick={onTertiary}>
                {tertiaryLabel}
              </Button>
            </>
          ) : buttonsLayout === "2-rows" ? (
            <>
              <Button size="large" variant="primary" onClick={onPrimary}>
                {primaryLabel}
              </Button>
              <Button size="large" variant="secondary" onClick={onSecondary}>
                {secondaryLabel}
              </Button>
            </>
          ) : (
            <>
              <Button size="medium" variant="secondary" onClick={onSecondary}>
                {secondaryLabel}
              </Button>
              <Button size="medium" variant="primary" onClick={onPrimary}>
                {primaryLabel}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
