import React, { useState } from 'react';

/**
 * ProductGallery component
 * Figma Node #22904:38154: Media preview with large image and interactive thumbnail gallery
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

  const activeImage = galleryList[selectedIndex] || mainImage;

  return (
    <div className={`biz-product-gallery ${className}`}>
      {/* Main Large Display Image */}
      <div className="biz-product-gallery__main">
        <img
          src={activeImage}
          alt={title}
          className="biz-product-gallery__main-img"
        />
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
    </div>
  );
};

export default ProductGallery;
