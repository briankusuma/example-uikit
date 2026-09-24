import React from 'react';

/**
 * Reusable skeleton placeholder for the Products Section (Figma Node #23016:27587).
 */
export const SkeletonProducts = () => {
  return (
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
  );
};
