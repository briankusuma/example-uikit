import React, { useState } from 'react';
import { ProductLightboxModal } from './ProductLightboxModal';
import { Icon } from '../common/Icon';

/**
 * ProductGallery component
 * Figma Node #22904:38154: Media preview with large image and interactive thumbnail gallery
 * Supports full lightbox view conforming to Figma Node #22682:21543
 */
export const ProductGallery = ({
  images = [],
  mainImage = '',
  hasVideoThumb = false,
  videoDuration = '00:21',
  title = '',
  className = '',
}) => {
  const galleryList = images.length > 0 ? images : [mainImage];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeImage = galleryList[selectedIndex] || mainImage;

  return (
    <div className={`biz-product-gallery ${className}`}>
      {/* Main Large Display Image (Click to open fullscreen lightbox) */}
      <div
        className="biz-product-gallery__main"
        onClick={() => setIsLightboxOpen(true)}
        role="button"
        tabIndex={0}
        aria-label="Click to enlarge image"
        title="Click to view fullscreen"
      >
        <img
          src={activeImage}
          alt={title}
          className="biz-product-gallery__main-img"
        />
        <div className="biz-product-gallery__zoom-hint">
          <Icon name="search" size={16} />
        </div>
      </div>

      {/* Thumbnails Row */}
      {galleryList.length > 1 && (
        <div className="biz-product-gallery__thumbnails">
          {galleryList.map((img, idx) => {
            const isSelected = selectedIndex === idx;
            const isVideoThumb = hasVideoThumb && idx === 2;

            return (
              <button
                key={idx}
                type="button"
                className={`biz-product-gallery__thumb-btn ${
                  isSelected ? 'biz-product-gallery__thumb-btn--active' : ''
                }`}
                onClick={() => setSelectedIndex(idx)}
                aria-label={`View image ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`${title} thumbnail ${idx + 1}`}
                  className="biz-product-gallery__thumb-img"
                />
                {isVideoThumb && (
                  <span className="biz-product-gallery__video-pill">
                    {videoDuration}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal (Figma Node #22682:21543) */}
      <ProductLightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={galleryList}
        initialIndex={selectedIndex}
        title={title}
      />
    </div>
  );
};

export default ProductGallery;
