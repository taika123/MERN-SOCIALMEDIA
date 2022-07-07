import React from 'react';
import Home from '~/img/home.png';
import Noti from '~/img/noti.png';
import Comment from '~/img/comment.png';
import { UilSetting } from '@iconscout/react-unicons';
import './RightSide.scss';

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcon">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
    </div>
  );
};

export default RightSide;
