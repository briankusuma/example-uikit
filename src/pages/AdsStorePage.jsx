import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreSearchBar } from '../components/adsStore/StoreSearchBar';
import { StoreTabs } from '../components/adsStore/StoreTabs';
import { StoreProductCard } from '../components/adsStore/StoreProductCard';
import { ExploreShopsCard } from '../components/adsStore/ExploreShopsCard';
import { SuggestedUsersCard } from '../components/adsStore/SuggestedUsersCard';
import { Icon } from '../components/common/Icon';
import { Button } from '../components/common/Button';
import { Skeleton, SkeletonText } from '../components/ui';
import { PRODUCTS_DATA } from '../components/adsStore/productsData';
import { useAppStore } from '../store/useAppStore';

export const AdsStorePage = () => {
  const navigate = useNavigate();
  const isLoading = useAppStore((state) => state.isLoading);
  const [activeTab, setActiveTab] = useState('shop');
  const [searchQuery, setSearchQuery] = useState('');
  const [products] = useState(PRODUCTS_DATA);

  // Filter products by search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const q = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.businessName.toLowerCase().includes(q)
    );
  }, [products, searchQuery]);

  const handleProductClick = (productId) => {
    navigate(`/ads-store/product/${productId}`);
  };

  return (
    <div className="biz-store-page">
      {/* Center Column: Main Content (Width: 519px on desktop) */}
      <main className="biz-store-main">
        {/* Search & Tabs Header Bar */}
        <div className="biz-store-main__topbar">
          <StoreSearchBar
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <StoreTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* Content Feed */}
        {activeTab === 'shop' ? (
          <div className="biz-store-main__feed">
            {isLoading ? (
              <div className="biz-store-grid">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <StoreProductCard
                    key={`skel-store-${idx}`}
                    isLoading
                    showBusinessProfile={true}
                  />
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="biz-store-grid">
                {filteredProducts.map((product) => (
                  <StoreProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    businessName={product.businessName}
                    businessAvatar={product.businessAvatar}
                    isVerified={product.isVerified}
                    onClick={() => handleProductClick(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="biz-store-empty">
                <div className="biz-store-empty__icon">
                  <Icon name="empty-box" size={48} color="#999999" />
                </div>
                <h3 className="biz-store-empty__title">No products found</h3>
                <p className="biz-store-empty__desc">
                  Try adjusting your search terms or filters.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        ) : (
          /* Ads Tab View */
          <div className="biz-store-ads-view">
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

            {/* Sponsored Products */}
            <div className="biz-store-grid">
              {isLoading
                ? Array.from({ length: 4 }).map((_, idx) => (
                    <StoreProductCard
                      key={`ad-skel-${idx}`}
                      isLoading
                      showBusinessProfile={true}
                    />
                  ))
                : products.slice(0, 4).map((product) => (
                    <StoreProductCard
                      key={`ad-${product.id}`}
                      title={`[Ad] ${product.title}`}
                      price={product.price}
                      image={product.image}
                      businessName={product.businessName}
                      businessAvatar={product.businessAvatar}
                      isVerified={product.isVerified}
                      onClick={() => handleProductClick(product.id)}
                    />
                  ))}
            </div>
          </div>
        )}
      </main>

      {/* Right Column: Recommendations (Width: 411px on desktop) */}
      <aside className="biz-store-aside">
        <ExploreShopsCard />
        <SuggestedUsersCard />
      </aside>
    </div>
  );
};

export default AdsStorePage;
