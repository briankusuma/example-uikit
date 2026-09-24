import React, { useState, useEffect } from 'react';
import { Icon } from '../common/Icon';
import { Button } from '../common/Button';
import { ProductImageUpload } from './ProductImageUpload';
import { ProductCategorySelect } from './ProductCategorySelect';
import { useAppStore } from '../../store/useAppStore';

const DEFAULT_PRODUCT_IMAGE =
  'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=80';

/**
 * AddProductModal component.
 * Composes ProductImageUpload and ProductCategorySelect components.
 */
export const AddProductModal = ({ isOpen, onClose }) => {
  const addProduct = useAppStore((state) => state.addProduct);

  // Form states
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Computers');
  const [description, setDescription] = useState('');

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setImages([]);
      setSelectedImageIndex(0);
      setName('');
      setPrice('');
      setCategory('Computers');
      setDescription('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAddImages = (dataUrl) => {
    setImages((prev) => [...prev, dataUrl]);
  };

  const handleRemoveImage = (indexToRemove, e) => {
    e?.stopPropagation();
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
          {/* Left Column: Product Images Upload */}
          <ProductImageUpload
            images={images}
            selectedImageIndex={selectedImageIndex}
            onSelectImage={setSelectedImageIndex}
            onAddImages={handleAddImages}
            onRemoveImage={handleRemoveImage}
          />

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
                <label htmlFor="add-product-name" className="oww-form-group__label">
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
                <label htmlFor="add-product-price" className="oww-form-group__label">
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

            {/* 3. Category Selector */}
            <ProductCategorySelect
              category={category}
              onCategoryChange={setCategory}
            />

            {/* 4. Description */}
            <div className="oww-form-group">
              <div className="oww-form-group__label-row">
                <label htmlFor="add-product-desc" className="oww-form-group__label">
                  Description
                </label>
                <span className="oww-form-group__required">*</span>
              </div>
              <textarea
                id="add-product-desc"
                className="oww-textarea"
                placeholder="Add product description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                required
              />
            </div>

            {/* Submit Button inside scrollable form */}
            <div className="biz-product-modal__submit-wrapper">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={!isValid}
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

export default AddProductModal;
