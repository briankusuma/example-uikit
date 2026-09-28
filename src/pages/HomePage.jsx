import React, { useState } from 'react';
import { ProfileAvatar } from '../components/common/ProfileAvatar';
import { ProfileCover } from '../components/profile/ProfileCover';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileTabs } from '../components/profile/ProfileTabs';
import { BusinessInfoCard } from '../components/profile/BusinessInfoCard';
import { ExploreProductsFromCard } from '../components/profile/ExploreProductsFromCard';
import { ProductListSection } from '../components/products/ProductListSection';
import { BusinessAdsSection } from '../components/products/BusinessAdsSection';

/**
 * HomePage component
 * Figma Node #22699:12018 ("Shop - Product list")
 * Public display view of the store using Rise Loop profile data from useAppStore
 * without editable actions (no Add Cover, no Edit Profile, no Add Product).
 */
export const HomePage = () => {
  const [activeTab, setActiveTab] = useState('shop');

  return (
    <div className="biz-profile">
      {/* Cover Image (Read-Only: No Add Cover button) */}
      <ProfileCover isEditable={false} />

      {/* Main Body Split: Left Column & Right Widget */}
      <div className="biz-profile__body-row">
        {/* Left Column: Avatar, Profile Info, Tabs, & Content */}
        <div className="biz-profile__left-column">
          {/* 150px Circular Avatar */}
          <ProfileAvatar />

          {/* Profile Header (Read-Only: No Edit Profile button) */}
          <ProfileHeader isEditable={false} />

          {/* Tabs: Shop | Ads */}
          <ProfileTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Tab Content */}
          {activeTab === 'shop' ? (
            <ProductListSection isEditable={false} />
          ) : (
            <BusinessAdsSection />
          )}
        </div>

        {/* Right Column: Business Profile Widget & Explore Products (302px) */}
        <div className="biz-profile__right-column">
          <BusinessInfoCard />
          <ExploreProductsFromCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
