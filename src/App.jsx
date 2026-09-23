import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { BusinessProfilePage } from './pages/BusinessProfilePage';
import { PlaceholderPage } from './pages/PlaceholderPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* Default to Rise Loop Business Profile page */}
          <Route index element={<Navigate to="/rise-loop" replace />} />
          <Route path="rise-loop" element={<BusinessProfilePage />} />
          <Route path="explore" element={<PlaceholderPage title="Explore" />} />
          <Route path="messages" element={<PlaceholderPage title="Messages" />} />
          <Route
            path="notifications"
            element={<PlaceholderPage title="Notifications" />}
          />
          <Route path="dashboard" element={<PlaceholderPage title="Dashboard" />} />
          <Route path="ads-store" element={<PlaceholderPage title="Ads / Store" />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} />
          <Route path="*" element={<Navigate to="/rise-loop" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
