import React from 'react';
import Cover from '~/img/cover.jpg';
import Profile from '~/img/profileImg.jpg';
import './ProfileCard.scss';

function ProfileCard() {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Doro</span>
        <span>Hello twitter</span>
      </div>

      <div className="followStatus">
        <hr />

        <div>
          <div className="follow">
            <span>6,666</span>
            <span>Followings</span>
          </div>

          <div className="vl"></div>

          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
        </div>

        <hr />
      </div>
      <span>My Profile</span>
    </div>
  );
}

export default ProfileCard;
