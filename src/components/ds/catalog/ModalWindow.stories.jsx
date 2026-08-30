import { ModalWindow } from "./ModalWindow.jsx";

const meta = {
  title: "DS/Overlays/Modal Window",
  component: ModalWindow,
  parameters: { layout: "fullscreen" },
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ height: 640, position: "relative" }}>
      <ModalWindow />
    </div>
  ),
};

export const Playground = {
  args: {
    title: "Title",
    description: "Supporting description for this modal.",
    primaryLabel: "Continue",
    secondaryLabel: "Cancel",
  },
  decorators: [
    (Story) => (
      <div style={{ height: 640, position: "relative" }}>
        <Story />
      </div>
    ),
  ],
};

export const IncompleteNote = {
  name: "Incomplete — master variants",
  render: () => (
    <div style={{ padding: 24, maxWidth: 520, fontFamily: "Montserrat, sans-serif" }}>
      <h3 style={{ marginTop: 0 }}>Modal Window — partial</h3>
      <p>
        Library component <code>modal</code> exists in Figma DS. Exact variant axes
        (content layouts, sizes) were not fully deep-sampled from a master page
        node in this pass.
      </p>
      <p>
        Looked in: <code>search_design_system</code> for &quot;Modal&quot; under [Design
        System] Inito; design-system.md elevation tokens.
      </p>
      <p>
        <strong>Required:</strong> Figma node URL for the modal specimen set to
        lock variant matrix and chrome.
      </p>
    </div>
  ),
};

