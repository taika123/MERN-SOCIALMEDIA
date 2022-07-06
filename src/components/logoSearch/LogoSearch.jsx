import React from 'react';
import './LogoSearch.scss';
import logo from '~/img/logo.png';
import { UilSearch } from '@iconscout/react-unicons';

function LogoSearch() {
  return (
    <div className="LogoSearch">
      <img src={logo} alt=""></img>

      <div className="Search">
        <input type="text" placeholder="#Search" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
}

export default LogoSearch;
