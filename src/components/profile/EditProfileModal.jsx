import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../common/Icon';
import { Button } from '../common/Button';
import { useAppStore } from '../../store/useAppStore';

const POPULAR_CATEGORIES = [
  'Computers',
  'Technology',
  'Software & IT',
  'Electronics',
  'Retail',
  'Consulting',
  'Design & Creative',
  'Digital Services',
];

const COUNTRIES = [
  { name: 'South Sudan', code: '+211', flag: 'flag-ss' },
  { name: 'Spain', code: '+34', flag: 'flag-es' },
  { name: 'Sri Lanka', code: '+94', flag: 'flag-lk' },
  { name: 'South Korea', code: '+82', flag: 'flag-kr' },
  { name: 'Switzerland', code: '+41', flag: 'flag-ch' },
  { name: 'Indonesia', code: '+62', flag: 'flag-id' },
  { name: 'United States', code: '+1', flag: 'flag-us' },
];

const POPULAR_LOCATIONS = [
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

export const EditProfileModal = ({ isOpen, onClose }) => {
  const profile = useAppStore((state) => state.profile);
  const updateProfile = useAppStore((state) => state.updateProfile);

  // Form State
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryInput, setCategoryInput] = useState('');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [about, setAbout] = useState('');
  const [email, setEmail] = useState('');

  // Phone & Country State
  const [countryCode, setCountryCode] = useState('+211');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  // Website & Location State
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const [isSavedToast, setIsSavedToast] = useState(false);

  const categoryInputRef = useRef(null);
  const categoryDropdownRef = useRef(null);
  const countryDropdownRef = useRef(null);
  const locationDropdownRef = useRef(null);

  // Sync state when modal opens
  useEffect(() => {
    if (isOpen && profile) {
      setName(profile.name || '');
      setCategories(
        profile.category
          ? profile.category.split(',').map((c) => c.trim()).filter(Boolean)
          : ['Computers']
      );
      setCategoryInput('');
      setAbout(profile.about || '');
      setEmail(profile.email || '');

      // Parse phone into country code and number
      const fullPhone = profile.phone || '';
      if (fullPhone.startsWith('+')) {
        const parts = fullPhone.split(' ');
        const foundCode = parts[0] || '+211';
        setCountryCode(foundCode);
        const matchCountry = COUNTRIES.find((c) => c.code === foundCode) || COUNTRIES[0];
        setSelectedCountry(matchCountry);
        setPhoneNumber(parts.slice(1).join(' '));
      } else {
        setPhoneNumber(fullPhone);
        setSelectedCountry(COUNTRIES[0]);
        setCountryCode('+211');
      }

      setWebsite(profile.website || '');
      setLocation(profile.location || '');
      setIsSavedToast(false);
      setIsCategoryDropdownOpen(false);
      setIsCountryDropdownOpen(false);
      setIsLocationDropdownOpen(false);
      setCountrySearch('');
    }
  }, [isOpen, profile]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(e.target)
      ) {
        setIsCategoryDropdownOpen(false);
      }
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(e.target)
      ) {
        setIsCountryDropdownOpen(false);
      }
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(e.target)
      ) {
        setIsLocationDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        if (isCountryDropdownOpen) {
          setIsCountryDropdownOpen(false);
        } else if (isLocationDropdownOpen) {
          setIsLocationDropdownOpen(false);
        } else if (isCategoryDropdownOpen) {
          setIsCategoryDropdownOpen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isOpen,
    isCountryDropdownOpen,
    isLocationDropdownOpen,
    isCategoryDropdownOpen,
    onClose,
  ]);

  if (!isOpen) return null;

  // Add category handler
  const handleAddCategory = (cat) => {
    const trimmed = cat.trim();
    if (trimmed && !categories.includes(trimmed)) {
      setCategories([...categories, trimmed]);
      setCategoryInput('');
    }
  };

  const handleCategoryKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (categoryInput.trim()) {
        handleAddCategory(categoryInput);
      }
    } else if (e.key === 'Backspace' && !categoryInput && categories.length > 0) {
      setCategories(categories.slice(0, -1));
    }
  };

  const handleRemoveCategory = (catToRemove) => {
    setCategories(categories.filter((cat) => cat !== catToRemove));
  };

  // Filtered countries for search
  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.code.includes(countrySearch)
  );

  // Filtered locations
  const filteredLocations = POPULAR_LOCATIONS.filter((loc) =>
    loc.toLowerCase().includes(location.toLowerCase())
  );

  // Validation: required fields are name, category (at least 1), and about
  const isValid = name.trim() !== '' && categories.length > 0 && about.trim() !== '';

  const handleSave = (e) => {
    e.preventDefault();
    if (!isValid) return;

    const fullPhone = phoneNumber.trim()
      ? `${countryCode} ${phoneNumber.trim()}`
      : '';

    updateProfile({
      name: name.trim(),
      category: categories.join(', '),
      about: about.trim(),
      email: email.trim(),
      phone: fullPhone,
      website: website.trim(),
      location: location.trim(),
    });

    setIsSavedToast(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <div className="biz-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="biz-modal-card biz-modal-card--edit-profile"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="biz-modal-header">
          <h3 className="oww-card__title">Edit Your Business Profile</h3>
          <button
            type="button"
            className="biz-modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <Icon name="close" size={20} />
          </button>
        </div>
        <hr className="oww-card__divider" />

        {/* Modal Scrollable Body */}
        <form onSubmit={handleSave} className="biz-modal-body biz-modal-body--scrollable">
          {/* 1. Business Name (Required) */}
          <div className="oww-form-group">
            <div className="oww-form-group__label-row">
              <label htmlFor="edit-biz-name" className="oww-form-group__label">
                Business Name
              </label>
              <span className="oww-form-group__required">*</span>
            </div>
            <input
              id="edit-biz-name"
              type="text"
              className="oww-input"
              placeholder="Rise Loop"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* 2. Business Category (Required) */}
          <div className="oww-form-group" ref={categoryDropdownRef}>
            <div className="oww-form-group__label-row">
              <label htmlFor="edit-biz-category" className="oww-form-group__label">
                Business Category
              </label>
              <span className="oww-form-group__required">*</span>
            </div>
            <div
              className="oww-input-badge biz-category-picker"
              onClick={() => categoryInputRef.current?.focus()}
            >
              {categories.map((cat) => (
                <span key={cat} className="oww-input-chip">
                  <span>{cat}</span>
                  <button
                    type="button"
                    className="oww-input-chip__remove"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveCategory(cat);
                    }}
                    aria-label={`Remove ${cat}`}
                  >
                    <Icon name="close" size={12} />
                  </button>
                </span>
              ))}

              <input
                ref={categoryInputRef}
                id="edit-biz-category"
                type="text"
                className="oww-input-badge__field"
                placeholder={
                  categories.length === 0
                    ? 'Type a category and press Enter'
                    : 'Add more...'
                }
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
                onKeyDown={handleCategoryKeyDown}
                onFocus={() => setIsCategoryDropdownOpen(true)}
              />

              <button
                type="button"
                className="biz-category-dropdown-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
                }}
                aria-label="Toggle category list"
              >
                <Icon
                  name="caret-down"
                  size={16}
                  className={isCategoryDropdownOpen ? 'is-rotated' : ''}
                />
              </button>
            </div>

            {/* Category Suggested Options Dropdown */}
            {isCategoryDropdownOpen && (
              <div className="biz-category-dropdown">
                <div className="biz-category-dropdown__title">Suggested Categories:</div>
                <div className="biz-category-dropdown__list">
                  {POPULAR_CATEGORIES.map((cat) => {
                    const isSelected = categories.includes(cat);
                    return (
                      <button
                        key={cat}
                        type="button"
                        className={`biz-category-dropdown__item ${
                          isSelected ? 'is-selected' : ''
                        }`}
                        onClick={() => {
                          if (isSelected) {
                            handleRemoveCategory(cat);
                          } else {
                            handleAddCategory(cat);
                          }
                        }}
                      >
                        <span>{cat}</span>
                        {isSelected && <Icon name="check" size={16} />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 3. About Your Business (Required) */}
          <div className="oww-form-group">
            <div className="oww-form-group__label-row">
              <label htmlFor="edit-biz-about" className="oww-form-group__label">
                About Your Business
              </label>
              <span className="oww-form-group__required">*</span>
            </div>
            <textarea
              id="edit-biz-about"
              className="oww-textarea"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              required
            />
          </div>

          {/* 4. Email (Optional) */}
          <div className="oww-form-group">
            <div className="oww-form-group__label-row">
              <label htmlFor="edit-biz-email" className="oww-form-group__label">
                Email
              </label>
            </div>
            <input
              id="edit-biz-email"
              type="email"
              className="oww-input"
              placeholder="e.g. info@business.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* 5. Phone Number with Dropdown Country Code (Figma Node #22540:6507) */}
          <div className="oww-form-group biz-dropdown-wrapper" ref={countryDropdownRef}>
            <div className="oww-form-group__label-row">
              <label htmlFor="edit-biz-phone" className="oww-form-group__label">
                Phone Number
              </label>
            </div>
            <div className="oww-input-phone">
              <div
                className="oww-input-phone__select"
                title={`${selectedCountry.name} (${countryCode})`}
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
              >
                <span className="oww-dropdown__item-flag">
                  <Icon name={selectedCountry.flag} size={20} />
                </span>
                <span className="oww-input-phone__select__code">{countryCode}</span>
                <span className="oww-input-phone__select__caret">
                  <Icon
                    name="caret-down"
                    size={16}
                    className={isCountryDropdownOpen ? 'is-rotated' : ''}
                  />
                </span>
              </div>
              <div className="oww-input-phone__number">
                <input
                  id="edit-biz-phone"
                  type="tel"
                  className="oww-input"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            {/* Country Code Dropdown Menu */}
            {isCountryDropdownOpen && (
              <div className="oww-dropdown__menu oww-dropdown__menu--country-list">
                <div className="oww-dropdown__search">
                  <Icon name="search" size={18} />
                  <input
                    type="text"
                    placeholder="Search for countries"
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
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
                        onClick={() => {
                          setCountryCode(c.code);
                          setSelectedCountry(c);
                          setIsCountryDropdownOpen(false);
                          setCountrySearch('');
                        }}
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

          {/* 6. Website (Optional) */}
          <div className="oww-form-group">
            <div className="oww-form-group__label-row">
              <label htmlFor="edit-biz-website" className="oww-form-group__label">
                Website
              </label>
            </div>
            <input
              id="edit-biz-website"
              type="url"
              className="oww-input"
              placeholder="Enter your website URL"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          {/* 7. Location with Dropdown (Figma Node #22540:11819) */}
          <div className="oww-form-group biz-dropdown-wrapper" ref={locationDropdownRef}>
            <div className="oww-form-group__label-row">
              <label htmlFor="edit-biz-location" className="oww-form-group__label">
                Location
              </label>
            </div>
            <input
              id="edit-biz-location"
              type="text"
              className="oww-input"
              placeholder="Type a location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setIsLocationDropdownOpen(true);
              }}
              onFocus={() => setIsLocationDropdownOpen(true)}
              autoComplete="off"
            />

            {/* Location Dropdown Menu */}
            {isLocationDropdownOpen && (
              <div className="oww-dropdown__menu oww-dropdown__menu--location-list">
                <div className="oww-dropdown__menu--scrollable">
                  {(filteredLocations.length > 0 ? filteredLocations : POPULAR_LOCATIONS).map(
                    (loc) => {
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
                            setLocation(loc);
                            setIsLocationDropdownOpen(false);
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
                    }
                  )}
                  {filteredLocations.length === 0 && (
                    <div className="oww-dropdown__empty">No suggestions found</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </form>

        <hr className="oww-card__divider" />

        {/* Modal Footer with Save Changes button */}
        <div className="biz-modal-footer">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            disabled={!isValid}
            onClick={handleSave}
          >
            {isSavedToast ? 'Changes Saved!' : 'Save Changes'}
          </Button>
        </div>
      </div>
    </div>
  );
};
