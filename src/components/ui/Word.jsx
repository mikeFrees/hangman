import './Word.css';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

function Word() {
  const { word } = useContext(GameContext);

  if (!word) return null;

  const words = word.split(' ');

  const wordToGuess = words.map((part, partIndex) => (
    <div key={partIndex} className="word-part">
      {part.split('').map((letter, letterIndex) => (
        <div key={letterIndex} className="letter hidden">
          {letter}
        </div>
      ))}
    </div>
  ));

  return <div className="word-container">{wordToGuess}</div>;
}

export default Word;
