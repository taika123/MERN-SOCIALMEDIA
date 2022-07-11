import React from 'react';
import PostSide from '../PostSide/PostSide';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProfileLeft from '../ProfileLeft/ProfileLeft';
import './Profile.scss';

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard />
        <PostSide />
      </div>
    </div>
  );
};

export default Profile;
