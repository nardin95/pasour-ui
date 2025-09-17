import './GameField.css';
import React from 'react';
import OpponentHand from './OpponentHand';
import Ground from './Ground';
import PlayerHand from './PlayerHand';

interface GameFieldProps {
  playerHand: number[];
  groundCards: number[];
  opponentHandCount: number;
  dealer: number;
  isUserTurn: boolean;
  playerName: string;
  opponentName: string;
}

const GameField: React.FC<GameFieldProps> = ({
  playerHand,
  groundCards,
  opponentHandCount,
  dealer,
  isUserTurn,
  playerName,
  opponentName
}) => (
  <div className="game-field">
    <OpponentHand opponentHandCount={opponentHandCount} name={opponentName} />
    <Ground groundCards={groundCards} isUserTurn={isUserTurn} />
    <PlayerHand userHand={playerHand} isUserTurn={isUserTurn} name={playerName} />
  </div>
);

export default GameField;
