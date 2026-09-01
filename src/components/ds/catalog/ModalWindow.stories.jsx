import { ModalWindow } from "./ModalWindow.jsx";

const meta = {
  title: "DS/Overlays/Modal Window",
  component: ModalWindow,
  parameters: { layout: "fullscreen" },
};

export default meta;

function Stage({ children }) {
  return <div style={{ height: 420, position: "relative" }}>{children}</div>;
}

/**
 * Figma "Modal Window" page — `modal` set (Type=Default/picker) + `Buttons`
 * set (Type=1 raw/2 raws/3 raws/Icon). `Type=picker` (an embedded iOS Time
 * Picker) is represented by the dedicated Picker component
 * (DS/Components/Picker) rather than duplicated inline here.
 */
export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Stage>
        <ModalWindow buttonsLayout="1-row" />
      </Stage>
    </div>
  ),
};

export const Playground = {
  args: {
    title: "Title",
    description: "Supporting description for this modal.",
    primaryLabel: "Continue",
    secondaryLabel: "Cancel",
    buttonsLayout: "1-row",
  },
  argTypes: {
    buttonsLayout: {
      control: "select",
      options: ["1-row", "2-rows", "3-rows", "icon"],
    },
  },
  decorators: [(Story) => <Stage><Story /></Stage>],
};

export const OneRow = {
  name: "Variants/Buttons — 1 row",
  render: () => <ModalWindow buttonsLayout="1-row" />,
  decorators: [(Story) => <Stage><Story /></Stage>],
};

export const TwoRows = {
  name: "Variants/Buttons — 2 rows",
  render: () => <ModalWindow buttonsLayout="2-rows" title="Delete entry?" description="This can't be undone." primaryLabel="Delete" secondaryLabel="Keep" />,
  decorators: [(Story) => <Stage><Story /></Stage>],
};

export const ThreeRows = {
  name: "Variants/Buttons — 3 rows",
  render: () => (
    <ModalWindow
      buttonsLayout="3-rows"
      title="How was your period?"
      description="Log it now or set a reminder."
      primaryLabel="Log now"
      secondaryLabel="Remind me later"
      tertiaryLabel="Not now"
    />
  ),
  decorators: [(Story) => <Stage><Story /></Stage>],
};

export const IconOnly = {
  name: "Variants/Buttons — Icon",
  render: () => <ModalWindow buttonsLayout="icon" title="Nice work!" description="You've logged 7 days in a row." />,
  decorators: [(Story) => <Stage><Story /></Stage>],
};

export const NoTitle = {
  name: "Variants/No title",
  render: () => <ModalWindow showTitle={false} description="Description-only modal content." />,
  decorators: [(Story) => <Stage><Story /></Stage>],
};
