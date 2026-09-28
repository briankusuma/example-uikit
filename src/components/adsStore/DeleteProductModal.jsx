import React, { useEffect } from 'react';
import { Icon } from '../common/Icon';

/**
 * DeleteProductModal component conforming to Figma Node #22631:9286
 * ("Deleted Confirmation")
 */
export const DeleteProductModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Delete This Product?',
  description = 'Deleting this product will permanently remove it from your store. Customers will no longer be able to view or purchase it.',
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="biz-delete-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-dialog-title"
      onClick={onClose}
    >
      <div
        className="biz-delete-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: Title + Close Icon Button */}
        <div className="biz-delete-modal__header">
          <h3 id="delete-dialog-title" className="biz-delete-modal__title">
            {title}
          </h3>
          <button
            type="button"
            className="biz-delete-modal__close-btn"
            onClick={onClose}
            aria-label="Close dialog"
            title="Close"
          >
            <Icon name="x" size={18} color="#000000" />
          </button>
        </div>

        <hr className="biz-delete-modal__divider" />

        {/* Body Text */}
        <p className="biz-delete-modal__description">{description}</p>

        {/* Button Group: Cancel + Delete */}
        <div className="biz-delete-modal__actions">
          <button
            type="button"
            className="biz-delete-modal__btn-cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="biz-delete-modal__btn-delete"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
