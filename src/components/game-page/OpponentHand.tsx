// OpponentHand.tsx
import React from 'react';
import Card from './Card';

interface OpponentHandProps {
  opponentHandCount: number;
  name: String;
}

const OpponentHand: React.FC<OpponentHandProps> = ({ opponentHandCount, name }) => {
  return (
    <>
    <div>{name}</div>
    <div className="hand opponent-hand">
      {Array.from({ length: opponentHandCount }).map((_, index) => (
        <Card
          key={`opponent-card-${index}`}
          cardId={-1}
          location="opponent"
          isUserTurn={false}
          isSelectable={false} // Opponent's cards are never selectable
        />
      ))}
    </div>
    </>
  );
};

export default OpponentHand;
