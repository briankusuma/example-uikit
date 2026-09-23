import React, { useEffect } from 'react';
import { BusinessProfileSkeleton } from '../components/profile/BusinessProfileSkeleton';
import { useAppStore } from '../store/useAppStore';

/**
 * SkeletonPage - Direct page representing Figma Node #23016:27587 "Skeleton"
 */
export const SkeletonPage = () => {
  const setIsLoading = useAppStore((state) => state.setIsLoading);

  useEffect(() => {
    // Enable skeleton on sidebar when on /skeleton route
    setIsLoading(true);
    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);

  return <BusinessProfileSkeleton />;
};

export default SkeletonPage;
