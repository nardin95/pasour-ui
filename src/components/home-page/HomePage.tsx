// src/components/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to my page</h1>
      <Link to="/pasour">
        <button>Start Game</button>
      </Link>
    </div>
  );
};

export default HomePage;
