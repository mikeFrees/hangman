import { createContext, useState } from "react";

const GameContext = createContext(); // keep internal

export default function GameProvider({ children }) {
  const [status, setStatus] = useState("playing");
  const [category, setCategory] = useState(null);
  const [usedWords, setUsedWords] = useState([]);
  const [word, setWord] = useState(null);
  const [attemptsLeft, setAttemptsLeft] = useState(10);
  const [guessedLetters, setGuessedLetters] = useState([]);

  const value = {
    category,
    setCategory,
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
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export { GameContext };
