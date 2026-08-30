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
