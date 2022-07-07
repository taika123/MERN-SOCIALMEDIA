import React from 'react';
import LogoSearch from '~/components/logoSearch/LogoSearch';
import ProfileCard from '~/components/ProfileCard/ProfileCard';
import FollowersCard from '~/components/FollowersCard/FollowersCard';
import './ProfileSide.scss';

function ProfileSide() {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
}

export default ProfileSide;
