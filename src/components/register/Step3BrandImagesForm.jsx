import React, { useRef } from 'react';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';

export const Step3BrandImagesForm = ({
  profileImage,
  setProfileImage,
  coverImage,
  setCoverImage,
  onSubmit,
  onPrevious,
}) => {
  const logoInputRef = useRef(null);
  const coverInputRef = useRef(null);

  return (
    <div className="biz-register-card">
      <div className="biz-register-card__title-row">
        <span
          className="oww-icon--image-outline"
          style={{ width: 24, height: 24, color: '#000000' }}
        />
        <span>Brand Images</span>
      </div>

      <form onSubmit={onSubmit} className="biz-register-card__fields">
        {/* 1. Business Logo Section */}
        <div className="biz-register-field">
          <label className="biz-register-label" style={{ fontSize: 16, fontWeight: 600 }}>
            Business Logo
          </label>
          <div className="biz-register-avatar-row">
            <div className="biz-register-avatar-row__preview">
              {profileImage ? (
                <img src={profileImage} alt="Business Logo" />
              ) : (
                <span
                  className="oww-icon--image-outline"
                  style={{ width: 36, height: 36, color: '#7b7b7b' }}
                />
              )}
            </div>

            <div className="biz-register-avatar-row__actions">
              <div className="biz-register-avatar-row__btn-row">
                <input
                  ref={logoInputRef}
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      setProfileImage(URL.createObjectURL(e.target.files[0]));
                    }
                  }}
                />
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  leftIcon={
                    <span
                      className="oww-icon--upload-simple-outline"
                      style={{ width: 16, height: 16 }}
                    />
                  }
                  onClick={() => logoInputRef.current?.click()}
                >
                  Upload Logo
                </Button>
                {profileImage && (
                  <Button
                    variant="ghost"
                    size="sm"
                    type="button"
                    style={{ color: '#FF0909' }}
                    onClick={() => setProfileImage(null)}
                  >
                    Delete
                  </Button>
                )}
              </div>
              <p className="biz-register-avatar-row__note">
                Supported formats: JPG, PNG. Max size 2 MB.{'\n'}
                Square image recommended.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Cover Image Section */}
        <div className="biz-register-field">
          <label className="biz-register-label" style={{ fontSize: 16, fontWeight: 600 }}>
            Cover Image
          </label>
          <input
            ref={coverInputRef}
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            style={{ display: 'none' }}
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setCoverImage(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          <div
            className="biz-register-dropzone"
            onClick={() => coverInputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                coverInputRef.current?.click();
              }
            }}
          >
            {coverImage ? (
              <>
                <div className="biz-register-dropzone__preview">
                  <img src={coverImage} alt="Cover Preview" />
                </div>
                <div className="biz-register-dropzone__change-btn">
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      coverInputRef.current?.click();
                    }}
                  >
                    Change File
                  </Button>
                </div>
              </>
            ) : (
              <div className="biz-register-dropzone__content">
                <div className="biz-register-dropzone__icon">
                  <span
                    className="oww-icon--upload-fill"
                    style={{ width: 24, height: 24, color: '#000000' }}
                  />
                </div>
                <div className="biz-register-dropzone__text-wrap">
                  <p className="biz-register-dropzone__text-main">
                    Choose a file or drag and drop here.
                  </p>
                  <p className="biz-register-dropzone__text-sub">
                    Formats: JPG, PNG. Max size 2 MB. Use a landscape image.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    coverInputRef.current?.click();
                  }}
                >
                  Browse File
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* 3. Bottom Actions: Skip For Now & Previous (Figma Node #22541:12994) */}
        <div className="biz-register-btn-group" style={{ marginTop: 8 }}>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            type="submit"
          >
            {profileImage || coverImage ? 'Complete Profile' : 'Skip For Now'}
          </Button>
          <Button
            variant="ghost"
            size="lg"
            fullWidth
            type="button"
            leftIcon={<Icon name="arrow-left" size={20} />}
            onClick={onPrevious}
          >
            Previous
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step3BrandImagesForm;
