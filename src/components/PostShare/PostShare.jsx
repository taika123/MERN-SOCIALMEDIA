import React from 'react';
import ProfileImages from '../../img/profileImg.jpg';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';

import './PostShare.scss';
import { useState } from 'react';
import { useRef } from 'react';

const PostShare = () => {
  const [image, setImage] = useState(null);

  const imgRef = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImages} alt="" />
      <div className="text">
        <input type="text" placeholder="What's happening ?" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: 'var(--photo)' }}
            onClick={() => {
              imgRef.current.click();
            }}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: 'var(--video)' }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: 'var(--location)' }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: 'var(--shedule)' }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: 'none' }}>
            <input type="file" name="myImage" ref={imgRef} onChange={onImageChange} />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
