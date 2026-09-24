import React, { useState } from 'react';
import { Button } from '../common/Button';
import { CoverModal } from './CoverModal';
import { useAppStore } from '../../store/useAppStore';

export const ProfileCover = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { coverImage, setCoverImage } = useAppStore();

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
      <div className="biz-profile__cover-btn">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsModalOpen(true)}
        >
          Add Cover
        </Button>
      </div>

      <CoverModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentCover={coverImage}
        onSaveCover={(newCover) => setCoverImage(newCover)}
      />
    </div>
  );
};

export default ProfileCover;
