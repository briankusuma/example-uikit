import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../common/Button';

/**
 * ProductFilterDropdown component
 * Conforms to Figma Node #22904:43181 ("Dropdown Filter")
 *
 * Provides:
 * - Price Range adjustment (Min & Max with dual sliders / interactive control)
 * - Sort by: Newest First, Oldest First, Product Name (A–Z), Product Name (Z-A)
 * - Action buttons: Reset & Apply
 */
export const ProductFilterDropdown = ({
  isOpen,
  onClose,
  currentFilters = {
    minPrice: 20000,
    maxPrice: 150000,
    sortBy: 'newest',
  },
  onApply,
  onReset,
}) => {
  const dropdownRef = useRef(null);

  // Local editing states
  const [minPrice, setMinPrice] = useState(currentFilters.minPrice ?? 20000);
  const [maxPrice, setMaxPrice] = useState(currentFilters.maxPrice ?? 150000);
  const [sortBy, setSortBy] = useState(currentFilters.sortBy ?? 'newest');

  // Sync state when currentFilters or isOpen changes
  useEffect(() => {
    if (isOpen) {
      setMinPrice(currentFilters.minPrice ?? 20000);
      setMaxPrice(currentFilters.maxPrice ?? 150000);
      setSortBy(currentFilters.sortBy ?? 'newest');
    }
  }, [isOpen, currentFilters]);

  // Handle click outside to close
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleMinChange = (e) => {
    const val = Number(e.target.value);
    if (val <= maxPrice) {
      setMinPrice(val);
    }
  };

  const handleMaxChange = (e) => {
    const val = Number(e.target.value);
    if (val >= minPrice) {
      setMaxPrice(val);
    }
  };

  const handleReset = () => {
    setMinPrice(20000);
    setMaxPrice(150000);
    setSortBy('newest');
    if (onReset) {
      onReset();
    }
  };

  const handleApply = () => {
    if (onApply) {
      onApply({
        minPrice,
        maxPrice,
        sortBy,
      });
    }
    onClose();
  };

  const sortOptions = [
    { id: 'newest', label: 'Newest First' },
    { id: 'oldest', label: 'Oldest First' },
    { id: 'name_asc', label: 'Product Name (A–Z)' },
    { id: 'name_desc', label: 'Product Name (Z-A)' },
  ];

  // Calculate percentage for dual slider track
  const absoluteMin = 0;
  const absoluteMax = 300000;
  const leftPercent = Math.max(0, Math.min(100, ((minPrice - absoluteMin) / (absoluteMax - absoluteMin)) * 100));
  const rightPercent = Math.max(0, Math.min(100, ((maxPrice - absoluteMin) / (absoluteMax - absoluteMin)) * 100));

  return (
    <div
      ref={dropdownRef}
      className="biz-product-filter-dropdown"
      role="dialog"
      aria-label="Filter products"
    >
      {/* Header: Filter by */}
      <div className="biz-product-filter-dropdown__section-header">
        <span className="biz-product-filter-dropdown__section-title">Filter by</span>
      </div>

      {/* Price Range Section */}
      <div className="biz-product-filter-dropdown__price-section">
        <label className="biz-product-filter-dropdown__label">Price Range</label>

        {/* Dual Slider Bar */}
        <div className="biz-product-filter-dropdown__slider-container">
          <div className="biz-product-filter-dropdown__track-bg" />
          <div
            className="biz-product-filter-dropdown__track-highlight"
            style={{
              left: `${leftPercent}%`,
              width: `${Math.max(0, rightPercent - leftPercent)}%`,
            }}
          />
          <input
            type="range"
            min={absoluteMin}
            max={absoluteMax}
            step={5000}
            value={minPrice}
            onChange={handleMinChange}
            className="biz-product-filter-dropdown__range-input"
            aria-label="Minimum price"
          />
          <input
            type="range"
            min={absoluteMin}
            max={absoluteMax}
            step={5000}
            value={maxPrice}
            onChange={handleMaxChange}
            className="biz-product-filter-dropdown__range-input"
            aria-label="Maximum price"
          />
        </div>

        {/* Min / Max Labels conforming to Figma "(20,000)" and "(150,000)" */}
        <div className="biz-product-filter-dropdown__price-values">
          <div className="biz-product-filter-dropdown__price-val-item">
            <span className="biz-product-filter-dropdown__val-prefix">Min</span>{' '}
            <span className="biz-product-filter-dropdown__val-number">
              ({minPrice.toLocaleString()})
            </span>
          </div>
          <div className="biz-product-filter-dropdown__price-val-item">
            <span className="biz-product-filter-dropdown__val-prefix">Max</span>{' '}
            <span className="biz-product-filter-dropdown__val-number">
              ({maxPrice.toLocaleString()})
            </span>
          </div>
        </div>
      </div>

      <hr className="biz-product-filter-dropdown__divider" />

      {/* Sort By Section */}
      <div className="biz-product-filter-dropdown__sort-section">
        <div className="biz-product-filter-dropdown__section-header">
          <span className="biz-product-filter-dropdown__section-title">Sort by</span>
        </div>

        <div className="biz-product-filter-dropdown__radio-list">
          {sortOptions.map((option) => {
            const isSelected = sortBy === option.id;
            return (
              <label
                key={option.id}
                className={`biz-product-filter-dropdown__radio-item ${
                  isSelected ? 'biz-product-filter-dropdown__radio-item--selected' : ''
                }`}
                onClick={() => setSortBy(option.id)}
              >
                <div
                  className={`biz-product-filter-dropdown__radio-circle ${
                    isSelected ? 'biz-product-filter-dropdown__radio-circle--active' : ''
                  }`}
                >
                  {isSelected && (
                    <div className="biz-product-filter-dropdown__radio-inner-dot" />
                  )}
                </div>
                <span className="biz-product-filter-dropdown__radio-label">
                  {option.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <hr className="biz-product-filter-dropdown__divider" />

      {/* Footer Buttons: Reset & Apply */}
      <div className="biz-product-filter-dropdown__actions">
        <button
          type="button"
          className="biz-product-filter-dropdown__btn-reset"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          type="button"
          className="biz-product-filter-dropdown__btn-apply"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ProductFilterDropdown;
