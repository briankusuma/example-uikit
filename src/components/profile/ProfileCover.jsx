import React from 'react';

export const ProfileCover = () => {
  return (
    <div className="biz-profile__cover-wrapper">
      <img
        src="/images/cover-banner.png"
        alt="Profile Cover"
        className="biz-profile__cover-img"
        onError={(e) => {
          e.target.src =
            'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80';
        }}
      />
      <div className="biz-profile__cover-btn">
        <button
          className="oww-btn oww-btn--cover"
          onClick={() => alert('Add Cover dialog')}
        >
          Add Cover
        </button>
      </div>
    </div>
  );
};
