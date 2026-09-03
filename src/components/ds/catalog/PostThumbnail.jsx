import { MaskIcon } from "../Icon.jsx";
import heartFilled from "../../../assets/icons/system/sys-interface-interface-heart-filled.svg";
import commentIcon from "../../../assets/icons/system/sys-interface-interface-message-chat-circle.svg";
import pollIcon from "../../../assets/icons/system/sys-interface-interface-poll.svg";
import followIcon from "../../../assets/icons/system/sys-interface-interface-plus-circle.svg";

/**
 * Figma "Community (App)" file (fileKey LLjQAqluK9e7WtuV3HNUK7), UI KIT
 * canvas, "Community kit" → "notif photo" component set (node 5836:223809,
 * variants `photo count` × `photo`). Small circular preview of the post a
 * notification refers to ("X liked your post"), with a colored type-icon
 * badge overlaid bottom-left; `photo=2` overlaps a second circle behind it.
 * No "follow" icon exists in the DS icon set — approximated with the
 * existing "Interface/Plus-circle" glyph rather than inventing a new asset.
 * `photo`/`photos` are real <img>s (illustrative), never mask-recolored.
 * Storybook / DS catalog — not wired to Home.
 */
const TYPE_META = {
  like: { icon: heartFilled, bg: "var(--text-error)" },
  comment: { icon: commentIcon, bg: "var(--main)" },
  poll: { icon: pollIcon, bg: "var(--hormones-lh)" },
  follow: { icon: followIcon, bg: "var(--text-success)" },
};

export function PostThumbnail({
  type = "like",
  count = 1,
  photos = [],
  size = 44,
  className = "",
}) {
  const meta = TYPE_META[type] ?? TYPE_META.like;
  const shown = count === 2 ? 2 : 1;

  return (
    <span
      className={`ds-post-thumb ds-post-thumb--${shown} ${className}`.trim()}
      data-name="notif photo"
      style={{ width: size, height: size }}
    >
      {Array.from({ length: shown }).map((_, i) => (
        <span key={i} className={`ds-post-thumb__photo ds-post-thumb__photo--${i}`}>
          {photos[i] ? <img src={photos[i]} alt="" /> : <span className="ds-post-thumb__placeholder" />}
        </span>
      ))}
      <span className="ds-post-thumb__badge" style={{ background: meta.bg }}>
        <MaskIcon src={meta.icon} size={12} alt="" className="ds-post-thumb__badge-icon" />
      </span>
    </span>
  );
}

export const POST_THUMBNAIL_TYPES = Object.keys(TYPE_META);
