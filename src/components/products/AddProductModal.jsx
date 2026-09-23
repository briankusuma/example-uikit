import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../common/Icon';
import { Button } from '../common/Button';
import { useAppStore } from '../../store/useAppStore';

const DEFAULT_CATEGORIES = [
  'Computers',
  'Electronics',
  'Smartphones',
  'Audio',
  'Gaming',
  'Accessories',
  'Software',
];

const DEFAULT_PRODUCT_IMAGE =
  'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=80';

export const AddProductModal = ({ isOpen, onClose }) => {
  const addProduct = useAppStore((state) => state.addProduct);

  // Form states
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);
  const categoryDropdownRef = useRef(null);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setImages([]);
      setSelectedImageIndex(0);
      setName('');
      setPrice('');
      setCategory('Computers');
      setDescription('');
      setIsCategoryDropdownOpen(false);
      setIsDragging(false);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        if (isCategoryDropdownOpen) {
          setIsCategoryDropdownOpen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isCategoryDropdownOpen, onClose]);

  // Click outside category dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(e.target)
      ) {
        setIsCategoryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  // File upload handlers
  const handleFiles = (fileList) => {
    const validFiles = Array.from(fileList).filter((f) =>
      f.type.startsWith('image/')
    );

    if (validFiles.length === 0) return;

    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages((prev) => [...prev, e.target.result]);
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

  const handleRemoveImage = (indexToRemove, e) => {
    e.stopPropagation();
    setImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
    if (selectedImageIndex >= indexToRemove && selectedImageIndex > 0) {
      setSelectedImageIndex((prev) => prev - 1);
    }
  };

  // Form validity
  const isValid =
    name.trim() !== '' &&
    price.trim() !== '' &&
    category.trim() !== '' &&
    description.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    // Format price with SSP currency if not present
    let formattedPrice = price.trim();
    if (!formattedPrice.toUpperCase().includes('SSP')) {
      // Add SSP suffix or prefix
      const numOnly = formattedPrice.replace(/[^0-9.]/g, '');
      const num = parseFloat(numOnly);
      if (!isNaN(num)) {
        formattedPrice = `${num.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} SSP`;
      } else {
        formattedPrice = `${formattedPrice} SSP`;
      }
    }

    const mainImage =
      images.length > 0 ? images[selectedImageIndex] || images[0] : DEFAULT_PRODUCT_IMAGE;

    addProduct({
      id: Date.now(),
      name: name.trim(),
      price: formattedPrice,
      desc: description.trim(),
      category: category.trim(),
      image: mainImage,
      thumbnails: images,
    });

    onClose();
  };

  return (
    <div
      className="biz-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="biz-modal-card biz-modal-card--add-product"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="biz-modal-header">
          <h3 className="oww-card__title">Add New Product</h3>
          <button
            type="button"
            className="biz-modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <Icon name="close" size={20} />
          </button>
        </div>
        <hr className="oww-card__divider" />

        {/* 2-Column Content Body */}
        <div className="biz-product-modal-body">
          {/* Left Column: Product Images */}
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
                  onClick={(e) => handleRemoveImage(selectedImageIndex, e)}
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
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <img src={imgSrc} alt={`Thumbnail ${idx + 1}`} />
                  <button
                    type="button"
                    className="biz-product-modal__thumbnail-remove"
                    onClick={(e) => handleRemoveImage(idx, e)}
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

          {/* Vertical Divider */}
          <div className="biz-product-modal__divider" />

          {/* Right Column: Product Detail Form */}
          <form
            onSubmit={handleSubmit}
            className="biz-product-modal__col biz-product-modal__col--details"
          >
            <div className="biz-product-modal__section-header">
              <div className="biz-product-modal__section-title-row">
                <Icon name="bag" size={20} />
                <h4 className="biz-product-modal__section-title">Product Detail</h4>
              </div>
            </div>

            {/* 1. Product Name */}
            <div className="oww-form-group">
              <div className="oww-form-group__label-row">
                <label
                  htmlFor="add-product-name"
                  className="oww-form-group__label"
                >
                  Product Name
                </label>
                <span className="oww-form-group__required">*</span>
              </div>
              <input
                id="add-product-name"
                type="text"
                className="oww-input"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* 2. Price (SSP) */}
            <div className="oww-form-group">
              <div className="oww-form-group__label-row">
                <label
                  htmlFor="add-product-price"
                  className="oww-form-group__label"
                >
                  Price (SSP)
                </label>
                <span className="oww-form-group__required">*</span>
              </div>
              <input
                id="add-product-price"
                type="text"
                className="oww-input"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            {/* 3. Category */}
            <div
              className="oww-form-group biz-dropdown-wrapper"
              ref={categoryDropdownRef}
            >
              <div className="oww-form-group__label-row">
                <label
                  htmlFor="add-product-category"
                  className="oww-form-group__label"
                >
                  Category
                </label>
                <span className="oww-form-group__required">*</span>
              </div>
              <div
                className="oww-input-badge biz-category-picker"
                onClick={() => setIsCategoryDropdownOpen(true)}
              >
                {category && (
                  <span className="oww-input-chip">
                    <span>{category}</span>
                    <button
                      type="button"
                      className="oww-input-chip__remove"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCategory('');
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
                  placeholder={
                    category ? 'Change category...' : 'Type a category and press Enter'
                  }
                  value={category ? '' : category}
                  onChange={(e) => setCategory(e.target.value)}
                  onFocus={() => setIsCategoryDropdownOpen(true)}
                />
                <button
                  type="button"
                  className="biz-category-dropdown-toggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
                  }}
                  aria-label="Toggle category list"
                >
                  <Icon
                    name="caret-down"
                    size={16}
                    className={isCategoryDropdownOpen ? 'is-rotated' : ''}
                  />
                </button>
              </div>

              {/* Category Dropdown Menu */}
              {isCategoryDropdownOpen && (
                <div className="biz-category-dropdown">
                  <div className="biz-category-dropdown__title">
                    Suggested Categories:
                  </div>
                  <div className="biz-category-dropdown__list">
                    {DEFAULT_CATEGORIES.map((cat) => {
                      const isSelected = category === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          className={`biz-category-dropdown__item ${
                            isSelected ? 'is-selected' : ''
                          }`}
                          onClick={() => {
                            setCategory(cat);
                            setIsCategoryDropdownOpen(false);
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

            {/* 4. Description */}
            <div className="oww-form-group">
              <div className="oww-form-group__label-row">
                <label
                  htmlFor="add-product-desc"
                  className="oww-form-group__label"
                >
                  Description
                </label>
                <span className="oww-form-group__required">*</span>
              </div>
              <textarea
                id="add-product-desc"
                className="oww-textarea"
                placeholder="Add decription of your product"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="biz-product-modal__submit-wrapper">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                disabled={!isValid}
                onClick={handleSubmit}
              >
                Add Product
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
