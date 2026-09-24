import React, { useState } from 'react';

/**
 * Reusable Cover URL Input for uploading image via URL.
 */
export const CoverUrlInput = ({ onApplyUrl, setErrorMessage }) => {
  const [urlInput, setUrlInput] = useState('');

  const applyUrl = () => {
    if (!urlInput.trim()) return;
    try {
      const parsed = new URL(urlInput.trim());
      if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
        setErrorMessage('');
        onApplyUrl(urlInput.trim());
        setUrlInput('');
      } else {
        setErrorMessage('Please enter a valid HTTP or HTTPS image URL.');
      }
    } catch {
      setErrorMessage('Please enter a valid URL.');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyUrl();
    }
  };

  return (
    <div className="biz-modal__url-form">
      <label className="biz-modal__url-label" htmlFor="coverUrlInput">
        Upload from URL
      </label>
      <div className="biz-modal__url-input-wrapper">
        <input
          id="coverUrlInput"
          type="url"
          className="oww-input"
          placeholder="Paste file URL and press ENTER to upload"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            if (urlInput.trim()) applyUrl();
          }}
        />
      </div>
    </div>
  );
};
