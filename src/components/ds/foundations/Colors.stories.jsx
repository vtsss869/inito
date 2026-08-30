import { Text } from "../Text.jsx";
import {
  COLOR_GROUPS,
  GRADIENT_TOKENS,
  TEXT_STYLES,
  SPACING_TOKENS,
  RADIUS_TOKENS,
} from "./tokens.js";

const meta = {
  title: "DS/Foundations/Colors & Styles",
  parameters: { layout: "padded" },
};

export default meta;

function Swatch({ label, value, token, gradient }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "12px 0",
        borderBottom: "1px solid var(--grey-borders)",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: gradient ? `var(${token})` : value,
          border: "1px solid var(--grey-borders)",
          flexShrink: 0,
          boxShadow: value?.toLowerCase() === "#ffffff" ? "inset 0 0 0 1px #eaeced" : undefined,
        }}
      />
      <div style={{ minWidth: 0 }}>
        <Text variant="caption-bold-14">{label}</Text>
        <Text variant="mini" color="grey">
          {token} · {value || "gradient"}
        </Text>
      </div>
    </div>
  );
}

export const Overview = {
  name: "Overview",
  render: () => (
    <div style={{ maxWidth: 560, fontFamily: "var(--font)", padding: 24 }}>
      <Text as="h1" variant="header-3">
        Colors & Styles
      </Text>
      <Text variant="mini" color="grey">
        Tokens from Figma DS Colors & Styles → mapped in src/styles/tokens.css
      </Text>
      {COLOR_GROUPS.map((group) => (
        <section key={group.name} style={{ marginTop: 32 }}>
          <Text as="h2" variant="header-4">
            {group.name}
          </Text>
          {group.tokens.map((t) => (
            <Swatch key={t.token} {...t} />
          ))}
        </section>
      ))}
      <section style={{ marginTop: 32 }}>
        <Text as="h2" variant="header-4">
          Day Status Gradients
        </Text>
        {GRADIENT_TOKENS.map((t) => (
          <Swatch key={t.token} label={t.label} token={t.token} gradient />
        ))}
      </section>
      <section style={{ marginTop: 32 }}>
        <Text as="h2" variant="header-4">
          Radii
        </Text>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 12 }}>
          {RADIUS_TOKENS.map((r) => (
            <div key={r.token} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: "var(--bg-light-blue-grey)",
                  borderRadius: `var(${r.token})`,
                  border: "1px solid var(--grey-borders)",
                }}
              />
              <Text variant="mini" color="grey">
                {r.value}
              </Text>
            </div>
          ))}
        </div>
      </section>
      <section style={{ marginTop: 32 }}>
        <Text as="h2" variant="header-4">
          Spacing
        </Text>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginTop: 12 }}>
          {SPACING_TOKENS.map((s) => (
            <div key={s.token} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: s.value,
                  height: 40,
                  background: "var(--main)",
                  borderRadius: 4,
                }}
              />
              <Text variant="mini" color="grey">
                {s.value}
              </Text>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
