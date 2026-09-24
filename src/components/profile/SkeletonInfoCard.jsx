import React from 'react';

/**
 * Reusable skeleton placeholder for the Business Info Card (Figma Node #23016:27587).
 */
export const SkeletonInfoCard = () => {
  return (
    <div className="biz-skeleton-infocard">
      <div className="biz-skeleton-bar biz-skeleton-bar--infocard-title oww-skeleton" />
      <div className="biz-skeleton-divider" />

      {/* About section skeleton */}
      <div className="biz-skeleton-infocard__group">
        <div className="biz-skeleton-bar biz-skeleton-bar--label oww-skeleton" />
        <div className="biz-skeleton-bar biz-skeleton-bar--full oww-skeleton" />
        <div className="biz-skeleton-bar biz-skeleton-bar--value oww-skeleton" />
      </div>
      <div className="biz-skeleton-divider" />

      {/* Email section skeleton */}
      <div className="biz-skeleton-infocard__group">
        <div className="biz-skeleton-bar biz-skeleton-bar--label oww-skeleton" />
        <div className="biz-skeleton-bar biz-skeleton-bar--value oww-skeleton" />
      </div>
      <div className="biz-skeleton-divider" />

      {/* Phone section skeleton */}
      <div className="biz-skeleton-infocard__group">
        <div className="biz-skeleton-bar biz-skeleton-bar--label oww-skeleton" />
        <div className="biz-skeleton-bar biz-skeleton-bar--value oww-skeleton" />
      </div>
      <div className="biz-skeleton-divider" />

      {/* Website section skeleton */}
      <div className="biz-skeleton-infocard__group">
        <div className="biz-skeleton-bar biz-skeleton-bar--label oww-skeleton" />
        <div className="biz-skeleton-bar biz-skeleton-bar--value oww-skeleton" />
      </div>
    </div>
  );
};
