import { PostThumbnail, POST_THUMBNAIL_TYPES } from "./PostThumbnail.jsx";

const meta = {
  title: "DS/Community/Post Thumbnail",
  component: PostThumbnail,
  parameters: { layout: "padded" },
  argTypes: {
    type: { control: "select", options: POST_THUMBNAIL_TYPES },
    count: { control: "select", options: [1, 2] },
  },
};

export default meta;

export const Playground = {
  args: { type: "like", count: 1 },
};

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {POST_THUMBNAIL_TYPES.map((type) => (
        <div key={type} style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <PostThumbnail type={type} count={1} />
          <PostThumbnail type={type} count={2} />
          <span style={{ font: "12px var(--font)", color: "var(--text-grey)" }}>{type}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};
