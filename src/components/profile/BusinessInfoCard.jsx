import React from 'react';
import { Icon } from '../common/Icon';
import { useAppStore } from '../../store/useAppStore';

export const BusinessInfoCard = () => {
  const profile = useAppStore((state) => state.profile);

  return (
    <aside className="oww-card biz-info-card">
      <div className="oww-card__header">
        <h3 className="oww-card__title">Business Profile</h3>
      </div>
      <hr className="oww-card__divider" />

      {/* About */}
      <div className="biz-info-card__item">
        <span className="biz-info-card__label">About</span>
        <p className="oww-card__body biz-info-card__value">{profile.about}</p>
      </div>
      <hr className="oww-card__divider" />

      {/* Email */}
      <div className="biz-info-card__item">
        <span className="biz-info-card__label">Email</span>
        <a href={`mailto:${profile.email}`} className="biz-info-card__link">
          <Icon name="envelope" size={16} />
          <span>{profile.email}</span>
        </a>
      </div>
      <hr className="oww-card__divider" />

      {/* Phone */}
      <div className="biz-info-card__item">
        <span className="biz-info-card__label">Phone Number</span>
        <a href={`tel:${profile.phone}`} className="biz-info-card__link">
          <Icon name="phone" size={16} />
          <span>{profile.phone}</span>
        </a>
      </div>
      <hr className="oww-card__divider" />

      {/* Website */}
      <div className="biz-info-card__item">
        <span className="biz-info-card__label">Website</span>
        <a
          href={profile.website}
          target="_blank"
          rel="noopener noreferrer"
          className="biz-info-card__link"
        >
          <Icon name="globe" size={16} />
          <span>{profile.website}</span>
        </a>
      </div>
    </aside>
  );
};
