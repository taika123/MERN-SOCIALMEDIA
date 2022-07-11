import React, { useState } from 'react';
import { UilPen } from '@iconscout/react-unicons';
import './InfoCard.scss';
import ProfileNodal from '~/components/ProfileModal/ProfileModal';

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" onClick={() => setModalOpened(true)} />
          <ProfileNodal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives </b>
        </span>
        <span>Multan</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>DoroCode</span>
      </div>
      <button className="button logo-logout">Log out</button>
    </div>
  );
};

export default InfoCard;
