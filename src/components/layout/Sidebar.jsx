import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store/useAppStore';

export const Sidebar = () => {
  const navigate = useNavigate();
  const profile = useAppStore((state) => state.profile);
  const isLoading = useAppStore((state) => state.isLoading);
  
  const unreadNotifications = useAppStore(
    (state) => state.unreadNotifications
  );

  const navItems = [
    { name: 'Home', path: '/home', icon: 'home' },
    { name: 'Explore', path: '/explore', icon: 'search' },
    { name: 'Message', path: '/messages', icon: 'message' },
    {
      name: 'Notification',
      path: '/notifications',
      icon: 'notification',
      badge: unreadNotifications > 0 ? unreadNotifications : undefined,
    },
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    {
      name: profile.name,
      path: '/business-page',
      icon: 'storefront',
    },
    { name: 'Ads/Store', path: '/ads-store', icon: 'cart' },
    { name: 'Settings', path: '/settings', icon: 'setting' },
  ];

  if (isLoading) {
    return (
      <aside className="oww-sidebar oww-sidebar--skeleton" aria-busy="true">
        {/* Brand / Logo */}
        <div className="oww-sidebar__header">
          <div className="oww-sidebar__logo">
            <img
              src="https://cdn.jsdelivr.net/gh/briankusuma/oww-uikit@main/dist/assets/sidebar/logo.svg"
              alt="OWW Logotype"
              width="128"
              height="24"
            />
          </div>
        </div>

        {/* 8 Skeleton Nav Items matching Figma #23016:27778 - #23016:27799 */}
        <div className="oww-sidebar__nav">
          {[...Array(8)].map((_, idx) => (
            <div key={idx} className="oww-nav-item oww-nav-item--skeleton">
              <span className="oww-nav-item__icon">
                <span className="biz-skeleton-nav-icon oww-skeleton oww-skeleton--darker" />
              </span>
              <div className="oww-nav-item__content">
                <span className="biz-skeleton-nav-text oww-skeleton" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Profile Skeleton matching Figma #23016:27802 */}
        <div className="oww-sidebar__footer" style={{ marginTop: 'unset' }}>
          <div className="oww-sidebar__profile oww-sidebar__profile--skeleton">
            <div className="biz-skeleton-profile-avatar oww-skeleton oww-skeleton--darker" />
            <div className="oww-sidebar__profile-info">
              <div className="biz-skeleton-profile-name oww-skeleton oww-skeleton--darker" />
            </div>
            <div className="biz-skeleton-profile-more oww-skeleton oww-skeleton--darker" />
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="oww-sidebar">
      {/* Brand / Logo */}
      <div className="oww-sidebar__header">
        <NavLink to="/" className="oww-sidebar__logo" aria-label="OWW Logotype">
          <img
            src="https://cdn.jsdelivr.net/gh/briankusuma/oww-uikit@main/dist/assets/sidebar/logo.svg"
            alt="OWW Logotype"
            width="128"
            height="24"
          />
        </NavLink>
      </div>

      {/* Nav Menu */}
      <nav className="oww-sidebar__nav" aria-label="Main Navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `oww-nav-item ${isActive ? 'is-active oww-nav-item--active' : ''}`
            }
          >
            {({ isActive }) => (
              <>
                <span className="oww-nav-item__icon">
                  <span
                    className={`oww-icon--${item.icon}-${isActive ? 'fill' : 'outline'}`}
                    style={{ width: 28, height: 28 }}
                  />
                </span>
                <div className="oww-nav-item__content">
                  <span className="oww-nav-item__text">{item.name}</span>
                  {item.badge && (
                    <span className="oww-nav-item__badge">{item.badge}</span>
                  )}
                </div>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom User Profile */}
      <div className="oww-sidebar__footer" style={{ marginTop: 'unset' }}>
        <div
          className="oww-sidebar__profile oww-sidebar__profile--clickable"
          onClick={() => navigate('/register')}
          role="button"
          tabIndex={0}
          title="Register Your Business"
          style={{ cursor: 'pointer' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              navigate('/register');
            }
          }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/briankusuma/oww-uikit@main/dist/assets/sidebar/avatar-bol-athian.png"
            alt="Bol Athian Avatar"
            className="oww-sidebar__avatar"
            onError={(e) => {
              e.target.src = '/images/user-avatar.png';
            }}
          />
          <div className="oww-sidebar__profile-info">
            <div className="oww-sidebar__profile-name-row">
              <span className="oww-sidebar__profile-name">Bol Athian</span>
              <span className="oww-sidebar__badge-verified" title="Verified Account">
                <span
                  className="oww-icon--badge-verified-personal"
                  style={{ width: 16, height: 16 }}
                />
              </span>
            </div>
          </div>
          <button
            type="button"
            className="oww-sidebar__profile-more"
            title="More options"
            aria-label="Account options"
            onClick={(e) => {
              e.stopPropagation();
              navigate('/register');
            }}
          >
            <span
              className="oww-icon--dots-three-fill"
              style={{ width: 20, height: 20 }}
            />
          </button>
        </div>
      </div>
    </aside>
  );
};
