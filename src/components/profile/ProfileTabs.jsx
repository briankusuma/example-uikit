import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { SkeletonText } from '../ui';

const DEFAULT_TABS = [
  { id: 'shop', label: 'Shop', icon: 'storefront' },
  { id: 'ads', label: 'Ads', icon: 'ads' },
];

/**
 * Reusable Profile Tabs component.
 * Supports configurable tabs via props or defaults to the global store state.
 */
export const ProfileTabs = ({
  tabs = DEFAULT_TABS,
  activeTab: propActiveTab,
  onTabChange,
  isLoading: propIsLoading,
}) => {
  const storeActiveTab = useAppStore((state) => state.activeTab);
  const storeSetActiveTab = useAppStore((state) => state.setActiveTab);
  const storeIsLoading = useAppStore((state) => state.isLoading);
  const isLoading = propIsLoading !== undefined ? propIsLoading : storeIsLoading;

  const currentTab = propActiveTab !== undefined ? propActiveTab : storeActiveTab;
  const handleTabChange = onTabChange || storeSetActiveTab;

  if (isLoading) {
    return (
      <div className="biz-tabs" aria-busy="true">
        {tabs.map((tab, idx) => (
          <div
            key={tab.id}
            className={`biz-tabs__item ${idx === 0 ? 'biz-tabs__item--active' : ''}`}
            style={{ cursor: 'default' }}
          >
            <SkeletonText width="48px" height="16px" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="biz-tabs">
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            className={`biz-tabs__item ${
              isActive ? 'biz-tabs__item--active' : ''
            }`}
            onClick={() => handleTabChange(tab.id)}
          >
            <span className="biz-tabs__label">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ProfileTabs;
