import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { BusinessProfilePage } from './pages/BusinessProfilePage';
import { RegisterBusinessPage } from './pages/RegisterBusinessPage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { SkeletonPage } from './pages/SkeletonPage';
import { AdsStorePage } from './pages/AdsStorePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { HomePage } from './pages/HomePage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Full-page Business Registration Flow (Figma Node #22400:83) */}
        <Route path="register" element={<RegisterBusinessPage />} />

        <Route path="/" element={<AppLayout />}>
          {/* Default to Home page on initial load */}
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="business-page" element={<BusinessProfilePage />} />
          <Route path="rise-loop" element={<BusinessProfilePage />} />
          <Route path="explore" element={<PlaceholderPage title="Explore" />} />
          <Route path="messages" element={<PlaceholderPage title="Messages" />} />
          <Route
            path="notifications"
            element={<PlaceholderPage title="Notifications" />}
          />
          <Route path="dashboard" element={<PlaceholderPage title="Dashboard" />} />
          <Route path="ads-store" element={<AdsStorePage />} />
          <Route path="ads-store/product/:id" element={<ProductDetailPage />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} />
          <Route path="skeleton" element={<SkeletonPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
