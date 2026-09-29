import React from 'react';

/**
 * Base Skeleton UI primitive with shimmer animation and configurable dimensions.
 *
 * @param {string|number} width - Width of the skeleton element.
 * @param {string|number} height - Height of the skeleton element.
 * @param {string|number} borderRadius - Border radius of the skeleton element.
 * @param {'default'|'darker'|'button'} [variant] - Optional visual variant.
 * @param {string} [className] - Additional CSS classes.
 * @param {React.CSSProperties} [style] - Inline style overrides.
 */
export const Skeleton = ({
  width,
  height,
  borderRadius,
  className = '',
  style = {},
  variant,
  ...props
}) => {
  const inlineStyle = {
    ...(width !== undefined && {
      width: typeof width === 'number' ? `${width}px` : width,
    }),
    ...(height !== undefined && {
      height: typeof height === 'number' ? `${height}px` : height,
    }),
    ...(borderRadius !== undefined && {
      borderRadius:
        typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
    }),
    ...style,
  };

  const variantClass = variant ? `oww-skeleton--${variant}` : '';

  return (
    <div
      className={`oww-skeleton ${variantClass} ${className}`.trim()}
      style={inlineStyle}
      aria-hidden="true"
      {...props}
    />
  );
};

export default Skeleton;
