import React from 'react';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';
import { Skeleton, SkeletonText, SkeletonCircle } from '../ui';
import { useAppStore } from '../../store/useAppStore';

/**
 * ExploreShopsCard component
 * Figma Node #22904:36681 ("Explore Products & Shop from")
 */
export const ExploreShopsCard = ({
  isLoading: propLoading,
  shops = [
    {
      id: 1,
      name: 'Next Technologies',
      category: 'Electronics',
      initials: 'NT',
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
      name: 'Next Technologies',
      category: 'Electronics',
      initials: 'NT',
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
  const storeLoading = useAppStore((state) => state.isLoading);
  const isLoading = propLoading !== undefined ? propLoading : storeLoading;

  if (isLoading) {
    return (
      <div className={`biz-store-widget ${className}`}>
        <header className="biz-store-widget__header">
          <SkeletonText width="180px" height="18px" />
        </header>
        <hr className="biz-store-widget__divider" />

        <div className="biz-store-widget__list">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="biz-store-item" style={{ alignItems: 'center' }}>
              <SkeletonCircle size="40px" />
              <div className="biz-store-item__info" style={{ gap: '6px' }}>
                <SkeletonText width="110px" height="14px" />
                <SkeletonText width="65px" height="12px" />
              </div>
              <div className="biz-store-item__action">
                <Skeleton width="56px" height="28px" borderRadius="100px" />
              </div>
            </div>
          ))}
        </div>

        <div className="biz-store-widget__footer">
          <Skeleton width="100%" height="32px" borderRadius="8px" />
        </div>
      </div>
    );
  }

  return (
    <div className={`biz-store-widget ${className}`}>
      <header className="biz-store-widget__header">
        <h2 className="biz-store-widget__title">Explore Products & Shop from</h2>
      </header>
      <hr className="biz-store-widget__divider" />

      <div className="biz-store-widget__list">
        {shops.map((shop) => (
          <div key={shop.id} className="biz-store-item">
            {/* Initials Avatar */}
            <div
              className="biz-store-item__avatar"
              style={{
                backgroundColor: shop.bgColor,
                color: shop.textColor,
              }}
            >
              {shop.initials}
            </div>

            {/* Shop Details */}
            <div className="biz-store-item__info">
              <div className="biz-store-item__name-row">
                <span className="biz-store-item__name">{shop.name}</span>
                {shop.isVerified && (
                  <span className="biz-store-item__verified" title="Verified Shop">
                    <Icon name="verified" size={16} />
                  </span>
                )}
              </div>
              <span className="biz-store-item__category">{shop.category}</span>
            </div>

            {/* Action Button */}
            <div className="biz-store-item__action">
              <Button
                variant="outline"
                size="sm"
                className="biz-store-item__btn"
                onClick={() => onViewShop && onViewShop(shop)}
              >
                View
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="biz-store-widget__footer">
        <Button
          variant="ghost"
          size="md"
          fullWidth
          className="biz-store-widget__more-btn"
          onClick={onViewMore}
        >
          View more
        </Button>
      </div>
    </div>
  );
};

export default ExploreShopsCard;
