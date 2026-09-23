import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/common/Icon';

export const RegisterBusinessPage = () => {
  const navigate = useNavigate();

  // Multi-step navigation state: 1 (Step 1 Form), 2 (Contact Details), 3 (Brand Images)
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // Step 1 Form States (Free to edit or leave empty as per user prompt)
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [description, setDescription] = useState('');

  // Step 2 Form States
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+62');
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');

  // Step 3 Form States
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const categories = [
    'Clothing & Fashion',
    'Electronics & Gadgets',
    'Food & Beverage',
    'Health & Beauty',
    'Home & Living',
    'Creative & Design',
    'Sports & Outdoors',
    'Other',
  ];

  const countryCodes = [
    { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
  ];

  // Step 1 Submit -> Shows Success Modal
  const handleStep1Submit = (e) => {
    e?.preventDefault();
    setShowSuccessModal(true);
  };

  // Modal "Complete Profile" -> Advance to Step 2
  const handleProceedToStep2 = () => {
    setShowSuccessModal(false);
    setCurrentStep(2);
  };

  // Exit / Close -> Navigate back to Business Page
  const handleExitFlow = () => {
    setShowSuccessModal(false);
    navigate('/business-page');
  };

  // Step 2 Submit -> Advance to Step 3
  const handleStep2Submit = (e) => {
    e?.preventDefault();
    setCurrentStep(3);
  };

  // Step 3 Submit -> Complete and show success alert floating bottom-right
  const handleStep3Submit = (e) => {
    e?.preventDefault();
    setShowSuccessAlert(true);
  };

  return (
    <div className="biz-register-page">
      {/* 1. Register TopBar (Header with Logo & Close Button) */}
      <header className="biz-register-topbar">
        <div
          className="biz-register-topbar__logo"
          onClick={handleExitFlow}
          role="button"
          tabIndex={0}
          style={{ cursor: 'pointer' }}
          title="Back to Business Profile"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/briankusuma/oww-uikit@main/dist/assets/sidebar/logo.svg"
            alt="OWW Logo"
            width="128"
            height="24"
          />
        </div>

        <button
          type="button"
          className="biz-register-topbar__close-btn"
          onClick={handleExitFlow}
          aria-label="Close registration flow"
          title="Close"
        >
          <span className="oww-icon--close" style={{ width: 20, height: 20 }} />
        </button>
      </header>

      {/* 2. Content Canvas */}
      <main className="biz-register-content">
        {/* ================= STEP 1: Register Your Business ================= */}
        {currentStep === 1 && (
          <>
            {/* Header Text */}
            <div className="biz-register-header">
              <h1 className="biz-register-header__title">Register Your Business</h1>
              <p className="biz-register-header__subtitle">
                This page helps you create a dedicated Business Page to represent your brand,
                manage and promote your products, and connect with customers.
              </p>
            </div>

            {/* Form Card */}
            <div className="biz-register-card">
              <div className="biz-register-card__title-row">
                <span
                  className="oww-icon--storefront-fill"
                  style={{ width: 24, height: 24, color: '#000000' }}
                />
                <span>Business Profile</span>
              </div>

              <form onSubmit={handleStep1Submit} className="biz-register-card__fields">
                {/* Business Name Field */}
                <div className="biz-register-field">
                  <label className="biz-register-label" htmlFor="reg-biz-name">
                    Business Name <span className="biz-register-label__required">*</span>
                  </label>
                  <input
                    id="reg-biz-name"
                    type="text"
                    className="biz-register-input"
                    placeholder="Rise Loop"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </div>

                {/* Business Category Dropdown */}
                <div className="biz-register-field">
                  <label className="biz-register-label" htmlFor="reg-biz-category">
                    Business Category <span className="biz-register-label__required">*</span>
                  </label>
                  <div
                    id="reg-biz-category"
                    className={`biz-register-select-box ${
                      isCategoryOpen ? 'biz-register-select-box--open' : ''
                    }`}
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    role="button"
                    tabIndex={0}
                  >
                    <span
                      className={
                        category ? '' : 'biz-register-select-placeholder'
                      }
                    >
                      {category || 'Select a business category'}
                    </span>
                    <span
                      className="oww-icon--caret-down"
                      style={{
                        width: 16,
                        height: 16,
                        transform: isCategoryOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  </div>

                  {isCategoryOpen && (
                    <div className="biz-register-dropdown-list">
                      {categories.map((cat) => (
                        <div
                          key={cat}
                          className={`biz-register-dropdown-item ${
                            category === cat
                              ? 'biz-register-dropdown-item--selected'
                              : ''
                          }`}
                          onClick={() => {
                            setCategory(cat);
                            setIsCategoryOpen(false);
                          }}
                        >
                          <span>{cat}</span>
                          {category === cat && (
                            <span
                              className="oww-icon--check"
                              style={{ width: 16, height: 16 }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Business Description Field */}
                <div className="biz-register-field">
                  <label className="biz-register-label" htmlFor="reg-biz-desc">
                    Business Description
                  </label>
                  <textarea
                    id="reg-biz-desc"
                    className="biz-register-textarea"
                    placeholder="Rise Loop is a contemporary streetwear brand born in New York City, dedicated to redefining modern urban fashion."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                {/* Submit Action */}
                <div className="biz-register-card__footer">
                  <button
                    type="submit"
                    className="oww-btn oww-btn--primary oww-btn--lg oww-btn--full"
                  >
                    Save and Continue
                  </button>
                  <p className="biz-register-card__note">
                    By clicking Save and Continue, you agree to our{' '}
                    <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>.
                  </p>
                </div>
              </form>
            </div>
          </>
        )}

        {/* ================= STEP 2: Contact Details ================= */}
        {currentStep === 2 && (
          <>
            {/* Header Text */}
            <div className="biz-register-header">
              <h1 className="biz-register-header__title">Complete Your Business Profile</h1>
              <p className="biz-register-header__subtitle">
                Complete your business profile to help customers discover, trust, and connect
                with your business. Or do it later.
              </p>
            </div>

            {/* Stepper Navigation (Below Header) */}
            <div className="biz-stepper">
              <button
                type="button"
                className="biz-stepper__item biz-stepper__item--active"
                onClick={() => setCurrentStep(2)}
              >
                <span className="biz-stepper__badge biz-stepper__badge--active">1</span>
                <span>Contact Details</span>
              </button>
              <div className="biz-stepper__divider" />
              <button
                type="button"
                className="biz-stepper__item"
                onClick={() => setCurrentStep(3)}
              >
                <span className="biz-stepper__badge">2</span>
                <span>Brand Images</span>
              </button>
            </div>

            {/* Contact Details Card */}
            <div className="biz-register-card">
              <div className="biz-register-card__title-row">
                <span
                  className="oww-icon--phone-fill"
                  style={{ width: 24, height: 24, color: '#000000' }}
                />
                <span>Contact Details</span>
              </div>

              <form onSubmit={handleStep2Submit} className="biz-register-card__fields">
                {/* Business Email Field */}
                <div className="biz-register-field">
                  <label className="biz-register-label" htmlFor="reg-biz-email">
                    Business Email <span className="biz-register-label__required">*</span>
                  </label>
                  <input
                    id="reg-biz-email"
                    type="email"
                    className="biz-register-input"
                    placeholder="contact@riseloop.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Phone Number Field */}
                <div className="biz-register-field">
                  <label className="biz-register-label" htmlFor="reg-biz-phone">
                    Phone Number <span className="biz-register-label__required">*</span>
                  </label>
                  <div className="biz-register-phone-group">
                    <div
                      className="biz-register-country-code"
                      onClick={() => setIsCountryOpen(!isCountryOpen)}
                      role="button"
                      tabIndex={0}
                    >
                      <span>
                        {countryCodes.find((c) => c.code === countryCode)?.flag || '🇮🇩'}
                      </span>
                      <span>{countryCode}</span>
                      <span
                        className="oww-icon--caret-down"
                        style={{
                          width: 14,
                          height: 14,
                          transform: isCountryOpen ? 'rotate(180deg)' : 'none',
                        }}
                      />
                    </div>

                    {isCountryOpen && (
                      <div
                        className="biz-register-dropdown-list"
                        style={{ width: 240, top: 'calc(100% + 6px)' }}
                      >
                        {countryCodes.map((c) => (
                          <div
                            key={c.code + c.country}
                            className={`biz-register-dropdown-item ${
                              countryCode === c.code
                                ? 'biz-register-dropdown-item--selected'
                                : ''
                            }`}
                            onClick={() => {
                              setCountryCode(c.code);
                              setIsCountryOpen(false);
                            }}
                          >
                            <span>
                              {c.flag} {c.country}
                            </span>
                            <span style={{ color: '#7b7b7b' }}>{c.code}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <input
                      id="reg-biz-phone"
                      type="tel"
                      className="biz-register-phone-input"
                      placeholder="812 3456 7890"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                {/* Website Field */}
                <div className="biz-register-field">
                  <label className="biz-register-label" htmlFor="reg-biz-website">
                    Website
                  </label>
                  <input
                    id="reg-biz-website"
                    type="url"
                    className="biz-register-input"
                    placeholder="https://riseloop.com"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                {/* Location Field */}
                <div className="biz-register-field">
                  <label className="biz-register-label" htmlFor="reg-biz-location">
                    Location
                  </label>
                  <input
                    id="reg-biz-location"
                    type="text"
                    className="biz-register-input"
                    placeholder="New York, USA"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                {/* Submit Action */}
                <div className="biz-register-card__footer">
                  <button
                    type="submit"
                    className="oww-btn oww-btn--primary oww-btn--lg oww-btn--full"
                  >
                    Save and Continue
                  </button>
                </div>
              </form>
            </div>
          </>
        )}

        {/* ================= STEP 3: Brand Images ================= */}
        {currentStep === 3 && (
          <>
            {/* Header Text */}
            <div className="biz-register-header">
              <h1 className="biz-register-header__title">Complete Your Business Profile</h1>
              <p className="biz-register-header__subtitle">
                Complete your business profile to help customers discover, trust, and connect
                with your business. Or do it later.
              </p>
            </div>

            {/* Stepper Navigation (Below Header) */}
            <div className="biz-stepper">
              <button
                type="button"
                className="biz-stepper__item"
                onClick={() => setCurrentStep(2)}
              >
                <span className="biz-stepper__badge biz-stepper__badge--completed">
                  <span
                    className="oww-icon--check"
                    style={{ width: 14, height: 14, filter: 'brightness(0) invert(1)' }}
                  />
                </span>
                <span>Contact Details</span>
              </button>
              <div className="biz-stepper__divider" />
              <button
                type="button"
                className="biz-stepper__item biz-stepper__item--active"
                onClick={() => setCurrentStep(3)}
              >
                <span className="biz-stepper__badge biz-stepper__badge--active">2</span>
                <span>Brand Images</span>
              </button>
            </div>

            {/* Brand Images Card */}
            <div className="biz-register-card">
              <div className="biz-register-card__title-row">
                <span
                  className="oww-icon--image-fill"
                  style={{ width: 24, height: 24, color: '#000000' }}
                />
                <span>Brand Images</span>
              </div>

              <form onSubmit={handleStep3Submit} className="biz-register-card__fields">
                {/* Profile Photo Row */}
                <div className="biz-register-field">
                  <label className="biz-register-label">Profile Photo</label>
                  <div className="biz-register-avatar-row">
                    <div className="biz-register-avatar-row__preview">
                      {profileImage ? (
                        <img src={profileImage} alt="Profile Preview" />
                      ) : (
                        <span
                          className="oww-icon--storefront-outline"
                          style={{ width: 32, height: 32, color: '#7b7b7b' }}
                        />
                      )}
                    </div>

                    <div className="biz-register-avatar-row__actions">
                      <label
                        className="oww-btn oww-btn--outline"
                        style={{ height: 40, cursor: 'pointer', display: 'inline-flex' }}
                      >
                        <span>Upload photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: 'none' }}
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              setProfileImage(URL.createObjectURL(e.target.files[0]));
                            }
                          }}
                        />
                      </label>
                      <p className="biz-register-avatar-row__note">
                        Must be JPEG, PNG, or GIF and cannot exceed 10MB.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cover Image Dropzone */}
                <div className="biz-register-field">
                  <label className="biz-register-label">Cover Image</label>
                  <label className="biz-register-dropzone">
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          setCoverImage(URL.createObjectURL(e.target.files[0]));
                        }
                      }}
                    />
                    {coverImage ? (
                      <div
                        style={{
                          width: '100%',
                          height: 180,
                          borderRadius: 12,
                          overflow: 'hidden',
                        }}
                      >
                        <img
                          src={coverImage}
                          alt="Cover Preview"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    ) : (
                      <>
                        <div className="biz-register-dropzone__icon">
                          <span
                            className="oww-icon--image-outline"
                            style={{ width: 24, height: 24 }}
                          />
                        </div>
                        <p className="biz-register-dropzone__text-main">
                          Drag and drop your image here, or{' '}
                          <span style={{ textDecoration: 'underline', color: '#000000' }}>
                            browse
                          </span>
                        </p>
                        <p className="biz-register-dropzone__text-sub">
                          Support 16:9 ratio, up to 10MB (JPEG, PNG, WebP)
                        </p>
                        <button
                          type="button"
                          className="oww-btn oww-btn--outline"
                          style={{ height: 36, marginTop: 4 }}
                        >
                          Browse File
                        </button>
                      </>
                    )}
                  </label>
                </div>

                {/* Bottom Actions: Back and Complete Profile */}
                <div className="biz-register-btn-group" style={{ marginTop: 12 }}>
                  <button
                    type="button"
                    className="oww-btn oww-btn--outline"
                    style={{ flex: '0 0 120px' }}
                    onClick={() => setCurrentStep(2)}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="oww-btn oww-btn--primary"
                    style={{ flex: 1 }}
                  >
                    Complete Profile
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </main>

      {/* ================= MODAL: Register Successful (Figma Node #22416:6011) ================= */}
      {showSuccessModal && (
        <div className="biz-register-modal-overlay">
          <div className="biz-register-modal">
            {/* Modal Circular Icon */}
            <div className="biz-register-modal__icon">
              <span
                className="oww-icon--storefront-fill"
                style={{ width: 32, height: 32, color: '#0077ff' }}
              />
            </div>

            {/* Modal Title & Description */}
            <h2 className="biz-register-modal__title">Your Business Page Is Ready</h2>
            <p className="biz-register-modal__desc">
              Complete your business profile to help customers discover, trust, and connect
              with your business. Or do it later.
            </p>

            {/* Modal Action Buttons */}
            <div className="biz-register-modal__actions">
              <button
                type="button"
                className="oww-btn oww-btn--primary"
                onClick={handleProceedToStep2}
              >
                Complete Profile
              </button>
              <button
                type="button"
                className="oww-btn oww-btn--ghost"
                onClick={handleExitFlow}
                style={{ color: '#555555' }}
              >
                Skip For Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= FLOATING SUCCESS ALERT (Bottom Right) ================= */}
      {showSuccessAlert && (
        <div className="biz-floating-alert">
          <div className="oww-alert oww-alert--success">
            <div className="oww-alert__content">
              <span className="oww-alert__icon" />
              <p className="oww-alert__text">
                Your business profile has been completed successfully!
              </p>
              <button
                type="button"
                className="oww-btn oww-btn--primary"
                onClick={() => navigate('/business-page')}
                style={{
                  height: 32,
                  fontSize: 12,
                  padding: '0 12px',
                  borderRadius: 100,
                  marginLeft: 4,
                  whiteSpace: 'nowrap',
                }}
              >
                View Page
              </button>
              <button
                type="button"
                className="biz-alert-close-btn"
                onClick={() => setShowSuccessAlert(false)}
                aria-label="Close notification"
                title="Dismiss"
              >
                <span className="oww-icon--close" style={{ width: 14, height: 14 }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterBusinessPage;
