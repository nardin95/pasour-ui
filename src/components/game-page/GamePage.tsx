// src/components/GamePage.tsx
import React, { useState, useEffect } from 'react';
import StartGameModal from './StartGameModal';
import { createWebSocketConnection, sendMessage } from '../../services/WebsocketService';
import GameField from './GameField';

const GamePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [playerName, setPlayerName] = useState('');
  const [gameMode, setGameMode] = useState('single');
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  
  // React state for other game data
  const [gameId, setGameId] = useState<string | null>(sessionStorage.getItem('gameId'));
  const [userId, setUserId] = useState<string | null>(sessionStorage.getItem('userId'));
  const [roundId, setRoundId] = useState<string | null>(sessionStorage.getItem('roundId'));
  
  const [opponentName, setOpponentName] = useState<string>('');
  const [dealer, setDealer] = useState<number | null>(null);
  const [groundCards, setGroundCards] = useState<number[] | null>(null);
  const [handCards, setHandCards] = useState<number[] | null>(null);
  const [opponentHandCount, setOpponentHandCount] = useState<number>(0);  // Opponent has 4 cards


  // Close existing socket on page reload
  useEffect(() => {
    // If a WebSocket connection exists, close it before re-establishing a new one
    if (socket) {
      socket.close();
    }

    // Create a new WebSocket connection
    const ws = createWebSocketConnection((message) => {
      if (message.type === 'ENGINE_OPPONENT_JOIN') {
        setOpponentName(message.opponentName);
        setIsUserTurn(false);
      } else if (message.type === 'ENGINE_CREATE_ROUND') {
        setRoundId(message.roundId);
        setDealer(message.dealer);
        setGroundCards(message.groundCards);
        setHandCards(message.handCards);
        setOpponentHandCount(4);
        setIsUserTurn(false);
      } else if (message.type === 'ENGINE_START_GAME') {
        setGameId(message.gameId);
        setUserId(message.userId);
        setIsUserTurn(false);
      } else if (message.type === 'ENGINE_WAITING_FOR_YOU') {
        setIsUserTurn(true);
      }
    });

    setSocket(ws);

    return () => {
      // Clean up socket on component unmount or page reload
      if (ws) {
        ws.close();
      }
    };
  }, []); // Empty dependency array means this effect runs only on mount/unmount

  // Handle starting the game
  const startGame = (name: string, mode: string) => {
    setPlayerName(name);
    setGameMode(mode);
    setIsModalOpen(false);

    const message = {
      type: "PLAYER_START_GAME",
      playerName: name,
      gameType: mode === 'single' ? 1 : 2,  // 1 for Single Player, 2 for Two Player
    };

    if (socket) {
      sendMessage(socket, message);
    }
  };

  const restartGame = () => {

  }

  

  return (
    <div className="game-page">
      {isModalOpen && <StartGameModal onStartGame={startGame} />}
      <h1>Welcome, {playerName || 'Guest'}</h1>

      {gameId && (
        <GameField
          playerHand={handCards || []}
          opponentHandCount={opponentHandCount}
          groundCards={groundCards || []}
          dealer={dealer || 1}
          isUserTurn={isUserTurn}
          player1Score={0}
          player2Score={0}
          onRestartGame={restartGame}
          playerName={playerName}
          opponentName={opponentName}
        />
      )}
    </div>
  );
};

export default GamePage;
