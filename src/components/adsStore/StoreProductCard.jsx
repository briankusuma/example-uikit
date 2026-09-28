import React from 'react';
import { Icon } from '../common/Icon';

/**
 * StoreProductCard component
 * Figma Node #22847:16421 (Shop Product Card)
 */
export const StoreProductCard = ({
  title,
  price,
  image,
  businessName = 'Riseloop',
  businessAvatar = '/images/business-avatar.png',
  isVerified = true,
  showBusinessProfile = true,
  showOptions = true,
  onOptionsClick,
  onClick,
  className = '',
}) => {
  return (
    <article
      className={`biz-store-card ${className} ${onClick ? 'biz-store-card--clickable' : ''}`}
      onClick={onClick}
    >
      {/* Business Header */}
      {showBusinessProfile && (
        <header className="biz-store-card__header">
          <div className="biz-store-card__business">
            <img
              src={businessAvatar}
              alt={businessName}
              className="biz-store-card__avatar"
            />
            <span className="biz-store-card__name">{businessName}</span>
            {isVerified && (
              <span className="biz-store-card__verified" title="Verified Business">
                <Icon name="verified" size={16} />
              </span>
            )}
          </div>
          {showOptions && (
            <button
              type="button"
              className="biz-store-card__options-btn"
              onClick={(e) => {
                e.stopPropagation();
                onOptionsClick && onOptionsClick();
              }}
              aria-label="Product options"
            >
              <Icon name="dots-three" size={18} color="#777777" />
            </button>
          )}
        </header>
      )}

      {/* Media with Floating Price Tag */}
      <div
        className="biz-store-card__media"
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        <img
          src={image}
          alt={title}
          className="biz-store-card__image"
          loading="lazy"
        />
        {price && (
          <span className="biz-store-card__price-badge">{price}</span>
        )}
      </div>

      {/* Product Title */}
      <footer className="biz-store-card__footer">
        <h3 className="biz-store-card__title" title={title}>
          {title}
        </h3>
      </footer>
    </article>
  );
};

export default StoreProductCard;
