import { Text } from "../Text.jsx";
import { MaskIcon } from "../Icon.jsx";
import glassesIcon from "../../../assets/icons/system/sys-interface-interface-anonymous-glasses.svg";
import pencilIcon from "../../../assets/icons/system/sys-interface-interface-pencil.svg";

/**
 * Figma "Community (App)" file (fileKey LLjQAqluK9e7WtuV3HNUK7), UI KIT
 * canvas, "Community kit" section — member avatar, consolidated from three
 * places that all render the same 32×32 circular slot:
 *  - "Section 3" (node 3833:273282) `icon profile` component (Property
 *    1=name) — 8-color initial-letter fallback, each color shown as a
 *    "solid" (colored bg / white letter) and "soft" (light bg / colored
 *    letter) row. Colors read directly off the node's fills (this file
 *    publishes no Figma Variables) — see --avatar-1..8-bg/text in
 *    src/styles/tokens.css.
 *  - "Main feed" (node 2:7881) member rail and "Post types" (node 2:8558)
 *    post header — real member photo, and an "Anonymous member" glasses
 *    icon avatar (no matching published component/icon found via REST
 *    search — approximated as a new flat-line glyph,
 *    sys-interface-interface-anonymous-glasses.svg, matching the existing
 *    Interface icon stroke style rather than 1:1 traced from Figma).
 *  - "New post" profile kit (node 86:21841) — an editable-avatar state
 *    (small white pencil badge, bottom-right) used on the user's own
 *    profile card.
 *  - Main feed member rail also shows a small red "unread" dot, top-right.
 *
 * `photo` is a real <img> (multi-color/illustrative), never mask-recolored.
 */
const COLOR_COUNT = 8;

export function Avatar({
  variant = "initial",
  photo,
  alt = "",
  initial = "V",
  colorIndex = 1,
  tone = "solid",
  size = 32,
  unread = false,
  editable = false,
  className = "",
}) {
  const clampedColor = ((((colorIndex - 1) % COLOR_COUNT) + COLOR_COUNT) % COLOR_COUNT) + 1;

  let body;
  if (variant === "photo" && photo) {
    body = (
      <img
        className="ds-avatar__img"
        src={photo}
        alt={alt}
        width={size}
        height={size}
      />
    );
  } else if (variant === "anonymous") {
    body = (
      <span className="ds-avatar__anonymous" data-name="Anonymous">
        <MaskIcon src={glassesIcon} size={Math.round(size * 0.56)} alt="" />
      </span>
    );
  } else {
    body = (
      <span
        className={`ds-avatar__initial ds-avatar__initial--${tone}`}
        data-name="Profile Initial"
        style={{
          background: `var(--avatar-${clampedColor}-bg)`,
          color: tone === "soft" ? `var(--avatar-${clampedColor}-text)` : "#ffffff",
        }}
      >
        <Text as="span" variant="caption-bold-16" color="current">
          {initial}
        </Text>
      </span>
    );
  }

  return (
    <span
      className={`ds-avatar ${className}`.trim()}
      data-name="Avatar"
      style={{ width: size, height: size }}
    >
      {body}
      {unread ? <span className="ds-avatar__unread-dot" aria-hidden="true" /> : null}
      {editable ? (
        <span className="ds-avatar__edit-badge" aria-hidden="true">
          <MaskIcon src={pencilIcon} size={14} alt="" />
        </span>
      ) : null}
    </span>
  );
}

export const AVATAR_COLOR_COUNT = COLOR_COUNT;
