import { Text } from "../Text.jsx";
import { Button } from "../Button.jsx";

/**
 * Figma DS: modal
 * Centered dialog over dimmed overlay. Exact DS master variants not fully
 * node-resolved in this pass — layout follows library naming + elevation tokens.
 * Storybook catalog — not wired to Home.
 */
export function ModalWindow({
  title = "Title",
  description = "Supporting description for this modal.",
  primaryLabel = "Continue",
  secondaryLabel = "Cancel",
  className = "",
}) {
  return (
    <div className={`ds-modal-stage ${className}`.trim()} data-name="modal">
      <div className="ds-modal-stage__scrim" />
      <div className="ds-modal" role="dialog" aria-modal="true" aria-labelledby="ds-modal-title">
        <Text as="h2" id="ds-modal-title" variant="header-3">
          {title}
        </Text>
        <Text as="p" variant="body" color="grey">
          {description}
        </Text>
        <div className="ds-modal__actions">
          <Button size="medium" variant="secondary">
            <Text as="span" variant="caption-bold-14">
              {secondaryLabel}
            </Text>
          </Button>
          <Button size="medium" variant="primary">
            <Text as="span" variant="caption-bold-14" color="white">
              {primaryLabel}
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
}
