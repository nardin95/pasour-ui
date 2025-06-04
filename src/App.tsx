import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/home-page/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import for React Router v6
import GamePage from './components/game-page/GamePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />   {/* Home page route */}
        <Route path="/pasour" element={<GamePage />} />   {/* Game page route */}
      </Routes>
    </Router>
  );
};
export default App;
