import React from 'react';
import './HeadsCards.css';

interface HeadsCardsProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HeadsCards: React.FC<HeadsCardsProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="bottom">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HeadsCards; 