import React from 'react';

const Scoreboard = ({ wins, losses, draws }) => {
  return (
    <div className="scoreboard">
      <p>Wins: {wins}</p>
      <p>Losses: {losses}</p>
      <p>Draws: {draws}</p>
    </div>
  );
};

export default Scoreboard;
