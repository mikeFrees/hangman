import './Game.css';
import Menu from '../components/layout/Menu';
import { useState, useContext, useEffect } from 'react';
import { GameContext } from '../context/GameContext';
import data from '../assets/data.json';

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
    usedWords,
    setUsedWords,
    category,
  } = useContext(GameContext);

  const [menuEnabled, setMenuEnabled] = useState(false);
  const [newGame, setNewGame] = useState(true);

  useEffect(() => {
    if (newGame) {
      setAttemptsLeft(10);
      setGuessedLetters([]);
      setWord(getWord());
      setNewGame(false);
    }
  }, []);

  return (
    <>
      <h2>{status}</h2>
      {menuEnabled ? <Menu disableMenu={disableMenu} /> : ''}
      <p>{word}</p>
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

  function getWord() {
    const items = data.categories[category];
    const available = items.filter(item => !usedWords.includes(item.name));
    if (available.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * available.length);
  const chosen = available[randomIndex];
  setUsedWords([...usedWords, chosen.name]);
  return chosen.name;
  }
}

export default Game;
