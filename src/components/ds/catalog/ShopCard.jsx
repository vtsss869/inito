import { Text } from "../Text.jsx";
import stripImg from "../../../assets/shop/strip.png";
import primeBadge from "../../../assets/shop/prime-badge.png";
import amazonPrime from "../../../assets/shop/amazon-prime.svg";
import zapFast from "../../../assets/shop/zap-fast.svg";
import arrowRight from "../../../assets/shop/arrow-right.svg";

/**
 * Figma DS: Shop Card (sampled from product instance 478:46115 + DS notes)
 * Quantity × Type axes exist in DS; this implements the primary CTA layout.
 * Storybook catalog — not wired to Home.
 */
export function ShopCard({
  quantityLabel = "30",
  title = "Pack of 30 fertility strips",
  description = "Measures LH, E3G, PdG and FSH. ",
  price = "$108",
  cta = "Buy with",
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
          <button type="button" className="shop-card__buy">
            <Text as="span" variant="caption-bold-14" color="white">
              {cta}
            </Text>
            <img src={amazonPrime} alt="" height={26} />
          </button>
        </div>
        <button type="button" className="shop-card__delivery">
          <span className="shop-card__delivery-left">
            <img src={zapFast} alt="" width={24} height={24} />
            <Text as="span" variant="mini-semibold" color="main">
              Fast delivery with Amazon Prime
            </Text>
          </span>
          <img src={arrowRight} alt="" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
