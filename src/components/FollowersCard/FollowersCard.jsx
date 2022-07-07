import React from 'react';

import './FollowersCard.scss';

import { Followers } from '../Data/FollowersData';

function FollowersCard() {
  // console.log(Followers);
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>
      {Followers.map((item, i) => {
        return (
          <div className="followers" key={i}>
            <div>
              <img src={item.img} alt="" className="followersImg" />
              <div className="name">
                <span>{item.name}</span>
                <span>@{item.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
}

export default FollowersCard;
