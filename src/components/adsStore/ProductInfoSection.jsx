import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';
import { ProductActionDropdown } from './ProductActionDropdown';
import { ProductShareModal } from './ProductShareModal';
import { Skeleton, SkeletonText, SkeletonCircle } from '../ui';

/**
 * ProductInfoSection component
 * Figma Node #22904:38167, #22689:10619, and #22703:20565: Seller profile, pricing, tags, description, purchase actions, options menu, and share popup
 */
export const ProductInfoSection = ({
  isLoading = false,
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
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  if (isLoading) {
    return (
      <div className={`biz-product-info ${className}`}>
        {/* Seller / Business Header */}
        <div className="biz-product-info__seller">
          <div className="biz-product-info__seller-profile" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <SkeletonCircle size="48px" />
            <div className="biz-product-info__seller-details" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <SkeletonText width="120px" height="16px" />
              <SkeletonText width="80px" height="13px" />
            </div>
          </div>
          <SkeletonCircle size="32px" />
        </div>

        <hr className="biz-product-info__divider" />

        {/* Main Details: Title, Price, Location */}
        <div className="biz-product-info__main-details" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="biz-product-info__pricing-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SkeletonText width="70%" height="24px" />
            <SkeletonText width="35%" height="26px" />
          </div>
          <SkeletonText width="40%" height="14px" />
        </div>

        {/* Categories / Tags */}
        <div className="biz-product-info__section">
          <SkeletonText width="70px" height="14px" style={{ marginBottom: '8px' }} />
          <div className="biz-product-info__tags">
            <Skeleton width="130px" height="28px" borderRadius="100px" />
            <Skeleton width="100px" height="28px" borderRadius="100px" />
          </div>
        </div>

        {/* Description */}
        <div className="biz-product-info__section">
          <SkeletonText width="80px" height="14px" style={{ marginBottom: '8px' }} />
          <SkeletonText count={3} width="100%" height="14px" />
        </div>

        {/* Action Buttons: Share + Buy Now */}
        <div className="biz-product-info__actions">
          <Skeleton width="48px" height="48px" borderRadius="100px" />
          <Skeleton width="100%" height="48px" borderRadius="100px" />
        </div>
      </div>
    );
  }

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

      {/* Action Buttons: Share + Buy Now */}
      <div className="biz-product-info__actions">
        <button
          type="button"
          className="biz-product-info__message-btn"
          onClick={() => {
            setIsShareModalOpen(true);
            if (onShare) onShare();
          }}
          title="Share Product"
          aria-label="Share Product"
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

      {/* Share Modal Popup (Figma Node #22703:20565) */}
      <ProductShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        productTitle={title}
      />
    </div>
  );
};

export default ProductInfoSection;
