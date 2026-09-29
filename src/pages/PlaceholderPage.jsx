import React from 'react';
import { Skeleton, SkeletonText, SkeletonCircle } from '../components/ui';
import { useAppStore } from '../store/useAppStore';

export const PlaceholderPage = ({ title }) => {
  const isLoading = useAppStore((state) => state.isLoading);

  if (isLoading) {
    return (
      <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SkeletonText width="160px" height="28px" />
          <Skeleton width="110px" height="36px" borderRadius="100px" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ padding: '20px', borderRadius: '12px', border: '1px solid #f0f0f0', background: '#fff' }}>
              <SkeletonCircle size="36px" />
              <SkeletonText width="60%" height="16px" style={{ marginTop: '12px' }} />
              <SkeletonText width="40%" height="24px" style={{ marginTop: '8px' }} />
            </div>
          ))}
        </div>

        <div style={{ padding: '24px', borderRadius: '12px', border: '1px solid #f0f0f0', background: '#fff' }}>
          <SkeletonText width="30%" height="20px" style={{ marginBottom: '16px' }} />
          <SkeletonText count={4} width="100%" height="14px" style={{ marginTop: '10px' }} />
        </div>
      </div>
    );
  }

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
