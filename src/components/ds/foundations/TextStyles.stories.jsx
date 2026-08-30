import { Text } from "../Text.jsx";
import { TEXT_STYLES } from "./tokens.js";

const meta = {
  title: "DS/Foundations/Text Styles",
  parameters: { layout: "padded" },
};

export default meta;

export const Overview = {
  name: "Overview",
  render: () => (
    <div style={{ maxWidth: 640, padding: 24, fontFamily: "var(--font)" }}>
      <Text as="h1" variant="header-3">
        Text Styles
      </Text>
      <Text variant="mini" color="grey">
        Figma DS App typography · Montserrat · implemented via Text + .t-* classes
      </Text>
      <div style={{ marginTop: 24 }}>
        {TEXT_STYLES.map((style) => (
          <div
            key={style.variant}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              gap: 16,
              padding: "16px 0",
              borderBottom: "1px solid var(--grey-borders)",
              alignItems: "baseline",
            }}
          >
            <div>
              <Text variant="caption-bold-14">{style.label}</Text>
              <Text variant="mini" color="grey">
                {style.note}
              </Text>
            </div>
            <Text variant={style.variant}>{style.sample}</Text>
          </div>
        ))}
      </div>
    </div>
  ),
};
