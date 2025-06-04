// src/services/websocketService.ts

export const createWebSocketConnection = (onMessage: (message: any) => void) => {
  const socket = new WebSocket('ws://localhost:8080/ws/game');
  
  socket.onopen = () => {
    console.log('WebSocket connection established');
  };

  socket.onmessage = (event) => {
    let data;
    
    try {
      data = JSON.parse(event.data);

      // Handle the different message types
      if (data.type === 'ENGINE_START_GAME') {
        // Save gameId, userId, roundId to SessionStorage
        sessionStorage.setItem('gameId', data.gameId);
        sessionStorage.setItem('userId', data.userId);
        sessionStorage.setItem('roundId', data.roundId);

        console.log('Game started:', data.gameId, data.userId);
      } else if (data.type === 'ENGINE_OPPONENT_JOIN') {
        // Handle opponent joining (store it in React state)
        onMessage(data);  // Pass opponentName to state
      } else if (data.type === 'ENGINE_CREATE_ROUND') {
        // Handle round creation (store round details in React state)
        onMessage(data);  // Pass roundId, dealer, etc., to state
      } else if (data.type === 'ENGINE_WAITING_FOR_YOU') {
        // Handle waiting state
        console.log('Waiting for you...');
      }

      // Pass all other messages to onMessage handler
      onMessage(data);
    } catch (error) {
      console.log('Received non-JSON message:', event.data);
      onMessage(event.data);  // Pass the plain text message
    }
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  socket.onclose = () => {
    console.log('WebSocket connection closed');
  };

  return socket;
};

export const sendMessage = (socket: WebSocket, message: object) => {
  socket.send(JSON.stringify(message));
};
