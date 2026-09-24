import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../common/Icon';

export const POPULAR_LOCATIONS = [
  'Juba, South Sudan',
  'Jebel Kujur, South Sudan',
  'Jebel Lado, South Sudan',
  'Jur River, South Sudan',
  'Wau, South Sudan',
  'Malakal, South Sudan',
  'Nairobi, Kenya',
  'Jakarta, Indonesia',
  'Madrid, Spain',
  'Seoul, South Korea',
  'Zurich, Switzerland',
];

/**
 * Reusable Location Input with autocomplete suggestions dropdown.
 * Conforms to Figma Node #22540:11819.
 */
export const LocationSelect = ({
  location = '',
  onLocationChange,
  suggestions = POPULAR_LOCATIONS,
  label = 'Location',
  placeholder = 'Type a location',
  required = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const filteredLocations = suggestions.filter((loc) =>
    loc.toLowerCase().includes(location.toLowerCase())
  );

  const displayList =
    filteredLocations.length > 0 ? filteredLocations : suggestions;

  return (
    <div className="oww-form-group biz-dropdown-wrapper" ref={dropdownRef}>
      <div className="oww-form-group__label-row">
        <label htmlFor="edit-biz-location" className="oww-form-group__label">
          {label}
        </label>
        {required && <span className="oww-form-group__required">*</span>}
      </div>

      <input
        id="edit-biz-location"
        type="text"
        className="oww-input"
        placeholder={placeholder}
        value={location}
        onChange={(e) => {
          onLocationChange(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        autoComplete="off"
      />

      {/* Location Dropdown Menu */}
      {isOpen && (
        <div className="oww-dropdown__menu oww-dropdown__menu--location-list">
          <div className="oww-dropdown__menu--scrollable">
            {displayList.map((loc) => {
              const isSelected =
                location.trim().toLowerCase() === loc.toLowerCase();
              return (
                <button
                  key={loc}
                  type="button"
                  className={`oww-dropdown__item ${
                    isSelected ? 'is-selected' : ''
                  }`}
                  onClick={() => {
                    onLocationChange(loc);
                    setIsOpen(false);
                  }}
                >
                  <span className="oww-dropdown__item-text">{loc}</span>
                  {isSelected && (
                    <span className="oww-dropdown__item-check">
                      <Icon name="check" size={16} />
                    </span>
                  )}
                </button>
              );
            })}
            {filteredLocations.length === 0 && (
              <div className="oww-dropdown__empty">No suggestions found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
