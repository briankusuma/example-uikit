import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '../common/Icon';
import { useAppStore } from '../../store/useAppStore';

const ROUTE_TITLES = {
  '/': 'Homepage',
  '/home': 'Homepage',
  '/business-page': 'Business Page',
  '/rise-loop': 'Business Page',
  '/explore': 'Explore',
  '/messages': 'Messages',
  '/notifications': 'Notifications',
  '/dashboard': 'Dashboard',
  '/settings': 'Settings',
  '/ads-store': 'Ads/Store',
  '/skeleton': 'Skeleton Page',
};

const getTitleFromPathname = (pathname) => {
  if (ROUTE_TITLES[pathname]) return ROUTE_TITLES[pathname];
  const matchedKey = Object.keys(ROUTE_TITLES).find(
    (key) => key !== '/' && pathname.startsWith(key)
  );
  return matchedKey ? ROUTE_TITLES[matchedKey] : 'Homepage';
};

export const TopBar = ({ title, hideSkeletonControls }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchQuery, setSearchQuery, isLoading, simulateLoading, toggleLoading } =
    useAppStore();

  const isHome = location.pathname === '/' || location.pathname === '/home';
  const shouldHideSkeleton = hideSkeletonControls ?? isHome;
  const currentTitle = title || getTitleFromPathname(location.pathname);

  return (
    <header className="biz-topbar">
      <div className="biz-topbar__left">
        <button
          className="biz-topbar__back-btn"
          onClick={() => navigate(-1)}
          title="Go back"
          aria-label="Go back"
        >
          <Icon name="arrow-left" size={24} />
        </button>
        <h1 className="biz-topbar__title">{currentTitle}</h1>
      </div>

      <div className="biz-topbar__right" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div className="biz-topbar__search-wrapper">
          <span className="biz-topbar__search-icon">
            <Icon name="search" size={20} />
          </span>
          <input
            type="text"
            className="oww-input"
            placeholder="Search anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Skeleton Action Controls */}
        {!shouldHideSkeleton && (
          <div className="biz-topbar__skeleton-controls" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              type="button"
              className={`oww-btn oww-btn--sm ${isLoading ? 'oww-btn--primary' : 'oww-btn--outline'}`}
              onClick={() => simulateLoading(2000)}
              title="Simulate 2s Skeleton Loading"
              style={{
                height: 38,
                padding: '6px 14px',
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 500,
                whiteSpace: 'nowrap',
                gap: 6,
              }}
            >
              <span>{isLoading ? 'Simulate...' : 'Simulate   '}</span>
            </button>

            <button
              type="button"
              className={`oww-btn oww-btn--sm ${isLoading ? 'oww-btn--cover' : 'oww-btn--outline'}`}
              onClick={toggleLoading}
              title={isLoading ? 'Turn Skeleton OFF' : 'Keep Skeleton ON'}
              style={{
                height: 38,
                padding: '6px 12px',
                borderRadius: 100,
                fontSize: 12,
                whiteSpace: 'nowrap',
              }}
            >
              {isLoading ? 'Hide Skeleton' : 'Toggle Skeleton'}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default TopBar;
