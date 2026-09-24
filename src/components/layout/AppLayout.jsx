import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { useAppStore } from '../../store/useAppStore';

export const AppLayout = () => {
  const successToast = useAppStore((state) => state.successToast);
  const clearSuccessToast = useAppStore((state) => state.clearSuccessToast);

  return (
    <div className="app-shell">
      <div className="app-canvas">
        <div className="app-container">
          <Sidebar />
          <div className="biz-main-area">
            <TopBar />
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>

      {/* Global Floating Success Alert (Bottom Right) */}
      {successToast && (
        <div className="biz-floating-alert">
          <div className="oww-alert oww-alert--success">
            <div className="oww-alert__content">
              <span className="oww-alert__icon" />
              <p className="oww-alert__text">{successToast}</p>
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
