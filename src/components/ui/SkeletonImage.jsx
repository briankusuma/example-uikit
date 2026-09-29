import React from 'react';
import { Skeleton } from './Skeleton';

/**
 * SkeletonImage UI primitive for media, cover banners, and image placeholders.
 *
 * @param {string|number} [width='100%'] - Width of the image placeholder.
 * @param {string|number} [height='200px'] - Height of the image placeholder.
 * @param {string|number} [borderRadius='12px'] - Border radius of the image placeholder.
 * @param {string} [className] - Additional CSS classes.
 * @param {React.CSSProperties} [style] - Inline style overrides.
 */
export const SkeletonImage = ({
  width = '100%',
  height = '200px',
  borderRadius = '12px',
  className = '',
  style = {},
  ...props
}) => {
  return (
    <Skeleton
      width={width}
      height={height}
      borderRadius={borderRadius}
      className={`oww-skeleton-image ${className}`.trim()}
      style={style}
      {...props}
    />
  );
};

export default SkeletonImage;
