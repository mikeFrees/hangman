import './Key.css';
import { useState, useContext } from 'react';
import { GameContext } from '../../context/GameContext';

function Key({ value }) {
  const [enabled, setEnabled] = useState(true);
  const [clicked, setClicked] = useState(false);
  const { attemptsLeft, guessedLetters, setGuessedLetters } =
    useContext(GameContext);
  return (
    <div
      className={enabled ? 'keyboard--key' : 'keyboard--key disabled'}
      value={value}
      onClick={clicked ? undefined : () => submitLetter({ value })}
    >
      {value}
    </div>
  );

  function submitLetter(letter) {
    if (attemptsLeft > 0) {
      setClicked(true);
      setEnabled(false);
      setGuessedLetters([...guessedLetters, letter.value]);
    }
  }
}

export default Key;
