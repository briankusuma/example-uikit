import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../common/Icon';
import { useAppStore } from '../../store/useAppStore';

export const TopBar = ({ title = 'Business Page' }) => {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useAppStore();

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
        <h1 className="biz-topbar__title">{title}</h1>
      </div>

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
    </header>
  );
};
