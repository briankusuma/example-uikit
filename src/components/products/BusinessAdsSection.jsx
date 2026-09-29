import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreProductCard } from '../adsStore/StoreProductCard';
import { Button } from '../common/Button';
import { Skeleton, SkeletonText } from '../ui';
import { useAppStore } from '../../store/useAppStore';

/**
 * BusinessAdsSection component
 * Renders Ads tab content on the Business Profile page, adapted from the ads/store design
 */
export const BusinessAdsSection = () => {
  const navigate = useNavigate();
  const { products, isLoading } = useAppStore();

  return (
    <div className="biz-product-section__ads-view">
      {/* Sponsored Banner */}
      <div className="biz-store-ads-banner">
        {isLoading ? (
          <div className="biz-store-ads-banner__content" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Skeleton width="90px" height="24px" borderRadius="100px" />
            <SkeletonText width="65%" height="22px" />
            <SkeletonText width="85%" height="15px" />
            <Skeleton width="180px" height="40px" borderRadius="100px" style={{ marginTop: '8px' }} />
          </div>
        ) : (
          <div className="biz-store-ads-banner__content">
            <span className="biz-store-ads-banner__badge">Sponsored</span>
            <h3 className="biz-store-ads-banner__title">
              Boost Your Products on Ad Platform Maker
            </h3>
            <p className="biz-store-ads-banner__desc">
              Reach more customers and grow your brand with targeted advertisements.
            </p>
            <Button variant="primary" size="md">
              Create an Ad Campaign
            </Button>
          </div>
        )}
      </div>

      {/* Sponsored Products Feed Grid */}
      <div className="biz-product-section__grid">
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <StoreProductCard
                key={`biz-ad-skel-${idx}`}
                isLoading
                showBusinessProfile={false}
              />
            ))
          : products.slice(0, 6).map((item) => (
              <StoreProductCard
                key={`biz-ad-${item.id}`}
                title={`[Ad] ${item.title}`}
                price={item.price}
                image={item.image}
                showBusinessProfile={false}
                onClick={() => navigate(`/ads-store/product/${item.id}`)}
              />
            ))}
      </div>
    </div>
  );
};

export default BusinessAdsSection;
