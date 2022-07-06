import React from 'react';
import ProfileSide from '~/components/profileSide/ProfileSide';
import './Home.scss';
function Home() {
  return (
    <div className="Home">
      <div className="profile">
        <ProfileSide />
      </div>
      <div className="post">Post</div>
      <div className="rightside">Rightside</div>
    </div>
  );
}

export default Home;
