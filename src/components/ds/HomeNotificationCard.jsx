import { Text } from "./Text.jsx";
import { Button } from "./Button.jsx";
import {
  DailyLogRow,
  HOME_DAILY_LOGS,
  homeDailyLogItemsFromSaved,
  homeDailyLogsCaption,
} from "./DailyLog.jsx";
import chevronRight from "../../assets/icons/chevron-right.svg";
import illustHighFertility from "../../assets/icons/illust-high-fertility.svg";
import illustNoMoreTests from "../../assets/icons/illust-no-more-tests.svg";

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

function ChevronAction({ label, onClick }) {
  return (
    <Button
      variant="grey"
      size="medium"
      icon={chevronRight}
      iconOnly
      aria-label={label}
      onClick={onClick}
    />
  );
}

function DailyLogsContent({
  title = "Fill in your daily logs",
  caption,
  items,
  savedDailyLogs = null,
  onOpenDailyLogs,
}) {
  const resolvedItems = items ?? homeDailyLogItemsFromSaved(savedDailyLogs);
  const resolvedCaption = caption ?? homeDailyLogsCaption(savedDailyLogs);
  return (
    <>
      <CardHeader
        title={title}
        caption={resolvedCaption}
        action={
          <ChevronAction
            label="Open daily logs"
            onClick={() => onOpenDailyLogs?.()}
          />
        }
      />
      <DailyLogRow
        items={resolvedItems.length ? resolvedItems : HOME_DAILY_LOGS}
        onItemClick={(_category, sectionId) => onOpenDailyLogs?.(sectionId)}
      />
    </>
  );
}

function MessageContent({
  title = "You have High Fertility today",
  body = "You’re in fertile phase, and we’re looking for signs of your LH surge to help identify your Peak Fertility. Keep up your efforts to conceive —this is one of your most important windows.",
  illustration = illustHighFertility,
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

export function FertilityNotificationCard(props) {
  return <HomeNotificationCard content="message" {...props} />;
}

export function HormoneResultsCard(props) {
  return <HomeNotificationCard content="hormones" {...props} />;
}
