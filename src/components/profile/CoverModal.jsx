import React, { useState } from 'react';
import { Icon } from '../common/Icon';
import { Button } from '../common/Button';
import { CoverDropzone } from './CoverDropzone';
import { CoverUrlInput } from './CoverUrlInput';

/**
 * CoverModal component according to Figma node #22510:1167
 * Composed with CoverDropzone and CoverUrlInput.
 */
export const CoverModal = ({ isOpen, onClose, currentCover, onSaveCover }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleApply = () => {
    if (selectedImage) {
      onSaveCover(selectedImage);
      handleClose();
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="biz-modal-overlay" onClick={handleClose}>
      <div
        className="oww-card oww-card--dialog biz-modal-card"
        role="dialog"
        aria-labelledby="coverModalTitle"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="oww-card__header biz-modal-header">
          <h3 id="coverModalTitle" className="oww-card__title">
            Cover Image
          </h3>
          <button
            type="button"
            className="oww-card__close-btn biz-modal-close-btn"
            aria-label="Close dialog"
            onClick={handleClose}
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <hr className="oww-card__divider" />

        {/* Modal Body */}
        <div className="biz-modal-body">
          {/* File Upload Dropzone */}
          <CoverDropzone
            selectedImage={selectedImage}
            onImageChange={(img) => {
              setSelectedImage(img);
              setErrorMessage('');
            }}
            onImageRemove={() => {
              setSelectedImage(null);
              setErrorMessage('');
            }}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />

          {/* Divider "or" */}
          <div className="biz-modal__divider-or">
            <span className="biz-modal__divider-line" />
            <span className="biz-modal__divider-text">or</span>
            <span className="biz-modal__divider-line" />
          </div>

          {/* Upload from URL Form */}
          <CoverUrlInput
            onApplyUrl={(url) => {
              setSelectedImage(url);
              setErrorMessage('');
            }}
            setErrorMessage={setErrorMessage}
          />
        </div>

        <hr className="oww-card__divider" />

        {/* Footer */}
        <div className="biz-modal-footer">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            disabled={!selectedImage}
            onClick={handleApply}
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoverModal;
