import React from 'react';
import { Skeleton, SkeletonText, SkeletonImage } from '../ui';

/**
 * ProductCard component representing an individual product.
 * Uses OWW UIKit .oww-card--product styles.
 */
export const ProductCard = ({ product, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="oww-card oww-card--product">
        <div className="oww-card__media">
          <SkeletonImage width="100%" height="100%" />
        </div>
        <div className="oww-card__content">
          <SkeletonText width="80%" height="18px" />
          <SkeletonText width="100%" height="14px" style={{ marginTop: '6px' }} />
          <SkeletonText width="50%" height="16px" style={{ marginTop: '10px' }} />
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="oww-card oww-card--product">
      <div className="oww-card__media">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="oww-card__content">
        <h4 className="oww-card__product-title" title={product.name}>
          {product.name}
        </h4>
        <p className="oww-card__product-desc">{product.desc}</p>
        <div className="oww-card__price">{product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
