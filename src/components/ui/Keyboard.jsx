import './Keyboard.css';
import Key from './key';
import { useEffect, useContext } from 'react';
import { GameContext } from '../../context/GameContext';

function Keyboard() {
  const { attemptsLeft, setGuessedLetters } =
    useContext(GameContext);

  function submitLetter(letter) {
    if (attemptsLeft <= 0) return;

    setGuessedLetters((prev) => {
      if (prev.includes(letter)) return prev;
      return [...prev, letter];
    });
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();

      if (key.length !== 1 || key < 'a' || key > 'z') return;

      submitLetter(key);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [attemptsLeft]);

  return (
    <div className="keyboard">
      {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
        <Key key={letter} value={letter} />
      ))}
    </div>
  );
}

export default Keyboard;
