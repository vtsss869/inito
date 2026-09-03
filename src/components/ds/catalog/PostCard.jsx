import { Text } from "../Text.jsx";
import { MaskIcon } from "../Icon.jsx";
import { Avatar } from "./Avatar.jsx";
import { RoleBadge } from "./RoleBadge.jsx";
import { DsChip } from "./DsChip.jsx";
import { ReactionBar } from "./ReactionBar.jsx";
import moreIcon from "../../../assets/icons/system/sys-interface-interface-more.svg";

/**
 * Figma "Community (App)" file (fileKey LLjQAqluK9e7WtuV3HNUK7), UI KIT
 * canvas, "Community kit" → "Post types" (node 2:8558) and "Main feed"
 * (node 2:7881) post-header kit. Composes existing/new DS catalog pieces —
 * Avatar, RoleBadge, DsChip (`purpose="tag"`), ReactionBar — into the full
 * feed post card: avatar, name (+ optional role badge), timestamp, "..."
 * menu, content-warning tags, body copy, then the reaction bar.
 * Storybook / DS catalog — not wired to Home.
 */
export function PostCard({
  avatar = { variant: "initial", initial: "A", colorIndex: 5 },
  name = "Anonymous member",
  role,
  timestamp = "2m",
  tags = [],
  body = "Morning after ovulation and estrogen skyrocketed higher than I've ever seen. I've got my own weird theories (some semen got in my urine and Inito couldn't recognize the hormone 🤔) but is this something y'all ever see?",
  onMenuClick,
  likeCount = 24,
  commentCount = 10,
  liked = false,
  onLikeToggle,
  className = "",
}) {
  return (
    <article className={`ds-post-card ${className}`.trim()} data-name="Post">
      <header className="ds-post-card__header">
        <Avatar {...avatar} size={32} />
        <div className="ds-post-card__meta">
          <div className="ds-post-card__name-row">
            <Text as="span" variant="tc-body-14-semibold" color="black">
              {name}
            </Text>
            {role ? <RoleBadge role={role} /> : null}
            <Text as="span" variant="tc-caption-11" color="grey">
              {timestamp}
            </Text>
          </div>
        </div>
        <button type="button" className="ds-post-card__menu" onClick={onMenuClick} aria-label="More options">
          <MaskIcon src={moreIcon} size={20} alt="" />
        </button>
      </header>

      {tags.length ? (
        <div className="ds-post-card__tags">
          {tags.map((t) => (
            <DsChip key={t} purpose="tag">
              {t}
            </DsChip>
          ))}
        </div>
      ) : null}

      {body ? (
        <Text as="p" variant="tc-body-13" color="black" className="ds-post-card__body">
          {body}
        </Text>
      ) : null}

      <ReactionBar
        likeCount={likeCount}
        commentCount={commentCount}
        liked={liked}
        onLikeToggle={onLikeToggle}
        showCount={false}
      />
    </article>
  );
}
