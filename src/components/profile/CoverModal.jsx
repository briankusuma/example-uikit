import React, { useState, useRef } from 'react';
import { Icon } from '../common/Icon';
import { Button } from '../common/Button';

/**
 * CoverModal component according to Figma node #22510:1167
 * (Add or Change Cover Image).
 *
 * Implements OWW UIKit .oww-card--dialog, .oww-file-upload, and .oww-input.
 */
export const CoverModal = ({ isOpen, onClose, currentCover, onSaveCover }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [urlInput, setUrlInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFileChange = (file) => {
    if (!file) return;

    // Validate format (JPG, PNG)
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setErrorMessage('Unsupported format. Please upload JPG or PNG.');
      return;
    }

    // Validate size (Max 2MB = 2 * 1024 * 1024 bytes)
    const maxSizeBytes = 2 * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      setErrorMessage('File is too large. Maximum size is 2MB.');
      return;
    }

    // Clear previous errors
    setErrorMessage('');
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
      setUrlInput('');
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleUrlSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyUrl();
    }
  };

  const applyUrl = () => {
    if (!urlInput.trim()) return;
    try {
      const parsed = new URL(urlInput.trim());
      if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
        setErrorMessage('');
        setSelectedImage(urlInput.trim());
      } else {
        setErrorMessage('Please enter a valid HTTP or HTTPS image URL.');
      }
    } catch {
      setErrorMessage('Please enter a valid URL.');
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    setSelectedImage(null);
    setUrlInput('');
    setErrorMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleApply = () => {
    if (selectedImage) {
      onSaveCover(selectedImage);
      handleClose();
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
    setUrlInput('');
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
          {/* OWW File Upload */}
          <div className="oww-file-upload">
            <div
              className={`oww-file-upload__dropzone ${
                isDragOver ? 'is-dragover' : ''
              } ${selectedImage ? 'is-applied' : ''} ${
                errorMessage ? 'is-error' : ''
              }`}
              style={
                selectedImage
                  ? { backgroundImage: `url(${selectedImage})` }
                  : undefined
              }
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
              onClick={() => {
                if (!selectedImage && fileInputRef.current) {
                  fileInputRef.current.click();
                }
              }}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileChange(e.target.files[0]);
                  }
                }}
              />

              {/* State 1: No file selected */}
              {!selectedImage && (
                <div className="oww-file-upload__body">
                  <div className="oww-file-upload__icon">
                    <Icon name="upload" size={24} />
                  </div>
                  <div className="oww-file-upload__text-group">
                    <span className="oww-file-upload__title">
                      Choose a file or drag and drop here.
                    </span>
                    <span className="oww-file-upload__subtitle">
                      Formats: JPG, PNG. Max size 2 MB. Use a landscape image.
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (fileInputRef.current) fileInputRef.current.click();
                    }}
                  >
                    Browse File
                  </Button>
                </div>
              )}

              {/* State 2: Image Applied / Selected */}
              {selectedImage && (
                <div className="oww-file-upload__actions">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (fileInputRef.current) fileInputRef.current.click();
                    }}
                  >
                    Change Cover
                  </Button>
                  <Button variant="danger" size="sm" onClick={handleRemove}>
                    Remove
                  </Button>
                </div>
              )}
            </div>

            {/* Error message */}
            {errorMessage && (
              <span className="oww-file-upload__error-text">
                {errorMessage}
              </span>
            )}
          </div>

          {/* Divider "or" */}
          <div className="biz-modal__divider-or">
            <span className="biz-modal__divider-line" />
            <span className="biz-modal__divider-text">or</span>
            <span className="biz-modal__divider-line" />
          </div>

          {/* Upload from URL Form */}
          <div className="biz-modal__url-form">
            <label className="biz-modal__url-label" htmlFor="coverUrlInput">
              Upload from URL
            </label>
            <div className="biz-modal__url-input-wrapper">
              <input
                id="coverUrlInput"
                type="url"
                className="oww-input"
                placeholder="Paste file URL and press ENTER to upload"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                onKeyDown={handleUrlSubmit}
                onBlur={() => {
                  if (urlInput.trim()) applyUrl();
                }}
              />
            </div>
          </div>
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
