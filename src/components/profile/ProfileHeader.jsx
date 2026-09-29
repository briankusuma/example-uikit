import React, { useState } from 'react';
import { Icon } from '../common/Icon';
import { Button } from '../common/Button';
import { useAppStore } from '../../store/useAppStore';
import { EditProfileModal } from './EditProfileModal';
import { Skeleton, SkeletonText } from '../ui';

export const ProfileHeader = ({ isEditable = true, customProfile, isLoading: propIsLoading }) => {
  const storeProfile = useAppStore((state) => state.profile);
  const storeIsLoading = useAppStore((state) => state.isLoading);
  const isLoading = propIsLoading !== undefined ? propIsLoading : storeIsLoading;
  const profile = customProfile || storeProfile;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="biz-profile__header-info" aria-busy="true">
        <div className="biz-profile__details" style={{ gap: '8px' }}>
          <SkeletonText width="230px" height="24px" />
          <SkeletonText width="80px" height="16px" />
          <SkeletonText width="100px" height="16px" />
        </div>
        {isEditable && (
          <Skeleton width="117px" height="40px" borderRadius="100px" />
        )}
      </div>
    );
  }

  return (
    <>
      <div className="biz-profile__header-info">
        <div className="biz-profile__details">
          <div className="biz-profile__name-row">
            <h2 className="biz-profile__name">{profile.name}</h2>
            {profile.verified && <Icon name="verified" size={20} />}
          </div>
          <span className="biz-profile__category">{profile.category}</span>
          <div className="biz-profile__meta-row">
            <div className="biz-profile__meta-item">
              <Icon name="calendar" size={16} />
              <span>Joined on {profile.joinedDate}</span>
            </div>
            <div className="biz-profile__dot-divider" />
            <div className="biz-profile__meta-item">
              <Icon name="map-pin" size={16} />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        {isEditable && (
          <Button
            variant="outline"
            size="md"
            leftIcon={<Icon name="pencil" size={20} />}
            onClick={() => setIsEditModalOpen(true)}
          >
            Edit Profile
          </Button>
        )}
      </div>

      {isEditable && (
        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProfileHeader;
