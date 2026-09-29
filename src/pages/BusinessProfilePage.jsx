import React from 'react';
import { ProfileAvatar } from '../components/common/ProfileAvatar';
import { ProfileCover } from '../components/profile/ProfileCover';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileTabs } from '../components/profile/ProfileTabs';
import { BusinessInfoCard } from '../components/profile/BusinessInfoCard';
import { ExploreProductsFromCard } from '../components/profile/ExploreProductsFromCard';
import { ProductListSection } from '../components/products/ProductListSection';
import { BusinessAdsSection } from '../components/products/BusinessAdsSection';
import { Skeleton, SkeletonText, SkeletonCircle, SkeletonImage } from '../components/ui';
import { useAppStore } from '../store/useAppStore';

export const BusinessProfilePage = () => {
  const activeTab = useAppStore((state) => state.activeTab);
  const isLoading = useAppStore((state) => state.isLoading);

  if (isLoading) {
    return (
      <div
        className="biz-profile"
        aria-busy="true"
        aria-label="Loading profile content"
      >
        {/* Cover Skeleton */}
        <div className="biz-profile__cover-wrapper">
          <SkeletonImage
            width="100%"
            height="100%"
            borderRadius="0px"
            style={{ position: 'absolute', inset: 0 }}
          />
          <div className="biz-profile__cover-btn">
            <Skeleton width="120px" height="32px" borderRadius="100px" variant="button" />
          </div>
        </div>

        {/* Main Body Split: Left Column & Right Widget */}
        <div className="biz-profile__body-row">
          {/* Left Column: Avatar, Profile Info, Tabs, & Content */}
          <div className="biz-profile__left-column">
            {/* 150px Avatar Skeleton */}
            <div className="biz-profile__avatar-container">
              <SkeletonCircle size="100%" />
            </div>

            {/* Profile Header Details Skeleton */}
            <div className="biz-profile__header-info">
              <div className="biz-profile__details" style={{ gap: '8px' }}>
                <SkeletonText width="230px" height="24px" />
                <SkeletonText width="80px" height="16px" />
                <SkeletonText width="100px" height="16px" />
              </div>
              <Skeleton width="117px" height="40px" borderRadius="100px" />
            </div>

            {/* Tabs Skeleton: Shop & Ads */}
            <div className="biz-tabs">
              <div className="biz-tabs__item biz-tabs__item--active" style={{ cursor: 'default' }}>
                <span>Shop</span>
              </div>
              <div className="biz-tabs__item" style={{ cursor: 'default' }}>
                <span>Ads</span>
              </div>
            </div>

            {/* Products Section Skeleton */}
            <div className="biz-product-section" style={{ padding: '24px 0 40px' }}>
              <div className="biz-product-section__header" style={{ marginBottom: '16px' }}>
                <SkeletonText width="120px" height="16px" />
                <Skeleton width="117px" height="40px" borderRadius="100px" />
              </div>

              {/* Empty State Box Skeleton matching Figma #23016:27587 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', textAlign: 'center', padding: '0 24px' }}>
                <Skeleton width="150px" height="150px" borderRadius="20px" style={{ marginBottom: '12px' }} />
                <SkeletonText width="230px" height="24px" />
                <SkeletonText width="431px" height="16px" style={{ maxWidth: '90%' }} />
                <SkeletonText width="230px" height="16px" style={{ maxWidth: '70%' }} />
              </div>
            </div>
          </div>

          {/* Right Column: Business Profile Widget Card (302px) */}
          <div className="biz-profile__right-column">
            <aside className="oww-card biz-info-card">
              <div className="oww-card__header">
                <SkeletonText width="150px" height="16px" />
              </div>
              <hr className="oww-card__divider" />

              {/* About section skeleton */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <SkeletonText width="80px" height="16px" />
                <SkeletonText width="100%" height="16px" />
                <SkeletonText width="230px" height="16px" style={{ maxWidth: '100%' }} />
              </div>
              <hr className="oww-card__divider" />

              {/* Email section skeleton */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <SkeletonText width="80px" height="16px" />
                <SkeletonText width="230px" height="16px" />
              </div>
              <hr className="oww-card__divider" />

              {/* Phone section skeleton */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <SkeletonText width="80px" height="16px" />
                <SkeletonText width="230px" height="16px" />
              </div>
              <hr className="oww-card__divider" />

              {/* Website section skeleton */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <SkeletonText width="80px" height="16px" />
                <SkeletonText width="230px" height="16px" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }

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
