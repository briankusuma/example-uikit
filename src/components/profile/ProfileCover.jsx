import React, { useState } from 'react';
import { Button } from '../common/Button';
import { CoverModal } from './CoverModal';
import { useAppStore } from '../../store/useAppStore';
import { Skeleton, SkeletonImage } from '../ui';

export const ProfileCover = ({ isEditable = true, isLoading: propIsLoading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { coverImage, setCoverImage, isLoading: storeIsLoading } = useAppStore();
  const isLoading = propIsLoading !== undefined ? propIsLoading : storeIsLoading;

  if (isLoading) {
    return (
      <div className="biz-profile__cover-wrapper" aria-busy="true">
        <SkeletonImage
          width="100%"
          height="100%"
          borderRadius="0px"
          style={{ position: 'absolute', inset: 0 }}
        />
        {isEditable && (
          <div className="biz-profile__cover-btn">
            <Skeleton width="120px" height="32px" borderRadius="100px" variant="button" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="biz-profile__cover-wrapper">
      <img
        src={coverImage}
        alt="Profile Cover"
        className="biz-profile__cover-img"
        onError={(e) => {
          e.target.src =
            'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80';
        }}
      />
      {isEditable && (
        <div className="biz-profile__cover-btn">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsModalOpen(true)}
          >
            Add Cover
          </Button>
        </div>
      )}

      {isEditable && (
        <CoverModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          currentCover={coverImage}
          onSaveCover={(newCover) => setCoverImage(newCover)}
        />
      )}
    </div>
  );
};

export default ProfileCover;
