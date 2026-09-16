import { useState } from "react";
import { Navbar } from "./Navbar.jsx";
import { Text } from "./Text.jsx";
import { MaskIcon } from "./Icon.jsx";
import closeIcon from "../../assets/icons/system/sys-interface-interface-close-m.svg";
import successIcon from "../../assets/icons/system/sys-interface-interface-success.svg";
import minusIcon from "../../assets/icons/system/sys-interface-interface-minus.svg";
import plusIcon from "../../assets/icons/system/sys-interface-interface-plus.svg";
import {
  DAILY_LOGS_SECTIONS,
  normalizeDailyLogsLayout,
  getDefaultDailyLogsLayout,
} from "./dailyLogsData.js";

function titleById(id) {
  return DAILY_LOGS_SECTIONS.find((s) => s.id === id)?.title || id;
}

/**
 * Figma `128:111439` — Edit Daily logs
 * Section titles: DS Text `mini` + grey.
 * Tap a category row (or − / +) to move it between Visible and Hidden.
 */
export function EditDailyLogsScreen({
  initialLayout = null,
  onClose,
  onSave,
  className = "",
}) {
  const seed = normalizeDailyLogsLayout(initialLayout || getDefaultDailyLogsLayout());
  const [visibleIds, setVisibleIds] = useState(() => [...seed.visibleIds]);
  const [hiddenIds, setHiddenIds] = useState(() => [...seed.hiddenIds]);

  const hideItem = (id) => {
    setVisibleIds((prev) => prev.filter((x) => x !== id));
    setHiddenIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const showItem = (id) => {
    setHiddenIds((prev) => prev.filter((x) => x !== id));
    setVisibleIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const renderRow = (id, list) => {
    const hidden = list === "hidden";
    const toggle = () => (hidden ? showItem(id) : hideItem(id));
    return (
      <button
        key={id}
        type="button"
        className={[
          "edit-daily-logs__row",
          hidden ? "edit-daily-logs__row--hidden" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        data-name="Item"
        aria-label={hidden ? `Show ${titleById(id)}` : `Hide ${titleById(id)}`}
        onClick={toggle}
      >
        <span
          className={
            hidden
              ? "edit-daily-logs__toggle edit-daily-logs__toggle--show"
              : "edit-daily-logs__toggle edit-daily-logs__toggle--hide"
          }
          aria-hidden="true"
        >
          <MaskIcon src={hidden ? plusIcon : minusIcon} size={32} />
        </span>
        <Text
          as="span"
          variant="caption-bold-16"
          color={hidden ? "grey" : undefined}
          className="edit-daily-logs__label"
        >
          {titleById(id)}
        </Text>
      </button>
    );
  };

  return (
    <div className={`edit-daily-logs ${className}`.trim()} data-name="Edit Daily logs">
      <Navbar
        title="Edit Daily logs"
        titleSize="h4"
        align="center"
        back={closeIcon}
        onBackClick={onClose}
        rightIcons={[
          {
            src: successIcon,
            label: "Save daily logs layout",
            onClick: () => onSave?.({ visibleIds, hiddenIds }),
          },
        ]}
      />

      <div className="edit-daily-logs__scroll">
        <section className="edit-daily-logs__section" data-name="Visible section">
          <Text
            as="p"
            variant="mini"
            color="grey"
            className="edit-daily-logs__section-label"
            data-name="Title Section"
          >
            Visible
          </Text>
          <div className="edit-daily-logs__list" data-name="Visible">
            {visibleIds.map((id) => renderRow(id, "visible"))}
          </div>
        </section>

        <section className="edit-daily-logs__section" data-name="Hidden section">
          <Text
            as="p"
            variant="mini"
            color="grey"
            className="edit-daily-logs__section-label"
            data-name="Title Section"
          >
            Hidden
          </Text>
          <div
            className={[
              "edit-daily-logs__list",
              hiddenIds.length === 0 ? "edit-daily-logs__list--drop" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            data-name="Hidden"
          >
            {hiddenIds.map((id) => renderRow(id, "hidden"))}
          </div>
        </section>
      </div>
    </div>
  );
}
