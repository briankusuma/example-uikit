import React from 'react';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';

/**
 * ExploreProductsFromCard component
 * Figma Node #22904:43133: "Explore Products from" widget for right aside column
 */
export const ExploreProductsFromCard = ({
  shops = [
    {
      id: 1,
      name: 'Skylight Electronics',
      category: 'Electronics',
      initials: 'SE',
      bgColor: '#E2F3FF',
      textColor: '#0077FF',
      isVerified: true,
    },
    {
      id: 2,
      name: 'Next Technologies',
      category: 'Computers',
      initials: 'NT',
      bgColor: '#E9F6E7',
      textColor: '#40A729',
      isVerified: true,
    },
    {
      id: 3,
      name: 'Skylight Electronics',
      category: 'Electronics',
      initials: 'SE',
      bgColor: '#FFE9EC',
      textColor: '#FF0909',
      isVerified: true,
    },
    {
      id: 4,
      name: 'Next Technologies',
      category: 'Computers',
      initials: 'NT',
      bgColor: '#FFEACE',
      textColor: '#FF9809',
      isVerified: true,
    },
  ],
  onViewShop,
  onViewMore,
  className = '',
}) => {
  return (
    <div className={`biz-explore-shops-widget ${className}`}>
      <div className="biz-explore-shops-widget__header">
        <h3 className="biz-explore-shops-widget__title">Explore Products from</h3>
      </div>
      <hr className="biz-explore-shops-widget__divider" />

      <div className="biz-explore-shops-widget__list">
        {shops.map((shop) => (
          <div key={shop.id} className="biz-explore-shops-item">
            {/* Initials Avatar */}
            <div
              className="biz-explore-shops-item__avatar"
              style={{
                backgroundColor: shop.bgColor,
                color: shop.textColor,
              }}
            >
              {shop.initials}
            </div>

            {/* Shop Details */}
            <div className="biz-explore-shops-item__info">
              <div className="biz-explore-shops-item__name-row">
                <span className="biz-explore-shops-item__name">{shop.name}</span>
                {shop.isVerified && (
                  <span className="biz-explore-shops-item__verified" title="Verified Shop">
                    <Icon name="verified" size={16} />
                  </span>
                )}
              </div>
              <span className="biz-explore-shops-item__category">{shop.category}</span>
            </div>

            {/* Action Button */}
            <div className="biz-explore-shops-item__action">
              <Button
                variant="outline"
                size="sm"
                className="biz-explore-shops-item__btn"
                onClick={() => onViewShop && onViewShop(shop)}
              >
                View
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="biz-explore-shops-widget__footer">
        <Button
          variant="ghost"
          size="md"
          fullWidth
          className="biz-explore-shops-widget__more-btn"
          onClick={onViewMore}
        >
          View more
        </Button>
      </div>
    </div>
  );
};

export default ExploreProductsFromCard;
