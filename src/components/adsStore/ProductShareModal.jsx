import React, { useState, useEffect } from 'react';
import { Icon } from '../common/Icon';
import { useAppStore } from '../../store/useAppStore';

/**
 * ProductShareModal component conforming to Figma Node #22703:20565
 * ("Product Text - Share modal pop up")
 */
export const ProductShareModal = ({
  isOpen,
  onClose,
  url = typeof window !== 'undefined' ? window.location.href : '',
  productTitle = 'Check out this product',
}) => {
  const showSuccessToast = useAppStore((state) => state.showSuccessToast);
  const [copied, setCopied] = useState(false);

  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

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

  const handleCopy = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(shareUrl);
    }
    setCopied(true);
    if (showSuccessToast) {
      showSuccessToast('Link copied to clipboard successfully!', 2500, {
        position: 'top',
      });
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'facebook',
      color: '#1877F2',
      bgColor: '#E7F0FD',
      action: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
          '_blank'
        ),
    },
    {
      name: 'X',
      icon: 'x-social',
      color: '#000000',
      bgColor: '#F1F1F1',
      action: () =>
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            shareUrl
          )}&text=${encodeURIComponent(productTitle)}`,
          '_blank'
        ),
    },
    {
      name: 'Whatsapp',
      icon: 'whatsapp',
      color: '#25D366',
      bgColor: '#E8FBF0',
      action: () =>
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(
            productTitle + ' ' + shareUrl
          )}`,
          '_blank'
        ),
    },
    {
      name: 'Telegram',
      icon: 'telegram',
      color: '#24A1DE',
      bgColor: '#E8F5FD',
      action: () =>
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(
            shareUrl
          )}&text=${encodeURIComponent(productTitle)}`,
          '_blank'
        ),
    },
    {
      name: 'Instagram',
      icon: 'instagram',
      color: '#E4405F',
      bgColor: '#FDECEF',
      action: () => {
        handleCopy();
      },
    },
  ];

  return (
    <div
      className="biz-share-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-dialog-title"
      onClick={onClose}
    >
      <div
        className="biz-share-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: Title + Subtitle + Close Circle Button */}
        <div className="biz-share-modal__header">
          <div className="biz-share-modal__title-group">
            <h3 id="share-dialog-title" className="biz-share-modal__title">
              Share This Product
            </h3>
            <p className="biz-share-modal__subtitle">
              Help others find this product by sharing the link or through platform.
            </p>
          </div>
          <button
            type="button"
            className="biz-share-modal__close-btn"
            onClick={onClose}
            aria-label="Close dialog"
            title="Close"
          >
            <Icon name="x" size={18} color="#000000" />
          </button>
        </div>

        <hr className="biz-share-modal__divider" />

        {/* Section 1: Share Link input form with copy button */}
        <div className="biz-share-modal__section">
          <label className="biz-share-modal__label">Share Link</label>
          <div className="biz-share-modal__link-box" onClick={handleCopy}>
            <span className="biz-share-modal__link-text" title={shareUrl}>
              {shareUrl}
            </span>
            <button
              type="button"
              className="biz-share-modal__copy-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleCopy();
              }}
              title="Copy link"
              aria-label="Copy link"
            >
              <Icon name="copy" size={18} color={copied ? '#40A729' : '#000000'} />
            </button>
          </div>
        </div>

        {/* Section 2: Or share to other platform */}
        <div className="biz-share-modal__section">
          <label className="biz-share-modal__label">
            Or share to other platform
          </label>
          <div className="biz-share-modal__social-row">
            {socialLinks.map((item) => (
              <button
                key={item.name}
                type="button"
                className="biz-share-modal__social-item"
                onClick={item.action}
                aria-label={`Share on ${item.name}`}
              >
                <div
                  className="biz-share-modal__social-icon"
                  style={{ backgroundColor: item.bgColor, color: item.color }}
                >
                  <Icon name={item.icon} size={22} color={item.color} />
                </div>
                <span className="biz-share-modal__social-name">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShareModal;
