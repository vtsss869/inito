import { useState } from "react";
import { ReactionBar } from "./ReactionBar.jsx";

const meta = {
  title: "DS/Community/Reaction Bar",
  component: ReactionBar,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div style={{ width: 342 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Playground = {
  args: { likeCount: 24, commentCount: 10, liked: false, showCount: true, showActions: true },
};

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <ReactionBar likeCount={24} commentCount={10} showCount />
      <ReactionBar likeCount={24} commentCount={10} showCount={false} />
      <ReactionBar likeCount={24} commentCount={10} liked showCount={false} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const Interactive = {
  name: "Playground/Interactive like toggle",
  render: () => {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(24);
    return (
      <ReactionBar
        likeCount={count}
        commentCount={10}
        liked={liked}
        showCount={false}
        onLikeToggle={() => {
          setLiked((l) => !l);
          setCount((c) => c + (liked ? -1 : 1));
        }}
      />
    );
  },
};
