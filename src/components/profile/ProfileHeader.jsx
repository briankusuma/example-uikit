import React from 'react';
import { Icon } from '../common/Icon';
import { Button } from '../common/Button';
import { useAppStore } from '../../store/useAppStore';

export const ProfileHeader = () => {
  const profile = useAppStore((state) => state.profile);

  return (
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

      <Button
        variant="outline"
        size="md"
        leftIcon={<Icon name="pencil" size={20} />}
        onClick={() => alert('Edit Profile dialog')}
      >
        Edit Profile
      </Button>
    </div>
  );
};
