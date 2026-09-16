import { useMemo, useState } from "react";
import { Text } from "../Text.jsx";
import { Button } from "../Button.jsx";
import { SymptomChip } from "./SymptomChip.jsx";
import checkIcon from "../../../assets/icons/system/sys-interface-interface-check-small.svg";
import backspaceIcon from "../../../assets/icons/system/sys-kb-backspace.svg";
import closeSmall from "../../../assets/icons/system/sys-interface-interface-close-s.svg";
import follicleSizeIcon from "../../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-follicle-size.svg";
import endometrialIcon from "../../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-endometrial-thickness.svg";
import leftOvaryIcon from "../../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-left-ovary.svg";
import rightOvaryIcon from "../../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-right-ovary.svg";
import fluidIcon from "../../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-fluid-in-pod.svg";
import lufIcon from "../../../assets/icons/symptoms/32px/symp32-follicle-tracking-follicle-tracking-luf.svg";

const RANGE_ERROR = "Invalid entry. Enter value between 2mm - 30mm.";

const KEY_ROWS = [
  [
    { id: "1", label: "1" },
    { id: "2", label: "2", sub: "ABC" },
    { id: "3", label: "3", sub: "DEF" },
  ],
  [
    { id: "4", label: "4", sub: "GHI" },
    { id: "5", label: "5", sub: "JKL" },
    { id: "6", label: "6", sub: "MNO" },
  ],
  [
    { id: "7", label: "7", sub: "PQRS" },
    { id: "8", label: "8", sub: "TUV" },
    { id: "9", label: "9", sub: "WXYZ" },
  ],
  [
    { id: ",", label: ",", ghost: true },
    { id: "0", label: "0" },
    { id: "backspace", label: "Delete", ghost: true, icon: true },
  ],
];

const MULTI_TRACKS = [
  { id: "fluid", label: "Fluid in Pod", icon: fluidIcon },
  { id: "luf", label: "LUF Detected", icon: lufIcon },
];

function parseMm(raw) {
  if (!raw && raw !== 0) return null;
  const n = Number(String(raw).replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

function isValidMm(raw) {
  const n = parseMm(raw);
  return n != null && n >= 2 && n <= 30;
}

function isOutOfRange(raw) {
  if (raw === "" || raw == null) return false;
  const n = parseMm(raw);
  if (n == null) return true;
  return n < 2 || n > 30;
}

function appendDigit(raw, digit) {
  let next = `${raw || ""}${digit}`.replace(".", ",");
  const parts = next.split(",");
  if (parts.length > 2) next = `${parts[0]},${parts.slice(1).join("")}`;
  if (next.length > 5) next = next.slice(0, 5);
  return next;
}

/**
 * Figma Follicle Tracking overlay.
 * Desktop / Storybook shows an iOS-style decimal keypad (visible always).
 * Scrim: white 70%. Selected chips use Background Tan (orange).
 */
export function FollicleSizeSheet({ onConfirm, onBack, className = "" }) {
  const [follicleValue, setFollicleValue] = useState("");
  const [endoValue, setEndoValue] = useState("");
  const [activeField, setActiveField] = useState("follicle");
  const [endoUnlocked, setEndoUnlocked] = useState(false);
  const [endoStarted, setEndoStarted] = useState(false);
  const [ovary, setOvary] = useState(null);
  const [multiIds, setMultiIds] = useState([]);

  const follicleValid = isValidMm(follicleValue);
  const showEndo = endoUnlocked || follicleValid;
  const showTracks = endoStarted;

  const follicleError = isOutOfRange(follicleValue) ? RANGE_ERROR : "";
  const endoError = endoStarted && isOutOfRange(endoValue) ? RANGE_ERROR : "";

  const activeValue = activeField === "endo" ? endoValue : follicleValue;

  const setActiveValue = (next) => {
    if (activeField === "endo") {
      setEndoValue(next);
      return;
    }
    setFollicleValue(next);
    if (isValidMm(next)) setEndoUnlocked(true);
  };

  const append = (digit) => setActiveValue(appendDigit(activeValue, digit));
  const backspace = () => setActiveValue(String(activeValue || "").slice(0, -1));
  const clearAll = () => setActiveValue("");

  const startEndo = () => {
    setEndoStarted(true);
    setActiveField("endo");
  };

  const toggleMulti = (id) => {
    setMultiIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const handleConfirm = () => {
    if (!follicleValue && !endoValue && !ovary && multiIds.length === 0) {
      onBack?.();
      return;
    }
    if (follicleValue && !isValidMm(follicleValue)) return;
    if (endoValue && !isValidMm(endoValue)) return;
    if (!follicleValue) {
      onBack?.();
      return;
    }
    onConfirm?.({
      follicleMm: parseMm(follicleValue),
      endometrialMm: endoValue && isValidMm(endoValue) ? parseMm(endoValue) : null,
      ovary,
      tracks: [...multiIds],
    });
  };

  const ovaryOptions = useMemo(
    () => [
      { id: "left", label: "Left Ovary", icon: leftOvaryIcon },
      { id: "right", label: "Right Ovary", icon: rightOvaryIcon },
    ],
    [],
  );

  return (
    <div
      className={`follicle-sheet-stage ${className}`.trim()}
      data-name="Follicle Size Sheet"
    >
      <button
        type="button"
        className="follicle-sheet-stage__scrim"
        aria-label="Dismiss"
        onClick={onBack}
      />

      <div
        className="follicle-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="follicle-sheet-title"
      >
        <div className="follicle-sheet__card" data-name="Follicle Tracking">
          <Text
            as="h2"
            id="follicle-sheet-title"
            variant="caption-bold-16"
            className="follicle-sheet__title"
          >
            Follicle Tracking
          </Text>

          <Text as="p" variant="mini" color="grey" className="follicle-sheet__helper">
            Follicle Size
          </Text>
          <button
            type="button"
            className={[
              "follicle-sheet__input",
              activeField === "follicle" ? "follicle-sheet__input--active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setActiveField("follicle")}
          >
            <img src={follicleSizeIcon} alt="" width={32} height={32} />
            <span className="follicle-sheet__field">
              <Text as="span" variant="caption-bold-14" className="follicle-sheet__value-text">
                {follicleValue || "\u00a0"}
              </Text>
              <Text as="span" variant="caption-bold-14" className="follicle-sheet__unit">
                mm
              </Text>
            </span>
          </button>
          {follicleError ? (
            <Text as="p" variant="mini" className="follicle-sheet__error">
              {follicleError}
            </Text>
          ) : null}

          {showEndo ? (
            <>
              <Text as="p" variant="mini" color="grey" className="follicle-sheet__helper">
                Endometrial Thickness
              </Text>
              {!endoStarted ? (
                <button type="button" className="follicle-sheet__input" onClick={startEndo}>
                  <img src={endometrialIcon} alt="" width={32} height={32} />
                  <Text as="span" variant="caption-bold-14" className="follicle-sheet__value">
                    Add Endometrial Thickness
                  </Text>
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className={[
                      "follicle-sheet__input",
                      activeField === "endo" ? "follicle-sheet__input--active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => setActiveField("endo")}
                  >
                    <img src={endometrialIcon} alt="" width={32} height={32} />
                    <span className="follicle-sheet__field">
                      <Text
                        as="span"
                        variant="caption-bold-14"
                        className="follicle-sheet__value-text"
                      >
                        {endoValue || "\u00a0"}
                      </Text>
                      <Text as="span" variant="caption-bold-14" className="follicle-sheet__unit">
                        mm
                      </Text>
                    </span>
                  </button>
                  {endoError ? (
                    <Text as="p" variant="mini" className="follicle-sheet__error">
                      {endoError}
                    </Text>
                  ) : null}
                </>
              )}
            </>
          ) : null}

          {showTracks ? (
            <>
              <Text as="p" variant="mini" color="grey" className="follicle-sheet__helper">
                Additional tracks
              </Text>

              {ovary ? (
                <div className="follicle-sheet__logged-row">
                  <Button
                    variant="grey"
                    size="medium"
                    icon={closeSmall}
                    iconOnly
                    className="daily-logs-section__clear"
                    aria-label="Clear ovary selection"
                    onClick={() => setOvary(null)}
                  />
                  <SymptomChip
                    label={ovaryOptions.find((o) => o.id === ovary)?.label}
                    icon={ovaryOptions.find((o) => o.id === ovary)?.icon}
                    tone="tan"
                    selected
                  />
                </div>
              ) : (
                <div className="follicle-sheet__tracks">
                  {ovaryOptions.map((opt) => (
                    <SymptomChip
                      key={opt.id}
                      label={opt.label}
                      icon={opt.icon}
                      tone="tan"
                      onClick={() => setOvary(opt.id)}
                    />
                  ))}
                </div>
              )}

              <div className="follicle-sheet__tracks">
                {MULTI_TRACKS.map((opt) => (
                  <SymptomChip
                    key={opt.id}
                    label={opt.label}
                    icon={opt.icon}
                    tone="tan"
                    selected={multiIds.includes(opt.id)}
                    onClick={() => toggleMulti(opt.id)}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="follicle-sheet__dock" data-name="Keyboard">
          <div className="follicle-sheet__toolbar" data-name="Buttons">
            <Button
              size="large"
              variant="transparent"
              className="follicle-sheet__toolbar-side"
              onClick={clearAll}
            >
              <Text as="span" variant="caption-bold-16" color="grey">
                Clear All
              </Text>
            </Button>
            <Button
              size="large"
              variant="primary"
              icon={checkIcon}
              iconOnly
              aria-label="Confirm follicle size"
              onClick={handleConfirm}
            />
            <Button
              size="large"
              variant="transparent"
              className="follicle-sheet__toolbar-side"
              onClick={onBack}
            >
              <Text as="span" variant="caption-bold-16">
                Back
              </Text>
            </Button>
          </div>

          <div className="follicle-sheet__keys" data-name="Keyboard Numeric" role="group" aria-label="Decimal keypad">
            {KEY_ROWS.map((row, rowIndex) => (
              <div key={rowIndex} className="follicle-sheet__key-row">
                {row.map((key) =>
                  key.icon ? (
                    <button
                      key={key.id}
                      type="button"
                      className="follicle-sheet__key follicle-sheet__key--ghost"
                      aria-label="Delete"
                      onClick={backspace}
                    >
                      <img src={backspaceIcon} alt="" width={23} height={17} />
                    </button>
                  ) : (
                    <button
                      key={key.id}
                      type="button"
                      className={[
                        "follicle-sheet__key",
                        key.ghost ? "follicle-sheet__key--ghost" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      aria-label={key.label}
                      onClick={() => append(key.id)}
                    >
                      <span className="follicle-sheet__key-digit">{key.label}</span>
                      {key.sub ? (
                        <span className="follicle-sheet__key-sub">{key.sub}</span>
                      ) : null}
                    </button>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
