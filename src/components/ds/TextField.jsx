import { MaskIcon } from "./Icon.jsx";

/**
 * Figma DS: Text Field (Inputs page)
 * States: Default | Focused | Filled | Error
 * Radius 36 · border 1 · px-16 py-8 · gap 6 · optional 32 icon slots
 * Storybook / DS catalog — not wired to Home.
 */
export function TextField({
  value = "",
  placeholder = "Label",
  description,
  state = "default",
  leftIcon,
  rightIcon,
  onChange,
  className = "",
}) {
  const tone =
    state === "error"
      ? "text-field--error"
      : state === "focused"
        ? "text-field--focused"
        : state === "filled"
          ? "text-field--filled"
          : "text-field--default";

  return (
    <div className={`text-field ${tone} ${className}`.trim()} data-name="Text Field">
      <div className="text-field__item" data-name="Item">
        {leftIcon ? (
          <span className="text-field__icon">
            <MaskIcon src={leftIcon} size={32} alt="" />
          </span>
        ) : null}
        <input
          className="text-field__input t-caption-16"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          aria-invalid={state === "error"}
        />
        {rightIcon ? (
          <span className="text-field__icon">
            <MaskIcon src={rightIcon} size={32} alt="" />
          </span>
        ) : null}
      </div>
      {description != null && description !== false ? (
        <div className="text-field__description">
          <span className="t-mini">{description}</span>
        </div>
      ) : null}
    </div>
  );
}
