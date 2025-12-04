import './Game.css';
import Menu from '../components/layout/Menu';
import { useState, useContext } from 'react';
import { GameContext } from '../context/GameContext';

function Game() {
  const {
    word,
    setWord,
    status,
    setStatus,
    attemptsLeft,
    setAttemptsLeft,
    guessedLetters,
    setGuessedLetters,
  } = useContext(GameContext);

  const [menuEnabled, setMenuEnabled] = useState(false);
  return (
    <>
      <h2>{status}</h2>
      {menuEnabled ? <Menu disableMenu={disableMenu} /> : ''}
      <p>I am Game! </p>
      <button onClick={enableMenu}>menu</button>
    </>
  );

  function enableMenu() {
    setMenuEnabled(true);
    setStatus('paused');
  }

  function disableMenu() {
    setMenuEnabled(false);
    setStatus('playing');
  }
}

export default Game;
