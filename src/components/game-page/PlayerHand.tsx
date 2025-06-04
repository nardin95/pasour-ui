import React from 'react';
import Card from './Card';

interface PlayerHandProps {
  userHand: number[];
  isUserTurn: boolean;
  name: String;
//   onCardSelect: (cardId: string) => void;
}

const PlayerHand: React.FC<PlayerHandProps> = ({ userHand, isUserTurn, name }) => {
  return (
    <>
    <div className="hand player-hand">
      {userHand.map(card => (
        <Card
          key={card}
          cardId={card}
          location="user"
          isUserTurn={isUserTurn}
          isSelectable={isUserTurn} // User's cards are only selectable if it's their turn
        />
      ))}
    </div>
    <div> {name}</div>

    </>
  );
};

export default PlayerHand;
