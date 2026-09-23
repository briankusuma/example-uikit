import React from 'react';

/**
 * BusinessProfileSkeleton component
 * Implements Figma Node #23016:27587 - "Skeleton" loading view
 */
export const BusinessProfileSkeleton = () => {
  return (
    <div className="biz-profile biz-profile--skeleton" aria-busy="true" aria-label="Loading profile content">
      {/* 1. Cover Image Skeleton (250px with button bar at bottom right) */}
      <div className="biz-skeleton-cover">
        <div className="biz-skeleton-cover__btn oww-skeleton oww-skeleton--button" />
      </div>

      {/* 2. Main Body Row: Left Column & Right Widget */}
      <div className="biz-profile__body-row">
        {/* Left Column */}
        <div className="biz-profile__left-column">
          {/* Avatar Skeleton (150px circle overlapping cover by -80px) */}
          <div className="biz-profile__avatar-container">
            <div className="biz-skeleton-avatar oww-skeleton" />
          </div>

          {/* Profile Header Details Skeleton */}
          <div className="biz-skeleton-header">
            <div className="biz-skeleton-header__info">
              {/* Name bar: 230x24px */}
              <div className="biz-skeleton-bar biz-skeleton-bar--name oww-skeleton" />
              {/* Category bar: 80x16px */}
              <div className="biz-skeleton-bar biz-skeleton-bar--category oww-skeleton" />
              {/* Follow bar: 100x16px */}
              <div className="biz-skeleton-bar biz-skeleton-bar--follow oww-skeleton" />
            </div>
            {/* Edit button skeleton: 117x40px */}
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
          <div className="biz-skeleton-products">
            <div className="biz-skeleton-products__header">
              <div className="biz-skeleton-bar biz-skeleton-bar--products-title oww-skeleton" />
              <div className="biz-skeleton-btn oww-skeleton" />
            </div>

            {/* Empty State Box Skeleton */}
            <div className="biz-skeleton-empty-state">
              <div className="biz-skeleton-empty-box oww-skeleton" />
              <div className="biz-skeleton-bar biz-skeleton-bar--empty-title oww-skeleton" />
              <div className="biz-skeleton-bar biz-skeleton-bar--empty-sub1 oww-skeleton" />
              <div className="biz-skeleton-bar biz-skeleton-bar--empty-sub2 oww-skeleton" />
            </div>
          </div>
        </div>

        {/* Right Column: Business Profile Widget Card (302px) */}
        <div className="biz-skeleton-infocard">
          <div className="biz-skeleton-bar biz-skeleton-bar--infocard-title oww-skeleton" />
          <div className="biz-skeleton-divider" />

          {/* About section */}
          <div className="biz-skeleton-infocard__group">
            <div className="biz-skeleton-bar biz-skeleton-bar--label oww-skeleton" />
            <div className="biz-skeleton-bar biz-skeleton-bar--full oww-skeleton" />
            <div className="biz-skeleton-bar biz-skeleton-bar--value oww-skeleton" />
          </div>
          <div className="biz-skeleton-divider" />

          {/* Email section */}
          <div className="biz-skeleton-infocard__group">
            <div className="biz-skeleton-bar biz-skeleton-bar--label oww-skeleton" />
            <div className="biz-skeleton-bar biz-skeleton-bar--value oww-skeleton" />
          </div>
          <div className="biz-skeleton-divider" />

          {/* Phone section */}
          <div className="biz-skeleton-infocard__group">
            <div className="biz-skeleton-bar biz-skeleton-bar--label oww-skeleton" />
            <div className="biz-skeleton-bar biz-skeleton-bar--value oww-skeleton" />
          </div>
          <div className="biz-skeleton-divider" />

          {/* Website section */}
          <div className="biz-skeleton-infocard__group">
            <div className="biz-skeleton-bar biz-skeleton-bar--label oww-skeleton" />
            <div className="biz-skeleton-bar biz-skeleton-bar--value oww-skeleton" />
          </div>
        </div>
      </div>
    </div>
  );
};
