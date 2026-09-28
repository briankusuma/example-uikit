import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreProductCard } from '../adsStore/StoreProductCard';
import { Button } from '../common/Button';
import { useAppStore } from '../../store/useAppStore';

/**
 * BusinessAdsSection component
 * Renders Ads tab content on the Business Profile page, adapted from the ads/store design
 */
export const BusinessAdsSection = () => {
  const navigate = useNavigate();
  const { products } = useAppStore();

  return (
    <div className="biz-product-section__ads-view">
      {/* Sponsored Banner */}
      <div className="biz-store-ads-banner">
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
      </div>

      {/* Sponsored Products Feed Grid */}
      <div className="biz-product-section__grid">
        {products.slice(0, 6).map((item) => (
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
