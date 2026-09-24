import React from 'react';

const DEFAULT_AVATAR = '/images/business-avatar.png';
const FALLBACK_AVATAR =
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&auto=format&fit=crop&q=80';

/**
 * Reusable ProfileAvatar component with fallback error handling.
 */
export const ProfileAvatar = ({
  src = DEFAULT_AVATAR,
  fallback = FALLBACK_AVATAR,
  alt = 'Rise Loop',
  className = '',
}) => {
  return (
    <div className={`biz-profile__avatar-container ${className}`}>
      <img
        src={src}
        alt={alt}
        className="biz-profile__avatar-img"
        onError={(e) => {
          if (e.target.src !== fallback) {
            e.target.src = fallback;
          }
        }}
      />
    </div>
  );
};
