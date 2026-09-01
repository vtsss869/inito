import { Text } from "./Text.jsx";
import { Chip } from "./Chip.jsx";

/**
 * Figma DS: "Cards (Shop, Symptoms, Day status)" page — Day Status Card set
 * (State=Pregnancy/Ovulation confirmed/Attention/High Fertility/Low
 * Fertility/Fertile Window/Informational — 7 variants), CROSS-CHECKED
 * against the real Home main-card examples in the app-screens file "INITO |
 * IOS – Home", canvas "Calendar & main card & notification states" →
 * section "📱 In Prod" → "Legend" (node 246:61671, "Main card states"
 * matrix: Pregnancy/Period/Fertility ratings, after test/Other states/NG
 * rows × Past/Present/Future columns). The Legend is the copy source of
 * truth for the states it documents — the DS page's own headline copy
 * ("High chance of getting pregnant!" etc.) was a design-time draft that
 * never shipped; HomeScreen.jsx already overrides it with the Legend
 * wording via explicit `pill`/`title` props, so this table now matches
 * that rather than the stale DS defaults.
 *
 * high-fertility / low-fertility / ovulation-confirmed / pregnancy: chip +
 * headline corrected to the literal Legend text. waiting-for-pdg-rise /
 * pdg-is-rising: new states added for the previously-unused
 * `--gradient-wfpr` token ("Waiting For PdG Rise" — defined in tokens.css
 * but not wired to any state until now), matching the Legend's blue/indigo
 * "Waiting for PdG rise" and "PdG is rising" cards (Fertility ratings row,
 * Present column, cycle day 14).
 *
 * fertile-window / attention / informational: no literal Legend text match
 * exists for these three (the Legend's closest concepts — "Peak Fertility"
 * and "Missed test" — are documented instead as reference-only rows in
 * DayStatusCard.stories.jsx's Legend section, reusing these three states'
 * gradients for their swatch color since a full 1:1 rename wasn't
 * confirmed). Left as-is rather than force a guess.
 *
 * OPEN FINDING (not applied): the Legend's "Peak Fertility" card renders on
 * a purple gradient and "Ovulation Confirmed" on a teal gradient, which is
 * the reverse of this file's current class-to-token pairing (`--ovulation`
 * is purple, `--fertile-window` is teal) — i.e. `ovulation-confirmed`
 * below may be shipping on the wrong-colored gradient relative to the
 * Legend. Flagged for confirmation rather than swapped, since the DS
 * file's 7-variant set doesn't include a published "Ovulation Confirmed"
 * component to cross-check against and swapping risks other consumers of
 * these two gradient classes.
 */
const STATE_META = {
  "high-fertility": {
    gradient: "day-status-card--high",
    chips: ["Cycle day 20"],
    headline: "High Fertility",
  },
  "fertile-window": {
    gradient: "day-status-card--fertile-window",
    chips: ["Cycle day 10"],
    headline: "You may be in your fertile window",
  },
  "low-fertility": {
    gradient: "day-status-card--low",
    chips: ["Cycle day 8"],
    headline: "Low Fertility",
  },
  "ovulation-confirmed": {
    gradient: "day-status-card--ovulation",
    chips: ["Cycle day 21"],
    headline: "Ovulation Confirmed",
  },
  "waiting-for-pdg-rise": {
    gradient: "day-status-card--wfpr",
    chips: ["Cycle day 14"],
    headline: "Waiting for PdG rise",
  },
  "pdg-is-rising": {
    gradient: "day-status-card--wfpr",
    chips: ["Cycle day 14"],
    headline: "PdG is rising",
  },
  attention: {
    gradient: "day-status-card--attention",
    chips: ["Cycle day 10"],
    headline: "You are going to miss Peak Fertility",
  },
  informational: {
    gradient: "day-status-card--informational",
    chips: ["Cycle day 10"],
    headline: "Unknown chance of getting pregnant",
  },
  pregnancy: {
    gradient: "day-status-card--pregnancy",
    chips: ["First trimester"],
    headline: "7 weeks 6 days",
    footer: "32 weeks and 1 day left",
  },
};

export function DayStatusCard({
  state = "high-fertility",
  chips,
  headline,
  description,
  footer,
  // Legacy aliases (pre-dating the full 7-state Figma audit) — kept so
  // existing call sites (e.g. HomeScreen.jsx) keep rendering unchanged.
  pill,
  title,
  className = "",
}) {
  const meta = STATE_META[state] ?? STATE_META["high-fertility"];
  const resolvedChips = chips ?? (pill != null ? [pill] : meta.chips);
  const resolvedHeadline = headline ?? title ?? meta.headline;
  const resolvedDescription = description ?? meta.description;
  const resolvedFooter = footer ?? meta.footer;

  return (
    <section
      className={`day-status-card ${meta.gradient} ${className}`.trim()}
      data-name="Day Status Card"
      data-state={state}
    >
      <div className="day-status-card__chips">
        {resolvedChips.map((c) => (
          <Chip key={c} onGradient>
            {c}
          </Chip>
        ))}
      </div>
      <Text as="h2" variant="header-2" color="white" className="day-status-card__headline">
        {resolvedHeadline}
      </Text>
      {resolvedDescription ? (
        <Text as="p" variant="caption-14" color="white" className="day-status-card__description">
          {resolvedDescription}
        </Text>
      ) : null}
      {resolvedFooter ? (
        <Text as="p" variant="mini" color="white" className="day-status-card__footer">
          {resolvedFooter}
        </Text>
      ) : null}
    </section>
  );
}
