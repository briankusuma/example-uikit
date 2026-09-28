import React, { useEffect, useRef } from 'react';
import { Icon } from '../common/Icon';

/**
 * ProductActionDropdown component conforming to Figma Node #22689:10619
 * ("Product Text - Click dots")
 */
export const ProductActionDropdown = ({
  isOpen,
  onClose,
  onEdit,
  onDelete,
}) => {
  const dropdownRef = useRef(null);

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

  return (
    <div
      ref={dropdownRef}
      className="biz-product-action-dropdown"
      role="menu"
      aria-label="Product actions"
    >
      {/* Edit Option */}
      <button
        type="button"
        className="biz-product-action-dropdown__item"
        onClick={() => {
          onClose();
          if (onEdit) onEdit();
        }}
        role="menuitem"
      >
        <Icon name="pencil" size={18} color="#000000" />
        <span className="biz-product-action-dropdown__label">Edit</span>
      </button>

      <hr className="biz-product-action-dropdown__divider" />

      {/* Delete Option */}
      <button
        type="button"
        className="biz-product-action-dropdown__item biz-product-action-dropdown__item--danger"
        onClick={() => {
          onClose();
          if (onDelete) onDelete();
        }}
        role="menuitem"
      >
        <Icon name="trash" size={18} color="#FF0909" />
        <span className="biz-product-action-dropdown__label biz-product-action-dropdown__label--danger">
          Delete
        </span>
      </button>
    </div>
  );
};

export default ProductActionDropdown;
