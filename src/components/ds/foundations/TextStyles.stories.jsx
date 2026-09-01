import { Text } from "../Text.jsx";
import { TEXT_STYLES, TEXT_STYLES_COMMUNITY } from "./tokens.js";

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

export const Community = {
  name: "Community (SF Pro)",
  render: () => (
    <div style={{ maxWidth: 640, padding: 24, fontFamily: "var(--font)" }}>
      <Text as="h1" variant="header-3">
        Text Styles — Community
      </Text>
      <Text variant="mini" color="grey">
        Figma "New - SFPro - Community" (node 22321:5) on the 🧬 Text Styles page · SF Pro · a
        distinct scale from the Montserrat app scale above, used only by the Community feature.
        Only these 11 styles are surfaced here — the sibling frames "App Styles/ Mode 1", "New App
        Styles - for redesign - not used", and "Website - not used" are intentionally excluded.
        Implemented via the .tc-* classes in src/styles/ds.css. SF Pro isn't a licensed web font;
        rendered here with the system-font fallback stack in --font-community (tokens.css) — swap
        in a licensed SF Pro webfont if/when one is available.
      </Text>
      <div style={{ marginTop: 24 }}>
        {TEXT_STYLES_COMMUNITY.map((style) => (
          <div
            key={style.className}
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
            <span className={style.className}>{style.sample}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
