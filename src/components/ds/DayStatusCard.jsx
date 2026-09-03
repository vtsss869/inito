import { Text } from "./Text.jsx";
import { Chip } from "./Chip.jsx";

/**
 * Figma DS: "Cards (Shop, Symptoms, Day status)" page — Day Status Card set
 * (State=Pregnancy/Ovulation confirmed/Attention/High Fertility/Low
 * Fertility/Fertile Window/Informational — 7 variants), CROSS-CHECKED
 * against the real Home main-card examples in the app-screens file "INITO |
 * IOS – Home", canvas "Calendar & main card & notification states" →
 * section "📱 In Prod" → "Main card states" (node 246:57921) / "Legend"
 * (node 246:61671) — same matrix, "Main card states" has the full-size
 * per-cycle-day phone screens, "Legend" has the compact swatch grid.
 * Pregnancy/Period/Fertility ratings, after test/Other states/NG rows ×
 * Past/Present/Future columns. The Legend is the copy AND color source of
 * truth for the states it documents — the DS page's own headline copy
 * ("High chance of getting pregnant!" etc.) was a design-time draft that
 * never shipped; HomeScreen.jsx already overrides it with the Legend
 * wording via explicit `chips`/`headline` props, so this table now matches
 * that rather than the stale DS defaults.
 *
 * high-fertility / low-fertility / pregnancy: chip + headline corrected to
 * the literal Legend text (unchanged gradient — colors already matched).
 *
 * ovulation-confirmed / peak-fertility (COLOR FIX, verified against the
 * full-size "Cycle day 13" / "Cycle day 21" phone screens in node
 * 246:57921, not just the small Legend swatches): the Legend's "Peak
 * Fertility" card (cycle day 13) renders on a PURPLE gradient and
 * "Ovulation Confirmed" (cycle day 21) on a TEAL gradient — the reverse of
 * how this file had its two purple/teal classes assigned before this fix.
 * `ovulation-confirmed` now points at the teal `--fertile-window` class,
 * and the new `peak-fertility` state points at the purple `--ovulation`
 * class. The CSS class names themselves weren't renamed (lower blast
 * radius — `.day-status-card--ovulation` now backs the Peak Fertility
 * state, `.day-status-card--fertile-window` backs Ovulation Confirmed;
 * both still resolve to the correct token/color, just under their
 * previous, now slightly-misleading, class name).
 *
 * waiting-for-pdg-rise / pdg-is-rising: new states for the previously-
 * unused `--gradient-wfpr` token ("Waiting For PdG Rise" — defined in
 * tokens.css but not wired to any state before this pass), matching the
 * Legend's blue/indigo "Waiting for PdG rise" and "PdG is rising" cards
 * (cycle day 14).
 *
 * fertile-window (the old, pre-fix generic state, kept) / attention /
 * informational: no literal Legend text match exists for these three — no
 * change to their copy or gradient. Their gradients were independently
 * double-checked against the DS file's own 5 published Day Status Card
 * variants (fetched by componentKey, gradient stops read directly off the
 * node): high-fertility #0aca89→#109e6f, low-fertility #ff7955→#ec6766,
 * attention #f87676→#dd525c, informational #b2b8ca→#7f8598, and
 * fertile-window itself #38abc5→#009bae — all match this file's existing
 * `--gradient-*` token values exactly, so none of those four needed a
 * fix; only the ovulation/peak-fertility pairing above was wrong. The full
 * remaining Legend roster (Period, Take test tomorrow, Test not
 * required/required/optional, Missed test, Fertility data not available,
 * NG in-progress states) is documented as reference rows — not invented
 * STATE_META entries — in DayStatusCard.stories.jsx's "Legend/Main Card
 * States" story, since they
 * don't have a confirmed gradient token of their own.
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
  "peak-fertility": {
    gradient: "day-status-card--ovulation",
    chips: ["Cycle day 13"],
    headline: "Peak Fertility",
  },
  "ovulation-confirmed": {
    gradient: "day-status-card--fertile-window",
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
  // Legacy aliases (pre-dating the chips/headline API). Home uses the
  // current Storybook props; aliases remain so older call sites still render.
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
