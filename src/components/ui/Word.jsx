import './Word.css';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

function Word() {
  const { word, guessedLetters,} = useContext(GameContext);

  if (!word) return null;

  const words = word.split(' ');

  const wordToGuess = words.map((part, partIndex) => (
    <div key={partIndex} className="word-part">
      {part.split('').map((letter, letterIndex) => (
        <div
          key={letterIndex}
          className={checkLetter(letter) ? 'letter hidden' : 'letter'}
        >
          {letter}
        </div>
      ))}
    </div>
  ));

  return <div className="word-container">{wordToGuess}</div>;

  function checkLetter(letter) {
    if (guessedLetters.includes(letter)) return false;
    else return true;
  }
}

export default Word;
