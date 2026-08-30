/**
 * Figma DS: iOS Time / Date / Timer Pickers exist in the library.
 * Master page node IDs were not resolved in this pass — do not invent UI.
 */
const meta = {
  title: "DS/Components/Picker",
  parameters: { layout: "padded" },
};

export default meta;

export const Incomplete = {
  name: "Incomplete — needs Figma node",
  render: () => (
    <div
      style={{
        padding: 24,
        maxWidth: 520,
        fontFamily: "Montserrat, sans-serif",
        color: "#112D35",
      }}
    >
      <h3 style={{ marginTop: 0 }}>Picker — not implemented</h3>
      <p>
        Library components found via search: <code>iOS Timer Picker</code>,{" "}
        <code>iOS Time Picker</code>, <code>iOS Time &amp; Date Picker</code>.
      </p>
      <p>
        Looked in: Figma file <code>LwXvi6EzEzOpBt6ZFVOkuq</code> via{" "}
        <code>search_design_system</code>; design-system.md §4 (not deep-extracted).
        Top-level <code>get_metadata</code> for this file only returned Icons /
        Typography block / Meta Frame canvases, so picker page node IDs could not
        be discovered automatically.
      </p>
      <p>
        <strong>Required:</strong> a Figma URL with <code>node-id</code> for the
        Picker specimen (Date / Time / Timer variants) to reproduce accurately.
      </p>
    </div>
  ),
};
