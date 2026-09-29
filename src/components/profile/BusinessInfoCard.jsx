import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { BusinessInfoItem } from './BusinessInfoItem';
import { SkeletonText } from '../ui';

/**
 * BusinessInfoCard component
 * Displays details (About, Email, Phone, Website) on the right column.
 * Uses modular BusinessInfoItem for rendering info rows.
 */
export const BusinessInfoCard = ({ customProfile, isLoading: propIsLoading }) => {
  const storeProfile = useAppStore((state) => state.profile);
  const storeIsLoading = useAppStore((state) => state.isLoading);
  const isLoading = propIsLoading !== undefined ? propIsLoading : storeIsLoading;
  const profile = customProfile || storeProfile;

  if (isLoading) {
    return (
      <aside className="oww-card biz-info-card" aria-busy="true">
        <div className="oww-card__header">
          <SkeletonText width="150px" height="16px" />
        </div>
        <hr className="oww-card__divider" />

        {/* About skeleton */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SkeletonText width="80px" height="16px" />
          <SkeletonText width="100%" height="16px" />
          <SkeletonText width="230px" height="16px" style={{ maxWidth: '100%' }} />
        </div>
        <hr className="oww-card__divider" />

        {/* Email skeleton */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SkeletonText width="80px" height="16px" />
          <SkeletonText width="230px" height="16px" />
        </div>
        <hr className="oww-card__divider" />

        {/* Phone skeleton */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SkeletonText width="80px" height="16px" />
          <SkeletonText width="230px" height="16px" />
        </div>
        <hr className="oww-card__divider" />

        {/* Website skeleton */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SkeletonText width="80px" height="16px" />
          <SkeletonText width="230px" height="16px" />
        </div>
      </aside>
    );
  }

  const infoFields = [
    {
      id: 'about',
      label: 'About',
      value: profile.about,
      isText: true,
    },
    {
      id: 'email',
      label: 'Email',
      value: profile.email,
      icon: 'envelope',
      href: `mailto:${profile.email}`,
    },
    {
      id: 'phone',
      label: 'Phone Number',
      value: profile.phone,
      icon: 'phone',
      href: `tel:${profile.phone}`,
    },
    {
      id: 'website',
      label: 'Website',
      value: profile.website,
      icon: 'globe',
      href: profile.website,
      isExternal: true,
    },
  ];

  return (
    <aside className="oww-card biz-info-card">
      <div className="oww-card__header">
        <h3 className="oww-card__title">Business Profile</h3>
      </div>
      <hr className="oww-card__divider" />

      {infoFields.map((field, idx) => (
        <React.Fragment key={field.id}>
          <BusinessInfoItem
            label={field.label}
            value={field.value}
            icon={field.icon}
            href={field.href}
            isText={field.isText}
            isExternal={field.isExternal}
          />
          {idx < infoFields.length - 1 && <hr className="oww-card__divider" />}
        </React.Fragment>
      ))}
    </aside>
  );
};

export default BusinessInfoCard;
