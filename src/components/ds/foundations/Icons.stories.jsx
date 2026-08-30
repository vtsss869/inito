import { Text } from "../Text.jsx";

const iconModules = import.meta.glob("../../../assets/icons/*.{svg,png}", {
  eager: true,
  import: "default",
});

const ICONS = Object.entries(iconModules)
  .map(([path, src]) => ({
    src,
    name: path.split("/").pop(),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const meta = {
  title: "DS/Foundations/Icons",
  parameters: { layout: "padded" },
};

export default meta;

export const Overview = {
  name: "Overview",
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font)" }}>
      <Text as="h1" variant="header-3">
        Icons
      </Text>
      <Text variant="mini" color="grey">
        Assets from src/assets/icons — Figma Interface / log / nav / tab glyphs used by DS
        components. Count: {ICONS.length}. Full Figma Icons page is larger; missing glyphs are
        listed in the Storybook summary when not yet exported.
      </Text>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: 16,
          marginTop: 24,
        }}
      >
        {ICONS.map((icon) => (
          <div
            key={icon.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              padding: 12,
              background: "var(--bg-grey)",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                borderRadius: 12,
              }}
            >
              <img src={icon.src} alt="" width={32} height={32} style={{ objectFit: "contain" }} />
            </div>
            <Text variant="mini" color="grey" style={{ textAlign: "center", wordBreak: "break-all" }}>
              {icon.name}
            </Text>
          </div>
        ))}
      </div>
    </div>
  ),
};
