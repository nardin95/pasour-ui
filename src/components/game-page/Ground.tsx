// Ground.tsx
import React from 'react';
import Card from './Card';

interface GroundProps {
  groundCards: number[];
  isUserTurn: boolean;
//   onCardSelect: (cardId: number) => void;
}

const Ground: React.FC<GroundProps> = ({ groundCards, isUserTurn, 
    // onCardSelect
 }) => {
  return (
    <div className="ground">
      {groundCards.map(card => (
        <Card
          key={card}
          cardId={card}
          location="ground"
          isUserTurn={isUserTurn}
          isSelectable={true} // Ground cards can be selected if needed
        //   onCardSelect={onCardSelect}
        />
      ))}
    </div>
  );
};

export default Ground;
