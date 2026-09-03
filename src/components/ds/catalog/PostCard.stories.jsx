import { PostCard } from "./PostCard.jsx";

const meta = {
  title: "DS/Community/Post Card",
  component: PostCard,
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

export const Playground = {};

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <PostCard
        avatar={{ variant: "anonymous" }}
        name="Anonymous member"
        timestamp="2m"
        tags={["BFP", "Graphic Images", "Mention of Loss", "Pregnancy"]}
      />
      <PostCard
        avatar={{ variant: "photo", photo: undefined }}
        name="Marissa Layfield"
        role="admin"
        timestamp="2m"
        tags={[]}
        body="Thank you for this! I'm new and was so confused haha"
      />
      <PostCard
        avatar={{ variant: "initial", initial: "E", colorIndex: 2, tone: "soft" }}
        name="Name TTCwithEmily…"
        role="expert"
        timestamp="2m"
        tags={["BFP", "Graphic Images", "Mention of Loss", "Pregnancy"]}
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const WithoutTags = {
  name: "Variants/No tags",
  args: {
    avatar: { variant: "initial", initial: "N", colorIndex: 4, tone: "soft" },
    name: "Nata",
    role: "admin",
    timestamp: "3h",
    tags: [],
    body: "Thank you for this! I'm new and was so confused haha",
  },
};
