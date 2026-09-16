import { Text } from "../Text.jsx";

/**
 * Figma Symptom Chip / Daily Logs `.Link` pill.
 * Default: `--bg-grey`. Selected: category `tone` fill (no border stroke).
 * Tones map to Background/* tokens from tokens.css.
 */
export function SymptomChip({
  label,
  icon,
  selected = false,
  tone = "default",
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      type="button"
      className={[
        "symptom-chip",
        selected ? "symptom-chip--selected" : "",
        selected && tone !== "default" ? `symptom-chip--tone-${tone}` : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-name="Symptom Chip"
      aria-pressed={selected}
      onClick={onClick}
      {...props}
    >
      {icon ? <img src={icon} alt="" width={32} height={32} /> : null}
      <Text as="span" variant="caption-bold-14">
        {label}
      </Text>
    </button>
  );
}
