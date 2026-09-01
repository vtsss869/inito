import { IconAsset } from "./Icon.jsx";
import { Text } from "./Text.jsx";

/**
 * Shared rendering helpers for the bulk Figma icon-catalog stories (Notification Icons, System
 * Icons, Symptoms Icons, Circle Flag). Not a DS component itself — internal to those story files,
 * same relationship Wrapper.jsx has to Button.
 */

// Eagerly import every individually-exported icon file across the four bulk catalog sections (908
// total — see src/assets/icons/{notification,system,symptoms/18px,symptoms/32px,flags}/*.svg) and
// index them by id (filename without extension). Id prefixes (notif-/sys-/symp18-/symp32-/flag-)
// are unique across sections, so one flat map is safe.
const iconModules = import.meta.glob(
  "../../assets/icons/{notification,system,symptoms/18px,symptoms/32px,flags}/*.svg",
  { eager: true, import: "default" }
);

const iconUrlById = Object.fromEntries(
  Object.entries(iconModules).map(([path, src]) => [
    path.split("/").pop().replace(/\.svg$/, ""),
    src,
  ])
);

/** Resolve the URL for an icon-data entry's individually-exported SVG file. */
export function iconSrc(icon) {
  return iconUrlById[icon.id];
}

export function CatalogSectionLabel({ children }) {
  return (
    <Text as="h2" variant="mini-semibold" color="grey" style={{ marginBottom: 16 }}>
      {children}
    </Text>
  );
}

export function IconSwatch({ icon, size = 40, tile = 96 }) {
  return (
    <div
      title={icon.name}
      style={{
        width: tile,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        padding: 12,
        background: "var(--bg-grey)",
        borderRadius: 16,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: size + 16,
          height: size + 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
          borderRadius: 12,
          flexShrink: 0,
        }}
      >
        <IconAsset src={iconSrc(icon)} w={icon.w} h={icon.h} size={size} alt={icon.name} />
      </div>
      <Text
        variant="mini"
        color="grey"
        style={{ textAlign: "center", fontSize: 10, lineHeight: "13px", wordBreak: "break-word" }}
      >
        {icon.name}
      </Text>
    </div>
  );
}

export function IconGrid({ items, size = 40, tile = 96 }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${tile}px, 1fr))`,
        gap: 8,
      }}
    >
      {items.map((icon) => (
        <IconSwatch key={icon.id} icon={icon} size={size} tile={tile} />
      ))}
    </div>
  );
}

export function CategoryBlock({ title, count, children }) {
  return (
    <section style={{ marginBottom: 32 }}>
      <CatalogSectionLabel>
        {title}
        {typeof count === "number" ? ` · ${count}` : ""}
      </CatalogSectionLabel>
      {children}
    </section>
  );
}

/** Group a flat icon-data array by its `category` field, preserving first-seen order. */
export function groupByCategory(items) {
  const order = [];
  const groups = new Map();
  for (const item of items) {
    const key = item.category || "General";
    if (!groups.has(key)) {
      groups.set(key, []);
      order.push(key);
    }
    groups.get(key).push(item);
  }
  return order.map((key) => ({ category: key, items: groups.get(key) }));
}
