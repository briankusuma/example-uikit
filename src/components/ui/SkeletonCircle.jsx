import React from 'react';
import { Skeleton } from './Skeleton';

/**
 * SkeletonCircle UI primitive for circular placeholders (avatars, icons, badges).
 *
 * @param {string|number} [size='40px'] - Diameter of the circular skeleton.
 * @param {string} [className] - Additional CSS classes.
 * @param {React.CSSProperties} [style] - Inline style overrides.
 */
export const SkeletonCircle = ({
  size = '40px',
  className = '',
  style = {},
  ...props
}) => {
  return (
    <Skeleton
      width={size}
      height={size}
      borderRadius="50%"
      className={`oww-skeleton-circle ${className}`.trim()}
      style={style}
      {...props}
    />
  );
};

export default SkeletonCircle;
