import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export const AppLayout = () => {
  return (
    <div className="app-shell">
      <div className="app-canvas">
        <div className="app-container">
          <Sidebar />
          <div className="biz-main-area">
            <TopBar />
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
