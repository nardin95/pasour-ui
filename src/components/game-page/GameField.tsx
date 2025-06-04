import './GameField.css';

import React from 'react';
import Card from './Card'; // Import the Card component
import Ground from './Ground';
import OpponentHand from './OpponentHand';
import PlayerHand from './PlayerHand';
import GameBar from './GameBar';

interface GameFieldProps {
  playerHand: number[];  // Cards in the player's hand
  groundCards: number[];  // Cards on the ground
  opponentHandCount: number; // The number of cards in the opponent's hand
  dealer: number; // 1 for player 1, 2 for player 2
  isUserTurn: boolean;
  player1Score: number;
  player2Score: number;
  playerName: String;
  opponentName: String;
  onRestartGame: () => void;
}

const GameField: React.FC<GameFieldProps> = ({ 
    playerHand,
    opponentHandCount,
    groundCards,
    dealer,
    player1Score,
    player2Score,
    isUserTurn,
    playerName,
    opponentName,
    onRestartGame
 }) => {
  return (
    <div className="game-field">
        <GameBar 
            player1Score={player1Score}
            player2Score={player2Score}
            onRestartGame={onRestartGame}
      />
        <OpponentHand opponentHandCount={opponentHandCount} name={opponentName}/>
        <Ground groundCards={groundCards} isUserTurn={isUserTurn} />
        <PlayerHand userHand={playerHand} isUserTurn={isUserTurn} name={playerName}/>
    </div>
  );
};

export default GameField;
