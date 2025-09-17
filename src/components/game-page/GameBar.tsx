import './GameBar.css';
import React, { useState } from 'react';

interface GameBarProps {
  player1Score: number;
  player2Score: number;
  onRestartGame: () => void;
}

const GameBar: React.FC<GameBarProps> = ({ player1Score, player2Score, onRestartGame }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="game-bar">
      <div className="score">
        <span>Player 1: {player1Score} </span>
        <span>Player 2: {player2Score}</span>
      </div>
      <div className="actions">
        <button onClick={() => setIsModalOpen(true)}>Show Rules</button>
        <button onClick={onRestartGame}>Restart Game</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Game Rules</h2>
            <p>Here are the game rules...</p>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameBar;
