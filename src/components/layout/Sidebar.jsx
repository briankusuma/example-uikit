import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../common/Icon';
import { useAppStore } from '../../store/useAppStore';

export const Sidebar = () => {
  const unreadNotifications = useAppStore((state) => state.unreadNotifications);

  const navItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Explore', path: '/explore', icon: 'search' },
    { name: 'Message', path: '/messages', icon: 'message' },
    {
      name: 'Notification',
      path: '/notifications',
      icon: 'notification',
      badge: unreadNotifications > 0 ? unreadNotifications : null,
    },
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'Rise Loop', path: '/rise-loop', icon: 'storefront' },
    { name: 'Ads/Store', path: '/ads-store', icon: 'cart' },
    { name: 'Settings', path: '/settings', icon: 'setting' },
  ];

  return (
    <aside className="oww-sidebar">
      {/* Brand / Logo */}
      <div className="oww-sidebar__header">
        <NavLink to="/" className="oww-sidebar__logo">
          <Icon name="logo" />
        </NavLink>
      </div>

      {/* Nav Menu */}
      <nav>
        <ul className="oww-sidebar__nav">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `oww-nav-item ${isActive ? 'oww-nav-item--active' : ''}`
                }
              >
                <div className="oww-nav-item__icon">
                  <Icon name={item.icon} size={28} />
                </div>
                <span className="oww-nav-item__text">{item.name}</span>
                {item.badge && (
                  <span className="oww-nav-item__badge">{item.badge}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom User Profile */}
      <div className="oww-sidebar__footer" style={{ marginTop: "unset" }} >
        <div className="oww-sidebar__profile">
          <img
            src="/images/user-avatar.png"
            alt="Bol Athian"
            className="oww-sidebar__avatar"
            onError={(e) => {
              e.target.src =
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80';
            }}
          />
          <div className="oww-sidebar__profile-info">
            <div className="oww-sidebar__profile-name-row">
              <span className="oww-sidebar__profile-name">Bol Athian</span>
              <span className="oww-sidebar__badge-verified">
                <Icon name="verified" size={16} />
              </span>
            </div>
          </div>
          <button
            className="oww-sidebar__profile-more"
            title="More options"
            aria-label="More options"
          >
            <Icon name="dots-three" size={20} />
          </button>
        </div>
      </div>
    </aside>
  );
};
