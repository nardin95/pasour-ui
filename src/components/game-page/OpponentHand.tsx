// OpponentHand.tsx
import React from 'react';
import Card from './Card';

interface OpponentHandProps {
  opponentHandCount: number;
  name: string;
}

const OpponentHand: React.FC<OpponentHandProps> = ({ opponentHandCount, name }) => {
  return (
    <>
      <div>{name}</div>
      <div className="hand-container opponent-hand">
        
        {Array.from({ length: opponentHandCount }).map((_, index) => {
          const angle = (index - (opponentHandCount - 1) / 2) * 10; // spread cards
          return (
            <div
              key={`opponent-card-${index}`}
              className="card-wrapper"
              style={{ transform: `rotate(${angle}deg) translateY(-20px)` }}
            >
              <Card
                cardId={-1}
                location="opponent"
                isUserTurn={false}
                isSelectable={false}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OpponentHand;
