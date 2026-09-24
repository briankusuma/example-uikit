import React from 'react';

export const RegisterStepper = ({ currentStep = 2, onStepClick }) => {
  const isStep1Active = currentStep === 2;
  const isStep1Completed = currentStep > 2;
  const isStep2Active = currentStep === 3;

  return (
    <div className="biz-stepper">
      <button
        type="button"
        className={`biz-stepper__item ${isStep1Active ? 'biz-stepper__item--active' : ''}`}
        onClick={() => onStepClick && onStepClick(2)}
      >
        <span
          className={`biz-stepper__badge ${
            isStep1Completed
              ? 'biz-stepper__badge--completed'
              : isStep1Active
              ? 'biz-stepper__badge--active'
              : ''
          }`}
        >
          {isStep1Completed ? (
            <span
              className="oww-icon--check"
              style={{ width: 14, height: 14, filter: 'brightness(0) invert(1)' }}
            />
          ) : (
            '1'
          )}
        </span>
        <span>Contact Details</span>
      </button>

      <div className="biz-stepper__divider" />

      <button
        type="button"
        className={`biz-stepper__item ${isStep2Active ? 'biz-stepper__item--active' : ''}`}
        onClick={() => onStepClick && onStepClick(3)}
      >
        <span
          className={`biz-stepper__badge ${
            isStep2Active ? 'biz-stepper__badge--active' : ''
          }`}
        >
          2
        </span>
        <span>Brand Images</span>
      </button>
    </div>
  );
};

export default RegisterStepper;
