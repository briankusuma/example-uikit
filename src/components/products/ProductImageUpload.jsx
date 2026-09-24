import React, { useRef, useState } from 'react';
import { Icon } from '../common/Icon';
import { Button } from '../common/Button';

/**
 * ProductImageUpload component.
 * Handles drag & drop, file selection, main preview, and thumbnail strip.
 */
export const ProductImageUpload = ({
  images = [],
  selectedImageIndex = 0,
  onSelectImage,
  onAddImages,
  onRemoveImage,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFiles = (fileList) => {
    const validFiles = Array.from(fileList).filter((f) =>
      f.type.startsWith('image/')
    );

    if (validFiles.length === 0) return;

    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        onAddImages(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  return (
    <div className="biz-product-modal__col biz-product-modal__col--images">
      <div className="biz-product-modal__section-header">
        <div className="biz-product-modal__section-title-row">
          <Icon name="image" size={20} />
          <h4 className="biz-product-modal__section-title">Product Images</h4>
        </div>
        <p className="biz-product-modal__section-subtitle">
          Upload images or videos (JPG, JPEG, PNG, MP4) up to 50 MB.
        </p>
      </div>

      {/* Hidden native file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/webp"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />

      {/* Main Dropzone / Preview */}
      {images.length > 0 ? (
        <div className="biz-product-modal__preview-wrapper">
          <img
            src={images[selectedImageIndex] || images[0]}
            alt="Product preview"
            className="biz-product-modal__preview-img"
          />
          <button
            type="button"
            className="biz-product-modal__preview-remove"
            onClick={(e) => onRemoveImage(selectedImageIndex, e)}
            title="Remove image"
          >
            <Icon name="close" size={16} />
          </button>
        </div>
      ) : (
        <div
          className={`oww-file-upload__dropzone biz-product-modal__dropzone ${
            isDragging ? 'is-dragging' : ''
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="biz-product-modal__dropzone-content">
            <div className="biz-product-modal__dropzone-icon">
              <Icon name="upload" size={24} />
            </div>
            <div className="biz-product-modal__dropzone-texts">
              <div className="biz-product-modal__dropzone-title">
                Choose a file or drag and drop here.
              </div>
              <div className="biz-product-modal__dropzone-hint">
                Formats: JPG, PNG. Max 2 MB. Thumbnail must be an image.
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
            >
              Browse File
            </Button>
          </div>
        </div>
      )}

      {/* Mini Thumbnails Row */}
      <div className="biz-product-modal__thumbnails-row">
        {images.map((imgSrc, idx) => (
          <div
            key={idx}
            className={`biz-product-modal__thumbnail-item ${
              selectedImageIndex === idx ? 'is-selected' : ''
            }`}
            onClick={() => onSelectImage(idx)}
          >
            <img src={imgSrc} alt={`Thumbnail ${idx + 1}`} />
            <button
              type="button"
              className="biz-product-modal__thumbnail-remove"
              onClick={(e) => onRemoveImage(idx, e)}
              title="Remove"
            >
              <Icon name="close" size={10} />
            </button>
          </div>
        ))}

        {/* Add more button */}
        <button
          type="button"
          className="biz-product-modal__thumbnail-add-btn"
          onClick={() => fileInputRef.current?.click()}
          title="Add more images"
        >
          <div className="biz-product-modal__plus-circle">
            <Icon name="plus" size={16} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductImageUpload;
