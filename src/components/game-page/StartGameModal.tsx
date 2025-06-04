// src/components/StartGameModal.tsx
import React, { useState } from 'react';
import './StartGameModal.css';  // CSS for modal styling

interface StartGameModalProps {
  onStartGame: (name: string, gameMode: string) => void; // Function to start the game
}

const StartGameModal: React.FC<StartGameModalProps> = ({ onStartGame }) => {
  const [name, setName] = useState('');
  const [gameMode, setGameMode] = useState('single');  // Default to single-player mode

  // Handle the game mode selection
  const handleGameModeChange = (mode: string) => {
    setGameMode(mode);
    if (name.trim()) {
      onStartGame(name, mode);  // Start the game immediately
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Welcome to Pasour!</h2>
        <div className="modal-body">
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <div className="game-mode-toggle">
            <button 
              className={gameMode === 'single' ? 'active' : ''} 
              onClick={() => handleGameModeChange('single')}
            >
              Single Player
            </button>
            <button 
              className={gameMode === 'multi' ? 'active' : ''} 
              onClick={() => handleGameModeChange('multi')}
              disabled={true}  // Disable the two-player option
            >
              Two Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartGameModal;
