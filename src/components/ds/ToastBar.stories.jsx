import { ToastBar } from "./ToastBar.jsx";
import navDrop from "../../assets/icons/nav-drop.svg";

const meta = {
  title: "DS/Components/Toast bar",
  component: ToastBar,
  parameters: { layout: "padded" },
  args: {
    message: "Toast text",
    actionLabel: "Button",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 24, background: "#F6F6F6" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <ToastBar message="Toast text" />
      <ToastBar message="Toast text" actionLabel="Button" />
      <ToastBar message="Toast text" icon={navDrop} actionLabel="Button" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const Playground = {};

export const WithAction = {
  name: "Variants/With action",
  args: { message: "Toast text", actionLabel: "Button" },
};

export const WithIconAndAction = {
  name: "Variants/Icon + action",
  args: { message: "Toast text", actionLabel: "Button", icon: navDrop },
};

export const TextOnly = {
  name: "Variants/Text only",
  args: { message: "Toast text", actionLabel: undefined },
};
