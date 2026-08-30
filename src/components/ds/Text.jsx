export function Text({
  as: Tag = "p",
  variant = "body",
  color = "black",
  className = "",
  children,
  ...props
}) {
  const colorClass = color === "current" ? "color-current" : `color-${color}`;
  return (
    <Tag className={`t-${variant} ${colorClass} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
