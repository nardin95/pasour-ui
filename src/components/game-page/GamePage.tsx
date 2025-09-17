import './GamePage.css';
import React, { useState, useEffect } from 'react';
import StartGameModal from './StartGameModal';
import { createWebSocketConnection, sendMessage } from '../../services/WebsocketService';
import GameBar from './GameBar';
import GameField from './GameField';

const GamePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [playerName, setPlayerName] = useState('');
  const [gameMode, setGameMode] = useState('single');
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const [gameId, setGameId] = useState<string | null>(sessionStorage.getItem('gameId'));
  const [userId, setUserId] = useState<string | null>(sessionStorage.getItem('userId'));
  const [roundId, setRoundId] = useState<string | null>(sessionStorage.getItem('roundId'));

  const [opponentName, setOpponentName] = useState<string>('');
  const [dealer, setDealer] = useState<number | null>(null);
  const [groundCards, setGroundCards] = useState<number[] | null>(null);
  const [handCards, setHandCards] = useState<number[] | null>(null);
  const [opponentHandCount, setOpponentHandCount] = useState<number>(0);

  useEffect(() => {
    if (socket) socket.close();

    const ws = createWebSocketConnection((message) => {
      switch (message.type) {
        case 'ENGINE_OPPONENT_JOIN':
          setOpponentName(message.opponentName);
          setIsUserTurn(false);
          break;
        case 'ENGINE_CREATE_ROUND':
          setRoundId(message.roundId);
          setDealer(message.dealer);
          setGroundCards(message.groundCards);
          setHandCards(message.handCards);
          setOpponentHandCount(4);
          setIsUserTurn(false);
          break;
        case 'ENGINE_START_GAME':
          setGameId(message.gameId);
          setUserId(message.userId);
          setIsUserTurn(false);
          break;
        case 'ENGINE_WAITING_FOR_YOU':
          setIsUserTurn(true);
          break;
      }
    });

    setSocket(ws);

    return () => ws && ws.close();
  }, []);

  const startGame = (name: string, mode: string) => {
    setPlayerName(name);
    setGameMode(mode);
    setIsModalOpen(false);
    if (socket) {
      sendMessage(socket, {
        type: "PLAYER_START_GAME",
        playerName: name,
        gameType: mode === 'single' ? 1 : 2
      });
    }
  };

  const restartGame = () => { /* implement restart logic */ };

  return (
<div className="game-layout">
  {isModalOpen && <StartGameModal onStartGame={startGame} />}

  {gameId && (
    <>
      <aside className="game-sidebar">
        <GameBar player1Score={0} player2Score={0} onRestartGame={restartGame} />
      </aside>

      <main className="game-field">
        <GameField
          playerHand={handCards || []}
          opponentHandCount={opponentHandCount}
          groundCards={groundCards || []}
          dealer={dealer || 1}
          isUserTurn={isUserTurn}
          playerName={playerName}
          opponentName={opponentName}
        />
      </main>
    </>
  )}
</div>

  );
};

export default GamePage;
