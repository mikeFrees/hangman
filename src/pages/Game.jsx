import './Game.css';
import Menu from '../components/layout/Menu';
import Lifebar from '../components/ui/Lifebar';
import Word from '../components/ui/Word';
import Keyboard from '../components/ui/Keyboard';
import { useState, useContext, useEffect } from 'react';
import { GameContext } from '../context/GameContext';
import data from '../assets/data.json';
import IconMenu from '../assets/images/icon-menu.svg?react';

function Game() {
  const {
    word,
    setWord,
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
    if (!category) return;

    if (newGame) {
      setAttemptsLeft(10);
      setGuessedLetters([]);
      setWord(getWord());
      setNewGame(false);
    }
  }, [category]);

  useEffect(() => {
    if (guessedLetters.length === 0) return;

    const lastGuess = guessedLetters[guessedLetters.length - 1];

    if (!word.includes(lastGuess)) {
      setAttemptsLeft((prev) => prev - 1);
    }
  }, [guessedLetters, word]);

  return (
    <>
      <header className="game--header">
        <button
          className="button--menu button--menu__back"
          onClick={toggleMenu}
        >
          <IconMenu />
        </button>
        <h1>{category}</h1>
        <Lifebar life={attemptsLeft} />
      </header>

      {word && <Word />}
      <Keyboard />
      {menuEnabled ? <Menu toggleMenu={toggleMenu} /> : ''}
    </>
  );

  function toggleMenu() {
    if (!menuEnabled) {
      setMenuEnabled(true);
      setStatus('paused');
    } else {
      setMenuEnabled(false);
      setStatus('playing');
    }
  }

  function getWord() {
    const items = data.categories[category];
    const available = items.filter((item) => !usedWords.includes(item.name));
    if (available.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * available.length);
    const chosen = available[randomIndex];
    setUsedWords([...usedWords, chosen.name]);
    return chosen.name.toLowerCase();
  }
}

export default Game;
