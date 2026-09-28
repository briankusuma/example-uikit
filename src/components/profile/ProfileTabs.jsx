import React from 'react';
import { Icon } from '../common/Icon';
import { useAppStore } from '../../store/useAppStore';

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
            {tab.icon && (
              <span className="biz-tabs__icon">
                <Icon
                  name={tab.icon}
                  size={18}
                  color={isActive ? '#000000' : '#555555'}
                />
              </span>
            )}
            <span className="biz-tabs__label">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ProfileTabs;
