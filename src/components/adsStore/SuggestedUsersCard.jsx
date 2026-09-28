import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';

/**
 * SuggestedUsersCard component
 * Figma Node #22904:36725 ("Suggested for you")
 */
export const SuggestedUsersCard = ({
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
