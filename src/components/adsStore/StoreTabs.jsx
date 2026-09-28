import React from 'react';
import { Icon } from '../common/Icon';

/**
 * StoreTabs component
 * Figma Node #22904:36578: Tabs switcher for Ads and Shop
 */
export const StoreTabs = ({
  activeTab = 'shop',
  onTabChange,
  className = '',
}) => {
  const tabs = [
    {
      id: 'ads',
      label: 'Ads',
      icon: 'ads',
    },
    {
      id: 'shop',
      label: 'Shop',
      icon: 'storefront',
    },
  ];

  return (
    <div className={`biz-store-tabs ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            className={`biz-store-tabs__item ${
              isActive ? 'biz-store-tabs__item--active' : ''
            }`}
            onClick={() => onTabChange && onTabChange(tab.id)}
          >
            <span className="biz-store-tabs__icon">
              <Icon
                name={tab.icon}
                size={20}
                color={isActive ? '#000000' : '#555555'}
              />
            </span>
            <span className="biz-store-tabs__label">{tab.label}</span>
            {isActive && <span className="biz-store-tabs__indicator" />}
          </button>
        );
      })}
    </div>
  );
};

export default StoreTabs;
