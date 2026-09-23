import React from 'react';

/**
 * Reusable Button component aligned with official OWW UIKit CDN & Figma Design specs.
 *
 * @param {Object} props
 * @param {'primary' | 'outline' | 'ghost' | 'danger' | 'verification'} [props.variant='primary']
 * @param {'xs' | 'sm' | 'md' | 'lg'} [props.size='md']
 * @param {React.ReactNode} [props.leftIcon] - Icon displayed before text
 * @param {React.ReactNode} [props.icon] - Alias for leftIcon
 * @param {React.ReactNode} [props.rightIcon] - Icon displayed after text
 * @param {boolean} [props.iconOnly=false] - Circular icon-only button style
 * @param {boolean} [props.fullWidth=false] - Stretches button to 100% width
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {string} [props.className=''] - Additional custom CSS classes
 * @param {React.ReactNode} [props.children] - Button label/content
 * @param {string} [props.type='button'] - Button HTML type
 */

export const Button = ({
  variant = 'primary',
  size = 'md',
  leftIcon,
  icon,
  rightIcon,
  iconOnly = false,
  fullWidth = false,
  disabled = false,
  className = '',
  children,
  type = 'button',
  ...restProps
}) => {
  const resolvedLeftIcon = leftIcon || icon;

  const classList = [
    'oww-btn',
    variant ? `oww-btn--${variant}` : '',
    size ? `oww-btn--${size}` : '',
    iconOnly ? 'oww-btn--icon-only' : '',
    fullWidth ? 'oww-btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classList}
      disabled={disabled}
      {...restProps}
    >
      {resolvedLeftIcon && (
        <span className="oww-btn__icon">{resolvedLeftIcon}</span>
      )}
      {children && !iconOnly && (
        <span className="oww-btn__text">{children}</span>
      )}
      {rightIcon && !iconOnly && (
        <span className="oww-btn__icon">{rightIcon}</span>
      )}
    </button>
  );
};

export default Button;
