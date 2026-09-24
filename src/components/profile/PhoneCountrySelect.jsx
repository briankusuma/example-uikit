import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../common/Icon';

export const COUNTRIES = [
  { name: 'South Sudan', code: '+211', flag: 'flag-ss' },
  { name: 'Spain', code: '+34', flag: 'flag-es' },
  { name: 'Sri Lanka', code: '+94', flag: 'flag-lk' },
  { name: 'South Korea', code: '+82', flag: 'flag-kr' },
  { name: 'Switzerland', code: '+41', flag: 'flag-ch' },
  { name: 'Indonesia', code: '+62', flag: 'flag-id' },
  { name: 'United States', code: '+1', flag: 'flag-us' },
];

/**
 * Reusable Phone input with searchable country selector dropdown.
 * Conforms to Figma Node #22540:6507 and OWW UIKit .oww-input-phone styles.
 */
export const PhoneCountrySelect = ({
  phoneNumber = '',
  onPhoneChange,
  countryCode = '+211',
  selectedCountry = COUNTRIES[0],
  onCountryChange,
  countries = COUNTRIES,
  label = 'Phone Number',
  required = false,
  placeholder = 'Enter your phone number',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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

  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.includes(searchQuery)
  );

  const handleSelectCountry = (country) => {
    onCountryChange(country);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="oww-form-group biz-dropdown-wrapper" ref={dropdownRef}>
      <div className="oww-form-group__label-row">
        <label htmlFor="edit-biz-phone" className="oww-form-group__label">
          {label}
        </label>
        {required && <span className="oww-form-group__required">*</span>}
      </div>

      <div className="oww-input-phone">
        <div
          className="oww-input-phone__select"
          title={`${selectedCountry.name} (${countryCode})`}
          onClick={() => setIsOpen((prev) => !prev)}
          role="button"
          tabIndex={0}
        >
          <span className="oww-dropdown__item-flag">
            <Icon name={selectedCountry.flag} size={20} />
          </span>
          <span className="oww-input-phone__select__code">{countryCode}</span>
          <span className="oww-input-phone__select__caret">
            <Icon
              name="caret-down"
              size={16}
              className={isOpen ? 'is-rotated' : ''}
            />
          </span>
        </div>

        <div className="oww-input-phone__number">
          <input
            id="edit-biz-phone"
            type="tel"
            className="oww-input"
            placeholder={placeholder}
            value={phoneNumber}
            onChange={(e) => onPhoneChange(e.target.value)}
          />
        </div>
      </div>

      {/* Country Code Dropdown Menu */}
      {isOpen && (
        <div className="oww-dropdown__menu oww-dropdown__menu--country-list">
          <div className="oww-dropdown__search">
            <Icon name="search" size={18} />
            <input
              type="text"
              placeholder="Search for countries"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
          <hr className="oww-dropdown__divider" />
          <div className="oww-dropdown__menu--scrollable">
            {filteredCountries.map((c) => {
              const isSelected = countryCode === c.code;
              return (
                <button
                  key={c.code + c.name}
                  type="button"
                  className={`oww-dropdown__item ${
                    isSelected ? 'is-selected' : ''
                  }`}
                  onClick={() => handleSelectCountry(c)}
                >
                  <span className="oww-dropdown__item-flag">
                    <Icon name={c.flag} size={20} />
                  </span>
                  <span className="oww-dropdown__item-text">
                    {c.name} ({c.code})
                  </span>
                  {isSelected && (
                    <span className="oww-dropdown__item-check">
                      <Icon name="check" size={16} />
                    </span>
                  )}
                </button>
              );
            })}
            {filteredCountries.length === 0 && (
              <div className="oww-dropdown__empty">No countries found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
