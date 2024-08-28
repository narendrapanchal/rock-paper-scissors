import styles from "../scss/Home.module.scss";
import { Link } from "react-router-dom";
import { getAuthTokenFromCookie, getRoleFromCookie } from "../helpers/getToken";
import React, { useState } from 'react';
import Scoreboard from "../components/Scoreboard";
import Result from "../components/Result";

const Home = () => {
  
  const choices = ['rock', 'paper', 'scissors'];
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);
  let token=getAuthTokenFromCookie();
  if(!(token&&token.length)){
    return <><h2>Kindly go through the header.</h2><Link to={"/login"}>Login</Link></>
  }
  const handleChoice = (choice) => {
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerSelection);
    determineOutcome(choice, computerSelection);
  };

  const determineOutcome = (user, computer) => {
    if (user === computer) {
      setResult('It\'s a draw!');
      setDraws(draws + 1);
    } else if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'scissors' && computer === 'paper') ||
      (user === 'paper' && computer === 'rock')
    ) {
      setResult(`${capitalize(user)} beats ${capitalize(computer)}. You win!`);
      setWins(wins + 1);
    } else {
      setResult(`${capitalize(computer)} beats ${capitalize(user)}. You lose!`);
      setLosses(losses + 1);
    }
  };

  const restartGame = () => {
    setWins(0);
    setLosses(0);
    setDraws(0);
    setUserChoice('');
    setComputerChoice('');
    setResult('');
  };

  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <div className={styles.home}>
    
    <div className="game-container">
      <h1>Rock, Paper, Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleChoice(choice)}>
            {capitalize(choice)}
          </button>
        ))}
      </div>
      <Result userChoice={userChoice} computerChoice={computerChoice} result={result} />
      <Scoreboard wins={wins} losses={losses} draws={draws} />
      <button onClick={restartGame}>Restart Game</button>
    </div>
    
  </div>
  );
};

export default Home;

