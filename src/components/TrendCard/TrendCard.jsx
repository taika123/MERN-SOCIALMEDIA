import React from 'react';
import './TrendCard.scss';
import { TrendData } from '../Data/TrendData';

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends For you</h3>
      {TrendData.map((data, index) => {
        return (
          <div className="trend" key={index}>
            <span>#{data.name}</span>
            <span>#{data.shares}k shares</span>
          </div>
        );
      })}
      <button className="button r-button">Share</button>
    </div>
  );
};

export default TrendCard;
