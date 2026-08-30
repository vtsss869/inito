import { Text } from "./Text.jsx";

export function Subtitle({ icon, children }) {
  return (
    <div className="subtitle">
      <span className="subtitle__icon">
        <img src={icon} alt="" width={24} height={24} />
      </span>
      <Text as="h3" variant="mini" color="grey" className="subtitle__label">
        {children}
      </Text>
    </div>
  );
}
