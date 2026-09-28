import React, { useState, useEffect } from 'react';
import { Icon } from '../common/Icon';

/**
 * ProductLightboxModal component conforming to Figma Node #22682:21543
 * ("Product Image - Image fullscreen")
 *
 * Provides:
 * - Fullscreen display card (950x650) with contained product image
 * - Top-right pagination badge (e.g. "1/4")
 * - Bottom indicator bar & dots
 * - Left & Right navigation buttons
 * - Top-right Close button
 * - Keyboard navigation (ArrowLeft, ArrowRight, Escape)
 */
export const ProductLightboxModal = ({
  isOpen,
  onClose,
  images = [],
  initialIndex = 0,
  title = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const total = images.length;

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, total]);

  if (!isOpen || total === 0) return null;

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      className="biz-lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onClose}
    >
      {/* Top-Right Close Button (Figma Node #22682:22015) */}
      <button
        type="button"
        className="biz-lightbox__btn-close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close fullscreen view"
        title="Close (Esc)"
      >
        <Icon name="x" size={20} />
      </button>

      {/* Left Navigation Button (Figma Node #22682:22021) */}
      {total > 1 && (
        <button
          type="button"
          className="biz-lightbox__btn-nav biz-lightbox__btn-nav--prev"
          onClick={handlePrev}
          aria-label="Previous image"
          title="Previous (Left arrow)"
        >
          <Icon name="arrow-left" size={20} />
        </button>
      )}

      {/* Right Navigation Button (Figma Node #22682:22011) */}
      {total > 1 && (
        <button
          type="button"
          className="biz-lightbox__btn-nav biz-lightbox__btn-nav--next"
          onClick={handleNext}
          aria-label="Next image"
          title="Next (Right arrow)"
        >
          <Icon name="arrow-right" size={20} />
        </button>
      )}

      {/* Main Fullscreen Card Container (Figma Node #22682:21968) */}
      <div
        className="biz-lightbox__card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Active Product Image */}
        <div className="biz-lightbox__img-wrapper">
          <img
            src={currentImage}
            alt={`${title} - fullscreen view ${currentIndex + 1}`}
            className="biz-lightbox__img"
          />
        </div>

        {/* Top-Right Pagination Badge (Figma Node #22682:20678) */}
        <div className="biz-lightbox__badge">
          <span>
            {currentIndex + 1}/{total}
          </span>
        </div>

        {/* Bottom Pagination Bar and Dots (Figma Node #22682:21958) */}
        {total > 1 && (
          <div className="biz-lightbox__pagination">
            {images.map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  className={`biz-lightbox__dot ${
                    isActive ? 'biz-lightbox__dot--active' : ''
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductLightboxModal;
