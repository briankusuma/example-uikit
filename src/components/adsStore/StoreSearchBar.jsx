import React from 'react';
import { Icon } from '../common/Icon';
import { Skeleton } from '../ui';
import { useAppStore } from '../../store/useAppStore';

/**
 * StoreSearchBar component
 * Figma Node #22904:36574: Pill search bar with icon
 */
export const StoreSearchBar = ({
  value = '',
  onChange,
  placeholder = 'Search user, business or product...',
  className = '',
  isLoading: propLoading,
}) => {
  const storeLoading = useAppStore((state) => state.isLoading);
  const isLoading = propLoading !== undefined ? propLoading : storeLoading;

  if (isLoading) {
    return <Skeleton width="100%" height="48px" borderRadius="100px" className={className} />;
  }
  return (
    <div className={`biz-store-search ${className}`}>
      <span className="biz-store-search__icon">
        <Icon name="search" size={20} color="#555555" />
      </span>
      <input
        type="text"
        className="biz-store-search__input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      {value && (
        <button
          type="button"
          className="biz-store-search__clear"
          onClick={() => onChange && onChange('')}
          aria-label="Clear search"
        >
          <Icon name="close" size={16} color="#777777" />
        </button>
      )}
    </div>
  );
};

export default StoreSearchBar;
