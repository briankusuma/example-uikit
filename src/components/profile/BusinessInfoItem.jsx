import React from 'react';
import { Icon } from '../common/Icon';

/**
 * Reusable row item for Business Info Card.
 * Renders either plain text or an interactive link with an icon.
 */
export const BusinessInfoItem = ({
  label,
  value,
  icon,
  href,
  isExternal = false,
  isText = false,
}) => {
  if (!value) return null;

  return (
    <div className="biz-info-card__item">
      <span className="biz-info-card__label">{label}</span>
      {isText ? (
        <p className="oww-card__body biz-info-card__value">{value}</p>
      ) : (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="biz-info-card__link"
        >
          {icon && <Icon name={icon} size={16} />}
          <span>{value}</span>
        </a>
      )}
    </div>
  );
};
