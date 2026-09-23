import React from 'react';
import { useAppStore } from '../../store/useAppStore';

export const ProfileTabs = () => {
  const { activeTab, setActiveTab } = useAppStore();

  return (
    <div className="biz-tabs">
      <button
        className={`biz-tabs__item ${
          activeTab === 'shop' ? 'biz-tabs__item--active' : ''
        }`}
        onClick={() => setActiveTab('shop')}
      >
        Shop
      </button>
      <button
        className={`biz-tabs__item ${
          activeTab === 'ads' ? 'biz-tabs__item--active' : ''
        }`}
        onClick={() => setActiveTab('ads')}
      >
        Ads
      </button>
    </div>
  );
};
