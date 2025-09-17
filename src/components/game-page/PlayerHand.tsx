import React from 'react';
import Card from './Card';

interface PlayerHandProps {
  userHand: number[];
  isUserTurn: boolean;
  name: string;
}

const PlayerHand: React.FC<PlayerHandProps> = ({ userHand, isUserTurn, name }) => {
  const totalCards = userHand.length;
  const maxFanAngle = 40; // Total spread angle (adjust for more/less curve)
  const angleStep = totalCards > 1 ? maxFanAngle / (totalCards - 1) : 0;
  const startAngle = -(maxFanAngle / 2);

  return (
    <>
      <div className="hand player-hand">
        {userHand.map((card, index) => {
          const angle = startAngle + index * angleStep;
          const translateY = Math.abs(angle) * 0.3; // pushes cards up slightly
          return (
            <div
              key={card}
              className="card-wrapper"
              style={{
                transform: `rotate(${angle}deg) translateY(${translateY}px)`,
                transformOrigin: 'bottom center',
                margin: '0 -30px',
              }}
            >
              <Card
                cardId={card}
                location="user"
                isUserTurn={isUserTurn}
                isSelectable={isUserTurn}
              />
            </div>
          );
        })}
      </div>
      <div>{name}</div>
    </>
  );
};

export default PlayerHand;
