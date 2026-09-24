import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { BusinessInfoItem } from './BusinessInfoItem';

/**
 * BusinessInfoCard component
 * Displays details (About, Email, Phone, Website) on the right column.
 * Uses modular BusinessInfoItem for rendering info rows.
 */
export const BusinessInfoCard = () => {
  const profile = useAppStore((state) => state.profile);

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
