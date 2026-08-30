import { Text } from "../Text.jsx";

/**
 * Figma DS: Chart / Chart Analytics building blocks
 * Cycle segment + fertility day bars + hormone legend chips.
 * Full chart composition is large; this catalogs the documented atoms.
 * Storybook catalog — not wired to Home.
 */
const DAY_STATES = [
  { id: "low", label: "Low", color: "var(--hormones-fsh)" },
  { id: "high", label: "High", color: "var(--hormones-e3g)" },
  { id: "peak", label: "Peak", color: "var(--hormones-lh)" },
  { id: "pdg", label: "PdG Rise", color: "var(--hormones-pdg)" },
  { id: "hcg", label: "hCG", color: "#AB66A5" },
];

const HORMONES = [
  { id: "bbt", label: "BBT", color: "var(--text-grey)" },
  { id: "lh", label: "LH", color: "var(--hormones-lh)" },
  { id: "pdg", label: "PdG", color: "var(--hormones-pdg)" },
  { id: "e3g", label: "E3G", color: "var(--hormones-e3g)" },
  { id: "fsh", label: "FSH", color: "var(--hormones-fsh)" },
];

export function ChartAnalytics({ mode = "ttc", className = "" }) {
  return (
    <div className={`chart-analytics ${className}`.trim()} data-name="Chart">
      <div className="chart-analytics__tabs">
        <button
          type="button"
          className={
            mode === "ttc"
              ? "chart-analytics__tab chart-analytics__tab--active"
              : "chart-analytics__tab"
          }
        >
          <Text as="span" variant="caption-bold-14">
            TTC
          </Text>
        </button>
        <button
          type="button"
          className={
            mode === "pregnancy"
              ? "chart-analytics__tab chart-analytics__tab--active"
              : "chart-analytics__tab"
          }
        >
          <Text as="span" variant="caption-bold-14">
            Pregnancy
          </Text>
        </button>
      </div>

      <div className="chart-analytics__bars" aria-label="Fertility day bars">
        {[40, 55, 70, 95, 60, 45, 35].map((h, i) => (
          <div key={i} className="chart-analytics__bar-col">
            <div
              className="chart-analytics__bar"
              style={{
                height: h,
                background: DAY_STATES[i % DAY_STATES.length].color,
              }}
            />
            <Text as="span" variant="mini" color="grey">
              {i + 1}
            </Text>
          </div>
        ))}
      </div>

      <div className="chart-analytics__legend">
        <Text as="p" variant="mini-semibold" color="grey">
          Day status
        </Text>
        <div className="chart-analytics__chips">
          {DAY_STATES.map((s) => (
            <span key={s.id} className="chart-analytics__chip">
              <span className="chart-analytics__swatch" style={{ background: s.color }} />
              <Text as="span" variant="mini">
                {s.label}
              </Text>
            </span>
          ))}
        </div>
        <Text as="p" variant="mini-semibold" color="grey">
          Hormones
        </Text>
        <div className="chart-analytics__chips">
          {HORMONES.map((h) => (
            <span key={h.id} className="chart-analytics__chip">
              <span className="chart-analytics__swatch" style={{ background: h.color }} />
              <Text as="span" variant="mini">
                {h.label}
              </Text>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
