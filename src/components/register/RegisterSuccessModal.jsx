import React from 'react';
import { Button } from '../common/Button';

export const RegisterSuccessModal = ({ onCompleteProfile, onSkip }) => {
  return (
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
          <Button
            variant="primary"
            onClick={onCompleteProfile}
          >
            Complete Profile
          </Button>
          <Button
            variant="ghost"
            onClick={onSkip}
            style={{ color: '#555555' }}
          >
            Skip For Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccessModal;
