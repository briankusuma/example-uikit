import React from 'react';

/**
 * ProductCard component representing an individual product.
 * Uses OWW UIKit .oww-card--product styles.
 */
export const ProductCard = ({ product }) => {
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
