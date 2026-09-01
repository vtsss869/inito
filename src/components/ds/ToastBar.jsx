import { Text } from "./Text.jsx";
import { Button } from "./Button.jsx";
import { MaskIcon } from "./Icon.jsx";

/**
 * Figma DS: "🦠 Toast bar" page, `Toast bar` component (189:1741, 320×56).
 * Re-audited directly against the live node (auto-layout padding/gap,
 * layer visibility, cornerRadius) rather than trusting the previous
 * implementation's assumptions — see design-system-agent's Toast bar pass.
 *
 * Structure, read straight off the node:
 * - Outer: HORIZONTAL auto-layout, padding 12/16 (top-bottom/left-right),
 *   gap 4, children vertically centered. Fill = --text-black.
 *   cornerRadius is **4** (confirmed via direct property read, not the
 *   pill/20px shape the previous version assumed) — added as the
 *   `--radius-4` token (src/styles/tokens.css) since no existing token
 *   covered it.
 * - Optional leading icon, 32×32 — a single-color glyph (renders via the
 *   shared `MaskIcon`, recoloring to the toast's white text) rather than a
 *   one-off <img>.
 * - Message: "Caption 14" / Medium / white — the existing `Text`
 *   `variant="caption-14"` already matches this exactly.
 * - Optional action: in the master component this is a plain `Main Button`
 *   instance (white fill, no stroke, padding 2/12 — i.e. Figma's own
 *   Button/small size) sitting at the trailing edge. Composed here from the
 *   shared `Button` primitive (`size="small" variant="secondary"`) instead
 *   of hand-rolled button markup, so padding/radius/text style stay in
 *   lockstep with every other Button usage in the DS. (The master also
 *   contains a second, hidden "stacked under the text" button placement —
 *   layer debris, not reproduced, matching the note already on the Row
 *   catalog about the same authoring pattern.)
 *
 * Storybook / DS catalog — not wired to Home.
 */
export function ToastBar({
  message = "Toast text",
  icon,
  actionLabel,
  onAction,
  className = "",
}) {
  return (
    <div className={`ds-toast ${className}`.trim()} data-name="Toast bar">
      {icon ? (
        <span className="ds-toast__icon">
          <MaskIcon src={icon} size={32} alt="" />
        </span>
      ) : null}
      <Text as="span" variant="caption-14" color="white" className="ds-toast__text">
        {message}
      </Text>
      {actionLabel ? (
        <Button size="small" variant="secondary" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
