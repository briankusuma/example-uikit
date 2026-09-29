import React from 'react';
import { Skeleton } from './Skeleton';

/**
 * SkeletonText UI primitive for line/text placeholders.
 * Reuses base Skeleton with default text height and pill border-radius.
 *
 * @param {string|number} [width='100%'] - Width of the text placeholder.
 * @param {string|number} [height='16px'] - Height of the text placeholder.
 * @param {string|number} [borderRadius='100px'] - Border radius of the text placeholder.
 * @param {string} [className] - Additional CSS classes.
 */
export const SkeletonText = ({
  width = '100%',
  height = '16px',
  borderRadius = '100px',
  className = '',
  ...props
}) => {
  return (
    <Skeleton
      width={width}
      height={height}
      borderRadius={borderRadius}
      className={`oww-skeleton-text ${className}`.trim()}
      {...props}
    />
  );
};

export default SkeletonText;
