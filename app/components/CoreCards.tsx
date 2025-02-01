import React from 'react';
import './CoreCards.css';

interface CoreCardsProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CoreCards: React.FC<CoreCardsProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="bottom">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CoreCards; 