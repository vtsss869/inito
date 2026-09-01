import { Text } from "../Text.jsx";
import { Counter } from "../Counter.jsx";
import { MaskIcon } from "../Icon.jsx";
import stripImg from "../../../assets/shop/strip.png";
import primeBadge from "../../../assets/shop/prime-badge.png";
import amazonPrime from "../../../assets/shop/amazon-prime.svg";
import zapFast from "../../../assets/shop/zap-fast.svg";
import arrowRight from "../../../assets/shop/arrow-right.svg";

/**
 * Figma DS: Shop Card (sampled from product instance 478:46115 + DS notes)
 * Quantity × Type axes exist in DS; this implements the primary CTA layout.
 * `ctaVariant` mirrors the Cards page `.Meta Button Component Set`
 * (Variable=Button/Counter) — "counter" swaps the Buy button for a quantity
 * stepper, e.g. once the item is already in the cart.
 * Storybook catalog — not wired to Home.
 */
export function ShopCard({
  quantityLabel = "30",
  title = "Pack of 30 fertility strips",
  description = "Measures LH, E3G, PdG and FSH. ",
  price = "$108",
  cta = "Buy with",
  ctaVariant = "button",
  counterValue = 1,
  type = "ovulation",
  className = "",
}) {
  return (
    <div className={`shop-card ${className}`.trim()} data-name="Shop Card" data-type={type}>
      <div className="shop-card__image" data-name="il_shop">
        <span className="shop-card__qty t-header-2">{quantityLabel}</span>
        <img className="shop-card__strip" src={stripImg} alt="" />
        <img className="shop-card__prime-badge" src={primeBadge} alt="" width={57} height={24} />
      </div>
      <div className="shop-card__content">
        <div className="shop-card__copy">
          <Text as="h3" variant="header-4">
            {title}
          </Text>
          <Text as="p" variant="body">
            {description}
          </Text>
        </div>
        <div className="shop-card__price-row">
          <Text as="span" variant="header-4">
            {price}
          </Text>
          {ctaVariant === "counter" ? (
            <Counter value={counterValue} />
          ) : (
            <button type="button" className="shop-card__buy">
              <Text as="span" variant="caption-bold-14" color="white">
                {cta}
              </Text>
              <img src={amazonPrime} alt="" height={26} />
            </button>
          )}
        </div>
        <button type="button" className="shop-card__delivery">
          <span className="shop-card__delivery-left">
            <MaskIcon src={zapFast} size={24} alt="" className="shop-card__delivery-icon" />
            <Text as="span" variant="mini-semibold" color="main">
              Fast delivery with Amazon Prime
            </Text>
          </span>
          <MaskIcon src={arrowRight} size={24} alt="" className="shop-card__delivery-icon" />
        </button>
      </div>
    </div>
  );
}
