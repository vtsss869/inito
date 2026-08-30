import { Text } from "../Text.jsx";
import { TEXT_STYLES } from "../foundations/tokens.js";

/**
 * Figma DS: Typography block (13783:846)
 * Storybook catalog — not wired to Home.
 */
const meta = {
  title: "DS/Components/Typography block",
  parameters: { layout: "padded" },
};

export default meta;

export const Overview = {
  name: "Overview",
  render: () => (
    <div
      style={{
        width: 372,
        padding: 32,
        background: "#fff",
        border: "1px solid var(--grey-borders)",
        boxSizing: "border-box",
        fontFamily: "var(--font)",
      }}
      data-name="Typography block"
    >
      {TEXT_STYLES.map((s) => (
        <div key={s.variant} style={{ marginBottom: 20 }}>
          <Text as="p" variant={s.variant}>
            {s.sample}
          </Text>
          <Text as="p" variant="mini" color="grey">
            {s.label} · {s.note}
          </Text>
        </div>
      ))}
    </div>
  ),
};
