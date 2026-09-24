import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../common/Icon';

export const POPULAR_CATEGORIES = [
  'Computers',
  'Technology',
  'Software & IT',
  'Electronics',
  'Retail',
  'Consulting',
  'Design & Creative',
  'Digital Services',
];

/**
 * Reusable Category Tag Input with chips and suggested categories dropdown.
 */
export const CategoryTagInput = ({
  categories = [],
  onAddCategory,
  onRemoveCategory,
  suggestedCategories = POPULAR_CATEGORIES,
  placeholder = 'Add more...',
  emptyPlaceholder = 'Type a category and press Enter',
}) => {
  const [categoryInput, setCategoryInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleAdd = (cat) => {
    const trimmed = cat.trim();
    if (trimmed && !categories.includes(trimmed)) {
      onAddCategory(trimmed);
      setCategoryInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (categoryInput.trim()) {
        handleAdd(categoryInput);
      }
    } else if (e.key === 'Backspace' && !categoryInput && categories.length > 0) {
      onRemoveCategory(categories[categories.length - 1]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="oww-form-group" ref={dropdownRef}>
      <div className="oww-form-group__label-row">
        <label htmlFor="edit-biz-category" className="oww-form-group__label">
          Business Category
        </label>
        <span className="oww-form-group__required">*</span>
      </div>

      <div
        className="oww-input-badge biz-category-picker"
        onClick={() => inputRef.current?.focus()}
      >
        {categories.map((cat) => (
          <span key={cat} className="oww-input-chip">
            <span>{cat}</span>
            <button
              type="button"
              className="oww-input-chip__remove"
              onClick={(e) => {
                e.stopPropagation();
                onRemoveCategory(cat);
              }}
              aria-label={`Remove ${cat}`}
            >
              <Icon name="close" size={12} />
            </button>
          </span>
        ))}

        <input
          ref={inputRef}
          id="edit-biz-category"
          type="text"
          className="oww-input-badge__field"
          placeholder={categories.length === 0 ? emptyPlaceholder : placeholder}
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
        />

        <button
          type="button"
          className="biz-category-dropdown-toggle"
          onClick={toggleDropdown}
          aria-label="Toggle category list"
        >
          <Icon
            name="caret-down"
            size={16}
            className={isOpen ? 'is-rotated' : ''}
          />
        </button>
      </div>

      {/* Suggested Categories Dropdown */}
      {isOpen && (
        <div className="biz-category-dropdown">
          <div className="biz-category-dropdown__title">Suggested Categories:</div>
          <div className="biz-category-dropdown__list">
            {suggestedCategories.map((cat) => {
              const isSelected = categories.includes(cat);
              return (
                <button
                  key={cat}
                  type="button"
                  className={`biz-category-dropdown__item ${
                    isSelected ? 'is-selected' : ''
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      onRemoveCategory(cat);
                    } else {
                      handleAdd(cat);
                    }
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
