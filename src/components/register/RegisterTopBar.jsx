import React from 'react';

export const RegisterTopBar = ({ onClose }) => {
  return (
    <header className="biz-register-topbar">
      <div
        className="biz-register-topbar__logo"
        onClick={onClose}
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
        onClick={onClose}
        aria-label="Close registration flow"
        title="Close"
      >
        <span className="oww-icon--close" style={{ width: 20, height: 20 }} />
      </button>
    </header>
  );
};

export default RegisterTopBar;
