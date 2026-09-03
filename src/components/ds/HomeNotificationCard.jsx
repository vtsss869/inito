import { Text } from "./Text.jsx";
import { Button } from "./Button.jsx";
import { DailyLogRow, HOME_DAILY_LOGS } from "./DailyLog.jsx";
import chevronRight from "../../assets/icons/chevron-right.svg";
import illustHighFertility from "../../assets/icons/illust-high-fertility.svg";
import illustNoMoreTests from "../../assets/icons/illust-no-more-tests.svg";
import notifPeriod from "../../assets/icons/notification/notif-period.svg";
import notifLowFertility from "../../assets/icons/notification/notif-low-fertility.svg";
import notifPeakFertility from "../../assets/icons/notification/notif-peak-fertility.svg";
import notifOvulationConfirmed from "../../assets/icons/notification/notif-ovulation-confirmed.svg";
import notifWaiting from "../../assets/icons/notification/notif-waiting.svg";
import notifNextTestTomorrow from "../../assets/icons/notification/notif-next-test-tomorrow.svg";
import notifUnknownFertility from "../../assets/icons/notification/notif-unknown-fertility.svg";
import notifResultWaiting from "../../assets/icons/notification/notif-result-waiting.svg";
import notifTestInProgress from "../../assets/icons/notification/notif-test-in-progress.svg";
import notifStrips from "../../assets/icons/notification/notif-strips.svg";
import notifHearts from "../../assets/icons/notification/notif-hearts.svg";
import notifCommunity from "../../assets/icons/notification/notif-community.svg";
import notifReferral from "../../assets/icons/notification/notif-referral.svg";
import notifPregnancyArticle from "../../assets/icons/notification/notif-pregnancy-article.svg";
import notifInfo from "../../assets/icons/notification/notif-info.svg";

/**
 * Figma DS: `Home Notification Card` component set
 *
 * Shared shell: white, Grey Borders, radius 28, pt 8, overflow clip, width ~342
 *
 * Content variants used on Home HF:
 * - daily-logs — title + caption + chevron Main Button + `.wrapper` DailyLogRow
 * - message — illustration + title + body (High Fertility)
 * - hormones — title + caption + chevron + hormone results `.wrapper`
 *
 * Figma audit note: the actual `Home Notification Card` component set on the
 * Cards page uses inconsistent legacy variant naming (`Property 1=3,
 * old/new=new`, `Property 1=prod type notif, old/new=new`, plus two
 * `old/new=old` duplicates that read as deprecated) rather than a clean
 * content-type axis, and its `componentPropertyDefinitions` throws
 * ("Component set has existing errors") the same way the Buttons-page
 * `.Link` set does. The three content variants above were kept as-is since
 * they were reconciled against real Home HF usage, which is a clearer
 * source of truth than the Figma set's own variant names.
 */

const HORMONES_DEFAULT = [
  { id: "e3g", label: "E3G", color: "var(--hormones-e3g)", value: "78.4" },
  { id: "lh", label: "LH", color: "var(--hormones-lh)", value: "1.1" },
  { id: "pdg", label: "PdG", color: "var(--hormones-pdg)", value: "2.2" },
  { id: "fsh", label: "FSH", color: "var(--hormones-fsh)", value: "1.5" },
];

function CardHeader({ title, caption, action }) {
  return (
    <div className="hnc__header" data-name="Copy">
      <div className="hnc__header-content" data-name="Content">
        <div className="hnc__header-copy" data-name="Copy">
          <div className="hnc__title" data-name="Title">
            <Text variant="caption-bold-16">{title}</Text>
          </div>
          {caption != null && caption !== false ? (
            <div className="hnc__caption" data-name="Caption">
              <Text variant="mini" color="grey">
                {caption}
              </Text>
            </div>
          ) : null}
        </div>
      </div>
      {action}
    </div>
  );
}

function ChevronAction({ label }) {
  return (
    <Button
      variant="grey"
      size="medium"
      icon={chevronRight}
      iconOnly
      aria-label={label}
    />
  );
}

function DailyLogsContent({
  title = "Fill in your daily logs",
  caption = "0/15 logged",
  items = HOME_DAILY_LOGS,
}) {
  return (
    <>
      <CardHeader
        title={title}
        caption={caption}
        action={<ChevronAction label="Open daily logs" />}
      />
      <DailyLogRow items={items} />
    </>
  );
}

function MessageContent({
  title = "You have High Fertility today",
  body = "You’re in fertile phase, and we’re looking for signs of your LH surge to help identify your Peak Fertility. Keep up your efforts to conceive —this is one of your most important windows.",
  illustration = illustHighFertility,
  cta,
  ctaVariant = "secondary",
}) {
  return (
    <div className="hnc__message" data-name="Copy">
      <div className="hnc__message-top">
        <div className="hnc__illustration" data-name="Illustration">
          <img src={illustration} alt="" width={36} height={60} />
        </div>
        <div className="hnc__message-title" data-name="Title">
          <Text variant="caption-bold-16">{title}</Text>
        </div>
      </div>
      <div className="hnc__message-body" data-name="Body">
        <Text variant="caption-14">{body}</Text>
      </div>
      {cta ? (
        <div className="hnc__message-action" data-name="Action">
          <Button variant={ctaVariant} size="medium">
            {cta}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

function HormonesContent({
  title = "Hormones",
  caption = "1 Test Done",
  time = "2:45 PM",
  hormones = HORMONES_DEFAULT,
}) {
  return (
    <>
      <CardHeader
        title={title}
        caption={caption}
        action={<ChevronAction label="Open hormone results" />}
      />
      <div className="hnc__hormones" data-name=".wrapper component">
        <div className="hnc__hormones-inner" data-name="Hormones test results">
          <div className="hnc__hormones-labels" data-name="Hormones labels">
            {hormones.map((h) => (
              <span
                key={h.id}
                className="hnc__hormones-label t-mini"
                style={{ color: h.color }}
              >
                {h.label}
              </span>
            ))}
          </div>
          <div className="hnc__hormones-results" data-name="Results">
            <div className="hnc__hormones-row" data-name="Row">
              <div className="hnc__hormones-time" data-name="Time">
                <span className="hnc__time-pill t-mini-semibold">{time}</span>
                <span className="hnc__time-divider" data-name="Divider" />
              </div>
              <div className="hnc__hormones-values" data-name="Results">
                {hormones.map((h) => (
                  <Text key={h.id} variant="caption-14" className="hnc__hormones-value">
                    {h.value}
                  </Text>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function HomeNotificationCard({
  content = "daily-logs",
  className = "",
  ...props
}) {
  const classes = ["hnc", `hnc--${content}`, className].filter(Boolean).join(" ");

  let body = null;
  if (content === "daily-logs") {
    body = <DailyLogsContent {...props} />;
  } else if (content === "message") {
    body = <MessageContent {...props} />;
  } else if (content === "hormones") {
    body = <HormonesContent {...props} />;
  }

  return (
    <article className={classes} data-name="Home Notification Card">
      {body}
    </article>
  );
}

/** Convenience exports matching Home usage */
export function DailyLogsCard(props) {
  return <HomeNotificationCard content="daily-logs" {...props} />;
}

export const TEST_NOT_REQUIRED_MESSAGE = {
  title: "Test Not Required Today",
  body: "You were not required to take a test today for fertility prediction and ovulation confirmation. We’ll let you know when you need to take your next test.",
  illustration: illustNoMoreTests,
};

/**
 * Figma "INITO | IOS – Home" (app-screens file), canvas "Calendar & main
 * card & notification states" → section "📱 In Prod" → "Legend" (node
 * 246:61671) "Notifications" grid, cross-checked 1:1 against the "Inito
 * Prod" column (a byte-for-byte duplicate of "Design by o0" in the same
 * Legend — i.e. the shipped copy, not just a design exploration). Title
 * and body are transcribed verbatim; icons are matched by the bulk
 * notification-icon catalog's own semantic filename
 * (src/assets/icons/notification/*.svg) rather than guessed from pixels.
 * Grouped the same way the Legend groups them.
 */
export const PERIOD_PAST_MESSAGE = {
  title: "You Were on Your Period",
  body: "You logged this as a period day.",
  illustration: notifPeriod,
};
export const PERIOD_TODAY_MESSAGE = {
  title: "You were on Your Period Today",
  body: "It’s a period day. Rest, hydrate, and listen to your body.",
  illustration: notifPeriod,
};
export const EXPECTED_PERIOD_MESSAGE = {
  title: "Expected period day",
  body: "Based on your data, you are expected to be on your period today.",
  illustration: notifPeriod,
};

export const LOW_FERTILITY_SHORT_MESSAGE = {
  title: "You have Low Fertility today",
  body: "You are not in your fertile window",
  illustration: notifLowFertility,
};
export const LOW_FERTILITY_MESSAGE = {
  title: "You have Low Fertility today",
  body: "Your fertility is low today as you’re past your fertile window. Inito confirmed ovulation earlier through a PdG rise. Based on your data, ovulation likely occured around 2026-07-15 — typically 24-36 hours after your Peak Fertility.",
  illustration: notifLowFertility,
};
export const HIGH_FERTILITY_SHORT_MESSAGE = {
  title: "You have High Fertility today",
  body: "You are in your fertile window. Having sex during high fertility will maximise your chances of conception.",
  illustration: illustHighFertility,
};
// The long/in-app-card copy for High Fertility is MessageContent's own
// default (title/body match this constant's values already) — no separate
// export needed, kept as the component default since it's the most common
// Home usage.
export const PEAK_FERTILITY_MESSAGE = {
  title: "You have Peak Fertility today",
  body: "Your chances of conception are the highest today. Don’t miss the opportunity to have sex.",
  illustration: notifPeakFertility,
};
export const OVULATION_CONFIRMED_MESSAGE = {
  title: "Ovulation confirmed",
  body: "In this cycle, you likely ovulated around 2026-07-23 (about 24-36 hours after your Peak Fertility day). Your fertility rating is low today since you’re now past your fertile window.",
  illustration: notifOvulationConfirmed,
};
export const WAS_WAITING_FOR_PDG_RISE_MESSAGE = {
  title: "Was waiting for PdG rise",
  body: "We are waiting for your PdG rise to confirm ovulation in this cycle. Keep testing to monitor rise in PdG level.",
  illustration: notifInfo,
};
export const WAITING_FOR_PDG_RISE_MESSAGE = {
  title: "Waiting for PdG rise",
  // Verbatim from Figma (node 246:61671, instance 246:62070/325:50268),
  // typos included on purpose — see the file-level docstring below.
  body: "After Peak Fertility PdG needs to rise steadily over a few fdays to confirm ovulation. A single rise isn’r enough - so we keeep testing daily, and Inito will confirm ovulation once the pattern is clear.",
  illustration: notifInfo,
};
export const PDG_IS_RISING_MESSAGE = {
  title: "PdG is rising",
  body: "Your PdG levels are starting to rise! If they elevated over the next few days, we’ll be able to confirm ovulation. Keep testing to track the trend.",
  illustration: notifInfo,
};

export const TESTING_OPTIONAL_MESSAGE = {
  title: "Testing Optional Today",
  body: "You don’t need to test today to track fertile days or confirm ovulation, but you can still monitor your hormone levels if you’d like.",
  illustration: illustNoMoreTests,
};
export const TESTING_OPTIONAL_PREGNANCY_MESSAGE = {
  title: "Testing is Optional",
  // Verbatim from Figma (node 246:61671, instance 316:185821/325:50092).
  body: "Testing isn’t required in pregnncy mode, though you can still test to follow your hormone patterns.",
  illustration: illustNoMoreTests,
  cta: "Take a test",
  ctaVariant: "primary",
};
export const READY_FOR_NEXT_TEST_MESSAGE = {
  title: "Ready for the Next Test",
  body: "Test when prompted going forward to help us catch your hormone patterns.",
  illustration: notifNextTestTomorrow,
};
export const TAKE_A_TEST_TODAY_MESSAGE = {
  title: "Take a Test Today",
  // Verbatim from Figma (node 246:61671, instance 246:62065/325:49990).
  body: "It’s test day today! This helps track your fertile days and confirm ovulation, giving you the best insights fot this cycle.",
  illustration: notifNextTestTomorrow,
};
export const TODAYS_A_TEST_DAY_MESSAGE = {
  title: "Today’s a Test Day",
  body: "Track your hormones today to keep your insights up to date.",
  illustration: notifNextTestTomorrow,
};
export const FERTILITY_DATA_NOT_AVAILABLE_MESSAGE = {
  title: "Fertility Data Not Available",
  body: "Oops! We don’t have data for this day. This may be because you haven’t started using Inito yet or you recently reset cycle data.",
  illustration: notifUnknownFertility,
};

export const CHECKING_STRIP_MESSAGE = {
  title: "Checking strip",
  body: "Your test will start once we ensure the test strip is ready. Just a moment!",
  illustration: notifResultWaiting,
};
export const TEST_IN_PROGRESS_MESSAGE = {
  title: "Test in progress",
  body: "Test initiated successfully! You can step away if you wish, but leave the phone nearby if you’re using hotspot. We’ll notify you once the test is complete,or if any errors ocuur.",
  illustration: notifTestInProgress,
};
export const TEST_PENDING_REVIEW_ALGORITHM_MESSAGE = {
  title: "Test Pending Review",
  body: "Our algoritms request a second level verification of your test. Our team will review your results and get back within 2 working hours (EST time). Your personal details will not be visible to the Team. You can return to the Home Screen and once the review is complete, the appropriate result will be sent to the app.",
  illustration: notifResultWaiting,
};
export const TEST_PENDING_REVIEW_MANUAL_MESSAGE = {
  title: "Test Pending Review",
  // Verbatim from Figma (node 246:61671, instance 304:61948/325:50500) —
  // "We-re" is a literal hyphen in the source text, not an apostrophe typo.
  body: "We-re doing a quick manual check to make sure everything looks right. You’ll see your results on the homescreen in 2 working hours. Don’t worry - your personal details aren’t shared with the team.",
  illustration: notifResultWaiting,
};

export const LH_SURGE_STRIPS_MESSAGE = {
  title: "Don’t Miss Your LH Surge",
  body: "Running low on strips? You can still make it. Order now with Express Shipping to get your strips in 3 days or less.",
  illustration: notifStrips,
  cta: "Shop now",
};
export const TEST_STRIPS_ALERT_MESSAGE = {
  title: "Test strips alert",
  body: "You will run out of strips during your next few days. Use urgent delivery.",
  illustration: notifStrips,
  cta: "Shop now",
};
export const INCREASE_CHANCES_MESSAGE = {
  title: "Wanna Increase your chances of conception?",
  body: "Here’s a detailed picture of how you can increase your chances of conception while tracking with Inito",
  illustration: notifHearts,
  cta: "Read now",
};
export const VISIT_A_DOCTOR_MESSAGE = {
  title: "Visit a doctor",
  body: "You can pause, continue tracking, or simply rest; whatever feels right.",
  illustration: notifInfo,
  cta: "Learn More",
};
export const HORMONE_CHARTS_HELP_MESSAGE = {
  title: "Need help with hormone charts?",
  body: "Kudos on completing your first few tests! If you want to learn more about hormone tracking, connect with thousands of other Inito users on our community & get answers to your queries.",
  illustration: notifCommunity,
  cta: "Join Now",
  ctaVariant: "primary",
};
export const REFERRAL_MESSAGE = {
  title: "Tracking is better with friends!",
  body: "Give a friend the best deal ever on the Inito Starter Kit. When they join, you get a free pack of strips.",
  illustration: notifReferral,
  cta: "Invite a friend",
  ctaVariant: "primary",
};
export const TAKE_THIS_TIME_MESSAGE = {
  title: "Take this time for you",
  body: "Learn what to expect, how to track ovulation, and when you might be ready to try again.",
  illustration: notifPregnancyArticle,
  cta: "Explore our Blog",
  ctaVariant: "primary",
};

export function FertilityNotificationCard(props) {
  return <HomeNotificationCard content="message" {...props} />;
}

export function HormoneResultsCard(props) {
  return <HomeNotificationCard content="hormones" {...props} />;
}
