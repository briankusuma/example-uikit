import React, { useEffect } from 'react';
import { BusinessProfilePage } from './BusinessProfilePage';
import { useAppStore } from '../store/useAppStore';

/**
 * SkeletonPage - Direct page representing Figma Node #23016:27587 "Skeleton"
 */
export const SkeletonPage = () => {
  const setIsLoading = useAppStore((state) => state.setIsLoading);

  useEffect(() => {
    // Enable skeleton on sidebar and page when on /skeleton route
    setIsLoading(true);
    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);

  return <BusinessProfilePage />;
};

export default SkeletonPage;
