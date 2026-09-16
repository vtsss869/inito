import { Text } from "../Text.jsx";
import { Button } from "../Button.jsx";
import { SymptomChip } from "./SymptomChip.jsx";
import infoIcon from "../../../assets/icons/system/sys-interface-interface-info-circle.svg";
import pencilIcon from "../../../assets/icons/system/sys-interface-interface-pencil.svg";

const JOURNAL_PLACEHOLDER =
  "Describe your day, jot down your current feelings or mood.";

/**
 * Figma Home: Daily Logs Cards (`DailyLogsCards`)
 * White card · Grey Borders · radius 24 · p-8 · title + optional info ·
 * wrap chip grid · optional full-width actions / journal field.
 *
 * Journal (`675:147480`): pl 16 / pr 8 / py 8 · empty h 142 with grey pencil
 * button · logged = Mini body Text Black, no pencil.
 */
export function DailyLogsSection({
  title,
  info = false,
  onInfoClick,
  options = [],
  selectedIds = [],
  onToggle,
  multi = true,
  tone = "default",
  helper,
  actions = [],
  journal = false,
  journalValue = "",
  journalPlaceholder = JOURNAL_PLACEHOLDER,
  onJournalChange,
  trailing,
  bare = false,
  className = "",
  children,
}) {
  const journalLogged = journal && Boolean(String(journalValue || "").trim());
  const classes = [
    bare ? "daily-logs-section daily-logs-section--bare" : "daily-logs-section",
    journal ? "daily-logs-section--journal" : "",
    journal && !journalLogged ? "daily-logs-section--journal-empty" : "",
    journalLogged ? "daily-logs-section--journal-logged" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleChip = (id) => {
    if (!onToggle) return;
    onToggle(id);
  };

  return (
    <section className={classes} data-name="Daily Logs Cards">
      {title ? (
        <div
          className={
            journal
              ? "daily-logs-section__header daily-logs-section__header--journal"
              : "daily-logs-section__header"
          }
          data-name="Copy"
        >
          <Text as="h2" variant="caption-bold-16" className="daily-logs-section__title">
            {title}
          </Text>
          <div className="daily-logs-section__header-actions">
            {info ? (
              <Button
                variant="transparent"
                size="medium"
                icon={infoIcon}
                iconOnly
                className="daily-logs-section__info"
                aria-label={`${title} info`}
                onClick={onInfoClick}
              />
            ) : null}
            {journal && !journalLogged ? (
              <Button
                variant="grey"
                size="medium"
                icon={pencilIcon}
                iconOnly
                className="daily-logs-section__journal-pen"
                aria-label="Write journal"
              />
            ) : null}
            {trailing}
          </div>
        </div>
      ) : null}

      {helper ? (
        <Text as="p" variant="mini" color="grey" className="daily-logs-section__helper">
          {helper}
        </Text>
      ) : null}

      {options.length > 0 ? (
        <div className="daily-logs-section__chips" data-name=".wrapper_symptoms">
          {options.map((opt) => (
            <SymptomChip
              key={opt.id}
              label={opt.label}
              icon={opt.icon}
              tone={opt.tone || tone}
              selected={selectedIds.includes(opt.id)}
              onClick={() => handleChip(opt.id)}
            />
          ))}
        </div>
      ) : null}

      {journal ? (
        <div className="daily-logs-section__journal-body" data-name="Body container">
          <textarea
            className="daily-logs-section__journal t-mini"
            value={journalValue}
            placeholder={journalPlaceholder}
            onChange={(e) => onJournalChange?.(e.target.value)}
            rows={journalLogged ? 4 : 3}
          />
        </div>
      ) : null}

      {children}

      {actions.length > 0 ? (
        <div className="daily-logs-section__actions">
          {actions.map((action) => (
            <Button
              key={action.id || action.label}
              className={["btn--full", action.className].filter(Boolean).join(" ")}
              size={action.size || "medium"}
              variant={action.variant || "grey"}
              icon={action.icon}
              iconMono={action.iconMono ?? true}
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          ))}
        </div>
      ) : null}
    </section>
  );
}

/** Small date / cycle meta chips under the Daily Logs navbar.
 * Figma Home `Date` (`212:399521`): row gap 4, px 24, pb 8;
 * chips h 32, bg grey, radius pill; date chip pl 8 / pr 12 + 20px icon;
 * text Mini 12 / Text Black.
 */
export function DailyLogsMeta({
  dateLabel = "2 May 2023",
  cycleLabel = "Cycle Day 13",
  dpoLabel = "DPO 10",
  icon,
  className = "",
}) {
  return (
    <div className={`daily-logs-meta ${className}`.trim()} data-name="Date">
      <span className="daily-logs-meta__chip daily-logs-meta__chip--date" data-name="Chips">
        {icon ? (
          <img className="daily-logs-meta__icon" src={icon} alt="" width={20} height={20} />
        ) : null}
        <Text as="span" variant="mini">
          {dateLabel}
        </Text>
      </span>
      {cycleLabel ? (
        <span className="daily-logs-meta__chip" data-name="Chips">
          <Text as="span" variant="mini">
            {cycleLabel}
          </Text>
        </span>
      ) : null}
      {dpoLabel ? (
        <span className="daily-logs-meta__chip" data-name="Chips">
          <Text as="span" variant="mini">
            {dpoLabel}
          </Text>
        </span>
      ) : null}
    </div>
  );
}

export const JOURNAL_EMPTY_PLACEHOLDER = JOURNAL_PLACEHOLDER;
export const JOURNAL_LOGGED_SAMPLE =
  "Dear Diary, I am stepping for the first time into the comforting space between your pages where I will be myself—no pretence, no artifice, no lies and no evasions.";
