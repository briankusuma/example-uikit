import React from 'react';
import { SkeletonInfoCard } from './SkeletonInfoCard';
import { SkeletonProducts } from './SkeletonProducts';

/**
 * BusinessProfileSkeleton component
 * Implements Figma Node #23016:27587 - "Skeleton" loading view.
 * Composes modular SkeletonInfoCard and SkeletonProducts.
 */
export const BusinessProfileSkeleton = () => {
  return (
    <div
      className="biz-profile biz-profile--skeleton"
      aria-busy="true"
      aria-label="Loading profile content"
    >
      {/* 1. Cover Image Skeleton */}
      <div className="biz-skeleton-cover">
        <div className="biz-skeleton-cover__btn oww-skeleton oww-skeleton--button" />
      </div>

      {/* 2. Main Body Row: Left Column & Right Widget */}
      <div className="biz-profile__body-row">
        {/* Left Column */}
        <div className="biz-profile__left-column">
          {/* Avatar Skeleton (150px circle overlapping cover) */}
          <div className="biz-profile__avatar-container">
            <div className="biz-skeleton-avatar oww-skeleton" />
          </div>

          {/* Profile Header Details Skeleton */}
          <div className="biz-skeleton-header">
            <div className="biz-skeleton-header__info">
              <div className="biz-skeleton-bar biz-skeleton-bar--name oww-skeleton" />
              <div className="biz-skeleton-bar biz-skeleton-bar--category oww-skeleton" />
              <div className="biz-skeleton-bar biz-skeleton-bar--follow oww-skeleton" />
            </div>
            <div className="biz-skeleton-btn oww-skeleton" />
          </div>

          {/* Tabs Skeleton: Shop & Ads */}
          <div className="biz-skeleton-tabs">
            <div className="biz-skeleton-tabs__item biz-skeleton-tabs__item--active">
              <span>Shop</span>
              <div className="biz-skeleton-tabs__indicator" />
            </div>
            <div className="biz-skeleton-tabs__item">
              <span>Ads</span>
            </div>
          </div>

          {/* Products Section Skeleton */}
          <SkeletonProducts />
        </div>

        {/* Right Column: Business Profile Widget Card (302px) */}
        <SkeletonInfoCard />
      </div>
    </div>
  );
};

export default BusinessProfileSkeleton;
