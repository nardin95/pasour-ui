// Card.tsx
import React from 'react';
import { getCardFileName } from '../utils/cardMapping';
import './Card.css';


interface CardProps {
  cardId: number;
  location: 'user' | 'opponent' | 'ground';
  isUserTurn: boolean;
  isSelectable: boolean;
  onCardSelect?: (cardId: number) => void;
}

const Card: React.FC<CardProps> = ({
  cardId,
  location,
  isSelectable,
  onCardSelect
}) => {

  const getCardImage = () => {
    if (location === 'opponent') {
      return '/assets/BLUE_BACK.svg';
    }
    const cardImage = getCardFileName(cardId);
    return `/assets/${cardImage}`;
  };

  const handleClick = () => {
    if (isSelectable && onCardSelect) {
      onCardSelect(cardId);
    }
  };

  return (
    <div
      className={`card ${location} ${isSelectable && location === 'user' ? 'selectable' : ''}`}
      onClick={handleClick}
      style={{
        cursor: isSelectable ? 'pointer' : 'default',
      }}
    >
      <img src={getCardImage()}/>
    </div>
  );
};

export default Card;
