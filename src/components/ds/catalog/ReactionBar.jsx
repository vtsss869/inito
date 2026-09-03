import { Text } from "../Text.jsx";
import { MaskIcon } from "../Icon.jsx";
import likeFilled from "../../../assets/icons/system/sys-interface-interface-heart-filled.svg";
import likeUnfilled from "../../../assets/icons/system/sys-calendar-pictograms-interface-like-unfilled.svg";
import commentIcon from "../../../assets/icons/system/sys-interface-interface-message-chat-circle.svg";

/**
 * Figma "Community (App)" file (fileKey LLjQAqluK9e7WtuV3HNUK7), UI KIT
 * canvas, "Community kit" → "Reaction count & react" (node 4:3232). Built
 * from this file's own local Interface-icon/Typography primitives (not an
 * instance of the main DS Button/Wrapper set — unlike "tags" and "Button -
 * Main" elsewhere in this file, this one is a genuinely separate pattern),
 * so it's a new DS catalog component rather than a Button variant.
 *
 * Two stacked rows, both optional:
 *  - "Reaction count" (`showCount`) — read-only summary: filled heart + like
 *    count, shown once someone has reacted.
 *  - "React" (`showActions`) — the tappable row: outline/filled heart toggle
 *    + like count, and a comment icon + "N comments" label.
 * Storybook / DS catalog — not wired to Home.
 */
export function ReactionBar({
  likeCount = 24,
  commentCount = 10,
  liked = false,
  showCount = true,
  showActions = true,
  onLikeToggle,
  className = "",
}) {
  return (
    <div className={`ds-reaction-bar ${className}`.trim()} data-name="Reaction count & react">
      {showCount ? (
        <div className="ds-reaction-bar__count" data-name="Reaction count">
          <MaskIcon src={likeFilled} size={24} alt="" className="ds-reaction-bar__icon ds-reaction-bar__icon--liked" />
          <Text as="span" variant="tc-body-12" color="current" className="ds-reaction-bar__count-text">
            {likeCount}
          </Text>
        </div>
      ) : null}
      {showActions ? (
        <div className="ds-reaction-bar__actions" data-name="React">
          <button
            type="button"
            className="ds-reaction-bar__like"
            onClick={onLikeToggle}
            aria-pressed={liked}
            aria-label={liked ? "Unlike" : "Like"}
          >
            <MaskIcon
              src={liked ? likeFilled : likeUnfilled}
              size={24}
              alt=""
              className={liked ? "ds-reaction-bar__icon ds-reaction-bar__icon--liked" : "ds-reaction-bar__icon"}
            />
            <Text as="span" variant="tc-body-12" color="current">
              {likeCount}
            </Text>
          </button>
          <span className="ds-reaction-bar__comments" data-name="Comments">
            <MaskIcon src={commentIcon} size={24} alt="" className="ds-reaction-bar__icon" />
            <Text as="span" variant="tc-body-12" color="current">
              {commentCount} comments
            </Text>
          </span>
        </div>
      ) : null}
    </div>
  );
}
