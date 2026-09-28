import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../common/Icon';

/**
 * ProductDetailTopBar component
 * Figma Node #22904:38152: Top Bar with Back Arrow and "Product Detail" title
 */
export const ProductDetailTopBar = ({
  title = 'Product Detail',
  onBack,
  className = '',
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/ads-store');
    }
  };

  return (
    <header className={`biz-product-detail-topbar ${className}`}>
      <button
        type="button"
        className="biz-product-detail-topbar__back-btn"
        onClick={handleBack}
        aria-label="Back to Ads / Store"
      >
        <Icon name="arrow-left" size={24} color="#000000" />
      </button>
      <h1 className="biz-product-detail-topbar__title">{title}</h1>
    </header>
  );
};

export default ProductDetailTopBar;
