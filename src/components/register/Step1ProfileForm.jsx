import React, { useState } from 'react';

const CATEGORIES = [
  'Clothing & Fashion',
  'Electronics & Gadgets',
  'Food & Beverage',
  'Health & Beauty',
  'Home & Living',
  'Creative & Design',
  'Sports & Outdoors',
  'Other',
];

export const Step1ProfileForm = ({
  businessName,
  setBusinessName,
  category,
  setCategory,
  description,
  setDescription,
  onSubmit,
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="biz-register-card">
      <div className="biz-register-card__title-row">
        <span
          className="oww-icon--storefront-fill"
          style={{ width: 24, height: 24, color: '#000000' }}
        />
        <span>Business Profile</span>
      </div>

      <form onSubmit={onSubmit} className="biz-register-card__fields">
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
            <span className={category ? '' : 'biz-register-select-placeholder'}>
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
              {CATEGORIES.map((cat) => (
                <div
                  key={cat}
                  className={`biz-register-dropdown-item ${
                    category === cat ? 'biz-register-dropdown-item--selected' : ''
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
            Register Business
          </button>
          <p className="biz-register-card__note">
            By clicking Save and Continue, you agree to our{' '}
            <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Step1ProfileForm;
