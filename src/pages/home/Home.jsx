import React from 'react';
import PostSide from '~/components/PostSide/PostSide';
import ProfileSide from '~/components/profileSide/ProfileSide';
import './Home.scss';
function Home() {
  return (
    <div className="Home">
      <div className="profile">
        <ProfileSide />
      </div>
      <div className="post">
        <PostSide />
      </div>
      <div className="rightside">Rightside</div>
    </div>
  );
}

export default Home;
