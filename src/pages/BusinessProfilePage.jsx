import React from 'react';
import { ProfileCover } from '../components/profile/ProfileCover';
import { ProfileAvatar } from '../components/profile/ProfileAvatar';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileTabs } from '../components/profile/ProfileTabs';
import { BusinessInfoCard } from '../components/profile/BusinessInfoCard';
import { ProductListSection } from '../components/products/ProductListSection';
import { BusinessProfileSkeleton } from '../components/profile/BusinessProfileSkeleton';
import { useAppStore } from '../store/useAppStore';

export const BusinessProfilePage = () => {
  const activeTab = useAppStore((state) => state.activeTab);
  const isLoading = useAppStore((state) => state.isLoading);

  if (isLoading) {
    return <BusinessProfileSkeleton />;
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
            <div style={{ padding: '40px 24px', textAlign: 'center', color: '#555555' }}>
              <h3>Ads Campaign Manager</h3>
              <p>Manage and track your active advertising campaigns here.</p>
            </div>
          )}
        </div>

        {/* Right Column: Business Profile Widget Card (302px) */}
        <BusinessInfoCard />
      </div>
    </div>
  );
};
