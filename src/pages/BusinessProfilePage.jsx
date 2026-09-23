import React from 'react';
import { ProfileCover } from '../components/profile/ProfileCover';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileTabs } from '../components/profile/ProfileTabs';
import { BusinessInfoCard } from '../components/profile/BusinessInfoCard';
import { ProductListSection } from '../components/products/ProductListSection';
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
          <div className="biz-profile__avatar-container">
            <img
              src="/images/business-avatar.png"
              alt="Rise Loop"
              className="biz-profile__avatar-img"
              onError={(e) => {
                e.target.src =
                  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&auto=format&fit=crop&q=80';
              }}
            />
          </div>

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
