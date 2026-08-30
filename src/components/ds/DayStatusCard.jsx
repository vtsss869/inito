import { Text } from "./Text.jsx";
import { Chip } from "./Chip.jsx";

const GRADIENTS = {
  "high-fertility": "day-status-card--high",
};

export function DayStatusCard({
  pill = "Cycle day 20",
  title = "High Fertility",
  state = "high-fertility",
}) {
  return (
    <section className={`day-status-card ${GRADIENTS[state] ?? "day-status-card--high"}`}>
      <Chip onGradient>{pill}</Chip>
      <Text as="h2" variant="header-2" color="white" className="day-status-card__headline">
        {title}
      </Text>
    </section>
  );
}
