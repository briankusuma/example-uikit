import React from 'react';

export const PlaceholderPage = ({ title }) => {
  return (
    <div style={{ padding: '40px 24px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>
        {title}
      </h2>
      <p style={{ color: '#555555' }}>
        This page is under construction. Please visit the{' '}
        <a href="/rise-loop" style={{ color: '#000', fontWeight: 600, textDecoration: 'underline' }}>
          Rise Loop Business Profile
        </a>{' '}
        page.
      </p>
    </div>
  );
};
