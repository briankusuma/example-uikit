import React from 'react';
import { Icon } from '../common/Icon';
import { Skeleton, SkeletonText } from '../ui';
import { useAppStore } from '../../store/useAppStore';

/**
 * ProductEmptyState component for when no products are found.
 */
export const ProductEmptyState = ({
  title = 'No product added',
  description = 'Add your first product to start selling and reach customers.',
  isLoading: propLoading,
}) => {
  const storeLoading = useAppStore((state) => state.isLoading);
  const isLoading = propLoading !== undefined ? propLoading : storeLoading;

  if (isLoading) {
    return (
      <div className="biz-product-section__empty-state" aria-busy="true">
        <div className="biz-product-section__empty-illustration">
          <Skeleton width="150px" height="150px" borderRadius="20px" />
        </div>
        <div className="biz-product-section__empty-texts" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%' }}>
          <SkeletonText width="230px" height="24px" />
          <SkeletonText width="431px" height="16px" style={{ maxWidth: '90%' }} />
          <SkeletonText width="230px" height="16px" style={{ maxWidth: '70%' }} />
        </div>
      </div>
    );
  }

  return (
    <div className="biz-product-section__empty-state">
      <div className="biz-product-section__empty-illustration">
        <Icon name="empty-box" size={150} />
      </div>
      <div className="biz-product-section__empty-texts">
        <h4 className="biz-product-section__empty-title">{title}</h4>
        <p className="biz-product-section__empty-desc">{description}</p>
      </div>
    </div>
  );
};

export default ProductEmptyState;
