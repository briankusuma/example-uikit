import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';
import { Skeleton, SkeletonText, SkeletonCircle } from '../ui';
import { useAppStore } from '../../store/useAppStore';

/**
 * SuggestedUsersCard component
 * Figma Node #22904:36725 ("Suggested for you")
 */
export const SuggestedUsersCard = ({
  isLoading: propLoading,
  users = [
    {
      id: 1,
      name: 'Bol Athian',
      role: 'Electrical Engineer',
      avatar: '/images/suggested-user.png',
      isVerified: true,
      initialFollowing: false,
    },
    {
      id: 2,
      name: 'Bol Athian',
      role: 'Electrical Engineer',
      avatar: '/images/suggested-user.png',
      isVerified: true,
      initialFollowing: true,
    },
    {
      id: 3,
      name: 'Bol Athian',
      role: 'Electrical Engineer',
      avatar: '/images/suggested-user.png',
      isVerified: true,
      initialFollowing: false,
    },
    {
      id: 4,
      name: 'Bol Athian',
      role: 'Founder & CEO, Next Technologies',
      avatar: '/images/suggested-user.png',
      isVerified: true,
      initialFollowing: true,
    },
  ],
  onFollowToggle,
  onViewMore,
  className = '',
}) => {
  const storeLoading = useAppStore((state) => state.isLoading);
  const isLoading = propLoading !== undefined ? propLoading : storeLoading;

  const [followingMap, setFollowingMap] = useState(() => {
    const initial = {};
    users.forEach((u) => {
      initial[u.id] = !!u.initialFollowing;
    });
    return initial;
  });

  const handleToggle = (userId) => {
    const nextState = !followingMap[userId];
    setFollowingMap((prev) => ({
      ...prev,
      [userId]: nextState,
    }));
    if (onFollowToggle) {
      onFollowToggle(userId, nextState);
    }
  };

  if (isLoading) {
    return (
      <div className={`biz-store-widget ${className}`}>
        <header className="biz-store-widget__header">
          <SkeletonText width="160px" height="18px" />
        </header>
        <hr className="biz-store-widget__divider" />

        <div className="biz-store-widget__list">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="biz-store-item" style={{ alignItems: 'center' }}>
              <SkeletonCircle size="40px" />
              <div className="biz-store-item__info" style={{ gap: '6px' }}>
                <SkeletonText width="100px" height="14px" />
                <SkeletonText width="140px" height="12px" />
              </div>
              <div className="biz-store-item__action">
                <Skeleton width="65px" height="28px" borderRadius="100px" />
              </div>
            </div>
          ))}
        </div>

        <div className="biz-store-widget__footer">
          <Skeleton width="100%" height="32px" borderRadius="8px" />
        </div>
      </div>
    );
  }

  return (
    <div className={`biz-store-widget ${className}`}>
      <header className="biz-store-widget__header">
        <h2 className="biz-store-widget__title">Suggested for you</h2>
      </header>
      <hr className="biz-store-widget__divider" />

      <div className="biz-store-widget__list">
        {users.map((user) => {
          const isFollowing = !!followingMap[user.id];
          return (
            <div key={user.id} className="biz-store-item">
              {/* User Avatar */}
              <img
                src={user.avatar}
                alt={user.name}
                className="biz-store-item__image-avatar"
              />

              {/* User Details */}
              <div className="biz-store-item__info">
                <div className="biz-store-item__name-row">
                  <span className="biz-store-item__name">{user.name}</span>
                  {user.isVerified && (
                    <span className="biz-store-item__verified" title="Verified User">
                      <Icon name="verified" size={16} />
                    </span>
                  )}
                </div>
                <span className="biz-store-item__category" title={user.role}>
                  {user.role}
                </span>
              </div>

              {/* Follow Button */}
              <div className="biz-store-item__action">
                <Button
                  variant={isFollowing ? 'outline' : 'primary'}
                  size="sm"
                  className="biz-store-item__btn"
                  onClick={() => handleToggle(user.id)}
                >
                  {isFollowing ? 'Followed' : 'Follow'}
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="biz-store-widget__footer">
        <Button
          variant="ghost"
          size="md"
          fullWidth
          className="biz-store-widget__more-btn"
          onClick={onViewMore}
        >
          View more
        </Button>
      </div>
    </div>
  );
};

export default SuggestedUsersCard;
