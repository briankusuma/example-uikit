import React from 'react';
import { ProfileAvatar } from '../components/common/ProfileAvatar';
import { ProfileCover } from '../components/profile/ProfileCover';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileTabs } from '../components/profile/ProfileTabs';
import { BusinessInfoCard } from '../components/profile/BusinessInfoCard';
import { ExploreProductsFromCard } from '../components/profile/ExploreProductsFromCard';
import { ProductListSection } from '../components/products/ProductListSection';
import { BusinessAdsSection } from '../components/products/BusinessAdsSection';
import { useAppStore } from '../store/useAppStore';

export const BusinessProfilePage = () => {
  const activeTab = useAppStore((state) => state.activeTab);

  return (
    <div className="biz-profile">
      {/* Cover Image */}
      <ProfileCover />

      {/* Main Body Split: Left Column & Right Widget */}
      <div className="biz-profile__body-row">
        {/* Left Column: Avatar, Profile Info, Tabs, & Content */}
        <div className="biz-profile__left-column">
          {/* 150px Circular Avatar overlapping cover */}
          <ProfileAvatar />

          {/* Profile Header Details */}
          <ProfileHeader />

          {/* Tabs: Shop | Ads */}
          <ProfileTabs />

          {/* Tab Content */}
          {activeTab === 'shop' ? (
            <ProductListSection />
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
