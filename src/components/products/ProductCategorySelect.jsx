import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../common/Icon';

export const DEFAULT_PRODUCT_CATEGORIES = [
  'Computers',
  'Electronics',
  'Smartphones',
  'Audio',
  'Gaming',
  'Accessories',
  'Software',
];

/**
 * Reusable ProductCategorySelect component for selecting product category.
 */
export const ProductCategorySelect = ({
  category,
  onCategoryChange,
  categories = DEFAULT_PRODUCT_CATEGORIES,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="oww-form-group biz-dropdown-wrapper" ref={dropdownRef}>
      <div className="oww-form-group__label-row">
        <label htmlFor="add-product-category" className="oww-form-group__label">
          Category
        </label>
        <span className="oww-form-group__required">*</span>
      </div>

      <div
        className="oww-input-badge biz-category-picker"
        onClick={() => setIsOpen(true)}
      >
        {category && (
          <span className="oww-input-chip">
            <span>{category}</span>
            <button
              type="button"
              className="oww-input-chip__remove"
              onClick={(e) => {
                e.stopPropagation();
                onCategoryChange('');
              }}
            >
              <Icon name="close" size={12} />
            </button>
          </span>
        )}
        <input
          id="add-product-category"
          type="text"
          className="oww-input-badge__field"
          placeholder={category ? 'Change category...' : 'Select or type a category'}
          value={category ? '' : category}
          onChange={(e) => onCategoryChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
        <button
          type="button"
          className="biz-category-dropdown-toggle"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          aria-label="Toggle category list"
        >
          <Icon
            name="caret-down"
            size={16}
            className={isOpen ? 'is-rotated' : ''}
          />
        </button>
      </div>

      {/* Category Dropdown Menu */}
      {isOpen && (
        <div className="biz-category-dropdown">
          <div className="biz-category-dropdown__title">Suggested Categories:</div>
          <div className="biz-category-dropdown__list">
            {categories.map((cat) => {
              const isSelected = category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  className={`biz-category-dropdown__item ${
                    isSelected ? 'is-selected' : ''
                  }`}
                  onClick={() => {
                    onCategoryChange(cat);
                    setIsOpen(false);
                  }}
                >
                  <span>{cat}</span>
                  {isSelected && <Icon name="check" size={16} />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategorySelect;
