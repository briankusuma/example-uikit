import React, { useState, useEffect } from 'react';
import { Icon } from '../common/Icon';
import { Button } from '../common/Button';
import { useAppStore } from '../../store/useAppStore';
import { CategoryTagInput } from './CategoryTagInput';
import { PhoneCountrySelect, COUNTRIES } from './PhoneCountrySelect';
import { LocationSelect } from './LocationSelect';

/**
 * EditProfileModal component
 * Implements Figma Node #22540:6507 & #22540:11819.
 * Modularized with reusable CategoryTagInput, PhoneCountrySelect, and LocationSelect.
 */
export const EditProfileModal = ({ isOpen, onClose }) => {
  const profile = useAppStore((state) => state.profile);
  const updateProfile = useAppStore((state) => state.updateProfile);

  // Form State
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [about, setAbout] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+211');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [isSavedToast, setIsSavedToast] = useState(false);

  // Sync state when modal opens
  useEffect(() => {
    if (isOpen && profile) {
      setName(profile.name || '');
      setCategories(
        profile.category
          ? profile.category.split(',').map((c) => c.trim()).filter(Boolean)
          : ['Computers']
      );
      setAbout(profile.about || '');
      setEmail(profile.email || '');

      // Parse phone into country code and number
      const fullPhone = profile.phone || '';
      if (fullPhone.startsWith('+')) {
        const parts = fullPhone.split(' ');
        const foundCode = parts[0] || '+211';
        setCountryCode(foundCode);
        const matchCountry =
          COUNTRIES.find((c) => c.code === foundCode) || COUNTRIES[0];
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
    }
  }, [isOpen, profile]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Category handlers
  const handleAddCategory = (cat) => {
    setCategories((prev) => [...prev, cat]);
  };

  const handleRemoveCategory = (catToRemove) => {
    setCategories((prev) => prev.filter((cat) => cat !== catToRemove));
  };

  // Country handler
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setCountryCode(country.code);
  };

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
          <CategoryTagInput
            categories={categories}
            onAddCategory={handleAddCategory}
            onRemoveCategory={handleRemoveCategory}
          />

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
              placeholder="Tell customers about your business..."
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

          {/* 5. Phone Number with Dropdown Country Code */}
          <PhoneCountrySelect
            phoneNumber={phoneNumber}
            onPhoneChange={setPhoneNumber}
            countryCode={countryCode}
            selectedCountry={selectedCountry}
            onCountryChange={handleCountryChange}
          />

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

          {/* 7. Location with Dropdown */}
          <LocationSelect
            location={location}
            onLocationChange={setLocation}
          />
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
