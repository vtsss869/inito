import { ChartAnalytics, CyclePill, GraphLegend } from "./ChartAnalytics.jsx";

const meta = {
  title: "DS/Data / Analytics/Chart Analytics",
  component: ChartAnalytics,
  parameters: { layout: "padded" },
};

export default meta;

function SectionLabel({ children }) {
  return (
    <p className="t-mini-semibold color-grey" style={{ marginBottom: 16 }}>
      {children}
    </p>
  );
}

/**
 * Figma "Chart Analytics" page — documented atoms: segment tabs, fertility
 * day bars, day-status + hormone legend chips, `.cycle` pill, and the
 * `Graph legend` hormones row. The page's much larger master compositions
 * (full `Chart` / `Chart / Android` frames, the `Symptoms Modal View`
 * section's calendar-for-chart modal, `.chart day` / `.Day Status` /
 * `Chart Chip – Hormones Level` variant sets) are large, screen-specific
 * assemblies of these same atoms and are intentionally not each
 * reproduced 1:1 — see the DS audit report for the full variant inventory.
 */
export const Overview = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 390 }}>
      <section>
        <SectionLabel>Chart</SectionLabel>
        <ChartAnalytics />
      </section>
      <section>
        <SectionLabel>.cycle — Default / Chosen</SectionLabel>
        <div style={{ display: "flex", gap: 8 }}>
          <CyclePill label="10 Mar–03 Apr" />
          <CyclePill label="10 Mar–03 Apr" chosen />
        </div>
      </section>
      <section>
        <SectionLabel>Graph legend — Hormones legend</SectionLabel>
        <GraphLegend />
      </section>
    </div>
  ),
};

export const CyclePillDefault = {
  name: "Variants/.cycle Default",
  render: () => <CyclePill />,
};

export const CyclePillChosen = {
  name: "Variants/.cycle Chosen",
  render: () => <CyclePill chosen />,
};

export const GraphLegendHormones = {
  name: "Variants/Graph legend — Hormones",
  render: () => <GraphLegend />,
};
