import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../common/Icon';
import { useAppStore } from '../../store/useAppStore';

export const TopBar = ({ title = 'Business Page' }) => {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery, isLoading, simulateLoading, toggleLoading } =
    useAppStore();

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
            {/* <span
              className={isLoading ? 'oww-icon--analytics-outline' : 'oww-icon--analytics-outline'}
              style={{ width: 16, height: 16 }}
            /> */}
            <span>{isLoading ? 'Simulate Loading...' : 'Simulate Loading'}</span>
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
      </div>
    </header>
  );
};
