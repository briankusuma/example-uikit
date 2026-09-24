import React, { useState, useRef } from 'react';
import { Icon } from '../common/Icon';
import { Button } from '../common/Button';

/**
 * Reusable Cover Dropzone with file validation, drag & drop, and preview.
 * Conforms to OWW UIKit .oww-file-upload styles.
 */
export const CoverDropzone = ({
  selectedImage,
  onImageChange,
  onImageRemove,
  errorMessage,
  setErrorMessage,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

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
      onImageChange(e.target.result);
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

  const handleRemove = (e) => {
    e.stopPropagation();
    onImageRemove();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="oww-file-upload">
      <div
        className={`oww-file-upload__dropzone ${
          isDragOver ? 'is-dragover' : ''
        } ${selectedImage ? 'is-applied' : ''} ${
          errorMessage ? 'is-error' : ''
        }`}
        style={
          selectedImage ? { backgroundImage: `url(${selectedImage})` } : undefined
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
        <span className="oww-file-upload__error-text">{errorMessage}</span>
      )}
    </div>
  );
};

export default CoverDropzone;
