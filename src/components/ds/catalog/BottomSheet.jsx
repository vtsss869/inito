import { Text } from "../Text.jsx";
import { Button } from "../Button.jsx";

/**
 * Figma DS: futor (bottom sheet)
 * Library component key exists; full variant matrix not fully sampled from a
 * master node in this pass. Implements the common sheet chrome for Storybook.
 * Storybook catalog — not wired to Home.
 */
export function BottomSheet({
  title = "Title",
  description = "Bottom sheet content.",
  primaryLabel = "Done",
  className = "",
}) {
  return (
    <div className={`ds-sheet-stage ${className}`.trim()} data-name="futor">
      <div className="ds-sheet-stage__scrim" />
      <div className="ds-sheet" role="dialog" aria-modal="true">
        <div className="ds-sheet__handle" aria-hidden="true" />
        <Text as="h2" variant="header-3">
          {title}
        </Text>
        <Text as="p" variant="body" color="grey">
          {description}
        </Text>
        <div className="ds-sheet__actions">
          <Button size="large" variant="primary" className="ds-sheet__primary">
            <Text as="span" variant="caption-bold-16" color="white">
              {primaryLabel}
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
}
