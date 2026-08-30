/**
 * Figma DS: Carousel Dots
 * gap 12 · px-20 py-12 · active 8px · inactive 4px Grey Icons
 * Storybook catalog — not wired to Home.
 */
export function CarouselDots({ count = 4, active = 0, className = "" }) {
  const n = Math.max(1, Math.min(6, count));
  return (
    <div className={`ds-carousel-dots ${className}`.trim()} data-name="Carousel Dots">
      {Array.from({ length: n }, (_, i) => (
        <span
          key={i}
          className={
            i === active ? "ds-carousel-dots__dot ds-carousel-dots__dot--active" : "ds-carousel-dots__dot"
          }
        />
      ))}
    </div>
  );
}
