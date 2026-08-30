import { BottomSheet } from "./BottomSheet.jsx";

const meta = {
  title: "DS/Overlays/Bottom Sheets",
  component: BottomSheet,
  parameters: { layout: "fullscreen" },
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ height: 640, position: "relative" }}>
      <BottomSheet />
    </div>
  ),
};

export const IncompleteNote = {
  name: "Incomplete — master variants",
  render: () => (
    <div style={{ padding: 24, maxWidth: 480, fontFamily: "Montserrat, sans-serif" }}>
      <h3 style={{ marginTop: 0 }}>Bottom Sheets (futor) — partial</h3>
      <p>
        Library component <code>futor</code> exists in Figma DS (component key
        1a359432…). Full variant matrix was not deep-sampled from a master page
        node in this pass (get_metadata page list for DS only returned Icons /
        Typography block / Meta Frame canvases; futor page node ID not resolved).
      </p>
      <p>Required to complete: Figma node URL for the futor / Bottom Sheet page.</p>
      <div style={{ height: 420, position: "relative", marginTop: 24, border: "1px solid #EAECED" }}>
        <BottomSheet title="Partial chrome" description="Structural approximation pending master variants." />
      </div>
    </div>
  ),
};
