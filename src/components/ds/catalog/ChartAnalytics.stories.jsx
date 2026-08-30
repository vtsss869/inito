import { ChartAnalytics } from "./ChartAnalytics.jsx";

const meta = {
  title: "DS/Data / Analytics/Chart Analytics",
  component: ChartAnalytics,
  parameters: { layout: "padded" },
};

export default meta;

export const Overview = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 390 }}>
      <ChartAnalytics />
    </div>
  ),
};

export const IncompleteNote = {
  name: "Incomplete — full chart set",
  render: () => (
    <div style={{ padding: 24, maxWidth: 520, fontFamily: "Montserrat, sans-serif" }}>
      <h3 style={{ marginTop: 0 }}>Chart Analytics — partial</h3>
      <p>
        Documented atoms (segment tabs, fertility bars, day-status + hormone legend
        chips) are cataloged. Full Chart / Chart Android / Graph legend component
        sets were not pixel-sampled from a dedicated master frame in this pass.
      </p>
      <p>
        Looked in: library search for &quot;Chart Analytics&quot; / &quot;Chart&quot; /
        &quot;Graph legend&quot; under [Design System] Inito; design-system.md §4.
      </p>
      <p>Required: Figma node URL for the Chart Analytics specimen page.</p>
      <ChartAnalytics />
    </div>
  ),
};
