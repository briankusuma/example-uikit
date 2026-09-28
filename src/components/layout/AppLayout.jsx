import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { useAppStore } from '../../store/useAppStore';

/**
 * AppLayout component.
 * Defines the main layout shell orchestrating Sidebar, TopBar, and main content area.
 */
export const AppLayout = () => {
  const location = useLocation();
  const successToast = useAppStore((state) => state.successToast);
  const clearSuccessToast = useAppStore((state) => state.clearSuccessToast);

  const isAdsStore = location.pathname.startsWith('/ads-store');

  const toastMessage =
    typeof successToast === 'object' && successToast !== null
      ? successToast.message
      : successToast;
  const isTopPosition =
    typeof successToast === 'object' &&
    successToast !== null &&
    successToast.position === 'top';

  return (
    <div className="app-shell">
      <div className="app-canvas">
        <div className="app-container">
          <Sidebar />
          <div className="biz-main-area">
            {!isAdsStore && <TopBar />}
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>

      {/* Global Floating Success Alert (Bottom Right / Top Right) */}
      {successToast && (
        <div
          className={`biz-floating-alert ${isTopPosition ? 'biz-floating-alert--top' : ''}`}
        >
          <div className="oww-alert oww-alert--success">
            <div className="oww-alert__content">
              <span className="oww-alert__icon" />
              <p className="oww-alert__text">{toastMessage}</p>
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

export default AppLayout;
