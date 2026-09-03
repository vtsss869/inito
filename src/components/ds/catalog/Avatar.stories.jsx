import { Avatar, AVATAR_COLOR_COUNT } from "./Avatar.jsx";

const meta = {
  title: "DS/Community/Avatar",
  component: Avatar,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "select", options: ["initial", "anonymous", "photo"] },
    tone: { control: "select", options: ["solid", "soft"] },
    colorIndex: { control: { type: "range", min: 1, max: AVATAR_COLOR_COUNT, step: 1 } },
    size: { control: { type: "range", min: 20, max: 64, step: 4 } },
  },
};

export default meta;

export const Playground = {
  args: { variant: "initial", initial: "V", colorIndex: 1, tone: "solid", size: 40 },
};

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, fontFamily: "var(--font)" }}>
      <section>
        <p style={{ font: "600 12px var(--font)", color: "var(--text-grey)", marginBottom: 8 }}>
          Initial — solid (8 colors, Figma "Section 3" node 3833:273282)
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          {Array.from({ length: AVATAR_COLOR_COUNT }).map((_, i) => (
            <Avatar key={i} variant="initial" tone="solid" colorIndex={i + 1} initial="V" size={40} />
          ))}
        </div>
      </section>
      <section>
        <p style={{ font: "600 12px var(--font)", color: "var(--text-grey)", marginBottom: 8 }}>
          Initial — soft
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          {Array.from({ length: AVATAR_COLOR_COUNT }).map((_, i) => (
            <Avatar key={i} variant="initial" tone="soft" colorIndex={i + 1} initial="V" size={40} />
          ))}
        </div>
      </section>
      <section>
        <p style={{ font: "600 12px var(--font)", color: "var(--text-grey)", marginBottom: 8 }}>
          Anonymous member
        </p>
        <Avatar variant="anonymous" size={40} />
      </section>
      <section>
        <p style={{ font: "600 12px var(--font)", color: "var(--text-grey)", marginBottom: 8 }}>
          States — unread dot / editable badge
        </p>
        <div style={{ display: "flex", gap: 16 }}>
          <Avatar variant="initial" colorIndex={4} initial="V" size={40} unread />
          <Avatar variant="initial" colorIndex={2} initial="V" size={40} editable />
        </div>
      </section>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const Anonymous = {
  name: "Variants/Anonymous",
  args: { variant: "anonymous", size: 40 },
};

export const WithUnreadDot = {
  name: "States/Unread",
  args: { variant: "initial", initial: "V", colorIndex: 4, size: 40, unread: true },
};

export const Editable = {
  name: "States/Editable (own profile)",
  args: { variant: "initial", initial: "V", colorIndex: 1, tone: "soft", size: 64, editable: true },
};
