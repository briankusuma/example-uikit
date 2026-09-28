import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';
import { ProductActionDropdown } from './ProductActionDropdown';

/**
 * ProductInfoSection component
 * Figma Node #22904:38167 and #22689:10619: Seller profile, pricing, tags, description, purchase actions, and options menu
 */
export const ProductInfoSection = ({
  title,
  price,
  location = 'Juba, South Sudan',
  categories = ['Computer & Accessories', 'Tech Hardware', '3+'],
  description = '',
  businessName = 'Riseloop',
  businessAvatar = '/images/business-avatar.png',
  businessCategory = 'Electronics',
  isVerified = true,
  onBuyNow,
  onContactSeller,
  onEdit,
  onDelete,
  onShare,
  className = '',
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleShare = () => {
    if (onShare) {
      onShare();
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className={`biz-product-info ${className}`}>
      {/* Seller / Business Header */}
      <div className="biz-product-info__seller">
        <div className="biz-product-info__seller-profile">
          <img
            src={businessAvatar}
            alt={businessName}
            className="biz-product-info__seller-avatar"
          />
          <div className="biz-product-info__seller-details">
            <div className="biz-product-info__seller-name-row">
              <span className="biz-product-info__seller-name">{businessName}</span>
              {isVerified && (
                <span
                  className="biz-product-info__seller-verified"
                  title="Verified Business"
                >
                  <Icon name="verified" size={16} />
                </span>
              )}
            </div>
            <span className="biz-product-info__seller-category">
              {businessCategory}
            </span>
          </div>
        </div>

        {/* Options / Action Menu (Figma Node #22689:10619) */}
        <div className="biz-product-info__menu-container">
          <button
            type="button"
            className="biz-product-info__share-btn"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            title="Options"
            aria-label="Product options"
            aria-expanded={isMenuOpen}
          >
            <Icon name="dots-three" size={18} color="#000000" />
          </button>

          <ProductActionDropdown
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>

      <hr className="biz-product-info__divider" />

      {/* Main Details: Title, Price, Location */}
      <div className="biz-product-info__main-details">
        <div className="biz-product-info__pricing-group">
          <h2 className="biz-product-info__title">{title}</h2>
          <div className="biz-product-info__price">{price}</div>
        </div>

        {location && (
          <div className="biz-product-info__location">
            <Icon name="map-pin" size={16} color="#555555" />
            <span className="biz-product-info__location-text">{location}</span>
          </div>
        )}
      </div>

      {/* Categories / Tags */}
      {categories.length > 0 && (
        <div className="biz-product-info__section">
          <h3 className="biz-product-info__section-title">Category</h3>
          <div className="biz-product-info__tags">
            {categories.map((cat, idx) => (
              <span key={idx} className="biz-product-info__tag-badge">
                {cat}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      {description && (
        <div className="biz-product-info__section">
          <h3 className="biz-product-info__section-title">Description</h3>
          <p className="biz-product-info__description">{description}</p>
        </div>
      )}

      {/* Action Buttons: Message + Buy Now */}
      <div className="biz-product-info__actions">
        <button
          type="button"
          className="biz-product-info__message-btn"
          onClick={onContactSeller}
          title="Contact Seller"
          aria-label="Contact Seller"
        >
          <Icon name="arrow-share" size={20} color="#000000" />
        </button>

        <Button
          variant="primary"
          size="lg"
          className="biz-product-info__buy-btn"
          leftIcon={<Icon name="bag" size={18} color="#FFFFFF" />}
          onClick={onBuyNow}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductInfoSection;
