import { Text } from "../Text.jsx";

/**
 * Figma "Community (App)" file (fileKey LLjQAqluK9e7WtuV3HNUK7), UI KIT
 * canvas, "Community kit" → "Post types" (node 2:8558) post-header kit and
 * "Post view" (node 42:8740) comment threads — small colored role pill next
 * to a member's name (Admin / Expert / Moderator / Chart Guide). Reuses
 * existing DS background + text tokens per role rather than new hex values
 * (this Community file has no published Variables of its own to bind to).
 * Storybook / DS catalog — not wired to Home.
 */
const ROLE_META = {
  admin: { label: "Admin", bg: "var(--bg-blue)", color: "var(--main)" },
  expert: { label: "Expert", bg: "var(--bg-tan)", color: "var(--hormones-fsh)" },
  moderator: { label: "Moderator", bg: "var(--bg-violet)", color: "var(--hormones-lh)" },
  "chart-guide": { label: "Chart Guide", bg: "var(--bg-green-transparent)", color: "var(--text-success)" },
};

export function RoleBadge({ role = "admin", children, className = "" }) {
  const meta = ROLE_META[role] ?? ROLE_META.admin;
  return (
    <span
      className={`ds-role-badge ${className}`.trim()}
      data-name="Role Badge"
      style={{ background: meta.bg, color: meta.color }}
    >
      <Text as="span" variant="tc-caption-11-semibold" color="current">
        {children ?? meta.label}
      </Text>
    </span>
  );
}

export const ROLE_BADGE_ROLES = Object.keys(ROLE_META);
