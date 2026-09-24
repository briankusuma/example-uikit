import React from 'react';
import { useAppStore } from '../../store/useAppStore';

const DEFAULT_TABS = [
  { id: 'shop', label: 'Shop' },
  { id: 'ads', label: 'Ads' },
];

/**
 * Reusable Profile Tabs component.
 * Supports configurable tabs via props or defaults to the global store state.
 */
export const ProfileTabs = ({
  tabs = DEFAULT_TABS,
  activeTab: propActiveTab,
  onTabChange,
}) => {
  const storeActiveTab = useAppStore((state) => state.activeTab);
  const storeSetActiveTab = useAppStore((state) => state.setActiveTab);

  const currentTab = propActiveTab !== undefined ? propActiveTab : storeActiveTab;
  const handleTabChange = onTabChange || storeSetActiveTab;

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
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
