import { RoleBadge, ROLE_BADGE_ROLES } from "./RoleBadge.jsx";

const meta = {
  title: "DS/Community/Role Badge",
  component: RoleBadge,
  parameters: { layout: "padded" },
  argTypes: {
    role: { control: "select", options: ROLE_BADGE_ROLES },
  },
};

export default meta;

export const Playground = {
  args: { role: "admin" },
};

export const Overview = {
  render: () => (
    <div style={{ display: "flex", gap: 8, padding: 24 }}>
      {ROLE_BADGE_ROLES.map((role) => (
        <RoleBadge key={role} role={role} />
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};
