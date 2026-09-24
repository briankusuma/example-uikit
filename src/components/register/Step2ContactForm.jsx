import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';

const COUNTRY_CODES = [
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+1', country: 'United States', flag: '🇺🇸' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
];

export const Step2ContactForm = ({
  email,
  setEmail,
  phone,
  setPhone,
  countryCode,
  setCountryCode,
  website,
  setWebsite,
  location,
  setLocation,
  onSubmit,
}) => {
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  return (
    <div className="biz-register-card">
      <div className="biz-register-card__title-row">
        <span
          className="oww-icon--phone-fill"
          style={{ width: 24, height: 24, color: '#000000' }}
        />
        <span>Contact Details</span>
      </div>

      <form onSubmit={onSubmit} className="biz-register-card__fields">
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
                {COUNTRY_CODES.find((c) => c.code === countryCode)?.flag || '🇮🇩'}
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
                {COUNTRY_CODES.map((c) => (
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
          <Button
            variant="primary"
            type="submit"
            size="lg"
            fullWidth
            rightIcon={<Icon name="arrow-right" size={20} color="#fff" />}
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step2ContactForm;
