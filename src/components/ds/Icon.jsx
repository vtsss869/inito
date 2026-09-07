import { useRef, useLayoutEffect } from "react";

// Quotes inside url() are required: Vite inlines SVGs as data URIs with unescaped
// single quotes, which breaks unquoted url() in headless Chromium (Chromatic).
export function useMaskImage(ref, src) {
  useLayoutEffect(() => {
    if (ref.current && src) {
      const val = `url("${src}")`;
      ref.current.style.setProperty("-webkit-mask-image", val);
      ref.current.style.setProperty("mask-image", val);
    }
  }, [src]);
}

export function MaskIcon({ src, size = 24, alt = "", className = "" }) {
  const ref = useRef(null);
  useMaskImage(ref, src);
  if (!src) return null;
  return (
    <span
      ref={ref}
      className={`ds-mask-icon ${className}`.trim()}
      style={{ width: size, height: size }}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : "true"}
    />
  );
}

export function Icon({ src, size = 32, alt = "", className = "" }) {
  return (
    <span
      className={`ds-icon ${className}`.trim()}
      style={{ width: size, height: size, display: "inline-flex", overflow: "hidden" }}
    >
      <img src={src} alt={alt} width={size} height={size} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
    </span>
  );
}

/**
 * IconAsset — renders one individually-exported icon file (e.g. src/assets/icons/notification/*.svg),
 * preserving the icon's intrinsic aspect ratio (`w`/`h` from the icon-data JSON) while fitting it to
 * `size` (the longer edge). Used by the bulk Figma icon-catalog stories (Notification Icons, System
 * Icons, Symptoms Icons, Circle Flag) via IconCatalogHelpers.jsx, which resolves `src` from a
 * `import.meta.glob` map keyed by icon id — see src/components/ds/foundations/icon-data/*.json.
 * Use plain <Icon src=".../*.svg"> for square, fixed-size assets that don't need aspect fitting.
 */
export function IconAsset({ src, w = 32, h = 32, size = 32, alt = "", className = "" }) {
  const scale = size / Math.max(w, h);
  const width = Math.round(w * scale);
  const height = Math.round(h * scale);
  return (
    <span
      className={`ds-icon ${className}`.trim()}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      style={{
        width,
        height,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <img
        src={src}
        alt=""
        width={width}
        height={height}
        style={{ width: "100%", height: "100%", display: "block", objectFit: "contain" }}
        aria-hidden={alt ? undefined : "true"}
      />
    </span>
  );
}
