import { Text } from "./Text.jsx";

export function Chip({ children, onGradient = false, className = "" }) {
  return (
    <span className={`chip ${onGradient ? "chip--on-gradient" : ""} ${className}`.trim()}>
      <Text as="span" variant="caption-bold-14" color={onGradient ? "white" : "grey"}>
        {children}
      </Text>
    </span>
  );
}
