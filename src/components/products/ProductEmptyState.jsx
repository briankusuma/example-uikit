import React from 'react';
import { Icon } from '../common/Icon';

/**
 * ProductEmptyState component for when no products are found.
 */
export const ProductEmptyState = ({
  title = 'No product added',
  description = 'Add your first product to start selling and reach customers.',
}) => {
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
