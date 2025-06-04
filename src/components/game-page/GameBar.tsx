// GameBar.tsx
import React, { useState } from 'react';

interface GameBarProps {
  player1Score: number;
  player2Score: number;
  onRestartGame: () => void;
}

const GameBar: React.FC<GameBarProps> = ({ player1Score, player2Score, onRestartGame }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowRules = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="game-bar">
      <div className="score">
        <span>Player 1: {player1Score} </span>
        <span>Player 2: {player2Score}</span>
      </div>
      <div className="actions">
        <button onClick={handleShowRules}>Show Rules</button>
        <button onClick={onRestartGame}>Restart Game</button>
      </div>

      {/* Modal for Rules */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Game Rules</h2>
            <p>Here are the game rules...</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameBar;
