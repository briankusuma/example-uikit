import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { RegisterTopBar } from '../components/register/RegisterTopBar';
import { RegisterHeader } from '../components/register/RegisterHeader';
import { RegisterStepper } from '../components/register/RegisterStepper';
import { Step1ProfileForm } from '../components/register/Step1ProfileForm';
import { Step2ContactForm } from '../components/register/Step2ContactForm';
import { Step3BrandImagesForm } from '../components/register/Step3BrandImagesForm';
import { RegisterSuccessModal } from '../components/register/RegisterSuccessModal';

export const RegisterBusinessPage = () => {
  const navigate = useNavigate();
  const showSuccessToast = useAppStore((state) => state.showSuccessToast);
  const successToast = useAppStore((state) => state.successToast);
  const clearSuccessToast = useAppStore((state) => state.clearSuccessToast);

  // Multi-step navigation state: 1 (Step 1 Form), 2 (Contact Details), 3 (Brand Images)
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Step 1 Form States
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  // Step 2 Form States
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+62');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');

  // Step 3 Form States
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  // Navigation and flow handlers
  const handleExitFlow = () => {
    setShowSuccessModal(false);
    navigate('/business-page');
  };

  const handleStep1Submit = (e) => {
    e?.preventDefault();
    setShowSuccessModal(true);
  };

  const handleProceedToStep2 = () => {
    setShowSuccessModal(false);
    setCurrentStep(2);
  };

  const handleStep2Submit = (e) => {
    e?.preventDefault();
    setCurrentStep(3);
  };

  const handleStep3Submit = (e) => {
    e?.preventDefault();
    showSuccessToast('Your business profile has been completed successfully!', 2000);
    navigate('/business-page');
  };

  return (
    <div className="biz-register-page">
      {/* 1. Register TopBar (Header with Logo & Close Button) */}
      <RegisterTopBar onClose={handleExitFlow} />

      {/* 2. Main Content Canvas */}
      <main className="biz-register-content">
        {/* ================= STEP 1: Register Business ================= */}
        {currentStep === 1 && (
          <>
            <RegisterHeader
              title="Register Your Business"
              subtitle="This page helps you create a dedicated Business Page to represent your brand, manage and promote your products, and connect with customers."
            />
            <Step1ProfileForm
              businessName={businessName}
              setBusinessName={setBusinessName}
              category={category}
              setCategory={setCategory}
              description={description}
              setDescription={setDescription}
              onSubmit={handleStep1Submit}
            />
          </>
        )}

        {/* ================= STEP 2: Contact Details ================= */}
        {currentStep === 2 && (
          <>
            <RegisterHeader
              title="Complete Your Business Profile"
              subtitle="Complete your business profile to help customers discover, trust, and connect with your business. Or do it later."
            />
            <RegisterStepper
              currentStep={2}
              onStepClick={setCurrentStep}
            />
            <Step2ContactForm
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              countryCode={countryCode}
              setCountryCode={setCountryCode}
              website={website}
              setWebsite={setWebsite}
              location={location}
              setLocation={setLocation}
              onSubmit={handleStep2Submit}
            />
          </>
        )}

        {/* ================= STEP 3: Brand Images ================= */}
        {currentStep === 3 && (
          <>
            <RegisterHeader
              title="Complete Your Business Profile"
              subtitle="Complete your business profile to help customers discover, trust, and connect with your business. Or do it later."
            />
            <RegisterStepper
              currentStep={3}
              onStepClick={setCurrentStep}
            />
            <Step3BrandImagesForm
              profileImage={profileImage}
              setProfileImage={setProfileImage}
              coverImage={coverImage}
              setCoverImage={setCoverImage}
              onSubmit={handleStep3Submit}
              onPrevious={() => setCurrentStep(2)}
            />
          </>
        )}
      </main>

      {/* ================= MODAL: Register Successful ================= */}
      {showSuccessModal && (
        <RegisterSuccessModal
          onCompleteProfile={handleProceedToStep2}
          onSkip={handleExitFlow}
        />
      )}

      {/* ================= FLOATING SUCCESS ALERT ================= */}
      {successToast && (
        <div
          className={`biz-floating-alert ${
            typeof successToast === 'object' && successToast?.position === 'top'
              ? 'biz-floating-alert--top'
              : ''
          }`}
        >
          <div className="oww-alert oww-alert--success">
            <div className="oww-alert__content">
              <span className="oww-alert__icon" />
              <p className="oww-alert__text">
                {typeof successToast === 'object' && successToast !== null
                  ? successToast.message
                  : successToast}
              </p>
              <button
                type="button"
                className="biz-alert-close-btn"
                onClick={clearSuccessToast}
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
