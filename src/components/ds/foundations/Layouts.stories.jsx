import { Text } from "../Text.jsx";
import { SPACING_TOKENS, RADIUS_TOKENS } from "./tokens.js";

const meta = {
  title: "DS/Foundations/Layouts",
  parameters: { layout: "padded" },
};

export default meta;

export const Overview = {
  name: "Overview",
  render: () => (
    <div style={{ padding: 24, maxWidth: 720, fontFamily: "var(--font)" }}>
      <Text as="h1" variant="header-3">
        Layouts
      </Text>
      <Text variant="mini" color="grey">
        Spacing and radius tokens from Figma DS Layouts / Foundations. Phone frame for product
        previews is 390×844 (Home shell) — not a DS layout primitive.
      </Text>

      <section style={{ marginTop: 32 }}>
        <Text as="h2" variant="header-4">
          Spacing scale
        </Text>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
          {SPACING_TOKENS.map((s) => (
            <div key={s.token} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Text variant="mini" color="grey" style={{ width: 100 }}>
                {s.token}
              </Text>
              <div
                style={{
                  height: 12,
                  width: s.value,
                  background: "var(--main)",
                  borderRadius: 4,
                }}
              />
              <Text variant="caption-14">{s.value}</Text>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 32 }}>
        <Text as="h2" variant="header-4">
          Corner radii
        </Text>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 12 }}>
          {RADIUS_TOKENS.map((r) => (
            <div key={r.token} style={{ width: 100, textAlign: "center" }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  margin: "0 auto",
                  background: "var(--bg-light-blue-grey)",
                  border: "1px solid var(--grey-borders)",
                  borderRadius: `var(${r.token})`,
                }}
              />
              <Text variant="mini" color="grey">
                {r.token}
              </Text>
              <Text variant="caption-14">{r.value}</Text>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 32 }}>
        <Text as="h2" variant="header-4">
          Content widths (documented)
        </Text>
        <Text variant="body">
          Common Figma content widths: Home card ~342, Shop card 366, Row / list item 327, phone
          390.
        </Text>
      </section>
    </div>
  ),
};
